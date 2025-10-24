'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game', 'dataSummons'], function (game, DataSummons) {
  //*******************************************************************************************************************
  // ** Battle Processing
  //*******************************************************************************************************************
  var Battle = function () {
    function Battle() {
      _classCallCheck(this, Battle);

      this.selecting = true;
      this.paused = false;
      this.victorious = false;
      this.defeated = false;
    }

    _createClass(Battle, [{
      key: 'update',
      value: function update() {
        var times = game.config.cheats && game.input.shiftDown ? 10 : 1;
        for (var i = 0; i < times; i++) {
          this.updateStates();
          this.updateTimers();
          this.updateMonsters();
          this.updatePlayer();
          this.updateProgression();
        }
      }
    }, {
      key: 'updateStates',
      value: function updateStates() {
        if (this.stopped() == false) {
          var combatants = game.encounter.monsters.concat([game.player]);
          combatants.forEach(function (unit) {
            var count = unit.states.length;
            unit.states.forEach(function (s) {
              return s.duration = Math.max(s.duration - 1, 0);
            });
            unit.states = unit.states.filter(function (s) {
              return s.duration > 0;
            });
            if (count !== unit.states.length) {
              unit.refreshStats();
            }
          });
          this.refreshStates();
          this.refreshMonsterStates();
        }
      }
    }, {
      key: 'refreshStates',
      value: function refreshStates() {
        var monsterCount = game.encounter.getActive().length;
        game.player.toggleState('iron', monsterCount == 1);
        game.player.toggleState('odds', monsterCount >= 3);
        game.player.toggleState('willpower', game.player.hp <= game.player.mhp * 0.5);
        game.player.toggleState('slowed', game.encounter.getActive().filter(function (m) {
          return m.slo > 0;
        }).length > 0);
        game.player.toggleState('attunement', (game.encounter.floor + 1) % 2 == 0);
        game.player.toggleState('caution', (game.encounter.floor + 1) % 2 != 0);
        game.player.toggleState('caution', (game.encounter.floor + 1) % 2 != 0);
      }
    }, {
      key: 'refreshMonsterStates',
      value: function refreshMonsterStates() {
        var monsters = game.encounter.getActive();
        var protectors = monsters.filter(function (m) {
          return m.mod == 'shielding';
        });
        var rejuvenators = monsters.filter(function (m) {
          return m.mod == 'rejuvenation';
        });
        monsters.forEach(function (m) {
          ['protected', 'rejuvenating', 'immune'].forEach(function (s) {
            return m.toggleState(s, false);
          });
        });
        protectors.forEach(function (protector) {
          var other = monsters.filter(function (m) {
            return m != protector;
          });
          other.forEach(function (m) {
            return m.toggleState('protected', true);
          });
        });
        rejuvenators.forEach(function (rejuvenator) {
          var other = monsters.filter(function (m) {
            return m != rejuvenator;
          });
          other.forEach(function (m) {
            return m.toggleState('rejuvenating', true);
          });
        });
        monsters.forEach(function (m) {
          return m.toggleState('immune', m.csh > 0 && game.encounter.getActive().length > 1);
        });
      }
    }, {
      key: 'updateTimers',
      value: function updateTimers() {
        game.player.timers.click = Math.max(game.player.timers.click - 1, 0);
        if (this.stopped() == false && this.transition() == false) {
          game.player.timers.attack = Math.max(game.player.timers.attack - 1, 0);
          game.player.timers.kill = Math.max(game.player.timers.kill - 1, 0);
          game.encounter.monsters.forEach(function (monster) {
            monster.timers.attack = Math.max(monster.timers.attack - 1, 0);
            monster.timers.secondary = Math.max(monster.timers.secondary - 1, 0);
          });
        }
        if (!this.paused) {
          game.encounter.monsters.forEach(function (monster) {
            monster.timers.damage = Math.max(monster.timers.damage - 1, 0);
            monster.timers.action = Math.max(monster.timers.action - 1, 0);
            monster.timers.appear = Math.max(monster.timers.appear - 1, 0);
            monster.timers.death = Math.max(monster.timers.death - 1, 0);
          });
        }
      }
    }, {
      key: 'updateMonsters',
      value: function updateMonsters() {
        this.updateMonsterAttacks();
        this.updateMonsterSecondary();
        this.updateMonsterRegen();
      }
    }, {
      key: 'updateMonsterAttacks',
      value: function updateMonsterAttacks() {
        var _this = this;

        game.encounter.monsters.forEach(function (monster) {
          if (monster.timers.attack == 0) {
            if (monster.hp > 0) {
              game.audio.playSound('hit');
              game.player.applyAttack(monster);
              game.player.hitCount += 1;
            }
            monster.resetAttackTimer();

            game.player.triggerGoblets();
            if (game.player.hp == 0) {
              game.player.trigger('rev', 1, { monsters: game.encounter.monsters });
            }
            if (game.player.hp < game.player.mhp * 0.4 && game.player.hp != 0) {
              game.player.trigger('res');
            }
            if (game.player.hp == 0) {
              _this.encounterLost();
            }
          }
        });
      }
    }, {
      key: 'updateMonsterSecondary',
      value: function updateMonsterSecondary() {
        var alive = game.encounter.getActive().filter(function (m) {
          return m.hp > 0;
        });
        alive.forEach(function (monster) {
          if (monster.smn > 0 && monster.timers.secondary == 0 && game.player.timers.attack > 0) {
            var data = DataSummons.active[monster.smn];
            game.encounter.summon(monster, data);
            monster.resetSecondaryTimer();
          }
        });
      }
    }, {
      key: 'updateMonsterRegen',
      value: function updateMonsterRegen() {
        var _this2 = this;

        if (this.stopped() == false) {
          var alive = game.encounter.getActive();
          alive.forEach(function (monster) {
            _this2.restoreMonsterHealth(monster);
          });
        }
      }
    }, {
      key: 'updatePlayer',
      value: function updatePlayer() {
        if (game.player.timers.attack == 0) {
          this.playerAttack();
          game.player.attackCount += 1;
          game.player.timers.attack = 100 / game.player.aps * 60;
        }
        if (this.stopped() == false) {
          this.restorePlayerHealth();
        }
        if (game.player.timers.kill == 0) {
          game.player.trigger('std');
        }
      }
    }, {
      key: 'playerAttack',
      value: function playerAttack() {
        //debugger
        var monsters = game.encounter.getActive();
        var target = game.player.target;

        var specialAttack = game.player.getSpecialAttack();

        if (specialAttack) {
          var targets = game.encounter.getTargets(target, specialAttack);
          targets.forEach(function (t) {
            return t.applyAttack(game.player, specialAttack);
          });
          game.audio.playSound('attack');
        } else {
          target.applyAttack(game.player);
          if (game.player.spl > 0) {
            var original = target.getDamage(game.player, 'default');
            var splash = game.encounter.getTargets(target, 'spl');
            splash.forEach(function (t) {
              return t.applyAttack(game.player, 'spl', original);
            });
          }
          game.audio.playSound('attack');
        }
        this.processDeadMonsters(monsters);
      }
    }, {
      key: 'updateProgression',
      value: function updateProgression() {
        if (game.player.hp == 0) {
          this.encounterLost();
        }
        if (game.encounter.monsters.every(function (m) {
          return m.hp == 0 && m.timers.death == 0;
        })) {
          this.encounterWon();
        }
      }
    }, {
      key: 'processDeadMonsters',
      value: function processDeadMonsters(monsters) {
        var _this3 = this;

        monsters.forEach(function (monster) {
          if (monster.hp == 0 || monster.retreat()) {
            monster.hp = 0;
            monster.timers.death = monster.timers.damage + 5;
            game.player.timers.kill = 120;
            game.loot.distribute(monster);
            game.player.trigger('ala', Infinity);
            if (game.player.stateActive('vigour')) {
              game.player.trigger('vig', Infinity);
            }
            if (game.player.abs > 0 && monster.modData && monster.modData.icon > 0) {
              game.player.hp = Math.min(game.player.hp + game.player.mhp * game.player.abs / 100, game.player.mhp);
            }
            if (monster.div > 0) {
              var otherDeadSummoners = monsters.filter(function (m) {
                return m !== monster && m.div > 0 && m.hp == 0;
              });
              var additionalSummonCount = otherDeadSummoners.reduce(function (t, m) {
                return t + DataSummons.ondeath[m.div].count;
              }, 0);
              game.encounter.summon(monster, DataSummons.ondeath[monster.div], additionalSummonCount);
              otherDeadSummoners.forEach(function (m) {
                return m.summonCount += 1;
              });
            }
            if (monster.summoned && !(monster.smn > 0)) {
              monsters.forEach(function (m) {
                return m.resetSecondaryTimer();
              });
            }
            monsters.forEach(function (other) {
              if (other.dfl > 0 && other != monster) {
                other.hp = Math.max(Math.floor(other.hp - other.dfl / 100 * other.mhp), 0);
              }
            });
            game.encounter.removeMonster(monster);
            if (monster == game.player.target) {
              _this3.autoTarget();
            }
            game.statistics.submitMonstersKilled();
          }
        });
      }
    }, {
      key: 'restorePlayerHealth',
      value: function restorePlayerHealth() {
        var regen = game.player.hpr / 60 - game.player.deg * (1 - game.player.blo / 100) / 60;
        game.player.hp = Math.max(Math.min(game.player.hp + regen, game.player.mhp), 0);
        game.player.triggerGoblets();
        if (game.player.hp == 0) {
          game.player.trigger('rev', 1, { monsters: game.encounter.monsters });
        }
        if (game.player.hp < game.player.mhp * 0.4 && game.player.hp != 0) {
          game.player.trigger('res');
        }
      }
    }, {
      key: 'restoreMonsterHealth',
      value: function restoreMonsterHealth(monster) {
        var regen = monster.hpr / 60;
        monster.hp = Math.max(Math.min(Math.ceil(monster.hp + regen), monster.mhp), 0);
      }
    }, {
      key: 'encounterWon',
      value: function encounterWon() {
        if (game.encounter.floor == game.world.area.length - 1) {
          this.victorious = true;
          game.loot.giveAreaLoot(game.world.area);
          game.world.area.furthestReached = game.world.area.length;
        } else {
          this.nextEncounter();
        }
      }
    }, {
      key: 'encounterLost',
      value: function encounterLost() {
        this.defeated = true;
      }
    }, {
      key: 'nextEncounter',
      value: function nextEncounter() {
        game.encounter = game.world.area.nextEncounter();
        game.world.area.furthestReached = Math.max(game.encounter.floor, game.world.area.furthestReached);
        this.autoTarget();
        game.player.applySlow(game.encounter);
        game.player.timers.attack = 100 / game.player.aps * 60;
        if ((game.encounter.floor + 1) % 3 == 0) {
          game.player.es = Math.min(game.player.es + game.player.mhp * game.player.rec / 100, game.player.mhp * game.player.mes / 100);
        }
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.defeated = false;
        this.victorious = false;
        game.player.timers.attack = 100 / game.player.aps * 60;
        game.player.timers.kill = 120;
      }
    }, {
      key: 'autoTarget',
      value: function autoTarget() {
        var target = game.encounter.getActive().sort(function (a, b) {
          return a.hp - b.hp;
        })[0];
        game.player.target = target;
      }
    }, {
      key: 'stopped',
      value: function stopped() {
        return this.paused || this.defeated || this.victorious || this.selecting;
      }
    }, {
      key: 'transition',
      value: function transition() {
        return game.encounter.monsters.every(function (m) {
          return m.hp == 0;
        }) && game.encounter.monsters.find(function (m) {
          return m.timers.death > 0;
        });
      }
    }, {
      key: 'superAttack',
      value: function superAttack(monster) {
        if (monster == game.player.target && game.player.sup > 0 && game.player.timers.click > 0 && game.player.used.sup == 0) {
          game.player.target.applyAttack(game.player, 'sup');
          game.player.used.sup += 1;
          game.audio.playSound('attack');
          this.processDeadMonsters(game.encounter.getActive());
        }
      }
    }, {
      key: 'superFreeze',
      value: function superFreeze(monster) {
        if (game.player.fre > 0 && game.player.used.fre == 0) {
          monster.freeze(2);
          game.player.used.fre += 1;
          game.audio.playSound('put');
        }
      }
    }]);

    return Battle;
  }();

  return Battle;
});
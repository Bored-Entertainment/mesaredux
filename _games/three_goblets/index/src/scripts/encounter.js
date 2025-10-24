'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['monster', 'dataMonsters'], function (Monster, DataMonsters) {
  //*******************************************************************************************************************
  // ** An Encounter
  //*******************************************************************************************************************
  var Encounter = function () {
    function Encounter(floor) {
      _classCallCheck(this, Encounter);

      this.floor = floor;
      this.monsters = [];
      this.active = [];
      this.monstersChanged = true;
      this.monsterCenter = 0;
    }

    _createClass(Encounter, [{
      key: 'getTargets',
      value: function getTargets(monster, type) {
        switch (type) {
          case 'cri':
            return [monster];break;
          case 'swp':
            return this.getActive();break;
          case 'cas':
            return this.getActive();break;
          case 'spl':
            return this.getSplashTargets(monster);break;
          default:
            [monster];
        }
      }
    }, {
      key: 'getSplashTargets',
      value: function getSplashTargets(monster) {
        var _this = this;

        var targets = [];
        var index = this.active.indexOf(monster);
        var surrounding = [-1, 1];
        surrounding.forEach(function (dir) {
          var withinBounds = index + dir >= 0 && index + dir < _this.active.length;
          var monster = _this.active[index + dir];
          var alive = monster && monster.hp > 0;
          if (withinBounds && monster && alive) {
            targets.push(monster);
          }
        });
        return targets;
      }
    }, {
      key: 'getActive',
      value: function getActive() {
        return this.active.filter(function (m) {
          return m;
        });
      }
    }, {
      key: 'removeMonster',
      value: function removeMonster(monster) {
        var id = this.active.indexOf(monster);
        this.active[id] = null;
      }
      //*******************************************************************************************************************
      // * Summoning
      //*******************************************************************************************************************

    }, {
      key: 'summon',
      value: function summon(summoner, data) {
        var additionalSummonCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        var summonerIndex = this.active.indexOf(summoner);
        var summonStartIndex = this.getSummonStartIndex(summoner, summonerIndex, data.count + additionalSummonCount);
        for (var i = 0; i < data.count; i++) {
          if (this.getActive().filter(function (m) {
            return m.summoned && m != summoner;
          }).length >= data.upto) {
            break;
          }

          var name = data.monsters[Math.floor(Math.random() * data.monsters.length)];
          var monster = new Monster(name);
          monster.summoned = true;
          monster.timers.appear = 5;

          if (data.mods.length > 0) {
            var frequency = data.modFrequency || 1;
            if (summoner.summonCount % frequency == 0) {
              var modName = '';
              if (data.orderMods) {
                modName = data.mods[summoner.summonCount / frequency % data.mods.length];
              } else {
                modName = data.mods[Math.floor(Math.random() * data.mods.length)];
              }
              monster.applyMod(modName);
            }
          }
          monster.resetAttackTimer();
          monster.setStartingStates();

          //console.log('before: ', this.active.slice());

          var l = this.getSummonDirection(summoner.summonCount);
          for (var _i = summonStartIndex; l ? _i >= 0 : _i < 12; l ? _i-- : _i++) {
            if (!this.getMonsterAt(_i)) {
              this.active[_i] = monster;
              break;
            }
          }

          this.monsters.push(monster);
          summoner.summonCount += 1;
          this.summonCount += 1;

          //console.log('after: ', this.active.map(m => m && m.hp > 0 ? m : 'dead'));
        }
      }
    }, {
      key: 'getSummonStartIndex',
      value: function getSummonStartIndex(summoner, summonerIndex, summonCount) {
        if (this.getActive().every(function (m) {
          return m.hp == 0;
        })) {
          var center = 3 + summonCount / 2;
          this.monsterCenter = center;
          return Math.floor(center) + (summonCount % 2 == 0 ? -1 : 0);
        } else if (summoner.hp == 0 && this.monsterCountBalance() !== 0) {
          return Math.floor(this.monsterCenter);
        } else if (summoner.hp > 0 || this.getMonsterAt(summonerIndex + 1) || this.getMonsterAt(summonerIndex - 1)) {
          return summonerIndex;
        } else {
          var index = this.active.findIndex(function (m) {
            return m && m.hp > 0;
          });
          return index;
        }
      }
    }, {
      key: 'getSummonDirection',
      value: function getSummonDirection(summonCount) {
        var balance = this.monsterCountBalance();
        return balance == 0 ? summonCount % 2 == 0 : balance > 0;
      }
    }, {
      key: 'monsterCountBalance',
      value: function monsterCountBalance() {
        var left = this.active.slice(0, Math.ceil(this.monsterCenter)).filter(function (m) {
          return m && m.hp > 0;
        }).length;
        var right = this.active.slice(Math.floor(this.monsterCenter), this.active.length).filter(function (m) {
          return m && m.hp > 0;
        }).length;
        return right - left;
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'getMonsterAt',
      value: function getMonsterAt(index) {
        var monster = index < 0 ? null : this.active[index];
        if (monster && monster.hp > 0) {
          return monster;
        }
      }
    }]);

    return Encounter;
  }();

  return Encounter;
});
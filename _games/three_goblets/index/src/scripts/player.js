'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['stats', 'dataPassives'], function (Stats, DataPassives) {
  //*******************************************************************************************************************
  // ** The Player
  //*******************************************************************************************************************
  var Player = function () {
    function Player() {
      _classCallCheck(this, Player);

      this.timers = { attack: 50, click: 0, kill: 120 };
      this.used = { res: 0, ala: 0, buf: 0, spe: 0, hph: 0, dod: 0, rev: 0, std: 0, sup: 0, fre: 0 };
      this.attackCount = 0;
      this.hitCount = 0;
      this.target = null;
      this.items = [];
      this.equips = [];
      this.goblets = [];
      this.states = [];
      this.equipSlots = [true, true, true, true, false, false, false];
      this.basicStats = new Stats();
      this.basicSpent = { mhp: 0, dmg: 0, arm: 0, aps: 0 };
      this.lvl = 1;
      this.exp = 0;
      this.lvlTiers = [];
      this.passivePoints = 0;
      this.basicPoints = 0;
      this.initializeStats();
      this.initializeLevelTiers();
      this.initializePassives();
      this.refreshStats();
      this.hp = this.mhp;
      this.es = 0;
    }

    _createClass(Player, [{
      key: 'initializeStats',
      value: function initializeStats() {
        this.baseStats = new Stats();
        this.baseStats.mhp = 25;
        this.baseStats.dmg = 6;
        this.baseStats.arm = 2;
        this.baseStats.aps = 120;
      }
    }, {
      key: 'initializeLevelTiers',
      value: function initializeLevelTiers() {
        this.lvlTiers[0] = 0;
        for (var i = 0; i < 200; i++) {
          var prev = this.lvlTiers[i - 1] || 0;
          var need = Math.round(20 * i + 5 * Math.pow(i, 2));
          this.lvlTiers[i + 1] = prev + need;
        }
      }
    }, {
      key: 'initializePassives',
      value: function initializePassives() {
        var _this = this;

        this.passives = [];
        DataPassives.forEach(function (data) {
          var passive = {};
          passive.stats = new Stats();
          passive.stats.addFromData(data);
          passive.icon = data.icon;
          passive.tooltip = data.tooltip;
          passive.active = false;
          _this.passives.push(passive);
        });
      }
    }, {
      key: 'reset',
      value: function reset() {
        var _this2 = this;

        this.attackCount = 0;
        this.hitCount = 0;
        Object.keys(this.used).forEach(function (n) {
          return _this2.used[n] = 0;
        });
        this.states = [];
        this.trigger('irn');
        this.trigger('wcr');
        this.trigger('wil');
        this.trigger('ods');
        this.trigger('dod');
        this.trigger('vig');
        this.trigger('atu');
        this.trigger('cau');
        this.refreshStats();
        this.hp = this.mhp;
        this.es = Math.round(this.mhp * this.mes / 100);
      }
    }, {
      key: 'gainExperience',
      value: function gainExperience(exp) {
        var _this3 = this;

        var lvlCurrent = this.lvl;
        this.exp += exp;
        this.lvl = this.lvlTiers.findIndex(function (n, i) {
          return _this3.exp >= n && _this3.exp < _this3.lvlTiers[i + 1];
        });
        var levelsGained = this.lvl - lvlCurrent;
        for (var level = this.lvl + 1 - levelsGained; level <= this.lvl; level++) {
          this.gainLevel(level);
        }
      }
    }, {
      key: 'gainLevel',
      value: function gainLevel(level) {
        this.passivePoints += level % 3 == 0 ? 1 : 0;
        this.basicPoints += 1;
        this.refreshStats();
      }
    }, {
      key: 'gainItem',
      value: function gainItem(item) {
        this.items.push(item);
      }
    }, {
      key: 'equipItem',
      value: function equipItem(item, index) {
        this.equips[index] = item;
        this.refreshStats();
        this.reset();
      }
    }, {
      key: 'unequipItem',
      value: function unequipItem(item, index) {
        this.equips[index] = null;
        this.refreshStats();
        this.reset();
      }
    }, {
      key: 'activePassives',
      value: function activePassives() {
        return this.passives.filter(function (p) {
          return p.active;
        });
      }
    }, {
      key: 'refreshStats',
      value: function refreshStats() {
        var _this4 = this;

        var stats = new Stats();
        var baseStats = [this.baseStats];
        var basicStats = [this.basicStats];
        var itemStats = this.equips.filter(function (i) {
          return i;
        }).map(function (i) {
          return i.stats;
        });
        var passiveStats = this.activePassives().map(function (p) {
          return p.stats;
        });
        var stateStats = this.states.filter(function (s) {
          return s.active;
        }).map(function (b) {
          return b.stats;
        });
        var all = baseStats.concat(itemStats).concat(passiveStats).concat(stateStats).concat(basicStats);

        stats.append(all);
        var final = stats.final();
        final.forEach(function (s) {
          return _this4[s.name] = s.value;
        });
      }
      //*******************************************************************************************************************
      // * Battle
      //*******************************************************************************************************************

    }, {
      key: 'addState',
      value: function addState(icon, name, data, duration) {
        var active = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        var state = { icon: icon, name: name, stats: new Stats(), duration: duration * 60, active: active };
        state.stats.addFromData(data);
        this.states.push(state);
        this.refreshStats();
      }
    }, {
      key: 'applyAttack',
      value: function applyAttack(attacker) {
        attacker.timers.action = 15;
        if (this.stateActive('dodge') && attacker.specialAttack() && !(attacker.poi > 0 && this.es > 0)) {
          this.toggleState('dodge', false);
          return;
        }
        var damage = attacker.dmg - Math.floor(attacker.dmg * 1 / Math.pow(2, attacker.dmg / this.arm));
        damage = Math.round(damage * (1 - this.blo / 100));
        if (this.es > 0) {
          this.es = Math.max(this.es - Math.max(damage, 0), 0);
        } else {
          this.hp = Math.max(this.hp - Math.max(damage, 0), 0);
          if (attacker.poi > 0) {
            this.addState(1, 'poison', { added: [['mhp', 'deg', attacker.poi / 100]] }, Infinity);
          }
        }
        if (attacker.det > 0) {
          this.hp = Math.max((this.hp - attacker.det * this.mhp, 0), 0);
        }
        if (attacker.wea > 0 && this.states.filter(function (s) {
          return s.name == 'weakness';
        }).length < 3) {
          this.addState(13, 'weakness', { multis: [['dmg', 1 - attacker.wea / 100], ['aps', 1 - attacker.wea / 100]] }, Infinity);
        }
      }
    }, {
      key: 'specialAttack',
      value: function specialAttack(name) {
        return this[name] > 0 && (this.attackCount + 1) % this[name] == 0;
      }
    }, {
      key: 'getSpecialAttack',
      value: function getSpecialAttack() {
        var _this5 = this;

        var specials = ['cas', 'swp', 'cri'];
        return specials.find(function (s) {
          return _this5.specialAttack(s);
        });
      }
    }, {
      key: 'trigger',
      value: function trigger(name) {
        var uses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if ((this[name] > 0 || args.isGoblet) && (this.used[name] < uses || !this.used[name])) {
          switch (name) {
            case 'res':
              this.hp += this[name] / 100 * this.mhp;break;
            case 'ala':
              this.addState(2, 'alacrity', { inc: [['aps', this[name] / 100]] }, 2);break;
            case 'irn':
              this.addState(3, 'iron', { multis: [['arm', this[name] / 100]] }, Infinity, false);break;
            case 'wcr':
              this.addState(4, 'warcry', { multis: [['dmg', this[name] / 100]] }, 3);break;
            case 'wil':
              this.addState(5, 'willpower', { stats: [['blo', this[name]]] }, Infinity, false);break;
            case 'ods':
              this.addState(6, 'odds', { multis: [['dmg', this[name] / 100]] }, Infinity, false);break;
            case 'vig':
              this.removeState('vigour');this.addState(11, 'vigour', { added: [['mhp', 'hpr', this[name] / 100]] }, 3);break;
            case 'atu':
              this.addState(14, 'attunement', { inc: [['dmg', this[name] / 100]] }, Infinity, false);break;
            case 'cau':
              this.addState(15, 'caution', { stats: [['arm', this[name]]] }, Infinity, false);break;
            case 'std':
              this.addState(16, 'stand', { inc: [['dmg', 0.15], ['arm', 0.30]] }, this[name]);break;

            case 'dod':
              this.addState(10, 'dodge', {}, Infinity, true);break;
            case 'rev':
              this.hp = this.mhp * this[name] / 100;args.monsters.forEach(function (m) {
                return m.freeze(2);
              });break;

            case 'buf':
              this.addState(8, 'buff', args.stats, args.duration);break;
            case 'spe':
              this.trigger('men');this.addState(7, 'speed', args.stats, args.duration);break;
            case 'hph':
              this.trigger('rar');this.trigger('ren');this.addState(9, 'heal', args.stats, args.duration);break;
            case 'men':
              this.removeState('poison');this.removeState('weakness');break;
            case 'rar':
              this.used.sup = 0;this.used.fre = 0;break;
            case 'ren':
              this.es = Math.round(this.mhp * this.mes / 100);break;
          }
          this.used[name] += 1;
        }
      }
    }, {
      key: 'toggleState',
      value: function toggleState(name, active) {
        var state = this.states.find(function (s) {
          return s.name == name;
        });
        if (state && state.active !== active) {
          state.active = active;
          this.refreshStats();
        }
      }
    }, {
      key: 'removeState',
      value: function removeState(name) {
        this.states = this.states.filter(function (s) {
          return s.name != name;
        });
      }
    }, {
      key: 'stateActive',
      value: function stateActive(name) {
        return this.states.find(function (s) {
          return s.active && s.name == name;
        });
      }
    }, {
      key: 'triggerGoblets',
      value: function triggerGoblets() {
        var _this6 = this;

        this.goblets.forEach(function (goblet, index) {
          if (goblet && _this6.hp <= _this6.mhp * 0.25 * (index + 1)) {
            _this6.trigger(goblet.mainStat.name, 1, { stats: goblet.getStateStats(_this6), duration: goblet.getDuration(_this6), isGoblet: true });
          }
        });
      }
    }, {
      key: 'applySlow',
      value: function applySlow(encounter) {
        var slowers = encounter.getActive().filter(function (m) {
          return m.slo > 0;
        });
        if (slowers.length > 0) {
          var slowAmount = -(slowers[0].slo / 100);
          this.removeState('slowed');
          this.addState(12, 'slowed', { inc: [['aps', slowAmount]] }, Infinity);
        }
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'itemTypeAtIndex',
      value: function itemTypeAtIndex(index) {
        var types = [0, 1, 2, 3, 4, 4, 5];
        return types[index];
      }
    }, {
      key: 'unlockedItemType',
      value: function unlockedItemType(type) {
        var _this7 = this;

        return this.equipSlots.find(function (s, i) {
          return s && _this7.itemTypeAtIndex(i) == type;
        });
      }
    }, {
      key: 'unlockEquipSlot',
      value: function unlockEquipSlot(index) {
        this.equipSlots[index] = true;
      }
    }]);

    return Player;
  }();

  return Player;
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['dataMonsters', 'stats', 'dataMonsterMods', 'dataSummons'], function (DataMonsters, Stats, DataMonsterMods, DataSummons) {
  //*******************************************************************************************************************
  // ** A Monster
  //*******************************************************************************************************************
  var Monster = function () {
    function Monster(name) {
      _classCallCheck(this, Monster);

      this.name = name;
      this.data = DataMonsters[name];
      if (!this.data) debugger;
      this.graphic = this.data.graphic;
      this.level = this.data.level;
      this.unique = this.data.unique;
      this.goblet = this.data.goblet || null;
      this.reward = this.data.reward || (this.unique ? 3 : 1);
      this.timers = { attack: Infinity, damage: 0, action: 0, appear: 0, death: 0, secondary: 0 };
      this.lastAttackType = null;
      this.states = [];
      this.summonCount = 0;
      this.initializeStats();
      this.refreshStats();
      this.hp = this.mhp;
    }

    _createClass(Monster, [{
      key: 'initializeStats',
      value: function initializeStats() {
        this.baseStats = new Stats();
        this.baseStats.mhp = Math.round((8 * this.level + 4 * Math.pow(this.level, 2)) * this.data.mhp);
        this.baseStats.dmg = Math.round((2 * this.level + 1 * Math.pow(this.level, 2) + 0.05 * Math.pow(this.level, 3)) * this.data.dmg);
        this.baseStats.arm = Math.round(1 * Math.pow(this.level, 2) + 0.20 * Math.pow(this.level, 3));
        this.baseStats.aps = this.data.aps + Math.floor(Math.random() * this.data.aps / 12);
      }
    }, {
      key: 'applyMod',
      value: function applyMod(name) {
        var mod = DataMonsterMods[name];
        this.modStats = new Stats();
        this.modStats.addFromData(mod);
        this.refreshStats();
        this.mod = name;
        this.modData = mod;
        this.reward += 1;
        this.hp = this.mhp;
      }
    }, {
      key: 'refreshStats',
      value: function refreshStats() {
        var _this = this;

        var stats = new Stats();
        var baseStats = [this.baseStats];
        var stateStats = this.states.filter(function (s) {
          return s.active;
        }).map(function (b) {
          return b.stats;
        });
        var modStats = this.modStats ? [this.modStats] : [];
        var all = baseStats.concat(stateStats).concat(modStats);

        stats.append(all);
        var final = stats.final();
        final.forEach(function (s) {
          return _this[s.name] = s.value;
        });
      }
    }, {
      key: 'applyAttack',
      value: function applyAttack(attacker) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
        var original = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        var damage = this.getDamage(attacker, type, original);
        this.hp = Math.max(this.hp - damage, 0);
        attacker.hp = Math.min(attacker.hp + attacker.lfl * damage / 100, attacker.mhp);
        this.timers.damage = 7;
        this.lastAttackType = type;
      }
    }, {
      key: 'getDamage',
      value: function getDamage(attacker, type, original) {
        var multipliers = { cri: 2, cas: 4, sup: 2 };
        var base = attacker.dmg * (multipliers[type] || 1);
        var damage = base - Math.floor(base * 1 / Math.pow(2, base / this.arm));
        if (type == 'spl') {
          damage = original * attacker.spl / 100;
        }
        damage *= Math.max(1 - this.pro / 100, 0);
        return Math.round(damage);
      }
    }, {
      key: 'resetAttackTimer',
      value: function resetAttackTimer() {
        this.timers.attack = 100 / this.aps * 60;
      }
    }, {
      key: 'resetSecondaryTimer',
      value: function resetSecondaryTimer() {
        this.timers.secondary = Math.max(DataSummons.active[this.smn].timer || 0, this.timers.secondary);
      }
    }, {
      key: 'setStartingStates',
      value: function setStartingStates() {
        this.addState('protected', { stats: [['pro', 75]] }, Infinity, false);
        this.addState('rejuvenating', { added: [['mhp', 'hpr', 0.35]] }, Infinity, false);
        this.addState('immune', { stats: [['pro', 100]] }, Infinity, false);
      }
    }, {
      key: 'addState',
      value: function addState(name, data, duration) {
        var active = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        var state = { name: name, stats: new Stats(), duration: duration * 60, active: active };
        state.stats.addFromData(data);
        this.states.push(state);
        this.refreshStats();
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
      key: 'stateActive',
      value: function stateActive(name) {
        return this.states.find(function (s) {
          return s.active && s.name == name;
        }) !== undefined;
      }
    }, {
      key: 'freeze',
      value: function freeze(time) {
        this.timers.attack += time * 60;
        this.timers.secondary += time * 60;
        if (this.stateActive('freeze')) {
          this.states.find(function (s) {
            return s.name == 'freeze';
          }).duration += time * 60;
        } else {
          this.addState('freeze', {}, time);
        }
      }
    }, {
      key: 'specialAttack',
      value: function specialAttack() {
        return this.mod && this.modData.specialAttack;
      }
    }, {
      key: 'retreat',
      value: function retreat() {
        return this.ret > 0 && this.hp <= this.mhp * this.ret / 100;
      }
    }]);

    return Monster;
  }();

  return Monster;
});
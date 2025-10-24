'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['encounter', 'monster', 'dataMonsters'], function (Encounter, Monster, DataMonsters) {
  //*******************************************************************************************************************
  // ** The Encounter Generator
  //*******************************************************************************************************************
  var EncounterGenerator = function () {
    function EncounterGenerator() {
      _classCallCheck(this, EncounterGenerator);
    }

    _createClass(EncounterGenerator, [{
      key: 'setup',
      value: function setup(floor, data, level) {
        this.floor = floor;
        this.data = data;
        this.level = level;
        this.encounter = new Encounter(floor);
        this.monsters = [];
      }
    }, {
      key: 'generate',
      value: function generate(floor, data, level) {
        this.setup(floor, data, level);
        this.generateMonsters();
        this.setStartingStates();
        this.setTimers();
        this.finalize();
        return this.encounter;
      }
    }, {
      key: 'generateMonsters',
      value: function generateMonsters() {
        var custom = this.data;
        if (custom) {
          this.generateCustomMonsters(custom);
        } else {
          this.generateRandomMonsters();
        }
      }
    }, {
      key: 'generateCustomMonsters',
      value: function generateCustomMonsters(custom) {
        var _this = this;

        custom.forEach(function (param, index) {
          var _monsters;

          var monsters = [];
          var insertAt = _this.getInsertPosition(param);
          if (typeof param == 'string') {
            var name = param;
            monsters = [new Monster(name)];
          } else if (param.a) {
            monsters = param.a.map(function (n) {
              return new Monster(n);
            });
          } else {
            monsters = _this.generatePseudorandom(param);
          }
          _this.applyMods(monsters, index);
          (_monsters = _this.monsters).splice.apply(_monsters, [insertAt, 0].concat(_toConsumableArray(monsters)));
        });
      }
    }, {
      key: 'generatePseudorandom',
      value: function generatePseudorandom(param) {
        var monsters = [];
        var level = param.l;
        var count = param.n;
        level = this.level + (level - 1);
        for (var i = 0; i < count; i++) {
          var possible = this.getRandomPossibleMonsters(level);
          var name = possible[Math.floor(Math.random() * possible.length)];
          monsters.push(new Monster(name));
        }
        return monsters;
      }
    }, {
      key: 'generateRandomMonsters',
      value: function generateRandomMonsters() {
        var count = this.getRandomMonsterCount();
        for (var i = 0; i < count; i++) {
          var level = this.level + Math.floor(this.floor / 3) * 2 + 1;
          var possible = this.getRandomPossibleMonsters(level);
          var name = possible[Math.floor(Math.random() * possible.length)];
          this.monsters.push(new Monster(name));
        }
      }
    }, {
      key: 'getRandomMonsterCount',
      value: function getRandomMonsterCount() {
        var additional = [2, 5].includes(this.level) ? 1 : 0;
        return 2 + Math.floor(Math.random() * 2) + additional;
      }
    }, {
      key: 'getRandomPossibleMonsters',
      value: function getRandomPossibleMonsters(level) {
        var entries = Object.entries(DataMonsters);
        var possible = entries.filter(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              n = _ref2[0],
              m = _ref2[1];

          return m.level == level && !m.unique;
        });
        if (possible.length == 0) {
          var closest = entries.slice().sort(function (_ref3, _ref4) {
            var _ref6 = _slicedToArray(_ref3, 2),
                an = _ref6[0],
                a = _ref6[1];

            var _ref5 = _slicedToArray(_ref4, 2),
                bn = _ref5[0],
                b = _ref5[1];

            return Math.abs(a.level - level) - Math.abs(b.level - level);
          });
          possible = closest.filter(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                n = _ref8[0],
                m = _ref8[1];

            return !m.unique;
          }).slice(0, 2);
        }
        possible = possible.map(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              n = _ref10[0],
              m = _ref10[1];

          return n;
        });
        return possible;
      }
    }, {
      key: 'applyMods',
      value: function applyMods(monsters, index) {
        var mod = this.data[index].m;
        if (mod) {
          var monster = monsters[Math.floor(Math.random() * monsters.length)];
          monster.applyMod(mod);
        }
      }
    }, {
      key: 'setStartingStates',
      value: function setStartingStates() {
        this.monsters.forEach(function (m) {
          return m.setStartingStates();
        });
      }
    }, {
      key: 'setTimers',
      value: function setTimers() {
        var _this2 = this;

        var alive = this.monsters.filter(function (m) {
          return m.hp > 0;
        });
        alive.forEach(function (monster) {
          monster.resetAttackTimer();
          monster.resetSecondaryTimer();
          if (_this2.floor > 0) {
            monster.timers.appear = 5;
          }
        });
      }
    }, {
      key: 'finalize',
      value: function finalize() {
        this.encounter.monsters = this.monsters.slice();
        this.encounter.active = [null, null, null].concat(this.monsters);
        this.encounter.monsterCenter = 3 + this.monsters.length / 2;
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'parseMonsterData',
      value: function parseMonsterData(string) {
        var levelData = this.getMatch(string, /(.*)\s*\)/g);
        var countData = this.getMatch(string, /\)\s*([0-9\-]*)/g);
        var level = Number(levelData);
        var range = countData.split('-').map(function (s) {
          return Number(s);
        });
        var min = range[0];
        var max = range[1] || min;
        var count = min + Math.floor(Math.random() * (max - min + 1));
        return { level: level, count: count };
      }
    }, {
      key: 'getMatch',
      value: function getMatch(string, regexp) {
        var matches = regexp.exec(string);
        return matches ? matches[1] : '';
      }
    }, {
      key: 'getInsertPosition',
      value: function getInsertPosition(param) {
        if (param.i == 'r') {
          return Math.floor(Math.random() * this.monsters.length);
        } else {
          return param.i || this.monsters.length;
        }
      }
    }]);

    return EncounterGenerator;
  }();

  return EncounterGenerator;
});
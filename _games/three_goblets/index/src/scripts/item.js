'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['dataItems', 'dataAffixes', 'stats'], function (DataItems, DataAffixes, Stats) {
  //*******************************************************************************************************************
  // ** Item
  //*******************************************************************************************************************
  var Item = function () {
    function Item(level, type, rarity) {
      _classCallCheck(this, Item);

      this.level = level;
      this.type = type;
      this.rarity = rarity;
      this.data = DataItems[type];
      this.icon = this.data.icon;
      this.unique = false;
      this.initializeStats();
      this.generate();
      this.addAffixes();
    }

    _createClass(Item, [{
      key: 'initializeStats',
      value: function initializeStats() {
        this.stats = new Stats();
      }
    }, {
      key: 'generate',
      value: function generate() {
        var _this = this;

        var stats = this.data.stats || [];
        var multis = this.data.multis || [];
        stats.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              stat = _ref2[0],
              base = _ref2[1],
              curveId = _ref2[2];

          _this.stats[stat] = _this.getRoundedStat(Math.ceil(_this.getValue(base, curveId)));
        });
        multis.forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 3),
              stat = _ref4[0],
              base = _ref4[1],
              curveId = _ref4[2];

          _this.stats.multis[stat].push((1 + _this.getValue(base, curveId) / 100).toFixed(2));
        });
      }
    }, {
      key: 'addAffixes',
      value: function addAffixes() {
        var _this2 = this;

        var possible = DataAffixes.filter(function (a) {
          return a.gear.includes(_this2.type) && (a.level || 0) <= _this2.level;
        });
        var affixCount = Math.min(this.getAffixCount(), possible.length);
        for (var i = 0; i < affixCount; i++) {
          var affix = possible.splice(Math.floor(Math.random() * possible.length), 1)[0];
          this.applyAffix(affix);
        }
      }
    }, {
      key: 'applyAffix',
      value: function applyAffix(affix) {
        if (affix.stat) {
          var _affix$stat = _slicedToArray(affix.stat, 2),
              name = _affix$stat[0],
              base = _affix$stat[1];

          this.stats[name] += this.getRoundedStat(Math.ceil(this.getValue(base, affix.curve)));
        } else if (affix.inc) {
          var _affix$inc = _slicedToArray(affix.inc, 2),
              _name = _affix$inc[0],
              _base = _affix$inc[1];

          this.stats.inc[_name] += Number((this.getValue(_base, affix.curve) / 100).toFixed(2));
        } else if (affix.multi) {
          var _affix$multi = _slicedToArray(affix.multi, 2),
              _name2 = _affix$multi[0],
              _base2 = _affix$multi[1];

          this.stats.multis[_name2].push((1 + this.getValue(_base2, affix.curve) / 100).toFixed(2));
        }
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'getAffixCount',
      value: function getAffixCount() {
        var bonus = this.data.bonusAffixes || 0;
        var count = [0, 0, 1, 2, 2, 3, 3, 3, 3][this.rarity];
        return count + bonus;
      }
    }, {
      key: 'getRarityMultiplier',
      value: function getRarityMultiplier() {
        return [1, 1.2, 1.2, 1.2, 1.4, 1.5, 1.6, 1.7][this.rarity];
      }
    }, {
      key: 'getValue',
      value: function getValue(base) {
        var curveId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var l = this.level;
        var curve = this.getCurve(curveId);
        var value = (curve.f + curve.a * l + curve.b * Math.pow(l, 2) + curve.c * Math.pow(l, 3)) * base;
        value *= this.getRarityMultiplier();
        value *= 0.9 + Math.random() * 0.2;
        return value;
      }
    }, {
      key: 'getCurve',
      value: function getCurve(id) {
        var curves = [{ f: 0, a: 4, b: 1, c: 0 }, { f: 5, a: 1, b: 0, c: 0 }, { f: 4, a: 1, b: 1, c: 0 }];
        return curves[id];
      }
    }, {
      key: 'tooltip',
      value: function tooltip() {
        var primary = this.data.stats ? this.data.stats[0][0] : null;
        return this.stats.tooltip(primary);
      }
    }, {
      key: 'graphic',
      value: function graphic() {
        return 'item' + this.type;
      }
    }, {
      key: 'getRoundedStat',
      value: function getRoundedStat(value) {
        var figures = Math.ceil(Math.log10(value));
        var roundTo = Math.pow(10, Math.max(figures - 3, 0));
        return Math.round(value / roundTo) * roundTo;
      }
    }]);

    return Item;
  }();

  return Item;
});
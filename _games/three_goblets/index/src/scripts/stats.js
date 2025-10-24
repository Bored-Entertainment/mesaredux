'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['dataStats'], function (DataStats) {
  //*******************************************************************************************************************
  // ** The Stats
  //*******************************************************************************************************************
  var Stats = function () {
    function Stats() {
      _classCallCheck(this, Stats);

      this.inc = {};
      this.multis = {};
      this.added = {};
      this.initialize();
    }

    _createClass(Stats, [{
      key: 'initialize',
      value: function initialize() {
        var _this = this;

        DataStats.forEach(function (stat) {
          _this[stat.name] = 0;
          _this.inc[stat.name] = 0;
          _this.multis[stat.name] = [];
          _this.added[stat.name] = [];
        });
      }
    }, {
      key: 'addFromData',
      value: function addFromData(data) {
        var _this2 = this;

        var dataStats = data.stats || [];
        var dataInc = data.inc || [];
        var dataMultis = data.multis || [];
        var dataAdded = data.added || [];
        dataStats.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              value = _ref2[1];

          return _this2[name] = value;
        });
        dataInc.forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              name = _ref4[0],
              value = _ref4[1];

          return _this2.inc[name] = value;
        });
        dataMultis.forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              name = _ref6[0],
              value = _ref6[1];

          return _this2.multis[name].push(value);
        });
        dataAdded.forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 3),
              name = _ref8[0],
              as = _ref8[1],
              value = _ref8[2];

          return _this2.added[name].push([as, value]);
        });
      }
    }, {
      key: 'append',
      value: function append(sources) {
        this.addFlat(sources);
        this.applyIncreases(sources);
        this.applyMultipliers(sources);
        this.applyAddedAs(sources);
      }
    }, {
      key: 'addFlat',
      value: function addFlat(sources) {
        var _this3 = this;

        DataStats.forEach(function (stat) {
          sources.forEach(function (source) {
            return _this3[stat.name] += source[stat.name];
          });
        });
      }
    }, {
      key: 'applyIncreases',
      value: function applyIncreases(sources) {
        var _this4 = this;

        DataStats.forEach(function (stat) {
          var increase = sources.reduce(function (total, source) {
            return total + source.inc[stat.name];
          }, 0);
          _this4[stat.name] *= 1 + increase;
        });
      }
    }, {
      key: 'applyMultipliers',
      value: function applyMultipliers(sources) {
        var _this5 = this;

        DataStats.forEach(function (stat) {
          sources.forEach(function (source) {
            return source.multis[stat.name].forEach(function (m) {
              return _this5[stat.name] *= m;
            });
          });
        });
      }
    }, {
      key: 'applyAddedAs',
      value: function applyAddedAs(sources) {
        var _this6 = this;

        DataStats.forEach(function (stat) {
          sources.forEach(function (source) {
            source.added[stat.name].forEach(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  as = _ref10[0],
                  amount = _ref10[1];

              return _this6[as] += _this6[stat.name] * amount;
            });
          });
        });
      }
    }, {
      key: 'final',
      value: function final() {
        var _this7 = this;

        return DataStats.map(function (s) {
          return { name: s.name, value: Math.round(_this7[s.name]) };
        });
      }
      //*******************************************************************************************************************
      // * Tooltip
      //*******************************************************************************************************************

    }, {
      key: 'tooltip',
      value: function tooltip() {
        var _this8 = this;

        var primary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var text = '';
        var types = ['Stat', 'Inc', 'Multis'];
        if (primary) {
          text += this.getStatTooltipLine(DataStats.find(function (s) {
            return s.name == primary;
          }));
        }
        types.forEach(function (type) {
          DataStats.forEach(function (stat) {
            if (!(primary == stat.name && type == 'Stat')) {
              text += _this8['get' + type + 'TooltipLine'](stat) || '';
            }
          });
        });

        return text.trim();
      }
    }, {
      key: 'getStatTooltipLine',
      value: function getStatTooltipLine(stat) {
        if (this[stat.name] != 0) {
          return this[stat.name] + ' ' + stat.real + '\n';
        }
      }
    }, {
      key: 'getIncTooltipLine',
      value: function getIncTooltipLine(stat) {
        if (this.inc[stat.name] > 0) {
          return '+' + Math.round(this.inc[stat.name] * 100) + '% ' + stat.real + '\n';
        }
      }
    }, {
      key: 'getMultisTooltipLine',
      value: function getMultisTooltipLine(stat) {
        if (this.multis[stat.name].length > 0) {
          return Math.round((this.multis[stat.name][0] - 1.0) * 100) + '% more ' + stat.real + '\n';
        }
      }
    }, {
      key: 'getAddedTooltipLine',
      value: function getAddedTooltipLine(stat) {
        if (this.added[stat.name].length > 0) {
          var _added$stat$name$ = _slicedToArray(this.added[stat.name][0], 2),
              as = _added$stat$name$[0],
              amount = _added$stat$name$[1];

          return 'Gain ' + Math.round(amount * 100) + '% of ' + stat.real + ' as ' + DataStats.find(function (s) {
            return s.name == as;
          }).real;
        }
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'realName',
      value: function realName(name) {
        return DataStats.find(function (s) {
          return s.name == name;
        }).real;
      }
    }, {
      key: 'getFirst',
      value: function getFirst() {
        var _this9 = this;

        var first = DataStats.find(function (s) {
          return _this9[s.name] > 0;
        });
        return { name: first.name, value: this[first.name] };
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        var _this10 = this;

        var filtered = { stats: [], inc: [], multis: [], added: [] };
        DataStats.forEach(function (stat) {
          if (_this10[stat.name] != 0) {
            filtered.stats.push([stat.name, _this10[stat.name]]);
          }
          if (_this10.inc[stat.name] != 0) {
            filtered.inc.push([stat.name, _this10.inc[stat.name]]);
          }
          if (_this10.multis[stat.name].length != 0) {
            _this10.multis[stat.name].forEach(function (m) {
              return filtered.multis.push([stat.name, m]);
            });
          }
          if (_this10.added[stat.name].length != 0) {
            _this10.added[stat.name].forEach(function (m) {
              return filtered.added.push([stat.name, m]);
            });
          }
        });
        return filtered;
      }
    }]);

    return Stats;
  }();

  return Stats;
});
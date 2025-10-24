'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['game', 'panelBase', 'dataStats'], function (game, PanelBase, DataStats) {
  //*******************************************************************************************************************
  // ** Panel for Stat display
  //*******************************************************************************************************************
  var PanelStats = function (_PanelBase) {
    _inherits(PanelStats, _PanelBase);

    function PanelStats(position, active) {
      _classCallCheck(this, PanelStats);

      return _possibleConstructorReturn(this, (PanelStats.__proto__ || Object.getPrototypeOf(PanelStats)).call(this, position, active));
    }

    _createClass(PanelStats, [{
      key: 'initialize',
      value: function initialize() {
        _get(PanelStats.prototype.__proto__ || Object.getPrototypeOf(PanelStats.prototype), 'initialize', this).call(this);
        this.basicStats = [['mhp', 3.2, 1 / 2], ['dmg', 1.3, 1 / 3], ['arm', 1.1, 1 / 2], ['aps', 0.6, 1 / 6]];
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        this.labels.basicPoints = { x: 4, y: 56 };
        this.bars.stats = { x: 8, y: 4, w: 128, h: 11, s: 1, n: 4, l: 1 };
        this.bars.plus = { x: 141, y: 5, w: 9, h: 9, s: 3, n: 4, l: 1 };
      }
      //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************

    }, {
      key: 'statsBarSetupSprites',
      value: function statsBarSetupSprites(sprites, rect, index) {
        sprites.stat = game.graphics.addText(rect.x, rect.y, '');
        sprites.value = game.graphics.addText(rect.x + rect.w, rect.y, '');
        sprites.value.anchor.x = 1.0;
      }
    }, {
      key: 'plusBarSetupSprites',
      value: function plusBarSetupSprites(sprites, rect, index) {
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addText(rect.x + rect.w / 2, rect.y + rect.h / 2, '+');
        sprites.icon.anchor.x = 0.5;
        sprites.icon.anchor.y = 0.5;
      }
      //*******************************************************************************************************************
      // * Update Sprites
      //*******************************************************************************************************************

    }, {
      key: 'statsBarUpdateSprites',
      value: function statsBarUpdateSprites(sprites, rect, index) {
        var stat = DataStats.find(function (s) {
          return s.index == index;
        });
        sprites.stat.text = stat ? stat.real : '';
        sprites.value.text = stat ? game.player[stat.name] : '';
        sprites.stat.tint = stat && game.player[stat.name] > 0 ? 0xffffff : 0x4f4f4f;
        sprites.value.tint = stat && game.player[stat.name] > 0 ? 0xffffff : 0x4f4f4f;
      }
    }, {
      key: 'plusBarUpdateSprites',
      value: function plusBarUpdateSprites(sprites, rect, index) {
        var havePoints = game.player.basicPoints > 0;
        var borderColor = havePoints ? 3 : 2;
        sprites.rect.visible = this.availableAt(index);
        sprites.icon.visible = this.availableAt(index);
        sprites.icon.tint = havePoints ? 0xffffff : 0x4f4f4f;
        game.graphics.redrawRect(sprites.rect, rect, 0, borderColor);
      }
      //*******************************************************************************************************************
      // * Input
      //*******************************************************************************************************************

    }, {
      key: 'plusBarClicked',
      value: function plusBarClicked(index) {
        var _basicStats$index = _slicedToArray(this.basicStats[index], 3),
            name = _basicStats$index[0],
            value = _basicStats$index[1],
            allowed = _basicStats$index[2];

        if (game.player.basicPoints > 0 && this.availableAt(index)) {
          game.player.basicStats[name] += this.addValue(index);
          game.player.basicSpent[name] += 1;
          game.player.basicPoints -= 1;
          game.audio.playSound('stat');
        }
        game.player.refreshStats();
        game.player.reset();
      }
      //*******************************************************************************************************************
      // * Tooltips
      //*******************************************************************************************************************

    }, {
      key: 'statsBarUpdateTooltip',
      value: function statsBarUpdateTooltip(rect, index) {
        var stat = DataStats.find(function (s) {
          return s.index == index;
        });
        this.setTooltip(rect.x, rect.y, stat ? stat.tooltip : '');
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'basicPointsLabelText',
      value: function basicPointsLabelText() {
        var s = game.player.basicPoints > 1 ? 's' : '';
        return game.player.basicPoints > 0 ? '' + game.player.basicPoints + ' point' + s : '';
      }
    }, {
      key: 'addValue',
      value: function addValue(index) {
        var current = this.totalPointsSpent() + 1;
        return this.valueAtBasicLevel(current, index) - this.valueAtBasicLevel(current - 1, index);
      }
    }, {
      key: 'valueAtBasicLevel',
      value: function valueAtBasicLevel(basicLevel, index) {
        var _basicStats$index2 = _slicedToArray(this.basicStats[index], 3),
            name = _basicStats$index2[0],
            value = _basicStats$index2[1],
            allowed = _basicStats$index2[2];

        if (index == 3) {
          return (8 * basicLevel + 0.03 * Math.pow(basicLevel, 2)) * value;
        }
        return (6 * basicLevel + 3 * Math.pow(basicLevel, 2)) * value;
      }
    }, {
      key: 'totalPointsSpent',
      value: function totalPointsSpent() {
        return Object.values(game.player.basicSpent).reduce(function (t, v) {
          return t + v;
        }, 0);
      }
    }, {
      key: 'currentBasicValue',
      value: function currentBasicValue(index) {
        var _basicStats$index3 = _slicedToArray(this.basicStats[index], 3),
            name = _basicStats$index3[0],
            value = _basicStats$index3[1],
            allowed = _basicStats$index3[2];

        return game.player.basicStats[name];
        // let basicLevel = game.player.basicSpent[name]
        // return this.valueAtBasicLevel(basicLevel, index)
      }
    }, {
      key: 'maximumPotentialValue',
      value: function maximumPotentialValue(index) {
        var basicLevel = this.totalPointsSpent() + 1;
        return this.valueAtBasicLevel(basicLevel, index);
      }
    }, {
      key: 'availableAt',
      value: function availableAt(index) {
        var _basicStats$index4 = _slicedToArray(this.basicStats[index], 3),
            name = _basicStats$index4[0],
            value = _basicStats$index4[1],
            allowed = _basicStats$index4[2];

        return this.currentBasicValue(index) < allowed * this.maximumPotentialValue(index);
        // let [name, value, allowed] = this.basicStats[index]
        // return game.player.basicSpent[name] < allowed * game.player.lvl
      }
    }]);

    return PanelStats;
  }(PanelBase);

  return PanelStats;
});
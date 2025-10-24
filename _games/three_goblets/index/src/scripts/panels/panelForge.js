'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['game', 'panelBase'], function (game, PanelBase) {
  //*******************************************************************************************************************
  // ** The Forge Panel
  //*******************************************************************************************************************
  var PanelForge = function (_PanelBase) {
    _inherits(PanelForge, _PanelBase);

    function PanelForge(position, active) {
      _classCallCheck(this, PanelForge);

      return _possibleConstructorReturn(this, (PanelForge.__proto__ || Object.getPrototypeOf(PanelForge)).call(this, position, active));
    }

    _createClass(PanelForge, [{
      key: 'initialize',
      value: function initialize() {
        _get(PanelForge.prototype.__proto__ || Object.getPrototypeOf(PanelForge.prototype), 'initialize', this).call(this);
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        this.labels.title = { x: 79, y: 4, a: 0.5 };
        this.gauges.progress = { x: 24, y: 44, w: 110, h: 8, c1: 5, c2: 2 };
        this.bars.input = { x: 7, y: 36, w: 16, h: 16, s: 1, n: 1, l: 1 };
        this.bars.output = { x: 135, y: 36, w: 16, h: 16, s: 1, n: 1, l: 1 };
      }
      //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************

    }, {
      key: 'setupLabelSprites',
      value: function setupLabelSprites() {
        var _this2 = this;

        _get(PanelForge.prototype.__proto__ || Object.getPrototypeOf(PanelForge.prototype), 'setupLabelSprites', this).call(this);
        Object.entries(this.labels).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              label = _ref2[1];

          return _this2.sprites[name].tint = 0x4f4f4f;
        });
      }
    }, {
      key: 'inputBarSetupSprites',
      value: function inputBarSetupSprites(sprites, rect, index) {
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, 'dismantleIcon');
      }
    }, {
      key: 'outputBarSetupSprites',
      value: function outputBarSetupSprites(sprites, rect, index) {
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, 'claimIconDisabled');
      }
      //*******************************************************************************************************************
      // * Update Sprites
      //*******************************************************************************************************************

    }, {
      key: 'inputBarUpdateSprites',
      value: function inputBarUpdateSprites(sprites, rect, index) {
        var dragged = this.getDraggedItem();
        var borderColor = dragged && !dragged.unique ? 1 : 2;
        game.graphics.redrawRect(sprites.rect, rect, 0, borderColor);
      }
    }, {
      key: 'outputBarUpdateSprites',
      value: function outputBarUpdateSprites(sprites, rect, index) {
        var reward = this.reward();
        var borderColor = reward ? 3 : 2;
        sprites.icon.texture = game.graphics.getTexture(reward ? 'claimIcon' : 'claimIconDisabled');
        game.graphics.redrawRect(sprites.rect, rect, 0, borderColor);
      }
      //*******************************************************************************************************************
      // * Input
      //*******************************************************************************************************************

    }, {
      key: 'inputBarClicked',
      value: function inputBarClicked(index) {
        var dragged = this.getDraggedItem();
        if (dragged && !dragged.unique) {
          this.sellItem(dragged);
          this.setDraggedItem(null);
          game.forge.manuallyDismantledItems += 1;
        }
      }
    }, {
      key: 'outputBarClicked',
      value: function outputBarClicked(index) {
        var reward = this.reward();
        if (reward) {
          game.forge.claim(reward);
          game.forge.rewards.shift();
          game.audio.playSound('claim');
        } else {
          game.audio.playSound('buzzer');
        }
      }
    }, {
      key: 'sellItem',
      value: function sellItem(item) {
        game.forge.dismantleItem(item);
        game.audio.playSound('sell');
      }
      //*******************************************************************************************************************
      // * Tooltips
      //*******************************************************************************************************************

    }, {
      key: 'inputBarUpdateTooltip',
      value: function inputBarUpdateTooltip(rect, index) {
        if (!this.getDraggedItem()) {
          var tooltip = 'Place items here to dismantle\nthem. Dismantle enough items\nto claim great rewards. You can\nalso use Shift + Click or press \'S\'\nwhile hovering over the item.';
          this.setTooltip(rect.x, rect.y, tooltip);
        }
      }
    }, {
      key: 'outputBarUpdateTooltip',
      value: function outputBarUpdateTooltip(rect, index) {
        var reward = this.reward();
        if (reward) {
          this.setTooltip(rect.x, rect.y, reward.tooltip);
        }
      }
    }, {
      key: 'progressGaugeUpdateTooltip',
      value: function progressGaugeUpdateTooltip(rect) {
        var _progressGaugeValues = this.progressGaugeValues(),
            v1 = _progressGaugeValues.v1,
            v2 = _progressGaugeValues.v2;

        this.setTooltip(rect.x, rect.y, 'Prgress ' + Math.floor(v2 / v1 * 100) + '%');
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'titleLabelText',
      value: function titleLabelText() {
        return 'The Forge';
      }
    }, {
      key: 'progressGaugeValues',
      value: function progressGaugeValues() {
        var have = game.forge.progress - game.forge.levelTiers[game.forge.level];
        var need = game.forge.levelTiers[game.forge.level + 1] - game.forge.levelTiers[game.forge.level];
        return { v1: need, v2: have };
      }
    }, {
      key: 'reward',
      value: function reward() {
        return game.forge.rewards[0];
      }
    }]);

    return PanelForge;
  }(PanelBase);

  return PanelForge;
});
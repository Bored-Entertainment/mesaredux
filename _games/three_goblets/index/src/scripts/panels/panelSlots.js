'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['game', 'panelBase'], function (game, PanelBase) {
  //*******************************************************************************************************************
  // ** The Slots Panel
  //*******************************************************************************************************************
  var PanelSlots = function (_PanelBase) {
    _inherits(PanelSlots, _PanelBase);

    function PanelSlots(position, active) {
      _classCallCheck(this, PanelSlots);

      return _possibleConstructorReturn(this, (PanelSlots.__proto__ || Object.getPrototypeOf(PanelSlots)).call(this, position, active));
    }

    _createClass(PanelSlots, [{
      key: 'initialize',
      value: function initialize() {
        _get(PanelSlots.prototype.__proto__ || Object.getPrototypeOf(PanelSlots.prototype), 'initialize', this).call(this);
        this.mode = 'load';
        this.overwritingIndex = null;
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        this.labels.overwrite = { x: 86, y: 56, w: 32, h: 13, a: 1.0 };
        this.buttons.back = { x: 2, y: 55, w: 32, h: 13, text: 'Back', e: true, v: true };
        this.buttons.confirm = { x: 87, y: 55, w: 36, h: 13, text: 'Confirm', e: true, v: true };
        this.buttons.cancel = { x: 124, y: 55, w: 32, h: 13, text: 'Cancel', e: true, v: true };
        this.bars.slots = { x: 39, y: 8, w: 80, h: 13, s: 1, n: 3, l: 1 };
      }
    }, {
      key: 'setMode',
      value: function setMode(mode) {
        this.mode = mode;
      }
      //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************

    }, {
      key: 'slotsBarSetupSprites',
      value: function slotsBarSetupSprites(sprites, rect, index) {
        var saveData = game.storage.dataAtSlot(index);
        var text = saveData ? 'Save ' + (index + 1) + ' (Level ' + saveData.player.lvl + ')' : 'Empty';
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.text = game.graphics.addText(rect.x, rect.y, text);
        sprites.text.x = Math.round(rect.x + 3);
        sprites.text.y = Math.round(rect.y + 1);
        sprites.text.tint = saveData ? 0xffffff : 0x4f4f4f;
      }
      //*******************************************************************************************************************
      // * Update Button States
      //*******************************************************************************************************************

    }, {
      key: 'confirmButtonUpdateState',
      value: function confirmButtonUpdateState(button) {
        button.e = this.overwritingIndex !== null;
        button.v = this.overwritingIndex !== null;
      }
    }, {
      key: 'cancelButtonUpdateState',
      value: function cancelButtonUpdateState(button) {
        button.e = this.overwritingIndex !== null;
        button.v = this.overwritingIndex !== null;
      }
      //*******************************************************************************************************************
      // * Update Sprites
      //*******************************************************************************************************************

    }, {
      key: 'slotsBarUpdateSprites',
      value: function slotsBarUpdateSprites(sprites, rect, index) {}
      //*******************************************************************************************************************
      // * Input
      //*******************************************************************************************************************

    }, {
      key: 'slotsBarClicked',
      value: function slotsBarClicked(index) {
        if (this.mode == 'load') {
          if (game.storage.dataAtSlot(index)) {
            game.storage.load(index);
            game.panels.all['Battle'].battle.selecting = false;
            game.panels.activate('Stats');
            game.panels.activate('Inventory');
            game.audio.playSound('select');
          } else {
            game.audio.playSound('buzzer');
          }
        } else if (this.mode == 'overwrite') {
          this.overwritingIndex = index;
          game.audio.playSound('select');
        }
      }
    }, {
      key: 'backButtonClicked',
      value: function backButtonClicked() {
        this.overwritingIndex = null;
        game.panels.activate('Menu');
        game.audio.playSound('pick');
      }
    }, {
      key: 'confirmButtonClicked',
      value: function confirmButtonClicked() {
        game.storage.deleteSave(this.overwritingIndex);
        game.storage.setSlot(this.overwritingIndex);
        game.panels.activate('Battle');
        game.panels.activate('Inventory');
        game.audio.playSound('battle');
      }
    }, {
      key: 'cancelButtonClicked',
      value: function cancelButtonClicked() {
        this.overwritingIndex = null;
        game.audio.playSound('pick');
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'overwriteLabelText',
      value: function overwriteLabelText() {
        return this.overwritingIndex === null ? '' : 'Overwrite?';
      }
    }]);

    return PanelSlots;
  }(PanelBase);

  return PanelSlots;
});
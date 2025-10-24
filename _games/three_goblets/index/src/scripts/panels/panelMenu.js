'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['game', 'panelBase'], function (game, PanelBase) {
  //*******************************************************************************************************************
  // ** The Menu Panel
  //*******************************************************************************************************************
  var PanelMenu = function (_PanelBase) {
    _inherits(PanelMenu, _PanelBase);

    function PanelMenu(position, active) {
      _classCallCheck(this, PanelMenu);

      return _possibleConstructorReturn(this, (PanelMenu.__proto__ || Object.getPrototypeOf(PanelMenu)).call(this, position, active));
    }

    _createClass(PanelMenu, [{
      key: 'initialize',
      value: function initialize() {
        _get(PanelMenu.prototype.__proto__ || Object.getPrototypeOf(PanelMenu.prototype), 'initialize', this).call(this);
        this.commands = ['new', 'continue'];
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        this.bars.commands = { x: 47, y: 13, w: 64, h: 13, s: 1, n: 2, l: 1 };
        this.bars.controlls = { x: 62, y: 41, w: 16, h: 16, s: 2, n: 2, l: 2 };
      }
      //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************

    }, {
      key: 'commandsBarSetupSprites',
      value: function commandsBarSetupSprites(sprites, rect, index) {
        var texts = { new: 'New Game', continue: 'Continue' };
        var text = texts[this.commands[index]];
        var available = this.availableAt(index);
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.text = game.graphics.addText(rect.x, rect.y, text);
        sprites.text.x = Math.round(rect.x + rect.w / 2 - sprites.text.width / 2);
        sprites.text.y = Math.round(rect.y + 1);
        sprites.text.tint = available ? 0xffffff : 0x4f4f4f;
      }
    }, {
      key: 'controllsBarSetupSprites',
      value: function controllsBarSetupSprites(sprites, rect, index) {
        var names = ['sound', 'soundtrack'];
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, names[index] + 'Icon');
      }
      //*******************************************************************************************************************
      // * Update Sprites
      //*******************************************************************************************************************

    }, {
      key: 'commandsBarUpdateSprites',
      value: function commandsBarUpdateSprites(sprites, rect, index) {}
    }, {
      key: 'controllsBarUpdateSprites',
      value: function controllsBarUpdateSprites(sprites, rect, index) {
        var names = ['sound', 'soundtrack'];
        var enabled = game.audio[names[index] + 'Volume'] == 0 ? 'Disabled' : '';
        sprites.icon.texture = game.graphics.getTexture(names[index] + 'Icon' + enabled);
      }
      //*******************************************************************************************************************
      // * Input
      //*******************************************************************************************************************

    }, {
      key: 'commandsBarClicked',
      value: function commandsBarClicked(index) {
        var available = this.availableAt(index);
        if (available) {
          this[this.commands[index] + 'Clicked']();
        } else {
          game.audio.playSound('buzzer');
        }
      }
    }, {
      key: 'newClicked',
      value: function newClicked() {
        var index = this.freeSlot();
        if (index !== undefined) {
          game.storage.setSlot(index);
          game.panels.activate('Battle');
          game.panels.activate('Inventory');
          game.audio.playSound('battle');
        } else {
          game.panels.activate('Slots');
          game.panels.all['Slots'].setMode('overwrite');
          game.input.mouseClicked = false;
          game.audio.playSound('select');
        }
      }
    }, {
      key: 'continueClicked',
      value: function continueClicked() {
        game.panels.activate('Slots');
        game.panels.all['Slots'].setMode('load');
        game.input.mouseClicked = false;
        game.audio.playSound('select');
      }
    }, {
      key: 'controllsBarClicked',
      value: function controllsBarClicked(index) {
        var name = ['sound', 'soundtrack'][index];
        var enabled = game.audio[name + 'Volume'] == 0;
        var volume = enabled ? game.config[name + 'Volume'] : 0;
        game.audio['set' + (name[0].toUpperCase() + name.substring(1)) + 'Volume'](volume);
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'availableAt',
      value: function availableAt(index) {
        return this[this.commands[index] + 'Available']();
      }
    }, {
      key: 'newAvailable',
      value: function newAvailable() {
        return true;
      }
    }, {
      key: 'continueAvailable',
      value: function continueAvailable() {
        var available = [0, 1, 2].find(function (i) {
          return game.storage.dataAtSlot(i);
        }) !== undefined;
        return available;
      }
    }, {
      key: 'freeSlot',
      value: function freeSlot() {
        return [0, 1, 2].find(function (i) {
          return !game.storage.dataAtSlot(i);
        });
      }
    }]);

    return PanelMenu;
  }(PanelBase);

  return PanelMenu;
});
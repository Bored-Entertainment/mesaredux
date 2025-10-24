'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['game', 'panelBase'], function (game, PanelBase) {
  //*******************************************************************************************************************
  // ** The Settings Panel
  //*******************************************************************************************************************
  var PanelSettings = function (_PanelBase) {
    _inherits(PanelSettings, _PanelBase);

    function PanelSettings(position, active) {
      _classCallCheck(this, PanelSettings);

      return _possibleConstructorReturn(this, (PanelSettings.__proto__ || Object.getPrototypeOf(PanelSettings)).call(this, position, active));
    }

    _createClass(PanelSettings, [{
      key: 'initialize',
      value: function initialize() {
        _get(PanelSettings.prototype.__proto__ || Object.getPrototypeOf(PanelSettings.prototype), 'initialize', this).call(this);
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        //this.buttons.save = {x:47, y:4, w:64, h:14, text:'Save Game', e:true, v:true}
        this.bars.controlls = { x: 20, y: 16, w: 16, h: 16, s: 2, n: 2, l: 1 };
        this.bars.soundVolume = { x: 37, y: 17, w: 5, h: 14, s: 0, n: 20, l: 20 };
        this.bars.soundtrackVolume = { x: 37, y: 35, w: 5, h: 14, s: 0, n: 20, l: 20 };
      }
      //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************
      //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************

    }, {
      key: 'controllsBarSetupSprites',
      value: function controllsBarSetupSprites(sprites, rect, index) {
        var names = ['sound', 'soundtrack'];
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, names[index] + 'Icon');
      }
    }, {
      key: 'soundVolumeBarSetupSprites',
      value: function soundVolumeBarSetupSprites(sprites, rect, index) {
        sprites.border = game.graphics.addRect(rect, 0, 2);
        sprites.fill = game.graphics.addRect({ x: rect.x + 1, y: rect.y + 1, w: rect.w - 2, h: rect.h - 2 }, 1, 8);
      }
    }, {
      key: 'soundtrackVolumeBarSetupSprites',
      value: function soundtrackVolumeBarSetupSprites(sprites, rect, index) {
        sprites.border = game.graphics.addRect(rect, 0, 2);
        sprites.fill = game.graphics.addRect({ x: rect.x + 1, y: rect.y + 1, w: rect.w - 2, h: rect.h - 2 }, 1, 8);
      }
      //*******************************************************************************************************************
      // * Update Sprites
      //*******************************************************************************************************************

    }, {
      key: 'controllsBarUpdateSprites',
      value: function controllsBarUpdateSprites(sprites, rect, index) {
        var names = ['sound', 'soundtrack'];
        var enabled = game.audio[names[index] + 'Volume'] == 0 ? 'Disabled' : '';
        sprites.icon.texture = game.graphics.getTexture(names[index] + 'Icon' + enabled);
      }
    }, {
      key: 'soundVolumeBarUpdateSprites',
      value: function soundVolumeBarUpdateSprites(sprites, rect, index) {
        var under = index * 0.05 <= game.audio.soundVolume && game.audio.soundVolume != 0;
        sprites.fill.visible = under;
      }
    }, {
      key: 'soundtrackVolumeBarUpdateSprites',
      value: function soundtrackVolumeBarUpdateSprites(sprites, rect, index) {
        var under = index * 0.05 <= game.audio.soundtrackVolume && game.audio.soundtrackVolume != 0;
        sprites.fill.visible = under;
      }
      //*******************************************************************************************************************
      // * Input
      //*******************************************************************************************************************

    }, {
      key: 'saveButtonClicked',
      value: function saveButtonClicked() {
        this.putDraggedItemDown();
        game.storage.save(game.storage.currentSlot);
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
    }, {
      key: 'soundVolumeBarClicked',
      value: function soundVolumeBarClicked(index) {
        game.audio.setSoundVolume(index * 0.05);
      }
    }, {
      key: 'soundtrackVolumeBarClicked',
      value: function soundtrackVolumeBarClicked(index) {
        game.audio.setSoundtrackVolume(index * 0.05);
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'putDraggedItemDown',
      value: function putDraggedItemDown() {
        var dragged = this.getDraggedItem();
        if (dragged) {
          game.player.items.push(dragged);
          this.setDraggedItem(null);
        }
      }
    }]);

    return PanelSettings;
  }(PanelBase);

  return PanelSettings;
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['game', 'panelBase'], function (game, PanelBase) {
  //*******************************************************************************************************************
  // ** Window for Item Needs
  //*******************************************************************************************************************
  var PanelInventory = function (_PanelBase) {
    _inherits(PanelInventory, _PanelBase);

    function PanelInventory(position, active) {
      _classCallCheck(this, PanelInventory);

      return _possibleConstructorReturn(this, (PanelInventory.__proto__ || Object.getPrototypeOf(PanelInventory)).call(this, position, active));
    }

    _createClass(PanelInventory, [{
      key: 'initialize',
      value: function initialize() {
        _get(PanelInventory.prototype.__proto__ || Object.getPrototypeOf(PanelInventory.prototype), 'initialize', this).call(this);
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        this.gauges.life = { x: 37, y: 5, w: 40, h: 8, c1: 4, c2: 2 };
        this.gauges.es = { x: 37, y: 6, w: 40, h: 6, c1: 5, c2: 8 };
        this.gauges.exp = { x: 81, y: 5, w: 40, h: 8, c1: 1, c2: 2 };
        this.bars.items = { x: 72, y: 18, w: 16, h: 16, s: 1, n: 15, l: 5, shortcuts: [['Dismantle', 's']] };
        this.bars.equips = { x: 2, y: 35, w: 16, h: 16, s: 1, n: 7, l: 4, b: [4, 8] };
        this.bars.goblets = { x: 10, y: 18, w: 16, h: 16, s: 1, n: 3, l: 3 };
        this.bars.states = { x: 3, y: 6, w: 7, h: 7, s: 1, n: 8, l: 8, b: [4, 89] };
      }
      //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************

    }, {
      key: 'itemsBarSetupSprites',
      value: function itemsBarSetupSprites(sprites, rect, index) {
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, '');
      }
    }, {
      key: 'equipsBarSetupSprites',
      value: function equipsBarSetupSprites(sprites, rect, index) {
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, '');
      }
    }, {
      key: 'gobletsBarSetupSprites',
      value: function gobletsBarSetupSprites(sprites, rect, index) {
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, '');
      }
    }, {
      key: 'statesBarSetupSprites',
      value: function statesBarSetupSprites(sprites, rect, index) {
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, '');
      }
      //*******************************************************************************************************************
      // * Update
      //*******************************************************************************************************************

    }, {
      key: 'update',
      value: function update() {
        if (!game.panels.isActive('Battle')) {
          this.updateElements();
        }
        if (this.active) {
          this.updateSprites();
          if (!game.panels.isActive('Battle')) {
            this.updateTooltips();
          }
        }
      }
      //*******************************************************************************************************************
      // * Update Sprites
      //*******************************************************************************************************************

    }, {
      key: 'itemsBarUpdateSprites',
      value: function itemsBarUpdateSprites(sprites, rect, index) {
        var item = game.player.items[index];
        var borderColor = 2; //item ? 1 : 2
        var fillColor = this.getFillColor(item);
        game.graphics.redrawRect(sprites.rect, rect, fillColor, borderColor);
        sprites.icon.texture = game.graphics.getTexture(item ? item.graphic() : '');
      }
    }, {
      key: 'equipsBarUpdateSprites',
      value: function equipsBarUpdateSprites(sprites, rect, index) {
        var item = game.player.equips[index];
        var dragged = this.getDraggedItem();
        var borderColor = this.canEquip(dragged, index) ? 1 : 2;
        var fillColor = this.getFillColor(item);
        game.graphics.redrawRect(sprites.rect, rect, fillColor, borderColor);
        sprites.icon.texture = game.graphics.getTexture(item ? item.graphic() : '');
      }
    }, {
      key: 'gobletsBarUpdateSprites',
      value: function gobletsBarUpdateSprites(sprites, rect, index) {
        var item = game.player.goblets[index];
        var dragged = this.getDraggedItem();
        var borderColor = dragged && dragged.type == 9 && dragged.level == 3 - index ? 1 : 2;
        var fillColor = this.getFillColor(item);
        var used = item && game.player.used[item.stats.getFirst().name] > 0;
        var graphic = item ? used ? 'gobletUsed' : item.graphic() : '';
        game.graphics.redrawRect(sprites.rect, rect, fillColor, borderColor);
        sprites.icon.texture = game.graphics.getTexture(graphic);
      }
    }, {
      key: 'statesBarUpdateSprites',
      value: function statesBarUpdateSprites(sprites, rect, index) {
        var state = this.stateAt(index);
        sprites.icon.visible = state;
        if (state) {
          sprites.icon.texture = game.graphics.getTexture('state' + state.icon);
        }
      }
      //*******************************************************************************************************************
      // * Input
      //*******************************************************************************************************************

    }, {
      key: 'itemsBarClicked',
      value: function itemsBarClicked(index) {
        var item = game.player.items[index];
        var dragged = this.getDraggedItem();
        if (dragged) {
          game.player.items.splice(index, 0, dragged);
          this.setDraggedItem(null);
          game.audio.playSound('put');
        } else if (item) {
          if (game.input.shiftDown) {
            if (item.unique) {
              return;
            }
            game.panels.all['Forge'].sellItem(item);
          } else {
            game.audio.playSound('pick');
            this.setDraggedItem(item);
          }
          game.player.items.splice(index, 1);
        }
      }
    }, {
      key: 'equipsBarClicked',
      value: function equipsBarClicked(index) {
        var item = this.getDraggedItem();
        var equipped = game.player.equips[index] || null;
        if (this.canEquip(item, index)) {
          game.player.equipItem(item, index);
          this.setDraggedItem(equipped);
          game.audio.playSound('equip');
        } else if (equipped && !item) {
          game.player.unequipItem(equipped, index);
          this.setDraggedItem(equipped);
          game.audio.playSound('pick');
        } else if (item) {
          game.audio.playSound('buzzer');
        }
      }
    }, {
      key: 'gobletsBarClicked',
      value: function gobletsBarClicked(index) {
        var item = this.getDraggedItem();
        var equipped = game.player.goblets[index] || null;
        if (item && item.type == 9 && item.level == 3 - index) {
          game.player.goblets[index] = item;
          this.setDraggedItem(equipped);
          game.audio.playSound('equip');
        } else if (equipped && !item) {
          game.player.goblets[index] = null;
          this.setDraggedItem(equipped);
          game.audio.playSound('pick');
        } else if (item) {
          game.audio.playSound('buzzer');
        }
      }
    }, {
      key: 'itemsBarDismantleShortcut',
      value: function itemsBarDismantleShortcut(index) {
        var item = game.player.items[index];
        if (item && !item.unique) {
          game.panels.all['Forge'].sellItem(item);
          game.player.items.splice(index, 1);
        }
      }
      //*******************************************************************************************************************
      // * Tooltips
      //*******************************************************************************************************************

    }, {
      key: 'itemsBarUpdateTooltip',
      value: function itemsBarUpdateTooltip(rect, index) {
        var _this2 = this;

        var item = game.player.items[index];
        if (item) {
          var equipped = game.player.equips.filter(function (i) {
            return i;
          }).filter(function (i) {
            return i.type == item.type;
          });
          var y = 91;
          var width = 0;
          equipped.forEach(function (equip, index) {
            _this2.setTooltip(3, y, equip.tooltip(), index + 1);
            var size = game.tooltips[index + 1].getSize();
            y -= size.h + 1;
            width = Math.max(size.w, width);
            if (index == 1) {
              var prev = game.tooltips[index];
              var ty = Math.max(game.tooltips[index + 1].y, size.h + 4);
              prev.y = Math.max(ty + prev.getSize().h + 1, prev.y);
              prev.refresh();
            }
          });

          this.setTooltip(Math.max(rect.x, 4 + width), rect.y, item.tooltip(game.player));
        }
      }
    }, {
      key: 'equipsBarUpdateTooltip',
      value: function equipsBarUpdateTooltip(rect, index) {
        var item = game.player.equips[index];
        if (item) {
          this.setTooltip(rect.x, rect.y, item.tooltip());
        }
      }
    }, {
      key: 'gobletsBarUpdateTooltip',
      value: function gobletsBarUpdateTooltip(rect, index) {
        var item = game.player.goblets[index];
        if (item) {
          this.setTooltip(rect.x, rect.y, item.tooltip(game.player));
        }
      }
    }, {
      key: 'lifeGaugeUpdateTooltip',
      value: function lifeGaugeUpdateTooltip(rect) {
        var life = game.player.hp + ' Life';
        var es = game.player.es ? '\n' + game.player.es + ' Energy Shield' : '';
        this.setTooltip(rect.x, rect.y, life + es);
      }
    }, {
      key: 'expGaugeUpdateTooltip',
      value: function expGaugeUpdateTooltip(rect) {
        this.setTooltip(rect.x, rect.y, 'Level ' + game.player.lvl);
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'lifeGaugeValues',
      value: function lifeGaugeValues() {
        return { v1: game.player.mhp, v2: game.player.hp };
      }
    }, {
      key: 'esGaugeValues',
      value: function esGaugeValues() {
        return { v1: game.player.mhp, v2: game.player.es };
      }
    }, {
      key: 'expGaugeValues',
      value: function expGaugeValues() {
        var have = game.player.exp - game.player.lvlTiers[game.player.lvl];
        var need = game.player.lvlTiers[game.player.lvl + 1] - game.player.lvlTiers[game.player.lvl];
        return { v1: need, v2: have };
      }
    }, {
      key: 'getFillColor',
      value: function getFillColor(item) {
        var colors = [0, 5, 3, 4, 6, 1];
        return item ? colors[item.rarity] : 0;
      }
    }, {
      key: 'canEquip',
      value: function canEquip(item, index) {
        return item && item.type == game.player.itemTypeAtIndex(index) && game.player.equipSlots[index];
      }
    }, {
      key: 'stateAt',
      value: function stateAt(index) {
        var states = game.player.states.filter(function (s, i, self) {
          return s.active && self.findIndex(function (o) {
            return o.name == s.name;
          }) == i;
        });
        return states[index];
      }
    }]);

    return PanelInventory;
  }(PanelBase);

  return PanelInventory;
});
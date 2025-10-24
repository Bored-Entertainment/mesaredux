'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game', 'panels/panelBattle', 'panels/panelFin', 'panels/panelForge', 'panels/panelInventory', 'panels/panelMenu', 'panels/panelPassives', 'panels/panelSettings', 'panels/panelSlots', 'panels/panelStats', 'panels/panelTip', 'panels/panelTitle', 'panels/panelWorld', 'panelSwitcher'], function (game, PanelBattle, PanelFin, PanelForge, PanelInventory, PanelMenu, PanelPassives, PanelSettings, PanelSlots, PanelStats, PanelTip, PanelTitle, PanelWorld, PanelSwitcher) {
  //*******************************************************************************************************************
  // ** Handles all the Panels
  //*******************************************************************************************************************
  var Panels = function () {
    function Panels() {
      _classCallCheck(this, Panels);

      this.all = {};
      this.switchers = {};
      this.initializePanels();
      this.initializeSwitchers();
      this.initializeDraggedItemSprites();
    }

    _createClass(Panels, [{
      key: 'initializePanels',
      value: function initializePanels() {
        this.all['Battle'] = new PanelBattle('top', false);
        this.all['Fin'] = new PanelFin('top', false);
        this.all['Forge'] = new PanelForge('top', false);
        this.all['Inventory'] = new PanelInventory('bot', false);
        this.all['Menu'] = new PanelMenu('bot', true);
        this.all['Passives'] = new PanelPassives('bot', false);
        this.all['Settings'] = new PanelSettings('top', false);
        this.all['Slots'] = new PanelSlots('bot', false);
        this.all['Stats'] = new PanelStats('top', false);
        this.all['Tip'] = new PanelTip('top', false);
        this.all['Title'] = new PanelTitle('top', true);
        this.all['World'] = new PanelWorld('top', false);
      }
    }, {
      key: 'initializeSwitchers',
      value: function initializeSwitchers() {
        this.switchers.upper = new PanelSwitcher(['World', 'Stats', 'Forge', 'Settings'], 'top', 118);
        this.switchers.lower = new PanelSwitcher(['Inventory', 'Passives'], 'bot', 138);
        //this.switchers.settings = new PanelSwitcher(['Settings'], 'top', 148)
      }
    }, {
      key: 'initializeDraggedItemSprites',
      value: function initializeDraggedItemSprites() {
        this.itemSprites = {};
        this.itemSprites.rect = game.graphics.addRect({ x: 0, y: 0, w: 16, h: 16 }, null, null);
        this.itemSprites.icon = game.graphics.addSprite(0, 0, '');
      }
      //*******************************************************************************************************************
      // * Update
      //*******************************************************************************************************************

    }, {
      key: 'update',
      value: function update() {
        if (game.config.cheats) {
          this.updateCheats();
        }
        this.updatePanels();
        this.updateSwitchers();
        this.updateDraggedItemSprites();
      }
    }, {
      key: 'updateCheats',
      value: function updateCheats() {
        if (game.input.key == 'r' || game.input.key == 'R') {
          var times = game.input.shiftDown ? 10 : 1;
          for (var i = 0; i < times; i++) {
            game.player.baseStats.mhp += 100;
            game.player.baseStats.dmg += 20;
            game.player.baseStats.arm += 18;
            game.player.baseStats.aps += 4;
            game.player.baseStats.multis.mhp.push(1.15);
            game.player.baseStats.multis.dmg.push(1.15);
            game.player.baseStats.multis.arm.push(1.15);
          }
          game.player.refreshStats();
          game.player.reset();
        }
        if (game.input.key == 'q') {
          game.world.area.reset();
          game.player.reset();
          this.all['Battle'].battle.reset();
          this.activate('Stats');
        }
        if (game.input.key == 'u') {
          game.world.areas.forEach(function (a) {
            return a.unlocked = true;
          });
          game.world.shownFin = true;
          for (var _i = 0; _i < 8; _i++) {
            game.world.keys[_i] = game.loot.generateKey(_i + 1);
          }
        }
        if (game.input.key == 'g') {
          var item = game.loot.generateItem(game.player.lvl);
          game.player.gainItem(item);
        }
        if (game.input.key == 'i') {
          game.player.gainExperience(6 * game.player.lvl + 1 * Math.pow(game.player.lvl, 2));
          game.forge.gainProgress(5 * game.player.lvl + 1.5 * Math.pow(game.player.lvl, 2));
        }
        if (game.input.key == 'k') {
          game.audio.soundtracks[0].seek(155);
        }
        ;[1, 2, 3, 4, 5, 6, 7, 8].forEach(function (n) {
          if (game.input.key == n.toString()) {
            var key = game.loot.generateKey(n);
            game.player.gainItem(key);
          }
        });
      }
    }, {
      key: 'updatePanels',
      value: function updatePanels() {
        var panels = Object.values(this.all);
        panels.forEach(function (panel) {
          if (panel.active) {
            panel.update();
          }
        });
      }
    }, {
      key: 'updateSwitchers',
      value: function updateSwitchers() {
        Object.values(this.switchers).forEach(function (p) {
          return p.update();
        });
      }
    }, {
      key: 'updateDraggedItemSprites',
      value: function updateDraggedItemSprites() {
        var dragged = game.draggedItem || game.draggedSkill;
        this.itemSprites.rect.visible = dragged;
        this.itemSprites.icon.visible = dragged;
        if (dragged) {
          this.itemSprites.rect.x = game.input.mx - 8 + 0.5;
          this.itemSprites.rect.y = game.input.my - 8 + 0.5;
          this.itemSprites.icon.x = game.input.mx - 8;
          this.itemSprites.icon.y = game.input.my - 8;
          game.graphics.redrawRect(this.itemSprites.rect, { x: 0, y: 0, w: 16, h: 16 }, this.all['Inventory'].getFillColor(dragged), 2);
          this.itemSprites.icon.texture = game.graphics.getTexture(dragged.graphic());
        }
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'activate',
      value: function activate(name) {
        var panel = this.all[name];
        var samePosition = Object.values(this.all).filter(function (p) {
          return p.position == panel.position;
        });
        samePosition.forEach(function (p) {
          return p.deactivate();
        });
        panel.activate();
        panel.refresh();
      }
    }, {
      key: 'isActive',
      value: function isActive(name) {
        return this.all[name].active;
      }
    }, {
      key: 'getActiveName',
      value: function getActiveName(position) {
        var _this = this;

        var active = Object.entries(this.all).find(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              n = _ref2[0],
              p = _ref2[1];

          return p.position == position && _this.isActive(n);
        });
        var name = active ? active[0] : '';
        return name;
      }
    }, {
      key: 'showTip',
      value: function showTip(tip) {
        this.all['Battle'].battle.paused = true;
        this.all['Tip'].setTip(tip, this.getActiveName(tip.position));
        this.activate('Tip');
      }
    }, {
      key: 'hideTip',
      value: function hideTip() {
        if (this.isActive('Tip')) {
          this.activate(this.all['Tip'].prevActive);
        }
      }
    }]);

    return Panels;
  }();

  return Panels;
});
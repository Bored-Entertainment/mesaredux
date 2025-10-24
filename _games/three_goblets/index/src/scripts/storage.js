'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game', 'item', 'goblet', 'key', 'stats'], function (game, Item, Goblet, Key, Stats) {
  //*******************************************************************************************************************
  // ** Handles Storage
  //*******************************************************************************************************************
  var Storage = function () {
    function Storage() {
      _classCallCheck(this, Storage);

      this.currentSlot = 0;
      this.saveObject = {};
    }

    _createClass(Storage, [{
      key: 'setSlot',
      value: function setSlot(index) {
        this.currentSlot = index;
      }
      //*******************************************************************************************************************
      // * Save
      //*******************************************************************************************************************

    }, {
      key: 'save',
      value: function save() {
        this.saveObject['player'] = game.player;
        this.saveObject['forge'] = game.forge;
        this.saveObject['world'] = game.world;
        this.saveObject['loot'] = game.loot;
        this.saveObject['tips'] = game.tips;
        localStorage.setItem(this.slotName(this.currentSlot), JSON.stringify(this.saveObject));
        game.statistics.submitStats();
      }
      //*******************************************************************************************************************
      // * Load
      //*******************************************************************************************************************

    }, {
      key: 'load',
      value: function load(index) {
        this.currentSlot = index;
        var data = JSON.parse(localStorage.getItem(this.slotName(this.currentSlot)));
        this.loadItems(data);
        this.loadPlayer(data);
        this.loadForge(data);
        this.loadWorld(data);
        this.loadLoot(data);
        this.loadTips(data);
        this.awardKey(data);
        game.statistics.submitStats();
      }
    }, {
      key: 'loadPlayer',
      value: function loadPlayer(data) {
        game.player.exp = data.player.exp;
        game.player.lvl = data.player.lvl;
        game.player.equipSlots = data.player.equipSlots;
        game.player.basicSpent = data.player.basicSpent;
        game.player.passivePoints = data.player.passivePoints;
        game.player.basicPoints = data.player.basicPoints;
        data.player.passives.forEach(function (p, i) {
          return game.player.passives[i].active = p.active;
        });
        game.player.basicStats = this.statsFromData(data.player.basicStats);
        game.player.refreshStats();
        game.player.reset();
      }
    }, {
      key: 'loadItems',
      value: function loadItems(data) {
        var _this = this;

        var groupNames = ['items', 'equips', 'goblets'];
        groupNames.forEach(function (groupName) {
          var group = data.player[groupName];
          group.forEach(function (itemData, index) {
            return game.player[groupName][index] = _this.itemFromData(itemData);
          });
        });
      }
    }, {
      key: 'loadForge',
      value: function loadForge(data) {
        game.forge.manuallyDismantledItems = data.forge.manuallyDismantledItems;
        game.forge.progress = data.forge.progress;
        game.forge.level = data.forge.level;
        game.forge.rewards = data.forge.rewards;
      }
    }, {
      key: 'loadWorld',
      value: function loadWorld(data) {
        var _this2 = this;

        var dataKeys = data.world.keys || [];
        dataKeys.forEach(function (itemData, index) {
          return game.world.keys[index] = _this2.itemFromData(itemData);
        });
        game.world.shownFin = data.world.shownFin || false;
        game.world.shownSecondFin = data.world.shownSecondFin || false;
        game.world.areas.forEach(function (area, index) {
          area.unlocked = data.world.areas[index].unlocked;
          area.furthestReached = data.world.areas[index].furthestReached;
        });
      }
    }, {
      key: 'loadLoot',
      value: function loadLoot(data) {
        var keysGained = data.loot.keysGained || [];
        game.loot.itemsGained = data.loot.itemsGained;
        game.loot.highestMonsterLevel = data.loot.highestMonsterLevel;
        game.loot.gobletsGained = data.loot.gobletsGained;
        game.loot.keysGained = keysGained;
      }
    }, {
      key: 'loadTips',
      value: function loadTips(data) {
        game.tips.all.forEach(function (t, i) {
          return t.shown = data.tips.all[i] ? data.tips.all[i].shown : false;
        });
      }
    }, {
      key: 'awardKey',
      value: function awardKey(data) {
        var gameBeat = data.world.shownFin;
        var keyInInventory = data.player.items.find(function (i) {
          return i && i.type == 10;
        });
        var keyInOrb = data.world.keys && data.world.keys.find(function (i) {
          return i && i.type == 10;
        });
        if (gameBeat && !keyInInventory && !keyInOrb) {
          game.player.gainItem(new Key(1));
          game.loot.keysGained[1] = true;
        }
      }
      //*******************************************************************************************************************
      // * Misc Loaders
      //*******************************************************************************************************************

    }, {
      key: 'itemFromData',
      value: function itemFromData(itemData) {
        if (itemData) {
          var level = itemData.level;
          var type = itemData.type;
          var rarity = itemData.rarity;
          var item = itemData.type == 9 ? new Goblet(level) : itemData.type == 10 ? new Key(level) : new Item(level, type, rarity);
          item.stats = this.statsFromData(itemData.stats);
          return item;
        }
        return null;
      }
    }, {
      key: 'statsFromData',
      value: function statsFromData(statData) {
        var stats = new Stats();
        stats.addFromData(statData);
        //Object.entries(statData).forEach(([key, value]) => stats[key] = value)
        return stats;
      }
      //*******************************************************************************************************************
      // * Miscelenceous
      //*******************************************************************************************************************

    }, {
      key: 'slotName',
      value: function slotName(index) {
        return 'tgSaveSlot' + index;
      }
    }, {
      key: 'dataAtSlot',
      value: function dataAtSlot(index) {
        var data = JSON.parse(localStorage.getItem(this.slotName(index)));
        return data;
      }
    }, {
      key: 'deleteSave',
      value: function deleteSave(index) {
        localStorage.removeItem(this.slotName(index));
      }
    }]);

    return Storage;
  }();

  return Storage;
});
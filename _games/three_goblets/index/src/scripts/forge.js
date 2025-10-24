'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game', 'dataForgeRewards'], function (game, DataForgeRewards) {
  //*******************************************************************************************************************
  // ** The Forge
  //*******************************************************************************************************************
  var Forge = function () {
    function Forge() {
      _classCallCheck(this, Forge);

      this.manuallyDismantledItems = 0;
      this.progress = 0;
      this.level = 1;
      this.levelTiers = [];
      this.rewards = [];
      this.initializeLevelTiers();
    }

    _createClass(Forge, [{
      key: 'initializeLevelTiers',
      value: function initializeLevelTiers() {
        this.levelTiers[0] = 0;
        for (var i = 0; i < 199; i++) {
          var prev = this.levelTiers[i - 1] || 0;
          var need = Math.round(5 * i + 10 * Math.pow(i, 2) + 10 * Math.pow(i, 3));
          this.levelTiers[i + 1] = prev + need;
        }
      }
    }, {
      key: 'dismantleItem',
      value: function dismantleItem(item) {
        var gain = 2 * item.level + Math.pow(item.level, 2);
        this.gainProgress(gain);
      }
    }, {
      key: 'gainProgress',
      value: function gainProgress(gain) {
        var _this = this;

        var levelCurrent = this.level;
        this.progress += gain;
        this.level = this.levelTiers.findIndex(function (n, i) {
          return _this.progress >= n && _this.progress < _this.levelTiers[i + 1];
        });
        var levelsGained = this.level - levelCurrent;
        if (levelsGained > 0) {
          this.giveReward(levelsGained);
        }
      }
    }, {
      key: 'giveReward',
      value: function giveReward(levelsGained) {
        for (var i = this.level - levelsGained; i < this.level; i++) {
          var reward = DataForgeRewards[i - 1] || DataForgeRewards[DataForgeRewards.length - 1];
          this.rewards.unshift(reward);
        }
      }
      //*******************************************************************************************************************
      // * Claim
      //*******************************************************************************************************************

    }, {
      key: 'claim',
      value: function claim(reward) {
        this[reward.type + 'Claim'](reward.params);
      }
    }, {
      key: 'itemClaim',
      value: function itemClaim(_ref) {
        var _ref2 = _slicedToArray(_ref, 4),
            level = _ref2[0],
            type = _ref2[1],
            rarity = _ref2[2],
            count = _ref2[3];

        for (var i = 0; i < count; i++) {
          var finalRarity = rarity || game.loot.generateRandomRarity(200);
          var item = game.loot.generateItem(level, type, finalRarity);
          game.player.gainItem(item);
        }
      }
    }, {
      key: 'itemBatchClaim',
      value: function itemBatchClaim(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3),
            level = _ref4[0],
            rarity = _ref4[1],
            count = _ref4[2];

        var unlocked = game.loot.possible();
        unlocked.forEach(function (type) {
          for (var i = 0; i < count; i++) {
            var finalRarity = rarity || game.loot.generateRandomRarity(200);
            var item = game.loot.generateItem(level, type, finalRarity);
            game.player.gainItem(item);
          }
        });
      }
    }, {
      key: 'basicPointClaim',
      value: function basicPointClaim(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            count = _ref6[0];

        game.player.basicPoints += count;
      }
    }, {
      key: 'passivePointClaim',
      value: function passivePointClaim(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
            count = _ref8[0];

        game.player.passivePoints += count;
      }
    }, {
      key: 'unlockSlotClaim',
      value: function unlockSlotClaim(_ref9) {
        var _ref10 = _slicedToArray(_ref9, 1),
            index = _ref10[0];

        game.player.unlockEquipSlot(index);
        var item = game.loot.generateItem(null, game.player.itemTypeAtIndex(index), null);
        game.player.gainItem(item);
      }
    }]);

    return Forge;
  }();

  return Forge;
});
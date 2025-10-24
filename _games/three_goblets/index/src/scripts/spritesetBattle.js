'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game', 'spritePool'], function (game, SpritePool) {
  //*******************************************************************************************************************
  // ** The Battle Spriteset
  //*******************************************************************************************************************
  var SpritesetBattle = function () {
    function SpritesetBattle(rects, battle) {
      _classCallCheck(this, SpritesetBattle);

      this.rects = rects;
      this.battle = battle;
      this.monsterSprites = [];
      this.hpSprites = [];
      this.attackSprites = [];
      this.rectSprites = [];
      this.modSprites = [];
      this.pauseSprite = null;
      this.levelSprite = null;
      this.spritePool = new SpritePool(game.graphics);
      this.setupOther();
    }

    _createClass(SpritesetBattle, [{
      key: 'setup',
      value: function setup() {
        this.setupMonsterSprites();
        this.setupOther();
      }
    }, {
      key: 'setupMonsterSprites',
      value: function setupMonsterSprites() {
        var _this = this;

        game.encounter.monsters.forEach(function (monster, index) {
          _this.addMonsterSprite(monster, index);
        });
      }
    }, {
      key: 'setupOther',
      value: function setupOther() {
        this.levelSprite = game.graphics.addText(157, 1, '');
        this.levelSprite.anchor.x = 1.0;
        this.pauseSprite = game.graphics.addText(3, 1, '');
      }
    }, {
      key: 'addMonsterSprite',
      value: function addMonsterSprite(monster, index) {
        var sprite = this.spritePool.request('monster', index, 'Sprite');
        sprite.anchor.y = 1.0;
        this.monsterSprites[index] = sprite;

        var hpSprite = this.spritePool.request('hp', index, 'Text');
        hpSprite.y = 59;
        this.hpSprites[index] = hpSprite;

        var attackSprite = this.spritePool.request('attack', index, 'Sprite');
        attackSprite.y = 32;
        this.attackSprites[index] = attackSprite;

        var rectSprite = this.spritePool.request('rect', index, 'Rect');
        this.rectSprites[index] = rectSprite;

        var modSprite = this.spritePool.request('mod', index, 'Sprite');
        modSprite.texture = game.graphics.getTexture('item0');
        modSprite.y = 11;
        modSprite.anchor.x = 0.5;
        this.modSprites[index] = modSprite;
      }
    }, {
      key: 'refresh',
      value: function refresh() {
        this.hide();
        this.monsterSprites = [];
        this.hpSprites = [];
        this.attackSprites = [];
        this.rectSprites = [];
        this.modSprites = [];
        this.setupMonsterSprites();
      }
      //*******************************************************************************************************************
      // * Update
      //*******************************************************************************************************************

    }, {
      key: 'update',
      value: function update() {
        this.updateActiveMonsters();
        this.updateAllMonsters();
        this.updateOther();
      }
    }, {
      key: 'updateActiveMonsters',
      value: function updateActiveMonsters() {
        var _this2 = this;

        game.encounter.getActive().forEach(function (monster, index) {
          var i = game.encounter.monsters.indexOf(monster);
          var rect = _this2.rects[i] || { x: 0, y: 0, w: 0, h: 0 };
          var center = rect.x + rect.w / 2;
          //if (!this.monsterSprites[i]) debugger
          _this2.monsterSprites[i].x = rect.x;
          _this2.monsterSprites[i].y = rect.y + rect.h;

          _this2.rectSprites[i].x = rect.x - 1.5;
          _this2.rectSprites[i].y = rect.y - 1.5;
          _this2.modSprites[i].x = Math.round(center);

          _this2.hpSprites[i].text = monster.hp.toString();
          _this2.hpSprites[i].x = Math.round(center - _this2.hpSprites[i].width / 2);

          _this2.monsterSprites[i].texture = game.graphics.getTexture('mon' + monster.graphic);
          if (monster.stateActive('freeze')) {
            _this2.monsterSprites[i].texture = game.graphics.getModifiedTexture('mon' + monster.graphic, 'dithered');
          }
          _this2.modSprites[i].texture = game.graphics.getTexture(monster.mod ? 'mod' + monster.modData.icon : 0);

          game.graphics.redrawRect(_this2.rectSprites[i], { x: 0, y: 0, w: rect.w + 4, h: rect.h + 4 }, 8, 2);
        });
      }
    }, {
      key: 'updateAllMonsters',
      value: function updateAllMonsters() {
        var _this3 = this;

        game.encounter.monsters.forEach(function (monster, i) {
          var rect = _this3.rects[i] || { x: 0, y: 0, w: 0, h: 0 };
          var center = rect.x + rect.w / 2;

          _this3.monsterSprites[i].visible = monster && (monster.hp > 0 || monster.timers.death > 0 && !_this3.battle.stopped());
          _this3.hpSprites[i].visible = monster && (monster.hp > 0 || monster.timers.death > 0 && !monster.div);
          _this3.attackSprites[i].visible = monster && monster.timers.damage > 0;
          _this3.rectSprites[i].visible = monster && monster.hp > 0 && game.input.mouseWithin(_this3.rects[i]) && !_this3.battle.defeated;
          _this3.modSprites[i].visible = monster && monster.hp > 0 && monster.mod !== undefined;
          _this3.monsterSprites[i].scale.y = 1.0;

          if (monster.timers.damage > 0) {
            _this3.attackSprites[i].texture = _this3.attackAnimationTexture(monster, monster.timers.damage);
            _this3.attackSprites[i].x = Math.round(center - _this3.attackSprites[i].width / 2);
            _this3.hpSprites[i].text = monster.hp.toString();
            _this3.hpSprites[i].x = Math.round(center - _this3.hpSprites[i].width / 2);
          }
          if (monster.timers.action > 0) {
            var offsets = [-1, -3, -2, 0, 3, 8, 8, 8, 8, 8, 8, 8, 4, 2, 1];
            _this3.monsterSprites[i].y = rect.y + rect.h + offsets[15 - monster.timers.action];
          }
          if (monster.timers.appear > 0) {
            _this3.monsterSprites[i].y = rect.y + rect.h + 2;
            var iter = 5 - monster.timers.appear;
            _this3.monsterSprites[i].texture = game.graphics.getModifiedTexture('mon' + monster.graphic, 'appearing' + iter);
            //this.monsterSprites[i].scale.y = (6 - monster.timers.appear) / 5
          }
          if (monster.timers.death > 0 && monster.timers.damage == 0 && !_this3.battle.stopped()) {
            _this3.monsterSprites[i].visible = monster.timers.death % 2 == 0 ? true : false;
          }
        });
      }
    }, {
      key: 'updateOther',
      value: function updateOther() {
        this.levelSprite.text = 'Floor ' + (game.encounter.floor + 1).toString();
        var pauseText = this.battle.selecting ? 'Select a monster to start attacking.' : this.battle.paused ? 'Paused.' : this.battle.defeated ? 'You Fell. Click to respawn.' : this.battle.victorious ? 'Area cleared! Click to proceed.' : '';
        this.pauseSprite.text = pauseText;
        this.levelSprite.visible = !this.battle.selecting;
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'addMonster',
      value: function addMonster(monster) {
        var index = this.monsterSprites.length;
        this.addMonsterSprite(monster, index);
      }
    }, {
      key: 'hide',
      value: function hide() {
        this.monsterSprites.forEach(function (s) {
          return s.visible = false;
        });
        this.hpSprites.forEach(function (s) {
          return s.visible = false;
        });
        this.attackSprites.forEach(function (s) {
          return s.visible = false;
        });
        this.rectSprites.forEach(function (s) {
          return s.visible = false;
        });
        this.modSprites.forEach(function (s) {
          return s.visible = false;
        });
      }
    }, {
      key: 'attackAnimationTexture',
      value: function attackAnimationTexture(monster, timer) {
        var types = { default: 'attack', swp: 'sweep', cri: 'critical', cas: 'fireball', spl: 'splash', sup: 'cross' };
        var name = types[monster.lastAttackType] + 'Anim';
        return game.graphics.getTexture(name + ' ' + (7 - timer));
      }
    }]);

    return SpritesetBattle;
  }();

  return SpritesetBattle;
});
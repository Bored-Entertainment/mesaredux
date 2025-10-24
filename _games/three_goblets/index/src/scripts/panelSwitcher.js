'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game'], function (game) {
  //*******************************************************************************************************************
  // ** Switch for Panels
  //*******************************************************************************************************************
  var PanelSwitcher = function () {
    function PanelSwitcher(panels, position) {
      var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, PanelSwitcher);

      this.panels = panels;
      this.x = x;
      this.width = 0;
      this.height = 0;
      this.sprites = {};
      this.position = position;
      this.initialize();
      this.initializePosition();
      this.setup();
    }

    _createClass(PanelSwitcher, [{
      key: 'initializePosition',
      value: function initializePosition() {
        if (this.position == 'top') {
          this.y = 60;
        } else if (this.position == 'bot') {
          this.y = 75;
        }
      }
    }, {
      key: 'initialize',
      value: function initialize() {
        this.bars = {};
        this.bars.panel = { x: 0, y: 0, w: 9, h: 9, s: 1, n: this.panels.length, l: this.panels.length };
      }
      //*******************************************************************************************************************
      // * Setup
      //*******************************************************************************************************************

    }, {
      key: 'setup',
      value: function setup() {
        this.setupSprites();
        //this.updateSprites()
      }
    }, {
      key: 'setupSprites',
      value: function setupSprites() {
        this.setupBarSprites();
      }
    }, {
      key: 'setupBarSprites',
      value: function setupBarSprites() {
        var _this = this;

        Object.entries(this.bars).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              bar = _ref2[1];

          var _loop = function _loop(i) {
            var x = _this.getBarRectX(i, bar);
            var y = _this.getBarRectY(i, bar);
            var rect = _this.adjustedRect({ x: x, y: y, w: bar.w, h: bar.h });
            _this.sprites[name + i] = {};
            _this[name + 'BarSetupSprites'](_this.sprites[name + i], rect, i);
            Object.entries(_this.sprites[name + i]).forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  n = _ref4[0],
                  s = _ref4[1];

              return _this.sprites[name + i + 'Bar' + n] = s;
            });
          };

          for (var i = 0; i < bar.n; i++) {
            _loop(i);
          }
        });
      }
    }, {
      key: 'panelBarSetupSprites',
      value: function panelBarSetupSprites(sprites, rect, index) {
        sprites.rect = game.graphics.addRect(rect, 0, 2);
        sprites.icon = game.graphics.addSprite(rect.x, rect.y, 'icon' + this.panels[index]);
      }
      //*******************************************************************************************************************
      // * Update
      //*******************************************************************************************************************

    }, {
      key: 'update',
      value: function update() {
        this.updateElements();
        if (Object.values(this.sprites).length > 0) {
          //Bandaid Solution !!!
          this.updateSprites();
        }
        this.updateTooltip();
      }
    }, {
      key: 'updateElements',
      value: function updateElements() {
        this.updateBars();
      }
      //*******************************************************************************************************************
      // * Input
      //*******************************************************************************************************************

    }, {
      key: 'updateBars',
      value: function updateBars() {
        var _this2 = this;

        var leftClick = game.input.mouseClicked;
        var rightClick = game.input.rightUp;
        if (leftClick || rightClick) {
          Object.entries(this.bars).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                name = _ref6[0],
                bar = _ref6[1];

            for (var i = 0; i < bar.n; i++) {
              var x = _this2.getBarRectX(i, bar);
              var y = _this2.getBarRectY(i, bar);
              var rect = _this2.adjustedRect({ x: x, y: y, w: bar.w, h: bar.h });
              if (game.input.mouseWithin(rect)) {
                if (leftClick && _this2[name + 'BarClicked']) {
                  _this2[name + 'BarClicked'](i);
                } else if (rightClick && _this2[name + 'BarRightClicked']) {
                  _this2[name + 'BarRightClicked'](i);
                }
              }
            }
          });
        }
      }
    }, {
      key: 'panelBarClicked',
      value: function panelBarClicked(index) {
        if (this.isActive()) {
          game.panels.activate(this.panels[index]);
        }
      }
      //*******************************************************************************************************************
      // * Update Sprites
      //*******************************************************************************************************************

    }, {
      key: 'updateSprites',
      value: function updateSprites() {
        this.updateBarSprites();
      }
    }, {
      key: 'updateBarSprites',
      value: function updateBarSprites() {
        var _this3 = this;

        Object.entries(this.bars).forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              name = _ref8[0],
              bar = _ref8[1];

          for (var i = 0; i < bar.n; i++) {
            var x = _this3.getBarRectX(i, bar);
            var y = _this3.getBarRectY(i, bar);
            var rect = _this3.adjustedRect({ x: x, y: y, w: bar.w, h: bar.h });
            _this3[name + 'BarUpdateSprites'](_this3.sprites[name + i], rect, i);
          }
        });
      }
    }, {
      key: 'panelBarUpdateSprites',
      value: function panelBarUpdateSprites(sprites, rect, index) {
        sprites.rect.visible = this.isActive();
        sprites.icon.visible = this.isActive();
        var shouldGlow = this.shouldGlow(index);
        var borderColor = this.isActiveAt(index) ? 1 : 2;
        var iconName = 'icon' + this.panels[index];
        sprites.icon.texture = shouldGlow ? game.graphics.getModifiedTexture(iconName, 'glow') : game.graphics.getTexture(iconName);
        game.graphics.redrawRect(sprites.rect, rect, 0, borderColor);
      }
      //*******************************************************************************************************************
      // * Tooltip
      //*******************************************************************************************************************

    }, {
      key: 'updateTooltip',
      value: function updateTooltip() {
        var _this4 = this;

        Object.entries(this.bars).forEach(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              name = _ref10[0],
              bar = _ref10[1];

          for (var i = 0; i < bar.n; i++) {
            var x = _this4.getBarRectX(i, bar);
            var y = _this4.getBarRectY(i, bar);
            var rect = _this4.adjustedRect({ x: x, y: y, w: bar.w, h: bar.h });
            if (game.input.mouseWithin(rect) && _this4[name + 'BarUpdateTooltip']) {
              _this4[name + 'BarUpdateTooltip'](rect, i);
              return;
            }
          }
        });
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'adjustedPos',
      value: function adjustedPos(pos) {
        return { x: this.x + pos.x, y: this.y + pos.y };
      }
    }, {
      key: 'adjustedRect',
      value: function adjustedRect(rect) {
        return { x: this.x + rect.x, y: this.y + rect.y, w: rect.w, h: rect.h };
      }
    }, {
      key: 'getBarRectX',
      value: function getBarRectX(index, bar) {
        var dir = bar.d || 'left';
        switch (dir) {
          case 'left':
            return bar.x + index % bar.l * (bar.w + bar.s);break;
          case 'down':
            return bar.x + Math.floor(index / bar.l) * (bar.h + bar.s);break;
        }
      }
    }, {
      key: 'getBarRectY',
      value: function getBarRectY(index, bar) {
        var dir = bar.d || 'left';
        switch (dir) {
          case 'left':
            return bar.y + Math.floor(index / bar.l) * (bar.h + bar.s);break;
          case 'down':
            return bar.y + index % bar.l * (bar.w + bar.s);break;
        }
      }
    }, {
      key: 'isActive',
      value: function isActive() {
        return game.panels.all['Battle'].active != true && game.panels.all['Title'].active != true; //this.panels.find(n => game.panels.isActive(n))
      }
    }, {
      key: 'isActiveAt',
      value: function isActiveAt(index) {
        return game.panels.isActive(this.panels[index]);
      }
    }, {
      key: 'shouldGlow',
      value: function shouldGlow(index) {
        var notActive = !this.isActiveAt(index);
        var passiveGlow = this.panels[index] == 'Passives' && game.player.passivePoints > 0;
        var plusGlow = this.panels[index] == 'Stats' && game.player.basicPoints > 0;
        var forgeGlow = this.panels[index] == 'Forge' && game.forge.rewards.length > 0;
        return passiveGlow || plusGlow || forgeGlow;
      }
    }]);

    return PanelSwitcher;
  }();

  return PanelSwitcher;
});
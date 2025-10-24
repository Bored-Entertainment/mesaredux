'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game'], function (game) {
  //*******************************************************************************************************************
  // ** The Panel Superclass
  //*******************************************************************************************************************
  var PanelBase = function () {
    function PanelBase(position, active) {
      _classCallCheck(this, PanelBase);

      this.position = position;
      this.active = active;
      this.x = 1;
      this.y = position == 'top' ? 1 : 73;
      this.width = 158;
      this.height = 70;
      this.gaugeTooltipTimers = {};
      this.sprites = {};
      this.barSprites = {};
      this.initialize();
      this.setupBackground();
      this.setup();
    }

    _createClass(PanelBase, [{
      key: 'initialize',
      value: function initialize() {
        this.labels = {};
        this.gauges = {};
        this.buttons = {};
        this.bars = {};
      }
    }, {
      key: 'setupBackground',
      value: function setupBackground() {
        this.rect = { x: this.x, y: this.y, w: this.width, h: this.height };
        this.bgSprite = game.graphics.addRect(this.rect, 0, 1);
        this.bgSprite.z = 0;
      }
      //*******************************************************************************************************************
      // * Setup
      //*******************************************************************************************************************

    }, {
      key: 'setup',
      value: function setup() {
        this.setupElements();
        this.setupSprites();
        this.updateSprites();
        this.determineActiveness();
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {}
    }, {
      key: 'setupSprites',
      value: function setupSprites() {
        this.setupLabelSprites();
        this.setupGaugeSprites();
        this.setupButtonSprites();
        this.setupBarSprites();
      }
    }, {
      key: 'setupLabelSprites',
      value: function setupLabelSprites() {
        var _this = this;

        Object.entries(this.labels).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              label = _ref2[1];

          var text = _this[name + 'LabelText']();
          var pos = _this.adjustedPos(label);
          var align = label.a || 0;
          _this.sprites[name] = game.graphics.addText(0, pos.y, text);
          _this.sprites[name].x = Math.round(label.x - _this.sprites[name].width * align);
        });
      }
    }, {
      key: 'setupGaugeSprites',
      value: function setupGaugeSprites() {
        var _this2 = this;

        Object.entries(this.gauges).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              name = _ref4[0],
              gauge = _ref4[1];

          var rect = _this2.adjustedRect(gauge);
          _this2.sprites[name + 'GaugeBack'] = game.graphics.addRect(rect, gauge.c2, 0, 0);
          _this2.sprites[name + 'GaugeFill'] = game.graphics.addRect(rect, gauge.c1, 0, 0);
        });
      }
    }, {
      key: 'setupButtonSprites',
      value: function setupButtonSprites() {
        var _this3 = this;

        Object.keys(this.buttons).forEach(function (name) {
          var button = _this3.buttons[name];
          var rect = _this3.adjustedRect(button);
          _this3.sprites[name + 'Rect'] = game.graphics.addRect(rect, 0, 2);
          _this3.sprites[name + 'Text'] = game.graphics.addText(rect.x, rect.y, button.text);
          _this3.sprites[name + 'Text'].x = Math.round(rect.x + (rect.w - _this3.sprites[name + 'Text'].width) / 2);
          _this3.sprites[name + 'Text'].y = Math.round(rect.y + (rect.h - _this3.sprites[name + 'Text'].height) / 2);
        });
      }
    }, {
      key: 'setupBarSprites',
      value: function setupBarSprites() {
        var _this4 = this;

        Object.entries(this.bars).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              name = _ref6[0],
              bar = _ref6[1];

          var _loop = function _loop(i) {
            var x = _this4.getBarRectX(i, bar);
            var y = _this4.getBarRectY(i, bar);
            var rect = _this4.adjustedRect({ x: x, y: y, w: bar.w, h: bar.h });
            _this4.barSprites[name + i] = {};
            _this4[name + 'BarSetupSprites'](_this4.barSprites[name + i], rect, i);
            Object.entries(_this4.barSprites[name + i]).forEach(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  n = _ref8[0],
                  s = _ref8[1];

              return _this4.sprites[name + i + 'Bar' + n] = s;
            });
          };

          for (var i = 0; i < bar.n; i++) {
            _loop(i);
          }
        });
      }
      //*******************************************************************************************************************
      // * Update
      //*******************************************************************************************************************

    }, {
      key: 'update',
      value: function update() {
        this.updateElements();
        if (this.active) {
          this.updateSprites();
          this.updateTooltips();
        }
      }
    }, {
      key: 'updateElements',
      value: function updateElements() {
        this.updateButtons();
        this.updateBars();
      }
    }, {
      key: 'updateButtons',
      value: function updateButtons() {
        var _this5 = this;

        Object.keys(this.buttons).forEach(function (name) {
          var button = _this5.buttons[name];
          var rect = _this5.adjustedRect(button);
          if (_this5[name + 'ButtonUpdateState']) {
            _this5[name + 'ButtonUpdateState'](button);
          }
          if (game.input.mouseClicked && game.input.mouseWithin(rect) && button.e) {
            _this5[name + 'ButtonClicked']();
          }
        });
      }
    }, {
      key: 'updateBars',
      value: function updateBars() {
        var _this6 = this;

        var leftClick = game.input.mouseClicked;
        var rightClick = game.input.rightUp;
        var keyDown = game.input.key;
        if (leftClick || rightClick || keyDown) {
          Object.entries(this.bars).forEach(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2),
                name = _ref10[0],
                bar = _ref10[1];

            var _loop2 = function _loop2(i) {
              var shortcuts = bar.shortcuts || [];
              var x = _this6.getBarRectX(i, bar);
              var y = _this6.getBarRectY(i, bar);
              var rect = _this6.adjustedRect({ x: x, y: y, w: bar.w, h: bar.h });
              if (game.input.mouseWithin(rect) && !bar.disabled) {
                if (leftClick && _this6[name + 'BarClicked']) {
                  _this6[name + 'BarClicked'](i);
                } else if (rightClick && _this6[name + 'BarRightClicked']) {
                  _this6[name + 'BarRightClicked'](i);
                }
                shortcuts.forEach(function (_ref11) {
                  var _ref12 = _slicedToArray(_ref11, 2),
                      fun = _ref12[0],
                      key = _ref12[1];

                  if (key == keyDown.toLowerCase()) {
                    _this6[name + 'Bar' + fun + 'Shortcut'](i);
                  }
                });
              }
            };

            for (var i = 0; i < bar.n; i++) {
              _loop2(i);
            }
          });
        }
      }
    }, {
      key: 'updateSprites',
      value: function updateSprites() {
        this.updateLabelSprites();
        this.updateGaugeSprites();
        this.updateButtonSprites();
        this.updateBarSprites();
      }
    }, {
      key: 'updateLabelSprites',
      value: function updateLabelSprites() {
        var _this7 = this;

        Object.entries(this.labels).forEach(function (_ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
              name = _ref14[0],
              label = _ref14[1];

          var align = label.a || 0;
          _this7.sprites[name].text = _this7[name + 'LabelText']();
          _this7.sprites[name].x = Math.round(label.x - _this7.sprites[name].width * align);
        });
      }
    }, {
      key: 'updateButtonSprites',
      value: function updateButtonSprites() {
        var _this8 = this;

        Object.entries(this.buttons).forEach(function (_ref15) {
          var _ref16 = _slicedToArray(_ref15, 2),
              name = _ref16[0],
              button = _ref16[1];

          var rect = _this8.adjustedRect(button);
          _this8.sprites[name + 'Rect'].x = rect.x + 0.5;
          _this8.sprites[name + 'Rect'].y = rect.y + 0.5;
          _this8.sprites[name + 'Text'].x = Math.round(rect.x + (rect.w - _this8.sprites[name + 'Text'].width) / 2);
          _this8.sprites[name + 'Text'].y = Math.round(rect.y + (rect.h - _this8.sprites[name + 'Text'].height) / 2 - 2);
          _this8.sprites[name + 'Rect'].visible = button.v;
          _this8.sprites[name + 'Text'].visible = button.v;
          _this8.sprites[name + 'Text'].tint = button.e ? 0xffffff : 0x4f4f4f;
          _this8.sprites[name + 'Text'].text = button.text;
        });
      }
    }, {
      key: 'updateGaugeSprites',
      value: function updateGaugeSprites() {
        var _this9 = this;

        Object.entries(this.gauges).forEach(function (_ref17) {
          var _ref18 = _slicedToArray(_ref17, 2),
              name = _ref18[0],
              gauge = _ref18[1];

          var _ref19 = _this9[name + 'GaugeValues'](),
              v1 = _ref19.v1,
              v2 = _ref19.v2;

          var rectBack = _this9.adjustedRect(gauge);
          var rect = { x: rectBack.x, y: rectBack.y, w: Math.round(rectBack.w * v2 / v1), h: rectBack.h };
          game.graphics.redrawRect(_this9.sprites[name + 'GaugeFill'], rect, gauge.c1, 0, 0);
        });
      }
    }, {
      key: 'updateBarSprites',
      value: function updateBarSprites() {
        var _this10 = this;

        Object.entries(this.bars).forEach(function (_ref20) {
          var _ref21 = _slicedToArray(_ref20, 2),
              name = _ref21[0],
              bar = _ref21[1];

          for (var i = 0; i < bar.n; i++) {
            var x = _this10.getBarRectX(i, bar);
            var y = _this10.getBarRectY(i, bar);
            var rect = _this10.adjustedRect({ x: x, y: y, w: bar.w, h: bar.h });
            _this10[name + 'BarUpdateSprites'](_this10.barSprites[name + i], rect, i);
          }
        });
      }
    }, {
      key: 'updateTooltips',
      value: function updateTooltips() {
        this.updateBarTooltips();
        this.updateGaugeTooltips();
      }
    }, {
      key: 'updateBarTooltips',
      value: function updateBarTooltips() {
        var _this11 = this;

        Object.entries(this.bars).forEach(function (_ref22) {
          var _ref23 = _slicedToArray(_ref22, 2),
              name = _ref23[0],
              bar = _ref23[1];

          for (var i = 0; i < bar.n; i++) {
            var x = _this11.getBarRectX(i, bar);
            var y = _this11.getBarRectY(i, bar);
            var rect = _this11.adjustedRect({ x: x, y: y, w: bar.w, h: bar.h });
            if (game.input.mouseWithin(rect) && _this11[name + 'BarUpdateTooltip']) {
              _this11[name + 'BarUpdateTooltip'](rect, i);
              return;
            }
          }
        });
      }
    }, {
      key: 'updateGaugeTooltips',
      value: function updateGaugeTooltips() {
        var _this12 = this;

        Object.entries(this.gauges).forEach(function (_ref24) {
          var _ref25 = _slicedToArray(_ref24, 2),
              name = _ref25[0],
              gauge = _ref25[1];

          var rect = _this12.adjustedRect(gauge);
          _this12.gaugeTooltipTimers[name] = Math.max(_this12.gaugeTooltipTimers[name] - 1, 0);
          if (game.input.mouseMovedDistance > 1) {
            _this12.gaugeTooltipTimers[name] = 5;
          }
          if (game.input.mouseWithin(rect) && _this12.gaugeTooltipTimers[name] == 0 && _this12[name + 'GaugeUpdateTooltip']) {
            _this12[name + 'GaugeUpdateTooltip'](rect);
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
        var breakOffset = this.breakOffset(index, bar);
        var dir = bar.d || 'left';
        switch (dir) {
          case 'left':
            return bar.x + index % bar.l * (bar.w + bar.s) + breakOffset;break;
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
      key: 'breakOffset',
      value: function breakOffset(index, bar) {
        var _ref26 = bar.b || [1, 0, false],
            _ref27 = _slicedToArray(_ref26, 3),
            breakNumber = _ref27[0],
            breakLength = _ref27[1],
            _ref27$ = _ref27[2],
            evenCollumns = _ref27$ === undefined ? false : _ref27$;

        if (evenCollumns) {
          index = index % bar.l;
        }
        return Math.floor(index / breakNumber) * breakLength;
      }
    }, {
      key: 'setDraggedItem',
      value: function setDraggedItem(item) {
        game.draggedItem = item;
      }
    }, {
      key: 'getDraggedItem',
      value: function getDraggedItem() {
        return game.draggedItem;
      }
    }, {
      key: 'setDraggedSkill',
      value: function setDraggedSkill(skill) {
        game.draggedSkill = skill;
      }
    }, {
      key: 'getDraggedSkill',
      value: function getDraggedSkill() {
        return game.draggedSkill;
      }
    }, {
      key: 'setTooltip',
      value: function setTooltip(x, y, text) {
        var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        game.tooltips[index].set(x, y, text);
      }
    }, {
      key: 'refresh',
      value: function refresh() {
        this.updateSprites();
        this.updateTooltips();
      }
      //*******************************************************************************************************************
      // * Toggle
      //*******************************************************************************************************************

    }, {
      key: 'determineActiveness',
      value: function determineActiveness() {
        if (!this.active) {
          this.deactivate();
        }
      }
    }, {
      key: 'activate',
      value: function activate() {
        var _this13 = this;

        this.active = true;
        Object.values(this.sprites).concat([this.bgSprite]).forEach(function (s) {
          return s.visible = _this13.active;
        });
      }
    }, {
      key: 'deactivate',
      value: function deactivate() {
        var _this14 = this;

        this.active = false;
        Object.values(this.sprites).concat([this.bgSprite]).forEach(function (s) {
          return s.visible = _this14.active;
        });
      }
    }]);

    return PanelBase;
  }();

  return PanelBase;
});
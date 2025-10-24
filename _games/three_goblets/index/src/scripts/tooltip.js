'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game'], function (game) {
  //*******************************************************************************************************************
  // ** The Tooltip - Enough Said
  //*******************************************************************************************************************
  var Tooltip = function () {
    function Tooltip() {
      _classCallCheck(this, Tooltip);

      this.text = '';
      this.x = 0;
      this.y = 0;
      this.align = 'down';
      this.setup();
    }

    _createClass(Tooltip, [{
      key: 'setup',
      value: function setup() {
        this.sprites = { bg: null, text: null };
        this.sprites.bg = game.graphics.addRect({ x: 0, y: 0, w: 0, h: 0 }, 0, 2, 1, 'tooltip');
        this.sprites.text = game.graphics.addText(0, 0, '', 'tooltip');
        Object.values(this.sprites).forEach(function (s) {
          return s.visible = false;
        });
      }
      //*******************************************************************************************************************
      // * Base Functions
      //*******************************************************************************************************************

    }, {
      key: 'set',
      value: function set(x, y, text) {
        var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
            _ref$align = _ref.align,
            align = _ref$align === undefined ? 'down' : _ref$align;

        this.x = x;
        this.y = y;
        this.align = align;
        this.text = text;
        this.refresh();
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.set(0, 0, '');
      }
    }, {
      key: 'refresh',
      value: function refresh() {
        this.sprites.text.visible = this.text != '';
        this.sprites.bg.visible = this.text != '';
        this.sprites.text.text = this.text;
        var width = this.sprites.text.width + 8;
        var height = this.sprites.text.height + 6;
        var x = this.x;
        var y = this.align == 'down' ? this.y - height - 1 : this.y;
        x = Math.round(Math.max(Math.min(x, 157 - width), 3));
        y = Math.round(Math.max(Math.min(y, 141 - height), 3));
        this.sprites.text.x = x + 4;
        this.sprites.text.y = y + 2;
        this.sprites.bg.x = x + 0.5;
        this.sprites.bg.y = y + 0.5;
        game.graphics.redrawRect(this.sprites.bg, { w: width, h: height }, 0, 2);
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'getSize',
      value: function getSize() {
        return { w: this.sprites.bg.width, h: this.sprites.bg.height };
      }
    }]);

    return Tooltip;
  }();

  return Tooltip;
});
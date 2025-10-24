'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define([], function () {
  //*******************************************************************************************************************
  // ** A Sprite Pool for Efficient and clean sprite usage
  //*******************************************************************************************************************
  var ClassName = function () {
    function ClassName(graphics) {
      _classCallCheck(this, ClassName);

      this.graphics = graphics;
      this.monsterPool = [];
      this.hpPool = [];
      this.attackPool = [];
      this.rectPool = [];
      this.modPool = [];
    }

    _createClass(ClassName, [{
      key: 'request',
      value: function request(pool, index, type) {
        if (this.available(pool, index)) {
          return this.pull(pool, index);
        } else {
          return this.add(pool, index, type);
        }
      }
    }, {
      key: 'pull',
      value: function pull(pool, index) {
        return this[pool + 'Pool'][index];
      }
    }, {
      key: 'add',
      value: function add(pool, index, type) {
        var sprite = this['add' + type]();
        this[pool + 'Pool'][index] = sprite;
        return sprite;
      }
    }, {
      key: 'addSprite',
      value: function addSprite() {
        return this.graphics.addSprite(0, 0, '');
      }
    }, {
      key: 'addText',
      value: function addText() {
        return this.graphics.addText(0, 0, '');
      }
    }, {
      key: 'addRect',
      value: function addRect() {
        return this.graphics.addRect({ x: 0, y: 0, w: 0, h: 0 }, 0, 0);
      }
    }, {
      key: 'available',
      value: function available(pool, index) {
        return this[pool + 'Pool'][index] !== undefined;
      }
    }]);

    return ClassName;
  }();

  return ClassName;
});
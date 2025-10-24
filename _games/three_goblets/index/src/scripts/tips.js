'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game', 'dataTips'], function (game, DataTips) {
  //*******************************************************************************************************************
  // ** Usefull Tips
  //*******************************************************************************************************************
  var Tips = function () {
    function Tips() {
      _classCallCheck(this, Tips);

      this.initializeTips();
    }

    _createClass(Tips, [{
      key: 'initializeTips',
      value: function initializeTips() {
        var _this = this;

        this.all = [];
        DataTips.forEach(function (data) {
          var tip = {};
          tip.text = data.text;
          tip.requirement = data.requirement;
          tip.position = data.position;
          tip.shown = false;
          _this.all.push(tip);
        });
      }
    }, {
      key: 'update',
      value: function update() {
        this.all.forEach(function (tip) {
          if (game.config.tips && tip.shown == false && tip.requirement(game)) {
            game.panels.showTip(tip);
            tip.shown = true;
          }
        });
      }
    }]);

    return Tips;
  }();

  return Tips;
});
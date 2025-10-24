'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['game'], function (game) {
  //*******************************************************************************************************************
  // ** Class for Handling Statistics Api Integration
  //*******************************************************************************************************************
  var Statistics = function () {
    function Statistics() {
      _classCallCheck(this, Statistics);

      this.initialize();
      this.kongregateAPI = null;
    }

    _createClass(Statistics, [{
      key: 'initialize',
      value: function initialize() {
        var _this = this;

        if (typeof kongregateAPI !== 'undefined') {
          kongregateAPI.loadAPI(function () {
            _this.kongregateAPI = kongregateAPI.getAPI();
          });
        }
      }
      //*******************************************************************************************************************
      // * Submitting
      //*******************************************************************************************************************

    }, {
      key: 'submit',
      value: function submit(name, value) {
        if (this.kongregateAPI) {
          this.kongregateAPI.stats.submit(name, value);
        }
        //console.log(name, value)
      }
    }, {
      key: 'submitMonstersKilled',
      value: function submitMonstersKilled() {
        this.submit('MonstersKilled', 1);
      }
    }, {
      key: 'submitDeaths',
      value: function submitDeaths() {
        this.submit('Deaths', 1);
      }
    }, {
      key: 'submitPlayerLevel',
      value: function submitPlayerLevel() {
        this.submit('PlayerLevel', game.player.lvl);
      }
    }, {
      key: 'submitAreasCleared',
      value: function submitAreasCleared() {
        this.submit('AreasUnlocked', game.world.areas.filter(function (a) {
          return a.unlocked;
        }).length);
      }
    }, {
      key: 'submitGameFinished',
      value: function submitGameFinished() {
        if (game.world.shownFin) {
          this.submit('GameFinished', 1);
        }
      }
    }, {
      key: 'submitStats',
      value: function submitStats() {
        this.submitPlayerLevel();
        this.submitAreasCleared();
        this.submitGameFinished();
      }
    }]);

    return Statistics;
  }();

  return Statistics;
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['encounterGenerator'], function (EncounterGenerator) {
  //*******************************************************************************************************************
  // ** An Area
  //*******************************************************************************************************************
  var Area = function () {
    function Area(id, dataPool) {
      _classCallCheck(this, Area);

      this.id = id;
      this.data = dataPool[id];
      this.name = this.data.name;
      this.length = this.data.length;
      this.level = this.data.level;
      this.goblet = this.data.goblet || null;
      this.key = this.data.key || null;
      this.unlocked = false;
      this.furthestReached = 0;
      this.itemsGained = 0;
      this.encounterGenerator = new EncounterGenerator();
      this.encounterIndex = 0;
      this.encounter = null;
      this.reset();
    }

    _createClass(Area, [{
      key: 'reset',
      value: function reset() {
        this.itemsGained = 0;
        this.encounterIndex = 0;
        this.encounters = [];
        for (var i = 0; i < this.length; i++) {
          var floor = i;
          var encounterData = this.data.encounters ? this.data.encounters[floor] : null;
          var level = this.level;
          var encounter = this.encounterGenerator.generate(floor, encounterData, level);
          this.encounters.push(encounter);
        }
        this.encounter = this.encounters[0];
      }
    }, {
      key: 'nextEncounter',
      value: function nextEncounter() {
        this.encounterIndex += 1;
        return this.encounters[this.encounterIndex];
      }
      //*******************************************************************************************************************
      // * Save to Storage
      //*******************************************************************************************************************

    }, {
      key: 'toJSON',
      value: function toJSON() {
        return { unlocked: this.unlocked, furthestReached: this.furthestReached };
      }
    }]);

    return Area;
  }();

  return Area;
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['areaGenerator', 'dataAreas', 'dataMaps'], function (AreaGenerator, DataAreas, DataMaps) {
  //*******************************************************************************************************************
  // ** The game World
  //*******************************************************************************************************************
  var World = function () {
    function World() {
      _classCallCheck(this, World);

      this.areaGenerator = new AreaGenerator();
      this.initializeAreas();
      this.initialzeMaps();
      this.keys = [];
      this.keySelected = 'none';
      this.shownFin = false;
      this.shownSecondFin = false;
      this.area = this.areas[0];
      //this.testValues()
    }

    _createClass(World, [{
      key: 'initializeAreas',
      value: function initializeAreas() {
        this.areas = [];
        for (var i = 0; i < DataAreas.length; i++) {
          this.areas.push(this.areaGenerator.generateArea(i));
        }
        this.areas[0].unlocked = true;
      }
    }, {
      key: 'initialzeMaps',
      value: function initialzeMaps() {
        this.maps = [];
        for (var i = 0; i < DataMaps.length; i++) {
          this.maps.push(this.areaGenerator.generateMap(i));
        }
      }
    }, {
      key: 'unlockNext',
      value: function unlockNext(current) {
        var currentIndex = this.areas.indexOf(current);
        var lockedArea = this.areas[currentIndex + 1];
        if (lockedArea) {
          lockedArea.unlocked = true;
        }
      }
    }, {
      key: 'unlocked',
      value: function unlocked(index) {
        return this.areas[index] && this.areas[index].unlocked;
      }
    }, {
      key: 'finalArea',
      value: function finalArea() {
        return this.areas.indexOf(this.area) == this.areas.length - 1;
      }
    }, {
      key: 'finalMap',
      value: function finalMap() {
        return this.maps.indexOf(this.area) == this.maps.length - 1;
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'testValues',
      value: function testValues() {
        var values = this.areas.map(function (area) {
          var mhp = 0;
          var dmg = 0;
          var count = 0;
          area.encounters.forEach(function (encounter) {
            mhp += encounter.monsters.reduce(function (t, m) {
              return t + m.mhp;
            }, 0);
            dmg += encounter.monsters.reduce(function (t, m) {
              return t + m.dmg;
            }, 0);
            count += encounter.monsters.length;
          });
          return { mhp: mhp, dmg: dmg, count: count };
        });
        console.table(values);
      }
    }]);

    return World;
  }();

  return World;
});
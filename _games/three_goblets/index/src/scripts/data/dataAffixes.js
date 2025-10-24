'use strict';

define([''], function () {
  //*******************************************************************************************************************
  // ** Affix Data
  //*******************************************************************************************************************
  var affixes = [
  //{stat:['hpr',  0.10], curve:0, level:3,  gear:[2, 3, 5, 6]},
  { stat: ['aps', 0.12], curve: 1, level: 0, gear: [0, 3, 5] }, { stat: ['arm', 0.22], curve: 0, level: 0, gear: [1, 2, 3, 4, 5] }, { stat: ['dmg', 0.15], curve: 0, level: 0, gear: [0, 1, 3, 4, 5] }, { stat: ['mhp', 0.20], curve: 0, level: 0, gear: [1, 2, 4, 5] },
  //{stat:['spl',  0.50], curve:1, level:0,  gear:[0, 4, 6]},
  //{stat:['swp',  0.50], curve:1, level:8,  gear:[0, 4, 6]},
  { inc: ['mhp', 0.20], curve: 1, level: 18, gear: [1, 2, 4, 5] }, { inc: ['arm', 0.20], curve: 1, level: 12, gear: [1, 2, 4, 5] }, { inc: ['dmg', 0.20], curve: 1, level: 24, gear: [0, 3, 5] }];

  return affixes;
});
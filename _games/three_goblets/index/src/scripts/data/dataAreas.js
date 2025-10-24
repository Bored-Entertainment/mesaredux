'use strict';

define([''], function () {
  //*******************************************************************************************************************
  // ** Area Data
  //*******************************************************************************************************************
  var areas = [
  //*******************************************************************************************************************
  // * Act 1
  //*******************************************************************************************************************
  { name: 'Sunny Hills', length: 5, level: 1, encounters: [[{ l: 1, n: 2 }], [{ l: 1, n: 4 }], [{ l: 2, n: 2 }], [{ l: 2, n: 4 }], [{ l: 1, n: 1 }, 'ogre', { l: 2, n: 1 }]] }, { name: 'Moon Forest', length: 6, level: 4, encounters: [[{ l: 1, n: 2 }], [{ l: 1, n: 3 }], [{ l: 1, n: 4 }, { a: ['rootplant'], i: 2 }], [{ l: 3, n: 2 }], [{ l: 3, n: 4 }], [{ a: ['butterfly', 'imoon', 'butterfly'] }]] }, { name: 'The Highest Peak', length: 7, level: 8, goblet: 1, encounters: [[{ l: 1, n: 2 }], [{ l: 1, n: 3 }], [{ a: ['eye', 'eye', 'eye'], m: 'powerful' }], [{ l: 3, n: 2 }], [{ l: 1, n: 2 }, { a: ['hemoth'], i: 1 }], [{ l: 3, n: 3, m: 'powerful' }], [{ a: ['dragonl', 'dragonr'], m: 'powerful' }]] },
  //*******************************************************************************************************************
  // * Act 2
  //*******************************************************************************************************************
  { name: 'Foul Outskirts', length: 5, level: 13, encounters: [[{ l: 1, n: 3 }], [{ l: 3, n: 2, m: 'poison' }], [{ a: ['abom'] }], [{ l: 3, n: 4, m: 'poison' }], [{ a: ['abom', 'abom'], m: 'poison' }, { a: ['reaper'], i: 1 }]] }, { name: 'Clay Labirinth', length: 8, level: 18, encounters: [[{ l: 1, n: 3 }], [{ l: 1, n: 3, m: 'clayfalla' }], [{ a: ['bull'], m: 'clayfallb' }], [{ l: 3, n: 2 }], [{ l: 3, n: 2, m: 'clayfallb' }], [{ l: 3, n: 1, m: 'clayfallc' }], [{ a: ['statue', 'statue', 'statue', 'statue'] }], [{ a: ['minotaur'], m: 'clayfalld' }]] }, { name: 'Puppeteer\'s Palace', length: 6, level: 24, goblet: 2, encounters: [[{ l: 1, n: 3 }], [{ l: 1, n: 4, m: 'poison' }], [{ l: 1, n: 2 }, { a: ['puppeteera'], m: 'puppetmaster', i: 1 }], [{ l: 3, n: 2, m: 'shielding' }, { a: ['puppeteerb'], m: 'puppetmaster', i: 1 }], [{ l: 3, n: 3 }, { a: ['puppeteerc'], m: 'puppetmaster', i: 1 }], [{ l: 3, n: 1, m: 'poison' }, { a: ['puppeteerd'], m: 'puppetstand' }, { l: 3, n: 1, m: 'poison' }]] },
  //*******************************************************************************************************************
  // * Act 3
  //*******************************************************************************************************************
  { name: 'Underground', length: 3, level: 28, encounters: [[{ a: ['portala'], m: 'portala' }], [{ a: ['portalb'], m: 'portalb' }], [{ a: ['portalc'], m: 'portalc' }]] }, { name: 'The Crimson Gate', length: 7, level: 32, goblet: 3, encounters: [[{ a: ['sloth'] }], [{ a: ['greed'] }], [{ a: ['gluttony'] }], [{ a: ['wrath'] }], [{ a: ['lust'] }], [{ a: ['envy'] }], [{ a: ['pride'] }]] }, { name: 'Deep Bellow', length: 12, level: 37, key: 1, encounters: [[{ l: 1, n: 3 }], [{ l: 1, n: 4 }], [{ l: 1, n: 2 }, { a: ['abodemon'], i: 1 }], [{ l: 3, n: 2 }], [{ l: 3, n: 3 }], [{ l: 3, n: 2 }, { a: ['dreila'], i: 1 }], [{ l: 5, n: 3, m: 'poison' }, { l: 5, n: 2, m: 'poison' }], [{ l: 5, n: 2, m: 'shielding' }, { l: 5, n: 3 }, { l: 5, n: 2, m: 'shielding' }], [{ l: 5, n: 2, m: 'shielding' }, { a: ['dreilb'], i: 2 }, { l: 5, n: 2, m: 'poison' }], [{ l: 7, n: 2, m: 'death' }], [{ l: 7, n: 3, m: 'death' }], [{ a: ['dreilc'], m: 'scytheweave' }]] }];

  return areas;
});
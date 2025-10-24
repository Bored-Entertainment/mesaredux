'use strict';

define([''], function () {
  //*******************************************************************************************************************
  // ** Tips Data
  //*******************************************************************************************************************
  var tips = [{
    position: 'top',
    text: 'You can dismantle items at Forge.\nAfter dismantling enough items,\nyou can claim a reward.',
    requirement: function requirement(game) {
      return game.player.items.length > 9 && game.forge.level == 1 && !game.panels.isActive('Battle');
    }
  }, {
    position: 'bot',
    text: 'You can use Shift + Click to\ndismantle items instead of drag and\ndropping them. You can also press \'S\'\nwhile hovering over the item.',
    requirement: function requirement(game) {
      return game.forge.manuallyDismantledItems >= 5;
    }
  }, {
    position: 'bot',
    text: 'Some monsters have dangerous\nMods. Pause the battle and hover\nover the icons to inspect them.\nTo pause, Press \'P\' or \'SPACE\'.',
    requirement: function requirement(game) {
      return game.encounter && game.encounter.monsters && game.encounter.monsters.find(function (m) {
        return m.specialAttack() && game.encounter.monsters.every(function (m) {
          return m.timers.appear == 0;
        });
      });
    }
  }, {
    position: 'top',
    text: 'Note that any point you allocate to\na skill can be unallocated by simply\nclicking on the skill again.',
    requirement: function requirement(game) {
      return game.player.passivePoints > 0 && game.player.passives.filter(function (a) {
        return a.active;
      }).length >= 3 && game.panels.isActive('Passives') && !game.world.shownFin;
    }
  }];

  return tips;
});
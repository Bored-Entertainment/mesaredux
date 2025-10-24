'use strict';

define([''], function () {
  //*******************************************************************************************************************
  // ** Monster Data
  //*******************************************************************************************************************
  var types = [{ icon: 2, stats: [['buf', 25]], duration: 4,
    tooltips: {
      buf: function buf(player, goblet) {
        return 'Grants +' + goblet.mainStat.value + '% Damage.\n';
      },
      bld: function bld(player, goblet) {
        return 'Grants ' + player.bld * 10 + '% more Armor.\n' + 'Leech ' + player.bld + '% of Damage dealt as Life.\n';
      }
    }
  }, { icon: 1, stats: [['spe', 50]], duration: 2,
    tooltips: {
      spe: function spe(player, goblet) {
        return 'Grants +' + goblet.mainStat.value + '% Atk Speed.\n';
      },
      bst: function bst(player, goblet) {
        return 'Grants ' + player.bst + '% more Atk Speed.\n';
      },
      men: function men(player, goblet) {
        return 'Cures Poisons and Weakness debuffs.\n';
      }
    }
  }, { icon: 3, stats: [['hph', 10]], duration: 3,
    tooltips: {
      hph: function hph(player, goblet) {
        return 'Restore ' + goblet.mainStat.value + '% of Life per second.\n';
      },
      rar: function rar(player, goblet) {
        return 'Recharges Freeze and Cross Strike.\n';
      },
      ren: function ren(player, goblet) {
        return 'Restore all Energy Shield.\n';
      }
    }
  }];

  return types;
});
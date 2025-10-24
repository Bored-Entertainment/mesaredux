'use strict';

define([''], function () {
    //*******************************************************************************************************************
    // ** Monster Mod Data
    //*******************************************************************************************************************
    var monsterMods = {
        powerful: { icon: 1, multis: [['dmg', 4], ['mhp', 2], ['aps', 0.5]], specialAttack: true,
            tooltip: 'Powerfull attacks:\nDeals 4x Damage.' },

        poison: { icon: 3, multis: [['mhp', 1.5], ['aps', 0.8]], stats: [['poi', 4]], specialAttack: true,
            tooltip: 'Poison attacks:\nDeals 4% of Max Life as Damage\nper second. Lasts indefinitely.\nMultiple poisons can stack.' },

        death: { icon: 4, multis: [['mhp', 1.3], ['aps', 0.7]], stats: [['det', 100]], specialAttack: true,
            tooltip: 'Null attacks:\nReduces Life to 0.' },

        weakening: { icon: 6, multis: [['mhp', 1.4], ['aps', 0.75]], stats: [['wea', 20]], specialAttack: true,
            tooltip: 'Weakening attacks:\nApplies a debuff of 20% less Damage\nand Atk Speed. Lasts indefinitely.\nCan stack up to 3 debuffs.' },

        shielding: { icon: 2, multis: [['mhp', 1.3]], stats: [['shl', 1]],
            tooltip: 'Other monsters take\n75% reduced Damage.' },

        slow: { icon: 5, multis: [['mhp', 1.2]], stats: [['slo', 40]],
            tooltip: 'Slows you down by applying\n- 40% to your Atk Speed.' },

        rejuvenation: { icon: 7, multis: [['mhp', 1.3]], stats: [['rej', 1]],
            tooltip: 'Other monsters restore\n35% of Max Life per second.' },

        // Summon
        puppetmaster: { icon: 0, stats: [['ret', 50]] },
        puppetstand: { icon: 0, stats: [['smn', 1]] },
        scytheweave: { icon: 0, stats: [['smn', 2]] },

        portala: { icon: 0, stats: [['smn', 3]] },
        portalb: { icon: 0, stats: [['smn', 4]] },
        portalc: { icon: 0, stats: [['smn', 5]] },

        breathoffire: { icon: 0, stats: [['smn', 6]] },
        sinbreed: { icon: 10, stats: [['smn', 7]], tooltip: 'This monster will replicate\nitself within 0.5 seconds of\ndestroying it\'s clone.' },
        queenspawn: { icon: 0, stats: [['smn', 8]] },

        armageddon: { icon: 9, stats: [['smn', 9], ['pro', 100], ['dfl', 10]],
            tooltip: 'Cannot be damaged, but\nloses 10% of Max Life when\na meteor is destroyed.' },

        // On Death
        clayfalla: { icon: 0, stats: [['div', 1]] },
        clayfallb: { icon: 0, stats: [['div', 2]] },
        clayfallc: { icon: 0, stats: [['div', 3]] },
        clayfalld: { icon: 0, stats: [['div', 4]] },

        creategems: { icon: 0, stats: [['div', 5]] },
        reemerge: { icon: 0, stats: [['div', 6]] },
        sinspawn: { icon: 0, stats: [['div', 7]] },

        slimesplita: { icon: 11, stats: [['div', 8]], tooltip: 'Splits itself after being destroyed,\nintroducing new dangers.' },
        slimesplitb: { icon: 11, stats: [['div', 9]], tooltip: 'Splits itself after being destroyed,\nintroducing new dangers.' },
        slimesplitc: { icon: 11, stats: [['div', 10]], tooltip: 'Splits itself after being destroyed,\nintroducing new dangers.' },
        reshape: { icon: 0, stats: [['div', 11]] },
        slimesplitxa: { icon: 11, stats: [['div', 12]], tooltip: 'Splits itself after being destroyed,\nintroducing new dangers.' },
        slimesplitxb: { icon: 11, stats: [['div', 13]], tooltip: 'Splits itself after being destroyed,\nintroducing new dangers.' },
        slimesplitxc: { icon: 11, stats: [['div', 14]], tooltip: 'Splits itself after being destroyed,\nintroducing new dangers.' },
        slimesplitxd: { icon: 11, stats: [['div', 15]], tooltip: 'Splits itself after being destroyed,\nintroducing new dangers.' },

        fracture: { icon: 0, stats: [['div', 16]] },
        rearrange: { icon: 8, multis: [['mhp', 2.1]], stats: [['div', 17], ['csh', 1]],
            tooltip: 'Cannot be damaged while\nother shards are alive.' }
    };

    return monsterMods;
});
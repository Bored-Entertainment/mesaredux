(() => {
  var _0x1eb76f;
  var _0x117779 = {
    0x356: (_0x1ed0f4, _0x47ee47, _0xadcf39) => {
      'use strict';

      _0xadcf39.d(_0x47ee47, {
        'RR': () => false,
        'lG': () => 0x0,
        'hu': () => false,
        'Ax': () => false,
        'R$': () => 683,
        '$7': () => 512,
        'mg': () => 0x1c8,
        'aM': () => 0x156,
        'Or': () => _0x67570c,
        'Lh': () => _0xfe7efc,
        'tb': () => _0x572c9f,
        '_F': () => 0.5,
        'l6': () => _0x3dbb73,
        'ZP': () => _0x1d0e6c,
        'lx': () => _0x2fcc22,
        'n5': () => _0x25efe0
      });
      var _0x2d874d = _0xadcf39(0x104);
      var _0x2fbe76;
      var _0xdd31c0 = _0xadcf39(0x1e9);
      class _0x206a30 extends Phaser.Geom.Rectangle {
        constructor(_0x8f005f = 0x1, _0x24857f = 0x0, _0x3e133b = 0x0) {
          super(0x0, 0x0, 0x0, 0x0);
          this.index = 0x1;
          this.width = _0x24857f > 0x0 ? _0x24857f : _0x1d0e6c.Core.scene.renderer.width * _0x8f005f;
          this.height = _0x3e133b > 0x0 ? _0x3e133b : _0x1d0e6c.Core.scene.renderer.height * _0x8f005f;
        }
        ["DespawnIfOutside"](_0x388fd6) {
          const _0x1ce933 = _0x388fd6[this.index % _0x388fd6.length];
          this.index++;
          if (!_0x1ce933) {
            return false;
          }
          if (!_0x1ce933.isCullable && !_0x1ce933.isTeleportOnCull) {
            return false;
          }
          var _0x82c085 = Math.abs(_0x1d0e6c.Core.Player.x - _0x1ce933.x);
          var _0x31f93e = Math.abs(_0x1d0e6c.Core.Player.y - _0x1ce933.y);
          if (!this.contains(_0x82c085, _0x31f93e)) {
            if (_0x1ce933.isTeleportOnCull) {
              _0x1ce933.OnTeleportOnCull();
              return false;
            }
            _0x1ce933.DeSpawn();
          }
          return true;
        }
        ["Contains"](_0x556bd4) {
          var _0x152295 = Math.abs(_0x1d0e6c.Core.Player.x - _0x556bd4.x);
          var _0x390d90 = Math.abs(_0x1d0e6c.Core.Player.y - _0x556bd4.y);
          return this.contains(_0x152295, _0x390d90);
        }
      }
      !function (_0x519b2b) {
        _0x519b2b[_0x519b2b.VOID = 0x0] = 'VOID';
        _0x519b2b.ANTONIO = "ANTONIO";
        _0x519b2b.IMELDA = "IMELDA";
        _0x519b2b.PASQUALINA = "PASQUALINA";
        _0x519b2b.GENNARO = "GENNARO";
        _0x519b2b.ARCA = 'CIRO';
        _0x519b2b.PORTA = "PORTA";
        _0x519b2b.EXDASH = "EXDASH";
        _0x519b2b.MORTACCIO = "MORTACCIO";
        _0x519b2b.PANDA = "PANDA";
        _0x519b2b.PAESANO = "CAMILLO";
        _0x519b2b.DOMMARIO = "DOMMARIO";
        _0x519b2b.GEGIU = "GEGIU";
        _0x519b2b.GERMANA = "GERMANA";
        _0x519b2b.POPPEA = "POPPEA";
        _0x519b2b.PUGNALA = "PUGNALA";
        _0x519b2b.GIOVANNA = 'GIOVANNA';
        _0x519b2b.GRAZIELLA = 'GRAZIELLA';
        _0x519b2b.VERANDA = "VERANDA";
        _0x519b2b.TATANKA = 'TATANKA';
        _0x519b2b.LATODILATO = "LATODILATO";
        _0x519b2b.LATODISOPRO = "LATODISOPRO";
        _0x519b2b.LATODISOTTO = "LATODISOTTO";
        _0x519b2b.LATOEVEST = "LATOEVEST";
      }(_0x2fbe76 || (_0x2fbe76 = {}));
      var _0x2a5ca3;
      !function (_0x30d306) {
        _0x30d306[_0x30d306.VOID = 0x0] = "VOID";
        _0x30d306.MAGIC_MISSILE = "MAGIC_MISSILE";
        _0x30d306.HOLY_MISSILE = "HOLY_MISSILE";
        _0x30d306.WHIP = 'WHIP';
        _0x30d306.VAMPIRICA = "VAMPIRICA";
        _0x30d306.AXE = 'AXE';
        _0x30d306.SCYTHE = "SCYTHE";
        _0x30d306.KNIFE = "KNIFE";
        _0x30d306.THOUSAND = "THOUSAND";
        _0x30d306.HOLYWATER = "HOLYWATER";
        _0x30d306.DIAMOND = "DIAMOND";
        _0x30d306.FIREBALL = "FIREBALL";
        _0x30d306.HELLFIRE = "HELLFIRE";
        _0x30d306.HOLYBOOK = 'HOLYBOOK';
        _0x30d306.VESPERS = 'VESPERS';
        _0x30d306.CROSS = "CROSS";
        _0x30d306.HEAVENSWORD = "HEAVENSWORD";
        _0x30d306.GARLIC = 'GARLIC';
        _0x30d306.LAUREL = "LAUREL";
        _0x30d306.THORNS = "THORNS";
        _0x30d306.BONE = "BONE";
        _0x30d306.LANCET = "LANCET";
        _0x30d306.LIGHTNING = "LIGHTNING";
        _0x30d306.SILF = "SILF";
        _0x30d306.SILF2 = "SILF2";
        _0x30d306.PENTAGRAM = 'PENTAGRAM';
        _0x30d306.MIGHT = "POWER";
        _0x30d306.AREA = "AREA";
        _0x30d306.SPEED = "SPEED";
        _0x30d306.COOLDOWN = "COOLDOWN";
        _0x30d306.DURATION = "DURATION";
        _0x30d306.AMOUNT = "AMOUNT";
        _0x30d306.MAXHEALTH = 'MAXHEALTH';
        _0x30d306.ARMOR = 'ARMOR';
        _0x30d306.MOVESPEED = "MOVESPEED";
        _0x30d306.MAGNET = "MAGNET";
        _0x30d306.GROWTH = "GROWTH";
        _0x30d306.LUCK = "LUCK";
        _0x30d306.GREED = 'GREED';
        _0x30d306.REGEN = 'REGEN';
      }(_0x2a5ca3 || (_0x2a5ca3 = {}));
      const _0x4774f8 = {
        [_0x2fbe76.ANTONIO]: [{
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.WHIP,
          'cooldown': 0x1,
          'charName': "Antonio",
          'surname': "Belpaese",
          'spriteName': "Antonio_01.png",
          'walkingFrames': 0x4,
          'description': "Attacks deal 10% more damage every 10 levels (max +50%).",
          'isBought': true,
          'price': 0x0,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1,
          'showcase': [_0x2a5ca3.WHIP, _0x2a5ca3.WHIP, _0x2a5ca3.WHIP, _0x2a5ca3.WHIP, _0x2a5ca3.WHIP, _0x2a5ca3.WHIP, _0x2a5ca3.WHIP, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.VAMPIRICA],
          'debugTime': 0x1,
          'debugEnemies': 0xc8
        }, {
          'power': 0.1,
          'level': 0xa
        }, {
          'power': 0.1,
          'level': 0x14,
          'growth': 0x1
        }, {
          'power': 0.1,
          'level': 0x1e
        }, {
          'power': 0.1,
          'level': 0x28,
          'growth': 0x1
        }, {
          'power': 0.1,
          'level': 0x32
        }, {
          'level': 0x15,
          'growth': -0x1
        }, {
          'level': 0x29,
          'growth': -0x1
        }],
        [_0x2fbe76.IMELDA]: [{
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.MAGIC_MISSILE,
          'cooldown': 0x1,
          'charName': "Imelda",
          'surname': 'Belpaese',
          'spriteName': "Imelda_01.png",
          'walkingFrames': 0x4,
          'description': "Gains 10% more experience every 5 levels (max +30%).",
          'isBought': false,
          'price': 0xa,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1,
          'showcase': [_0x2a5ca3.MAGIC_MISSILE, _0x2a5ca3.MAGIC_MISSILE, _0x2a5ca3.MAGIC_MISSILE, _0x2a5ca3.MAGIC_MISSILE, _0x2a5ca3.MAGIC_MISSILE, _0x2a5ca3.MAGIC_MISSILE, _0x2a5ca3.MAGIC_MISSILE, _0x2a5ca3.HOLYWATER, _0x2a5ca3.HOLYWATER, _0x2a5ca3.HOLYWATER, _0x2a5ca3.HOLYWATER, _0x2a5ca3.HOLYWATER, _0x2a5ca3.HOLYWATER, _0x2a5ca3.HOLYWATER, _0x2a5ca3.HOLYWATER, _0x2a5ca3.HOLY_MISSILE, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AMOUNT, _0x2a5ca3.AMOUNT, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL],
          'debugTime': 0xb4,
          'debugEnemies': 0x1f4
        }, {
          'growth': 0.1,
          'level': 0x5
        }, {
          'growth': 0.1,
          'level': 0xa
        }, {
          'growth': 0.1,
          'level': 0xf
        }, {
          'growth': 0x1,
          'level': 0x14
        }, {
          'growth': 0x1,
          'level': 0x28
        }, {
          'level': 0x15,
          'growth': -0x1
        }, {
          'level': 0x29,
          'growth': -0x1
        }],
        [_0x2fbe76.PASQUALINA]: [{
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.DIAMOND,
          'cooldown': 0x1,
          'charName': "Pasqualina",
          'surname': "Belpaese",
          'spriteName': "Pasqualina_01.png",
          'walkingFrames': 0x4,
          'description': "Projectiles get 10% faster every 5 levels (max +30%).",
          'isBought': false,
          'price': 0x64,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 1.1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1,
          'showcase': [_0x2a5ca3.DIAMOND, _0x2a5ca3.DIAMOND, _0x2a5ca3.DIAMOND, _0x2a5ca3.DIAMOND, _0x2a5ca3.DIAMOND, _0x2a5ca3.DIAMOND, _0x2a5ca3.DIAMOND, _0x2a5ca3.GARLIC, _0x2a5ca3.GARLIC, _0x2a5ca3.GARLIC, _0x2a5ca3.GARLIC, _0x2a5ca3.GARLIC, _0x2a5ca3.GARLIC, _0x2a5ca3.GARLIC, _0x2a5ca3.GARLIC, _0x2a5ca3.MOVESPEED, _0x2a5ca3.MOVESPEED, _0x2a5ca3.MOVESPEED, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AMOUNT, _0x2a5ca3.AMOUNT, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION],
          'debugTime': 0xf0,
          'debugEnemies': 0x1f4
        }, {
          'speed': 0.1,
          'level': 0x5
        }, {
          'speed': 0.1,
          'level': 0xa
        }, {
          'speed': 0.1,
          'level': 0xf
        }, {
          'growth': 0x1,
          'level': 0x14
        }, {
          'growth': 0x1,
          'level': 0x28
        }, {
          'level': 0x15,
          'growth': -0x1
        }, {
          'level': 0x29,
          'growth': -0x1
        }],
        [_0x2fbe76.GENNARO]: [{
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.KNIFE,
          'charName': "Gennaro",
          'surname': 'Belpaese',
          'spriteName': "Gennaro_01.png",
          'walkingFrames': 0x4,
          'description': "Permanent +1 projectile (all weapons).",
          'isBought': false,
          'price': 0x1f4,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x1,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1,
          'showcase': [_0x2a5ca3.KNIFE, _0x2a5ca3.KNIFE, _0x2a5ca3.KNIFE, _0x2a5ca3.KNIFE, _0x2a5ca3.KNIFE, _0x2a5ca3.KNIFE, _0x2a5ca3.KNIFE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.LIGHTNING, _0x2a5ca3.LIGHTNING, _0x2a5ca3.LIGHTNING, _0x2a5ca3.LIGHTNING, _0x2a5ca3.LIGHTNING, _0x2a5ca3.LIGHTNING, _0x2a5ca3.LIGHTNING, _0x2a5ca3.LIGHTNING, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.MAXHEALTH, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AMOUNT, _0x2a5ca3.AMOUNT, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED],
          'debugTime': 0x3c,
          'debugEnemies': 0x190
        }, {
          'growth': 0x1,
          'level': 0x14
        }, {
          'growth': 0x1,
          'level': 0x28
        }, {
          'level': 0x15,
          'growth': -0x1
        }, {
          'level': 0x29,
          'growth': -0x1
        }],
        [_0x2fbe76.ARCA]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.FIREBALL,
          'charName': 'Arca',
          'surname': 'Ladonna',
          'spriteName': 'Arca_01.png',
          'walkingFrames': 0x6,
          'description': "Weapon cooldown is reduced by 5% every 10 levels. (max -15%)",
          'portraitName': 'p_arca.png',
          'isBought': false,
          'price': 0xfa,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1,
          'showcase': [_0x2a5ca3.FIREBALL, _0x2a5ca3.FIREBALL, _0x2a5ca3.FIREBALL, _0x2a5ca3.FIREBALL, _0x2a5ca3.FIREBALL, _0x2a5ca3.FIREBALL, _0x2a5ca3.FIREBALL, _0x2a5ca3.FIREBALL, _0x2a5ca3.CROSS, _0x2a5ca3.CROSS, _0x2a5ca3.CROSS, _0x2a5ca3.CROSS, _0x2a5ca3.CROSS, _0x2a5ca3.CROSS, _0x2a5ca3.CROSS, _0x2a5ca3.CROSS, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.HELLFIRE, _0x2a5ca3.MIGHT, _0x2a5ca3.MIGHT, _0x2a5ca3.MIGHT, _0x2a5ca3.MIGHT, _0x2a5ca3.MIGHT, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AMOUNT, _0x2a5ca3.AMOUNT, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED],
          'debugTime': 0x78,
          'debugEnemies': 0x190
        }, {
          'cooldown': -0.05,
          'level': 0xa
        }, {
          'cooldown': -0.05,
          'level': 0x14,
          'growth': 0x1
        }, {
          'cooldown': -0.05,
          'level': 0x1e
        }, {
          'growth': 0x1,
          'level': 0x28
        }, {
          'level': 0x15,
          'growth': -0x1
        }, {
          'level': 0x29,
          'growth': -0x1
        }],
        [_0x2fbe76.PORTA]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.LIGHTNING,
          'charName': "Porta",
          'surname': 'Ladonna',
          'spriteName': 'Porta_01.png',
          'walkingFrames': 0x7,
          'description': "Permanent +30% area. Starts with temporarily reduced cooldown.",
          'portraitName': 'p_porta.png',
          'isBought': false,
          'price': 0xfa,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 1.3,
          'speed': 0x1,
          'cooldown': 0.1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1,
          'luck': 0x1,
          'showcase': [_0x2a5ca3.LIGHTNING, _0x2a5ca3.PENTAGRAM, _0x2a5ca3.PENTAGRAM, _0x2a5ca3.PENTAGRAM, _0x2a5ca3.PENTAGRAM, _0x2a5ca3.PENTAGRAM, _0x2a5ca3.PENTAGRAM, _0x2a5ca3.PENTAGRAM, _0x2a5ca3.KNIFE, _0x2a5ca3.KNIFE, _0x2a5ca3.KNIFE],
          'debugTime': 0x12c,
          'debugEnemies': 0xc8
        }, {
          'level': 0x2,
          'cooldown': 0.3
        }, {
          'level': 0x3,
          'cooldown': 0.3
        }, {
          'level': 0x4,
          'cooldown': 0.3
        }, {
          'growth': 0x1,
          'level': 0x14
        }, {
          'growth': 0x1,
          'level': 0x28
        }, {
          'level': 0x15,
          'growth': -0x1
        }, {
          'level': 0x29,
          'growth': -0x1
        }],
        [_0x2fbe76.PAESANO]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.PENTAGRAM,
          'charName': "Il Paesano",
          'surname': '',
          'spriteName': "Old2.png",
          'description': '...',
          'isBought': false,
          'price': 0x1,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1
        }],
        [_0x2fbe76.DOMMARIO]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.HEAVENSWORD,
          'charName': "Dommario",
          'surname': '',
          'spriteName': "Arca_01.png",
          'walkingFrames': 0x6,
          'description': '...',
          'isBought': false,
          'price': 0x1,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1,
          'luck': 0x1
        }],
        [_0x2fbe76.GRAZIELLA]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.AXE,
          'charName': "Graziella",
          'surname': "Belpaese",
          'spriteName': "Sword1.png",
          'description': "Effects last longer for every 10 levels.",
          'isBought': false,
          'price': 0x1,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 1.05,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 1.05
        }, {
          'duration': 0.05,
          'level': 0xa
        }, {
          'duration': 0.05,
          'level': 0x14
        }, {
          'duration': 0.05,
          'level': 0x1e
        }, {
          'duration': 0.05,
          'level': 0x28
        }, {
          'duration': 0.05,
          'level': 0x32
        }, {
          'duration': 0.05,
          'level': 0x3c
        }, {
          'duration': 0.05,
          'level': 0x46
        }, {
          'duration': 0.05,
          'level': 0x50
        }, {
          'duration': 0.05,
          'level': 0x5a
        }],
        [_0x2fbe76.VERANDA]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.MAGIC_MISSILE,
          'charName': "Sveva",
          'surname': "Veranda",
          'spriteName': 'crl_chars_28.png',
          'description': "Starts with more projectiles.",
          'isBought': false,
          'price': 0x3e8,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x2,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1
        }],
        [_0x2fbe76.TATANKA]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.CROSS,
          'charName': 'Tatanka',
          'surname': '',
          'spriteName': "Dog.png",
          'description': "Starts with lower cooldowns.",
          'isBought': false,
          'price': 0x3e8,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0.9,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1
        }],
        [_0x2fbe76.MORTACCIO]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.BONE,
          'charName': "Mortaccio",
          'surname': '',
          'spriteName': "Mortaccio_01.png",
          'walkingFrames': 0x4,
          'description': "Gets more projectiles every 20 levels (max+3).",
          'isBought': false,
          'price': 0x64,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1,
          'showcase': [_0x2a5ca3.BONE, _0x2a5ca3.BONE, _0x2a5ca3.BONE, _0x2a5ca3.BONE, _0x2a5ca3.BONE, _0x2a5ca3.BONE, _0x2a5ca3.BONE, _0x2a5ca3.BONE, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.LAUREL, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.ARMOR, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.AREA, _0x2a5ca3.MIGHT, _0x2a5ca3.MIGHT, _0x2a5ca3.MIGHT, _0x2a5ca3.MIGHT, _0x2a5ca3.MIGHT, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.DURATION, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.SPEED, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.AXE, _0x2a5ca3.SCYTHE, _0x2a5ca3.HOLYBOOK, _0x2a5ca3.HOLYBOOK, _0x2a5ca3.HOLYBOOK, _0x2a5ca3.HOLYBOOK, _0x2a5ca3.HOLYBOOK, _0x2a5ca3.HOLYBOOK, _0x2a5ca3.HOLYBOOK, _0x2a5ca3.HOLYBOOK, _0x2a5ca3.VESPERS],
          'debugTime': 0x6cc,
          'debugEnemies': 0x1f4
        }, {
          'amount': 0x1,
          'level': 0x14,
          'growth': 0x1
        }, {
          'amount': 0x1,
          'level': 0x28,
          'growth': 0x1
        }, {
          'amount': 0x1,
          'level': 0x3c
        }, {
          'level': 0x15,
          'growth': -0x1
        }, {
          'level': 0x29,
          'growth': -0x1
        }],
        [_0x2fbe76.EXDASH]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.SILF2,
          'charName': 'Exdash',
          'surname': "Exiviiq",
          'spriteName': "Exdash_01.png",
          'walkingFrames': 0x6,
          'description': "At least they're lucky.",
          'isBought': false,
          'price': 0x309,
          'maxHp': 0x4d,
          'power': 0.9,
          'area': 0.9,
          'speed': 0.5,
          'cooldown': 1.1,
          'amount': 0x0,
          'moveSpeed': 0.9,
          'growth': 0x1,
          'duration': 0.9,
          'luck': 0x2,
          'showcase': [_0x2a5ca3.PENTAGRAM, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.MAGNET, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN, _0x2a5ca3.COOLDOWN]
        }, {
          'luck': 0.1,
          'level': 0xa
        }, {
          'luck': 0.1,
          'level': 0x14,
          'growth': 0x1
        }, {
          'luck': 0.1,
          'level': 0x1e
        }, {
          'luck': 0.1,
          'level': 0x28,
          'growth': 0x1
        }, {
          'luck': 0.1,
          'level': 0x32
        }, {
          'level': 0x15,
          'growth': -0x1
        }, {
          'level': 0x29,
          'growth': -0x1
        }],
        [_0x2fbe76.IATTAPANDA]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.MAGIC_MISSILE,
          'charName': "Iatta",
          'surname': 'Panda',
          'spriteName': "Bear.png",
          'description': "Gets more projectiles every 20 levels.",
          'isBought': false,
          'price': 0x3e8,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1
        }],
        [_0x2fbe76.CAVALLO]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.MAGIC_MISSILE,
          'charName': "Cavallo",
          'surname': "Feroce",
          'spriteName': "Demon.png",
          'description': "Gets more projectiles every 20 levels.",
          'isBought': false,
          'price': 0x3e8,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1
        }],
        [_0x2fbe76.LATOEVEST]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.MAGIC_MISSILE,
          'charName': "Lato",
          'surname': 'Evest',
          'spriteName': 'Demon.png',
          'description': "Gets more projectiles every 20 levels.",
          'isBought': false,
          'price': 0x3e8,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1
        }],
        [_0x2fbe76.LATODILATO]: [{
          'hidden': true,
          'level': 0x1,
          'startingWeapon': _0x2a5ca3.DIAMOND,
          'charName': 'Lato',
          'surname': 'Dilato',
          'spriteName': "Demon.png",
          'description': "Gets more projectiles every 20 levels.",
          'isBought': false,
          'price': 0x3e8,
          'maxHp': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'cooldown': 0x1,
          'amount': 0x0,
          'moveSpeed': 0x1,
          'growth': 0x1,
          'duration': 0x1
        }]
      };
      var _0x3677f0;
      !function (_0x74436f) {
        _0x74436f[_0x74436f.NONE = 0x0] = "NONE";
        _0x74436f[_0x74436f.DEFAULT = 0x1] = "DEFAULT";
        _0x74436f[_0x74436f.TIMEFREEZE = 0x2] = "TIMEFREEZE";
        _0x74436f[_0x74436f.FIRE = 0x3] = "FIRE";
        _0x74436f[_0x74436f.DARK = 0x4] = "DARK";
        _0x74436f[_0x74436f.LIGHT = 0x5] = "LIGHT";
        _0x74436f[_0x74436f.PUSH = 0x6] = "PUSH";
      }(_0x3677f0 || (_0x3677f0 = {}));
      var _0x52c10f;
      !function (_0x2958b9) {
        _0x2958b9.Treasure1 = "Treasure1";
        _0x2958b9.Treasure2 = "Treasure2";
        _0x2958b9.Treasure3 = "Treasure3";
        _0x2958b9.TreasureFound = "TreasureFound";
        _0x2958b9.BGM_GameOver = "BGM_GameOver";
        _0x2958b9.BGM_Intro = 'BGM_Intro';
        _0x2958b9.ClickIn = 'ClickIn';
        _0x2958b9.ClickOut = "ClickOut";
        _0x2958b9.Holywater = "Holywater";
        _0x2958b9.Lightning = "Lightning";
        _0x2958b9.Shot = "Shot";
        _0x2958b9.MagicMissile = 'MagicMissile';
        _0x2958b9.Whip = 'Whip';
        _0x2958b9.LevelUp = "LevelUp";
        _0x2958b9.Hit = 'Hit';
        _0x2958b9.Coin = "Coin";
        _0x2958b9.Gem = "Gem";
        _0x2958b9.Roast = 'Roast';
        _0x2958b9.Vacuum = "Vacuum";
        _0x2958b9.Rosary = "Rosary";
        _0x2958b9.Orologion = 'Orologion';
        _0x2958b9.PentagramSFX = "PentagramSFX";
        _0x2958b9.LossSFX = "LossSFX";
      }(_0x52c10f || (_0x52c10f = {}));
      class _0x9bf392 extends Phaser.Physics.Arcade.Sprite {
        constructor(_0xa817ea, _0x4aaca9, _0xe99b94, _0x5d47b6) {
          super(_0xa817ea, _0x4aaca9, _0xe99b94, "characters", "Antonio_01.png");
          this.radius = 0x9;
          this.lastFacedDirection = new Phaser.Math.Vector2(0x1, 0x0);
          this.hp = 0x64;
          this.isDead = false;
          this.xp = 0x0;
          this.level = 0x1;
          this.maxHp = 0x64;
          this.power = 0x1;
          this.area = 0x1;
          this.speed = 0x1;
          this.cooldown = 0x1;
          this.amount = 0x0;
          this.moveSpeed = 0x1;
          this.growth = 0x1;
          this.duration = 0x1;
          this.luck = 0x1;
          this.shields = 0x0;
          this.armor = 0x0;
          this.greed = 0x1;
          this.regen = 0x0;
          this.startingWeapon = _0x2a5ca3.WHIP;
          this.characterType = _0x2fbe76.ANTONIO;
          this.ghosts = new Array();
          this.posHistory = new Array();
          this.maxHistory = 0x3;
          this.historyIndex = 0x0;
          this.HasWalkingAnimation = false;
          this.invulTime = 0x0;
          this._invul = false;
          this.receivingDamage = false;
          this.characterType = _0x5d47b6;
          _0xa817ea.add.existing(this);
          _0xa817ea.physics.add.existing(this);
          this.setOrigin(0.5, 0x1);
          this.body.setCircle(this.radius);
          this.body.setOffset(0x6, 0x10);
          this.body.immovable = true;
          this.setScale(_0x34bb1a.PixelScale);
          this.setAngle(-0x5);
          this.wiggleTween = this.scene.tweens.add({
            'targets': this,
            'angle': 0x5,
            'duration': 0xfa,
            'ease': "Linear",
            'loop': -0x1,
            'yoyo': true
          });
          this.wiggleTween.pause();
          for (let _0x41494e = 0x0; _0x41494e <= this.maxHistory; _0x41494e++) {
            this.posHistory.push(new Phaser.Math.Vector2(_0x4aaca9, _0xe99b94));
          }
          this.rt = this.scene.add.renderTexture(0x0, 0x0, 0x190, 0x190);
          this.rt.setOrigin(0.5, 0.5);
          this.WorldBoxCollider = new Phaser.Geom.Rectangle(0x0, 0x0, this.scene.renderer.width, this.scene.renderer.height);
          this.PfxEmitter = this.scene.add.particles("vfx").createEmitter({
            'frame': ["WhiteDot.png"],
            'quantity': 0xa,
            'lifespan': 0x7d0,
            'alpha': {
              'start': 0x1,
              'end': 0x0
            },
            'angle': {
              'min': 0xe1,
              'max': 0x13b
            },
            'speed': {
              'min': 0x4b,
              'max': 0x7d
            },
            'scale': {
              'start': 0x2 * _0x34bb1a.PixelScale,
              'end': 0x0
            },
            'gravityY': 0x12c,
            'tint': 0xff0000,
            'bounce': 0.1,
            'bounds': {
              'x': 0x0,
              'y': -0x2,
              'w': 0x0,
              'h': 0x1
            },
            'collideTop': false,
            'collideBottom': true,
            'collideLeft': false,
            'collideRight': false,
            'on': false
          });
          const _0x58e815 = _0x4774f8[this.characterType][0x0];
          if (_0x58e815.walkingFrames) {
            this.HasWalkingAnimation = true;
            const _0x44228d = this.anims.generateFrameNames("characters", {
              'start': 0x1,
              'end': _0x58e815.walkingFrames,
              'zeroPad': 0x2,
              'prefix': _0x58e815.spriteName.replace("01.png", ''),
              'suffix': ".png"
            });
            this.anims.create({
              'key': "walk",
              'frames': _0x44228d,
              'frameRate': 0x8,
              'repeat': -0x1
            });
            this.anims.play('walk');
            this.anims.pause();
          }
          this.regenTimer = this.scene.time.addEvent({
            'delay': 0x3e8,
            'repeat': -0x1,
            'callback': () => {
              this.Regenerate();
            }
          });
        }
        get ["IsInvul"]() {
          return this._invul;
        }
        set ["IsInvul"](_0xbd5736) {
          if (this._invul != _0xbd5736) {
            this._invul = _0xbd5736;
            if (this._invul) {
              this.setTintFill(0xffffbb);
            } else {
              this.clearTint();
            }
          }
        }
        ["RecoverHp"](_0x1e1e80) {
          if (!this.isDead) {
            this.hp += _0x1e1e80;
            if (this.hp > this.maxHp) {
              this.hp = this.maxHp;
            }
            _0x1d0e6c.Core.PlayerUI.Update();
          }
        }
        ["Regenerate"]() {
          if (this.regen > 0x0) {
            this.RecoverHp(this.regen);
          }
        }
        ["LevelUp"]() {
          this.level++;
          var _0x1c960f = _0x4774f8[this.characterType];
          if (_0x1c960f) {
            _0x1c960f = _0x1c960f.find(_0x1197f3 => _0x1197f3.level === this.level);
          }
          if (_0x1c960f) {
            for (const _0xfb90c4 in _0x1c960f) if (this.hasOwnProperty(_0xfb90c4) && "level" != _0xfb90c4) {
              this[_0xfb90c4] += _0x1c960f[_0xfb90c4];
            }
            if (_0x1c960f.cooldown) {
              _0x1d0e6c.Core.ResetWeaponCooldowns();
            }
          }
        }
        ["MakeLevelOne"]() {
          this.level = 0x0;
          let _0x45806a = _0x4774f8[this.characterType][this.level];
          for (const _0x5b31d2 in _0x45806a) if (this.hasOwnProperty(_0x5b31d2)) {
            this[_0x5b31d2] = _0x45806a[_0x5b31d2];
          }
          this.setFrame(_0x45806a.spriteName);
        }
        ["GetDamaged"](_0x54d1cf = 0x1, _0x12840d = _0x3677f0.NONE, _0x133b10 = 0x1, _0x56908e = '') {
          if (!this.receivingDamage && !(this.IsInvul || this.hp <= 0x0)) {
            if (this.shields > 0x0) {
              this.shields -= 0x1;
              this.OnGetDamaged(0xffffbb, 0xf0);
              return void _0x1d0e6c.Core.scene.events.emit("Player_LostShield");
            }
            if (this.armor > 0x0 && (_0x54d1cf -= this.armor) < 0x1) {
              _0x54d1cf = 0x1;
            }
            this.hp -= _0x54d1cf;
            if (this.hp <= 0x0) {
              this.hp = 0x0;
              this.Die();
              _0x1d0e6c.Core.GameOver();
            } else {
              this.OnGetDamaged();
            }
            _0x1d0e6c.Core.PlayerUI.Update();
          }
        }
        ["OnGetDamaged"](_0x29eef6 = 0xff0000, _0xbce873 = 0x78) {
          if (!this.receivingDamage) {
            this.setTintFill(_0x29eef6);
            this._blinkTimeout = _0x1d0e6c.Core.scene.time.addEvent({
              'delay': _0xbce873,
              'loop': false,
              'callback': () => {
                this.restoreTint();
                this.PfxEmitter.stop();
              }
            });
            this._blinkTimeout.name = 'Blink';
            this.PfxEmitter.bounds.y = this.y + 0xc8;
            this.PfxEmitter.setPosition(this.x, this.y - 0x8);
            this.PfxEmitter.start();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.LossSFX, {
              'volume': 0.2,
              'detune': 0x1f4 * Math.random() - 0x1f4
            }, 0x1f4, 0x3);
            this.receivingDamage = true;
          }
        }
        ["OnDeath"]() {
          var _0x13d792;
          if (!(null === (_0x13d792 = this._blinkTimeout) || undefined === _0x13d792)) {
            _0x13d792.destroy();
          }
          this.wiggleTween.pause();
          this.setTintFill(0xff0000);
          this.scene.tweens.add({
            'targets': this,
            'scaleX': 0x2 * _0x34bb1a.PixelScale,
            'duration': 0x3e8,
            'ease': 'Bounce.Out'
          });
          this.scene.tweens.add({
            'targets': this,
            'scaleY': 0x0,
            'duration': 0x3e8,
            'ease': "Linear"
          });
          this.PfxEmitter.bounds.y = this.y - 0x2;
          this.PfxEmitter.setPosition(this.x, this.y - 0x8);
          this.PfxEmitter.start();
          _0x1d0e6c.Core.scene.time.addEvent({
            'delay': 0xfa,
            'loop': false,
            'callback': () => {
              this.PfxEmitter.stop();
            }
          });
          _0x1d0e6c.Core.scene.time.addEvent({
            'delay': 0x4e2,
            'loop': false,
            'callback': () => {
              _0x1d0e6c.Core.SceneManager.GameOver();
            }
          });
        }
        ['Die']() {
          this.isDead = true;
          this.body.enable = false;
          this.OnDeath();
        }
        ["Revive"]() {
          this.isDead = false;
          this.body.enable = true;
          this.setScale(_0x34bb1a.PixelScale);
          this.RecoverHp(this.maxHp);
          this.SetInvulForMilliSeconds(0x7d0);
          _0x1d0e6c.Core.PlayerUI.Update();
        }
        ['SetInvulForMilliSeconds'](_0xaed65d) {
          this.IsInvul = true;
          this.invulTime += _0xaed65d;
        }
        ["restoreTint"]() {
          this.setTint(0xffffff);
          this.receivingDamage = false;
        }
        ["SetCollideWithWorld"](_0x58c61c) {
          this.setCollideWorldBounds(_0x58c61c);
        }
        ["Update"](_0x2e252a = 0x0) {
          if (!this.isDead) {
            this.invulTime -= _0x2e252a;
            if (this.invulTime <= 0x0) {
              this.invulTime = 0x0;
            }
            this.IsInvul = this.invulTime > 0x0;
            this.setDepth(0x0);
            if (this.body.velocity.x < 0x0) {
              this.setFlipX(true);
            }
            if (this.body.velocity.x > 0x0) {
              this.setFlipX(false);
            }
            if (0x0 == this.body.velocity.x && 0x0 == this.body.velocity.y) {
              this.wiggleTween.pause();
              this.setAngle(0x0);
              this.anims.pause();
            } else if (this.HasWalkingAnimation) {
              this.anims.resume();
            } else if (this.wiggleTween.isPaused()) {
              this.wiggleTween.play();
            }
            if (this.historyIndex < this.maxHistory) {
              this.historyIndex++;
            } else {
              this.historyIndex = 0x0;
            }
            this.posHistory[this.historyIndex].copy(this.body.position);
            this.rt.clear();
            this.rt.setDepth(this.depth - 0x1);
            this.rt.alpha = 0.65;
            this.rt.setTint(0xe0e0ff, 0xff, 0xe0e0ff, 0xff);
            for (let _0x26b4d7 = 0x0; _0x26b4d7 <= this.maxHistory; _0x26b4d7++) {
              var _0x47943e = _0x26b4d7 + this.historyIndex;
              var _0x27d0e6 = this.posHistory[_0x47943e % this.maxHistory];
              this.rt.draw(this, 0.5 * this.rt.width + _0x27d0e6.x - this.body.x, 0.5 * this.rt.height + _0x27d0e6.y - this.body.y, 0.1 - 0.1 * _0x26b4d7, 0xff);
            }
            this.rt.copyPosition(this);
            this.WorldBoxCollider.x = this.x - 0.5 * this.scene.renderer.width;
            this.WorldBoxCollider.y = this.y - 0.5 * this.scene.renderer.height;
          }
        }
      }
      class _0x3a929c extends Phaser.Physics.Arcade.Sprite {
        constructor(_0x4488a8, _0x204328, _0x1308c7) {
          super(_0x4488a8, _0x204328, _0x1308c7, 'vfx', "WhiteDot.png");
          this.radius = 0x1e;
          this.visible = false;
          _0x4488a8.physics.add.existing(this);
          this.setScale(_0x1d0e6c.Core.Player.scale);
          this.body.setCircle(this.radius, -this.radius, -this.radius);
        }
        ["RefreshSize"]() {
          this.body.setCircle(this.radius, -this.radius, -this.radius);
        }
        ["Update"]() {
          this.copyPosition(_0x1d0e6c.Core.Player);
          this.y -= 0xc;
        }
      }
      var _0x5b2d7b;
      !function (_0x3b9559) {
        _0x3b9559.VOID = '';
        _0x3b9559.WHIP = 'WHIP';
        _0x3b9559.COIN = "COIN";
        _0x3b9559.COINBAG1 = "COINBAG1";
        _0x3b9559.COINBAG2 = "COINBAG2";
        _0x3b9559.COINBAGMAX = "COINBAGMAX";
        _0x3b9559.GEM = "GEM";
        _0x3b9559.CLOVER = "CLOVER";
        _0x3b9559.TREASURE = "TREASURE";
        _0x3b9559.ROSARY = "ROSARY";
        _0x3b9559.VACUUM = "VACUUM";
        _0x3b9559.OROLOGION = "OROLOGION";
        _0x3b9559.ROAST = 'ROAST';
        _0x3b9559.WEAPON = "WEAPON";
      }(_0x5b2d7b || (_0x5b2d7b = {}));
      const _0x34b109 = {
        [_0x5b2d7b.GEM]: {
          'name': "Experience Gem",
          'description': "Increases experience.",
          'tips': '',
          'texture': 'items',
          'frameName': "GemBlue.png",
          'pickedupAmount': 0x0,
          'rarity': 0x0,
          'unlocksAt': 0x186a0,
          'value': 0x32,
          'inTreasures': false,
          'seen': true
        },
        [_0x5b2d7b.COIN]: {
          'name': "Gold Coin",
          'description': "Adds 1 to your gold coins total.",
          'tips': '',
          'frameName': 'CoinGold.png',
          'texture': "items",
          'pickedupAmount': 0x0,
          'rarity': 0x32,
          'unlocksAt': 0x0,
          'value': 0x1,
          'inTreasures': false,
          'seen': true
        },
        [_0x5b2d7b.COINBAG1]: {
          'name': "Coin Bag",
          'description': "Adds 10 to your gold coins total.",
          'tips': '',
          'texture': "items",
          'frameName': 'MoneyBagRed.png',
          'pickedupAmount': 0x0,
          'rarity': 0xa,
          'unlocksAt': 0x0,
          'inTreasures': false,
          'value': 0xa
        },
        [_0x5b2d7b.COINBAG2]: {
          'name': "Big Coin Bag",
          'description': "Adds 25 to your gold coins total.",
          'tips': '',
          'texture': "items",
          'frameName': "MoneyBagGreen.png",
          'pickedupAmount': 0x0,
          'rarity': 0x0,
          'unlocksAt': 0x186a0,
          'hidden': true,
          'value': 0x19
        },
        [_0x5b2d7b.COINBAGMAX]: {
          'name': "Rich Coin Bag",
          'description': "Adds 100 to your gold coins total.",
          'tips': "Drop rate affected by Luck.",
          'texture': "items",
          'frameName': "MoneyBagColor.png",
          'pickedupAmount': 0x0,
          'rarity': 0x1,
          'unlocksAt': 0x5,
          'value': 0x64,
          'isRare': true
        },
        [_0x5b2d7b.ROSARY]: {
          'name': "Rosary",
          'description': "Destroys all enemies in sight.",
          'tips': "Drop rate affected by Luck.",
          'texture': "items",
          'frameName': "Rosary1.png",
          'pickedupAmount': 0x0,
          'rarity': 0x1,
          'unlocksAt': 0x8,
          'value': 0x0,
          'isRare': true
        },
        [_0x5b2d7b.OROLOGION]: {
          'name': 'Orologion',
          'description': "Freezes all enemies in time for 10 seconds.",
          'tips': "Drop rate affected by Luck.",
          'texture': "items",
          'frameName': "PocketWatch1.png",
          'pickedupAmount': 0x0,
          'rarity': 0x2,
          'unlocksAt': 0x4,
          'value': 0x0,
          'isRare': true
        },
        [_0x5b2d7b.VACUUM]: {
          'name': "Vacuum",
          'description': "Gathers all experience gems left on the ground.",
          'tips': "Drop rate affected by Luck.",
          'texture': "items",
          'frameName': "Vacuum1.png",
          'pickedupAmount': 0x0,
          'rarity': 0x2,
          'unlocksAt': 0xc,
          'value': 0x0,
          'isRare': true
        },
        [_0x5b2d7b.ROAST]: {
          'name': "Pot Roast",
          'description': "Restores 30 health points.",
          'tips': "Drop rate affected by Luck.",
          'texture': "items",
          'frameName': "Roast.png",
          'pickedupAmount': 0x0,
          'rarity': 0xc,
          'unlocksAt': 0x0,
          'value': 0x1e,
          'isRare': true
        },
        [_0x5b2d7b.CLOVER]: {
          'name': "Clover",
          'description': "Pickup to get 10% luckier.",
          'tips': '',
          'texture': "items",
          'frameName': "Clover.png",
          'pickedupAmount': 0x0,
          'rarity': 0.5,
          'unlocksAt': 0x0,
          'inTreasures': false,
          'value': 0.1
        },
        [_0x5b2d7b.TREASURE]: {
          'name': "Treasure Chest",
          'description': "Awards coins and power ups. Dropped by strong enemies.",
          'tips': "Quality affected by Luck.",
          'texture': "items",
          'frameName': "BoxOpen.png",
          'pickedupAmount': 0x0,
          'rarity': 0x0,
          'unlocksAt': 0xf4240,
          'inTreasures': false,
          'value': 0x0
        },
        [_0x5b2d7b.WEAPON]: {
          'name': 'Weapon',
          'description': 'NA',
          'tips': '',
          'texture': "items",
          'frameName': '',
          'pickedupAmount': 0x0,
          'rarity': 0x0,
          'unlocksAt': 0xf4240,
          'inTreasures': false,
          'hidden': true,
          'value': 0x0
        }
      };
      class _0x4e61fd extends Phaser.Physics.Arcade.Sprite {
        constructor(_0x452410, _0x368358, _0x5bd17c, _0x19f40a) {
          super(_0x452410.scene, _0x368358, _0x5bd17c, "items");
          this.DEFAULT_SPEED = 0xfa;
          this.radius = 0xa;
          this.frameName = "GemRed.png";
          this.speed = this.DEFAULT_SPEED;
          this.goToPlayer = false;
          this.time = 0x0;
          this.originPos = new Phaser.Math.Vector2(0x0, 0x0);
          this.currentDirection = new Phaser.Math.Vector2(0x0, 0x0);
          this.value = 0x0;
          this.isStationary = false;
          this.owner = null;
          this.isCullable = true;
          this.isTeleportOnCull = false;
          this.pool = _0x452410;
          this.itemType = _0x19f40a;
          var _0x30d3ae = _0x34b109[_0x19f40a];
          this.frameName = _0x30d3ae.frameName;
          this.value = _0x30d3ae.value;
          this.setFrame(this.frameName);
          _0x452410.scene.add.existing(this);
          _0x452410.scene.physics.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
          this.body.setCircle(this.radius);
          this.originPos.x = _0x368358;
          this.originPos.y = _0x5bd17c;
          this.vacuumTween = this.scene.tweens.add({
            'targets': this,
            'time': 0x1,
            'duration': 0x1f4,
            'ease': 'Linear'
          });
          this.vacuumTween.pause();
        }
        ["OnTeleportOnCull"]() {}
        ["Init"](_0x1f6f42 = -0x3e8, _0x3363fa = -0x3e8) {
          this.setPosition(_0x1f6f42, _0x3363fa);
          this.OnRecycle();
        }
        ["OnRecycle"]() {
          this.setActive(true);
          this.setVisible(true);
          this.setFrame(this.frameName);
          this.body.enable = true;
          this.goToPlayer = false;
          this.speed = this.DEFAULT_SPEED;
          this.value = _0x34b109[this.itemType].value;
        }
        ['DeSpawn']() {
          this.setActive(false);
          this.setVisible(false);
          this.body.enable = false;
          this.setVelocity(0x0);
          this.anims.stop();
          this.pool.Return(this);
        }
        ["GetTaken"]() {
          this.DeSpawn();
          _0x34b109[this.itemType].pickedupAmount += 0x1;
        }
        ["Update"](_0x305707 = 0x0) {
          if (this.goToPlayer && !this.isStationary) {
            this.GoToPlayer();
          }
        }
        ["Vacuum"]() {
          return !this.goToPlayer && (this.vacuumTween.restart(), this.time = -0x1, this.goToPlayer = true, true);
        }
        ["GoToPlayer"]() {
          this.currentDirection.x = _0x1d0e6c.Core.Player.x - this.x;
          this.currentDirection.y = _0x1d0e6c.Core.Player.y - 0x8 - this.y;
          this.currentDirection.normalize();
          this.setVelocity(this.speed * this.currentDirection.x * this.time, this.speed * this.currentDirection.y * this.time);
          this.speed++;
        }
        ["SetSeenItem"](_0x556aa9) {
          if (undefined === _0x1d0e6c.Core.PlayerOptions.CollectedItems.find(_0x136de0 => _0x136de0 === _0x556aa9)) {
            _0x34b109[_0x556aa9].seen = true;
            _0x1d0e6c.Core.PlayerOptions.CollectedItems.push(_0x556aa9);
            _0x1d0e6c.Core.PlayerOptions.SaveCollection();
          }
        }
      }
      class _0x46d323 extends _0x4e61fd {
        constructor(_0x13c113, _0x4b75d1, _0x35ddb0, _0x1fb427 = _0x5b2d7b.COIN) {
          super(_0x13c113, _0x4b75d1, _0x35ddb0, _0x1fb427);
          this.landingLocation = {
            'x': 0x0,
            'y': 0x0
          };
          this.time = 0x0;
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
        }
        ['Update']() {
          super.Update();
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
        }
        ["GetTaken"]() {
          _0x1d0e6c.Core.PlayerOptions.AddCoins(this.value);
          _0x1d0e6c.Core.MainUI.UpdateCoins();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Coin, {
            'volume': 0.5
          });
          super.GetTaken();
        }
      }
      class _0x23b67a extends _0x4e61fd {
        constructor(_0x42473d, _0x131937, _0xa7c90a, _0x3250a5 = 0x0) {
          super(_0x42473d, _0x131937, _0xa7c90a, _0x5b2d7b.GEM);
          this.frameName = "GemBlue.png";
          this.landingLocation = {
            'x': 0x0,
            'y': 0x0
          };
          this.value = _0x3250a5;
          this.SetValue(this.value);
          this.setScale(_0x34bb1a.PixelScale);
          this.setFrame(this.frameName);
          var _0x4df253 = 0x2 * (Math.random() - 0.5) * Math.PI;
          var _0x138e5b = Math.cos(_0x4df253);
          var _0x1ebe30 = Math.sin(_0x4df253);
          var _0x50788f = {
            'x': _0x131937 + _0x138e5b * 0x64,
            'y': _0xa7c90a + _0x1ebe30 * 0x64 * 0x2
          };
          this.landingLocation = {
            'x': _0x131937 + _0x138e5b * 0x64,
            'y': _0xa7c90a + _0x1ebe30 * 0x64
          };
          _0x1d0e6c.Core.scene.tweens.add({
            'targets': this,
            'time': 0x1,
            'duration': 0x1f4,
            'ease': "Linear"
          });
          var _0x179bb9 = new Phaser.Math.Vector2(_0x131937, _0xa7c90a);
          var _0x50783a = new Phaser.Math.Vector2(_0x50788f.x, _0x50788f.y);
          var _0x1c1b1c = new Phaser.Math.Vector2(_0x50788f.x, _0x50788f.y);
          var _0x346115 = new Phaser.Math.Vector2(this.landingLocation.x, this.landingLocation.y);
          this.curve = new Phaser.Curves.CubicBezier(_0x179bb9, _0x50783a, _0x1c1b1c, _0x346115);
        }
        static ["getDetune"]() {
          return 0x3c * _0x23b67a.detunes[_0x23b67a.detune++ % _0x23b67a.detunes.length];
        }
        ["SetValue"](_0x2659bc) {
          this.value = _0x2659bc;
          switch (this.value) {
            case 0x1:
            case 0x2:
              this.frameName = "GemBlue.png";
              break;
            case 0x3:
            case 0x4:
            case 0x5:
            case 0x6:
            case 0x7:
            case 0x8:
            case 0x9:
              this.frameName = "GemGreen.png";
              break;
            default:
              this.frameName = "GemRed.png";
          }
          this.setFrame(this.frameName);
        }
        ['FollowCurve']() {
          var _0x132a3b = new Phaser.Math.Vector2(0x0, 0x0);
          this.curve.getPoint(this.time, _0x132a3b);
          this.setPosition(_0x132a3b.x, _0x132a3b.y);
        }
        ["Update"]() {
          super.Update();
          this.setDepth(this.y - _0x1d0e6c.Core.Player.y - this.scene.renderer.height);
        }
        ['GetTaken']() {
          _0x1d0e6c.Core.Player.xp += this.value * _0x1d0e6c.Core.Player.growth;
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Gem, {
            'volume': 0.1
          }, 0x1, 0x1);
          _0x1d0e6c.Core.PlayerUI.Update();
          _0x1d0e6c.Core.CheckForLevelUp();
          super.GetTaken();
        }
      }
      _0x23b67a.detunes = [0x0, 0x1, 0x2, 0x4, 0x7, 0x8, 0x9, 0xb, 0x2, 0x3, 0x4, 0x6, 0x9, 0xa, 0xb, 0xd, 0x10, 0xd, 0xb, 0xa, 0x9, 0x6, 0x4, 0x2];
      _0x23b67a.detune = 0x0;
      class _0x4ffae4 extends _0x4e61fd {
        constructor(_0x19b4e6, _0x527fc3, _0x8f926e) {
          super(_0x19b4e6, _0x527fc3, _0x8f926e, _0x5b2d7b.VACUUM);
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
          const _0x5aa57b = this.anims.generateFrameNames("items", {
            'start': 0x1,
            'end': 0x3,
            'zeroPad': 0x0,
            'prefix': 'Vacuum',
            'suffix': ".png"
          });
          this.anims.create({
            'key': "idle",
            'frames': _0x5aa57b,
            'frameRate': 0xa,
            'repeat': -0x1
          });
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.anims.play("idle");
        }
        ["Update"]() {
          super.Update();
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
        }
        ["GetTaken"]() {
          _0x1d0e6c.Core.TurnOnVacuum();
          this.SetSeenItem(this.itemType);
          super.GetTaken();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Vacuum, {
            'volume': 0.6,
            'rate': 0x1
          });
        }
      }
      class _0xbe84e8 extends _0x4e61fd {
        constructor(_0x288826, _0x4f2d77, _0x4857c5) {
          super(_0x288826, _0x4f2d77, _0x4857c5, _0x5b2d7b.ROSARY);
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
          const _0x6f0572 = this.anims.generateFrameNames("items", {
            'start': 0x1,
            'end': 0x3,
            'zeroPad': 0x0,
            'prefix': "Rosary",
            'suffix': ".png"
          });
          this.anims.create({
            'key': 'idle',
            'frames': _0x6f0572,
            'frameRate': 0xa,
            'repeat': -0x1
          });
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.anims.play('idle');
        }
        ['Update']() {
          super.Update();
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
        }
        ["GetTaken"]() {
          _0x1d0e6c.Core.RosaryDamage();
          this.SetSeenItem(this.itemType);
          super.GetTaken();
        }
      }
      class _0x20601b extends _0x4e61fd {
        constructor(_0x4d9a12, _0x1653fe, _0x32168f) {
          super(_0x4d9a12, _0x1653fe, _0x32168f, _0x5b2d7b.OROLOGION);
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
          const _0x244ade = this.anims.generateFrameNames('items', {
            'start': 0x1,
            'end': 0x3,
            'zeroPad': 0x0,
            'prefix': 'PocketWatch',
            'suffix': ".png"
          });
          this.anims.create({
            'key': 'idle',
            'frames': _0x244ade,
            'frameRate': 0xa,
            'repeat': -0x1
          });
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.anims.play('idle');
        }
        ['Update']() {
          super.Update();
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
        }
        ["GetTaken"]() {
          _0x1d0e6c.Core.TimeStop();
          this.SetSeenItem(this.itemType);
          super.GetTaken();
        }
      }
      class _0x12ad30 extends _0x4e61fd {
        constructor(_0x4270c7, _0x555954, _0x147280, _0x2f553d = _0x5b2d7b.COINBAG1) {
          super(_0x4270c7, _0x555954, _0x147280, _0x2f553d);
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
        }
        ["Update"]() {
          super.Update();
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
        }
        ['GetTaken']() {
          _0x1d0e6c.Core.PlayerOptions.AddCoins(this.value);
          _0x1d0e6c.Core.MainUI.UpdateCoins();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Coin, {
            'volume': 0.5
          });
          this.SetSeenItem(this.itemType);
          super.GetTaken();
        }
      }
      class _0xb759eb extends _0x4e61fd {
        constructor(_0xc8ec57, _0x340b46, _0x5179fb) {
          super(_0xc8ec57, _0x340b46, _0x5179fb, _0x5b2d7b.CLOVER);
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
        }
        ["Update"]() {
          super.Update();
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
        }
        ["GetTaken"]() {
          _0x1d0e6c.Core.Player.luck += this.value;
          this.SetSeenItem(this.itemType);
          super.GetTaken();
        }
      }
      class _0x3e647c extends _0x4e61fd {
        constructor(_0x3c3c64, _0x5ad32d, _0x2c9f38) {
          super(_0x3c3c64, _0x5ad32d, _0x2c9f38, _0x5b2d7b.ROAST);
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
        }
        ['Update']() {
          super.Update();
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
        }
        ['GetTaken']() {
          _0x1d0e6c.Core.Player.RecoverHp(this.value);
          _0x1d0e6c.Core.Player.SetInvulForMilliSeconds(0x12c);
          _0x1d0e6c.Core.ShowRecoveryAt(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, this.value);
          this.SetSeenItem(this.itemType);
          super.GetTaken();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Roast, {
            'volume': 0.6,
            'rate': 0x1
          });
        }
      }
      class _0x85bda2 extends _0x4e61fd {
        constructor(_0x2c9e78, _0x49f3fb, _0x63d607) {
          super(_0x2c9e78, _0x49f3fb, _0x63d607, _0x5b2d7b.COINBAGMAX);
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
        }
        ['Update'](_0x3d6e4b) {
          super.Update(_0x3d6e4b);
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
        }
        ['GetTaken']() {
          _0x1d0e6c.Core.PlayerOptions.AddCoins(this.value);
          _0x1d0e6c.Core.MainUI.UpdateCoins();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Coin, {
            'volume': 0.65
          });
          this.SetSeenItem(this.itemType);
          super.GetTaken();
        }
      }
      class _0x2b6203 extends _0x4e61fd {
        constructor(_0x4495eb, _0x36a10f, _0x3dcfea) {
          super(_0x4495eb, _0x36a10f, _0x3dcfea, _0x5b2d7b.TREASURE);
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
          this.Cursor = this.scene.add.sprite(_0x36a10f, _0x3dcfea, 'UI', "arrow_01.png");
          this.Cursor.setDepth(0x270f);
          this.Cursor.setScale(0x2);
          this.Cursor.setAlpha(0.75);
          this.Cursor.setBlendMode(_0x2d874d.BlendModes.ADD);
          const _0x23319c = this.anims.generateFrameNames('UI', {
            'start': 0x1,
            'end': 0x8,
            'zeroPad': 0x2,
            'prefix': "arrow_",
            'suffix': '.png'
          });
          this.Cursor.anims.create({
            'key': 'idle',
            'frames': _0x23319c,
            'frameRate': 0x10,
            'repeat': -0x1
          });
          this.Cursor.play("idle");
          if (!_0x2b6203.Containment) {
            _0x2b6203.Containment = new _0x206a30();
          }
        }
        ['OnRecycle']() {
          super.OnRecycle();
          this.goToPlayer = true;
          this.Cursor.setVisible(true);
        }
        ['DeSpawn']() {
          super.DeSpawn();
          this.Cursor.setVisible(false);
        }
        ["Update"]() {
          super.Update();
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
          if (Math.abs(this.x - _0x1d0e6c.Core.Player.x) < 0.5 * this.scene.renderer.width && Math.abs(this.y - _0x1d0e6c.Core.Player.y) < 0.5 * this.scene.renderer.height) {
            this.Cursor.copyPosition(this);
            this.Cursor.y -= 0x18;
            this.Cursor.setAngle(0x5a);
            this.Cursor.setAlpha(0x1);
            this.Cursor.setBlendMode(_0x2d874d.BlendModes.NORMAL);
          } else {
            var _0x591d4a = this.AngleFromTargetRadians(this);
            this.Cursor.setAngle(Phaser.Math.RadToDeg(_0x591d4a));
            this.Cursor.copyPosition(_0x1d0e6c.Core.Player);
            this.Cursor.x += 0.45 * Math.cos(_0x591d4a) * this.scene.renderer.width;
            this.Cursor.y += 0.45 * Math.sin(_0x591d4a) * this.scene.renderer.height;
            this.Cursor.setAlpha(0.75);
            this.Cursor.setBlendMode(_0x2d874d.BlendModes.ADD);
          }
        }
        ["GetTaken"]() {
          this.Cursor.setVisible(false);
          this.SetSeenItem(this.itemType);
          _0x1d0e6c.Core.CurrentTreasureLevel = this.CurrentTreasureLevel;
          _0x1d0e6c.Core.CurrentTreasureTypes = this.CurrentTreasureTypes;
          _0x1d0e6c.Core.CurrentFixedTreasures = this.CurrentFixedTreasures;
          _0x1d0e6c.Core.SceneManager.StartTreasureScene();
          super.GetTaken();
        }
        ["TurnTowards"](_0x810c8e) {
          let _0xebce33 = new Phaser.Math.Vector2(0x0, 0x0);
          _0xebce33.x = _0x810c8e.body.position.x - _0x1d0e6c.Core.Player.x;
          _0xebce33.y = _0x810c8e.body.position.y - _0x1d0e6c.Core.Player.y;
          _0xebce33.normalize();
          let _0x3c4011 = new Phaser.Math.Vector2(_0xebce33.x, _0xebce33.y);
          var _0x326202 = Phaser.Math.Vector2.RIGHT;
          return Phaser.Math.RadToDeg(Math.atan2(_0x3c4011.y - _0x326202.y, _0x3c4011.x - _0x326202.x));
        }
        ['AngleFromTargetRadians'](_0x5dd6c7) {
          var _0x1e8101 = _0x1d0e6c.Core.Player.body.position;
          return Math.atan2(_0x5dd6c7.y - _0x1e8101.y, _0x5dd6c7.x - _0x1e8101.x);
        }
      }
      const _0x14b553 = {
        [_0x2a5ca3.WHIP]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.WHIP,
          'name': "Whip",
          'description': "Attacks horizontally, passes through enemies.",
          'tips': "Ignores: speed, duration.",
          'texture': "items",
          'frameName': "Whip.png",
          'isUnlocked': true,
          'rarity': 0x64,
          'interval': 0x546,
          'repeatInterval': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'hitsWalls': false
        }, {
          'amount': 0x1
        }, {
          'power': 0.5
        }, {
          'power': 0.5,
          'area': 0.1
        }, {
          'power': 0.5
        }, {
          'power': 0.5,
          'area': 0.1
        }, {
          'power': 0.5
        }, {
          'power': 0.5,
          'addEvolvedWeapon': _0x2a5ca3.VAMPIRICA
        }],
        [_0x2a5ca3.VAMPIRICA]: [{
          'hidden': false,
          'level': 0x1,
          'bulletType': _0x2a5ca3.VAMPIRICA,
          'name': "Bloody Tear",
          'description': "Evolved Whip. Can deal critical damage and absorb HP.",
          'tips': "Requires: Hollow Heart",
          'texture': 'items',
          'frameName': "Whip2.png",
          'isEvolution': true,
          'evolvesFrom': _0x2a5ca3.WHIP,
          'requires': _0x2a5ca3.MAXHEALTH,
          'hitVFX': _0x3677f0.DARK,
          'isUnlocked': true,
          'rarity': 0x1,
          'interval': 0x546,
          'repeatInterval': 0x64,
          'power': 0x4,
          'area': 1.3,
          'speed': 0x1,
          'amount': 0x1,
          'critChance': 0.1,
          'critMul': 0x2,
          'hitsWalls': false
        }],
        [_0x2a5ca3.MAGIC_MISSILE]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.MAGIC_MISSILE,
          'name': "Magic Wand",
          'description': "Fires at the nearest enemy.",
          'tips': "Ignores: duration.",
          'texture': "items",
          'frameName': "WandHoly.png",
          'isUnlocked': true,
          'rarity': 0x64,
          'interval': 0x4b0,
          'repeatInterval': 0x64,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'penetrating': 0x1
        }, {
          'amount': 0x1
        }, {
          'interval': -0xc8
        }, {
          'amount': 0x1
        }, {
          'power': 0x1
        }, {
          'amount': 0x1
        }, {
          'penetrating': 0x1
        }, {
          'power': 0x1,
          'addEvolvedWeapon': _0x2a5ca3.HOLY_MISSILE
        }],
        [_0x2a5ca3.HOLY_MISSILE]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.HOLY_MISSILE,
          'name': "Holy Wand",
          'description': "Evolved Magic Wand. Fires with no delay.",
          'tips': "Requires: Empty Tome.",
          'texture': "items",
          'frameName': "WandHoly2.png",
          'isEvolution': true,
          'evolvesFrom': _0x2a5ca3.MAGIC_MISSILE,
          'requires': _0x2a5ca3.COOLDOWN,
          'rarity': 0x1,
          'interval': 0x1f4,
          'repeatInterval': 0x64,
          'power': 0x3,
          'area': 0x1,
          'speed': 0x2,
          'amount': 0x4,
          'penetrating': 0x2
        }],
        [_0x2a5ca3.KNIFE]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.KNIFE,
          'name': "Knife",
          'description': "Fires quickly in the faced direction.",
          'tips': "Ignores: duration.",
          'texture': "items",
          'frameName': "Knife.png",
          'isUnlocked': true,
          'rarity': 0x64,
          'interval': 0x3e8,
          'repeatInterval': 0x64,
          'power': 0.65,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'penetrating': 0x1,
          'knockback': 0.5
        }, {
          'amount': 0x1
        }, {
          'amount': 0x1,
          'power': 0.5
        }, {
          'amount': 0x1,
          'repeatInterval': -0x14
        }, {
          'penetrating': 0x1
        }, {
          'amount': 0x1,
          'repeatInterval': -0x14
        }, {
          'amount': 0x1,
          'power': 0.5
        }, {
          'penetrating': 0x1,
          'repeatInterval': -0x14,
          'addEvolvedWeapon': _0x2a5ca3.THOUSAND
        }],
        [_0x2a5ca3.THOUSAND]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.THOUSAND,
          'name': "Thousand Edge",
          'description': "Evolved Knife. Fires with no delay.",
          'tips': "Requires: Bracer.",
          'texture': "items",
          'frameName': "Knife2.png",
          'isEvolution': true,
          'evolvesFrom': _0x2a5ca3.KNIFE,
          'requires': _0x2a5ca3.SPEED,
          'rarity': 0x1,
          'interval': 0x15e,
          'repeatInterval': 0x32,
          'power': 1.65,
          'area': 0x1,
          'speed': 1.5,
          'amount': 0x6,
          'penetrating': 0x3,
          'knockback': 0.5
        }],
        [_0x2a5ca3.AXE]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.AXE,
          'name': "Axe",
          'description': "High damage, but takes time to grow effective.",
          'tips': "Best with: area, cooldown.",
          'texture': 'items',
          'frameName': 'Axe.png',
          'isUnlocked': true,
          'rarity': 0x64,
          'interval': 0xfa0,
          'repeatInterval': 0xc8,
          'power': 0x2,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'penetrating': 0x2,
          'duration': 0x7d0
        }, {
          'amount': 0x1
        }, {
          'power': 0x2
        }, {
          'penetrating': 0x2
        }, {
          'amount': 0x1
        }, {
          'power': 0x2
        }, {
          'penetrating': 0x2
        }, {
          'power': 0x2,
          'addEvolvedWeapon': _0x2a5ca3.SCYTHE
        }],
        [_0x2a5ca3.SCYTHE]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.SCYTHE,
          'name': "Death Spiral",
          'description': "Evolved Axe. Passes through enemies.",
          'tips': "Requires: Candelabrador.",
          'texture': 'items',
          'frameName': "Scythe.png",
          'isEvolution': true,
          'evolvesFrom': _0x2a5ca3.AXE,
          'requires': _0x2a5ca3.AREA,
          'rarity': 0x1,
          'interval': 0xfa0,
          'repeatInterval': 0x32,
          'power': 0x5,
          'area': 1.2,
          'speed': 0.8,
          'amount': 0x9,
          'penetrating': 0x3e8,
          'hitsWalls': false
        }],
        [_0x2a5ca3.CROSS]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.CROSS,
          'name': 'Cross',
          'description': "Aims at nearest enemy, has boomerang effect.",
          'tips': "Ignores: duration.",
          'texture': "items",
          'frameName': "Cross.png",
          'isUnlocked': false,
          'rarity': 0x50,
          'interval': 0x7d0,
          'repeatInterval': 0x64,
          'power': 0.5,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'hitsWalls': false
        }, {
          'power': 0x1
        }, {
          'speed': 0.25,
          'area': 0.1
        }, {
          'amount': 0x1
        }, {
          'power': 0x1
        }, {
          'speed': 0.25,
          'area': 0.1
        }, {
          'amount': 0x1
        }, {
          'power': 0x1,
          'addEvolvedWeapon': _0x2a5ca3.HEAVENSWORD
        }],
        [_0x2a5ca3.HEAVENSWORD]: [{
          'hidden': false,
          'level': 0x1,
          'bulletType': _0x2a5ca3.HEAVENSWORD,
          'name': "Heaven Sword",
          'description': "Evolved Cross. Can deal critical damage.",
          'tips': "Requires: Clover.",
          'texture': "items",
          'frameName': "HeavenSword.png",
          'isEvolution': true,
          'evolvesFrom': _0x2a5ca3.CROSS,
          'requires': _0x2a5ca3.LUCK,
          'hitVFX': _0x3677f0.LIGHT,
          'rarity': 0x96,
          'isUnlocked': false,
          'interval': 0xce4,
          'repeatInterval': 0x1f4,
          'power': 7.7,
          'area': 1.2,
          'speed': 0x2,
          'amount': 0x1,
          'critChance': 0.1,
          'critMul': 0x3,
          'hitsWalls': false
        }],
        [_0x2a5ca3.HOLYBOOK]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.HOLYBOOK,
          'name': "King Bible",
          'description': "Orbits around the character.",
          'tips': "Best with: speed, duration, area.",
          'texture': "items",
          'frameName': "HolyBook.png",
          'isUnlocked': true,
          'rarity': 0x50,
          'interval': 0xbb8,
          'repeatInterval': 0x0,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'duration': 0xbb8,
          'hitBoxDelay': 0x640,
          'intervalDependsOnDuration': true,
          'hitsWalls': false
        }, {
          'amount': 0x1
        }, {
          'speed': 0.3,
          'area': 0.25
        }, {
          'duration': 0x1f4,
          'power': 0x1
        }, {
          'amount': 0x1
        }, {
          'speed': 0.3,
          'area': 0.25
        }, {
          'duration': 0x1f4,
          'power': 0x1
        }, {
          'amount': 0x1,
          'addEvolvedWeapon': _0x2a5ca3.VESPERS
        }],
        [_0x2a5ca3.VESPERS]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.VESPERS,
          'name': "Unholy Vespers",
          'description': "Evolved King Bible. Never ends.",
          'tips': "Requires: Spellbinder.",
          'texture': "items",
          'frameName': "UnholyBook.png",
          'isEvolution': true,
          'evolvesFrom': _0x2a5ca3.HOLYBOOK,
          'requires': _0x2a5ca3.DURATION,
          'hitVFX': _0x3677f0.DARK,
          'rarity': 0x1,
          'interval': 0xbb8,
          'repeatInterval': 0x0,
          'power': 0x3,
          'area': 1.75,
          'speed': 1.5,
          'amount': 0x4,
          'duration': 0xbb8,
          'hitBoxDelay': 0x5dc,
          'hitsWalls': false,
          'intervalDependsOnDuration': false
        }],
        [_0x2a5ca3.FIREBALL]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.FIREBALL,
          'name': "Fire Wand",
          'description': "Fires at a random enemy, deals heavy damage.",
          'tips': "Ignores: duration.",
          'texture': 'items',
          'frameName': 'WandFire.png',
          'hitVFX': _0x3677f0.FIRE,
          'isUnlocked': false,
          'rarity': 0x50,
          'interval': 0xbb8,
          'repeatInterval': 0x14,
          'power': 0x1,
          'area': 0x1,
          'speed': 0.75,
          'amount': 0x3,
          'duration': 0x64
        }, {
          'power': 0x1
        }, {
          'power': 0x1,
          'speed': 0.2
        }, {
          'power': 0x1
        }, {
          'power': 0x1,
          'speed': 0.2
        }, {
          'power': 0x1
        }, {
          'power': 0x1,
          'speed': 0.2
        }, {
          'power': 0x2,
          'addEvolvedWeapon': _0x2a5ca3.HELLFIRE
        }],
        [_0x2a5ca3.HELLFIRE]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.HELLFIRE,
          'name': "Hell Fire",
          'description': "Evolved Fire Wand. Passes through enemies.",
          'tips': "Requires: Spinach.",
          'texture': "items",
          'frameName': "Hellfire.png",
          'hitVFX': _0x3677f0.FIRE,
          'rarity': 0x1,
          'isEvolution': true,
          'evolvesFrom': _0x2a5ca3.FIREBALL,
          'requires': _0x2a5ca3.MIGHT,
          'interval': 0xbb8,
          'repeatInterval': 0xc8,
          'power': 0xa,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x2,
          'duration': 0x64,
          'hitsWalls': false
        }],
        [_0x2a5ca3.SILF]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.SILF,
          'name': "Peachone",
          'description': "Bombards in a circling zone.",
          'tips': "Best with: cooldown, duration.",
          'texture': 'items',
          'frameName': "Silf1.png",
          'hitVFX': _0x3677f0.LIGHT,
          'isUnlocked': false,
          'rarity': 0x32,
          'interval': 0x3e8,
          'repeatInterval': 0x19,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x4,
          'duration': 0xfa0,
          'hitsWalls': false
        }, {
          'amount': 0x1,
          'area': 0.2
        }, {
          'amount': 0x1,
          'power': 0x1
        }, {
          'amount': 0x1,
          'interval': -0xfa
        }, {
          'amount': 0x1,
          'area': 0.2
        }, {
          'amount': 0x1,
          'power': 0x1
        }, {
          'amount': 0x1,
          'interval': -0xfa
        }, {
          'amount': 0x1,
          'area': 0.2
        }],
        [_0x2a5ca3.SILF2]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.SILF2,
          'name': "Ebony Wings",
          'description': "Bombards in a circling zone.",
          'tips': "Best with: cooldown, duration.",
          'texture': "items",
          'frameName': "Silf2.png",
          'hitVFX': _0x3677f0.DARK,
          'isUnlocked': false,
          'rarity': 0x32,
          'interval': 0x3e8,
          'repeatInterval': 0x19,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x4,
          'duration': 0xfa0,
          'hitsWalls': false
        }, {
          'amount': 0x1,
          'area': 0.2
        }, {
          'amount': 0x1,
          'power': 0x1
        }, {
          'amount': 0x1,
          'interval': -0xfa
        }, {
          'amount': 0x1,
          'area': 0.2
        }, {
          'amount': 0x1,
          'power': 0x1
        }, {
          'amount': 0x1,
          'interval': -0xfa
        }, {
          'amount': 0x1,
          'area': 0.2
        }],
        [_0x2a5ca3.HOLYWATER]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.HOLYWATER,
          'name': "Santa Water",
          'description': "Generates damaging zones.",
          'tips': "Best with: duration, area.",
          'texture': "items",
          'frameName': 'HolyWater.png',
          'isUnlocked': true,
          'rarity': 0x64,
          'interval': 0x1194,
          'repeatInterval': 0x12c,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'duration': 0x7d0,
          'hitBoxDelay': 0x1f4,
          'knockback': 0x0,
          'hitsWalls': false
        }, {
          'amount': 0x1,
          'area': 0.2
        }, {
          'power': 0x1,
          'duration': 0x1f4
        }, {
          'amount': 0x1,
          'area': 0.2
        }, {
          'power': 0x1,
          'duration': 0xfa
        }, {
          'amount': 0x1,
          'area': 0.2
        }, {
          'power': 0.5,
          'duration': 0xfa
        }, {
          'power': 0.5,
          'area': 0.2
        }],
        [_0x2a5ca3.DIAMOND]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.DIAMOND,
          'name': 'Runetracer',
          'description': "Passes through enemies, bounces around.",
          'tips': "Best with: speed, duration.",
          'texture': 'items',
          'frameName': "Diamond2.png",
          'isUnlocked': false,
          'rarity': 0x50,
          'interval': 0xbb8,
          'repeatInterval': 0xc8,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'duration': 0x8ca,
          'hitBoxDelay': 0x1f4,
          'intervalDependsOnDuration': false
        }, {
          'power': 0.5,
          'speed': 0.3
        }, {
          'power': 0.5,
          'duration': 0x1f4
        }, {
          'amount': 0x1
        }, {
          'power': 0.5,
          'speed': 0.3
        }, {
          'power': 0.5,
          'duration': 0xfa
        }, {
          'amount': 0x1
        }, {
          'duration': 0x1f4
        }],
        [_0x2a5ca3.LIGHTNING]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.LIGHTNING,
          'name': "Lightning Ring",
          'description': "Randomly strikes enemies in the lower half of the screen.",
          'tips': "Ignores: speed, duration.",
          'texture': "items",
          'frameName': "LighningRing.png",
          'isUnlocked': false,
          'rarity': 0x50,
          'interval': 0x1194,
          'repeatInterval': 0x32,
          'power': 1.5,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x2,
          'hitsWalls': false
        }, {
          'amount': 0x1
        }, {
          'area': 0x1,
          'power': 0x1
        }, {
          'amount': 0x1
        }, {
          'area': 0x1,
          'power': 0x2
        }, {
          'amount': 0x1
        }, {
          'area': 0x1,
          'power': 0x2
        }, {
          'amount': 0x1
        }],
        [_0x2a5ca3.GARLIC]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.GARLIC,
          'name': "Garlic",
          'description': "Damages nearby enemies.",
          'tips': "Ignores: cooldown, duration, speed.",
          'texture': 'items',
          'frameName': 'Garlic.png',
          'isUnlocked': false,
          'rarity': 0x46,
          'interval': 0x3e8,
          'repeatInterval': 0x0,
          'power': 0.5,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'knockback': 0x0,
          'hitsWalls': false
        }, {
          'area': 0.4,
          'power': 0.2
        }, {
          'interval': -0x64,
          'power': 0.1
        }, {
          'area': 0.2,
          'power': 0.1
        }, {
          'interval': -0x64,
          'power': 0.2
        }, {
          'area': 0.2,
          'power': 0.1
        }, {
          'interval': -0x64,
          'power': 0.1
        }, {
          'area': 0.2,
          'power': 0.2
        }],
        [_0x2a5ca3.PENTAGRAM]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.PENTAGRAM,
          'name': "Pentagram",
          'description': "Erases everything in sight.",
          'tips': "Best with: cooldown and luck only.",
          'texture': "items",
          'frameName': "Pentagram.png",
          'isUnlocked': false,
          'rarity': 0x3c,
          'interval': 0x15f90,
          'repeatInterval': 0x0,
          'power': 0x0,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'knockback': -0x2,
          'chance': 0x0,
          'hitsWalls': false
        }, {
          'interval': -0x2710
        }, {
          'chance': 0.2,
          'desc': "20% chance to not erase items."
        }, {
          'interval': -0x2710
        }, {
          'chance': 0.2,
          'desc': "40% chance to not erase items."
        }, {
          'interval': -0x2710
        }, {
          'chance': 0.2,
          'desc': "60% chance to not erase items."
        }],
        [_0x2a5ca3.LANCET]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.LANCET,
          'name': "Clock Lancet",
          'description': "Chance to freeze enemies in time.",
          'tips': "Ignores: power, speed, amount, area.",
          'texture': "items",
          'frameName': "Lancet.png",
          'hitVFX': _0x3677f0.TIMEFREEZE,
          'isUnlocked': false,
          'rarity': 0x46,
          'interval': 0x7d0,
          'repeatInterval': 0x0,
          'power': 0x0,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'duration': 0x7d0,
          'knockback': 0x0,
          'hitsWalls': false
        }, {
          'duration': 0x3e8
        }, {
          'interval': -0x1f4
        }, {
          'duration': 0x3e8
        }, {
          'duration': 0x3e8
        }, {
          'interval': -0x1f4
        }, {
          'duration': 0x3e8
        }],
        [_0x2a5ca3.LAUREL]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.LAUREL,
          'name': "Laurel",
          'description': "Shields from damage when active.",
          'tips': "Best with: cooldown only.",
          'texture': "items",
          'frameName': 'Laurel.png',
          'isUnlocked': true,
          'rarity': 0x3c,
          'interval': 0x2710,
          'repeatInterval': 0x0,
          'power': 0x1,
          'area': 0x1,
          'speed': 0x1,
          'amount': 0x1,
          'charges': 0x1,
          'hitsWalls': false
        }, {
          'interval': -0x1f4
        }, {
          'interval': -0x1f4
        }, {
          'charges': 0x1
        }, {
          'interval': -0x1f4
        }, {
          'interval': -0x1f4
        }, {
          'charges': 0x1
        }],
        [_0x2a5ca3.BONE]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.BONE,
          'name': 'Bone',
          'description': "Throws a bouncing projectile.",
          'tips': "Best with: duration, speed.",
          'texture': "items",
          'frameName': 'Bone.png',
          'isUnlocked': false,
          'rarity': 0x1,
          'interval': 0xbb8,
          'repeatInterval': 0x0,
          'power': 0.5,
          'area': 0x1,
          'speed': 0.75,
          'amount': 0x1,
          'duration': 0x7d0
        }, {
          'duration': 0xc8,
          'area': 0.2
        }, {
          'power': 0x2,
          'amount': 0x1
        }, {
          'speed': 0.5,
          'area': 0.2
        }, {
          'power': 0x2,
          'amount': 0x1
        }, {
          'duration': 0xc8,
          'area': 0.2
        }, {
          'power': 0x2,
          'amount': 0x1
        }, {
          'duration': 0xc8,
          'speed': 0.5
        }],
        [_0x2a5ca3.MIGHT]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.MIGHT,
          'name': "Spinach",
          'description': "Raises inflicted damage by 10%.",
          'texture': "items",
          'frameName': "Leaf.png",
          'isUnlocked': true,
          'rarity': 0x64,
          'isPowerUp': true,
          'power': 0.1
        }, {
          'power': 0.1
        }, {
          'power': 0.1
        }, {
          'power': 0.1
        }, {
          'power': 0.1
        }],
        [_0x2a5ca3.AMOUNT]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.AMOUNT,
          'name': "Duplicator",
          'description': "Weapons fires more projectiles.",
          'texture': 'items',
          'frameName': 'Ring.png',
          'isUnlocked': false,
          'rarity': 0x32,
          'isPowerUp': true,
          'amount': 0x1
        }, {
          'amount': 0x1
        }],
        [_0x2a5ca3.AREA]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.AREA,
          'name': "Candelabrador",
          'description': "Augments area of attacks by 10%.",
          'texture': "items",
          'frameName': "Candelabra.png",
          'isUnlocked': false,
          'rarity': 0x64,
          'isPowerUp': true,
          'area': 0.1
        }, {
          'area': 0.1
        }, {
          'area': 0.1
        }, {
          'area': 0.1
        }, {
          'area': 0.1
        }],
        [_0x2a5ca3.COOLDOWN]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.COOLDOWN,
          'name': "Empty Tome",
          'description': "Reduces weapons cooldown by 8%.",
          'texture': "items",
          'frameName': "Book2.png",
          'isUnlocked': false,
          'rarity': 0x32,
          'isPowerUp': true,
          'cooldown': -0.08
        }, {
          'cooldown': -0.08
        }, {
          'cooldown': -0.08
        }, {
          'cooldown': -0.08
        }, {
          'cooldown': -0.08
        }],
        [_0x2a5ca3.SPEED]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.SPEED,
          'name': "Bracer",
          'description': "Increases projectiles speed by 10%.",
          'texture': "items",
          'frameName': "Gauntlet.png",
          'isUnlocked': false,
          'rarity': 0x64,
          'isPowerUp': true,
          'speed': 0.1
        }, {
          'speed': 0.1
        }, {
          'speed': 0.1
        }, {
          'speed': 0.1
        }, {
          'speed': 0.1
        }],
        [_0x2a5ca3.DURATION]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.DURATION,
          'name': "Spellbinder",
          'description': "Increases duration of weapon effects by 10%.",
          'texture': "items",
          'frameName': "EmblemEye.png",
          'isUnlocked': false,
          'rarity': 0x64,
          'isPowerUp': true,
          'duration': 0.1
        }, {
          'duration': 0.1
        }, {
          'duration': 0.1
        }, {
          'duration': 0.1
        }, {
          'duration': 0.1
        }],
        [_0x2a5ca3.ARMOR]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.ARMOR,
          'name': "Armor",
          'description': "Reduces incoming damage by 1.",
          'texture': "items",
          'frameName': 'ArmorIron.png',
          'isUnlocked': true,
          'rarity': 0x64,
          'isPowerUp': true,
          'armor': 0x1
        }, {
          'armor': 0x1
        }, {
          'armor': 0x1
        }, {
          'armor': 0x1
        }, {
          'armor': 0x1
        }],
        [_0x2a5ca3.MAXHEALTH]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.MAXHEALTH,
          'name': "Hollow Heart",
          'description': "Augments max health by 10%.",
          'texture': "items",
          'frameName': "HeartBlack.png",
          'isUnlocked': false,
          'rarity': 0x64,
          'isPowerUp': true,
          'maxHp': 0.1
        }, {
          'maxHp': 0.1
        }, {
          'maxHp': 0.1
        }, {
          'maxHp': 0.1
        }, {
          'maxHp': 0.1
        }],
        [_0x2a5ca3.GROWTH]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.GROWTH,
          'name': "Crown",
          'description': "Character gains 7% more experience.",
          'texture': 'items',
          'frameName': 'Crown.png',
          'rarity': 0x50,
          'isPowerUp': true,
          'growth': 0.07
        }, {
          'growth': 0.07
        }, {
          'growth': 0.07
        }, {
          'growth': 0.07
        }, {
          'growth': 0.07
        }],
        [_0x2a5ca3.MOVESPEED]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.MOVESPEED,
          'name': "Wings",
          'description': "Character moves 10% faster.",
          'texture': "items",
          'frameName': "Wing.png",
          'isUnlocked': false,
          'rarity': 0x32,
          'isPowerUp': true,
          'moveSpeed': 0.1
        }, {
          'moveSpeed': 0.1
        }, {
          'moveSpeed': 0.1
        }, {
          'moveSpeed': 0.1
        }, {
          'moveSpeed': 0.1
        }],
        [_0x2a5ca3.MAGNET]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.MAGNET,
          'name': "Attractor",
          'description': "Character pickups items from further away.",
          'texture': 'items',
          'frameName': "OrbGlow.png",
          'isUnlocked': false,
          'rarity': 0x64,
          'isPowerUp': true,
          'magnet': 0.5
        }, {
          'magnet': 0.33
        }, {
          'magnet': 0.25
        }, {
          'magnet': 0.2
        }, {
          'magnet': 0.33
        }],
        [_0x2a5ca3.LUCK]: [{
          'level': 0x1,
          'bulletType': _0x2a5ca3.LUCK,
          'name': "Clover",
          'description': "Character gets 10% luckier",
          'texture': 'items',
          'frameName': "Clover.png",
          'isUnlocked': false,
          'rarity': 0x64,
          'isPowerUp': true,
          'luck': 0.1
        }, {
          'luck': 0.1
        }, {
          'luck': 0.1
        }, {
          'luck': 0.1
        }, {
          'luck': 0.1
        }]
      };
      class _0x4297c4 extends _0x4e61fd {
        constructor(_0x339144, _0x29b262, _0x50ec5d) {
          super(_0x339144, _0x29b262, _0x50ec5d, _0x5b2d7b.WEAPON);
          this.weaponType = _0x2a5ca3.VOID;
          this.particlesInterval = 0xc8;
          this.totalTime = 0x64;
          _0x1d0e6c.Core.scene.add.existing(this);
          this.setScale(_0x34bb1a.PixelScale);
          this.isStationary = true;
          this.shadow = new Phaser.GameObjects.Sprite(_0x1d0e6c.Core.scene, _0x29b262, _0x50ec5d, 'items', "ShadowSpot.png");
        }
        ['OnRecycle']() {
          var _0x385bda;
          var _0x387a90;
          super.OnRecycle();
          if (!(null === (_0x385bda = this.floatTween) || undefined === _0x385bda)) {
            _0x385bda.stop();
          }
          if (this.floatTween) {
            this.scene.tweens.remove(this.floatTween);
          }
          this.floatTween = this.scene.tweens.add({
            'targets': this,
            'y': this.y - 0x8,
            'duration': 0x3e8,
            'ease': "Sine.easeInOut",
            'loop': -0x1,
            'yoyo': true
          });
          if (!(null === (_0x387a90 = this.shadowTween) || undefined === _0x387a90)) {
            _0x387a90.stop();
          }
          if (this.shadowTween) {
            this.scene.tweens.remove(this.shadowTween);
          }
          this.shadowTween = this.scene.tweens.add({
            'targets': this.shadow,
            'scale': 0.75,
            'duration': 0x3e8,
            'ease': "Sine.easeInOut",
            'loop': -0x1,
            'yoyo': true
          });
          this.scene.add.existing(this.shadow);
          this.shadow.setPosition(this.x, this.y);
          this.shadow.setScale(0x1);
          this.shadow.setAlpha(0.5);
        }
        ['DeSpawn']() {
          super.DeSpawn();
          this.floatTween.remove();
          this.shadowTween.remove();
          this.scene.tweens.remove(this.shadowTween);
          this.scene.tweens.remove(this.floatTween);
          this.scene.children.remove(this.shadow);
        }
        ['Update'](_0x26da72) {
          super.Update(_0x26da72);
          this.setDepth(0x9 + this.y - _0x1d0e6c.Core.Player.y);
          this.shadow.setDepth(this.y - _0x1d0e6c.Core.Player.y);
          this.totalTime += _0x26da72;
          if (this.totalTime > this.particlesInterval) {
            this.totalTime = 0x0;
            _0x1d0e6c.Core.SpawnPickupParticlesAt(this.x, this.y);
          }
        }
        ["SetWeaponType"](_0x45bb97) {
          var _0x7c419f = _0x14b553[_0x45bb97][0x0];
          this.setTexture(_0x7c419f.texture, _0x7c419f.frameName);
          this.weaponType = _0x45bb97;
        }
        ['GetTaken']() {
          _0x1d0e6c.Core.LevelWeaponUp(this.weaponType);
          super.GetTaken();
        }
      }
      class _0x262644 extends _0x12ad30 {
        constructor(_0xa85bf2, _0x22eb67, _0x8be92e) {
          super(_0xa85bf2, _0x22eb67, _0x8be92e, _0x5b2d7b.COINBAG2);
        }
      }
      class _0x5bcc91 extends Phaser.GameObjects.Group {
        constructor(_0x153f89) {
          super(_0x153f89);
          this.stored = new Array();
          this.spawned = new Array();
          this.Init();
          for (let _0x339f7f in _0x5b2d7b) {
            this.stored[_0x339f7f] = new Array();
            this.spawned[_0x339f7f] = new Array();
          }
        }
        ['Init']() {
          this.scene.add.existing(this);
        }
        ["SpawnAt"](_0x2bb59d, _0x3369d1, _0x100ea1) {
          const _0x2ceceb = this.Spawn(_0x100ea1);
          this.scene.children.add(_0x2ceceb);
          _0x2ceceb.setPosition(_0x2bb59d, _0x3369d1);
          _0x2ceceb.OnRecycle();
          return _0x2ceceb;
        }
        ["Spawn"](_0x20370c) {
          let _0x444817;
          if (this.stored[_0x20370c]) {
            _0x444817 = this.stored[_0x20370c].pop();
          } else {
            this.stored[_0x20370c] = new Array();
            this.spawned[_0x20370c] = new Array();
          }
          if (!_0x444817) {
            _0x444817 = this.Make(_0x20370c);
            _0x444817.Init();
          }
          this.add(_0x444817, true);
          this.spawned[_0x20370c].push(_0x444817);
          _0x1d0e6c.Core.PickupGroup.add(_0x444817, false);
          return _0x444817;
        }
        ["Return"](_0x32c5ad) {
          this.scene.children.remove(_0x32c5ad);
          this.remove(_0x32c5ad, true, false);
          this.spawned[_0x32c5ad.itemType].splice(this.spawned[_0x32c5ad.itemType].indexOf(_0x32c5ad), 0x1);
          _0x1d0e6c.Core.PickupGroup.remove(_0x32c5ad, false);
          this.stored[_0x32c5ad.itemType].push(_0x32c5ad);
        }
        ["Make"](_0x57b358) {
          switch (_0x57b358) {
            default:
            case _0x5b2d7b.COIN:
              return new _0x46d323(this, 0x0, 0x0);
            case _0x5b2d7b.COINBAG1:
              return new _0x12ad30(this, 0x0, 0x0);
            case _0x5b2d7b.COINBAG2:
              return new _0x262644(this, 0x0, 0x0);
            case _0x5b2d7b.COINBAGMAX:
              return new _0x85bda2(this, 0x0, 0x0);
            case _0x5b2d7b.GEM:
              return new _0x23b67a(this, 0x0, 0x0);
            case _0x5b2d7b.VACUUM:
              return new _0x4ffae4(this, 0x0, 0x0);
            case _0x5b2d7b.ROSARY:
              return new _0xbe84e8(this, 0x0, 0x0);
            case _0x5b2d7b.OROLOGION:
              return new _0x20601b(this, 0x0, 0x0);
            case _0x5b2d7b.ROAST:
              return new _0x3e647c(this, 0x0, 0x0);
            case _0x5b2d7b.CLOVER:
              return new _0xb759eb(this, 0x0, 0x0);
            case _0x5b2d7b.TREASURE:
              return new _0x2b6203(this, 0x0, 0x0);
            case _0x5b2d7b.WEAPON:
              return new _0x4297c4(this, 0x0, 0x0);
          }
        }
      }
      var _0xf7a726;
      !function (_0x1ff782) {
        _0x1ff782.PreloadScene = "PreloadScene";
        _0x1ff782.IntroScene = 'IntroScene';
        _0x1ff782.MainScene = "MainScene";
        _0x1ff782.UI_levelUpScene = 'UI_levelUpScene';
        _0x1ff782.UI_topBar = "UI_topBar";
        _0x1ff782.UI_mainMenu = "UI_mainMenu";
        _0x1ff782.CharSelectionScene = "CharSelectionScene";
        _0x1ff782.PowerUpScene = 'PowerUpScene';
        _0x1ff782.OmniScene = 'OmniScene';
        _0x1ff782.OptionsScene = "OptionsScene";
        _0x1ff782.GameOverScene = "GameOverScene";
        _0x1ff782.PauseScene = 'PauseScene';
        _0x1ff782.CollectionWeaponScene = "CollectionScene";
        _0x1ff782.UI_treasureScene = "UI_treasureScene";
        _0x1ff782.PostGameScene = "PostGameScene";
        _0x1ff782.CollectionAchievementsScene = "CollectionAchievementsScene";
        _0x1ff782.DebugScene = 'DebugScene';
        _0x1ff782.TilesetScene = 'TilesetScene';
        _0x1ff782.StageSelectionScene = "StageSelectionScene";
        _0x1ff782.UI_overlayScene = "UI_overlayScene";
        _0x1ff782.UI_creditsScene = "UI_creditsScene";
        _0x1ff782.UI_resolutionScene = "UI_resolutionScene";
      }(_0xf7a726 || (_0xf7a726 = {}));
      class _0x537906 {
        constructor(_0x489070, _0x4e31a2) {
          this.weight = 0x0;
          this.itemType = _0x5b2d7b.COIN;
          this.itemType = _0x489070;
          this.weight = _0x4e31a2;
        }
      }
      const _0x5f38b9 = class {
        constructor(_0x45b842, _0x5925cb) {
          this.weight = 0x0;
          this.weaponType = _0x2a5ca3.WHIP;
          this.weaponType = _0x45b842;
          this.weight = _0x5925cb;
        }
      };
      const _0x5f4047 = class {
        constructor() {
          this.defaultXPfactor = 0x5;
          this.currentXPfactor = 0x5;
          this.previousXPfactor = 0x5;
          this.chanceForExistingPowerUp = 0.3;
          this.levelUpOptions = 0x3;
          this.maxTrueWeapons = 0x6;
          this.maxPowerUpWeapons = 0x6;
          this.WeaponStore = new Array();
          this.ExcludedWeapons = new Array();
          this.SpecialWeapons = new Array();
          this.accumulatedWeight = 0x0;
          this.WeightedStore = new Array();
        }
        ["CalculateXPfactor"]() {
          let _0x14b956 = this.defaultXPfactor + 1.5 * Math.floor(_0x1d0e6c.Core.Player.level / 0x14);
          _0x14b956 = Math.min(_0x14b956, 0x8);
          let _0x494555 = this.defaultXPfactor + 1.5 * Math.floor((_0x1d0e6c.Core.Player.level - 0x1) / 0x14);
          _0x494555 = Math.min(_0x494555, 0x8);
          this.currentXPfactor = _0x14b956 * _0x1d0e6c.Core.Player.level * _0x1d0e6c.Core.Player.level;
          this.previousXPfactor = _0x494555 * (_0x1d0e6c.Core.Player.level - 0x1) * (_0x1d0e6c.Core.Player.level - 0x1);
        }
        get ["XpRequiredToLevelUp"]() {
          return this.currentXPfactor;
        }
        get ["PreviousXpRequiredToLevelUp"]() {
          return this.previousXPfactor;
        }
        ["GetLevelUpOptions"]() {
          return Math.random() > 0x1 / _0x1d0e6c.Core.Player.luck ? this.levelUpOptions + 0x1 : this.levelUpOptions;
        }
        get ["ChanceForExistingPowerUp"]() {
          return (_0x1d0e6c.Core.Player.level % 0x2 == 0x0 ? 0x2 : 0x1) * this.chanceForExistingPowerUp + 0x1 - 0x1 / _0x1d0e6c.Core.Player.luck;
        }
        ["HasPowerupsInStore"]() {
          return this.WeightedStore.length > 0x0;
        }
        ["Init"]() {
          this.CalculateXPfactor();
          for (const _0xfd7e7f in _0x14b553) {
            if (_0x14b553[_0xfd7e7f][0x0].isEvolution) {
              this.ExcludedWeapons.push(_0xfd7e7f);
            }
            if (!_0x14b553[_0xfd7e7f][0x0].isUnlocked) {
              this.ExcludedWeapons.push(_0xfd7e7f);
            }
            if (0x0 === _0x14b553[_0xfd7e7f][0x0].rarity) {
              this.ExcludedWeapons.push(_0xfd7e7f);
            }
            for (const _0x319a5a in _0x14b553[_0xfd7e7f]) this.WeaponStore.push(_0xfd7e7f);
          }
          this.calculateWeights();
        }
        ["GetRemainingWeaponsAndPowerUps"]() {
          var _0x35b937 = new Array();
          for (var _0x459a44 = 0x0; _0x459a44 < this.WeaponStore.length; _0x459a44++) {
            var _0xf46124 = this.WeaponStore[_0x459a44];
            if (!(this.ExcludedWeapons.indexOf(_0xf46124) > -0x1 || _0x35b937.indexOf(_0xf46124) > -0x1)) {
              _0x35b937.push(_0xf46124);
            }
          }
          return _0x35b937;
        }
        ["GetExistingNotMaxedWeapons"]() {
          var _0x53d689 = _0x1d0e6c.Core.Weapons.map(_0x146cc7 => _0x146cc7.bulletType);
          var _0x222aa6 = new Array();
          for (let _0x12e8a1 = 0x0; _0x12e8a1 < _0x53d689.length; _0x12e8a1++) {
            const _0x5bdcac = _0x53d689[_0x12e8a1];
            if (-0x1 !== this.WeaponStore.indexOf(_0x5bdcac)) {
              if (!(this.ExcludedWeapons.indexOf(_0x5bdcac) > -0x1 || _0x53d689.indexOf(_0x5bdcac) > -0x1)) {
                _0x222aa6.push(_0x5bdcac);
              }
            }
          }
          return _0x222aa6;
        }
        ["PullRemainingPowerUp"]() {
          var _0x26801a;
          var _0x4ab580 = 0x0;
          var _0x119f5b = new Array();
          for (const _0x2a3c63 in _0x14b553) if (!(this.ExcludedWeapons.indexOf(_0x2a3c63) > -0x1)) {
            var _0x415e29 = _0x14b553[_0x2a3c63][0x0];
            if (_0x415e29.isPowerUp) {
              _0x4ab580 += _0x415e29.rarity;
              if (_0x415e29.rarity > 0x0) {
                _0x119f5b.push(new _0x5f38b9(_0x2a3c63, _0x4ab580));
              }
            }
          }
          var _0x5ea907 = Math.random() * _0x4ab580;
          return null === (_0x26801a = _0x119f5b.find(_0x402097 => _0x402097.weight >= _0x5ea907)) || undefined === _0x26801a ? undefined : _0x26801a.weaponType;
        }
        ["PullExistingRemainingWeapon"](_0x1482fc = true) {
          var _0x36c1b5;
          var _0x717503 = 0x0;
          var _0x58a8c4 = new Array();
          var _0x6a1dcd = _0x1d0e6c.Core.Weapons.map(_0x569fc3 => _0x569fc3.bulletType);
          for (let _0x56d0e0 = 0x0; _0x56d0e0 < _0x6a1dcd.length; _0x56d0e0++) {
            const _0x5f1727 = _0x6a1dcd[_0x56d0e0];
            if (!(this.ExcludedWeapons.indexOf(_0x5f1727) > -0x1)) {
              var _0x253ec4 = _0x14b553[_0x5f1727][0x0];
              if (!(!_0x1482fc && _0x253ec4.isPowerUp)) {
                _0x717503 += _0x253ec4.rarity;
                if (_0x253ec4.rarity > 0x0) {
                  _0x58a8c4.push(new _0x5f38b9(_0x5f1727, _0x717503));
                }
              }
            }
          }
          var _0x340859 = Math.random() * _0x717503;
          return null === (_0x36c1b5 = _0x58a8c4.find(_0x301215 => _0x301215.weight >= _0x340859)) || undefined === _0x36c1b5 ? undefined : _0x36c1b5.weaponType;
        }
        ['PullExisting'](_0x26756c) {
          var _0x80f5cb;
          return null === (_0x80f5cb = this.WeightedStore.find(_0x2727ff => _0x2727ff.weaponType == _0x26756c)) || undefined === _0x80f5cb ? undefined : _0x80f5cb.weaponType;
        }
        ["PullEvolution"]() {
          var _0xc5758e = 0x0;
          var _0x5aa638 = new Array();
          this.SpecialWeapons.forEach(_0x363da9 => {
            var _0x204be7 = _0x14b553[_0x363da9][0x0];
            if (_0x204be7.isEvolution && _0x204be7.rarity > 0x0) {
              let _0x4d191d = _0x204be7.requires;
              let _0x5ee62f = _0x1d0e6c.Core.Weapons.find(_0x24a6e7 => _0x24a6e7.bulletType === _0x4d191d);
              if (_0x5ee62f) {
                _0xc5758e += _0x204be7.rarity;
                _0x5aa638.push(new _0x5f38b9(_0x363da9, _0xc5758e));
              }
            }
          });
          var _0x3e4681 = Math.random() * _0xc5758e;
          var _0x5ac0d7 = _0x5aa638.find(_0x3bed41 => _0x3bed41.weight >= _0x3e4681);
          if (_0x5ac0d7) {
            this.SpecialWeapons.splice(this.SpecialWeapons.findIndex(_0xcb7a8d => _0xcb7a8d == (null == _0x5ac0d7 ? undefined : _0x5ac0d7.weaponType)), 0x1);
          }
          return null == _0x5ac0d7 ? undefined : _0x5ac0d7.weaponType;
        }
        ["calculateWeights"]() {
          this.accumulatedWeight = 0x0;
          this.WeightedStore = new Array();
          for (const _0x56d290 in _0x14b553) {
            if (this.ExcludedWeapons.indexOf(_0x56d290) > -0x1) {
              continue;
            }
            const _0x1cd30a = _0x14b553[_0x56d290][0x0];
            if (_0x1cd30a.isPowerUp) {
              if (!_0x1d0e6c.Core.Weapons.find(_0x5c56f5 => _0x5c56f5.bulletType === _0x56d290) && _0x1d0e6c.Core.Weapons.filter(_0x4c6b72 => 0x1 == _0x4c6b72.isPowerUp).length >= this.maxPowerUpWeapons) {
                continue;
              }
            } else {
              if (!_0x1d0e6c.Core.Weapons.find(_0xd6d034 => _0xd6d034.bulletType === _0x56d290) && _0x1d0e6c.Core.Weapons.filter(_0x1db051 => 0x1 != _0x1db051.isPowerUp).length >= this.maxTrueWeapons) {
                continue;
              }
            }
            this.accumulatedWeight += _0x1cd30a.rarity;
            if (_0x1cd30a.rarity > 0x0) {
              this.WeightedStore.push(new _0x5f38b9(_0x56d290, this.accumulatedWeight));
            }
          }
        }
        ["GetRandomWeightedWeaponOrPowerup"]() {
          var _0x37e58c;
          var _0x351455 = Math.random() * this.accumulatedWeight;
          return null === (_0x37e58c = this.WeightedStore.find(_0x997d33 => _0x997d33.weight >= _0x351455)) || undefined === _0x37e58c ? undefined : _0x37e58c.weaponType;
        }
        ['GetRandomWeightedWeapon']() {
          var _0x51a3da;
          var _0x19e4d8 = 0x0;
          var _0x129ee1 = new Array();
          for (const _0x303d35 in _0x14b553) if (!(this.ExcludedWeapons.indexOf(_0x303d35) > -0x1)) {
            var _0x56cb76 = _0x14b553[_0x303d35][0x0];
            if (!_0x56cb76.isPowerUp) {
              _0x19e4d8 += _0x56cb76.rarity;
              if (_0x56cb76.rarity > 0x0) {
                _0x129ee1.push(new _0x5f38b9(_0x303d35, _0x19e4d8));
              }
            }
          }
          var _0x4c90d9 = Math.random() * _0x19e4d8;
          return null === (_0x51a3da = _0x129ee1.find(_0xde90b => _0xde90b.weight >= _0x4c90d9)) || undefined === _0x51a3da ? undefined : _0x51a3da.weaponType;
        }
        ["GetLevelUpPowerups"]() {
          var _0x6d97a9 = new Array();
          var _0x5b00da = 0x0;
          var _0x16ba2d = this.GetRandomExistingWeapon();
          if (_0x16ba2d) {
            _0x6d97a9.push(_0x16ba2d);
          }
          if ((_0x16ba2d = this.GetRandomExistingWeapon()) && _0x6d97a9.indexOf(_0x16ba2d) <= -0x1) {
            _0x6d97a9.push(_0x16ba2d);
          }
          for (var _0x26f9c6 = this.GetLevelUpOptions(); _0x6d97a9.length < _0x26f9c6 && _0x5b00da < 0x3e8;) {
            var _0x26d908;
            _0x5b00da++;
            if (undefined !== (_0x26d908 = _0x1d0e6c.Core.Player.level <= 0x3 ? this.GetRandomWeightedWeapon() : this.GetRandomWeightedWeaponOrPowerup()) && _0x6d97a9.indexOf(_0x26d908) <= -0x1) {
              _0x6d97a9.push(_0x26d908);
            }
          }
          _0x6d97a9.reverse();
          return _0x6d97a9;
        }
        ["GetLevelUpItems"]() {
          var _0x1c6dcf = new Array();
          _0x1c6dcf.push(_0x5b2d7b.COINBAG2);
          _0x1c6dcf.push(_0x5b2d7b.ROAST);
          _0x1c6dcf.reverse();
          return _0x1c6dcf;
        }
        ["RemoveFromStore"](_0x5e5ae9) {
          this.WeaponStore.splice(this.WeaponStore.indexOf(_0x5e5ae9), 0x1);
          if (-0x1 === this.WeaponStore.indexOf(_0x5e5ae9)) {
            this.ExcludedWeapons.push(_0x5e5ae9);
          }
          this.calculateWeights();
        }
        ["GetRandomExistingWeapon"]() {
          var _0x5fbe25;
          if (Math.random() <= this.ChanceForExistingPowerUp) {
            for (var _0x129cdd = _0x1d0e6c.Core.Weapons.map(_0x2ba78e => _0x2ba78e.bulletType); _0x129cdd.length > 0x0;) {
              var _0x1ce564;
              _0x1ce564 = Math.random() > 0.5 ? _0x129cdd[0x0] : _0x129cdd[Math.floor(Math.random() * _0x129cdd.length)];
              var _0xed60a7 = null === (_0x5fbe25 = _0x1d0e6c.Core.Weapons.find(_0x53162d => _0x53162d.bulletType === _0x1ce564)) || undefined === _0x5fbe25 ? undefined : _0x5fbe25.level;
              if (!_0xed60a7) {
                _0xed60a7 = 0x0;
              }
              if (2.5 * (_0xed60a7 + 0x1) > _0x1d0e6c.Core.Player.level) {
                _0x129cdd.splice(_0x129cdd.indexOf(_0x1ce564), 0x1);
              } else {
                if (-0x1 != this.WeaponStore.indexOf(_0x1ce564)) {
                  return _0x1ce564;
                }
                _0x129cdd.splice(_0x129cdd.indexOf(_0x1ce564), 0x1);
              }
            }
          }
          return null;
        }
        ["AddLateWeapon"](_0x1ab465) {
          this.SpecialWeapons.push(_0x1ab465);
          var _0x3c4cab = this.ExcludedWeapons.find(_0x10d9a5 => _0x10d9a5 === _0x1ab465);
          if (_0x3c4cab) {
            var _0x25534a = this.ExcludedWeapons.indexOf(_0x3c4cab);
            if (_0x25534a > -0x1) {
              this.ExcludedWeapons.splice(_0x25534a, 0x1);
            }
          }
          this.calculateWeights();
        }
        ["GetSpecialWeapon"](_0x3cb85c) {
          var _0x1ac26b = this.SpecialWeapons.indexOf(_0x3cb85c);
          return _0x1ac26b > -0x1 ? (this.SpecialWeapons.splice(_0x1ac26b, 0x1), _0x3cb85c) : null;
        }
      };
      var _0x35cd95 = _0xadcf39(0xf2);
      class _0x564740 {}
      _0x564740.SelectionHighlight = {
        'sourceKey': 'UI',
        'sourceFrame': "selectionSquareActive_03.png",
        'sourceLayout': {
          'width': 0x7,
          'height': 0x7
        }
      };
      _0x564740.ProgressBox = {
        'sourceKey': 'UI',
        'sourceFrame': "frameB9.png",
        'sourceLayout': {
          'width': 0x6,
          'height': 0x6
        }
      };
      _0x564740.MenuBackground = {
        'sourceKey': 'UI',
        'sourceFrame': "frame5_c4.png",
        'sourceLayout': {
          'width': 0xc,
          'height': 0xc
        }
      };
      _0x564740.PanelBackground = {
        'sourceKey': 'UI',
        'sourceFrame': "frame1_c2.png",
        'sourceLayout': {
          'width': 0xc,
          'height': 0xc
        }
      };
      _0x564740.PanelBackgroundAdd = {
        'sourceKey': 'UI',
        'sourceFrame': "frame5_c4_ad.png",
        'sourceLayout': {
          'width': 0xc,
          'height': 0xc
        }
      };
      _0x564740.GreenButton = {
        'sourceKey': 'UI',
        'sourceFrame': 'button_c5_normal.png',
        'sourceLayout': {
          'width': 0x9,
          'height': 0xe
        }
      };
      _0x564740.BackButton = {
        'sourceKey': 'UI',
        'sourceFrame': "button_c8_normal.png",
        'sourceLayout': {
          'width': 0x9,
          'height': 0xe
        }
      };
      _0x564740.OptionsButton = {
        'sourceKey': 'UI',
        'sourceFrame': "button_c9_normal.png",
        'sourceLayout': {
          'width': 0x9,
          'height': 0xe
        }
      };
      _0x564740.OptionsMiniButton = {
        'sourceKey': 'UI',
        'sourceFrame': 'button_c9_normal_mini.png',
        'sourceLayout': {
          'width': 0x9,
          'height': 0x7
        }
      };
      _0x564740.DisabledButton = {
        'sourceKey': 'UI',
        'sourceFrame': "button_c9_desaturated.png",
        'sourceLayout': {
          'width': 0x9,
          'height': 0xe
        }
      };
      _0x564740.DisabledMiniButton = {
        'sourceKey': 'UI',
        'sourceFrame': "button_c9_normal_mini_desaturated.png",
        'sourceLayout': {
          'width': 0x9,
          'height': 0x7
        }
      };
      _0x564740.Scrollbar = {
        'sourceKey': 'UI',
        'sourceFrame': 'sliderrail_c4.png',
        'sourceLayout': {
          'width': 0x4,
          'height': 0x8
        }
      };
      class _0x380e1f {
        constructor(_0x5ce568) {
          this.hpBarOffset = new Phaser.Math.Vector2(-0x10, 0x2);
          this.hpBarHeight = 0x4;
          this.hpBarWidth = 0x20;
          this.progressHeight = 0xa;
          this.scene = _0x5ce568;
          this.progressBox = new _0x35cd95.NineSlice(this.scene, _0x564740.ProgressBox, {
            'x': 0x0,
            'y': 0x0,
            'width': this.scene.renderer.width,
            'height': 0x12
          });
          this.progressBox.setScale(_0x34bb1a.PixelScale);
          this.progressBox.setScrollFactor(0x0);
          this.scene.add.existing(this.progressBox);
          this.progressBar = this.scene.add.graphics();
          this.progressBar.setScrollFactor(0x0);
          this.hpBarBG = this.scene.add.sprite(0.5 * this.scene.renderer.width + this.hpBarOffset.x, 0.5 * this.scene.renderer.height + this.hpBarOffset.y, "characters", 'blackDot.png').setOrigin(0x0, 0x0).setScale(this.hpBarWidth, this.hpBarHeight).setScrollFactor(0x0).setDepth(_0x34bb1a.ZInGameUI - 0x3);
          this.hpBar = this.scene.add.sprite(0.5 * this.scene.renderer.width + this.hpBarOffset.x, 0.5 * this.scene.renderer.height + this.hpBarOffset.y, 'characters', "whiteDot.png").setOrigin(0x0, 0x0).setScale(this.hpBarWidth, this.hpBarHeight).setTint(0xe00808).setScrollFactor(0x0).setDepth(_0x34bb1a.ZInGameUI - 0x3);
          this.progressBox.setDepth(_0x34bb1a.ZInGameUI - 0x2);
          this.progressBar.setDepth(_0x34bb1a.ZInGameUI - 0x1);
        }
        ["Update"]() {
          this.hpBar.setScale(Math.max(0x0, _0x1d0e6c.Core.Player.hp / _0x1d0e6c.Core.Player.maxHp * this.hpBarWidth), this.hpBarHeight);
          this.progressBar.clear();
          this.progressBar.fillStyle(0x2266dd, 0x1);
          const _0xd78482 = this.scene.renderer.width - 0x8;
          const _0x42185e = (_0x1d0e6c.Core.Player.xp - _0x1d0e6c.Core.LevelUpFactory.PreviousXpRequiredToLevelUp) / (_0x1d0e6c.Core.LevelUpFactory.XpRequiredToLevelUp - _0x1d0e6c.Core.LevelUpFactory.PreviousXpRequiredToLevelUp) * _0xd78482;
          this.progressBar.fillRect(0x4, 0x4, Math.min(_0x42185e, _0xd78482), this.progressHeight);
        }
      }
      class _0x5d8f79 {
        constructor() {
          this.level = 0x0;
          this.isWeapon = true;
        }
      }
      class _0x31ae0d {
        constructor(_0xd3d0c) {
          this.WeaponSprites = new Array();
          this.WeaponIcons = new Array();
          this.PowerUpIcons = new Array();
          this.xIncrease = 0x10;
          this.yOffset = 0x12;
          this.cols = 0x6;
          this.scene = _0xd3d0c;
          this.SurvivedSecondsText = this.scene.add.text(0.5 * this.scene.renderer.width, 0x19, "0:00", {
            'color': 'white',
            'fontSize': "20px",
            'fontStyle': 'bold'
          }).setScrollFactor(0x0).setOrigin(0.5, 0x0);
          this.PlayerLevelText = this.scene.add.text(this.scene.renderer.width - 0x4, 0x9, "LV 99", {
            'color': 'white',
            'fontSize': "12px",
            'fontStyle': "bold"
          }).setScrollFactor(0x0).setOrigin(0x1, 0.5);
          this.CoinsIcon = this.scene.add.image(this.scene.renderer.width - 0x4, 0x19, 'UI', "CoinGold.png").setScrollFactor(0x0).setOrigin(0x1, 0.5).setScale(_0x34bb1a.PixelScale).setDepth(_0x34bb1a.ZInGameUI - 0x3);
          this.KillsIcon = this.scene.add.image(0.85 * this.scene.renderer.width - 0x4, 0x19, 'UI', "SkullToken.png").setScrollFactor(0x0).setOrigin(0x1, 0.5).setScale(_0x34bb1a.PixelScale).setDepth(_0x34bb1a.ZInGameUI - 0x3);
          this.KillsText = this.scene.add.text(this.KillsIcon.x - this.KillsIcon.displayWidth - 0x4, this.KillsIcon.y, "9999", {
            'color': "white",
            'fontSize': "12px",
            'fontStyle': "bold"
          }).setScrollFactor(0x0).setOrigin(0x1, 0.5).setDepth(_0x34bb1a.ZInGameUI - 0x3);
          this.PlayerCoinsText = this.scene.add.text(this.CoinsIcon.x - this.CoinsIcon.displayWidth - 0x4, this.CoinsIcon.y, '9999', {
            'color': "white",
            'fontSize': "12px",
            'fontStyle': "bold"
          }).setScrollFactor(0x0).setOrigin(0x1, 0.5).setDepth(_0x34bb1a.ZInGameUI - 0x3);
          this.WeaponSlots = this.scene.add.image(0x1, 0x12, 'UI', "weaponSlots.psd").setScrollFactor(0x0).setOrigin(0x0).setScale(_0x34bb1a.PixelScale).setDepth(_0x34bb1a.ZInGameUI - 0x3);
          this.PlayerCoinsText.setDepth(Number.MAX_SAFE_INTEGER);
          this.CoinsIcon.setDepth(Number.MAX_SAFE_INTEGER);
          this.PlayerLevelText.setDepth(Number.MAX_SAFE_INTEGER);
          this.SurvivedSecondsText.setDepth(Number.MAX_SAFE_INTEGER);
          this.KillsIcon.setDepth(Number.MAX_SAFE_INTEGER);
          this.KillsText.setDepth(Number.MAX_SAFE_INTEGER);
        }
        ['SetSurvivedSeconds'](_0x2c0fd4) {
          this.SurvivedSecondsText.setText(_0x31ae0d.FormatTime(_0x2c0fd4));
        }
        ["UpdateCoins"]() {
          this.PlayerCoinsText.text = _0x1d0e6c.Core.PlayerOptions.RunCoins.toFixed(0x0).toLocaleString();
        }
        ["UpdateKills"]() {
          this.KillsText.text = _0x1d0e6c.Core.PlayerOptions.RunEnemies.toFixed(0x0).toLocaleString();
        }
        ['UpdatePlayerLevel']() {
          this.PlayerLevelText.text = "LV " + _0x1d0e6c.Core.Player.level;
        }
        static ["FormatTime"](_0x579b0f) {
          return Math.floor(_0x579b0f / 0x3c) + ':' + (_0x579b0f % 0x3c).toString().padStart(0x2, '0');
        }
        ['Add'](_0x3f2546) {
          var _0x3ae3a6 = _0x14b553[_0x3f2546][0x0];
          var _0xc82f8f = _0x3ae3a6.isPowerUp || this.WeaponIcons.length >= 0x6 ? this.PowerUpIcons.find(_0x3cd2bc => _0x3cd2bc.weaponType == _0x3f2546) : this.WeaponIcons.find(_0x43cafd => _0x43cafd.weaponType == _0x3f2546);
          if (_0xc82f8f) {
            _0xc82f8f.level++;
          } else {
            var _0x1aa689 = new _0x5d8f79();
            _0x1aa689.weaponType = _0x3f2546;
            _0x1aa689.level = 0x1;
            _0x1aa689.isWeapon = !(_0x3ae3a6.isPowerUp || this.WeaponIcons.length >= 0x6);
            var _0xcf8b03 = _0x1aa689.isWeapon ? this.xIncrease * this.WeaponIcons.length : this.xIncrease * (this.PowerUpIcons.length % this.cols);
            var _0xa05b2d = _0x1aa689.isWeapon ? this.yOffset : this.yOffset + this.xIncrease + this.xIncrease * Math.floor(this.PowerUpIcons.length / this.cols);
            var _0x3b2173 = this.scene.add.image(_0xcf8b03, _0xa05b2d, _0x3ae3a6.texture, _0x3ae3a6.frameName).setOrigin(0x0, 0x0).setScrollFactor(0x0).setDepth(_0x34bb1a.ZInGameUI - 0x2);
            _0x3b2173.setScale(0x10 / _0x3b2173.width);
            _0x1aa689.image = _0x3b2173;
            if (_0x1aa689.isWeapon) {
              this.WeaponIcons.push(_0x1aa689);
            } else {
              this.PowerUpIcons.push(_0x1aa689);
            }
          }
          this.RearrangeIcons();
        }
        ["Remove"](_0xb5ab98) {
          var _0x3caa5f;
          _0x14b553[_0xb5ab98][0x0];
          if (_0x3caa5f = this.PowerUpIcons.find(_0x33c72f => _0x33c72f.weaponType == _0xb5ab98)) {
            this.scene.children.remove(_0x3caa5f.image);
            this.PowerUpIcons.splice(this.PowerUpIcons.indexOf(_0x3caa5f), 0x1);
          } else if (_0x3caa5f = this.WeaponIcons.find(_0x1f5bb9 => _0x1f5bb9.weaponType == _0xb5ab98)) {
            this.scene.children.remove(_0x3caa5f.image);
            this.WeaponIcons.splice(this.WeaponIcons.indexOf(_0x3caa5f), 0x1);
          }
          this.RearrangeIcons();
        }
        ["RearrangeIcons"]() {
          for (let _0xd14ce = 0x0; _0xd14ce < this.WeaponIcons.length; _0xd14ce++) {
            const _0x44265d = this.WeaponIcons[_0xd14ce].image;
            _0x44265d.x = this.xIncrease * _0xd14ce;
            _0x44265d.y = this.yOffset;
          }
          for (let _0x59b12c = 0x0; _0x59b12c < this.PowerUpIcons.length; _0x59b12c++) {
            const _0x499156 = this.PowerUpIcons[_0x59b12c].image;
            _0x499156.x = this.xIncrease * (_0x59b12c % this.cols);
            _0x499156.y = this.yOffset + this.xIncrease + this.xIncrease * Math.floor(_0x59b12c / this.cols);
          }
        }
        ["AddWeaponIcon"](_0x1f4e3d) {
          this.Add(_0x1f4e3d);
        }
      }
      var _0x3ffba2;
      !function (_0x4b4c80) {
        _0x4b4c80.MIGHT = "POWER";
        _0x4b4c80.AREA = "AREA";
        _0x4b4c80.SPEED = "SPEED";
        _0x4b4c80.COOLDOWN = 'COOLDOWN';
        _0x4b4c80.AMOUNT = "AMOUNT";
        _0x4b4c80.MAXHEALTH = 'MAXHEALTH';
        _0x4b4c80.MOVESPEED = "MOVESPEED";
        _0x4b4c80.MAGNET = "MAGNET";
        _0x4b4c80.DURATION = "DURATION";
        _0x4b4c80.GROWTH = "GROWTH";
        _0x4b4c80.REGEN = "REGEN";
        _0x4b4c80.LUCK = 'LUCK';
        _0x4b4c80.GREED = "GREED";
        _0x4b4c80.SHIELD = 'SHIELD';
      }(_0x3ffba2 || (_0x3ffba2 = {}));
      const _0x5f5caf = {
        [_0x3ffba2.MIGHT]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.MIGHT,
          'name': "Might",
          'description': "Raises inflicted damage by 5% per level (max +25%).",
          'texture': "items",
          'frameName': "Leaf.png",
          'isPowerUp': true,
          'price': 0xc8,
          'power': 0.05
        }, {
          'power': 0.05
        }, {
          'power': 0.05
        }, {
          'power': 0.05
        }, {
          'power': 0.05
        }],
        [_0x3ffba2.MAXHEALTH]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.MAXHEALTH,
          'name': "Max Health",
          'description': "Augments max health by 10% per level (max +30%)",
          'texture': 'items',
          'frameName': 'HeartBlack.png',
          'isPowerUp': true,
          'price': 0xc8,
          'maxHp': 0.1
        }, {
          'maxHp': 0.1
        }, {
          'maxHp': 0.1
        }],
        [_0x3ffba2.ARMOR]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.ARMOR,
          'name': "Armor",
          'description': "Reduces incoming damage by 1 per level (max -3)",
          'texture': "items",
          'frameName': "ArmorIron.png",
          'isPowerUp': true,
          'price': 0x258,
          'armor': 0x1
        }, {
          'armor': 0x1
        }, {
          'armor': 0x1
        }],
        [_0x3ffba2.AMOUNT]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.AMOUNT,
          'name': "Amount",
          'description': "Fires 1 more projectile (all weapons).",
          'texture': 'items',
          'frameName': "Ring.png",
          'isPowerUp': true,
          'price': 0x1388,
          'amount': 0x1
        }],
        [_0x3ffba2.COOLDOWN]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.COOLDOWN,
          'name': "Cooldown",
          'description': "Uses weapons 2.5% faster per level (max 5%).",
          'texture': 'items',
          'frameName': "Book2.png",
          'isPowerUp': true,
          'price': 0x384,
          'cooldown': -0.025
        }, {
          'cooldown': -0.025
        }],
        [_0x3ffba2.AREA]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.AREA,
          'name': "Area",
          'description': "Augments area of attacks by 5% per level (max +10%).",
          'texture': "items",
          'frameName': "Candelabra.png",
          'isPowerUp': true,
          'price': 0x12c,
          'area': 0.05
        }, {
          'area': 0.05
        }],
        [_0x3ffba2.SPEED]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.SPEED,
          'name': "Velocity",
          'description': "Projectiles move 10% faster per level (max 20%).",
          'texture': "items",
          'frameName': "Gauntlet.png",
          'isPowerUp': true,
          'price': 0x12c,
          'speed': 0.1
        }, {
          'speed': 0.1
        }],
        [_0x3ffba2.DURATION]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.DURATION,
          'name': "Duration",
          'description': "Effects from weapons last 15% longer per level (max +30%).",
          'texture': "items",
          'frameName': "EmblemEye.png",
          'isPowerUp': true,
          'price': 0x12c,
          'duration': 0.15
        }, {
          'duration': 0.15
        }],
        [_0x3ffba2.MOVESPEED]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.MOVESPEED,
          'name': "Speed",
          'description': "Character moves 5% faster per level (max 10%).",
          'texture': "items",
          'frameName': "Wing.png",
          'isPowerUp': true,
          'price': 0x12c,
          'moveSpeed': 0.05
        }, {
          'moveSpeed': 0.05
        }],
        [_0x3ffba2.MAGNET]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.MAGNET,
          'name': "Magnet",
          'description': "Items pickup range +25% per level (max +50%).",
          'texture': "items",
          'frameName': "OrbGlow.png",
          'isPowerUp': true,
          'price': 0x12c,
          'magnet': 0.25
        }, {
          'magnet': 0.25
        }],
        [_0x3ffba2.LUCK]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.LUCK,
          'name': "Luck",
          'description': "Chance to get lucky goes up by 10% per level (max +30%).",
          'texture': "items",
          'frameName': "Clover.png",
          'isPowerUp': true,
          'price': 0x258,
          'luck': 0.1
        }, {
          'luck': 0.1
        }, {
          'luck': 0.1
        }],
        [_0x3ffba2.GROWTH]: [{
          'level': 0x0,
          'bulletType': _0x3ffba2.GROWTH,
          'name': "Growth",
          'description': "Gains 2.5% more experience per level (max 10%).",
          'texture': 'items',
          'frameName': 'Crown.png',
          'isPowerUp': true,
          'price': 0x384,
          'growth': 0.025
        }, {
          'growth': 0.025
        }, {
          'growth': 0.025
        }, {
          'growth': 0.025
        }],
        [_0x3ffba2.REGEN]: [{
          'level': 0x0,
          'hidden': true,
          'bulletType': _0x3ffba2.REGEN,
          'name': "Recovery",
          'description': "Recovers 0.1 HP per level (max 0.5) per second.",
          'texture': "items",
          'frameName': "HeartRuby.png",
          'isPowerUp': true,
          'price': 0x1f4,
          'regen': 0.1
        }, {
          'regen': 0.1
        }, {
          'regen': 0.1
        }, {
          'regen': 0.1
        }, {
          'regen': 0.1
        }],
        [_0x3ffba2.GREED]: [{
          'level': 0x0,
          'hidden': true,
          'bulletType': _0x3ffba2.GREED,
          'name': "Greed",
          'description': "Gains 10% more coins per level (max +50%).",
          'texture': 'items',
          'frameName': 'Mask.png',
          'isPowerUp': true,
          'price': 0x1f4,
          'greed': 0.1
        }, {
          'greed': 0.1
        }, {
          'greed': 0.1
        }, {
          'greed': 0.1
        }, {
          'greed': 0.1
        }],
        [_0x3ffba2.SHIELD]: [{
          'level': 0x0,
          'hidden': true,
          'bulletType': _0x3ffba2.SHIELD,
          'name': "Shield",
          'description': "Prevents damage for one attack. Stacks with Laurel.",
          'texture': "items",
          'frameName': "Laurel.png",
          'isPowerUp': true,
          'price': 0x3e8,
          'shields': 0x1
        }]
      };
      var _0x23a5f2;
      !function (_0x139d5a) {
        _0x139d5a.FOREST = 'FOREST';
        _0x139d5a.SINKING = 'SINKING';
        _0x139d5a.ENTRANCE = "ENTRANCE";
        _0x139d5a.LIBRARY = "LIBRARY";
        _0x139d5a.TEST = "TEST";
        _0x139d5a.TESTONE = "TESTONE";
        _0x139d5a.CASTLE = "CASTLE";
      }(_0x23a5f2 || (_0x23a5f2 = {}));
      var _0x433cce;
      var _0x273c1d = _0xadcf39(0x25a);
      !function (_0x3c6a5d) {
        _0x3c6a5d.BAT1 = "BAT1";
        _0x3c6a5d.BAT2 = "BAT2";
        _0x3c6a5d.BAT3 = "BAT3";
        _0x3c6a5d.BAT4 = "BAT4";
        _0x3c6a5d.BAT5 = "BAT5";
        _0x3c6a5d.BATSWARM = 'BATSWARM';
        _0x3c6a5d.ZOMBIE = 'ZOMBIE';
        _0x3c6a5d.SKELETON = "SKELETON";
        _0x3c6a5d.WEREWOLF = "WEREWOLF";
        _0x3c6a5d.GHOST = "GHOST";
        _0x3c6a5d.GHOSTSWARM = "GHOSTSWARM";
        _0x3c6a5d.FLOWER = "FLOWER";
        _0x3c6a5d.MUDMAN1 = "MUDMAN1";
        _0x3c6a5d.MUDMAN2 = "MUDMAN2";
        _0x3c6a5d.ARMOR = 'ARMOR';
        _0x3c6a5d.JELLYFISH = "JELLYFISH";
        _0x3c6a5d.BOSS_WEREWOLF = "BOSS_WEREWOLF";
        _0x3c6a5d.XLBAT = 'XLBAT';
        _0x3c6a5d.XLMUMMY = "XLMUMMY";
        _0x3c6a5d.XLMANTIS = "XLMANTIS";
        _0x3c6a5d.XLFLOWER = 'XLFLOWER';
        _0x3c6a5d.BOSS_XLMUMMY = "BOSS_XLMUMMY";
        _0x3c6a5d.BOSS_XLBAT = "BOSS_XLBAT";
        _0x3c6a5d.BOSS_XLMANTIS = 'BOSS_XLMANTIS';
        _0x3c6a5d.BOSS_XLFLOWER = "BOSS_XLFLOWER";
        _0x3c6a5d.BOSS_XLDEATH = 'BOSS_XLDEATH';
      }(_0x433cce || (_0x433cce = {}));
      const _0x37a34e = {
        [_0x433cce.BAT1]: [{
          'level': 0x1,
          'maxHp': 0.1,
          'speed': 0x8c,
          'power': 0x5,
          'knockback': 0x1,
          'deathKB': 0x2,
          'xp': 0x1,
          'idleFrameCount': 0x4,
          'killedAmount': 0x0,
          'textureName': "enemies",
          'end': 0x1d,
          'frameNames': ["Bat1_0.png"]
        }],
        [_0x433cce.BAT2]: [{
          'level': 0x1,
          'maxHp': 0.5,
          'speed': 0x8c,
          'power': 0x5,
          'knockback': 0x1,
          'deathKB': 0x2,
          'xp': 0x1,
          'idleFrameCount': 0x4,
          'killedAmount': 0x0,
          'textureName': "enemies",
          'end': 0x1d,
          'frameNames': ["Bat2_0.png"]
        }],
        [_0x433cce.BAT3]: [{
          'level': 0x1,
          'maxHp': 0.5,
          'speed': 0x8c,
          'power': 0x5,
          'knockback': 0x1,
          'deathKB': 0x2,
          'killedAmount': 0x0,
          'xp': 0x1,
          'end': 0x10,
          'idleFrameCount': 0x4,
          'textureName': "enemies",
          'frameNames': ["Bat3_0.png"]
        }],
        [_0x433cce.BAT4]: [{
          'level': 0x1,
          'maxHp': 0x5,
          'speed': 0x8c,
          'power': 0xa,
          'skills': ["HPxLevel"],
          'knockback': 0x1,
          'deathKB': 0x2,
          'killedAmount': 0x0,
          'xp': 0x1e,
          'end': 0x1d,
          'idleFrameCount': 0x4,
          'textureName': 'enemies',
          'frameNames': ["Bat4_0.png"]
        }],
        [_0x433cce.BAT5]: [{
          'level': 0x1,
          'maxHp': 0x5,
          'speed': 0x8c,
          'power': 0xa,
          'skills': ['HPxLevel'],
          'knockback': 0x1,
          'deathKB': 0x2,
          'killedAmount': 0x0,
          'xp': 0x1e,
          'end': 0x1d,
          'idleFrameCount': 0x4,
          'textureName': "enemies",
          'frameNames': ["Bat5_0.png"]
        }],
        [_0x433cce.BATSWARM]: [{
          'level': 0x1,
          'maxHp': 0.1,
          'speed': 0x2bc,
          'power': 0x1,
          'knockback': 0x1,
          'deathKB': 0x2,
          'xp': 0x1,
          'idleFrameCount': 0x4,
          'skills': ["FixedDirection"],
          'killedAmount': 0x0,
          'textureName': 'enemies',
          'end': 0x10,
          'frameNames': ["Bat1_0.png", "Bat2_0.png", 'Bat3_0.png']
        }],
        [_0x433cce.SKELETON]: [{
          'level': 0x1,
          'maxHp': 1.5,
          'speed': 0x64,
          'power': 0xa,
          'knockback': 0x1,
          'deathKB': 0x5,
          'killedAmount': 0x0,
          'xp': 0x2,
          'end': 0x12,
          'textureName': 'enemies',
          'frameNames': ["Skeleton1_0.png", "Skeleton2_0.png", 'Skeleton3_0.png', "Skeleton4_0.png", "Skeleton5_0.png", "Skeleton6_0.png"]
        }],
        [_0x433cce.JELLYFISH]: [{
          'level': 0x1,
          'maxHp': 0x5,
          'speed': 0x14,
          'power': 0x1,
          'knockback': 0x1,
          'deathKB': 0x2,
          'killedAmount': 0x0,
          'xp': 0x2,
          'end': 0x1d,
          'textureName': 'enemies',
          'frameNames': ["Jellyfish_0.png"]
        }],
        [_0x433cce.FLOWER]: [{
          'level': 0x1,
          'maxHp': 0x3,
          'speed': 0x14,
          'power': 0x1,
          'knockback': 0x1,
          'deathKB': 0x2,
          'killedAmount': 0x0,
          'skills': ["HPxLevel"],
          'xp': 0x2,
          'end': 0x1d,
          'textureName': 'enemies',
          'frameNames': ["Flower1_0.png", "Flower2_0.png"]
        }],
        [_0x433cce.ZOMBIE]: [{
          'level': 0x1,
          'maxHp': 0x1,
          'speed': 0x64,
          'power': 0xa,
          'knockback': 0.8,
          'deathKB': 0x4,
          'killedAmount': 0x0,
          'xp': 0x1,
          'end': 0x14,
          'textureName': "enemies",
          'frameNames': ["Ghoul1_0.png", "Ghoul2_0.png", 'Ghoul3_0.png']
        }],
        [_0x433cce.MUDMAN1]: [{
          'level': 0x1,
          'maxHp': 0x7,
          'speed': 0x64,
          'power': 0xa,
          'knockback': 0.3,
          'deathKB': 0x2,
          'killedAmount': 0x0,
          'xp': 2.5,
          'end': 0x1d,
          'textureName': "enemies",
          'frameNames': ["Mudman1_0.png"]
        }],
        [_0x433cce.MUDMAN2]: [{
          'level': 0x1,
          'maxHp': 0xf,
          'speed': 0x64,
          'power': 0xa,
          'knockback': 0.3,
          'deathKB': 0x2,
          'killedAmount': 0x0,
          'xp': 2.5,
          'end': 0x1d,
          'textureName': "enemies",
          'frameNames': ["Mudman2_0.png"]
        }],
        [_0x433cce.WEREWOLF]: [{
          'level': 0x1,
          'maxHp': 0x12,
          'speed': 0x82,
          'power': 0xe,
          'knockback': 0.8,
          'deathKB': 0x7,
          'killedAmount': 0x0,
          'xp': 0x2,
          'end': 0x15,
          'textureName': "enemies",
          'frameNames': ["Werewolf1_0.png"]
        }],
        [_0x433cce.GHOST]: [{
          'level': 0x1,
          'maxHp': 0x1,
          'speed': 0xc8,
          'power': 0x5,
          'knockback': 0x0,
          'deathKB': 0x0,
          'killedAmount': 0x0,
          'xp': 1.5,
          'end': 0xb,
          'textureName': 'enemies',
          'frameNames': ['Ghost_0.png'],
          'alpha': 0.5
        }],
        [_0x433cce.GHOSTSWARM]: [{
          'level': 0x1,
          'maxHp': 0x1,
          'speed': 0x2bc,
          'power': 0x5,
          'knockback': 0x0,
          'deathKB': 0x0,
          'killedAmount': 0x0,
          'xp': 1.5,
          'end': 0xb,
          'textureName': "enemies",
          'frameNames': ['Ghost_0.png'],
          'skills': ["FixedDirection"],
          'alpha': 0.5
        }],
        [_0x433cce.ARMOR]: [{
          'level': 0x1,
          'maxHp': 0x4,
          'speed': 0x50,
          'power': 0xa,
          'knockback': 0.5,
          'deathKB': 0x5,
          'killedAmount': 0x0,
          'xp': 0x3,
          'end': 0x1d,
          'textureName': "enemies",
          'frameNames': ['Armor1_0.png', "Armor2_0.png", "Armor3_0.png", "Armor4_0.png", 'Armor5_0.png']
        }],
        [_0x433cce.XLBAT]: [{
          'level': 0xa,
          'maxHp': 0x1b,
          'speed': 0x8c,
          'power': 0xa,
          'knockback': 0.1,
          'deathKB': 0x2,
          'killedAmount': 0x0,
          'xp': 2.5,
          'end': 0x11,
          'textureName': "enemies",
          'frameNames': ["XLBat_0.png"],
          'colliderOverride': {
            'radius': 0.3,
            'offsetY': -0x8
          }
        }],
        [_0x433cce.XLMANTIS]: [{
          'level': 0xa,
          'maxHp': 0x32,
          'speed': 0x50,
          'power': 0x14,
          'knockback': 0x0,
          'deathKB': 0x0,
          'killedAmount': 0x0,
          'xp': 0x3,
          'end': 0x1d,
          'textureName': 'enemies',
          'frameNames': ['XLMantis_0.png']
        }],
        [_0x433cce.XLMUMMY]: [{
          'level': 0xa,
          'maxHp': 0x32,
          'speed': 0x50,
          'power': 0x14,
          'knockback': 0x0,
          'deathKB': 0x0,
          'killedAmount': 0x0,
          'xp': 0x3,
          'end': 0x1d,
          'textureName': "enemies",
          'frameNames': ["XLMummy_0.png"]
        }],
        [_0x433cce.XLFLOWER]: [{
          'level': 0xa,
          'maxHp': 0x32,
          'speed': 0x50,
          'power': 0x14,
          'knockback': 0x0,
          'deathKB': 0x0,
          'killedAmount': 0x0,
          'xp': 0x3,
          'end': 0x1d,
          'textureName': "enemies",
          'frameNames': ["XLFlower1_0.png"]
        }],
        [_0x433cce.BOSS_WEREWOLF]: [{
          'level': 0x1,
          'maxHp': 0x14,
          'speed': 0x82,
          'power': 0x14,
          'skills': ["HPxLevel"],
          'knockback': 0.1,
          'deathKB': 0x7,
          'killedAmount': 0x0,
          'xp': 0x2,
          'end': 0x15,
          'scale': 1.5,
          'textureName': 'enemies',
          'frameNames': ["Werewolf1_0.png"]
        }],
        [_0x433cce.BOSS_XLMUMMY]: [{
          'level': 0xf,
          'maxHp': 0x19,
          'speed': 0x50,
          'power': 0x14,
          'skills': ['HPxLevel'],
          'res_Freeze': 0x1,
          'knockback': 0x0,
          'deathKB': 0x5,
          'killedAmount': 0x0,
          'scale': 1.5,
          'xp': 0x19,
          'end': 0x1d,
          'textureName': "enemies",
          'frameNames': ["XLMummy_0.png"]
        }],
        [_0x433cce.BOSS_XLBAT]: [{
          'level': 0xf,
          'maxHp': 0x32,
          'speed': 0x8c,
          'power': 0x14,
          'skills': ["HPxLevel"],
          'res_Freeze': 0x1,
          'knockback': 0x0,
          'deathKB': 0x5,
          'killedAmount': 0x0,
          'scale': 1.5,
          'xp': 0x19,
          'end': 0x17,
          'textureName': 'enemies',
          'frameNames': ["XLBat_0.png"]
        }],
        [_0x433cce.BOSS_XLMANTIS]: [{
          'level': 0xf,
          'maxHp': 0xf,
          'speed': 0xa0,
          'power': 0x14,
          'skills': ['HPxLevel'],
          'res_Freeze': 0x1,
          'knockback': 0x0,
          'deathKB': 0x5,
          'killedAmount': 0x0,
          'scale': 1.5,
          'xp': 0x32,
          'end': 0x17,
          'textureName': "enemies",
          'frameNames': ["XLMantis_0.png"]
        }],
        [_0x433cce.BOSS_XLFLOWER]: [{
          'level': 0x1e,
          'maxHp': 0xf,
          'speed': 0xa0,
          'power': 0x1e,
          'skills': ['HPxLevel'],
          'res_Freeze': 0x1,
          'knockback': 0x0,
          'deathKB': 0x1,
          'killedAmount': 0x0,
          'scale': 1.5,
          'xp': 0x32,
          'end': 0x1d,
          'textureName': "enemies",
          'frameNames': ["XLFlower1_0.png"]
        }],
        [_0x433cce.BOSS_XLDEATH]: [{
          'level': 0x64,
          'maxHp': 0xffff,
          'speed': 0x4b0,
          'power': 0xffff,
          'skills': ["HPxLevel"],
          'res_Freeze': 0x1,
          'res_Rosary': 0x1,
          'res_Knockback': 0x1,
          'knockback': -0.5,
          'deathKB': 0x0,
          'killedAmount': 0x0,
          'scale': 1.5,
          'xp': 0x0,
          'end': 0x1d,
          'textureName': "enemies",
          'frameNames': ["XLReaper_0.png"]
        }]
      };
      var _0x4b0b3f;
      !function (_0x1b9423) {
        _0x1b9423.CANDLE = 'CANDLE';
        _0x1b9423.CANDELABRA = 'CANDELABRA';
        _0x1b9423.BRAZIER = "BRAZIER";
      }(_0x4b0b3f || (_0x4b0b3f = {}));
      const _0x5984e8 = {
        [_0x4b0b3f.BRAZIER]: {
          'textureName': "items",
          'frameName': "Brazier",
          'destroyedAmount': 0x0,
          'maxHp': 0x1,
          'destructibleType': _0x4b0b3f.BRAZIER
        },
        [_0x4b0b3f.CANDELABRA]: {
          'textureName': 'items',
          'frameName': 'Candelabrone',
          'destroyedAmount': 0x0,
          'maxHp': 0x1,
          'destructibleType': _0x4b0b3f.CANDELABRA
        },
        [_0x4b0b3f.CANDLE]: {
          'textureName': "items",
          'frameName': "Candelabrone",
          'destroyedAmount': 0x0,
          'maxHp': 0.1,
          'destructibleType': _0x4b0b3f.CANDLE
        }
      };
      var _0x340ca6;
      !function (_0x522b5c) {
        _0x522b5c.ReachLV5 = 'ReachLV5';
        _0x522b5c.ReachLV10 = "ReachLV10";
        _0x522b5c.Have6DifferentWeapons = "Have6DifferentWeapons";
        _0x522b5c.GetFireWandToLevel4 = 'GetFireWandToLevel4';
        _0x522b5c.GetHolyBookToLevel4 = "GetHolyBookToLevel4";
        _0x522b5c.GetHolyWaterToLevel4 = "GetHolyWaterToLevel4";
        _0x522b5c.GetLightningRingToLevel4 = "GetLightningRingToLevel4";
        _0x522b5c.GetMagicMissileToLevel7 = "GetMagicMissileToLevel7";
        _0x522b5c.GetPeachoneToLevel7 = 'GetPeachoneToLevel7';
        _0x522b5c.GetRunetracerToLevel7 = "GetRunetracerToLevel7";
        _0x522b5c.Survive1Minute = "Survive1Minute";
        _0x522b5c.Survive5MinutesWithDiamond = "Survive5MinutesWithDiamond";
        _0x522b5c.Survive10Minutes = "Survive10Minutes";
        _0x522b5c.Survive20Minutes = "Survive20Minutes";
        _0x522b5c.Destroy20Candles = "Destroy20Candles";
        _0x522b5c.Eat5PotRoast = "Eat5PotRoast";
        _0x522b5c.FindAClover = "FindAClover";
        _0x522b5c.FindAVacuum = "FindAVacuum";
        _0x522b5c.FindAnOrologion = "FindAnOrologion";
        _0x522b5c.FindARosary = "FindARosary";
        _0x522b5c.Defeat5000Enemies = "Defeat5000Enemies";
        _0x522b5c.Defeat3000Skeletons = "Defeat3000Skeletons";
        _0x522b5c.DefeatBossMadForest = "DefeatBossMadForest";
      }(_0x340ca6 || (_0x340ca6 = {}));
      const _0x3fbaa9 = {
        [_0x340ca6.ReachLV5]: {
          'description': "Reach Level 5.",
          'weaponToUnlock': _0x2a5ca3.MOVESPEED,
          'achieved': false
        },
        [_0x340ca6.ReachLV10]: {
          'description': "Reach Level 10.",
          'weaponToUnlock': _0x2a5ca3.GROWTH,
          'achieved': false
        },
        [_0x340ca6.Survive1Minute]: {
          'description': "Survive 1 minute with any character.",
          'weaponToUnlock': _0x2a5ca3.MAXHEALTH,
          'achieved': false
        },
        [_0x340ca6.Survive5MinutesWithDiamond]: {
          'description': "Survive 5 minutes with Pasqualina.",
          'weaponToUnlock': _0x2a5ca3.DIAMOND,
          'achieved': false
        },
        [_0x340ca6.Survive10Minutes]: {
          'description': "Survive 10 minutes with any character.",
          'weaponToUnlock': _0x2a5ca3.SILF,
          'achieved': false
        },
        [_0x340ca6.Survive20Minutes]: {
          'description': "Survive 20 minutes with any character.",
          'weaponToUnlock': _0x2a5ca3.PENTAGRAM,
          'achieved': false
        },
        [_0x340ca6.GetFireWandToLevel4]: {
          'description': "Get Fire Wand to Level 4.",
          'characterToUnlock': _0x2fbe76.ARCA,
          'achieved': false
        },
        [_0x340ca6.GetHolyBookToLevel4]: {
          'description': "Get King Bible to Level 4.",
          'weaponToUnlock': _0x2a5ca3.SPEED,
          'achieved': false
        },
        [_0x340ca6.GetHolyWaterToLevel4]: {
          'description': "Get Santa Water to Level 4.",
          'weaponToUnlock': _0x2a5ca3.AREA,
          'achieved': false
        },
        [_0x340ca6.GetLightningRingToLevel4]: {
          'description': "Get Lightning Ring to Level 4.",
          'characterToUnlock': _0x2fbe76.PORTA,
          'achieved': false
        },
        [_0x340ca6.GetMagicMissileToLevel7]: {
          'description': "Get Magic Wand to Level 7.",
          'weaponToUnlock': _0x2a5ca3.AMOUNT,
          'achieved': false
        },
        [_0x340ca6.GetPeachoneToLevel7]: {
          'description': "Get Peachone to Level 7.",
          'weaponToUnlock': _0x2a5ca3.SILF2,
          'achieved': false
        },
        [_0x340ca6.GetRunetracerToLevel7]: {
          'description': "Get Runetracer to Level 7.",
          'weaponToUnlock': _0x2a5ca3.DURATION,
          'achieved': false
        },
        [_0x340ca6.Have6DifferentWeapons]: {
          'description': "Hold 6 different weapons at once.",
          'weaponToUnlock': _0x2a5ca3.COOLDOWN,
          'achieved': false
        },
        [_0x340ca6.Destroy20Candles]: {
          'description': "Destroy 20 light sources.",
          'weaponToUnlock': _0x2a5ca3.FIREBALL,
          'achieved': false
        },
        [_0x340ca6.Eat5PotRoast]: {
          'description': "Find 5 Pot Roasts.",
          'weaponToUnlock': _0x2a5ca3.GARLIC,
          'achieved': false
        },
        [_0x340ca6.FindAClover]: {
          'description': "Find a Clover.",
          'weaponToUnlock': _0x2a5ca3.LUCK,
          'achieved': false
        },
        [_0x340ca6.FindAVacuum]: {
          'description': "Find a Vacuum.",
          'weaponToUnlock': _0x2a5ca3.MAGNET,
          'achieved': false
        },
        [_0x340ca6.FindAnOrologion]: {
          'description': "Find an Orologion.",
          'weaponToUnlock': _0x2a5ca3.LANCET,
          'achieved': false
        },
        [_0x340ca6.FindARosary]: {
          'description': "Find a Rosary.",
          'weaponToUnlock': _0x2a5ca3.CROSS,
          'achieved': false
        },
        [_0x340ca6.DefeatBossMadForest]: {
          'description': "Defeat the giant Blue Venus in the Mad Forest.",
          'hyperToUnlock': _0x23a5f2.FOREST,
          'achieved': false
        },
        [_0x340ca6.Defeat5000Enemies]: {
          'description': "Defeat a total of 5000 enemies.",
          'weaponToUnlock': _0x2a5ca3.LIGHTNING,
          'achieved': false
        },
        [_0x340ca6.Defeat3000Skeletons]: {
          'description': "Defeat a total of 3000 skeletons.",
          'weaponToUnlock': _0x2a5ca3.BONE,
          'characterToUnlock': _0x2fbe76.MORTACCIO,
          'achieved': false
        }
      };
      var _0x2a9e31;
      !function (_0x2bfd78) {
        _0x2bfd78.POWERUP = 'POWERUP';
        _0x2bfd78.EXISTING_WEAPON = "EXISTING_WEAPON";
        _0x2bfd78.EXISTING_ANY = 'EXISTING_ANY';
        _0x2bfd78.FILLER = "FILLER";
        _0x2bfd78.RANDOM = "RANDOM";
        _0x2bfd78.FIXED = "FIXED";
        _0x2bfd78.EVOLUTION = 'EVOLUTION';
      }(_0x2a9e31 || (_0x2a9e31 = {}));
      var _0x20143d;
      !function (_0x4418a4) {
        _0x4418a4.STANDARD = "STANDARD";
        _0x4418a4.HORIZONTAL = "HORIZONTAL";
        _0x4418a4.VERTICAL = 'VERTICAL';
        _0x4418a4.SCRIPTED = "SCRIPTED";
      }(_0x20143d || (_0x20143d = {}));
      var _0x3041ae;
      !function (_0x4c7fdf) {
        _0x4c7fdf.FLOWER_WALL = "FLOWER_WALL";
        _0x4c7fdf.JELLY_WALL = "JELLY_WALL";
        _0x4c7fdf.BAT_SWARM = "BAT_SWARM";
        _0x4c7fdf.GHOST_SWARM = "GHOST_SWARM";
        _0x4c7fdf.ERASE_ENEMIES = "ERASE_ENEMIES";
      }(_0x3041ae || (_0x3041ae = {}));
      const _0x26e87a = {
        [_0x23a5f2.FOREST]: [{
          'stageName': "Mad Forest",
          'description': "Passing through the forest is the only way to reach the Castle. Also, there's free roast chicken.",
          'uiTexture': 'UI',
          'uiFrame': "stage_forest.png",
          'texture': 'UI',
          'frameName': 'stage_forest_icon.png',
          'unlocked': true,
          'tips': '',
          'hyper': {
            'unlocked': false,
            'PlayerPxSpeed': 1.75,
            'EnemySpeed': 1.75,
            'ProjectileSpeed': 1.25,
            'GoldMultiplier': 1.5,
            'EnemyMinimumMul': 1.25,
            'StartingSpawns': 0x14,
            'tips': "Gold multiplier: x1.5"
          },
          'startingSpawns': 0x3,
          'minute': 0x0,
          'destructibleType': _0x4b0b3f.BRAZIER,
          'destructibleFreq': 0x3e8,
          'destructibleChance': 0xa,
          'destructibleChanceMax': 0x32,
          'maxDestructibles': 0xa,
          'BGTextureName': "forest_tile_bg",
          'tilemapTiledJSON': {
            'name': '',
            'path': ''
          },
          'tilemapTiledIMG': {
            'name': '',
            'path': ''
          },
          'tilemapPos': {
            'x': 0x0,
            'y': 0x0
          },
          'minimum': 0xa,
          'frequency': 0x3e8,
          'enemies': [_0x433cce.BAT3]
        }, {
          'minute': 0x1,
          'minimum': 0x1e,
          'frequency': 0x3e8,
          'enemies': [_0x433cce.ZOMBIE, _0x433cce.BAT1],
          'bosses': [_0x433cce.BAT4],
          'treasure': {
            'chances': [0x0, 0x0, 0x1e],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM],
            'fixedPrizes': [_0x2a5ca3.AMOUNT]
          }
        }, {
          'minute': 0x2,
          'minimum': 0x32,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.BAT1, _0x433cce.BAT2, _0x433cce.BAT3],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x1388,
            'repeat': 0x2
          }]
        }, {
          'minute': 0x3,
          'minimum': 0x28,
          'frequency': 0xfa,
          'enemies': [_0x433cce.SKELETON],
          'bosses': [_0x433cce.BAT4],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x1388,
            'repeat': 0x1,
            'chance': 0xa
          }],
          'treasure': {
            'chances': [0x0, 0x5, 0x28],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EXISTING_WEAPON, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x4,
          'minimum': 0x1e,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.SKELETON, _0x433cce.GHOST],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x1388,
            'repeat': 0x1,
            'chance': 0xa
          }]
        }, {
          'minute': 0x5,
          'minimum': 0xa,
          'frequency': 0x3e8,
          'enemies': [_0x433cce.MUDMAN2],
          'bosses': [_0x433cce.XLMANTIS],
          'events': [{
            'eventType': _0x3041ae.FLOWER_WALL,
            'chance': 0x0,
            'duration': 0x7530
          }],
          'treasure': {
            'chances': [0x1, 0x5, 0x64],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EXISTING_WEAPON, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x6,
          'minimum': 0x14,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.ZOMBIE, _0x433cce.MUDMAN2],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x1388,
            'repeat': 0x1,
            'chance': 0xa
          }]
        }, {
          'minute': 0x7,
          'minimum': 0x50,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.BAT2, _0x433cce.BAT3, _0x433cce.MUDMAN1],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x1388,
            'chance': 0x50,
            'repeat': 0x5
          }],
          'bosses': [_0x433cce.BAT4],
          'treasure': {
            'chances': [0x3, 0xa, 0x32],
            'level': 0x2,
            'prizeTypes': [_0x2a9e31.EXISTING_WEAPON, _0x2a9e31.POWERUP, _0x2a9e31.POWERUP, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x8,
          'minimum': 0x64,
          'frequency': 0x5dc,
          'enemies': [_0x433cce.ZOMBIE],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x3a98,
            'chance': 0x50,
            'repeat': 0x2
          }],
          'bosses': [_0x433cce.XLBAT]
        }, {
          'minute': 0x9,
          'minimum': 0x1e,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.XLBAT, _0x433cce.ZOMBIE],
          'bosses': [_0x433cce.BAT5],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x3a98,
            'chance': 0x46,
            'repeat': 0x2
          }],
          'treasure': {
            'chances': [0x3, 0xa, 0x32],
            'level': 0x3,
            'prizeTypes': [_0x2a9e31.EXISTING_WEAPON, _0x2a9e31.EXISTING_ANY, _0x2a9e31.EXISTING_ANY, _0x2a9e31.EXISTING_WEAPON, _0x2a9e31.EXISTING_WEAPON]
          }
        }, {
          'minute': 0xa,
          'minimum': 0xa,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.MUDMAN1, _0x433cce.MUDMAN2],
          'bosses': [_0x433cce.BOSS_XLMANTIS],
          'events': [{
            'eventType': _0x3041ae.FLOWER_WALL
          }],
          'treasure': {
            'chances': [0x3, 0xa, 0x64],
            'level': 0x3,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.EXISTING_ANY, _0x2a9e31.EXISTING_ANY, _0x2a9e31.EXISTING_WEAPON, _0x2a9e31.EXISTING_WEAPON]
          }
        }, {
          'minute': 0xb,
          'minimum': 0x12c,
          'frequency': 0x64,
          'enemies': [_0x433cce.SKELETON],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x1388,
            'repeat': 0x1,
            'chance': 0xa
          }]
        }, {
          'minute': 0xc,
          'minimum': 0x14,
          'frequency': 0xfa,
          'enemies': [_0x433cce.WEREWOLF, _0x433cce.GHOST, _0x433cce.SKELETON],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x1388,
            'repeat': 0x1,
            'chance': 0xa
          }],
          'bosses': [_0x433cce.BAT4],
          'treasure': {
            'chances': [0x1, 0x5, 0x32],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0xd,
          'minimum': 0x96,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.WEREWOLF, _0x433cce.GHOST, _0x433cce.GHOST],
          'events': [{
            'eventType': _0x3041ae.GHOST_SWARM,
            'delay': 0x4b0,
            'chance': 0x46,
            'repeat': 0x14
          }, {
            'eventType': _0x3041ae.GHOST_SWARM,
            'delay': 0x8fc,
            'chance': 0x46,
            'repeat': 0x14
          }]
        }, {
          'minute': 0xe,
          'minimum': 0x14,
          'frequency': 0x64,
          'enemies': [_0x433cce.XLBAT, _0x433cce.WEREWOLF],
          'bosses': [_0x433cce.BAT5],
          'treasure': {
            'chances': [0x3, 0xa, 0x50],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0xf,
          'minimum': 0x64,
          'frequency': 0x64,
          'enemies': [_0x433cce.WEREWOLF, _0x433cce.XLBAT, _0x433cce.MUDMAN2],
          'bosses': [_0x433cce.BOSS_WEREWOLF],
          'events': [{
            'eventType': _0x3041ae.FLOWER_WALL,
            'chance': 0x50
          }],
          'treasure': {
            'chances': [0x3, 0xa, 0x64],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x10,
          'minimum': 0x64,
          'frequency': 0x64,
          'enemies': [_0x433cce.XLMANTIS, _0x433cce.MUDMAN1, _0x433cce.MUDMAN2],
          'bosses': [_0x433cce.BAT4],
          'treasure': {
            'chances': [0x1, 0x5, 0x32],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x11,
          'minimum': 0x14,
          'frequency': 0x3e8,
          'enemies': [_0x433cce.XLMUMMY]
        }, {
          'minute': 0x12,
          'minimum': 0x3c,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.XLMUMMY, _0x433cce.MUDMAN1],
          'bosses': [_0x433cce.BAT5],
          'treasure': {
            'chances': [0x3, 0xa, 0x50],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x13,
          'minimum': 0x64,
          'frequency': 0x1f4,
          'enemies': [_0x433cce.XLMUMMY, _0x433cce.MUDMAN1]
        }, {
          'minute': 0x14,
          'minimum': 0x64,
          'frequency': 0x64,
          'enemies': [_0x433cce.XLMUMMY, _0x433cce.MUDMAN2, _0x433cce.XLBAT],
          'bosses': [_0x433cce.BOSS_XLMUMMY],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x4b0,
            'chance': 0x46,
            'repeat': 0x14
          }, {
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x8fc,
            'chance': 0x46,
            'repeat': 0x14
          }],
          'treasure': {
            'chances': [0x3, 0xa, 0x64],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x15,
          'minimum': 0x190,
          'frequency': 0x64,
          'enemies': [_0x433cce.FLOWER],
          'bosses': [_0x433cce.XLFLOWER]
        }, {
          'minute': 0x16,
          'minimum': 0xc8,
          'frequency': 0x64,
          'enemies': [_0x433cce.FLOWER, _0x433cce.XLMUMMY],
          'bosses': [_0x433cce.BAT4],
          'treasure': {
            'chances': [0x3, 0xa, 0x64],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x17,
          'minimum': 0x12c,
          'frequency': 0x64,
          'enemies': [_0x433cce.FLOWER, _0x433cce.XLMUMMY],
          'bosses': [_0x433cce.BAT5],
          'treasure': {
            'chances': [0x3, 0xa, 0x50],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x18,
          'minimum': 0x190,
          'frequency': 0x64,
          'enemies': [_0x433cce.FLOWER, _0x433cce.XLMUMMY],
          'bosses': [_0x433cce.XLFLOWER],
          'events': [{
            'eventType': _0x3041ae.FLOWER_WALL,
            'delay': 0x2710,
            'repeat': 0x5,
            'duration': 0x2710
          }]
        }, {
          'minute': 0x19,
          'minimum': 0x64,
          'frequency': 0x64,
          'enemies': [_0x433cce.XLFLOWER],
          'bosses': [_0x433cce.BOSS_XLFLOWER],
          'events': [{
            'eventType': _0x3041ae.FLOWER_WALL,
            'delay': 0x2710,
            'repeat': 0x5,
            'duration': 0x2710
          }],
          'treasure': {
            'chances': [0x3, 0xa, 0x64],
            'level': 0x3,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x1a,
          'minimum': 0x1f4,
          'frequency': 0x64,
          'enemies': [_0x433cce.XLFLOWER, _0x433cce.FLOWER]
        }, {
          'minute': 0x1b,
          'minimum': 0x1f4,
          'frequency': 0x64,
          'bosses': [_0x433cce.BAT4],
          'enemies': [_0x433cce.XLMUMMY, _0x433cce.MUDMAN1, _0x433cce.MUDMAN2],
          'events': [{
            'eventType': _0x3041ae.GHOST_SWARM,
            'delay': 0x3e8,
            'repeat': 0x3b
          }],
          'treasure': {
            'chances': [0x3, 0xa, 0x50],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x1c,
          'minimum': 0x1f4,
          'frequency': 0x64,
          'enemies': [_0x433cce.XLBAT, _0x433cce.BAT4]
        }, {
          'minute': 0x1d,
          'minimum': 0x1f4,
          'frequency': 0x64,
          'bosses': [_0x433cce.BAT4],
          'enemies': [_0x433cce.BAT4, _0x433cce.BAT5],
          'events': [{
            'eventType': _0x3041ae.BAT_SWARM,
            'delay': 0x3e8,
            'repeat': 0x3b
          }],
          'treasure': {
            'chances': [0x3, 0xa, 0x50],
            'level': 0x1,
            'prizeTypes': [_0x2a9e31.EVOLUTION, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM, _0x2a9e31.RANDOM]
          }
        }, {
          'minute': 0x1e,
          'minimum': 0x1,
          'frequency': 0x2710,
          'enemies': [],
          'bosses': [_0x433cce.BOSS_XLDEATH],
          'events': [{
            'eventType': _0x3041ae.ERASE_ENEMIES
          }]
        }],
        [_0x23a5f2.SINKING]: [{
          'stageName': "Old Sanctuary",
          'description': "Let's check this sinking old sanctuary in Greece real quick, the legend says there's roast chicken in the walls.",
          'uiTexture': 'UI',
          'uiFrame': 'stage_sinking.png',
          'unlocked': false,
          'hidden': true,
          'tips': '',
          'hyper': {
            'unlocked': false,
            'PlayerPxSpeed': 1.5,
            'EnemySpeed': 1.6,
            'ProjectileSpeed': 1.2,
            'GoldMultiplier': 1.5,
            'EnemyMinimumMul': 1.25,
            'StartingSpawns': 0x14,
            'tips': "Gold multiplier: x1.5"
          },
          'startingSpawns': 0x3,
          'minute': 0x0,
          'destructibleType': _0x4b0b3f.BRAZIER,
          'destructibleFreq': 0x3e8,
          'destructibleChance': 0xa,
          'destructibleChanceMax': 0x32,
          'maxDestructibles': 0xa,
          'BGTextureName': "forest_tile_bg",
          'minimum': 0xa,
          'frequency': 0x5dc,
          'enemies': [_0x433cce.BAT3]
        }],
        [_0x23a5f2.LIBRARY]: [{
          'stageName': "Inlaid Library",
          'description': "A short time for such a long library, quick grab all the dusty chicken.\nHey, what's that? A stone mask?",
          'uiTexture': 'UI',
          'uiFrame': 'stage_sinking.png',
          'unlocked': false,
          'hidden': true,
          'tips': '',
          'hyper': {
            'unlocked': false,
            'PlayerPxSpeed': 1.5,
            'EnemySpeed': 1.6,
            'ProjectileSpeed': 1.2,
            'GoldMultiplier': 1.5,
            'EnemyMinimumMul': 1.25,
            'StartingSpawns': 0x28,
            'tips': "Gold multiplier: x1.5"
          },
          'tileset': {
            'setKey': "MyTileset",
            'setPath': "assets/tilesets/MyTileset.png",
            'mapKey': "MansionMap",
            'mapPath': "assets/tilesets/Mansion.json",
            'isTiling': true
          },
          'spawnType': _0x20143d.HORIZONTAL,
          'startingPlayerLevel': 0x5,
          'startingSpawns': 0x14,
          'minute': 0x0,
          'destructibleType': _0x4b0b3f.CANDLE,
          'destructibleFreq': 0x1388,
          'destructibleChance': 0xa,
          'destructibleChanceMax': 0x32,
          'maxDestructibles': 0xa,
          'BGTextureName': "forest_tile_bg",
          'minimum': 0x14,
          'frequency': 0x3e8,
          'enemies': [_0x433cce.BAT3]
        }]
      };
      var _0x84835e = function (_0x298e40, _0x37dbdb, _0x13001f, _0x1ced0d) {
        return new (_0x13001f || (_0x13001f = Promise))(function (_0x588aae, _0xe7007e) {
          function _0x779d87(_0x432b8d) {
            try {
              _0x5cb984(_0x1ced0d.next(_0x432b8d));
            } catch (_0x33fdbc) {
              _0xe7007e(_0x33fdbc);
            }
          }
          function _0x18fa46(_0xfd474d) {
            try {
              _0x5cb984(_0x1ced0d["throw"](_0xfd474d));
            } catch (_0x4f1e34) {
              _0xe7007e(_0x4f1e34);
            }
          }
          function _0x5cb984(_0x3f52d5) {
            var _0x4152cd;
            if (_0x3f52d5.done) {
              _0x588aae(_0x3f52d5.value);
            } else {
              _0x4152cd = _0x3f52d5.value;
              (_0x4152cd instanceof _0x13001f ? _0x4152cd : new _0x13001f(function (_0x53dfc1) {
                _0x53dfc1(_0x4152cd);
              })).then(_0x779d87, _0x18fa46);
            }
          }
          _0x5cb984((_0x1ced0d = _0x1ced0d.apply(_0x298e40, _0x37dbdb || [])).next());
        });
      };
      const _0x24e67f = class {
        constructor() {
          this.SelectedCharacter = _0x2fbe76.ANTONIO;
          this.SelectedStage = _0x23a5f2.FOREST;
          this.SelectedHyper = false;
          this.Coins = 0x0;
          this.RunCoins = 0x0;
          this.RunEnemies = 0x0;
          this.LifetimeCoins = 0x0;
          this.LifetimeSurvived = 0x0;
          this.LifetimeHeal = 0x0;
          this.SoundsEnabled = true;
          this.MusicEnabled = true;
          this.FlashingVFXEnabled = true;
          this.JoystickVisible = false;
          this.DamageNumbersEnabled = true;
          this.CheatCodeUsed = false;
          this.BoughtCharacters = new Array();
          this.BoughtPowerups = new Array();
          this.CollectedWeapons = new Array();
          this.UnlockedWeapons = new Array();
          this.UnlockedCharacters = new Array();
          this.CollectedItems = new Array();
          this.Achievements = new Array();
          this.UnlockedStages = new Array();
          this.UnlockedHypers = new Array();
          this.KillCount = {};
          this.PickupCount = {};
          this.DestroyedCount = {};
        }
        ["GetCurrentCoins"]() {
          return this.Coins;
        }
        ["AddCoins"](_0x4ed3fa) {
          _0x4ed3fa *= _0x34bb1a.GoldMultiplier;
          if (_0x1d0e6c.Core.Player) {
            _0x4ed3fa *= _0x1d0e6c.Core.Player.greed;
          }
          this.Coins += _0x4ed3fa;
          this.RunCoins += _0x4ed3fa;
          this.LifetimeCoins += _0x4ed3fa;
          this.SaveCoins();
        }
        ["AddHeal"](_0x2f8244) {
          this.LifetimeHeal += _0x2f8244;
          this.SaveHeal();
        }
        ["_set"](_0x3d3c24, _0x11ca16) {
          return _0x84835e(this, undefined, undefined, function* () {
            yield _0x273c1d.K.set({
              'key': _0x3d3c24,
              'value': _0x11ca16
            });
          });
        }
        ["_get"](_0x597aa6) {
          return _0x84835e(this, undefined, undefined, function* () {
            return yield _0x273c1d.K.get({
              'key': _0x597aa6
            });
          });
        }
        ["CLEAR"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            return yield _0x273c1d.K.clear();
          });
        }
        ["Save"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            yield this._set('SelectedCharacter', JSON.stringify(this.SelectedCharacter));
            yield this._set("SelectedStage", JSON.stringify(this.SelectedStage));
            yield this._set("SelectedHyper", JSON.stringify(this.SelectedHyper));
            yield this._set("BoughtCharacters", JSON.stringify(this.BoughtCharacters));
            yield this._set("BoughtPowerups", JSON.stringify(this.BoughtPowerups));
            yield this._set('Achievements', JSON.stringify(this.Achievements));
            yield this.SaveCoins();
            yield this.SaveOptions();
            yield this.SaveCollection();
            yield this.SaveUnlocks();
            yield this.SaveGameResults();
          });
        }
        ["SaveCoins"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            yield this._set("Coins", JSON.stringify(this.Coins));
            yield this._set("LifetimeCoins", JSON.stringify(this.LifetimeCoins));
          });
        }
        ["SaveHeal"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            yield this._set('LifetimeHeal', JSON.stringify(this.LifetimeHeal));
            console.log(this.LifetimeHeal);
          });
        }
        ["SaveOptions"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            yield this._set("SoundsEnabled", JSON.stringify(this.SoundsEnabled));
            yield this._set("MusicEnabled", JSON.stringify(this.MusicEnabled));
            yield this._set("FlashingVFXEnabled", JSON.stringify(this.FlashingVFXEnabled));
            yield this._set("DamageNumbersEnabled", JSON.stringify(this.DamageNumbersEnabled));
            yield this._set("JoystickVisible", JSON.stringify(this.JoystickVisible));
            yield this._set('CheatCodeUsed', JSON.stringify(this.CheatCodeUsed));
          });
        }
        ["SaveCollection"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            yield this._set("CollectedWeapons", JSON.stringify(this.CollectedWeapons));
            yield this._set('CollectedItems', JSON.stringify(this.CollectedItems));
          });
        }
        ["SaveUnlocks"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            yield this._set("UnlockedWeapons", JSON.stringify(this.UnlockedWeapons));
            yield this._set("UnlockedCharacters", JSON.stringify(this.UnlockedCharacters));
            yield this._set('UnlockedStages', JSON.stringify(this.UnlockedStages));
            yield this._set("UnlockedHypers", JSON.stringify(this.UnlockedHypers));
          });
        }
        ["SaveGameResults"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            for (const _0x1199eb in _0x37a34e) this.KillCount[_0x1199eb] = _0x37a34e[_0x1199eb][0x0].killedAmount;
            for (const _0x9f0171 in _0x34b109) this.PickupCount[_0x9f0171] = _0x34b109[_0x9f0171].pickedupAmount;
            for (const _0x5c06aa in _0x5984e8) this.DestroyedCount[_0x5c06aa] = _0x5984e8[_0x5c06aa].destroyedAmount;
            yield this._set('KillCount', JSON.stringify(this.KillCount));
            yield this._set("PickupCount", JSON.stringify(this.PickupCount));
            yield this._set("DestroyedCount", JSON.stringify(this.DestroyedCount));
            yield this._set("LifetimeSurvived", JSON.stringify(this.LifetimeSurvived));
            yield this._set('LifetimeHeal', JSON.stringify(this.LifetimeHeal));
          });
        }
        ["ClearGameResults"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            yield this._set("KillCount", JSON.stringify({}));
            yield this._set("PickupCount", JSON.stringify({}));
            yield this._set("DestroyedCount", JSON.stringify({}));
            yield this._set("LifetimeSurvived", JSON.stringify(0x0));
            yield this._set('LifetimeHeal', JSON.stringify(0x0));
          });
        }
        ["Load"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            var _0x50291f;
            _0x50291f = yield this._get("SelectedCharacter");
            this.SelectedCharacter = JSON.parse(_0x50291f.value || JSON.stringify(_0x2fbe76.ANTONIO));
            _0x50291f = yield this._get("SelectedStage");
            this.SelectedStage = JSON.parse(_0x50291f.value || JSON.stringify(_0x23a5f2.FOREST));
            _0x50291f = yield this._get("SelectedHyper");
            this.SelectedHyper = JSON.parse(_0x50291f.value || JSON.stringify(false));
            _0x50291f = yield this._get("Coins");
            this.Coins = JSON.parse(_0x50291f.value || JSON.stringify(0x0));
            _0x50291f = yield this._get("LifetimeCoins");
            this.LifetimeCoins = JSON.parse(_0x50291f.value || JSON.stringify(0x0));
            _0x50291f = yield this._get("BoughtCharacters");
            this.BoughtCharacters = JSON.parse(_0x50291f.value || JSON.stringify([]));
            _0x50291f = yield this._get("BoughtPowerups");
            this.BoughtPowerups = JSON.parse(_0x50291f.value || JSON.stringify([]));
            _0x50291f = yield this._get("Achievements");
            this.Achievements = JSON.parse(_0x50291f.value || JSON.stringify([]));
            _0x50291f = yield this._get("KillCount");
            this.KillCount = JSON.parse(_0x50291f.value || JSON.stringify({}));
            _0x50291f = yield this._get("PickupCount");
            this.PickupCount = JSON.parse(_0x50291f.value || JSON.stringify({}));
            _0x50291f = yield this._get("DestroyedCount");
            this.DestroyedCount = JSON.parse(_0x50291f.value || JSON.stringify({}));
            _0x50291f = yield this._get("LifetimeSurvived");
            this.LifetimeSurvived = JSON.parse(_0x50291f.value || JSON.stringify(0x0));
            _0x50291f = yield this._get("LifetimeHeal");
            this.LifetimeHeal = JSON.parse(_0x50291f.value || JSON.stringify(0x0));
            yield this.LoadOptions();
            yield this.LoadCollection();
            yield this.LoadUnlocks();
            this.apply();
          });
        }
        ["LoadOptions"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            var _0x4a62d8;
            _0x4a62d8 = yield this._get("SoundsEnabled");
            this.SoundsEnabled = JSON.parse(_0x4a62d8.value || JSON.stringify(true));
            _0x4a62d8 = yield this._get("MusicEnabled");
            this.MusicEnabled = JSON.parse(_0x4a62d8.value || JSON.stringify(true));
            _0x4a62d8 = yield this._get("FlashingVFXEnabled");
            this.FlashingVFXEnabled = JSON.parse(_0x4a62d8.value || JSON.stringify(true));
            _0x4a62d8 = yield this._get('DamageNumbersEnabled');
            this.DamageNumbersEnabled = JSON.parse(_0x4a62d8.value || JSON.stringify(true));
            _0x4a62d8 = yield this._get("JoystickVisible");
            this.JoystickVisible = JSON.parse(_0x4a62d8.value || JSON.stringify(false));
            _0x4a62d8 = yield this._get("CheatCodeUsed");
            this.CheatCodeUsed = JSON.parse(_0x4a62d8.value || JSON.stringify(false));
          });
        }
        ['LoadCollection'](_0x4a7220 = false) {
          return _0x84835e(this, undefined, undefined, function* () {
            var _0x57c0a8;
            _0x57c0a8 = yield this._get("CollectedWeapons");
            this.CollectedWeapons = JSON.parse(_0x57c0a8.value || JSON.stringify([]));
            _0x57c0a8 = yield this._get("CollectedItems");
            this.CollectedItems = JSON.parse(_0x57c0a8.value || JSON.stringify([]));
            if (_0x4a7220) {
              this.apply();
            }
          });
        }
        ["LoadUnlocks"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            var _0x2d899a;
            _0x2d899a = yield this._get("UnlockedWeapons");
            this.UnlockedWeapons = JSON.parse(_0x2d899a.value || JSON.stringify([]));
            _0x2d899a = yield this._get("UnlockedCharacters");
            this.UnlockedCharacters = JSON.parse(_0x2d899a.value || JSON.stringify([]));
            _0x2d899a = yield this._get("UnlockedStages");
            this.UnlockedStages = JSON.parse(_0x2d899a.value || JSON.stringify([]));
            _0x2d899a = yield this._get('UnlockedHypers');
            this.UnlockedHypers = JSON.parse(_0x2d899a.value || JSON.stringify([]));
          });
        }
        ["apply"]() {
          this.BoughtPowerups.forEach(_0x297206 => {
            var _0x3e9276 = _0x5f5caf[_0x297206][0x0];
            if (undefined !== _0x3e9276) {
              _0x3e9276.level = (_0x3e9276.level || 0x0) + 0x1;
            }
          });
          this.BoughtCharacters.forEach(_0x501662 => {
            var _0x4a5cbe = _0x4774f8[_0x501662];
            if (undefined !== _0x4a5cbe) {
              (_0x4a5cbe = _0x4774f8[_0x501662][0x0]).isBought = true;
            }
          });
          this.CollectedWeapons.forEach(_0x302946 => {
            var _0x594741 = _0x14b553[_0x302946];
            if (undefined !== _0x594741) {
              (_0x594741 = _0x14b553[_0x302946][0x0]).seen = true;
            }
          });
          this.CollectedItems.forEach(_0x13f77c => {
            var _0x13d119 = _0x34b109[_0x13f77c];
            if (undefined !== _0x13d119) {
              _0x13d119.seen = true;
            }
          });
          this.UnlockedWeapons.forEach(_0x40d87f => {
            var _0x10fe6b = _0x14b553[_0x40d87f];
            if (undefined !== _0x10fe6b) {
              (_0x10fe6b = _0x14b553[_0x40d87f][0x0]).isUnlocked = true;
            }
          });
          this.UnlockedCharacters.forEach(_0x2456f8 => {
            var _0x499af1 = _0x4774f8[_0x2456f8];
            if (undefined !== _0x499af1) {
              (_0x499af1 = _0x4774f8[_0x2456f8][0x0]).hidden = false;
            }
          });
          this.UnlockedStages.forEach(_0x53ba2a => {
            var _0x5f12d4 = _0x26e87a[_0x53ba2a][0x0];
            if (undefined !== _0x5f12d4) {
              _0x5f12d4.unlocked = true;
            }
          });
          this.UnlockedHypers.forEach(_0x142344 => {
            var _0x3eb470 = _0x26e87a[_0x142344][0x0].hyper;
            if (undefined !== _0x3eb470) {
              _0x3eb470.unlocked = true;
            }
          });
          this.Achievements.forEach(_0x303b6d => {
            var _0xfce6a = _0x3fbaa9[_0x303b6d];
            if (undefined !== _0xfce6a) {
              _0xfce6a.achieved = true;
            }
          });
          for (const _0x2bc187 in this.KillCount) if (undefined !== (_0x5212eb = _0x37a34e[_0x2bc187])) {
            if (undefined !== (_0x5212eb = _0x37a34e[_0x2bc187][0x0])) {
              _0x5212eb.killedAmount = this.KillCount[_0x2bc187];
            }
          } else {
            console.log("cannot find: " + _0x2bc187);
          }
          for (const _0x5d74ef in _0x433cce) if (undefined === (_0x5212eb = this.KillCount[_0x5d74ef])) {
            this.KillCount[_0x5d74ef] = 0x0;
          }
          for (const _0xb4686b in this.PickupCount) if (undefined !== (_0x5212eb = _0x34b109[_0xb4686b])) {
            _0x5212eb.pickedupAmount = this.PickupCount[_0xb4686b];
          }
          for (const _0x2d633c in _0x5b2d7b) if (undefined === (_0x5212eb = this.PickupCount[_0x2d633c])) {
            this.PickupCount[_0x2d633c] = 0x0;
          }
          for (const _0x224997 in this.DestroyedCount) if (undefined !== (_0x5212eb = _0x5984e8[_0x224997])) {
            _0x5212eb.destroyedAmount = this.DestroyedCount[_0x224997];
          }
          for (const _0x2dae4c in _0x4b0b3f) {
            var _0x5212eb;
            if (undefined === (_0x5212eb = this.DestroyedCount[_0x2dae4c])) {
              this.DestroyedCount[_0x2dae4c] = 0x0;
            }
          }
        }
        ["RefundAll"]() {
          return _0x84835e(this, undefined, undefined, function* () {
            this.BoughtPowerups.forEach(_0xa28806 => {
              var _0x3093a5 = _0x5f5caf[_0xa28806][0x0];
              if (undefined !== _0x3093a5) {
                _0x3093a5.level = 0x0;
              }
            });
            this.Coins = this.LifetimeCoins;
            this.BoughtPowerups = [];
            yield this.Save();
            yield this.Load();
          });
        }
      };
      class _0x88e137 extends Phaser.Physics.Arcade.Sprite {
        constructor(_0x837f3c, _0x28c647, _0xeeda70, _0x24f4e1 = "ball", _0x5bb144 = 0x0, _0x53db4c, _0x4917d1 = 0x0) {
          super(_0x837f3c.scene, _0x28c647, _0xeeda70, _0x24f4e1, _0x5bb144);
          this.isDead = false;
          this.owner = null;
          this.penetrating = 0x0;
          this.bounces = 0x0;
          this.isCullable = true;
          this.isTeleportOnCull = false;
          this._speed = 0x1;
          this.objectsHit = [];
          this.pool = _0x837f3c;
          this.weapon = _0x53db4c;
          this.indexInWeapon = _0x4917d1;
        }
        get ["TrueSpeed"]() {
          return this.weapon.PSpeed * _0x34bb1a.ProjectileSpeed * this._speed;
        }
        ['OnTeleportOnCull']() {}
        ["OnRecycle"]() {
          this.isDead = false;
          this.objectsHit = [];
          this.setActive(true);
          this.body.enable = true;
          this.penetrating = this.weapon.penetrating;
          this.bounces = this.weapon.bounces;
        }
        ["HasAlreadyHitObject"](_0x3df290) {
          const _0x216fe5 = this.objectsHit.indexOf(_0x3df290) > -0x1;
          if (!_0x216fe5) {
            this.objectsHit.push(_0x3df290);
            this.OnHasHitAnObject(_0x3df290);
          }
          return _0x216fe5;
        }
        ["OnHasHitAnObject"](_0x520d95 = null) {}
        ["OnHasHitWall"](_0x332dde) {
          this.DeSpawn();
        }
        ["AimForNearestEnemy"]() {
          var _0x484e2b = this.scene.physics.closest(_0x1d0e6c.Core.Player, _0x1d0e6c.Core.Enemies);
          return _0x484e2b ? (this.ApplyInitialVelocity(_0x484e2b), true) : (this.ApplyPlayerFacingVelocity(), false);
        }
        ['AimForRandomEnemy']() {
          var _0x5b7d8d = Phaser.Math.RND.pick(_0x1d0e6c.Core.Enemies);
          return _0x5b7d8d ? (this.ApplyInitialVelocity(_0x5b7d8d), _0x5b7d8d) : (this.ApplyPlayerFacingVelocity(), null);
        }
        ["AimForRandomeEnemyInRect"](_0x8302ef) {
          var _0x3717ac = new Array();
          for (let _0x216c9b = 0x0; _0x216c9b < _0x1d0e6c.Core.Enemies.length && _0x3717ac.length < 0xa; _0x216c9b++) {
            const _0x201470 = _0x1d0e6c.Core.Enemies[_0x216c9b];
            if (_0x8302ef.contains(_0x201470.x, _0x201470.y)) {
              _0x3717ac.push(_0x201470);
            }
          }
          return _0x3717ac.length <= 0x0 ? null : Phaser.Math.RND.pick(_0x3717ac);
        }
        ['AngleFromVelocityRadians'](_0x308cfb) {
          var _0x377217 = Phaser.Math.Vector2.RIGHT;
          return Math.atan2(_0x308cfb.y - _0x377217.y, _0x308cfb.x - _0x377217.x);
        }
        ["AngleFromTargetRadians"](_0x2bc136 = null) {
          if (!_0x2bc136) {
            _0x2bc136 = Phaser.Math.RND.pick(_0x1d0e6c.Core.Enemies);
          }
          var _0x2a69a = _0x1d0e6c.Core.Player.body.position;
          return Math.atan2(_0x2bc136.y - _0x2a69a.y, _0x2bc136.x - _0x2a69a.x);
        }
        ["ApplyInitialVelocity"](_0x34bf48, _0x1f9dd5 = true) {
          let _0x31abb1 = new Phaser.Math.Vector2(0x0, 0x0);
          _0x31abb1.x = _0x34bf48.body.position.x - _0x1d0e6c.Core.Player.x;
          _0x31abb1.y = _0x34bf48.body.position.y - _0x1d0e6c.Core.Player.y;
          _0x31abb1.normalize();
          this.setVelocity(this.TrueSpeed * _0x31abb1.x, this.TrueSpeed * _0x31abb1.y);
          if (_0x1f9dd5) {
            this.setAngle(Phaser.Math.RadToDeg(this.AngleFromVelocityRadians(this.body.velocity)));
          }
        }
        ['ApplyPlayerFacingVelocity'](_0x4070e6 = true) {
          let _0x2508b4 = _0x1d0e6c.Core.Player.lastFacedDirection;
          _0x2508b4.normalize();
          if (0x0 === _0x2508b4.x && 0x0 === _0x2508b4.y) {
            _0x2508b4.x = 0x1;
          }
          this.setVelocity(this.TrueSpeed * _0x2508b4.x, this.TrueSpeed * _0x2508b4.y);
          if (_0x4070e6) {
            this.setAngle(Phaser.Math.RadToDeg(this.AngleFromVelocityRadians(this.body.velocity)));
          }
        }
        ["GetPlayerFacingVelocity"]() {
          let _0x3da742 = _0x1d0e6c.Core.Player.lastFacedDirection;
          _0x3da742.normalize();
          if (0x0 === _0x3da742.x && 0x0 === _0x3da742.y) {
            _0x3da742.x = 0x1;
          }
          return _0x3da742;
        }
        ['DeSpawn']() {
          this.setActive(false);
          this.body.enable = false;
          this.pool.Return(this);
        }
        ["SetTarget"](_0x15a0b7) {
          this.target = _0x15a0b7;
        }
        ['Init'](_0x586ef4 = -0x3e8, _0x1c69ba = -0x3e8) {
          this.setPosition(_0x586ef4, _0x1c69ba);
          this.scene.physics.add.existing(this);
          this.OnRecycle();
        }
        ["OnDeathAnimationComplete"]() {
          this.OnDeathEnd();
        }
        ["die"]() {
          this.isDead = true;
          this.visible = false;
          this.body.enable = false;
        }
        ["OnDeathEnd"]() {
          this.pool.Return(this);
        }
        ["Update"](_0x152fc1 = 0x0) {}
      }
      const _0x5c1f1b = class extends _0x88e137 {
        constructor(_0x29e3e4, _0x289d93, _0x3ef328, _0xbed205, _0x48a4d6) {
          super(_0x29e3e4, _0x289d93, _0x3ef328, "vfx", "ProjectileHoly1.png", _0xbed205, _0x48a4d6);
          this.PfxEmitter = this.scene.add.particles("vfx");
          this.PfxEmitter.createEmitter({
            'frame': ["PfxHoly1.png", "PfxHoly2.png"],
            'speed': {
              'min': 0xf,
              'max': 0x1e
            },
            'quantity': 0x1,
            'lifespan': 0x12c,
            'alpha': {
              'start': 0x1,
              'end': 0x0
            },
            'on': false
          });
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(0x8);
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          this.x += (Math.random() - 0.5) * this.indexInWeapon * 0xa;
          this.y += (Math.random() - 0.5) * this.indexInWeapon * 0xa;
          this.AimForNearestEnemy();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.MagicMissile, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 0.15
          }, 0xc8, 0xc);
        }
        ["OnHasHitAnObject"](_0x4f912a) {
          if (!_0x4f912a.isDead) {
            this.penetrating--;
            if (this.penetrating <= 0x0) {
              this.DeSpawn();
            }
          }
        }
        ['Update']() {
          this.PfxEmitter.emitParticleAt(this.x, this.y);
        }
      };
      const _0x2ebd65 = class extends _0x5c1f1b {};
      const _0x5bb261 = class extends _0x88e137 {
        constructor(_0x49b8ce, _0x3653fd, _0xf45ce6, _0x487d84, _0x5b4843) {
          super(_0x49b8ce, _0x3653fd, _0xf45ce6, "vfx", "slash.png", _0x487d84, _0x5b4843);
          this.previousArea = 0x0;
        }
        ['Init'](_0x1bd964 = -0x3e8, _0x27a51e = -0x3e8) {
          super.Init(_0x1bd964, _0x27a51e);
          this.setScale(0x0);
          this.previousArea = this.weapon.PArea;
          this.tween = this.scene.tweens.add({
            'targets': this,
            'scale': _0x34bb1a.PixelScale * this.weapon.PArea,
            'duration': 0x64,
            'ease': "Linear"
          });
        }
        ['OnRecycle']() {
          var _0xee1c09;
          super.OnRecycle();
          this.alpha = 0x1;
          if (this.tween) {
            if (this.previousArea != this.weapon.PArea) {
              this.tween.stop();
              this.scene.tweens.remove(this.tween);
              this.setScale(0x0);
              this.tween = this.scene.tweens.add({
                'targets': this,
                'scale': _0x34bb1a.PixelScale * this.weapon.PArea,
                'duration': 0x64,
                'ease': "Linear"
              });
            }
            this.tween.restart();
          }
          if (!(null === (_0xee1c09 = this.tween2) || undefined === _0xee1c09)) {
            _0xee1c09.stop();
          }
          this.tween2 = this.scene.tweens.add({
            'targets': this,
            'alpha': 0x0,
            'duration': 0x64,
            'ease': "Linear",
            'delay': 0x64,
            'onComplete': () => {
              this.DeSpawn();
            }
          });
          const _0x519fd7 = _0x1d0e6c.Core.Player.flipX ? this.indexInWeapon % 0x2 != 0x1 : this.indexInWeapon % 0x2 == 0x1;
          this.x += _0x519fd7 ? -0x40 : 0x40;
          this.y -= 0x10;
          this.y -= 0x10 * this.indexInWeapon;
          this.setFlipY(this.indexInWeapon % 0x2 == 0x1);
          this.setFlipX(_0x519fd7);
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Whip, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 1.8,
            'rate': 0x2
          });
        }
      };
      const _0x47fb60 = class extends _0x88e137 {
        constructor(_0x250984, _0x36f013, _0x3ad6a3, _0x3200a0, _0x40e49c) {
          super(_0x250984, _0x36f013, _0x3ad6a3, "items", "Diamond2.png", _0x3200a0, _0x40e49c);
          this.bouncePositions = new Array();
          this.positions = [];
          this.maxPositions = 0x64;
          this.color = 0xff0000;
          this.save_vel_x = 0x0;
          this.save_vel_y = 0x0;
          this.scene.physics.world.on("worldbounds", this.Bounce, this);
          this.trail = this.scene.add.graphics({
            'x': 0x0,
            'y': 0x0,
            'lineStyle': {
              'width': 0x1,
              'color': 0xff0000,
              'alpha': 0x1
            },
            'fillStyle': {
              'color': 0xff0000,
              'alpha': 0x1
            }
          });
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(0x8);
          this._speed = 1.1;
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          this.setCollideWorldBounds(true, 0x1, 0x1);
          this.body.setBoundsRectangle(_0x1d0e6c.Core.Player.WorldBoxCollider);
          this.body.onWorldBounds = true;
          this.trail.x = this.x - _0x1d0e6c.Core.Player.x;
          this.trail.y = this.y - _0x1d0e6c.Core.Player.y;
          this.color = 0xffffff * Math.random();
          this.trail.alpha = 0x1;
          this.alpha = 0x1;
          this.clearPositions();
          this.ExpireTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.weapon.PDuration,
            'loop': false,
            'callback': () => {
              _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
              this.FadeOut();
            }
          });
          this.ExpireTimer.name = "DI Expire";
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.MagicMissile, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 0.15
          }, 0xc8, 0xa);
        }
        ["OnHasHitWall"](_0x2e1a93) {
          this.save_vel_x *= _0x2e1a93.faceRight || _0x2e1a93.faceLeft ? -0x1 : 0x1;
          this.save_vel_y *= _0x2e1a93.faceTop || _0x2e1a93.faceBottom ? -0x1 : 0x1;
          this.setVelocity(this.save_vel_x, this.save_vel_y);
          this.objectsHit = [];
        }
        ['SetTarget'](_0x33be58) {
          super.SetTarget(_0x33be58);
          var _0x5e662e = this.AngleFromTargetRadians(this.target);
          var _0x1dd52f = [0x0, 0xa, -0xa, 0x14, -0x14, 0x1e, -0x1e, 0x28, -0x28];
          this.scene.physics.velocityFromRotation(_0x5e662e + Phaser.Math.DegToRad(_0x1dd52f[this.indexInWeapon % _0x1dd52f.length]), this.TrueSpeed, this.body.velocity);
          var _0x547a08 = Phaser.Math.Vector2.RIGHT;
          this.setAngle(Phaser.Math.RadToDeg(Math.atan2(this.body.velocity.y - _0x547a08.y, this.body.velocity.x - _0x547a08.x)));
        }
        ["Bounce"](_0x5bd06b) {
          if (this.body === _0x5bd06b) {
            this.objectsHit = [];
          }
        }
        ['FadeOut']() {
          this.scene.tweens.add({
            'targets': [this.trail, this],
            'alpha': 0x0,
            'duration': 0x64,
            'ease': 'Linear',
            'onComplete': () => {
              this.DeSpawn();
            }
          });
        }
        get ['customAngle']() {
          return Phaser.Math.RadToDeg(this.AngleFromVelocityRadians(this.body.velocity));
        }
        ["Update"]() {
          this.trail.setDepth(this.y - _0x1d0e6c.Core.Player.y + 0.5 * this.scene.renderer.height);
          this.trailUpdate();
          this.save_vel_x = 0x0 == this.body.velocity.x ? this.save_vel_x : this.body.velocity.x;
          this.save_vel_y = 0x0 == this.body.velocity.y ? this.save_vel_y : this.body.velocity.y;
        }
        ["AngleFromVelocityRadians"](_0x4cdd11) {
          var _0xc5c930 = Phaser.Math.Vector2.RIGHT;
          return Math.atan2(_0x4cdd11.y - _0xc5c930.y, _0x4cdd11.x - _0xc5c930.x);
        }
        ["clearPositions"]() {
          this.positions = [];
        }
        ["trailUpdate"]() {
          const _0x537dad = 0x2 * _0x34bb1a.PixelScale * this.weapon.PArea;
          if (this.active) {
            this.positions.unshift([this.x, this.y]);
            if (this.positions.length > this.maxPositions) {
              this.positions.pop();
            }
          } else {
            if (this.positions.length > this.maxPositions - 0xa) {
              for (var _0x55c340 = 0x0; _0x55c340 < this.positions.length; _0x55c340++) {
                if (_0x55c340 > this.maxPositions - 0xa) {
                  this.positions.splice(_0x55c340, 0x1);
                }
              }
            }
            if (this.positions.length > 0x1) {
              this.positions.unshift([this.x, this.y]);
              this.positions.pop();
            } else {
              this.clearPositions();
            }
          }
          this.trail.clear();
          this.trail.beginPath();
          for (var _0x55c340 of Array(this.positions.length).keys()) if (0x0 != _0x55c340) {
            this.trail.lineStyle(_0x537dad, this.color, 0x1 / (_0x55c340 / 0x14));
            this.trail.moveTo(this.positions[_0x55c340 - 0x1][0x0], this.positions[_0x55c340 - 0x1][0x1]);
            this.trail.lineTo(this.positions[_0x55c340][0x0], this.positions[_0x55c340][0x1]);
          }
          this.trail.closePath();
          this.trail.strokePath();
          this.trail.beginPath();
          for (let _0x1606a5 = 0x0; _0x1606a5 < 0x32; _0x1606a5++) {
            if (0x0 != _0x1606a5 && this.positions[_0x1606a5] && this.positions[_0x1606a5 - 0x1]) {
              this.trail.lineStyle(0.5 * _0x537dad, 0xffffff, 0.8 / (_0x1606a5 / 0x14));
              this.trail.moveTo(this.positions[_0x1606a5 - 0x1][0x0], this.positions[_0x1606a5 - 0x1][0x1]);
              this.trail.lineTo(this.positions[_0x1606a5][0x0], this.positions[_0x1606a5][0x1]);
            }
          }
          this.trail.closePath();
          this.trail.strokePath();
          this.trail.blendMode = _0x2d874d.BlendModes.ADD;
        }
      };
      const _0x57035a = class extends _0x88e137 {
        constructor(_0x1d43ce, _0x341d62, _0x4627e2, _0x589096, _0x8abcca) {
          super(_0x1d43ce, _0x341d62, _0x4627e2, "items", "HolyWater.png", _0x589096, _0x8abcca);
          this.radius = 0x10;
          this.exploRadius = 0x8;
          this.isBroken = false;
          this._currentDirection = new Phaser.Math.Vector2(0x0, 0x0);
          this._speed = 0x2;
          this.explosionCircle = new Phaser.Geom.Circle(0x0, 0x0, this.exploRadius);
          this.GroundFx = this.scene.add.circle(0x0, 0x0, this.radius, 0xff).setOrigin(0.5).setAlpha(0.2).setVisible(false).setBlendMode(_0x2d874d.BlendModes.ADD);
          this.PfxEmitterManager = this.scene.add.particles('vfx');
          this.PfxEmitter1 = this.PfxEmitterManager.createEmitter({
            'frame': ['ProjectileFlameHoly.png', "ProjectileFlameBlue.png"],
            'speed': {
              'min': 0x1,
              'max': 0x1
            },
            'quantity': 0x1,
            'rotate': {
              'min': 0x5a,
              'max': 0x5a
            },
            'lifespan': 0x258,
            'alpha': {
              'start': 0x1,
              'end': 0x0
            },
            'scale': {
              'start': _0x34bb1a.PixelScale / 0x4,
              'end': _0x34bb1a.PixelScale
            },
            'emitZone': {
              'type': "random",
              'source': this.explosionCircle
            },
            'on': false
          });
          this.PfxEmitter2 = this.PfxEmitterManager.createEmitter({
            'frame': ["ProjectileFlameHoly.png", 'ProjectileFlameBlue.png'],
            'speed': {
              'min': 0x1,
              'max': 0x1
            },
            'quantity': 0x1,
            'rotate': {
              'min': 0x5a,
              'max': 0x5a
            },
            'lifespan': 0x258,
            'alpha': {
              'start': 0.2,
              'end': 0x0
            },
            'scale': {
              'start': _0x34bb1a.PixelScale / 0x4,
              'end': _0x34bb1a.PixelScale / 0x2
            },
            'blendMode': _0x2d874d.BlendModes.ADD,
            'emitZone': {
              'type': "random",
              'source': this.explosionCircle
            },
            'on': false
          });
          this.PfxEmitterExplosionManager = this.scene.add.particles("vfx");
          this.PfxEmitterExplosionManager.createEmitter({
            'frame': ["HitCloud2.png"],
            'quantity': 0x1,
            'rotate': {
              'min': 0x0,
              'max': 0x168
            },
            'lifespan': 0x96,
            'alpha': {
              'start': 0x1,
              'end': 0.5
            },
            'scale': {
              'start': _0x34bb1a.PixelScale / 0x4,
              'end': 0x2 * _0x34bb1a.PixelScale
            },
            'on': false
          });
          this.PfxEmitterExplosionManager.createEmitter({
            'frame': ["HitCloud1.png"],
            'quantity': 0x3,
            'rotate': {
              'min': 0x0,
              'max': 0x168
            },
            'lifespan': 0x96,
            'alpha': {
              'start': 0x1,
              'end': 0.5
            },
            'scale': {
              'start': _0x34bb1a.PixelScale / 0x4,
              'end': _0x34bb1a.PixelScale
            },
            'on': false
          });
          this.AngleTween = this.scene.tweens.add({
            'targets': this,
            'angle': 0x168,
            'duration': 0x258,
            'ease': "Linear",
            'repeat': -0x1
          });
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this._speed = 0x2;
          this.body.setCircle(this.radius, -0.5 * this.radius, -0.5 * this.radius);
          this.setScale(_0x34bb1a.PixelScale);
          this.setVisible(true);
          this.isBroken = false;
          this.body.enable = false;
          this.isCullable = false;
          _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          this.explosionCircle = new Phaser.Geom.Circle(0x0, 0x0, this.exploRadius * this.weapon.PArea * 0x3);
          this.PfxEmitter1.setEmitZone({
            'type': "random",
            'source': this.explosionCircle
          });
          this.PfxEmitter1.setQuantity(0x1 + Math.floor(this.weapon.level / 0x3));
          this.PfxEmitter2.setEmitZone({
            'type': "random",
            'source': this.explosionCircle
          });
          this.PfxEmitter2.setQuantity(0x1 + Math.floor(this.weapon.level / 0x3));
          var _0x5cc57f = new Phaser.Math.Vector2(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y);
          this.x = _0x5cc57f.x + (Math.random() - 0.5) * this.scene.renderer.width * 0.5;
          this.y = _0x5cc57f.y - 0.6 * this.scene.renderer.height;
          const _0x514f12 = this.weapon;
          const _0x2ac381 = _0x514f12.GetAngle();
          const _0x59c89e = _0x514f12.GetRadius();
          _0x5cc57f.x += Math.cos(_0x2ac381) * _0x59c89e;
          _0x5cc57f.y += Math.sin(_0x2ac381) * _0x59c89e;
          if (this.weapon.PAmount < 0x4 && 0x0 == this.indexInWeapon) {
            var _0x2759fb = this.scene.physics.closest(_0x1d0e6c.Core.Player, _0x1d0e6c.Core.Enemies);
            if (_0x2759fb) {
              _0x5cc57f.x = _0x2759fb.x;
              _0x5cc57f.y = _0x2759fb.y;
            }
          }
          this.setDepth(this.y - _0x1d0e6c.Core.Player.y + this.scene.renderer.height);
          if (this.PositionTween) {
            this.scene.tweens.remove(this.PositionTween);
          }
          this.PositionTween = this.scene.tweens.add({
            'targets': this,
            'x': _0x5cc57f.x,
            'y': _0x5cc57f.y,
            'duration': 0x2ee,
            'ease': "Linear",
            'onComplete': () => {
              this.Break();
            }
          });
        }
        ["Break"]() {
          if (!this.isBroken) {
            this.isBroken = true;
            this.setVisible(false);
            this.setVelocity(0x0, 0x0);
            this.objectsHit = [];
            this.body.enable = true;
            this.GroundFx.setPosition(this.x, this.y).setVisible(true).setScale(_0x34bb1a.PixelScale * this.weapon.PArea).setOrigin(0.5);
            this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
            this.HitboxTimer = _0x1d0e6c.Core.scene.time.addEvent({
              'delay': this.weapon.hitBoxDelay,
              'loop': true,
              'callback': () => {
                this.objectsHit = [];
              }
            });
            this.HitboxTimer.name = "HW Hitbox";
            this.ExpireTimer = _0x1d0e6c.Core.scene.time.addEvent({
              'delay': this.weapon.PDuration,
              'loop': false,
              'callback': () => {
                this.GroundFx.setVisible(false);
                _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
                _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
                this.DeSpawn();
              }
            });
            this.ExpireTimer.name = "HW Expire";
            this.PfxEmitterExplosionManager.emitParticleAt(this.x, this.y);
            this.PfxEmitterManager.setDepth(this.y - _0x1d0e6c.Core.Player.y - 0.5 * this.scene.renderer.height);
            this.GroundFx.setDepth(this.y - _0x1d0e6c.Core.Player.y - 0.5 * this.scene.renderer.height);
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.Holywater, {
              'detune': -0xc8 - -0x32 * this.indexInWeapon,
              'volume': 0.35,
              'rate': 0x2
            }, 0xc8, 0xc);
          }
        }
        ["Update"]() {
          if (this.isBroken) {
            this.PfxEmitterManager.emitParticleAt(this.x, this.y);
          }
        }
        ["DeSpawn"]() {
          this.isCullable = true;
          _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          super.DeSpawn();
        }
      };
      const _0x163689 = class extends _0x88e137 {
        constructor(_0x5adfd3, _0x33ea66, _0x526761, _0x4902f9, _0x10506a) {
          super(_0x5adfd3, _0x33ea66, _0x526761, 'vfx', 'ProjectileAxe1.png', _0x4902f9, _0x10506a);
          this.posHistory = new Array();
          this.maxHistory = 0x1;
          this.historyIndex = 0x0;
          this.initialVelocity = new Phaser.Math.Vector2();
          this.moveAngle = 0x0;
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          this.AngleTween = this.scene.tweens.add({
            'targets': this,
            'angle': 0x168,
            'duration': 0x3e8,
            'ease': "Linear",
            'repeat': -0x1
          });
          this.MovementTween = this.scene.tweens.add({
            'targets': this,
            'moveAngle': Math.PI,
            'duration': 0x3e8,
            'ease': 'Linear'
          });
          this.ghosts = new Array();
          for (let _0x37a01d = 0x0; _0x37a01d < this.maxHistory; _0x37a01d++) {
            this.posHistory.push(new Phaser.Math.Vector2(_0x33ea66, _0x526761));
            var _0x151634 = this.scene.add.image(0x0, 0x0, this.texture.key, this.frame.name).setScale(_0x34bb1a.PixelScale).setVisible(false).setTint(0xff).setAlpha(0.75 - 0.25 * _0x37a01d);
            this.ghosts.push(_0x151634);
          }
        }
        ["OnRecycle"]() {
          var _0x243fc8;
          super.OnRecycle();
          this.body.setCircle(0xc);
          this._speed = 0x2;
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          const _0x5cfb01 = _0x1d0e6c.Core.Player.lastFacedDirection.dot(Phaser.Math.Vector2.RIGHT) < 0x0 ? -0x1 : 0x1;
          var _0x3c7bf7 = 0x2d * _0x5cfb01 / this.weapon.PAmount * this.indexInWeapon - 0x5a;
          this.scene.physics.velocityFromRotation(Phaser.Math.DegToRad(_0x3c7bf7), this.TrueSpeed, this.body.velocity);
          this.initialVelocity.x = this.body.velocity.x;
          this.initialVelocity.y = Math.max(-0x258, this.body.velocity.y * this.weapon.PArea);
          for (let _0x5bab77 = 0x0; _0x5bab77 < this.posHistory.length; _0x5bab77++) {
            this.posHistory[_0x5bab77].x = this.x;
            this.posHistory[_0x5bab77].y = this.y;
          }
          this.moveAngle = Phaser.Math.DegToRad(_0x3c7bf7);
          this.MovementTween = this.scene.tweens.add({
            'targets': this,
            'moveAngle': Phaser.Math.DegToRad(_0x3c7bf7 + 0xb4 * _0x5cfb01),
            'duration': 0x5dc,
            'ease': "Linear"
          });
          if (!(null === (_0x243fc8 = this.ScaleTween) || undefined === _0x243fc8)) {
            _0x243fc8.stop();
          }
          this.ScaleTween = this.scene.tweens.add({
            'targets': this,
            'scale': 0x0,
            'duration': 0x1f4,
            'delay': this.weapon.PDuration * this.weapon.PArea,
            'ease': "Linear",
            'onComplete': () => {
              this.DeSpawn();
            }
          });
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Shot, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 0.5
          }, 0xc8, 0xa);
        }
        ['DeSpawn']() {
          var _0x3afb9b;
          var _0x9b901e;
          super.DeSpawn();
          if (!(null === (_0x3afb9b = this.MovementTween) || undefined === _0x3afb9b)) {
            _0x3afb9b.stop();
          }
          if (!(null === (_0x9b901e = this.ScaleTween) || undefined === _0x9b901e)) {
            _0x9b901e.stop();
          }
          for (let _0x228952 = 0x0; _0x228952 < this.ghosts.length; _0x228952++) {
            this.ghosts[_0x228952].setVisible(false);
          }
        }
        ["OnHasHitAnObject"](_0x2c12ed) {
          if (!_0x2c12ed.isDead) {
            this.penetrating--;
            if (this.penetrating <= 0x0) {
              this.DeSpawn();
            }
          }
        }
        ["getHistoryIndex"](_0x3663c5) {
          return this.historyIndex + _0x3663c5 >= this.maxHistory ? this.historyIndex + _0x3663c5 - this.maxHistory : this.historyIndex + _0x3663c5;
        }
        ["Update"]() {
          this.initialVelocity.y += 0xa;
          if (this.historyIndex < this.maxHistory - 0x1) {
            this.historyIndex++;
          } else {
            this.historyIndex = 0x0;
          }
          for (let _0x56df5e = 0x0; _0x56df5e < this.ghosts.length; _0x56df5e++) {
            var _0x17ec12 = this.posHistory[this.getHistoryIndex(_0x56df5e)];
            var _0x4df5ac = this.ghosts[_0x56df5e];
            _0x4df5ac.setAngle(this.angle);
            _0x4df5ac.setPosition(_0x17ec12.x, _0x17ec12.y);
            _0x4df5ac.setScale(this.scale);
            _0x4df5ac.setVisible(true);
          }
          this.setVelocity(this.initialVelocity.x, this.initialVelocity.y);
          this.posHistory[this.historyIndex].x = this.x;
          this.posHistory[this.historyIndex].y = this.y;
        }
      };
      const _0x850792 = class extends _0x88e137 {
        constructor(_0x5403e6, _0x28f869, _0xf3b000, _0x4d41c3, _0x267f01) {
          super(_0x5403e6, _0x28f869, _0xf3b000, "vfx", "ProjectileFireball2.png", _0x4d41c3, _0x267f01);
          this.setScale(0x0);
          this._speed = 0.8;
          this.PfxEmitter = this.scene.add.particles("vfx");
          this.PfxEmitter.createEmitter({
            'frame': ["HitBoom1.png", "HitBoom2.png"],
            'rotate': {
              'min': 0x0,
              'max': 0x168
            },
            'quantity': 0x1,
            'lifespan': 0x12c,
            'scale': {
              'start': 0.5,
              'end': 0x0
            },
            'on': false
          });
          this.ScaleTween = this.scene.tweens.add({
            'targets': this,
            'duration': 0x64,
            'ease': 'Linear',
            'scale': 0.5 * _0x34bb1a.PixelScale * this.weapon.PArea
          });
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(0xc);
          this.setScale(0x0);
          this._speed = 0.8;
          this.y -= 0x10;
          if (this.ScaleTween) {
            this.ScaleTween.stop();
            this.scene.tweens.remove(this.ScaleTween);
            this.setScale(0x0);
            this.ScaleTween = this.scene.tweens.add({
              'targets': this,
              'duration': 0xc8,
              'ease': 'Linear',
              'scale': _0x34bb1a.PixelScale * this.weapon.PArea
            });
            this.ScaleTween.restart();
          }
        }
        ["SetTarget"](_0x3e92d7) {
          super.SetTarget(_0x3e92d7);
          var _0x55b5f4 = this.AngleFromTargetRadians(this.target);
          var _0x214186 = [0x0, 0x5, -0x5, 0xa, -0xa, 0xf, -0xf, 0x14, -0x14, 0x19, -0x19, 0x1e, -0x1e, 0x23, -0x23, 0x28, -0x28, 0x2d, -0x2d];
          this.scene.physics.velocityFromRotation(_0x55b5f4 + Phaser.Math.DegToRad(_0x214186[this.indexInWeapon % _0x214186.length]), this.TrueSpeed, this.body.velocity);
          var _0xe8c884 = Phaser.Math.Vector2.RIGHT;
          this.setAngle(Phaser.Math.RadToDeg(Math.atan2(this.body.velocity.y - _0xe8c884.y, this.body.velocity.x - _0xe8c884.x)));
        }
        ['OnHasHitAnObject'](_0x3cfd92) {
          if (!_0x3cfd92.isDead) {
            this.penetrating--;
            if (this.penetrating <= 0x0) {
              this.DeSpawn();
            }
          }
        }
        ["Update"]() {
          this.PfxEmitter.emitParticleAt(this.x, this.y);
        }
      };
      const _0x102714 = class extends _0x88e137 {
        constructor(_0x2074a8, _0x6030f6, _0x2352e8, _0x2c3edb, _0x293e02) {
          super(_0x2074a8, _0x6030f6, _0x2352e8, "vfx", 'ProjectileKnife3.png', _0x2c3edb, _0x293e02);
          this.posHistory = new Array();
          this.maxHistory = 0x1;
          this.historyIndex = 0x0;
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          this.setAngle(-0x5a);
          this._speed = 0x2;
          this.ghosts = new Array();
          for (let _0x15c845 = 0x0; _0x15c845 < this.maxHistory; _0x15c845++) {
            this.posHistory.push(new Phaser.Math.Vector2(_0x6030f6, _0x2352e8));
            var _0x29954c = this.scene.add.image(0x0, 0x0, this.texture.key, this.frame.name).setScale(1.5 * _0x34bb1a.PixelScale, 0.75 * _0x34bb1a.PixelScale).setVisible(false).setTint(0xff).setAlpha(0.5 - 0.25 * _0x15c845);
            this.ghosts.push(_0x29954c);
          }
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(0x8);
          this._speed = 0x2;
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          for (let _0x43b7dc = 0x0; _0x43b7dc < this.ghosts.length; _0x43b7dc++) {
            var _0x1922c6 = this.ghosts[_0x43b7dc];
            _0x1922c6.setScale(0x2 * this.scale, 0.75 * this.scale);
            _0x1922c6.setVisible(true);
            _0x1922c6.setAngle(this.angle);
            _0x1922c6.setPosition(this.x, this.y);
          }
          for (let _0xadc963 = 0x0; _0xadc963 < this.posHistory.length; _0xadc963++) {
            this.posHistory[_0xadc963].x = this.x;
            this.posHistory[_0xadc963].y = this.y;
          }
          this.y -= 0xc;
          this.x += (Math.random() - 0.5) * (0x0 == this.indexInWeapon ? 0x0 : 0x28) * this.weapon.PArea;
          this.y += (Math.random() - 0.5) * (0x0 == this.indexInWeapon ? 0x0 : 0x28) * this.weapon.PArea;
          this.ApplyPlayerFacingVelocity();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Shot, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 0.5
          }, 0xc8, 0xa);
        }
        ["DeSpawn"]() {
          for (let _0x5651bb = 0x0; _0x5651bb < this.ghosts.length; _0x5651bb++) {
            this.ghosts[_0x5651bb].setVisible(false);
          }
          super.DeSpawn();
        }
        ["OnHasHitAnObject"](_0x4834c6) {
          if (!_0x4834c6.isDead) {
            this.penetrating--;
            if (this.penetrating <= 0x0) {
              this.DeSpawn();
            }
          }
        }
        ["getHistoryIndex"](_0x5a4577) {
          return this.historyIndex + _0x5a4577 >= this.maxHistory ? this.historyIndex + _0x5a4577 - this.maxHistory : this.historyIndex + _0x5a4577;
        }
        ['Update']() {
          if (this.historyIndex < this.maxHistory - 0x1) {
            this.historyIndex++;
          } else {
            this.historyIndex = 0x0;
          }
          for (let _0x4810e0 = 0x0; _0x4810e0 < this.ghosts.length; _0x4810e0++) {
            var _0x524dbf = this.posHistory[this.getHistoryIndex(_0x4810e0)];
            var _0x515bc9 = this.ghosts[_0x4810e0];
            _0x515bc9.setAngle(this.angle);
            _0x515bc9.setPosition(_0x524dbf.x, _0x524dbf.y);
          }
          this.posHistory[this.historyIndex].x = this.x;
          this.posHistory[this.historyIndex].y = this.y;
        }
      };
      const _0x105e65 = class extends _0x88e137 {
        constructor(_0x43493a, _0x5539ca, _0x55002c, _0x28375b, _0x6d8ded) {
          super(_0x43493a, _0x5539ca, _0x55002c, "vfx", "HolyBook.png", _0x28375b, _0x6d8ded);
          this.deltaTime = 0x0;
          this.radius = 0x32;
          this.radiusTimeX = 0x1;
          this.setScale(_0x34bb1a.PixelScale * (0x1 + 0.1 * this.weapon.PArea));
          var _0x1bdd66 = this.scene.add.particles("vfx");
          this.PfxEmitter = _0x1bdd66.createEmitter({
            'frame': ["Page.png"],
            'speed': 0x32,
            'quantity': 0x1,
            'lifespan': 0x12c,
            'alpha': {
              'start': 0.7,
              'end': 0x0
            },
            'on': true,
            'follow': this,
            'frequency': 0xc8
          });
        }
        ['OnRecycle']() {
          var _0x4d1c6b;
          super.OnRecycle();
          this.body.setCircle(0x8);
          this.setScale(0x0);
          if (!(null === (_0x4d1c6b = this.scaleTween) || undefined === _0x4d1c6b)) {
            _0x4d1c6b.stop();
          }
          this.scaleTween = this.scene.tweens.add({
            'targets': this,
            'scale': _0x34bb1a.PixelScale * (0x1 + 0.2 * this.weapon.PArea),
            'duration': 0x1f4,
            'onComplete': () => this.PfxEmitter.start()
          });
          this.deltaTime = 0x2 * Math.PI / this.weapon.PAmount * this.indexInWeapon;
          _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          this.HitboxTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.weapon.hitBoxDelay,
            'loop': true,
            'callback': () => {
              this.objectsHit = [];
            }
          });
          this.HitboxTimer.name = "HB Hitbox";
          this.ExpireTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.weapon.PDuration,
            'loop': false,
            'callback': () => {
              var _0x409799;
              _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
              _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
              this.PfxEmitter.stop();
              if (!(null === (_0x409799 = this.scaleTween) || undefined === _0x409799)) {
                _0x409799.stop();
              }
              this.scaleTween = this.scene.tweens.add({
                'targets': this,
                'scale': 0x0,
                'duration': 0x1f4,
                'onComplete': () => this.DeSpawn()
              });
            }
          });
          this.ExpireTimer.name = "HB Expire";
        }
        ["DeSpawn"]() {
          var _0x55c2a2;
          var _0x19b995;
          super.DeSpawn();
          if (!(null === (_0x55c2a2 = this.scaleTween) || undefined === _0x55c2a2)) {
            _0x55c2a2.stop();
          }
          _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          if (!(null === (_0x19b995 = this.PfxEmitter) || undefined === _0x19b995)) {
            _0x19b995.stop();
          }
        }
        ["Update"]() {
          this.deltaTime += 0.035 * this.weapon.PSpeed;
          this.copyPosition(_0x1d0e6c.Core.Player);
          this.x += Math.cos(this.deltaTime) * this.weapon.PArea * this.radius;
          this.y += Math.sin(this.deltaTime) * this.weapon.PArea * this.radius;
        }
      };
      const _0x235940 = class extends _0x88e137 {
        constructor(_0x4818e6, _0x1c0300, _0x4c21c5, _0x1cff2e, _0x245934) {
          super(_0x4818e6, _0x1c0300, _0x4c21c5, "vfx", "Page2.png", _0x1cff2e, _0x245934);
          this.deltaTime = 0x0;
          this.radius = 0x32;
          this.radiusTimeX = 0x1;
          this.setScale(_0x34bb1a.PixelScale * (0x1 + 0.1 * this.weapon.PArea));
          let _0x4ab425 = new Array();
          _0x4ab425.push({
            'key': "vfx",
            'frame': "g.png"
          });
          _0x4ab425.push({
            'key': "vfx",
            'frame': "o.png"
          });
          _0x4ab425.push({
            'key': 'vfx',
            'frame': "r.png"
          });
          _0x4ab425.push({
            'key': "vfx",
            'frame': "g.png"
          });
          _0x4ab425.push({
            'key': "vfx",
            'frame': "o.png"
          });
          _0x4ab425.push({
            'key': "vfx",
            'frame': "n.png"
          });
          _0x4ab425.push({
            'key': "vfx",
            'frame': "z.png"
          });
          _0x4ab425.push({
            'key': "vfx",
            'frame': "o.png"
          });
          _0x4ab425.push({
            'key': 'vfx',
            'frame': "l.png"
          });
          _0x4ab425.push({
            'key': "vfx",
            'frame': "a.png"
          });
          this.anims.create({
            'key': "idle",
            'frames': _0x4ab425,
            'frameRate': 0x4,
            'repeat': -0x1
          });
          var _0x2b7793 = this.scene.add.particles("vfx");
          this.PfxEmitter = _0x2b7793.createEmitter({
            'frame': ["Page2.png"],
            'speed': 0x32,
            'quantity': 0x2,
            'lifespan': 0x12c,
            'alpha': {
              'start': 0x1,
              'end': 0x0
            },
            'on': true,
            'follow': this,
            'frequency': 0x64
          });
        }
        ["OnRecycle"]() {
          var _0x4fc93d;
          super.OnRecycle();
          this.anims.play("idle");
          this.body.setCircle(0x8);
          this.setScale(0x0);
          if (!(null === (_0x4fc93d = this.scaleTween) || undefined === _0x4fc93d)) {
            _0x4fc93d.stop();
          }
          this.scaleTween = this.scene.tweens.add({
            'targets': this,
            'scale': _0x34bb1a.PixelScale * (0x1 + 0.2 * this.weapon.PArea),
            'duration': 0x1f4,
            'onComplete': () => this.PfxEmitter.start()
          });
          this.deltaTime = 0x2 * Math.PI / this.weapon.PAmount * this.indexInWeapon;
          _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          this.HitboxTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.weapon.hitBoxDelay,
            'loop': true,
            'callback': () => {
              this.objectsHit = [];
            }
          });
          this.HitboxTimer.name = "HB Hitbox";
          this.ExpireTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.weapon.PDuration,
            'loop': false,
            'callback': () => {
              var _0x5b2089;
              _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
              _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
              this.PfxEmitter.stop();
              if (!(null === (_0x5b2089 = this.scaleTween) || undefined === _0x5b2089)) {
                _0x5b2089.stop();
              }
              this.scaleTween = this.scene.tweens.add({
                'targets': this,
                'scale': 0x0,
                'duration': 0x1f4,
                'onComplete': () => this.DeSpawn()
              });
            }
          });
          this.ExpireTimer.name = "HB Expire";
        }
        ["DeSpawn"]() {
          var _0x1c983d;
          super.DeSpawn();
          if (!(null === (_0x1c983d = this.scaleTween) || undefined === _0x1c983d)) {
            _0x1c983d.stop();
          }
          _0x1d0e6c.Core.scene.time.removeEvent(this.HitboxTimer);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
        }
        ["Update"]() {
          this.deltaTime += 0.035 * this.weapon.PSpeed;
          this.copyPosition(_0x1d0e6c.Core.Player);
          this.x += Math.cos(this.deltaTime) * this.weapon.PArea * this.radius;
          this.y += Math.sin(this.deltaTime) * this.weapon.PArea * this.radius;
        }
      };
      const _0x5887a6 = class extends _0x88e137 {
        constructor(_0x4c543c, _0x591b5e, _0x563b4c, _0x20d66b, _0x1564f2) {
          super(_0x4c543c, _0x591b5e, _0x563b4c, "vfx", "ProjectileCross2.png", _0x20d66b, _0x1564f2);
          this.posHistory = new Array();
          this.maxHistory = 0x3;
          this.historyIndex = 0x0;
          this.accel = 0x1;
          this.velocity = new Phaser.Math.Vector2(0x0, 0x0);
          this.AngleTween = this.scene.tweens.add({
            'targets': this,
            'angle': 0x168,
            'duration': 0x1f4,
            'ease': 'Linear',
            'repeat': -0x1
          });
          this.AccelTween = this.scene.tweens.add({
            'targets': this,
            'accel': -0x2,
            'duration': 0x3e8,
            'ease': "Linear"
          });
          this.ghosts = new Array();
          for (let _0x2c9992 = 0x0; _0x2c9992 < this.maxHistory; _0x2c9992++) {
            this.posHistory.push(new Phaser.Math.Vector2(_0x591b5e, _0x563b4c));
            var _0x38b75a = this.scene.add.image(0x0, 0x0, this.texture.key, this.frame.name).setScale(_0x34bb1a.PixelScale).setVisible(false).setTint(0xffff66).setAlpha(0.75 - 0.15 * _0x2c9992);
            this.ghosts.push(_0x38b75a);
          }
          this.ghosts.reverse();
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(0xc);
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          this.accel = 1.5 + 0.1 * this.indexInWeapon;
          this.AccelTween.restart();
          for (let _0x2cf5bc = 0x0; _0x2cf5bc < this.posHistory.length; _0x2cf5bc++) {
            this.posHistory[_0x2cf5bc].x = this.x;
            this.posHistory[_0x2cf5bc].y = this.y;
          }
          this.x += (Math.random() - 0.5) * this.indexInWeapon * 0x14 * this.weapon.PArea;
          this.y += (Math.random() - 0.5) * this.indexInWeapon * 0x14 * this.weapon.PArea;
          this.AimForNearestEnemy();
          this.velocity.copy(this.body.velocity);
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Shot, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 0.5
          }, 0xc8, 0xa);
          this.setDepth(this.y - _0x1d0e6c.Core.Player.y + 0x2 * this.scene.renderer.height);
        }
        ["DeSpawn"]() {
          super.DeSpawn();
          for (let _0x32c0ba = 0x0; _0x32c0ba < this.ghosts.length; _0x32c0ba++) {
            this.ghosts[_0x32c0ba].setVisible(false);
          }
        }
        ['getHistoryIndex'](_0x110167) {
          return this.historyIndex + _0x110167 >= this.maxHistory ? this.historyIndex + _0x110167 - this.maxHistory : this.historyIndex + _0x110167;
        }
        ["Update"]() {
          if (this.historyIndex < this.maxHistory - 0x1) {
            this.historyIndex++;
          } else {
            this.historyIndex = 0x0;
          }
          for (let _0x3766c7 = 0x0; _0x3766c7 < this.ghosts.length; _0x3766c7++) {
            var _0x470855 = this.posHistory[this.getHistoryIndex(_0x3766c7)];
            var _0x393646 = this.ghosts[_0x3766c7];
            _0x393646.setAngle(this.angle);
            _0x393646.setPosition(_0x470855.x, _0x470855.y);
            _0x393646.setScale(this.scale);
            _0x393646.setVisible(true);
          }
          this.posHistory[this.historyIndex].x = this.x;
          this.posHistory[this.historyIndex].y = this.y;
          this.body.velocity.x = this.velocity.x * this.accel;
          this.body.velocity.y = this.velocity.y * this.accel;
        }
      };
      const _0x4e90aa = class extends _0x88e137 {
        constructor(_0x3effb1, _0xcb6c18, _0x2cc368, _0x45b1be, _0x19b9e5) {
          super(_0x3effb1, _0xcb6c18, _0x2cc368, 'vfx', "Rings3.png", _0x45b1be, _0x19b9e5);
          this.radius = 0x10;
          this.copyPosition(_0x1d0e6c.Core.Player);
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(this.radius);
          this.setScale(0x2 * _0x34bb1a.PixelScale * this.weapon.PArea);
          this.setVisible(false);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          this.ExpireTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.weapon.PInterval,
            'loop': false,
            'callback': () => {
              _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
              this.DeSpawn();
            }
          });
          this.ExpireTimer.name = "G Expire";
        }
        ["Update"]() {
          this.copyPosition(_0x1d0e6c.Core.Player);
        }
        ["Approach"](_0x414566, _0x26d223, _0x5b73a2) {
          return _0x414566 < _0x26d223 ? Math.min(_0x414566 + _0x5b73a2, _0x26d223) : Math.max(_0x414566 - _0x5b73a2, _0x26d223);
        }
      };
      const _0x5d6d84 = class extends _0x88e137 {
        constructor(_0x19c365, _0x3a98c4, _0x4e62c6, _0x30c31b, _0x15f352) {
          super(_0x19c365, _0x3a98c4, _0x4e62c6, "vfx", 'ProjectileBone2.png', _0x30c31b, _0x15f352);
          this.bouncePositions = new Array();
          this.save_vel_x = 0x0;
          this.save_vel_y = 0x0;
          this.scene.physics.world.on("worldbounds", this.Bounce, this);
          this.AngleTween = this.scene.tweens.add({
            'targets': this,
            'angle': 0x168,
            'duration': 0x3e8,
            'ease': 'Linear',
            'repeat': -0x1
          });
        }
        ["OnRecycle"]() {
          var _0x57abb5;
          super.OnRecycle();
          this.body.setCircle(0x8);
          this.setScale(0.5 * _0x34bb1a.PixelScale * this.weapon.PArea);
          this.setBounce(0x1, 0x1);
          this.isCullable = false;
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          this.setCollideWorldBounds(true, 0x1, 0x1);
          this.body.setBoundsRectangle(_0x1d0e6c.Core.Player.WorldBoxCollider);
          this.body.onWorldBounds = true;
          this.AimForRandomEnemy();
          this.setAngle(0x168 * Math.random());
          if (!(null === (_0x57abb5 = this.ScaleTween) || undefined === _0x57abb5)) {
            _0x57abb5.stop();
          }
          this.ScaleTween = this.scene.tweens.add({
            'targets': this,
            'scale': 0x0,
            'duration': 0x1f4,
            'delay': this.weapon.PDuration,
            'ease': "Linear",
            'onComplete': () => {
              this.DeSpawn();
            }
          });
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Shot, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 0.5
          }, 0xc8, 0xa);
        }
        ["Bounce"](_0x1be9a5) {
          if (this.body === _0x1be9a5) {
            this.objectsHit = [];
          }
        }
        ["OnHasHitAnObject"](_0x4330e1) {
          if (!_0x4330e1.isDead) {
            this.setVelocity(-0x1 * this.body.velocity.x, -0x1 * this.body.velocity.y);
            this.objectsHit = [];
          }
        }
        ["OnHasHitWall"](_0x18bbd0) {
          this.save_vel_x *= _0x18bbd0.faceRight || _0x18bbd0.faceLeft ? -0x1 : 0x1;
          this.save_vel_y *= _0x18bbd0.faceTop || _0x18bbd0.faceBottom ? -0x1 : 0x1;
          this.setVelocity(this.save_vel_x, this.save_vel_y);
          this.objectsHit = [];
        }
        ["Update"]() {
          this.save_vel_x = 0x0 == this.body.velocity.x ? this.save_vel_x : this.body.velocity.x;
          this.save_vel_y = 0x0 == this.body.velocity.y ? this.save_vel_y : this.body.velocity.y;
        }
        ["DeSpawn"]() {
          this.isCullable = true;
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          super.DeSpawn();
        }
      };
      const _0x537f94 = class extends _0x88e137 {
        constructor(_0x1d805a, _0x44fd31, _0x382b43, _0x1438eb, _0x1bcc4a) {
          super(_0x1d805a, _0x44fd31, _0x382b43, 'vfx', "ProjectileHellfireLarge.png", _0x1438eb, _0x1bcc4a);
          this.setScale(0x0);
          this.PfxEmitter = this.scene.add.particles('vfx');
          this.PfxEmitter.createEmitter({
            'frame': ["ProjectileFireball.png", "HitBoom2.png"],
            'rotate': {
              'min': 0x0,
              'max': 0x168
            },
            'quantity': 0x1,
            'lifespan': 0x12c,
            'scale': {
              'start': 1.25,
              'end': 0x0
            },
            'on': false
          });
          this.ScaleTween = this.scene.tweens.add({
            'targets': this,
            'duration': 0x64,
            'ease': "Linear",
            'scale': _0x34bb1a.PixelScale * this.weapon.PArea
          });
        }
        ['OnRecycle']() {
          super.OnRecycle();
          this.body.setCircle(0x10);
          this.setScale(0x0);
          this.setDepth(this.y - _0x1d0e6c.Core.Player.y + this.scene.renderer.height);
          this.PfxEmitter.setDepth(this.depth - 0x1);
          if (this.ScaleTween) {
            this.ScaleTween.stop();
            this.scene.tweens.remove(this.ScaleTween);
            this.setScale(0x0);
            this.ScaleTween = this.scene.tweens.add({
              'targets': this,
              'duration': 0xc8,
              'ease': "Linear",
              'scale': _0x34bb1a.PixelScale * this.weapon.PArea
            });
            this.ScaleTween.restart();
          }
        }
        ["SetTarget"](_0x133e29) {
          super.SetTarget(_0x133e29);
          var _0x496393 = this.AngleFromTargetRadians(this.target);
          var _0x29d0d6 = [0x0, 0xa, -0xa, 0x14, -0x14, 0x1e, -0x1e, 0x28, -0x28];
          this.scene.physics.velocityFromRotation(_0x496393 + Phaser.Math.DegToRad(_0x29d0d6[this.indexInWeapon % _0x29d0d6.length]), this.TrueSpeed, this.body.velocity);
          var _0x160241 = Phaser.Math.Vector2.RIGHT;
          this.setAngle(Phaser.Math.RadToDeg(Math.atan2(this.body.velocity.y - _0x160241.y, this.body.velocity.x - _0x160241.x)));
        }
        ["Update"]() {
          this.PfxEmitter.emitParticleAt(this.x, this.y);
        }
      };
      const _0x37dd23 = class extends _0x88e137 {
        constructor(_0x5c6722, _0x26a80a, _0x458212, _0xc9092b, _0xa656b8) {
          super(_0x5c6722, _0x26a80a, _0x458212, 'vfx', "Rings3.png", _0xc9092b, _0xa656b8);
          this.setScale(0x1);
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(0x10);
          this.setScale(0x2 * _0x34bb1a.PixelScale);
          this.setVisible(false);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          this.ExpireTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': 0x14,
            'loop': false,
            'callback': () => {
              _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
              this.DeSpawn();
            }
          });
          this.ExpireTimer.name = "Lancet Expire";
        }
        ["SetTarget"](_0x6a1307) {
          super.SetTarget(_0x6a1307);
          this.x += 0x32 * this.target.x * (0x1 + this.indexInWeapon);
          this.y += 0x32 * this.target.y * (0x1 + this.indexInWeapon);
        }
        ['OnHasHitAnObject'](_0x3ee684) {
          if (!_0x3ee684.isDead) {
            if (_0x3ee684.Freeze) {
              _0x3ee684.Freeze(this.weapon.PDuration, 0x1);
            }
          }
        }
      };
      const _0x1d5ae8 = class extends _0x88e137 {
        constructor(_0x403d09, _0x37798f, _0x2bd7ae, _0x569916, _0x16e70b) {
          super(_0x403d09, _0x37798f, _0x2bd7ae, 'vfx', "ProjectileScythe.png", _0x569916, _0x16e70b);
          this.posHistory = new Array();
          this.maxHistory = 0x1;
          this.historyIndex = 0x0;
          this._velocity = new Phaser.Math.Vector2(0x0, 0x0);
          this._avelocity = new Phaser.Math.Vector2(0x0, 0x0);
          this.AngleTween = this.scene.tweens.add({
            'targets': this,
            'angle': -0x168,
            'duration': 0x1f4,
            'ease': "Linear",
            'repeat': -0x1
          });
          this.ghosts = new Array();
          for (let _0x1e5eb7 = 0x0; _0x1e5eb7 < this.maxHistory; _0x1e5eb7++) {
            this.posHistory.push(new Phaser.Math.Vector2(_0x37798f, _0x2bd7ae));
            var _0x5c46e9 = this.scene.add.image(0x0, 0x0, this.texture.key, this.frame.name).setScale(_0x34bb1a.PixelScale).setVisible(false).setTint(0x0).setAlpha(0.75 - 0.25 * _0x1e5eb7);
            this.ghosts.push(_0x5c46e9);
          }
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(0x10);
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          var _0x54d9d9 = 0x168 / this.weapon.PAmount * this.indexInWeapon - 0x5a;
          this.scene.physics.velocityFromRotation(Phaser.Math.DegToRad(_0x54d9d9), this.TrueSpeed, this.body.velocity);
          for (let _0x2af20f = 0x0; _0x2af20f < this.posHistory.length; _0x2af20f++) {
            this.posHistory[_0x2af20f].x = this.x;
            this.posHistory[_0x2af20f].y = this.y;
          }
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Shot, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 0.5
          }, 0xc8, 0xa);
        }
        ["DeSpawn"]() {
          super.DeSpawn();
          for (let _0x262a0a = 0x0; _0x262a0a < this.ghosts.length; _0x262a0a++) {
            this.ghosts[_0x262a0a].setVisible(false);
          }
        }
        ["getHistoryIndex"](_0x241286) {
          return this.historyIndex + _0x241286 >= this.maxHistory ? this.historyIndex + _0x241286 - this.maxHistory : this.historyIndex + _0x241286;
        }
        ["Update"](_0x599c11 = 0x0) {
          if (this.historyIndex < this.maxHistory - 0x1) {
            this.historyIndex++;
          } else {
            this.historyIndex = 0x0;
          }
          for (let _0x4a223c = 0x0; _0x4a223c < this.ghosts.length; _0x4a223c++) {
            var _0x5b1d91 = this.posHistory[this.getHistoryIndex(_0x4a223c)];
            var _0x412e9b = this.ghosts[_0x4a223c];
            _0x412e9b.setAngle(this.angle);
            _0x412e9b.setPosition(_0x5b1d91.x, _0x5b1d91.y);
            _0x412e9b.setScale(this.scale);
            _0x412e9b.setVisible(true);
          }
          this.posHistory[this.historyIndex].x = this.x;
          this.posHistory[this.historyIndex].y = this.y;
        }
      };
      class _0x37deed extends Phaser.GameObjects.Rope {
        constructor(_0x53ffec, _0x2f3e76, _0x3fcf69, _0x12f837, _0x510456, _0x254acd, _0x4e0a60, _0x3a7634, _0x2a0c24) {
          super(_0x53ffec, _0x2f3e76, _0x3fcf69, _0x12f837, _0x510456, _0x254acd, _0x4e0a60, _0x3a7634, _0x2a0c24);
          this.positions = [];
          this.maxPositions = 0x0;
          this.trail_x = 0x0;
          this.trail_y = 0x0;
          this.maxPositions = _0x254acd;
        }
        ["resetPoints"](_0x48861b, _0x10db90) {
          for (let _0x3880b1 = 0x0; _0x3880b1 < this.points.length; _0x3880b1++) {
            this.points[_0x3880b1].x = _0x48861b;
            this.points[_0x3880b1].y = _0x10db90;
          }
        }
        ['reset']() {
          for (let _0x1f6be4 = 0x0; _0x1f6be4 < this.points.length; _0x1f6be4++) {
            this.points[_0x1f6be4].x = this.follower.x;
            this.points[_0x1f6be4].y = this.follower.y;
          }
        }
        ["clearPositions"]() {
          this.positions = [];
        }
        ['trailUpdate']() {
          if (this.active) {
            if (this.follower) {
              this.trail_x = this.follower.x;
              this.trail_y = this.follower.y;
            }
            this.positions.unshift([this.trail_x, this.trail_y]);
            if (this.positions.length > this.maxPositions) {
              this.positions.pop();
            }
            for (let _0x4a0783 = 0x0; _0x4a0783 < this.positions.length; _0x4a0783++) {
              this.points[_0x4a0783].x = this.positions[_0x4a0783][0x0];
              this.points[_0x4a0783].y = this.positions[_0x4a0783][0x1];
            }
            this.setDirty();
          }
        }
      }
      const _0x42c8e4 = class extends _0x88e137 {
        constructor(_0x1128b2, _0x2dbc46, _0x204a27, _0x4ba457, _0x3602c3) {
          super(_0x1128b2, _0x2dbc46, _0x204a27, 'vfx', "HitRed2.png", _0x4ba457, _0x3602c3);
          this.trail = new _0x37deed(this.scene, 0x0, 0x0, "vfx", "Lightning3.png", 0x10, true);
          this.trail.follower = this;
          this.trail.setScale(0x1);
          this.trail.setDepth(Number.MAX_SAFE_INTEGER - 0x3e8);
          this.trail.setVisible(false);
          this.scene.add.existing(this.trail);
          this.setVisible(false);
          this.isCullable = false;
          this._speed = 0x0;
          this.graphics = _0x1128b2.scene.add.graphics().fillStyle([0xffff, 0xff, 0x88ff, 0xffffff][_0x3602c3 % 0x4], 0.15).fillCircle(0x0, 0x0, 0x8).setBlendMode(_0x2d874d.BlendModes.ADD).setVisible(false);
        }
        ["OnRecycle"]() {
          var _0x365141;
          var _0x47d451;
          super.OnRecycle();
          this.body.setCircle(0x10);
          if (!(null === (_0x365141 = this.moveTween) || undefined === _0x365141)) {
            _0x365141.stop();
          }
          if (!(null === (_0x47d451 = this.despawnTween) || undefined === _0x47d451)) {
            _0x47d451.stop();
          }
          this.setVisible(false);
          this.trail.setVisible(false);
          var _0x493c34 = Phaser.Math.RND.pick([0x0, 0x1, 0x2]);
          var _0x4906f1 = this.weapon.AreaRectangles[_0x493c34];
          var _0x19508b = new Phaser.Math.Vector2(_0x1d0e6c.Core.Player.x - 0.5 * this.scene.renderer.width, _0x1d0e6c.Core.Player.y - 0.5 * this.scene.renderer.height);
          this.trail.clearPositions();
          this.body.enable = false;
          this.setScale(0.5 * _0x34bb1a.PixelScale * this.weapon.PArea);
          switch (_0x493c34) {
            default:
            case 0x0:
            case 0x1:
              _0x4906f1.x = _0x19508b.x;
              _0x4906f1.y = _0x19508b.y + this.scene.renderer.height - _0x4906f1.height;
              break;
            case 0x2:
              _0x4906f1.x = _0x19508b.x + this.scene.renderer.width - _0x4906f1.width;
              _0x4906f1.y = _0x19508b.y + this.scene.renderer.height - _0x4906f1.height;
          }
          this.target = this.AimForRandomeEnemyInRect(_0x4906f1);
          if (this.target) {
            this.x = this.target.x;
            this.y = _0x1d0e6c.Core.Player.y - 0.6 * this.scene.renderer.height;
            this.trail.resetPoints(this.x, this.y);
            this.trail.setVisible(true);
            this.moveTween = this.scene.tweens.add({
              'targets': this,
              'y': this.target.y,
              'duration': 0x3c,
              'onComplete': () => {
                this.objectsHit = [];
                this.body.enable = true;
                if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
                  this.graphics.setPosition(this.target.x, this.target.y);
                  this.graphics.setVisible(true);
                  this.graphics.setScale(0x0);
                  this.graphics.setDepth(this.y - _0x1d0e6c.Core.Player.y - 0.5 * this.scene.renderer.height);
                }
                _0x1d0e6c.Sound.PlaySound(_0x52c10f.Lightning, {
                  'detune': -0x64 * this.indexInWeapon,
                  'volume': 0.6,
                  'rate': 0x2
                }, 0xc8, 0x4);
                this.despawnTween = this.scene.tweens.add({
                  'targets': this.graphics,
                  'scale': _0x34bb1a.PixelScale * this.weapon.PArea,
                  'duration': 0x3c,
                  'onComplete': () => {
                    this.trail.setVisible(false);
                    this.graphics.setVisible(false);
                    this.DeSpawn();
                  }
                });
              }
            });
          } else {
            this.DeSpawn();
          }
        }
        ['Update']() {
          this.trail.trailUpdate();
        }
      };
      const _0x52f937 = class extends _0x88e137 {
        constructor(_0x4770c8, _0x220903, _0x5a53ff, _0x450dc9, _0x214bf1) {
          super(_0x4770c8, _0x220903, _0x5a53ff, "vfx", 'HitWhite1.png', _0x450dc9, _0x214bf1);
          this.bouncePositions = new Array();
          this.positions = [];
          this.maxPositions = 0x64;
          this.color = 0xff0000;
          this.isKilled = true;
          this.minAngleRotDeg = 0xa;
          this.maxAngleRotDeg = 0x14;
          this.trailAlpha = 0x1;
          this.trail = new _0x37deed(this.scene, 0x0, 0x0, "vfx", "Gradient3_4px.png", 0x18, true).setDepth(Number.MAX_SAFE_INTEGER - 0x3e8).setVisible(false).setBlendMode(_0x2d874d.BlendModes.ADD);
          this.trail.follower = this;
          this.scene.add.existing(this.trail);
          this._speed = 0x0;
          this.alpha = 0.5;
          this.trueWeapon = this.weapon;
          this.duration = this.trueWeapon.rayDuration;
          this.minAngleRotDeg = Phaser.Math.DegToRad(this.minAngleRotDeg);
          this.maxAngleRotDeg = Phaser.Math.DegToRad(this.maxAngleRotDeg);
        }
        ['OnRecycle']() {
          var _0x396529;
          var _0x33b804;
          var _0x29bc52;
          super.OnRecycle();
          this.body.setCircle(0x10);
          this.body.enable = false;
          this.totalTime = 0x0;
          if (!(null === (_0x396529 = this.fadeInTween) || undefined === _0x396529)) {
            _0x396529.stop();
          }
          if (!(null === (_0x33b804 = this.fadeOutTween) || undefined === _0x33b804)) {
            _0x33b804.stop();
          }
          if (!(null === (_0x29bc52 = this.despawnTween) || undefined === _0x29bc52)) {
            _0x29bc52.stop();
          }
          this.setVisible(false);
          this.trail.setVisible(false);
          this.trail.setAlpha(0x0);
          this.trail.clearPositions();
          this.trail.reset();
          this.setScale(0.5);
          var _0x356d0f = this.trueWeapon.targets[this.trueWeapon.enemyIndex % this.trueWeapon.targets.length];
          this.trueWeapon.enemyIndex++;
          if (this.weapon.PArea >= 0x2) {
            this.trail.setTexture("vfx", "Gradient3_8px.png");
          } else if (this.weapon.PArea >= 1.5) {
            this.trail.setTexture('vfx', 'Gradient3_6px.png');
          }
          if (_0x356d0f) {
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.MagicMissile, {
              'detune': -0x64 * this.indexInWeapon,
              'volume': 0.15
            }, 0xc8, 0xc);
            this.isKilled = false;
            this.SetTarget(_0x356d0f);
            var _0x3df8c1 = this.trueWeapon.enemyIndex % 0x2 == 0x0 ? 0x1 : -0x1;
            this.x = this.trueWeapon.sprite.x;
            this.y = this.trueWeapon.sprite.y;
            var _0x23d47d = new Phaser.Math.Vector2();
            _0x23d47d.x = this.x;
            _0x23d47d.y = this.y;
            _0x23d47d = this.rotate_point(this.target.x, this.target.y, this.minAngleRotDeg * _0x3df8c1 + Math.random() * this.maxAngleRotDeg * _0x3df8c1, _0x23d47d);
            var _0xe78112 = [this.x, this.y, _0x23d47d.x, _0x23d47d.y, this.target.x, this.target.y];
            this.curve = new Phaser.Curves.Spline(_0xe78112);
            var _0x18963a = new Phaser.Math.Vector2();
            this.curve.getPointAt(0x0, _0x18963a);
            this.setPosition(_0x18963a.x, _0x18963a.y);
            this.trail.resetPoints(_0x18963a.x, _0x18963a.y);
            this.trail.setVisible(true);
            this.setVisible(true);
            this.setAlpha(0x1);
            if (this.fadeInTween) {
              this.fadeInTween.stop();
              this.scene.tweens.remove(this.fadeInTween);
            }
            if (this.fadeOutTween) {
              this.fadeOutTween.stop();
              this.scene.tweens.remove(this.fadeOutTween);
            }
            if (this.scaleTween) {
              this.scaleTween.stop();
              this.scene.tweens.remove(this.scaleTween);
            }
            this.fadeInTween = this.scene.tweens.add({
              'targets': this.trail,
              'alpha': this.trailAlpha,
              'duration': 0xc8
            });
            this.explodeTimer = _0x1d0e6c.Core.scene.time.addEvent({
              'delay': this.duration,
              'callback': () => {
                this.body.enable = true;
                this.fadeOutTween = this.scene.tweens.add({
                  'targets': this.trail,
                  'alpha': 0x0,
                  'duration': 0xc8,
                  'onComplete': () => {
                    this.DeSpawn();
                  }
                });
                this.scaleTween = this.scene.tweens.add({
                  'targets': this,
                  'scale': 0x1 * _0x34bb1a.PixelScale * this.weapon.PArea,
                  'alpha': 0x0,
                  'duration': 0x78
                });
                if (!_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
                  this.setVisible(false);
                }
              }
            });
            this.explodeTimer.name = "SILF explode";
          } else {
            this.DeSpawn();
          }
        }
        ["DeSpawn"]() {
          this.isKilled = true;
          this.trail.setVisible(false);
          this.trail.setAlpha(0x0);
          this.body.enable = false;
          this.setScale(0x0);
          this.setVisible(false);
          super.DeSpawn();
        }
        ["SetTarget"](_0x19f0f7) {
          super.SetTarget(_0x19f0f7);
        }
        ["Update"](_0x205c1b) {
          if (!this.isKilled) {
            this.totalTime += _0x205c1b;
            if (this.totalTime > this.duration) {
              this.totalTime = this.duration;
            }
            var _0x4941ae = new Phaser.Math.Vector2();
            this.curve.getPointAt(this.totalTime / this.duration, _0x4941ae);
            this.setPosition(_0x4941ae.x, _0x4941ae.y);
            this.trail.trailUpdate();
          }
        }
        ["rotate_point"](_0x246b0d, _0x2d5f64, _0x26798f, _0x2470ce) {
          var _0x2f517a = Math.sin(_0x26798f);
          var _0xb0617 = Math.cos(_0x26798f);
          _0x2470ce.x -= _0x246b0d;
          _0x2470ce.y -= _0x2d5f64;
          var _0x516a34 = _0x2470ce.x * _0xb0617 - _0x2470ce.y * _0x2f517a;
          var _0x2ea690 = _0x2470ce.x * _0x2f517a + _0x2470ce.y * _0xb0617;
          _0x2470ce.x = _0x516a34 + _0x246b0d;
          _0x2470ce.y = _0x2ea690 + _0x2d5f64;
          return _0x2470ce;
        }
      };
      const _0x5d949d = class extends _0x88e137 {
        constructor(_0x4d4c6b, _0x2c5e33, _0x3036ec, _0x346c4c, _0x46d5a1) {
          super(_0x4d4c6b, _0x2c5e33, _0x3036ec, "vfx", "HitBlack1.png", _0x346c4c, _0x46d5a1);
          this.bouncePositions = new Array();
          this.positions = [];
          this.maxPositions = 0x64;
          this.color = 0xff0000;
          this.isKilled = true;
          this.minAngleRotDeg = 0xa;
          this.maxAngleRotDeg = 0x14;
          this.trailAlpha = 0.7;
          this.trail = new _0x37deed(this.scene, 0x0, 0x0, "vfx", "Gradient4_4px.png", 0x18, true).setDepth(Number.MAX_SAFE_INTEGER - 0x3e8).setVisible(false);
          this.trail.follower = this;
          this.scene.add.existing(this.trail);
          this._speed = 0x0;
          this.alpha = 0.5;
          this.trueWeapon = this.weapon;
          this.duration = this.trueWeapon.rayDuration;
          this.minAngleRotDeg = Phaser.Math.DegToRad(this.minAngleRotDeg);
          this.maxAngleRotDeg = Phaser.Math.DegToRad(this.maxAngleRotDeg);
        }
        ["OnRecycle"]() {
          var _0x250ecf;
          var _0x2203a6;
          var _0x37a536;
          super.OnRecycle();
          this.body.setCircle(0x10);
          this.body.enable = false;
          this.totalTime = 0x0;
          if (!(null === (_0x250ecf = this.fadeInTween) || undefined === _0x250ecf)) {
            _0x250ecf.stop();
          }
          if (!(null === (_0x2203a6 = this.fadeOutTween) || undefined === _0x2203a6)) {
            _0x2203a6.stop();
          }
          if (!(null === (_0x37a536 = this.despawnTween) || undefined === _0x37a536)) {
            _0x37a536.stop();
          }
          this.setVisible(false);
          this.trail.setVisible(false);
          this.trail.setAlpha(0x0);
          this.trail.clearPositions();
          this.trail.reset();
          this.setScale(0.5);
          var _0x315b26 = this.trueWeapon.targets[this.trueWeapon.enemyIndex % this.trueWeapon.targets.length];
          this.trueWeapon.enemyIndex++;
          if (!(this.weapon.PArea >= 0x2)) {
            if (this.weapon.PArea >= 1.5) {
              this.trail.setTexture("vfx", 'Gradient4_6px.png');
            }
          }
          if (_0x315b26) {
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.MagicMissile, {
              'detune': -0x64 * this.indexInWeapon,
              'volume': 0.15
            }, 0xc8, 0xc);
            this.isKilled = false;
            this.SetTarget(_0x315b26);
            var _0x51c7e6 = this.trueWeapon.enemyIndex % 0x2 == 0x0 ? 0x1 : -0x1;
            this.x = this.trueWeapon.sprite.x;
            this.y = this.trueWeapon.sprite.y;
            var _0x515439 = new Phaser.Math.Vector2();
            _0x515439.x = this.x;
            _0x515439.y = this.y;
            _0x515439 = this.rotate_point(this.target.x, this.target.y, this.minAngleRotDeg * _0x51c7e6 + Math.random() * this.maxAngleRotDeg * _0x51c7e6, _0x515439);
            var _0x412814 = [this.x, this.y, _0x515439.x, _0x515439.y, this.target.x, this.target.y];
            this.curve = new Phaser.Curves.Spline(_0x412814);
            var _0x946de3 = new Phaser.Math.Vector2();
            this.curve.getPointAt(0x0, _0x946de3);
            this.setPosition(_0x946de3.x, _0x946de3.y);
            this.trail.resetPoints(_0x946de3.x, _0x946de3.y);
            this.trail.setVisible(true);
            this.setVisible(true);
            this.setAlpha(0x1);
            if (this.fadeInTween) {
              this.fadeInTween.stop();
              this.scene.tweens.remove(this.fadeInTween);
            }
            if (this.fadeOutTween) {
              this.fadeOutTween.stop();
              this.scene.tweens.remove(this.fadeOutTween);
            }
            if (this.scaleTween) {
              this.scaleTween.stop();
              this.scene.tweens.remove(this.scaleTween);
            }
            this.fadeInTween = this.scene.tweens.add({
              'targets': this.trail,
              'alpha': this.trailAlpha,
              'duration': 0xc8
            });
            this.explodeTimer = _0x1d0e6c.Core.scene.time.addEvent({
              'delay': this.duration,
              'callback': () => {
                this.body.enable = true;
                this.fadeOutTween = this.scene.tweens.add({
                  'targets': this.trail,
                  'alpha': 0x0,
                  'duration': 0xc8,
                  'onComplete': () => {
                    this.DeSpawn();
                  }
                });
                this.scaleTween = this.scene.tweens.add({
                  'targets': this,
                  'scale': 0x1 * _0x34bb1a.PixelScale * this.weapon.PArea,
                  'alpha': 0x0,
                  'duration': 0x78
                });
                if (!_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
                  this.setVisible(false);
                }
              }
            });
            this.explodeTimer.name = "SILF explode";
          } else {
            this.DeSpawn();
          }
        }
        ["DeSpawn"]() {
          this.isKilled = true;
          this.trail.setVisible(false);
          this.trail.setAlpha(0x0);
          this.body.enable = false;
          this.setScale(0x0);
          this.setVisible(false);
          super.DeSpawn();
        }
        ["SetTarget"](_0xb42374) {
          super.SetTarget(_0xb42374);
        }
        ["Update"](_0x39fa42) {
          if (!this.isKilled) {
            this.totalTime += _0x39fa42;
            if (this.totalTime > this.duration) {
              this.totalTime = this.duration;
            }
            var _0x40f61f = new Phaser.Math.Vector2();
            this.curve.getPointAt(this.totalTime / this.duration, _0x40f61f);
            this.setPosition(_0x40f61f.x, _0x40f61f.y);
            this.trail.trailUpdate();
          }
        }
        ["rotate_point"](_0xf66a4d, _0x240f63, _0x5a6b3f, _0x30af04) {
          var _0x83792 = Math.sin(_0x5a6b3f);
          var _0x3acd82 = Math.cos(_0x5a6b3f);
          _0x30af04.x -= _0xf66a4d;
          _0x30af04.y -= _0x240f63;
          var _0x4b272a = _0x30af04.x * _0x3acd82 - _0x30af04.y * _0x83792;
          var _0x3eb521 = _0x30af04.x * _0x83792 + _0x30af04.y * _0x3acd82;
          _0x30af04.x = _0x4b272a + _0xf66a4d;
          _0x30af04.y = _0x3eb521 + _0x240f63;
          return _0x30af04;
        }
      };
      const _0x2fc829 = class extends _0x88e137 {
        constructor(_0x513d16, _0x3eaca8, _0x3af4ab, _0x1915b9, _0x1aad4d) {
          super(_0x513d16, _0x3eaca8, _0x3af4ab, "vfx", "HitStar2.png", _0x1915b9, _0x1aad4d);
          this.radius = 0x10;
          this.hasThorns = false;
          this.copyPosition(_0x1d0e6c.Core.Player);
          this.imageTween2 = _0x1d0e6c.Core.scene.add.tween({
            'targets': this,
            'angle': 0x168,
            'loop': true,
            'duration': 0x320,
            'ease': "Linear",
            'repeat': -0x1
          });
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.imageTween2.restart();
          this.body.setCircle(this.radius);
          this.setScale(1.35 * _0x34bb1a.PixelScale);
          this.setVisible(true);
          this.copyPosition(_0x1d0e6c.Core.Player);
          _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
          this.ExpireTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.weapon.PInterval + 0x1f4,
            'loop': false,
            'callback': () => {
              _0x1d0e6c.Core.scene.time.removeEvent(this.ExpireTimer);
              this.DeSpawn();
            }
          });
          this.ExpireTimer.name = "L Expire";
        }
        ["Update"]() {
          this.copyPosition(_0x1d0e6c.Core.Player);
          this.y -= 0x10;
          this.setDepth(0xa + _0x1d0e6c.Core.Player.depth - 0.5 * _0x1d0e6c.Core.scene.renderer.height);
        }
      };
      const _0x3ab70 = class extends _0x88e137 {
        constructor(_0x1db8fe, _0x27fccc, _0x1e07e7, _0x4f7382, _0x505114) {
          super(_0x1db8fe, _0x27fccc, _0x1e07e7, "vfx", 'Rings3.png', _0x4f7382, _0x505114);
          this.copyPosition(_0x1d0e6c.Core.Player);
          this.trueWeapon = this.weapon;
          this.visible = false;
          this.canvas = this.trueWeapon.canvas;
          this.rt = this.trueWeapon.rt;
          this.globalScale = 0.8 * Math.min(this.scene.renderer.width, this.scene.renderer.height);
          this.trueWeapon.outline.setTintFill(0xffffff, 0xffff00, 0xffff00, 0xffffff);
          this.trueWeapon.outer.setTintFill(0xffffff, 0xffff00, 0xffff00, 0xffffff);
          this.trueWeapon.inner.setTintFill(0xffffff, 0xffff00, 0xffff00, 0xffffff);
          this.trueWeapon.center.setTintFill(0xffffff, 0xffff00, 0xffff00, 0xffffff);
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.enable = false;
          this.trueWeapon.rt.clear();
          this.trueWeapon.outline.setScale(this.globalScale / 0x80);
          this.trueWeapon.inner.setScale(this.globalScale / 0x80);
          this.trueWeapon.outer.setScale(this.globalScale / 0x80);
          this.trueWeapon.center.setScale(this.globalScale / 0x80);
          this.trueWeapon.graphics_Bad.setScale(this.globalScale / 0x10);
          this.trueWeapon.graphics_Good.setScale(this.globalScale / 0x10);
          let _0x4e8114 = Math.random() * (0x1 / _0x1d0e6c.Core.Player.luck) > this.trueWeapon.chance;
          this.scene.time.addEvent({
            'delay': 0x64,
            'callback': () => {
              this.EraseEnemies(_0x4e8114);
              if (_0x4e8114) {
                this.EraseItems();
              }
            }
          });
          if (_0x4e8114) {
            this.rt.draw(this.trueWeapon.graphics_Bad);
          } else {
            this.rt.draw(this.trueWeapon.graphics_Good);
          }
          this.rt.draw(this.trueWeapon.outline);
          this.rt.draw(this.trueWeapon.outer);
          this.rt.draw(this.trueWeapon.inner);
          this.rt.draw(this.trueWeapon.center);
          this.canvas.copyPosition(_0x1d0e6c.Core.Player);
          this.Shatter();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.PentagramSFX, {
            'volume': 0x1,
            'rate': 0x2
          });
        }
        ["EraseEnemies"](_0x485e56 = false) {
          for (let _0x231be1 = 0x0; _0x231be1 < _0x1d0e6c.Core.Enemies.length; _0x231be1++) {
            const _0x58bdc7 = _0x1d0e6c.Core.Enemies[_0x231be1];
            if (!_0x58bdc7.res_Rosary) {
              if (_0x1d0e6c.Core.containmentRect_Screen.Contains(_0x58bdc7)) {
                if (_0x485e56) {
                  _0x58bdc7.Disappear();
                } else {
                  _0x58bdc7.GetDamaged(Math.max(0x42, _0x58bdc7.maxHp), _0x3677f0.NONE);
                }
              }
            }
          }
        }
        ['EraseItems']() {
          for (let _0x462f9b = 0x0; _0x462f9b < _0x1d0e6c.Core.PickupGroup.children.entries.length; _0x462f9b++) {
            const _0x5efe44 = _0x1d0e6c.Core.PickupGroup.children.entries[_0x462f9b];
            if (_0x1d0e6c.Core.containmentRect_Screen.Contains(_0x5efe44)) {
              _0x5efe44.DeSpawn();
            }
          }
          for (let _0x449c2d = 0x0; _0x449c2d < _0x1d0e6c.Core.Destructibles.length; _0x449c2d++) {
            const _0x58fb75 = _0x1d0e6c.Core.Destructibles[_0x449c2d];
            if (_0x1d0e6c.Core.containmentRect_Screen.Contains(_0x58fb75)) {
              _0x58fb75.DeSpawn();
            }
          }
        }
        ["Update"]() {
          this.canvas.copyPosition(_0x1d0e6c.Core.Player);
        }
        ['Shatter']() {
          let _0x288acb = this.canvas;
          if (_0x288acb.task) {
            _0x288acb.task.stop();
            _0x288acb.task = null;
          }
          _0x288acb.shatter();
          this.scene.renderer.width;
          _0x288acb.task = this.scene.tweens.add({
            'targets': _0x288acb.faces,
            'alpha': 0x0,
            'angle': function () {
              return 0xb4 * Math.random() - 0x5a;
            },
            'x': function () {
              return 1.2 * (Math.random() - 0.5);
            },
            'y': function () {
              return 1.2 * (Math.random() - 0.5);
            },
            'ease': 'Linear',
            'duration': 0x3e8,
            'delay': 0x96,
            'repeat': 0x0,
            'yoyo': false,
            'onComplete': function () {
              _0x288acb.stopUpdate();
            }
          });
          _0x288acb.startUpdate();
        }
      };
      const _0x2480a4 = class extends _0x88e137 {
        constructor(_0x244345, _0x2e9bf3, _0x455900, _0x1d1cff, _0x40a931) {
          super(_0x244345, _0x2e9bf3, _0x455900, "vfx", 'Sword.png', _0x1d1cff, _0x40a931);
          this.posHistory = new Array();
          this.angleHistory = new Array();
          this.maxHistory = 0x8;
          this.historyIndex = 0x0;
          this.accel = 0x1;
          this.velocity = new Phaser.Math.Vector2(0x0, 0x0);
          this.AngleTween = this.scene.tweens.add({
            'targets': this,
            'angle': 0x168,
            'duration': 0x1f4,
            'ease': "Linear",
            'repeat': -0x1
          });
          this.AngleTween.pause();
          this.AccelTween = this.scene.tweens.add({
            'targets': this,
            'accel': 0x0,
            'duration': 0x1f4,
            'ease': "Linear",
            'onComplete': () => {
              this.GoBackwards();
            }
          });
          this.BackwardTween = this.scene.tweens.add({
            'targets': this,
            'accel': -0x2,
            'duration': 0x1f4,
            'ease': "Linear"
          });
          this.ghosts = new Array();
          for (let _0x41c9fd = 0x0; _0x41c9fd < this.maxHistory; _0x41c9fd++) {
            this.posHistory.push(new Phaser.Math.Vector2(_0x2e9bf3, _0x455900));
            this.angleHistory.push(this.angle);
            var _0x3a5be0 = this.scene.add.image(0x0, 0x0, this.texture.key, "SwordBW.png").setScale(_0x34bb1a.PixelScale).setVisible(false).setBlendMode(_0x2d874d.BlendModes.ADD);
            switch (_0x41c9fd) {
              case 0x0:
                _0x3a5be0.setTint(0x20c0);
                break;
              case 0x1:
                _0x3a5be0.setTint(0x2020c0);
                break;
              case 0x2:
                _0x3a5be0.setTint(0x4020c0);
                break;
              case 0x3:
                _0x3a5be0.setTint(0x6020c0);
                break;
              case 0x4:
                _0x3a5be0.setTint(0x8020c0);
                break;
              case 0x5:
                _0x3a5be0.setTint(0xa020c0);
                break;
              case 0x6:
                _0x3a5be0.setTint(0xc020c0);
                break;
              case 0x7:
                _0x3a5be0.setTint(0xe020c0);
            }
            this.ghosts.push(_0x3a5be0);
          }
          this.ghosts.reverse();
        }
        ["OnRecycle"]() {
          super.OnRecycle();
          this.body.setCircle(0xc);
          this.AngleTween.pause();
          this.isCullable = false;
          this.setScale(_0x34bb1a.PixelScale * this.weapon.PArea);
          this.accel = 0x2;
          this.AccelTween.restart();
          for (let _0x22e334 = 0x0; _0x22e334 < this.posHistory.length; _0x22e334++) {
            this.posHistory[_0x22e334].x = this.x;
            this.posHistory[_0x22e334].y = this.y;
            this.angleHistory[_0x22e334] = this.angle;
          }
          this.x += (Math.random() - 0.5) * this.indexInWeapon * 0x14 * this.weapon.PArea;
          this.y += (Math.random() - 0.5) * this.indexInWeapon * 0x14 * this.weapon.PArea;
          this.AimForNearestEnemy();
          this.velocity.copy(this.body.velocity);
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Shot, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 0.5
          }, 0xc8, 0xa);
          this.setDepth(this.y - _0x1d0e6c.Core.Player.y + 0x2 * this.scene.renderer.height);
        }
        ["GoBackwards"]() {
          this.AngleTween = this.scene.tweens.add({
            'targets': this,
            'angle': this.angle + 0x168,
            'duration': 0x3e8,
            'ease': "Linear",
            'repeat': -0x1
          });
          this.BackwardTween = this.scene.tweens.add({
            'targets': this,
            'accel': -0x2,
            'duration': 0x1f4,
            'ease': 'Linear'
          });
          this.scene.time.addEvent({
            'delay': 0x1f4,
            'callback': () => {
              this.isCullable = true;
            }
          });
          this.objectsHit = [];
        }
        ["DeSpawn"]() {
          super.DeSpawn();
          for (let _0x3c8c93 = 0x0; _0x3c8c93 < this.ghosts.length; _0x3c8c93++) {
            this.ghosts[_0x3c8c93].setVisible(false);
          }
        }
        ["getHistoryIndex"](_0x58e3a1) {
          return this.historyIndex + _0x58e3a1 >= this.maxHistory ? this.historyIndex + _0x58e3a1 - this.maxHistory : this.historyIndex + _0x58e3a1;
        }
        ["Update"]() {
          this.body.velocity.x = this.velocity.x * this.accel;
          this.body.velocity.y = this.velocity.y * this.accel;
          if (this.historyIndex < this.maxHistory - 0x1) {
            this.historyIndex++;
          } else {
            this.historyIndex = 0x0;
          }
          for (let _0x1a3f00 = 0x0; _0x1a3f00 < this.ghosts.length; _0x1a3f00++) {
            var _0x491144 = this.posHistory[this.getHistoryIndex(_0x1a3f00)];
            var _0x5e1a10 = this.angleHistory[this.getHistoryIndex(_0x1a3f00)];
            var _0x286701 = this.ghosts[_0x1a3f00];
            _0x286701.setAngle(_0x5e1a10);
            _0x286701.setPosition(_0x491144.x, _0x491144.y);
            _0x286701.setScale(this.scale);
            _0x286701.setVisible(true);
          }
          this.posHistory[this.historyIndex].x = this.x;
          this.posHistory[this.historyIndex].y = this.y;
          this.angleHistory[this.historyIndex] = this.angle;
        }
      };
      const _0xf5470f = class extends _0x88e137 {
        constructor(_0xe29348, _0x140846, _0x152652, _0x14639b, _0x462023) {
          super(_0xe29348, _0x140846, _0x152652, "vfx", 'slash.png', _0x14639b, _0x462023);
          this.previousArea = 0x0;
          this.ghost1 = this.scene.add.sprite(_0x140846, _0x152652, "vfx", "slash.png").setScale(0x0);
          this.ghost2 = this.scene.add.sprite(_0x140846, _0x152652, "vfx", "slash.png").setScale(0x0).setBlendMode(_0x2d874d.BlendModes.ADD);
          this.setTint(0x110011);
          this.ghost2.setTint(0x660066);
          this.ghost1.setTint(0xff0000);
        }
        ['Init'](_0x37ff3c = -0x3e8, _0xfc5064 = -0x3e8) {
          super.Init(_0x37ff3c, _0xfc5064);
          this.setScale(0x0);
          this.previousArea = this.weapon.PArea;
          this.tween = this.scene.tweens.add({
            'targets': [this, this.ghost1, this.ghost2],
            'scale': _0x34bb1a.PixelScale * this.weapon.PArea,
            'duration': 0x64,
            'ease': "Linear"
          });
        }
        ["OnRecycle"]() {
          var _0x3e6f85;
          super.OnRecycle();
          this.alpha = 0x1;
          this.ghost1.setAlpha(0x1);
          this.ghost2.setAlpha(0x1);
          if (this.tween) {
            if (this.previousArea != this.weapon.PArea) {
              this.tween.stop();
              this.scene.tweens.remove(this.tween);
              this.setScale(0x0);
              this.tween = this.scene.tweens.add({
                'targets': [this, this.ghost1, this.ghost2],
                'scale': _0x34bb1a.PixelScale * this.weapon.PArea,
                'duration': 0x64,
                'ease': "Linear"
              });
            }
            this.tween.restart();
          }
          if (!(null === (_0x3e6f85 = this.tween2) || undefined === _0x3e6f85)) {
            _0x3e6f85.stop();
          }
          this.tween2 = this.scene.tweens.add({
            'targets': [this, this.ghost1, this.ghost2],
            'alpha': 0x0,
            'duration': 0xc8,
            'ease': "Linear",
            'delay': 0x64,
            'onComplete': () => {
              this.DeSpawn();
            }
          });
          const _0x14eb21 = _0x1d0e6c.Core.Player.flipX ? this.indexInWeapon % 0x2 != 0x1 : this.indexInWeapon % 0x2 == 0x1;
          this.x += _0x14eb21 ? -0x40 : 0x40;
          this.y -= 0x10;
          this.y -= 0x10 * this.indexInWeapon;
          let _0x5ad61e = this.indexInWeapon % 0x2 == 0x1;
          this.setFlipY(_0x5ad61e);
          this.ghost1.setFlipY(_0x5ad61e);
          this.ghost2.setFlipY(_0x5ad61e);
          this.setFlipX(_0x14eb21);
          this.ghost1.setFlipX(_0x14eb21);
          this.ghost2.setFlipX(_0x14eb21);
          this.ghost1.setX(this.x + 0x4);
          this.ghost2.setX(this.x - 0x4);
          this.ghost1.setY(this.y + 0x2);
          this.ghost2.setY(this.y - 0x2);
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Whip, {
            'detune': -0x64 * this.indexInWeapon,
            'volume': 1.8,
            'rate': 0x2
          });
        }
      };
      class _0x236e5d extends Phaser.GameObjects.Group {
        constructor(_0x193a8b, _0x55d6f4) {
          super(_0x193a8b);
          this.stored = new Array();
          this.spawned = new Array();
          this.weaponType = 0x0;
          this.Init(_0x55d6f4);
        }
        ["Init"](_0x5a57dc) {
          this.weaponType = _0x5a57dc;
          this.scene.add.existing(this);
        }
        ['SpawnAt'](_0x405d91, _0x39cc35, _0x3d1fb9, _0x358a92 = 0x0) {
          const _0x5f44ce = this.Spawn(_0x3d1fb9, _0x358a92);
          _0x5f44ce.setPosition(_0x405d91, _0x39cc35);
          _0x5f44ce.indexInWeapon = _0x358a92;
          this.scene.children.add(_0x5f44ce);
          _0x5f44ce.OnRecycle();
          return _0x5f44ce;
        }
        ["Spawn"](_0x1003b0, _0x298ee8 = 0x0) {
          let _0x490506 = this.stored.pop();
          if (!_0x490506) {
            _0x490506 = this.Make(_0x1003b0, _0x298ee8);
            _0x490506.Init();
          }
          this.add(_0x490506, true);
          this.spawned.push(_0x490506);
          _0x1d0e6c.Core.BulletGroup.add(_0x490506, false);
          return _0x490506;
        }
        ["Return"](_0x12fba0) {
          this.scene.children.remove(_0x12fba0);
          this.remove(_0x12fba0, true, false);
          this.spawned.splice(this.spawned.indexOf(_0x12fba0), 0x1);
          _0x1d0e6c.Core.BulletGroup.remove(_0x12fba0, false);
          this.stored.push(_0x12fba0);
        }
        ["Make"](_0x2193b2, _0x1c661a = 0x0) {
          switch (this.weaponType) {
            default:
            case _0x2a5ca3.VOID:
              return new _0x88e137(this, 0x0, 0x0, 'ball', 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.AXE:
              return new _0x163689(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.SCYTHE:
              return new _0x1d5ae8(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.KNIFE:
            case _0x2a5ca3.THOUSAND:
              return new _0x102714(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.FIREBALL:
              return new _0x850792(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.MAGIC_MISSILE:
              return new _0x5c1f1b(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.HOLY_MISSILE:
              return new _0x2ebd65(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.HOLYWATER:
              return new _0x57035a(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.DIAMOND:
              return new _0x47fb60(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.WHIP:
              return new _0x5bb261(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.HOLYBOOK:
              return new _0x105e65(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.VESPERS:
              return new _0x235940(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.CROSS:
              return new _0x5887a6(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.LIGHTNING:
              return new _0x42c8e4(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.GARLIC:
              return new _0x4e90aa(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.BONE:
              return new _0x5d6d84(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.HELLFIRE:
              return new _0x537f94(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.LANCET:
              return new _0x37dd23(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.SILF:
              return new _0x52f937(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.SILF2:
              return new _0x5d949d(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.LAUREL:
            case _0x2a5ca3.THORNS:
              return new _0x2fc829(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.PENTAGRAM:
              return new _0x3ab70(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.HEAVENSWORD:
              return new _0x2480a4(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
            case _0x2a5ca3.VAMPIRICA:
              return new _0xf5470f(this, 0x0, 0x0, _0x2193b2, _0x1c661a);
          }
        }
      }
      const _0x15b7de = {
        [_0x3677f0.NONE]: {
          'isTintFill': false,
          'targetTint': 0xffffff,
          'hitFrameName': '',
          'impactFrameName': '',
          'duration': 0x78
        },
        [_0x3677f0.PUSH]: {
          'isTintFill': true,
          'targetTint': 0xddffdd,
          'hitFrameName': "NoDraw.png",
          'impactFrameName': "NoDraw.png",
          'duration': 0x3c
        },
        [_0x3677f0.DEFAULT]: {
          'isTintFill': true,
          'targetTint': 0xffffff,
          'hitFrameName': "HitStar2.png",
          'impactFrameName': "Shockwave3.png",
          'duration': 0x78
        },
        [_0x3677f0.TIMEFREEZE]: {
          'isTintFill': true,
          'targetTint': 0xff,
          'hitFrameName': "feedback-4.png",
          'impactFrameName': 'Shockwave3.png',
          'duration': 0x1e
        },
        [_0x3677f0.FIRE]: {
          'isTintFill': true,
          'targetTint': 0xff0000,
          'hitFrameName': 'Hit1.png',
          'impactFrameName': "HitBoom2.png",
          'duration': 0x1e
        },
        [_0x3677f0.DARK]: {
          'isTintFill': true,
          'targetTint': 0x440088,
          'hitFrameName': "HitMoon2.png",
          'impactFrameName': "HitBlack1.png",
          'duration': 0x1e
        },
        [_0x3677f0.LIGHT]: {
          'isTintFill': true,
          'targetTint': 0x44ffff,
          'hitFrameName': 'HitStar2.png',
          'impactFrameName': "HitStarWhite1.png",
          'duration': 0x1e
        }
      };
      class _0x47c6c0 extends Phaser.Physics.Arcade.Sprite {
        constructor(_0x1140ff, _0x2f2577, _0x9646f1, _0x1e45a0) {
          super(_0x1140ff.scene, _0x2f2577, _0x9646f1, "monsters");
          this.hp = 0x3;
          this.maxHp = 0x3;
          this.dataMaxHp = 0x3;
          this.power = 0xa;
          this.knockback = 0xa;
          this.deathKB = 0xa;
          this.damageKB = 0x1;
          this.xp = 0x1;
          this.speed = 0x64;
          this.scaleMul = 0x1;
          this.enemyType = _0x433cce.SKELETON;
          this.HPxLevel = false;
          this.FixedDirection = false;
          this.owner = null;
          this.isDead = false;
          this.receivingDamage = false;
          this._currentDirection = new Phaser.Math.Vector2(0x0, 0x0);
          this.defaultName = '';
          this.isCullable = true;
          this.IsTimeStopped = false;
          this.IsFrozen = false;
          this.defaultSpeed = 0x64;
          this.res_Freeze = 0x0;
          this.res_Rosary = 0x0;
          this.moveTweenIndex = 0x0;
          this.isTeleportOnCull = false;
          this.idleFrameCount = 0x0;
          this.enemyType = _0x1e45a0;
          this.pool = _0x1140ff;
          if (0x0 === _0x47c6c0.MovementTweens.length) {
            for (let _0x1fea26 = 0x0; _0x1fea26 < 0xa; _0x1fea26++) {
              _0x47c6c0.TweenAngles.push({
                'angle': -0x5
              });
              _0x47c6c0.MovementTweens.push(this.scene.tweens.add({
                'targets': _0x47c6c0.TweenAngles[_0x1fea26],
                'delay': 0x2d * _0x1fea26,
                'angle': 0x5,
                'duration': 0x1f4,
                'ease': "Linear",
                'loop': -0x1,
                'yoyo': true
              }));
            }
          }
        }
        ['Init'](_0x26ba8b = -0x3e8, _0x5cfcfb = -0x3e8) {
          const _0x5e6c0f = _0x37a34e[this.enemyType][0x0];
          this.dataMaxHp = _0x5e6c0f.maxHp;
          this.maxHp = _0x5e6c0f.maxHp;
          this.power = _0x5e6c0f.power;
          this.knockback = _0x5e6c0f.knockback;
          this.deathKB = _0x5e6c0f.deathKB;
          this.xp = _0x5e6c0f.xp;
          this.speed = _0x5e6c0f.speed;
          this.defaultSpeed = _0x5e6c0f.speed;
          this.alpha = _0x5e6c0f.alpha ? _0x5e6c0f.alpha : 0x1;
          this.scaleMul = _0x5e6c0f.scale ? _0x5e6c0f.scale : 0x1;
          this.res_Freeze = _0x5e6c0f.res_Freeze ? _0x5e6c0f.res_Freeze : 0x0;
          this.res_Rosary = _0x5e6c0f.res_Rosary ? _0x5e6c0f.res_Rosary : 0x0;
          this.colliderOverride = _0x5e6c0f.colliderOverride;
          this.idleFrameCount = _0x5e6c0f.idleFrameCount;
          var _0x3e169b = _0x5e6c0f.skills;
          if ((null == _0x3e169b ? undefined : _0x3e169b.indexOf("HPxLevel")) > -0x1) {
            this.HPxLevel = true;
          }
          if ((null == _0x3e169b ? undefined : _0x3e169b.indexOf("FixedDirection")) > -0x1) {
            this.FixedDirection = true;
          }
          const _0x5110e5 = Phaser.Math.RND.pick(_0x5e6c0f.frameNames);
          this.setTexture(_0x5e6c0f.textureName, _0x5110e5);
          const _0x1e46c0 = this.anims.generateFrameNames(_0x5e6c0f.textureName, {
            'start': 0x0,
            'end': _0x5e6c0f.end,
            'zeroPad': 0x0,
            'prefix': _0x5110e5.replace('0.png', ''),
            'suffix': ".png"
          });
          this.anims.create({
            'key': "die",
            'frames': _0x1e46c0,
            'frameRate': 0x18,
            'repeat': 0x0
          });
          if (this.idleFrameCount) {
            const _0x164c79 = this.anims.generateFrameNames(_0x5e6c0f.textureName, {
              'start': 0x1,
              'end': this.idleFrameCount,
              'zeroPad': 0x2,
              'prefix': _0x5110e5.replace("0.png", '') + 'i',
              'suffix': ".png"
            });
            this.anims.create({
              'key': "idle",
              'frames': _0x164c79,
              'frameRate': 0x8,
              'repeat': -0x1
            });
          }
          this.on('animationcomplete', this.OnDeathAnimationComplete.bind(this));
          this.defaultName = _0x5110e5;
          this.setPosition(_0x26ba8b, _0x5cfcfb);
          this.scene.physics.add.existing(this);
          this.OnRecycle();
          this.moveTweenIndex = Math.floor(Math.random() * _0x47c6c0.TweenAngles.length);
        }
        ["Freeze"](_0x2a1c5f, _0x49482d = 0x1) {
          if (!(this.res_Freeze > _0x49482d || this.IsTimeStopped)) {
            if (this.FreezeTimer) {
              this.FreezeTimer.destroy();
            }
            this.FreezeTimer = this.scene.time.addEvent({
              'delay': _0x2a1c5f,
              'callback': () => this.ResumeFromFreeze()
            });
            this.IsTimeStopped = true;
            this.speed = 0x0;
            this.setVelocity(0x0);
            this.setTint(0xff);
          }
        }
        ['ResumeFromFreeze']() {
          this.IsTimeStopped = false;
          this.speed = this.defaultSpeed;
          this.restoreTint();
        }
        ["TimeStop"]() {
          if (this.FreezeTimer) {
            this.FreezeTimer.destroy();
          }
          this.IsTimeStopped = true;
          this.speed = 0x0;
          this.setVelocity(0x0);
          this.setTint(0xff);
        }
        ["ResumeFromTimeStop"]() {
          this.IsTimeStopped = false;
          this.speed = this.defaultSpeed;
          this.restoreTint();
        }
        ["setOwner"](_0x4d0911) {
          this.owner = _0x4d0911;
        }
        ["OnRecycle"]() {
          if (this.idleFrameCount) {
            this.anims.play({
              'key': "idle",
              'startFrame': Math.ceil(Math.random() * (0.5 * this.idleFrameCount))
            });
          }
          this.damageKB = 0x1;
          this.target = _0x1d0e6c.Core.Player;
          if (this.HPxLevel) {
            this.maxHp = this.dataMaxHp * _0x1d0e6c.Core.Player.level;
          }
          if (this.FixedDirection) {
            this._currentDirection.x = 0x0;
            this._currentDirection.y = 0x0;
          }
          this.hp = this.maxHp;
          this.isDead = false;
          this.visible = true;
          this.body.enable = true;
          this.IsTimeStopped = false;
          this.speed = this.defaultSpeed;
          this.setFrame(this.defaultName);
          this.restoreTint();
          this.setOrigin(0.5);
          this.setScale(0x1);
          var _0xfab4ea;
          var _0x390345 = 0.5 * (_0xfab4ea = 0.4 * this.width);
          this.body.setCircle(_0xfab4ea, _0x390345, _0x390345);
          if (this.colliderOverride) {
            _0x390345 = 0.5 * (_0xfab4ea = this.width * this.colliderOverride.radius);
            this.body.setCircle(_0xfab4ea, _0x390345, _0x390345);
            this.body.setOffset(_0x390345, _0x390345 + this.colliderOverride.offsetY);
          }
          this.setOrigin(0.5, 0x1);
          this.setScale(_0x34bb1a.PixelScale * this.scaleMul);
        }
        ['GetDamaged'](_0x26c24b = 0x1, _0x2292e3 = _0x3677f0.DEFAULT, _0x4842d5 = 0x1, _0x494fcc = '') {
          if (_0x26c24b > 0x0 && _0x1d0e6c.Core.PlayerOptions.DamageNumbersEnabled) {
            _0x1d0e6c.Core.ShowDamageAt(this.x, this.y, _0x26c24b);
          }
          this.hp -= _0x26c24b;
          if (this.hp <= 0x0) {
            this.Die();
          } else {
            this.damageKB = _0x4842d5;
          }
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Hit, {
            'volume': 0.5,
            'detune': 0x1f4 * (Math.random() - 0.5)
          }, 0x96, 0x3);
          if (_0x2292e3 != _0x3677f0.NONE) {
            _0x1d0e6c.Core.ShowHitVFXAt(this.x, this.y, _0x2292e3);
          }
          this.OnGetDamaged(_0x2292e3);
        }
        ["OnGetDamaged"](_0x1e89ae = _0x3677f0.DEFAULT) {
          var _0xf4ee85;
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled && _0x1e89ae != _0x3677f0.NONE) {
            if ((_0xf4ee85 = _0x15b7de[_0x1e89ae]).isTintFill) {
              this.setTintFill(_0xf4ee85.targetTint);
            } else {
              this.setTint(_0xf4ee85.targetTint);
            }
          }
          this._blinkTimeout = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.isDead ? 0x3c : _0xf4ee85 ? _0xf4ee85.duration : 0x78,
            'loop': false,
            'callback': () => {
              this.restoreTint();
            }
          });
          this._blinkTimeout.name = 'Blink';
          this.receivingDamage = true;
        }
        ["restoreTint"]() {
          if (this.IsTimeStopped) {
            this.setTint(0xff);
          } else {
            this.setTint(0xffffff);
          }
          this.receivingDamage = false;
        }
        ["OnDeathAnimationComplete"]() {
          this.DeSpawn();
        }
        ["DeSpawn"]() {
          this.isDead = true;
          this.body.enable = false;
          this.visible = false;
          this.pool.Recycle(this);
        }
        ["Disappear"]() {
          this.anims.play("die");
        }
        ["Die"]() {
          if (this.isDead) {
            return;
          }
          this.isDead = true;
          const _0x194e8f = -this.deathKB;
          this.setVelocity(_0x34bb1a.EnemySpeed * this.speed * this._currentDirection.x * _0x194e8f, _0x34bb1a.EnemySpeed * this.speed * this._currentDirection.y * _0x194e8f);
          this.anims.play("die");
          _0x1d0e6c.Core.scene.time.removeEvent(this._blinkTimeout);
          let _0x572336 = Math.floor((Math.random() + 0.5) * this.xp);
          if (_0x572336 > 0x0) {
            _0x1d0e6c.Core.MakeGem(this.x, this.y, _0x572336);
          }
          if (this.treasure) {
            _0x1d0e6c.Core.MakeTreasure(this.x, this.y, this.treasure);
            this.treasure = null;
          }
          _0x37a34e[this.enemyType][0x0].killedAmount += 0x1;
          _0x1d0e6c.Core.PlayerOptions.RunEnemies += 0x1;
          _0x1d0e6c.Core.MainUI.UpdateKills();
        }
        ["OnTeleportOnCull"]() {
          var _0xfb8d8e = _0x1d0e6c.Core.GetPositionOutOfSight(0x5, 0x30);
          this.setPosition(_0xfb8d8e.x, _0xfb8d8e.y);
        }
        ['AttachTreasure'](_0x2069d4) {
          this.treasure = _0x2069d4;
        }
        ["Update"](_0x3c1710 = 0x0) {
          if (this.isDead) {
            return;
          }
          this.setDepth(this.y - _0x1d0e6c.Core.Player.y);
          if (this.IsTimeStopped) {
            return;
          }
          if (!this.FixedDirection || this.FixedDirection && 0x0 == this._currentDirection.x && 0x0 == this._currentDirection.y) {
            this._currentDirection.x = this.target.x - this.x;
            this._currentDirection.y = this.target.y - this.y;
            this._currentDirection.normalize();
          }
          let _0x152473 = this.receivingDamage ? -this.knockback * this.damageKB : 0x1;
          this.setFlipX(this._currentDirection.x > 0x0);
          this.setVelocity(_0x34bb1a.EnemySpeed * this.speed * this._currentDirection.x * _0x152473, _0x34bb1a.EnemySpeed * this.speed * this._currentDirection.y * _0x152473);
          this.setAngle(_0x47c6c0.TweenAngles[this.moveTweenIndex].angle);
        }
      }
      _0x47c6c0.MovementTweens = new Array();
      _0x47c6c0.TweenAngles = new Array();
      class _0x2843f2 extends Phaser.GameObjects.Group {
        constructor(_0x317a26, _0x3b649b) {
          super(_0x317a26);
          this.stored = new Array();
          this.spawned = new Array();
          this.enemyType = _0x433cce.SKELETON;
          this.enabled = true;
          this.Init(_0x3b649b);
        }
        ["Init"](_0x2e7989) {
          this.enemyType = _0x2e7989;
          this.scene.add.existing(this);
        }
        ['SpawnAt'](_0x44566a, _0x1507f7, _0x448aab) {
          const _0x4ed8dd = this.Spawn();
          _0x4ed8dd.setPosition(_0x44566a, _0x1507f7);
          _0x4ed8dd.setOwner(_0x448aab);
          return _0x4ed8dd;
        }
        ['Spawn']() {
          let _0x26c665 = this.stored.pop();
          if (!_0x26c665) {
            _0x26c665 = this.Make();
            _0x26c665.Init();
          }
          this.scene.children.add(_0x26c665);
          _0x26c665.OnRecycle();
          this.add(_0x26c665, true);
          this.spawned.push(_0x26c665);
          _0x1d0e6c.Core.Enemies.push(_0x26c665);
          _0x1d0e6c.Core.EnemyGroup.add(_0x26c665, false);
          return _0x26c665;
        }
        ["Recycle"](_0x4cc161) {
          this.scene.children.remove(_0x4cc161);
          this.remove(_0x4cc161, true, false);
          this.spawned.splice(this.spawned.indexOf(_0x4cc161), 0x1);
          var _0x4b16b2 = _0x1d0e6c.Core.Enemies.indexOf(_0x4cc161);
          if (_0x4b16b2 >= 0x0) {
            _0x1d0e6c.Core.Enemies.splice(_0x4b16b2, 0x1);
          }
          _0x1d0e6c.Core.EnemyGroup.remove(_0x4cc161, false);
          this.stored.push(_0x4cc161);
          if (_0x4cc161.owner) {
            _0x4cc161.owner.OnDespawn(_0x4cc161);
          }
        }
        ["Make"]() {
          return new _0x47c6c0(this, 0x0, 0x0, this.enemyType);
        }
      }
      class _0xed14a extends Phaser.GameObjects.Sprite {
        constructor(_0x4c596a) {
          super(_0x4c596a, 0.5 * _0x4c596a.renderer.width, 0.5 * _0x4c596a.renderer.height, "vfx", 'Burst1.png');
          this.setScrollFactor(0x0);
          _0x4c596a.add.existing(this);
          this.sprite1 = _0x4c596a.add.sprite(0x0, 0x0, "vfx", "WhiteDot.png").setScrollFactor(0x0).setScale(_0x4c596a.renderer.width, _0x4c596a.renderer.height).setAlpha(0x0).setOrigin(0x0).setDepth(0x2710);
          this.tween1 = this.scene.tweens.add({
            'targets': this.sprite1,
            'alpha': 0x1,
            'duration': 0x64,
            'yoyo': true,
            'ease': "Linear"
          });
          const _0x985e17 = this.anims.generateFrameNames("vfx", {
            'start': 0x1,
            'end': 0x6,
            'zeroPad': 0x0,
            'prefix': "Burst",
            'suffix': ".png"
          });
          this.anims.create({
            'key': "enter",
            'frames': _0x985e17,
            'frameRate': 0x1e,
            'repeat': 0x0
          });
          this.visible = true;
          this.setScale(0x8);
          this.setDepth(0x2710);
          this.blendMode = _0x2d874d.BlendModes.ADD;
        }
        ["_dispose"]() {
          this.scene.tweens.remove(this.tween1);
          this.destroy();
          this.sprite1.destroy();
        }
        ["Play"]() {
          this.tween1.restart();
          this.play("enter");
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Rosary, {
            'volume': 0x2,
            'rate': 0x2
          });
        }
      }
      class _0x512871 {
        static ["ForceResize"](_0x470552, _0x2655c5 = devicePixelRatio) {
          const _0x25dc63 = Math.round(window.innerWidth * Math.min(devicePixelRatio, _0x2655c5));
          const _0x471493 = Math.round(window.innerHeight * Math.min(devicePixelRatio, _0x2655c5));
          _0x470552.scale.parent.width = Math.round(window.innerWidth);
          _0x470552.scale.parent.height = Math.round(window.innerHeight);
          _0x470552.scale.canvas.width = _0x25dc63;
          _0x470552.scale.canvas.height = _0x471493;
          _0x470552.scale.canvas.style.width = Math.round(window.innerWidth) + 'px';
          _0x470552.scale.canvas.style.height = Math.round(window.innerHeight) + 'px';
        }
        static ["LerpColor"](_0x4cea4d, _0x1bdcda, _0x1fab01) {
          var _0x272933 = _0x4cea4d >> 0x10;
          var _0x1bb269 = _0x4cea4d >> 0x8 & 0xff;
          var _0x1965bd = 0xff & _0x4cea4d;
          return 16777216 + (_0x272933 + _0x1fab01 * ((_0x1bdcda >> 0x10) - _0x272933) << 0x10) + (_0x1bb269 + _0x1fab01 * ((_0x1bdcda >> 0x8 & 0xff) - _0x1bb269) << 0x8) + (_0x1965bd + _0x1fab01 * ((0xff & _0x1bdcda) - _0x1965bd)) | 0x0;
        }
      }
      _0x512871.CalculateAndSetContainerSize = function (_0x2975ce) {
        var _0x41acb5 = _0x2975ce.scene.renderer.height;
        var _0x2f5ea5 = 0x0;
        var _0x3b79b3 = _0x2975ce.scene.renderer.width;
        var _0x4ee504 = 0x0;
        _0x2975ce.iterate(_0x4a3080 => {
          var _0x147324 = _0x4a3080.x;
          var _0x381572 = _0x4a3080.y;
          var _0x5a2758 = _0x4a3080.displayWidth;
          var _0x88dceb = _0x4a3080.displayHeight;
          var _0x395f1d = _0x381572 - _0x88dceb * _0x4a3080.originY;
          var _0x40e907 = _0x381572 + _0x88dceb * (0x1 - _0x4a3080.originY);
          var _0x47bf91 = _0x147324 - _0x5a2758 * _0x4a3080.originX;
          var _0x383617 = _0x147324 + _0x5a2758 * (0x1 - _0x4a3080.originY);
          if (_0x40e907 > _0x2f5ea5) {
            _0x2f5ea5 = _0x40e907;
          }
          if (_0x395f1d < _0x41acb5) {
            _0x41acb5 = _0x395f1d;
          }
          if (_0x47bf91 < _0x3b79b3) {
            _0x3b79b3 = _0x47bf91;
          }
          if (_0x383617 > _0x4ee504) {
            _0x4ee504 = _0x383617;
          }
        });
        var _0x5d36d0 = Math.abs(_0x41acb5 - _0x2f5ea5);
        var _0xe4cb9a = Math.abs(_0x4ee504 - _0x3b79b3);
        _0x2975ce.setSize(_0xe4cb9a, _0x5d36d0);
      };
      class _0x103179 {
        constructor(_0x19d6a8, _0x2a3f39) {
          this.scene = _0x19d6a8;
          this.stage = _0x2a3f39;
        }
        ["TriggerEvent"](_0x13ad62) {
          let _0x2ad006 = _0x13ad62.eventType;
          let _0x589fb8 = _0x13ad62.delay;
          let _0x3f2c34 = _0x13ad62.chance;
          let _0x2b24f0 = _0x13ad62.repeat;
          let _0x2176ae = _0x13ad62.duration;
          if (_0x589fb8) {
            _0x1d0e6c.Core.scene.time.addEvent({
              'delay': _0x589fb8,
              'loop': false,
              'repeat': _0x2b24f0,
              'callback': () => {
                this.TriggerSwitchEvent(_0x2ad006, _0x3f2c34, _0x2176ae);
              }
            }).name = "trigger event";
          } else {
            this.TriggerSwitchEvent(_0x2ad006, _0x3f2c34, _0x2176ae);
          }
        }
        ['TriggerSwitchEvent'](_0x416384, _0x3780e0, _0x1279bf = 0x0) {
          var _0x4269f0;
          var _0x34a6f6 = null === (_0x4269f0 = _0x1d0e6c.Core.Player) || undefined === _0x4269f0 ? undefined : _0x4269f0.luck;
          if (undefined === _0x34a6f6) {
            _0x34a6f6 = 0x1;
          }
          if (!(_0x3780e0 && 0x64 * Math.random() > _0x3780e0 * (0x1 / _0x34a6f6))) {
            switch (_0x416384) {
              case _0x3041ae.JELLY_WALL:
                this.PlayJellyfish(_0x1279bf);
                break;
              case _0x3041ae.FLOWER_WALL:
                this.PlayFlower(_0x1279bf);
                break;
              case _0x3041ae.BAT_SWARM:
                this.PlayBatSwarm(_0x1279bf);
                break;
              case _0x3041ae.GHOST_SWARM:
                this.PlayGhostSwarm(_0x1279bf);
                break;
              case _0x3041ae.ERASE_ENEMIES:
                this.PlayEraseEnemies();
            }
          }
        }
        ["PlayJellyfish"](_0x3d2e05) {
          _0x3d2e05 = _0x3d2e05 || 0xea60;
          var _0x2c0fbf = this.stage.pools.find(_0x57c901 => _0x57c901.enemyType === _0x433cce.JELLYFISH);
          if (!_0x2c0fbf) {
            _0x2c0fbf = new _0x2843f2(this.scene, _0x433cce.JELLYFISH);
            this.stage.pools.push(_0x2c0fbf);
          }
          _0x2c0fbf.enabled = false;
          let _0x421837 = 0x2 * Math.PI * Math.random();
          let _0x5c5f56 = new Array();
          for (let _0x41d508 = 0x0; _0x41d508 < 0x64; _0x41d508++) {
            let _0x5b8055 = _0x1d0e6c.Core.Player.x + 0.8 * Math.cos(_0x421837) * (0.9 * this.scene.renderer.width);
            let _0x4d5900 = _0x1d0e6c.Core.Player.y + 0.8 * Math.sin(_0x421837) * (0.9 * this.scene.renderer.height);
            _0x421837 += Math.PI / 0x32;
            let _0x2cd209 = _0x2c0fbf.SpawnAt(_0x5b8055, _0x4d5900);
            _0x2cd209.isCullable = false;
            _0x5c5f56.push(_0x2cd209);
          }
          _0x1d0e6c.Core.scene.time.addEvent({
            'delay': _0x3d2e05,
            'loop': false,
            'callback': () => {
              _0x5c5f56.forEach(_0x5242b3 => {
                if (!_0x5242b3.isDead) {
                  _0x5242b3.Disappear();
                }
              });
            }
          }).name = "Jellyfish disappear";
        }
        ["PlayFlower"](_0x2c348d) {
          _0x2c348d = _0x2c348d || 0xea60;
          var _0x485724 = this.stage.pools.find(_0x8cb7c1 => _0x8cb7c1.enemyType === _0x433cce.FLOWER);
          if (!_0x485724) {
            _0x485724 = new _0x2843f2(this.scene, _0x433cce.FLOWER);
            this.stage.pools.push(_0x485724);
          }
          _0x485724.enabled = false;
          let _0xa977e5 = 0x2 * Math.PI * Math.random();
          let _0x1e433d = new Array();
          for (let _0xd15cb0 = 0x0; _0xd15cb0 < 0x64; _0xd15cb0++) {
            let _0x440428 = _0x1d0e6c.Core.Player.x + 0.8 * Math.cos(_0xa977e5) * (0.9 * this.scene.renderer.width);
            let _0x441ee8 = _0x1d0e6c.Core.Player.y + 0.8 * Math.sin(_0xa977e5) * (0.9 * this.scene.renderer.height);
            _0xa977e5 += Math.PI / 0x32;
            let _0x2f976b = _0x485724.SpawnAt(_0x440428, _0x441ee8);
            _0x2f976b.isCullable = false;
            _0x1e433d.push(_0x2f976b);
          }
          _0x1d0e6c.Core.scene.time.addEvent({
            'delay': _0x2c348d,
            'loop': false,
            'callback': () => {
              _0x1e433d.forEach(_0x143d95 => {
                if (!_0x143d95.isDead) {
                  _0x143d95.Disappear();
                }
              });
            }
          }).name = "flower disappear";
        }
        ['PlayBatSwarm'](_0x13d842) {
          _0x13d842 = _0x13d842 || 0x2710;
          var _0x2738cb = this.stage.pools.find(_0x58cf89 => _0x58cf89.enemyType === _0x433cce.BATSWARM);
          if (!_0x2738cb) {
            _0x2738cb = new _0x2843f2(this.scene, _0x433cce.BATSWARM);
            this.stage.pools.push(_0x2738cb);
          }
          _0x2738cb.enabled = false;
          let _0x308e00 = 0x2 * Math.PI * Math.random();
          let _0xd17244 = new Array();
          for (let _0x5c7a1c = 0x0; _0x5c7a1c < 0x32; _0x5c7a1c++) {
            let _0x299b0b = _0x1d0e6c.Core.Player.x + 0.8 * Math.cos(_0x308e00) * (0.9 * this.scene.renderer.width);
            let _0x56e485 = _0x1d0e6c.Core.Player.y + 0.8 * Math.sin(_0x308e00) * (0.9 * this.scene.renderer.height);
            _0x308e00 += Math.PI / 0x1f4;
            let _0x4f40b4 = _0x2738cb.SpawnAt(_0x299b0b, _0x56e485);
            _0x4f40b4.isCullable = false;
            _0xd17244.push(_0x4f40b4);
          }
          _0x1d0e6c.Core.scene.time.addEvent({
            'delay': _0x13d842,
            'loop': false,
            'callback': () => {
              _0xd17244.forEach(_0x392e6a => {
                if (!_0x392e6a.isDead) {
                  _0x392e6a.Disappear();
                }
              });
            }
          }).name = "batswarm disappear";
        }
        ["PlayGhostSwarm"](_0x273439) {
          _0x273439 = _0x273439 || 0x2710;
          var _0x93ee13 = this.stage.pools.find(_0x146a66 => _0x146a66.enemyType === _0x433cce.GHOSTSWARM);
          if (!_0x93ee13) {
            _0x93ee13 = new _0x2843f2(this.scene, _0x433cce.GHOSTSWARM);
            this.stage.pools.push(_0x93ee13);
          }
          _0x93ee13.enabled = false;
          let _0x2aad25 = 0x2 * Math.PI * Math.random();
          let _0x11a542 = new Array();
          for (let _0x544cfa = 0x0; _0x544cfa < 0x14; _0x544cfa++) {
            let _0x416879 = _0x1d0e6c.Core.Player.x + 0.8 * Math.cos(_0x2aad25) * (0.9 * this.scene.renderer.width);
            let _0x379a22 = _0x1d0e6c.Core.Player.y + 0.8 * Math.sin(_0x2aad25) * (0.9 * this.scene.renderer.height);
            _0x2aad25 += Math.PI / 0x1f4;
            let _0x2b1948 = _0x93ee13.SpawnAt(_0x416879, _0x379a22);
            _0x2b1948.isCullable = false;
            _0x11a542.push(_0x2b1948);
          }
          _0x1d0e6c.Core.scene.time.addEvent({
            'delay': _0x273439,
            'loop': false,
            'callback': () => {
              _0x11a542.forEach(_0x20b727 => {
                if (!_0x20b727.isDead) {
                  _0x20b727.Disappear();
                }
              });
            }
          }).name = "ghostswarm disappear";
        }
        ['PlayEraseEnemies']() {
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
            new _0xed14a(this.scene).Play();
          }
          for (let _0x3e35b1 = 0x0; _0x3e35b1 < _0x1d0e6c.Core.Enemies.length; _0x3e35b1++) {
            const _0x30097e = _0x1d0e6c.Core.Enemies[_0x3e35b1];
            if (!_0x30097e.res_Rosary) {
              _0x30097e.Disappear();
            }
          }
          _0x1d0e6c.Core.BGMan.RunTimeHue = false;
          let _0xd5e548 = 0x0;
          _0x1d0e6c.Core.scene.time.addEvent({
            'delay': 0x64,
            'repeat': 0x14,
            'callback': () => {
              _0xd5e548 += 0.05;
              _0xd5e548 = Math.min(_0xd5e548, 0x1);
              _0x1d0e6c.Core.BGMan.bgtile.setTint(_0x512871.LerpColor(0xffffff, 0x880000, _0xd5e548));
            }
          });
        }
      }
      class _0x4f29bb {
        constructor() {
          this.layers = new Array();
        }
        ['setPos'](_0x4aa5a1, _0x352128) {
          this.layers.forEach(_0x2066e9 => {
            _0x2066e9.x = _0x4aa5a1;
            _0x2066e9.y = _0x352128;
          });
        }
      }
      class _0x2db22b {
        constructor(_0x500de9, _0x533c9c) {
          this._SIZE = 0x800;
          this.test = new Array();
          var _0x48af5a = _0x26e87a[_0x533c9c][0x0];
          let _0x2f9325 = -0x190;
          let _0x1e8e0d = -0x190;
          for (let _0x56a9fe = 0x0; _0x56a9fe < 0x4; _0x56a9fe++) {
            let _0x576ba3 = _0x500de9.make.tilemap({
              'key': _0x48af5a.tileset.mapKey
            });
            let _0x29d47f = _0x576ba3.addTilesetImage(_0x48af5a.tileset.setKey, _0x48af5a.tileset.setKey);
            let _0x70cb8f = new _0x4f29bb();
            _0x70cb8f.layers.push(_0x576ba3.createLayer("Background", _0x29d47f).setDepth(-0x7d0).setPosition(_0x2f9325, _0x1e8e0d));
            _0x70cb8f.layers.push(_0x576ba3.createLayer("Shadows", _0x29d47f).setDepth(0x7d0).setPosition(_0x2f9325, _0x1e8e0d));
            _0x70cb8f.layers.push(_0x576ba3.createLayer('Decals', _0x29d47f).setDepth(-0x7cf).setPosition(_0x2f9325, _0x1e8e0d));
            _0x70cb8f.layers.push(_0x576ba3.createLayer("Walls", _0x29d47f).setDepth(-0x7cf).setCollisionByProperty({
              'collides': true
            }).setPosition(_0x2f9325, _0x1e8e0d));
            _0x70cb8f.layers.push(_0x576ba3.createLayer('Obstacle', _0x29d47f).setDepth(-0x7ce).setCollisionByProperty({
              'collides': true
            }).setPosition(_0x2f9325, _0x1e8e0d));
            _0x70cb8f.layers.push(_0x576ba3.createLayer("Overlay1", _0x29d47f).setDepth(0x1).setPosition(_0x2f9325, _0x1e8e0d));
            this.test.push(_0x70cb8f);
            _0x70cb8f.layers.forEach(_0x335e00 => {
              console.log(_0x335e00.width);
            });
          }
          this.bounds = new Array();
          this.debugSprites = new Array();
          for (let _0x2ec79b = 0x0; _0x2ec79b < 0x4; _0x2ec79b++) {
            this.bounds.push(new Phaser.Geom.Rectangle(this._SIZE * _0x2ec79b, 0x0, this._SIZE, this._SIZE));
          }
          this.pool = new Array();
          this.update();
        }
        ["update"]() {
          let _0x2d089c;
          for (let _0x3852cc = 0x0; _0x3852cc < this.bounds.length; _0x3852cc++) {
            if (this.bounds[_0x3852cc].contains(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y)) {
              _0x2d089c = this.bounds[_0x3852cc];
              this.bounds.splice(_0x3852cc, 0x1);
              break;
            }
          }
          let _0xf0fed2 = _0x1d0e6c.Core.Player.x < _0x2d089c.x + 0.5 * _0x2d089c.width;
          let _0x4e41c2 = _0x1d0e6c.Core.Player.y < _0x2d089c.y + 0.5 * _0x2d089c.height;
          let _0x534a92 = this.bounds[0x0];
          _0x534a92.y = _0x2d089c.y;
          _0x534a92.x = _0xf0fed2 ? _0x2d089c.x - _0x534a92.width : _0x2d089c.x + _0x2d089c.width;
          _0x534a92 = this.bounds[0x1];
          _0x534a92.x = _0x2d089c.x;
          _0x534a92.y = _0x4e41c2 ? _0x2d089c.y - _0x534a92.height : _0x2d089c.y + _0x2d089c.height;
          _0x534a92 = this.bounds[0x2];
          if (_0x4e41c2 && _0xf0fed2) {
            _0x534a92.x = _0x2d089c.x - _0x534a92.width;
            _0x534a92.y = _0x2d089c.y - _0x534a92.height;
          } else if (_0x4e41c2 && !_0xf0fed2) {
            _0x534a92.x = _0x2d089c.x + _0x2d089c.width;
            _0x534a92.y = _0x2d089c.y - _0x534a92.height;
          } else if (!_0x4e41c2 && _0xf0fed2) {
            _0x534a92.x = _0x2d089c.x - _0x534a92.width;
            _0x534a92.y = _0x2d089c.y + _0x2d089c.height;
          } else if (!(_0x4e41c2 || _0xf0fed2)) {
            _0x534a92.y = _0x2d089c.y + _0x2d089c.height;
            _0x534a92.x = _0x2d089c.x + _0x2d089c.width;
          }
          this.bounds.unshift(_0x2d089c);
          for (let _0x29c759 = 0x0; _0x29c759 < this.test.length; _0x29c759++) {
            this.test[_0x29c759].setPos(this.bounds[_0x29c759].x, this.bounds[_0x29c759].y);
          }
        }
      }
      class _0x22e23a {
        constructor(_0x5264d5, _0x11c7e5) {
          this.levelName = '';
          this.description = '';
          this.minute = 0x0;
          this.frequency = 0x3e8;
          this.pause = 0x0;
          this.startingSpawns = 0x0;
          this.minimum = 0x0;
          this.maximum = 0x1f4;
          this.destructibleType = _0x4b0b3f.BRAZIER;
          this.enemies = new Array();
          this.bosses = new Array();
          this.BGTextureName = '';
          this.minimumMultiplier = 0x1;
          this.maxTreasureLuck = 0x14;
          this.destructibleFreq = 0x2710;
          this.destructibleChance = 0x5;
          this.destructibleChanceMax = 0x32;
          this.maxDestructibles = 0xa;
          this.pools = new Array();
          this.bossPools = new Array();
          this.hasAttachedTreasure = false;
          this.hasTileset = false;
          this.scene = _0x5264d5;
          this.levelType = _0x11c7e5;
          this.stageEventManager = new _0x103179(this.scene, this);
        }
        ["Init"]() {
          this.minute = 0x0;
          var _0xf0f264 = _0x26e87a[this.levelType][this.minute];
          this.spawnType = _0xf0f264.spawnType;
          this.UpdateData(_0xf0f264);
          this.rectOuter = new Phaser.Geom.Rectangle(-0.5 * this.scene.renderer.width - 0x96, -0.5 * this.scene.renderer.height - 0x96, this.scene.renderer.width + 0xc8, this.scene.renderer.height + 0xc8);
          this.rectInner = new Phaser.Geom.Rectangle(-0.5 * this.scene.renderer.width - 0x4b, -0.5 * this.scene.renderer.height - 0x4b, this.scene.renderer.width + 0x64, this.scene.renderer.height + 0x64);
          if (_0x1d0e6c.Core.PlayerOptions.SelectedHyper) {
            _0x34bb1a.PlayerPxSpeed = _0x34bb1a._basePlayerPxSpeed * _0xf0f264.hyper.PlayerPxSpeed;
            _0x34bb1a.EnemySpeed = _0x34bb1a._baseEnemySpeed * _0xf0f264.hyper.EnemySpeed;
            _0x34bb1a.ProjectileSpeed = _0x34bb1a._baseProjectileSpeed * _0xf0f264.hyper.ProjectileSpeed;
            _0x34bb1a.GoldMultiplier = _0x34bb1a._baseGoldMultiplier * _0xf0f264.hyper.GoldMultiplier;
            this.startingSpawns = _0xf0f264.hyper.StartingSpawns;
          } else {
            _0x34bb1a.PlayerPxSpeed = _0x34bb1a._basePlayerPxSpeed;
            _0x34bb1a.EnemySpeed = _0x34bb1a._baseEnemySpeed;
            _0x34bb1a.ProjectileSpeed = _0x34bb1a._baseProjectileSpeed;
            _0x34bb1a.GoldMultiplier = _0x34bb1a._baseGoldMultiplier;
          }
          for (let _0x3e92c2 = 0x0; _0x3e92c2 < this.startingSpawns; _0x3e92c2++) {
            this.SpawnEnemiesInOuterRect();
          }
          if (_0xf0f264.tileset) {
            this.tilingTileset = new _0x2db22b(this.scene, this.levelType);
          }
        }
        ["CheckMinute"]() {
          var _0x2a439a;
          var _0x13ce3b = Math.floor(_0x1d0e6c.Core.SurvivedSeconds / 0x3c);
          if (_0x13ce3b > this.minute && (_0x2a439a = _0x26e87a[this.levelType].find(_0x10dd56 => _0x10dd56.minute === _0x13ce3b))) {
            this.minute = _0x2a439a.minute;
            this.UpdateData(_0x2a439a);
          }
          this.hasAttachedTreasure = false;
          this.SpawnBoss();
        }
        ["UpdateData"](_0x522e82) {
          _0x522e82 = _0x26e87a[this.levelType][this.minute];
          this.events = [];
          this.bosses = [];
          this.treasure = null;
          for (const _0x1163a8 in _0x522e82) if (this.hasOwnProperty(_0x1163a8)) {
            this[_0x1163a8] = _0x522e82[_0x1163a8];
          }
          this.updateEnemyPools();
          this.updateTimers();
          this.playEvents();
        }
        ["playEvents"]() {
          this.events.forEach(_0x1ffd9d => {
            this.stageEventManager.TriggerEvent(_0x1ffd9d);
          });
        }
        ["updateEnemyPools"]() {
          this.pools.forEach(_0x5ab054 => {
            _0x5ab054.enabled = false;
          });
          this.bossPools.forEach(_0x495202 => {
            _0x495202.enabled = false;
          });
          this.enemies.forEach(_0xe6c19a => {
            var _0xbc0ccb = this.pools.find(_0x21422c => _0x21422c.enemyType === _0xe6c19a);
            if (_0xbc0ccb) {
              _0xbc0ccb.enabled = true;
            } else {
              this.pools.push(new _0x2843f2(this.scene, _0xe6c19a));
            }
          });
          this.bosses.forEach(_0x574912 => {
            var _0x23fd96 = this.bossPools.find(_0x26538d => _0x26538d.enemyType === _0x574912);
            if (_0x23fd96) {
              _0x23fd96.enabled = true;
            } else {
              this.bossPools.push(new _0x2843f2(this.scene, _0x574912));
            }
          });
        }
        ["updateTimers"]() {
          if (this.pause) {
            _0x1d0e6c.Core.scene.time.addEvent({
              'delay': this.pause,
              'loop': false,
              'callback': () => {
                this.startTimers();
              }
            }).name = "Spawn Pause";
          } else {
            this.startTimers();
          }
        }
        ["startTimers"]() {
          _0x1d0e6c.Core.scene.time.removeEvent(this.SpawnTimer);
          this.SpawnTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.frequency,
            'loop': true,
            'callback': () => {
              if (this.spawnType === _0x20143d.HORIZONTAL) {
                this.SpawnEnemiesHorizontal();
              } else {
                this.SpawnEnemiesInOuterRect();
              }
            }
          });
          this.SpawnTimer.name = "Spawn Timer";
          _0x1d0e6c.Core.scene.time.removeEvent(this.DestructibleTimer);
          this.DestructibleTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': this.destructibleFreq,
            'loop': true,
            'callback': () => {
              this.SpawnDestructibleOutOfSight();
            }
          });
          this.DestructibleTimer.name = "Desct Timer";
        }
        ["SpawnDestructibleOutOfSight"]() {
          if (0x64 * Math.random() <= Math.min(this.destructibleChance * _0x1d0e6c.Core.Player.luck, this.destructibleChanceMax)) {
            _0x1d0e6c.Core.MakeDestructible(this.destructibleType);
          }
        }
        ['SpawnBoss']() {
          for (let _0x3969f5 = 0x0; _0x3969f5 < this.bossPools.length; _0x3969f5++) {
            if (!this.bossPools[_0x3969f5].enabled) {
              continue;
            }
            let _0x193d23 = 0x2 * Math.PI * Math.random();
            let _0x5c2367 = 0x100 * Math.random();
            let _0x47e2f5 = _0x1d0e6c.Core.Player.x + 0.9 * Math.cos(_0x193d23) * (this.scene.renderer.width + _0x5c2367);
            let _0x20a112 = _0x1d0e6c.Core.Player.y + 0.9 * Math.sin(_0x193d23) * (this.scene.renderer.height + _0x5c2367);
            var _0x41a706 = this.bossPools[_0x3969f5].SpawnAt(_0x47e2f5, _0x20a112);
            _0x41a706.isTeleportOnCull = true;
            if (!this.hasAttachedTreasure && this.treasure && this.SetTreasureLevelFromChance(this.treasure) > 0x0) {
              this.hasAttachedTreasure = true;
              _0x41a706.AttachTreasure(this.treasure);
            }
          }
        }
        ["SetTreasureLevelFromChance"](_0x1861d4) {
          var _0x46fa78;
          var _0x2580f9 = null === (_0x46fa78 = _0x1d0e6c.Core.Player) || undefined === _0x46fa78 ? undefined : _0x46fa78.luck;
          if (undefined === _0x2580f9) {
            _0x2580f9 = 0x1;
          }
          return 0x64 * Math.random() <= _0x1861d4.chances[0x0] * _0x2580f9 ? (_0x1861d4.level = 0x3, 0x3) : 0x64 * Math.random() <= _0x1861d4.chances[0x1] * _0x2580f9 ? (_0x1861d4.level = 0x2, 0x2) : 0x64 * Math.random() <= _0x1861d4.chances[0x2] * _0x2580f9 ? (_0x1861d4.level = 0x1, 0x1) : 0x0;
        }
        ['SpawnEnemiesOutOfSight']() {
          if (!(_0x1d0e6c.Core.IsTimeStopped || _0x1d0e6c.Core.Enemies.length >= this.maximum)) {
            for (let _0x294b4d = 0x0; _0x294b4d < this.pools.length; _0x294b4d++) {
              if (!this.pools[_0x294b4d].enabled) {
                continue;
              }
              let _0x38e7b9 = 0x2 * Math.PI * Math.random();
              let _0xf52fea = 0x100 * Math.random();
              let _0x3e9172 = _0x1d0e6c.Core.Player.x + 0.9 * Math.cos(_0x38e7b9) * (this.scene.renderer.width + _0xf52fea);
              let _0x1fe5b3 = _0x1d0e6c.Core.Player.y + 0.9 * Math.sin(_0x38e7b9) * (this.scene.renderer.height + _0xf52fea);
              this.pools[_0x294b4d].SpawnAt(_0x3e9172, _0x1fe5b3);
            }
            this.SwarmCheck();
          }
        }
        ["SpawnEnemiesInOuterRect"]() {
          if (_0x1d0e6c.Core.IsTimeStopped) {
            return;
          }
          if (_0x1d0e6c.Core.Enemies.length >= this.maximum) {
            return;
          }
          let _0x4009fb = false;
          for (let _0x5000db = 0x0; _0x5000db < this.pools.length; _0x5000db++) {
            if (!this.pools[_0x5000db].enabled) {
              continue;
            }
            var _0xd9469b = Phaser.Geom.Rectangle.RandomOutside(this.rectOuter, this.rectInner);
            let _0x505a88 = _0x1d0e6c.Core.Player.x + _0xd9469b.x;
            let _0x127ac9 = _0x1d0e6c.Core.Player.y + _0xd9469b.y;
            this.pools[_0x5000db].SpawnAt(_0x505a88, _0x127ac9);
            _0x4009fb = true;
          }
          if (_0x4009fb) {
            this.SwarmCheck();
          }
        }
        ["SpawnEnemiesHorizontal"]() {
          if (!(_0x1d0e6c.Core.IsTimeStopped || _0x1d0e6c.Core.Enemies.length >= this.maximum)) {
            for (var _0x54a7cc = 0x0; _0x1d0e6c.Core.Enemies.length < this.minimum * this.minimumMultiplier && _0x54a7cc < this.maximum;) {
              let _0xd2beff = false;
              for (let _0xab11c = 0x0; _0xab11c < this.pools.length; _0xab11c++) {
                if (!this.pools[_0xab11c].enabled) {
                  continue;
                }
                var _0x487398 = Math.random() < 0.5 ? this.rectOuter.x : this.rectOuter.x + this.rectOuter.width;
                let _0xc50382 = _0x1d0e6c.Core.Player.x + _0x487398;
                let _0x52f80d = _0x1d0e6c.Core.Player.y;
                this.pools[_0xab11c].SpawnAt(_0xc50382, _0x52f80d);
                _0xd2beff = true;
              }
              _0x54a7cc++;
            }
          }
        }
        ["SwarmCheck"]() {
          if (!_0x1d0e6c.Core.IsTimeStopped) {
            for (var _0x4f8bee = 0x0; _0x1d0e6c.Core.Enemies.length < this.minimum * this.minimumMultiplier && _0x4f8bee < this.maximum;) {
              this.SpawnEnemiesInOuterRect();
              _0x4f8bee++;
            }
          }
        }
        ['SpawnAt'](_0x2843d7, _0x80001b, _0x2a8d4e, _0x23865e) {
          if (_0x1d0e6c.Core.IsTimeStopped) {
            return null;
          }
          if (_0x1d0e6c.Core.Enemies.length >= this.maximum) {
            return null;
          }
          let _0x2250d5 = this.pools.find(_0x312db9 => _0x312db9.enemyType === _0x2a8d4e);
          let _0x562dbd = null;
          if (_0x2250d5) {
            _0x562dbd = _0x2250d5.SpawnAt(_0x2843d7, _0x80001b, _0x23865e);
          }
          return _0x562dbd;
        }
        ["Update"](_0x28ce16) {
          var _0x3b2330;
          if (!(null === (_0x3b2330 = this.tilingTileset) || undefined === _0x3b2330)) {
            _0x3b2330.update();
          }
        }
      }
      const _0x4ee0e4 = class {
        constructor(_0x444a16, _0x2d860b = true) {
          this.bulletType = 0x0;
          this.interval = 0x3e8;
          this.repeatInterval = 0x64;
          this.power = 0x1;
          this.area = 0x1;
          this.speed = 0x1;
          this.amount = 0x1;
          this.duration = 0x3e8;
          this.critChance = 0x0;
          this.critMul = 0x2;
          this.intervalDependsOnDuration = false;
          this.charges = 0x0;
          this.seen = false;
          this.addWeapon = null;
          this.isPowerUp = false;
          this.hitBoxDelay = 0x3e8;
          this.level = 0x0;
          this.hitVFX = _0x3677f0.DEFAULT;
          this.knockback = 0x5;
          this.hitsWalls = true;
          this.penetrating = 0x1;
          this.bounces = 0x0;
          this.bulletType = _0x444a16;
          if (_0x2d860b) {
            this.pool = new _0x236e5d(_0x1d0e6c.Core.scene, this.bulletType);
            this.MakeLevelOne();
            this.OnStart();
          }
        }
        get ["PArea"]() {
          return _0x1d0e6c.Core.Player.area * this.area;
        }
        get ["PAmount"]() {
          return _0x1d0e6c.Core.Player.amount + this.amount;
        }
        get ['PPower']() {
          return _0x1d0e6c.Core.Player.power * this.power;
        }
        get ["PSpeed"]() {
          return _0x1d0e6c.Core.Player.speed * this.speed;
        }
        get ["PInterval"]() {
          return Math.max(0.1, _0x1d0e6c.Core.Player.cooldown) * this.interval;
        }
        get ["PDuration"]() {
          return _0x1d0e6c.Core.Player.duration * this.duration;
        }
        ["ActiveBulletCount"]() {
          return this.pool ? this.pool.countActive(true) : 0x0;
        }
        ["OnStart"]() {
          this.ResetFiringTimer();
          _0x1d0e6c.Core.scene.physics.add.overlap(this.pool, _0x1d0e6c.Core.Enemies, this.onBulletOverlapsEnemy.bind(this));
          _0x1d0e6c.Core.scene.physics.add.overlap(this.pool, _0x1d0e6c.Core.Destructibles, this.onBulletOverlapsDestuctible.bind(this));
          if (this.hitsWalls && _0x1d0e6c.Core.Stage.hasTileset) {
            _0x1d0e6c.Core.scene.physics.add.collider(this.pool, _0x22e23a.WallLayer, this.onBulletOverlapsWall.bind(this));
            _0x1d0e6c.Core.scene.physics.add.collider(this.pool, _0x22e23a.ObstacleLayer, this.onBulletOverlapsWall.bind(this));
          }
        }
        ["ResetFiringTimer"]() {
          if (this.firingTimer) {
            this.firingTimer.destroy();
          }
          var _0x3ed490 = this.intervalDependsOnDuration ? this.duration + this.PInterval : this.PInterval;
          this.firingTimer = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': _0x3ed490,
            'loop': true,
            'callback': this.Fire.bind(this)
          });
          this.firingTimer.name = "Firing: " + this.bulletType + " ";
        }
        ['onBulletOverlapsEnemy'](_0x333f83, _0x77eac8) {
          if (!(_0x77eac8.isDead || _0x333f83.HasAlreadyHitObject(_0x77eac8))) {
            _0x77eac8.GetDamaged(this.PPower, this.hitVFX, this.knockback);
          }
        }
        ["onBulletOverlapsWall"](_0x166ef9, _0x5e844c) {
          _0x166ef9.OnHasHitWall(_0x5e844c);
          return false;
        }
        ["onBulletOverlapsDestuctible"](_0x4eb5fd, _0x49ea6) {
          if (!_0x4eb5fd.HasAlreadyHitObject(_0x49ea6)) {
            _0x49ea6.GetDamaged(this.PPower);
          }
        }
        ["Update"](_0x240484 = 0x0) {}
        ["CleanUp"]() {
          var _0x2f982b;
          if (this.firingTimer) {
            this.firingTimer.destroy();
          }
          if (!(null === (_0x2f982b = this.pool) || undefined === _0x2f982b)) {
            _0x2f982b.spawned.forEach(_0x509be8 => {
              _0x509be8.DeSpawn();
            });
          }
        }
        ["Fire"]() {
          this.FireOneBullet(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, 0x0, this.target);
          if (this.PAmount > 0x1) {
            for (let _0x31241a = 0x1; _0x31241a < this.PAmount; _0x31241a++) {
              if (this.repeatInterval * _0x31241a > 0x0) {
                this.lastShotTimer = _0x1d0e6c.Core.scene.time.addEvent({
                  'delay': this.repeatInterval * _0x31241a,
                  'loop': false,
                  'callback': () => {
                    this.FireOneBullet(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, _0x31241a, this.target);
                  }
                });
                this.lastShotTimer.name = "Firing: " + this.bulletType + " ";
              } else {
                this.FireOneBullet(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, _0x31241a, this.target);
              }
            }
          }
        }
        ["FireOneBullet"](_0x34b72e, _0x42bad4, _0x4c6c9d, _0x2cd505) {
          var _0x4e24c0 = this.pool.SpawnAt(_0x34b72e, _0x42bad4, this, _0x4c6c9d);
          if (_0x2cd505) {
            _0x4e24c0.SetTarget(_0x2cd505);
          }
          return _0x4e24c0;
        }
        ["LevelUp"]() {
          let _0x5b9a97 = _0x14b553[this.bulletType][this.level];
          if (!_0x5b9a97) {
            return false;
          }
          for (const _0x92597 in _0x5b9a97) if (this.hasOwnProperty(_0x92597)) {
            this[_0x92597] += _0x5b9a97[_0x92597];
          }
          this.ResetFiringTimer();
          this.level++;
          if (!this.isPowerUp) {
            this.Fire();
          }
          if (null == _0x5b9a97 ? undefined : _0x5b9a97.addEvolvedWeapon) {
            _0x1d0e6c.Core.LevelUpFactory.AddLateWeapon(_0x5b9a97.addEvolvedWeapon);
          }
          return !(undefined === _0x5b9a97);
        }
        ["MakeLevelOne"]() {
          this.level = 0x0;
          let _0x2037d7 = _0x14b553[this.bulletType][this.level];
          for (const _0x31b6af in _0x2037d7) if (this.hasOwnProperty(_0x31b6af)) {
            this[_0x31b6af] = _0x2037d7[_0x31b6af];
          }
          if (_0x2037d7.evolvesFrom) {
            _0x1d0e6c.Core.RemoveWeapon(_0x2037d7.evolvesFrom);
          }
        }
        ["DPS"]() {
          return (this.PPower * this.PAmount * this.penetrating * (this.duration / this.hitBoxDelay) / (this.PInterval / 0x3e8)).toFixed(0x2);
        }
      };
      class _0x45fcf6 extends _0x4ee0e4 {
        constructor(_0x307c7c) {
          super(_0x307c7c, false);
          this.level = 0x0;
          this.power = 0x0;
          this.area = 0x0;
          this.speed = 0x0;
          this.cooldown = 0x0;
          this.amount = 0x0;
          this.maxHp = 0x0;
          this.moveSpeed = 0x0;
          this.growth = 0x0;
          this.magnet = 0x0;
          this.luck = 0x0;
          this.armor = 0x0;
          this.MakeLevelOne();
        }
        ["Apply"]() {
          _0x1d0e6c.Core.Player.power += this.power;
          _0x1d0e6c.Core.Player.area += this.area;
          _0x1d0e6c.Core.Player.speed += this.speed;
          _0x1d0e6c.Core.Player.cooldown += this.cooldown;
          _0x1d0e6c.Core.Player.amount += this.amount;
          _0x1d0e6c.Core.Player.moveSpeed += this.moveSpeed;
          _0x1d0e6c.Core.Player.growth += this.growth;
          _0x1d0e6c.Core.Player.luck += this.luck;
          _0x1d0e6c.Core.Player.armor += this.armor;
          _0x1d0e6c.Core.Player.duration += this.duration;
          _0x1d0e6c.Core.Player.maxHp += _0x1d0e6c.Core.Player.maxHp * this.maxHp;
          if (this.cooldown > 0x0) {
            _0x1d0e6c.Core.ResetWeaponCooldowns();
          }
          if (this.magnet > 0x0) {
            _0x1d0e6c.Core.Magnet.radius += _0x1d0e6c.Core.Magnet.radius * this.magnet;
            _0x1d0e6c.Core.Magnet.RefreshSize();
          }
        }
        ["LevelUp"]() {
          this.resetBonuses();
          return !!super.LevelUp() && (this.Apply(), true);
        }
        ['MakeLevelOne']() {
          this.resetBonuses();
          super.MakeLevelOne();
          if (_0x1d0e6c.Core.Player) {
            this.Apply();
          }
        }
        ["resetBonuses"]() {
          this.power = 0x0;
          this.area = 0x0;
          this.speed = 0x0;
          this.cooldown = 0x0;
          this.amount = 0x0;
          this.maxHp = 0x0;
          this.moveSpeed = 0x0;
          this.growth = 0x0;
          this.magnet = 0x0;
          this.luck = 0x0;
          this.armor = 0x0;
          this.duration = 0x0;
        }
        ['ResetFiringTimer']() {}
      }
      const _0x2c9c78 = class extends _0x4ee0e4 {
        constructor(_0x30c79f) {
          super(_0x30c79f);
        }
      };
      const _0x50573a = class extends _0x4ee0e4 {
        constructor(_0x41977c) {
          super(_0x41977c);
        }
        ["Fire"]() {
          this.target = Phaser.Math.RND.pick(_0x1d0e6c.Core.EnemyGroup.children.entries);
          super.Fire();
        }
      };
      const _0x3a00ce = class extends _0x4ee0e4 {
        constructor(_0x5a8928) {
          super(_0x5a8928);
        }
        ["Fire"]() {
          this.target = Phaser.Math.RND.pick(_0x1d0e6c.Core.EnemyGroup.children.entries);
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.MagicMissile, {
            'detune': 0x0,
            'volume': 0.2
          }, 0xc8, 0xa);
          super.Fire();
        }
      };
      const _0x48d501 = class extends _0x4ee0e4 {
        constructor(_0x13b223) {
          super(_0x13b223);
          this.targetAngles = [];
          this.targetRadii = [];
          this.lastAngleIndex = 0x0;
          this.maxAngles = 0xc;
          this.lasRadiusIndex = 0x0;
          var _0x4fe234 = Math.min(_0x1d0e6c.Core.scene.renderer.width, _0x1d0e6c.Core.scene.renderer.height);
          for (let _0x3148f8 = 0x0; _0x3148f8 < this.maxAngles; _0x3148f8++) {
            this.targetAngles.push(0x2 * Math.PI * _0x3148f8 / this.maxAngles);
            this.targetRadii.push(0.25 * _0x4fe234 + 0.1 * _0x4fe234 * (_0x3148f8 / this.maxAngles));
          }
        }
        ["GetAngle"]() {
          var _0x332abf = (this.lastAngleIndex + 0x1) % this.maxAngles;
          this.lastAngleIndex = _0x332abf;
          return this.targetAngles[_0x332abf];
        }
        ["GetRadius"]() {
          var _0x469cd0 = (this.lasRadiusIndex + 0x1) % this.maxAngles;
          this.lasRadiusIndex = _0x469cd0;
          return this.targetRadii[_0x469cd0];
        }
      };
      const _0x20e87a = class extends _0x4ee0e4 {
        constructor(_0x5c49d4) {
          super(_0x5c49d4);
        }
      };
      const _0x313bdb = class extends _0x4ee0e4 {
        constructor(_0x499574) {
          super(_0x499574);
        }
      };
      const _0x30b3d9 = class extends _0x4ee0e4 {
        constructor(_0x52b318) {
          super(_0x52b318);
        }
      };
      const _0x139186 = class extends _0x4ee0e4 {
        constructor(_0x2d9fae) {
          super(_0x2d9fae);
        }
      };
      const _0x3707c0 = class extends _0x4ee0e4 {
        constructor(_0x18dbe7) {
          super(_0x18dbe7);
        }
      };
      const _0x72d2ea = class extends _0x4ee0e4 {
        constructor(_0x4a48a2) {
          super(_0x4a48a2);
        }
      };
      const _0xb16f2e = class extends _0x4ee0e4 {
        constructor(_0x5a18f5) {
          super(_0x5a18f5);
          this.image = _0x1d0e6c.Core.scene.add.image(0x0, 0x0, 'vfx', "Rings3.png");
          this.image.setBlendMode(_0x2d874d.BlendModes.ADD);
          this.image.setAlpha(0.1);
          this.image.copyPosition(_0x1d0e6c.Core.Player).setScale(0x2 * _0x34bb1a.PixelScale * this.PArea);
          this.imageTween = _0x1d0e6c.Core.scene.add.tween({
            'targets': this.image,
            'alpha': 0.3,
            'loop': true,
            'yoyo': true,
            'loopDelay': 0x64,
            'duration': 0x3e8,
            'ease': "Linear",
            'repeat': -0x1
          });
          this.imageTween2 = _0x1d0e6c.Core.scene.add.tween({
            'targets': this.image,
            'angle': 0x168,
            'loop': true,
            'duration': 0x1770,
            'ease': "Linear",
            'repeat': -0x1
          });
        }
        get ["PAmount"]() {
          return 0x1;
        }
        ["Fire"]() {
          this.image.setScale(0x2 * _0x34bb1a.PixelScale * this.PArea);
          return super.Fire();
        }
        ["Update"]() {
          this.image.copyPosition(_0x1d0e6c.Core.Player);
          this.image.setDepth(_0x1d0e6c.Core.Player.depth - 0.5 * _0x1d0e6c.Core.scene.renderer.height);
        }
        ["CleanUp"]() {
          super.CleanUp();
          this.image.setVisible(false);
          this.image.setActive(false);
          this.image.destroy();
          this.imageTween.stop();
          this.imageTween2.stop();
        }
      };
      const _0x4ebb1c = class extends _0x4ee0e4 {
        constructor(_0x1fda60) {
          super(_0x1fda60);
        }
      };
      const _0x2268bf = class extends _0x4ee0e4 {
        constructor(_0x519ad6) {
          super(_0x519ad6);
        }
        ['Fire']() {
          this.target = Phaser.Math.RND.pick(_0x1d0e6c.Core.EnemyGroup.children.entries);
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.MagicMissile, {
            'detune': 0x0,
            'volume': 0.2
          }, 0xc8, 0xa);
          super.Fire();
        }
      };
      const _0x83efb4 = class extends _0x4ee0e4 {
        constructor(_0x31cdeb) {
          super(_0x31cdeb);
        }
      };
      const _0x5e4fd5 = class extends _0x4ee0e4 {
        constructor(_0x1da18f, _0x4dca47 = false) {
          super(_0x1da18f);
          this.maxCharges = 0x3;
          this.hasThorns = false;
          this.hasThorns = _0x4dca47;
          this.image = _0x1d0e6c.Core.scene.add.image(0x0, 0x0, "vfx", "Shockwave2.png").setAlpha(0.3).setScale(1.25 * _0x34bb1a.PixelScale).copyPosition(_0x1d0e6c.Core.Player).setVisible(false);
          this.imageTween = _0x1d0e6c.Core.scene.add.tween({
            'targets': this.image,
            'alpha': 0.6,
            'loop': true,
            'yoyo': true,
            'loopDelay': 0x64,
            'duration': 0x7d0,
            'ease': "Linear",
            'repeat': -0x1
          });
          this.imageTween2 = _0x1d0e6c.Core.scene.add.tween({
            'targets': this.image,
            'angle': 0x168,
            'loop': true,
            'duration': 0x2ee0,
            'ease': "Linear",
            'repeat': -0x1
          });
          _0x1d0e6c.Core.scene.events.addListener("Player_LostShield", this.CheckColor.bind(this));
        }
        get ["PAmount"]() {
          return 0x1;
        }
        ["OnStart"]() {
          super.OnStart();
          _0x1d0e6c.Core.scene.time.addEvent({
            'delay': 0x1,
            'loop': false,
            'callback': this.Fire.bind(this)
          });
        }
        ["Fire"]() {
          if (_0x1d0e6c.Core.Player.shields < this.charges && _0x1d0e6c.Core.Player.shields < this.maxCharges) {
            _0x1d0e6c.Core.Player.shields += 0x1;
          }
          this.CheckColor();
          if (this.hasThorns) {
            return super.Fire();
          }
        }
        ['CheckColor']() {
          this.image.setVisible(true);
          switch (_0x1d0e6c.Core.Player.shields) {
            default:
            case 0x0:
              this.image.setVisible(false);
              break;
            case 0x1:
              this.image.setTint(0x8888ff);
              break;
            case 0x2:
              this.image.setTint(0x88ff88);
              break;
            case 0x3:
              this.image.setTint(0xffff00);
          }
        }
        ["Update"]() {
          this.image.copyPosition(_0x1d0e6c.Core.Player);
          this.image.y -= 0x10;
          this.image.setDepth(_0x1d0e6c.Core.Player.depth - 0.5 * _0x1d0e6c.Core.scene.renderer.height);
        }
        ["CleanUp"]() {
          super.CleanUp();
          this.image.setVisible(false);
          this.image.setActive(false);
          this.image.destroy();
          this.imageTween.stop();
          this.imageTween2.stop();
        }
      };
      const _0x50c4aa = class extends _0x5e4fd5 {
        get ["PArea"]() {
          return 1.1;
        }
        constructor(_0x3cae60) {
          super(_0x3cae60, true);
        }
      };
      const _0x3d77bf = class extends _0x4ee0e4 {
        constructor(_0x597dfe) {
          super(_0x597dfe);
          this.ticks = 0x8;
          this.targets = new Array();
          this.angles = new Array();
          for (let _0x2e484f = 0x0; _0x2e484f < 0xc; _0x2e484f++) {
            var _0x2aa606 = _0x2e484f / 0xc * (0x2 * Math.PI);
            this.targets.push({
              'x': Math.cos(_0x2aa606),
              'y': Math.sin(_0x2aa606)
            });
            this.angles.push(_0x2aa606);
          }
          this.image = _0x1d0e6c.Core.scene.add.sprite(0x0, 0x0, 'vfx', "Pierce1.png");
          this.image.copyPosition(_0x1d0e6c.Core.Player).setOrigin(0x0, 0.5).setVisible(false).setTint(0xcceeff).setScale(0x2, 0x1);
          this.imageTween = _0x1d0e6c.Core.scene.add.tween({
            'targets': this.image,
            'alpha': 0x0,
            'delay': 0xc8,
            'duration': 0x1f4,
            'ease': "Linear"
          });
          const _0x11f2e8 = this.image.anims.generateFrameNames("vfx", {
            'start': 0x1,
            'end': 0x5,
            'zeroPad': 0x0,
            'prefix': "Pierce",
            'suffix': ".png"
          });
          this.image.anims.create({
            'key': "pierce",
            'frames': _0x11f2e8,
            'frameRate': 0x1e
          });
        }
        get ["PAmount"]() {
          return 0x6;
        }
        ["Fire"]() {
          this.ticks++;
          if (this.ticks >= 0xc) {
            this.ticks = 0x0;
          }
          this.target = this.targets[this.ticks];
          this.imageTween.restart();
          this.image.copyPosition(_0x1d0e6c.Core.Player).setAngle(Phaser.Math.RadToDeg(this.angles[this.ticks])).setVisible(true).setDepth(this.image.scene.renderer.height);
          this.image.anims.play("pierce");
          for (let _0x2e24e2 = 0x0; _0x2e24e2 < this.PAmount; _0x2e24e2++) {
            this.FireOneLancet(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, _0x2e24e2, this.target, this.angles[this.ticks]);
          }
        }
        ['FireOneLancet'](_0x1995b1, _0x441b17, _0x3aa9bd, _0x3f8fd0, _0x71720d) {
          super.FireOneBullet(_0x1995b1, _0x441b17, _0x3aa9bd, _0x3f8fd0).setAngle(Phaser.Math.RadToDeg(_0x71720d));
        }
      };
      const _0x4df620 = class extends _0x4ee0e4 {
        constructor(_0x51147c) {
          super(_0x51147c);
        }
      };
      const _0x57f2a0 = class extends _0x4ee0e4 {
        constructor(_0x347fbe) {
          super(_0x347fbe);
          this.AreaRectangles = [new Phaser.Geom.Rectangle(0x0, 0x0, _0x1d0e6c.Core.scene.renderer.width, 0.45 * _0x1d0e6c.Core.scene.renderer.height), new Phaser.Geom.Rectangle(0x0, 0x0, 0.45 * _0x1d0e6c.Core.scene.renderer.width, 0.7 * _0x1d0e6c.Core.scene.renderer.height), new Phaser.Geom.Rectangle(0x0, 0x0, 0.45 * _0x1d0e6c.Core.scene.renderer.width, 0.7 * _0x1d0e6c.Core.scene.renderer.height)];
        }
      };
      const _0x381d6f = class extends _0x4ee0e4 {
        constructor(_0x18d515) {
          super(_0x18d515);
          this.targets = new Array();
          this.damageZoneDistance = 0x96;
          this.totalTime = 0x0;
          this.enemyIndex = 0x0;
          this.damageZoneDefaultRadius = 0x32;
          this.blockFire = false;
          this.angleTime = 0x0;
          this.delayBasedOnDuration = 0x1;
          this.rayDuration = 0x1f4;
          this._currentDirection = new Phaser.Math.Vector2(0x0, 0x0);
          this.damageZoneDistance = _0x572c9f ? 0x156 : 0x1c8;
          this.damageZoneDistance *= 0.5;
          this.damageZoneDefaultRadius = 0.25 * this.damageZoneDistance;
          this.damageZoneDistance -= this.damageZoneDefaultRadius;
          this.damageZone = _0x1d0e6c.Core.scene.add.circle(0x0, 0x0, this.damageZoneDefaultRadius).setStrokeStyle(0x2, 0xffff00).setVisible(false);
          this.targetZone = _0x1d0e6c.Core.scene.add.circle(0x0, 0x0, this.damageZoneDefaultRadius).setStrokeStyle(0x1, 0x8888ff).setAlpha(0.5);
          this.circle = new Phaser.Geom.Circle(0x0, 0x0, this.damageZoneDefaultRadius);
          this.sprite = new Phaser.Physics.Arcade.Sprite(_0x1d0e6c.Core.scene, _0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, "vfx", 'ProjectileBird2.png');
          _0x1d0e6c.Core.scene.add.existing(this.sprite);
          _0x1d0e6c.Core.scene.physics.add.existing(this.sprite);
          const _0x1ea8d2 = this.sprite.anims.generateFrameNames("vfx", {
            'start': 0x1,
            'end': 0x2,
            'zeroPad': 0x0,
            'prefix': 'ProjectileBird',
            'suffix': ".png"
          });
          this.sprite.anims.create({
            'key': "idle",
            'frames': _0x1ea8d2,
            'frameRate': 0x6,
            'repeat': -0x1
          });
          this.sprite.anims.play('idle');
          this.sprite.setDepth(Number.MAX_SAFE_INTEGER - 0x3e7);
        }
        ["Fire"]() {
          if (!this.blockFire) {
            this.repeatInterval = this.interval / this.PAmount;
            this.damageZone.radius = this.damageZoneDefaultRadius;
            this.targets = [];
            this.circle.x = this.damageZone.x;
            this.circle.y = this.damageZone.y;
            this.circle.radius = this.damageZone.radius;
            for (let _0x3ac169 = 0x0; _0x3ac169 < 0xc; _0x3ac169++) {
              this.targets.push(Phaser.Geom.Circle.Random(this.circle));
            }
            super.Fire();
          }
        }
        ["Update"](_0x39a95c) {
          this.totalTime += _0x39a95c;
          this.angleTime += _0x39a95c;
          var _0x5dda6b = _0x1d0e6c.Core.Player.flipX ? 0x18 : -0x18;
          if (Phaser.Math.Distance.Squared(this.sprite.x, this.sprite.y, _0x1d0e6c.Core.Player.x + _0x5dda6b, _0x1d0e6c.Core.Player.y) > 0x1388) {
            this._currentDirection.x = _0x1d0e6c.Core.Player.x + _0x5dda6b - this.sprite.x;
            this._currentDirection.y = _0x1d0e6c.Core.Player.y - 0x18 - this.sprite.y;
            this._currentDirection.normalize();
            this.sprite.setFlipX(this._currentDirection.x < 0x0);
            this.sprite.setVelocity(0x46 * this._currentDirection.x, 0x46 * this._currentDirection.y);
          } else {
            this.sprite.setVelocity(0x23 * this._currentDirection.x, 0x23 * this._currentDirection.y);
          }
          var _0x46cdd0 = 0.001 * (this.angleTime - this.rayDuration) * this.PSpeed;
          this.targetZone.x = _0x1d0e6c.Core.Player.x + Math.cos(_0x46cdd0) * this.damageZoneDistance;
          this.targetZone.y = _0x1d0e6c.Core.Player.y + Math.sin(_0x46cdd0) * this.damageZoneDistance;
          _0x46cdd0 = 0.001 * this.angleTime * this.PSpeed;
          this.damageZone.x = _0x1d0e6c.Core.Player.x + Math.cos(_0x46cdd0) * this.damageZoneDistance;
          this.damageZone.y = _0x1d0e6c.Core.Player.y + Math.sin(_0x46cdd0) * this.damageZoneDistance;
          if (this.totalTime >= this.PDuration) {
            this.totalTime = -this.PDuration * this.delayBasedOnDuration * _0x1d0e6c.Core.Player.cooldown;
            this.blockFire = true;
            this.targetZone.alpha = 0x0;
          } else if (this.totalTime > 0x0) {
            this.blockFire = false;
            this.targetZone.alpha = 0.5;
          }
        }
      };
      const _0x3aa503 = class extends _0x4ee0e4 {
        constructor(_0x6c9070) {
          super(_0x6c9070);
          this.targets = new Array();
          this.damageZoneDistance = 0x96;
          this.totalTime = 0x0;
          this.enemyIndex = 0x0;
          this.damageZoneDefaultRadius = 0x32;
          this.blockFire = false;
          this.angleTime = 0x0;
          this.delayBasedOnDuration = 0x1;
          this.rayDuration = 0x1f4;
          this._currentDirection = new Phaser.Math.Vector2(0x0, 0x0);
          this.damageZoneDistance = _0x572c9f ? 0x156 : 0x1c8;
          this.damageZoneDistance *= 0.5;
          this.damageZoneDefaultRadius = 0.25 * this.damageZoneDistance;
          this.damageZoneDistance -= this.damageZoneDefaultRadius;
          this.damageZone = _0x1d0e6c.Core.scene.add.circle(0x0, 0x0, this.damageZoneDefaultRadius).setStrokeStyle(0x2, 0xffff00).setVisible(false);
          this.targetZone = _0x1d0e6c.Core.scene.add.circle(0x0, 0x0, this.damageZoneDefaultRadius).setStrokeStyle(0x1, 0xff88ff).setAlpha(0.5);
          this.circle = new Phaser.Geom.Circle(0x0, 0x0, this.damageZoneDefaultRadius);
          this.sprite = new Phaser.Physics.Arcade.Sprite(_0x1d0e6c.Core.scene, _0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, "vfx", "ProjectileBird4.png");
          _0x1d0e6c.Core.scene.add.existing(this.sprite);
          _0x1d0e6c.Core.scene.physics.add.existing(this.sprite);
          const _0x5d4296 = this.sprite.anims.generateFrameNames("vfx", {
            'start': 0x4,
            'end': 0x5,
            'zeroPad': 0x0,
            'prefix': "ProjectileBird",
            'suffix': ".png"
          });
          this.sprite.anims.create({
            'key': 'idle',
            'frames': _0x5d4296,
            'frameRate': 0x6,
            'repeat': -0x1
          });
          this.sprite.anims.play('idle');
          this.sprite.setDepth(Number.MAX_SAFE_INTEGER - 0x3e7);
        }
        ['Fire']() {
          if (!this.blockFire) {
            this.repeatInterval = this.interval / this.PAmount;
            this.damageZone.radius = this.damageZoneDefaultRadius;
            this.targets = [];
            this.circle.x = this.damageZone.x;
            this.circle.y = this.damageZone.y;
            this.circle.radius = this.damageZone.radius;
            for (let _0x52c6a8 = 0x0; _0x52c6a8 < 0xc; _0x52c6a8++) {
              this.targets.push(Phaser.Geom.Circle.Random(this.circle));
            }
            super.Fire();
          }
        }
        ["Update"](_0x412229) {
          this.totalTime += _0x412229;
          this.angleTime += _0x412229;
          var _0x5e4fd6 = _0x1d0e6c.Core.Player.flipX ? -0x18 : 0x18;
          if (Phaser.Math.Distance.Squared(this.sprite.x, this.sprite.y, _0x1d0e6c.Core.Player.x + _0x5e4fd6, _0x1d0e6c.Core.Player.y) > 0x1388) {
            this._currentDirection.x = _0x1d0e6c.Core.Player.x + _0x5e4fd6 - this.sprite.x;
            this._currentDirection.y = _0x1d0e6c.Core.Player.y - 0x18 - this.sprite.y;
            this._currentDirection.normalize();
            this.sprite.setFlipX(this._currentDirection.x < 0x0);
            this.sprite.setVelocity(0x46 * this._currentDirection.x, 0x46 * this._currentDirection.y);
          } else {
            this.sprite.setVelocity(0x23 * this._currentDirection.x, 0x23 * this._currentDirection.y);
          }
          var _0x351f01 = 0.001 * (this.angleTime - this.rayDuration) * this.PSpeed;
          this.targetZone.x = _0x1d0e6c.Core.Player.x + Math.cos(-_0x351f01) * this.damageZoneDistance;
          this.targetZone.y = _0x1d0e6c.Core.Player.y + Math.sin(-_0x351f01) * this.damageZoneDistance;
          _0x351f01 = 0.001 * this.angleTime * this.PSpeed;
          this.damageZone.x = _0x1d0e6c.Core.Player.x + Math.cos(-_0x351f01) * this.damageZoneDistance;
          this.damageZone.y = _0x1d0e6c.Core.Player.y + Math.sin(-_0x351f01) * this.damageZoneDistance;
          if (this.totalTime >= this.PDuration) {
            this.totalTime = -this.PDuration * this.delayBasedOnDuration * _0x1d0e6c.Core.Player.cooldown;
            this.blockFire = true;
            this.targetZone.alpha = 0x0;
          } else if (this.totalTime > 0x0) {
            this.blockFire = false;
            this.targetZone.alpha = 0.5;
          }
        }
      };
      const _0x868f25 = class extends _0x4ee0e4 {
        constructor(_0x2f726d) {
          super(_0x2f726d);
          this.chance = 0x0;
          this.scene = _0x1d0e6c.Core.scene;
          this.graphics_Bad = _0x1d0e6c.Core.scene.add.graphics().fillStyle(0x550044, 0.5).fillCircle(0x0, 0x0, 0x7).setBlendMode(_0x2d874d.BlendModes.ADD).setVisible(false).setPosition(0.5 * this.scene.renderer.width, 0.5 * this.scene.renderer.height).setDepth(_0x34bb1a.ZDamageNumber + 0x1);
          this.graphics_Good = _0x1d0e6c.Core.scene.add.graphics().fillStyle(0xee, 0.35).fillCircle(0x0, 0x0, 0x7).setBlendMode(_0x2d874d.BlendModes.ADD).setVisible(false).setPosition(0.5 * this.scene.renderer.width, 0.5 * this.scene.renderer.height).setDepth(_0x34bb1a.ZDamageNumber + 0x1);
          this.rt = _0x1d0e6c.Core.scene.make.renderTexture({
            'x': -0x2710,
            'y': -0x2710,
            'width': this.scene.renderer.width,
            'height': this.scene.renderer.height
          });
          this.rt.setOrigin(0.5);
          this.rt.saveTexture('rt_pentagram');
          this.canvas = this.scene.add.rexShatterImage(0x0, 0x0, "rt_pentagram");
          this.canvas.setDepth(_0x34bb1a.ZDamageNumber + 0x6);
          this.outline = new Phaser.GameObjects.Image(this.scene, 0x0, 0x0, 'vfx', 'outer0.png').setOrigin(0.5).setPosition(0.5 * this.scene.renderer.width, 0.5 * this.scene.renderer.height).setDepth(_0x34bb1a.ZDamageNumber + 0x2);
          this.center = new Phaser.GameObjects.Image(this.scene, 0x0, 0x0, 'vfx', 'center.png').setOrigin(0.5).setPosition(0.5 * this.scene.renderer.width, 0.5 * this.scene.renderer.height).setDepth(_0x34bb1a.ZDamageNumber + 0x3);
          this.inner = new Phaser.GameObjects.Image(this.scene, 0x0, 0x0, "vfx", "inner1.png").setOrigin(0.5).setPosition(0.5 * this.scene.renderer.width, 0.5 * this.scene.renderer.height).setDepth(_0x34bb1a.ZDamageNumber + 0x4);
          this.outer = new Phaser.GameObjects.Image(this.scene, 0x0, 0x0, "vfx", "outer1.png").setOrigin(0.5).setPosition(0.5 * this.scene.renderer.width, 0.5 * this.scene.renderer.height).setDepth(_0x34bb1a.ZDamageNumber + 0x5);
          this.whiteDot = this.scene.add.sprite(0x0, 0x0, "vfx", "WhiteDot.png").setScrollFactor(0x0).setScale(this.scene.renderer.width, this.scene.renderer.height).setAlpha(0x0).setOrigin(0x0).setDepth(0x1388);
        }
        ["Fire"]() {
          super.Fire();
          this.whiteDot.setAlpha(0x0).setTint(0xffffff);
          if (this.whiteTween) {
            this.whiteTween.stop();
            this.whiteTween = null;
          }
          if (this.blackTween) {
            this.blackTween.stop();
            this.blackTween = null;
          }
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
            this.whiteTween = this.scene.tweens.add({
              'targets': this.whiteDot,
              'alpha': 0.5,
              'duration': 0x64,
              'yoyo': true,
              'ease': "Linear"
            });
            this.blackTween = this.scene.tweens.add({
              'targets': this.whiteDot,
              'tint': 0x0,
              'duration': 0x32,
              'yoyo': true,
              'ease': 'Linear'
            });
          }
        }
        ["LevelUp"]() {
          let _0x3e1d03 = super.LevelUp();
          this.whiteDot.setAlpha(0x0).setTint(0xffffff);
          if (_0x3e1d03) {
            switch (this.level) {
              case 0x3:
                this.outer.setTexture("vfx", "outer2.png");
                break;
              case 0x4:
                this.inner.setTexture("vfx", "inner2.png");
                break;
              case 0x6:
                this.outer.setTexture("vfx", "outer3.png");
                break;
              case 0x7:
                this.inner.setTexture("vfx", "inner3.png");
            }
          }
          return _0x3e1d03;
        }
        ['MakeLevelOne']() {
          super.MakeLevelOne();
          _0x1d0e6c.Core.scene.time.addEvent({
            'callback': () => {
              this.Fire();
            },
            'delay': 0x64
          });
        }
      };
      const _0x32bfa8 = class extends _0x4ee0e4 {
        constructor(_0x496bfc) {
          super(_0x496bfc);
        }
        ["onBulletOverlapsEnemy"](_0xa2b8f0, _0x49fe14) {
          if (_0x49fe14.isDead) {
            return;
          }
          let _0x4df25c = Math.random() < this.critChance * _0x1d0e6c.Core.Player.luck ? this.critMul : 0x1;
          if (!_0xa2b8f0.HasAlreadyHitObject(_0x49fe14)) {
            _0x49fe14.GetDamaged(this.PPower * _0x4df25c, this.hitVFX, this.knockback);
          }
        }
      };
      const _0x2e9260 = class extends _0x4ee0e4 {
        constructor(_0x3baa6b) {
          super(_0x3baa6b);
          this.canHeal = true;
          this.healDelay = 0x3e8;
        }
        ["onBulletOverlapsEnemy"](_0xaca95, _0x53933e) {
          if (_0x53933e.isDead) {
            return;
          }
          let _0x28e6ce = Math.random() < this.critChance * _0x1d0e6c.Core.Player.luck ? this.critMul : 0x1;
          if (_0x28e6ce > 0x1 && this.canHeal) {
            this.canHeal = false;
            _0x1d0e6c.Core.Player.RecoverHp(0x8);
            _0x1d0e6c.Core.ShowRecoveryAt(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, 0x8);
            this.healTimer = _0x1d0e6c.Core.scene.time.addEvent({
              'delay': this.healDelay,
              'loop': false,
              'callback': () => {
                this.canHeal = true;
              }
            });
          }
          if (!_0xaca95.HasAlreadyHitObject(_0x53933e)) {
            _0x53933e.GetDamaged(this.PPower * _0x28e6ce, this.hitVFX, this.knockback);
          }
        }
      };
      class _0x3752b4 {
        ["GetWeapon"](_0x695797) {
          let _0x413ffa;
          if (_0x14b553[_0x695797][0x0].isPowerUp) {
            _0x413ffa = new _0x45fcf6(_0x695797);
          } else {
            switch (_0x695797) {
              default:
              case _0x2a5ca3.AXE:
                _0x413ffa = new _0x2c9c78(_0x695797);
                break;
              case _0x2a5ca3.SCYTHE:
                _0x413ffa = new _0x4df620(_0x695797);
                break;
              case _0x2a5ca3.MAGIC_MISSILE:
                _0x413ffa = new _0x313bdb(_0x695797);
                break;
              case _0x2a5ca3.HOLY_MISSILE:
                _0x413ffa = new _0x83efb4(_0x695797);
                break;
              case _0x2a5ca3.WHIP:
                _0x413ffa = new _0x30b3d9(_0x695797);
                break;
              case _0x2a5ca3.DIAMOND:
                _0x413ffa = new _0x50573a(_0x695797);
                break;
              case _0x2a5ca3.HOLYWATER:
                _0x413ffa = new _0x48d501(_0x695797);
                break;
              case _0x2a5ca3.FIREBALL:
                _0x413ffa = new _0x3a00ce(_0x695797);
                break;
              case _0x2a5ca3.KNIFE:
              case _0x2a5ca3.THOUSAND:
                _0x413ffa = new _0x20e87a(_0x695797);
                break;
              case _0x2a5ca3.HOLYBOOK:
                _0x413ffa = new _0x139186(_0x695797);
                break;
              case _0x2a5ca3.VESPERS:
                _0x413ffa = new _0x3707c0(_0x695797);
                break;
              case _0x2a5ca3.CROSS:
                _0x413ffa = new _0x72d2ea(_0x695797);
                break;
              case _0x2a5ca3.LIGHTNING:
                _0x413ffa = new _0x57f2a0(_0x695797);
                break;
              case _0x2a5ca3.GARLIC:
                _0x413ffa = new _0xb16f2e(_0x695797);
                break;
              case _0x2a5ca3.LANCET:
                _0x413ffa = new _0x3d77bf(_0x695797);
                break;
              case _0x2a5ca3.LAUREL:
                _0x413ffa = new _0x5e4fd5(_0x695797);
                break;
              case _0x2a5ca3.THORNS:
                _0x413ffa = new _0x50c4aa(_0x695797);
                break;
              case _0x2a5ca3.BONE:
                _0x413ffa = new _0x4ebb1c(_0x695797);
                break;
              case _0x2a5ca3.HELLFIRE:
                _0x413ffa = new _0x2268bf(_0x695797);
                break;
              case _0x2a5ca3.SILF:
                _0x413ffa = new _0x381d6f(_0x695797);
                break;
              case _0x2a5ca3.SILF2:
                _0x413ffa = new _0x3aa503(_0x695797);
                break;
              case _0x2a5ca3.PENTAGRAM:
                _0x413ffa = new _0x868f25(_0x695797);
                break;
              case _0x2a5ca3.HEAVENSWORD:
                _0x413ffa = new _0x32bfa8(_0x695797);
                break;
              case _0x2a5ca3.VAMPIRICA:
                _0x413ffa = new _0x2e9260(_0x695797);
            }
          }
          return _0x413ffa;
        }
      }
      class _0x83cdd4 extends Phaser.Physics.Arcade.Sprite {
        constructor(_0xeea352, _0x21e6cc, _0x1c73f5, _0x505df3) {
          super(_0xeea352.scene, _0x21e6cc, _0x1c73f5, "items", 'Candle.png');
          this.hp = 0x1;
          this.maxHp = 0x1;
          this.isDead = false;
          this.receivingDamage = false;
          this.isTeleportOnCull = false;
          this.owner = null;
          this.scene = _0xeea352.scene;
          this.pool = _0xeea352;
          this.destructibleType = _0x505df3;
          var _0xc3c773 = _0x5984e8[this.destructibleType];
          this.maxHp = _0xc3c773.maxHp;
          const _0xae5bff = this.anims.generateFrameNames(_0xc3c773.textureName, {
            'start': 0x1,
            'end': 0x3,
            'zeroPad': 0x0,
            'prefix': _0xc3c773.frameName,
            'suffix': '.png'
          });
          this.anims.create({
            'key': "idle",
            'frames': _0xae5bff,
            'frameRate': 0xa,
            'repeat': -0x1
          });
          this.scene.add.existing(this);
          this.scene.physics.add.existing(this);
          this.body.immovable = true;
          this.setScale(_0x34bb1a.PixelScale);
          this.setOrigin(0.5, 0x1);
          this.setDepth(this.y);
          this.body.setSize(0x2 * this.frame.width, 0x2 * this.frame.height, false);
        }
        ["OnTeleportOnCull"]() {}
        ["Init"]() {
          this.anims.play("idle");
        }
        ["OnRecycle"]() {
          this.hp = this.maxHp;
          this.isDead = false;
          this.visible = true;
          this.body.enable = true;
          this.body.setCircle(0x10);
          this.restoreTint();
          this.setDepth(this.y);
        }
        ['DeSpawn']() {
          this.isDead = true;
          this.pool.Return(this);
          this.body.enable = false;
          this.visible = false;
        }
        ["GetTaken"]() {
          this.DeSpawn();
        }
        ["GetDamaged"](_0x3aca2e = 0x1) {
          if (!this.isDead) {
            this.hp -= _0x3aca2e;
            if (this.hp <= 0x0) {
              this.isDead = true;
              this.OnDestroyed();
            }
            this.OnGetDamaged();
          }
        }
        ['OnGetDamaged']() {
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
            this.setTintFill(0xffffff);
          }
          this.receivingDamage = true;
          this._blinkTimeout = _0x1d0e6c.Core.scene.time.addEvent({
            'delay': 0x78,
            'loop': false,
            'callback': () => {
              this.restoreTint();
            }
          });
          this._blinkTimeout.name = "Blink";
        }
        ['restoreTint']() {
          this.setTint(0xffffff);
          this.receivingDamage = false;
          if (this.hp <= 0x0) {
            _0x1d0e6c.Core.scene.time.removeEvent(this._blinkTimeout);
            this.DeSpawn();
          }
        }
        ["OnDestroyed"]() {
          _0x1d0e6c.Core.MakePickup(this.x, this.y, _0x1d0e6c.Core.LootManager.GetRandomWeightedItem());
          _0x5984e8[this.destructibleType].destroyedAmount += 0x1;
        }
      }
      class _0x8cf181 extends Phaser.GameObjects.Group {
        constructor(_0x5559d9) {
          super(_0x5559d9);
          this.stored = new Array();
          this.spawned = new Array();
          this.Init();
        }
        ["Init"]() {
          this.scene.add.existing(this);
        }
        ["SpawnAt"](_0x3607ab, _0x50c207, _0x1c2483) {
          const _0x557d92 = this.Spawn(_0x1c2483);
          _0x557d92.setPosition(_0x3607ab, _0x50c207);
          _0x557d92.OnRecycle();
          return _0x557d92;
        }
        ["Spawn"](_0x2fe9fd) {
          let _0x3335cb = this.stored.pop();
          if (!_0x3335cb) {
            _0x3335cb = this.Make(_0x2fe9fd);
            _0x3335cb.Init();
          }
          this.add(_0x3335cb, true);
          this.spawned.push(_0x3335cb);
          _0x1d0e6c.Core.Destructibles.push(_0x3335cb);
          return _0x3335cb;
        }
        ["Return"](_0x5ce702) {
          this.remove(_0x5ce702, true, false);
          this.spawned.splice(this.spawned.indexOf(_0x5ce702), 0x1);
          _0x1d0e6c.Core.Destructibles.splice(_0x1d0e6c.Core.Destructibles.indexOf(_0x5ce702), 0x1);
          this.stored.push(_0x5ce702);
        }
        ['Make'](_0x293c28) {
          return new _0x83cdd4(this, 0x0, 0x0, _0x293c28);
        }
      }
      const _0x301c9d = class {
        constructor() {
          this.ExcludedItems = new Array();
          this.accumulatedWeight = 0x0;
          this.WeightedStore = new Array();
        }
        ['Init']() {
          this.calculateWeights();
        }
        ["calculateWeights"]() {
          this.accumulatedWeight = 0x0;
          this.WeightedStore = new Array();
          for (const _0x140c09 in _0x34b109) if (_0x1d0e6c.Core.Player.level >= _0x34b109[_0x140c09].unlocksAt) {
            if (_0x34b109[_0x140c09].isRare) {
              this.accumulatedWeight += _0x34b109[_0x140c09].rarity * _0x1d0e6c.Core.Player.luck;
            } else {
              this.accumulatedWeight += _0x34b109[_0x140c09].rarity;
            }
            if (_0x34b109[_0x140c09].rarity > 0x0) {
              this.WeightedStore.push(new _0x537906(_0x140c09, this.accumulatedWeight));
            }
          }
        }
        ["RecalculateLoot"]() {
          this.calculateWeights();
        }
        ["GetRandomWeightedItem"]() {
          var _0x381042 = Math.random() * this.accumulatedWeight;
          for (let _0x3be16d = 0x0; _0x3be16d < this.WeightedStore.length; _0x3be16d++) {
            const _0x5cc15c = this.WeightedStore[_0x3be16d];
            if (_0x5cc15c.weight >= _0x381042) {
              return _0x5cc15c.itemType;
            }
          }
        }
      };
      class _0x1fd9ea extends Phaser.GameObjects.Sprite {
        constructor(_0x358d78) {
          super(_0x358d78, 0.5 * _0x358d78.renderer.width, 0.5 * _0x358d78.renderer.height, 'vfx', 'Shockwave3.png');
          this.setScrollFactor(0x0);
          _0x358d78.add.existing(this);
          this.sprite1 = _0x358d78.add.sprite(0x0, 0x0, 'vfx', 'WhiteDot.png').setScrollFactor(0x0).setScale(_0x358d78.renderer.width, _0x358d78.renderer.height).setAlpha(0x0).setOrigin(0x0).setTint(0xff).setBlendMode(_0x2d874d.BlendModes.ADD);
          this.tween1 = this.scene.tweens.add({
            'targets': this.sprite1,
            'alpha': 0.2,
            'duration': 0x1f4,
            'ease': "Linear"
          });
          this.scene.tweens.add({
            'targets': this.sprite1,
            'alpha': 0x0,
            'duration': 0x1f4,
            'delay': 0x251c,
            'ease': 'Linear'
          });
          this.scene.tweens.add({
            'targets': this,
            'angle': 0x167,
            'duration': 0x3e8,
            'yoyo': false,
            'repeat': -0x1,
            'ease': "Linear"
          });
          this.scene.tweens.add({
            'targets': this,
            'alpha': 0x0,
            'duration': 0x3e8,
            'delay': 0x2328,
            'ease': 'Linear'
          });
          this.scene.tweens.add({
            'targets': this,
            'scale': 1.2 * this.scene.renderer.height / this.displayHeight,
            'duration': 0xc8,
            'ease': "Linear"
          });
          this.visible = true;
          this.setDepth(0x3e8).setBlendMode(_0x2d874d.BlendModes.ADD).setTint(0xff);
        }
        ['_dispose']() {
          this.scene.tweens.remove(this.tween1);
          this.destroy();
          this.sprite1.destroy();
        }
        ['Play']() {
          this.tween1.restart();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.Orologion, {
            'volume': 0x2,
            'rate': 0x2
          });
        }
      }
      class _0x1b75ae {
        constructor(_0x55e4d2) {
          this.stored = new Array();
          this.spawned = new Array();
          this.scene = _0x55e4d2;
        }
        ["SpawnAt"](_0x2cc3a8, _0x32f65a, _0x289734) {
          const _0x2096dd = this.Spawn();
          _0x2096dd.setPosition(_0x2cc3a8, _0x32f65a);
          _0x2096dd.OnRecycle(_0x289734);
          return _0x2096dd;
        }
        ["Spawn"]() {
          let _0x741cba = this.stored.pop();
          if (!_0x741cba) {
            _0x741cba = this.Make();
            _0x741cba.Init();
          }
          this.spawned.push(_0x741cba);
          return _0x741cba;
        }
        ["Return"](_0x310ad9) {
          var _0x5472c4 = this.spawned.indexOf(_0x310ad9);
          if (_0x5472c4 >= 0x0) {
            this.spawned.splice(_0x5472c4, 0x1);
          } else {
            console.log("HitVFX pool error");
          }
          this.stored.push(_0x310ad9);
        }
        ["Make"]() {
          return new class {
            constructor(_0x315b14, _0x56f2d9, _0x30835f = 0x0, _0x2880aa = 0x0) {
              this.frameName = "item_236.png";
              this.isCullable = true;
              this.isTeleportOnCull = false;
              this.owner = null;
              this.scene = _0x315b14;
              this.pool = _0x56f2d9;
              this.sprite1 = this.scene.add.sprite(_0x30835f + 0x8, _0x2880aa - 0x40, "vfx", "HitStar2.png");
              this.sprite2 = this.scene.add.sprite(_0x30835f, _0x2880aa - 0x20, "vfx", "Shockwave3.png");
              this.sprite1.setScale(0.25 * _0x34bb1a.PixelScale);
              this.sprite2.setScale(0.25 * _0x34bb1a.PixelScale);
              this.tween1 = this.scene.tweens.add({
                'targets': this.sprite1,
                'scaleX': 0.75 * _0x34bb1a.PixelScale,
                'scaleY': 1.5 * _0x34bb1a.PixelScale,
                'angle': 0xb4,
                'duration': 0x5a,
                'ease': "Linear"
              });
              this.tween2 = this.scene.tweens.add({
                'targets': this.sprite2,
                'scaleX': _0x34bb1a.PixelScale,
                'scaleY': _0x34bb1a.PixelScale,
                'duration': 0x5a,
                'delay': 0x1e,
                'ease': "Linear"
              });
              this.sprite1.setVisible(false);
              this.sprite2.setVisible(false);
            }
            ["OnTeleportOnCull"]() {}
            ["setPosition"](_0x5f3ac6, _0x12a258) {
              this.sprite1.setPosition(_0x5f3ac6 + 0x2, _0x12a258 - 0x10);
              this.sprite2.setPosition(_0x5f3ac6, _0x12a258 - 0x8);
            }
            ['Init']() {
              this.sprite1.setVisible(false);
              this.sprite2.setVisible(false);
            }
            ["OnRecycle"](_0x1b5344 = _0x3677f0.DEFAULT) {
              this.sprite1.setScale(0.25 * _0x34bb1a.PixelScale).setAngle(0x0).setVisible(true);
              this.sprite2.setScale(0.25 * _0x34bb1a.PixelScale).setAngle(0x0).setVisible(true);
              if (_0x1b5344 != _0x3677f0.NONE) {
                var _0x2b04f0 = _0x15b7de[_0x1b5344];
                this.sprite1.setFrame(_0x2b04f0.hitFrameName);
                this.sprite2.setFrame(_0x2b04f0.impactFrameName);
              }
              this.Play();
            }
            ["DeSpawn"]() {
              this.sprite1.setVisible(false);
              this.sprite2.setVisible(false);
              this.pool.Return(this);
            }
            ["Play"]() {
              this.tween1.restart();
              this.tween2.restart();
              this.scene.time.addEvent({
                'delay': 0x78,
                'callback': this.DeSpawn,
                'callbackScope': this
              });
            }
          }(this.scene, this);
        }
      }
      class _0x2c9a89 extends Phaser.GameObjects.BitmapText {
        constructor(_0x5dd0bc, _0x4a4d86, _0x14befc) {
          super(_0x5dd0bc.scene, _0x4a4d86, _0x14befc, "damage", '');
          this.isCullable = true;
          this.isTeleportOnCull = false;
          this.owner = null;
          this.pool = _0x5dd0bc;
          this.tween2 = this.scene.tweens.add({
            'targets': this,
            'alpha': 0x0,
            'scale': _0x34bb1a.PixelScale,
            'duration': 0x258,
            'paused': true,
            'onComplete': () => {
              this.DeSpawn();
            }
          });
          this.scene.add.existing(this);
        }
        ["OnTeleportOnCull"]() {}
        ["Init"]() {
          this.setDepth(_0x34bb1a.ZDamageNumber);
          this.setOrigin(0.5, 0x1);
        }
        ["OnRecycle"](_0x220876 = 0x0, _0x2d06c7 = 0x0, _0x1f0f32 = 0x0) {
          var _0x1aeb72;
          var _0x2ea6e0 = 0x1 * (Math.random() - 0.5);
          let _0x38eb5a = 0xa * (_0x1f0f32 + _0x2ea6e0);
          this.setAlpha(0x1);
          this.setScale(_0x34bb1a.PixelScale);
          this.setPosition(_0x220876 + 0x20 * _0x2ea6e0, _0x2d06c7 - 0x10);
          this.setText(_0x38eb5a.toFixed());
          this.setTint(0xffffff);
          if (_0x1f0f32 >= 0xa) {
            this.setTint(0xffff00);
          } else if (_0x1f0f32 >= 0x6) {
            this.setTint(Phaser.Display.Color.GetColor(0xff, _0x1f0f32 / 0xa * 0xff, 0x80));
          } else if (_0x1f0f32 >= 0x3) {
            this.setTint(Phaser.Display.Color.GetColor(0xff, _0x1f0f32 / 0xa * 0xff, _0x1f0f32 / 0x6 * 0x80));
          } else if (_0x1f0f32 < 0x0) {
            this.setTint(Phaser.Display.Color.GetColor(0x0, 0xff, 0x0));
            _0x1f0f32 *= -0x1;
            this.setText(_0x1f0f32.toFixed());
          }
          if (!(null === (_0x1aeb72 = this.tween1) || undefined === _0x1aeb72)) {
            _0x1aeb72.stop();
          }
          this.tween1 = this.scene.tweens.add({
            'targets': this,
            'y': this.y - 0xc * Math.random(),
            'scale': 0x2 * _0x34bb1a.PixelScale,
            'duration': 0x12c,
            'onComplete': () => {
              this.tween2.resume();
              this.tween2.restart();
            }
          });
        }
        ["DeSpawn"]() {
          this.pool.Return(this);
        }
      }
      class _0x178b5e {
        constructor(_0x2d5947) {
          this.stored = new Array();
          this.spawned = new Array();
          this.scene = _0x2d5947;
        }
        ["SpawnAt"](_0x26d106, _0x3b7940, _0xa6a8ed) {
          const _0x56e824 = this.Spawn();
          _0x56e824.OnRecycle(_0x26d106, _0x3b7940, _0xa6a8ed);
          return _0x56e824;
        }
        ["Spawn"]() {
          let _0x3fd8ad = this.stored.pop();
          if (!_0x3fd8ad) {
            _0x3fd8ad = this.Make();
            _0x3fd8ad.Init();
          }
          this.spawned.push(_0x3fd8ad);
          return _0x3fd8ad;
        }
        ['Return'](_0x2c0a8b) {
          var _0x12636d = this.spawned.indexOf(_0x2c0a8b);
          if (_0x12636d >= 0x0) {
            this.spawned.splice(_0x12636d, 0x1);
          } else {
            console.log("DamageNumber pool error");
          }
          this.stored.push(_0x2c0a8b);
        }
        ["Make"]() {
          return new _0x2c9a89(this, 0x0, 0x0);
        }
      }
      class _0x1e1105 {
        constructor(_0x39501e) {
          this.timeOffset = 0x0;
          this.dayCycleDuration = 0x384;
          this.DayColor = 0xffffff;
          this.NightColor = 0x444ee;
          this.RunTimeHue = true;
          this.canScroll = true;
          this.scene = _0x39501e;
        }
        ['MakeBackground'](_0x8559d8) {
          this.bgtile = this.scene.add.tileSprite(0.5 * this.scene.renderer.width, 0.5 * this.scene.renderer.height, this.scene.renderer.width, this.scene.renderer.height, _0x8559d8);
          this.bgtile.setScale(_0x34bb1a.PixelScale).setScrollFactor(0x0).setDepth(Number.NEGATIVE_INFINITY);
        }
        ['Update'](_0x6646d2) {
          if (this.canScroll) {
            this.bgtile.tilePositionX = _0x34bb1a.RPixelScale * _0x1d0e6c.Core.Player.x;
            this.bgtile.tilePositionY = _0x34bb1a.RPixelScale * _0x1d0e6c.Core.Player.y;
          }
        }
        ['DayNightHue']() {
          if (!this.RunTimeHue) {
            return;
          }
          let _0x8cfe50;
          let _0x1eb56a = Math.floor((_0x1d0e6c.Core.SurvivedSeconds + this.timeOffset) / this.dayCycleDuration) % 0x2 == 0x0;
          let _0x3ff10a = (_0x1d0e6c.Core.SurvivedSeconds + this.timeOffset) % this.dayCycleDuration;
          _0x8cfe50 = _0x1eb56a ? _0x3ff10a / this.dayCycleDuration : (this.dayCycleDuration - _0x3ff10a) / this.dayCycleDuration;
          this.bgtile.setTint(_0x512871.LerpColor(this.DayColor, this.NightColor, _0x8cfe50));
        }
        ["ToggleScrolling"](_0x54dec1) {
          this.canScroll = _0x54dec1;
        }
      }
      var _0xae9ba1;
      !function (_0x4e4891) {
        _0x4e4891.BGM_Forest = "BGM_Forest";
      }(_0xae9ba1 || (_0xae9ba1 = {}));
      class _0x34bb1a {
        constructor(_0x448336, _0x408fe3) {
          this.MaxGems = 0x190;
          this.CurrentTreasureLevel = 0x3;
          this.CurrentTreasureTypes = [_0x2a9e31.EVOLUTION, _0x2a9e31.POWERUP, _0x2a9e31.POWERUP, _0x2a9e31.POWERUP, _0x2a9e31.POWERUP];
          this.CurrentFixedTreasures = [_0x2a5ca3.HELLFIRE, _0x2a5ca3.SCYTHE, _0x2a5ca3.BONE, _0x2a5ca3.AMOUNT, _0x2a5ca3.AMOUNT];
          this.PlayerOptions = new _0x24e67f();
          this.WeaponFactory = new _0x3752b4();
          this.LevelUpFactory = new _0x5f4047();
          this.LootManager = new _0x301c9d();
          this.Enemies = new Array();
          this.Weapons = new Array();
          this.Destructibles = new Array();
          this.SurvivedSeconds = 0x0;
          this.MaxDestructibles = 0xa;
          this.baseMarkup = 0.1;
          this.IsTimeStopped = false;
          this.TimeStopConfig = {
            'delay': 0x2710,
            'loop': false,
            'callback': () => {
              _0x1d0e6c.Core.ClearTimeStop();
            }
          };
          this.updateTick = 0x0;
          this.updateFreq = 0x4;
          this.Game = _0x448336;
          this.scene = _0x408fe3;
        }
        ["TakeSnapshot"](_0x794daa) {
          var _0x2b6873 = this.scene.textures;
          this.scene.game.renderer.snapshotArea(0x0, 0x0, this.scene.renderer.width, this.scene.renderer.height, _0x2e1aa5 => {
            if (_0x2b6873.exists("snapshot")) {
              _0x2b6873.remove("snapshot");
            }
            _0x2b6873.addImage('snapshot', _0x2e1aa5);
            if (_0x794daa) {
              _0x794daa();
            }
          });
        }
        ["CleanUp"]() {
          this.WeaponFactory = new _0x3752b4();
          this.LevelUpFactory = new _0x5f4047();
          this.LootManager = new _0x301c9d();
          this.Enemies = new Array();
          this.Weapons = new Array();
          this.Destructibles = new Array();
          this.SurvivedSeconds = 0x0;
          this.IsTimeStopped = false;
          this.PlayerOptions.RunCoins = 0x0;
          this.PlayerOptions.RunEnemies = 0x0;
          this.EnemyGroup.clear();
          this.PickupGroup.clear();
          this.BulletGroup.clear();
        }
        ["InitGame"](_0x1bc24a, _0x25608) {
          this.scene = _0x1bc24a;
          this.EnemyGroup = this.scene.add.group();
          this.PickupGroup = this.scene.add.group();
          this.BulletGroup = this.scene.add.group();
          this.EnemyGroup.physicsType = Phaser.Physics.Arcade.DYNAMIC_BODY;
          this.CleanUp();
          this.MakePlayer(_0x25608);
          this.scene.physics.add.collider(this.Player, this.EnemyGroup, this.onPlayerOverlapsEnemy.bind(this));
          this.scene.physics.add.collider(this.EnemyGroup, this.EnemyGroup);
          this.scene.physics.add.overlap(this.Player, this.PickupGroup, this.onPlayerOverlapsPickup.bind(this));
          this.scene.physics.add.overlap(this.Magnet, this.PickupGroup, this.onMagnetOverlapsPickup.bind(this));
          this.pickupPool = new _0x5bcc91(_0x1bc24a);
          this.gemsPool = new _0x5bcc91(_0x1bc24a);
          this.hitVFXPool = new _0x1b75ae(_0x1bc24a);
          this.damageNumberPool = new _0x178b5e(_0x1bc24a);
          this.destructiblesPool = new _0x8cf181(_0x1bc24a);
          this.tickerEvent = this.scene.time.addEvent({
            'delay': 0x3e8,
            'callback': this.OnTickerEvent,
            'callbackScope': this,
            'loop': true
          });
          this.tickerEvent.name = "Clock Ticker";
          this.MainUI = new _0x31ae0d(this.scene);
          this.MainUI.UpdateCoins();
          this.MainUI.UpdateKills();
          this.MainUI.UpdatePlayerLevel();
          this.Player.MakeLevelOne();
          this.LevelUpFactory.Init();
          this.PfxEmitter_Pickups = this.scene.add.particles('vfx');
          this.PfxEmitter_Pickups.createEmitter({
            'frame': ["PfxColor1.png", "PfxColor2.png"],
            'angle': {
              'min': 0x0,
              'max': 0xb4
            },
            'speed': {
              'min': 0x19,
              'max': 0x32
            },
            'quantity': 0xa,
            'lifespan': {
              'min': 0x64,
              'max': 0x190
            },
            'alpha': {
              'start': 0x1,
              'end': 0x0
            },
            'scale': {
              'start': 0x2 * _0x34bb1a.PixelScale,
              'end': _0x34bb1a.PixelScale
            },
            'gravityY': -0x3e8,
            'on': false
          });
          this.LevelUpScene = this.scene.scene.get(_0xf7a726.UI_levelUpScene);
          this.Stage = new _0x22e23a(this.scene, this.PlayerOptions.SelectedStage);
          this.Stage.Init();
          this.AddWeapon(this.Player.startingWeapon);
          this.LootManager.Init();
          for (const _0x2466d4 in _0x5f5caf) {
            var _0x298455 = _0x5f5caf[_0x2466d4][0x0];
            for (let _0x257c01 = 0x0; _0x257c01 < _0x298455.level; _0x257c01++) {
              this.ApplyBoughtPowerup(_0x5f5caf[_0x2466d4][_0x257c01]);
            }
          }
          this.BGMan = new _0x1e1105(this.scene);
          this.BGMan.MakeBackground(this.Stage.BGTextureName);
          this.containmentRect_Screen = new _0x206a30(0.6);
          this.containmentRect_ScreenPlus = new _0x206a30(0.8);
          this.MainUI.UpdatePlayerLevel();
          this.PlayerUI.Update();
        }
        ['debug_CharShowcase'](_0x287e24 = true) {
          var _0x30b65a = _0x4774f8[_0x1d0e6c.Core.PlayerOptions.SelectedCharacter][0x0];
          if (_0x30b65a.showcase) {
            for (let _0x2a289a = 0x0; _0x2a289a < _0x30b65a.showcase.length; _0x2a289a++) {
              const _0xd26318 = _0x30b65a.showcase[_0x2a289a];
              _0x1d0e6c.Core.LevelWeaponUp(_0xd26318);
              _0x1d0e6c.Core.Player.LevelUp();
            }
            _0x1d0e6c.Core.Player.xp = _0x1d0e6c.Core.LevelUpFactory.PreviousXpRequiredToLevelUp;
            if (_0x287e24) {
              _0x1d0e6c.Core.LevelUpFactory.WeaponStore = new Array();
              _0x1d0e6c.Core.LevelUpFactory.WeightedStore = new Array();
            }
          }
        }
        ["debug_AddAllWeapons"]() {
          for (const _0x121842 in _0x14b553) this.AddWeapon(_0x121842);
        }
        ['debug_SpawnEnemies']() {
          this.Stage.minimum = this.Stage.maximum = 0x1f4;
          this.Stage.SwarmCheck();
        }
        ['debug_Treasure'](_0xd640ea = 0x3) {
          _0x1d0e6c.Core.CurrentTreasureLevel = _0xd640ea;
          _0x1d0e6c.Core.CurrentTreasureTypes = [_0x2a9e31.EVOLUTION, _0x2a9e31.EXISTING_WEAPON, _0x2a9e31.EXISTING_ANY, _0x2a9e31.POWERUP, _0x2a9e31.POWERUP];
          _0x1d0e6c.Core.SceneManager.StartTreasureScene();
        }
        ['FreezeSnapshot'](_0x397537) {
          _0x1d0e6c.Core.TakeSnapshot(() => {
            var _0x711b5b = _0x572c9f ? _0x25efe0 / 0x156 : _0x2fcc22 / 0x1c8;
            this.snapshot = this.scene.add.sprite(0x0, 0x0, "snapshot").setOrigin(0x0).setScale(_0x711b5b).setDepth(Number.MAX_SAFE_INTEGER).setScrollFactor(0x0);
            if (_0x397537) {
              _0x397537();
            }
          });
        }
        ["RemoveSnapshot"]() {
          var _0x3a4dd3;
          var _0x326c0c;
          if (!(null === (_0x3a4dd3 = this.snapshot) || undefined === _0x3a4dd3)) {
            _0x3a4dd3.setVisible(false);
          }
          if (!(null === (_0x326c0c = this.snapshot) || undefined === _0x326c0c)) {
            _0x326c0c.destroy();
          }
        }
        ["debug_NextMinute"]() {
          var _0x20c393 = 0x3b - this.SurvivedSeconds % 0x3c;
          if (!(_0x20c393 <= 0x1)) {
            this.SurvivedSeconds += _0x20c393;
          }
        }
        ["debug_FireAll"]() {
          for (let _0x4eff50 = 0x0; _0x4eff50 < this.Weapons.length; _0x4eff50++) {
            const _0x1a2785 = this.Weapons[_0x4eff50];
            if (!_0x1a2785.isPowerUp) {
              _0x1a2785.Fire();
            }
          }
        }
        ["OnPlayerQuit"]() {
          this.Weapons.forEach(_0x3c1fa4 => {
            _0x3c1fa4.CleanUp();
          });
        }
        ['ResetWeaponCooldowns']() {
          for (let _0x3525b1 = 0x0; _0x3525b1 < this.Weapons.length; _0x3525b1++) {
            this.Weapons[_0x3525b1].ResetFiringTimer();
          }
        }
        ["SwapToLevelUpScene"]() {
          _0x1d0e6c.Core.SceneManager.EnterLevelUp();
          _0x1d0e6c.Sound.FadeMusic(_0xae9ba1.BGM_Forest, 0.2, 0x1f4);
        }
        ["ExitLevelUpScene"]() {
          _0x1d0e6c.Sound.FadeMusic(_0xae9ba1.BGM_Forest, 0.3, 0x1f4);
        }
        ['OnTickerEvent']() {
          this.SurvivedSeconds++;
          this.MainUI.SetSurvivedSeconds(this.SurvivedSeconds);
          if (this.SurvivedSeconds % 0x3c == 0x0) {
            this.Stage.CheckMinute();
          }
        }
        ["ShowHitVFXAt"](_0xd3df1f, _0x10c600, _0x16e252) {
          this.hitVFXPool.SpawnAt(_0xd3df1f, _0x10c600, _0x16e252);
        }
        ["ShowDamageAt"](_0x3a238c, _0x378476, _0x108d31) {
          this.damageNumberPool.SpawnAt(_0x3a238c, _0x378476, _0x108d31);
        }
        ["ShowRecoveryAt"](_0x1433ff, _0x2bdee6, _0x47cae5) {
          this.damageNumberPool.SpawnAt(_0x1433ff, _0x2bdee6, -_0x47cae5);
        }
        ["onPlayerOverlapsEnemy"](_0x1eecf9, _0x2e9cbc) {
          if (!(_0x2e9cbc.isDead || _0x2e9cbc.IsTimeStopped)) {
            _0x1eecf9.GetDamaged(_0x2e9cbc.power);
          }
        }
        ["onPlayerOverlapsPickup"](_0x214313, _0x43130b) {
          this.GetPickup(_0x43130b);
          _0x43130b.GetTaken();
        }
        ["onMagnetOverlapsPickup"](_0x435d77, _0x4b6750) {
          if (_0x4b6750.Vacuum()) {
            this.PfxEmitter_Pickups.emitParticleAt(_0x4b6750.x, _0x4b6750.y);
          }
        }
        ["SpawnPickupParticlesAt"](_0xb217d0, _0x19ae2e) {
          this.PfxEmitter_Pickups.emitParticleAt(_0xb217d0, _0x19ae2e);
        }
        ['GetPickup'](_0x2caaf3) {}
        ["TurnOnVacuum"]() {
          var _0x49c3be;
          if (!(null === (_0x49c3be = this.gemsPool.spawned[_0x5b2d7b.GEM]) || undefined === _0x49c3be)) {
            _0x49c3be.forEach(_0x1e4aa5 => {
              _0x1e4aa5.goToPlayer = true;
            });
          }
        }
        ["RosaryDamage"]() {
          if (this.PlayerOptions.FlashingVFXEnabled) {
            new _0xed14a(this.scene).Play();
          }
          for (let _0x4e078b = 0x0; _0x4e078b < this.Enemies.length; _0x4e078b++) {
            const _0x159995 = this.Enemies[_0x4e078b];
            if (!_0x159995.res_Rosary) {
              if (this.containmentRect_Screen.Contains(_0x159995)) {
                _0x159995.GetDamaged(Math.max(0x42, _0x159995.maxHp), _0x3677f0.NONE);
              }
            }
          }
        }
        ["TimeStop"]() {
          if (this.PlayerOptions.FlashingVFXEnabled) {
            new _0x1fd9ea(this.scene).Play();
          }
          this.IsTimeStopped = true;
          for (let _0x41619e = 0x0; _0x41619e < this.Enemies.length; _0x41619e++) {
            this.Enemies[_0x41619e].TimeStop();
          }
          if (this.TimeStopTimer) {
            this.TimeStopTimer.destroy();
          }
          this.TimeStopTimer = this.scene.time.addEvent(this.TimeStopConfig);
        }
        ['ClearTimeStop']() {
          for (let _0x1bed3d = 0x0; _0x1bed3d < this.Enemies.length; _0x1bed3d++) {
            this.Enemies[_0x1bed3d].ResumeFromTimeStop();
          }
          this.IsTimeStopped = false;
        }
        ["CheckForLevelUp"]() {
          var _0x207241 = this.LevelUpFactory.XpRequiredToLevelUp;
          if (this.Player.xp >= _0x207241) {
            this.Player.LevelUp();
            this.SwapToLevelUpScene();
            this.LootManager.RecalculateLoot();
            this.LevelUpFactory.CalculateXPfactor();
          }
          this.PlayerUI.Update();
          this.MainUI.UpdatePlayerLevel();
        }
        ["GetWeaponLevel"](_0x14442d) {
          let _0x63aefa = this.Weapons.find(_0x51df64 => _0x51df64.bulletType === _0x14442d);
          return _0x63aefa ? _0x63aefa.level : 0x0;
        }
        ['LevelWeaponUp'](_0xcbf5d1, _0x4effc0 = true) {
          if (undefined === _0x14b553[_0xcbf5d1]) {
            return;
          }
          let _0x5dc783 = this.Weapons.find(_0x3a5af9 => _0x3a5af9.bulletType === _0xcbf5d1);
          if (_0x5dc783) {
            if (!_0x5dc783.LevelUp()) {
              _0x1d0e6c.Core.PlayerOptions.AddCoins(0xa);
              _0x1d0e6c.Core.MainUI.UpdateCoins();
            }
            if (_0x4effc0) {
              this.LevelUpFactory.RemoveFromStore(_0x5dc783.bulletType);
            }
          } else {
            this.AddWeapon(_0xcbf5d1, _0x4effc0);
          }
          this.SetSeenWeapon(_0xcbf5d1);
        }
        ["SetSeenWeapon"](_0x29d95c) {
          if (undefined === this.PlayerOptions.CollectedWeapons.find(_0x4f3fce => _0x4f3fce === _0x29d95c)) {
            _0x14b553[_0x29d95c][0x0].seen = true;
            this.PlayerOptions.CollectedWeapons.push(_0x29d95c);
            this.PlayerOptions.SaveCollection();
          }
        }
        ["OnPowerUpBought"](_0x455bc5) {
          this.PlayerOptions.BoughtPowerups.push(_0x455bc5);
          this.PlayerOptions.Save();
        }
        ["OnCharacterBought"](_0x1d28fd) {
          this.PlayerOptions.BoughtCharacters.push(_0x1d28fd);
          this.PlayerOptions.Save();
        }
        ['MakePlayer'](_0x50c5f5) {
          this.Player = new _0x9bf392(this.scene, 0x0, 0x0, _0x50c5f5);
          this.PlayerUI = new _0x380e1f(this.scene);
          this.Magnet = new _0x3a929c(this.scene, 0x0, 0x0);
          return this.Player;
        }
        ["MakeGem"](_0x2d4adb = null, _0x51056c = null, _0x15819f) {
          var _0x563063 = this.MakePickup(_0x2d4adb, _0x51056c, _0x5b2d7b.GEM);
          _0x563063.SetValue(_0x15819f);
          return _0x563063;
        }
        ['MakeTreasure'](_0x862a7e = null, _0x377177 = null, _0x3c95c2) {
          var _0x1fd16d = this.MakePickup(_0x862a7e, _0x377177, _0x5b2d7b.TREASURE);
          _0x1fd16d.CurrentTreasureLevel = _0x3c95c2.level;
          _0x1fd16d.CurrentTreasureTypes = _0x3c95c2.prizeTypes;
          _0x1fd16d.CurrentFixedTreasures = [null, null, null, null, null];
          if (_0x3c95c2.fixedPrizes && _0x3c95c2.fixedPrizes.length > 0x0) {
            _0x1fd16d.CurrentFixedTreasures = _0x3c95c2.fixedPrizes;
          }
        }
        ['MakeAndActivatePickup'](_0x5d8456) {
          this.MakePickup(this.Player.x, this.Player.y, _0x5d8456).GetTaken();
        }
        ["MakePickup"](_0x586b8e = null, _0x3476e2 = null, _0x47fa97 = _0x5b2d7b.COIN, _0x26f5a5 = _0x2a5ca3.VOID) {
          var _0x53b997;
          let _0x2c8caf;
          let _0x27e46f = null === _0x586b8e && null === _0x3476e2 ? this.GetPositionOutOfSight(0x5a) : new Phaser.Math.Vector2(_0x586b8e, _0x3476e2);
          if (_0x47fa97 === _0x5b2d7b.GEM) {
            var _0x167af0 = 0x0;
            var _0x230015 = false;
            var _0x2b3a2f = this.MaxGems;
            for (var _0x1e6f79 = 0x0; (null === (_0x53b997 = this.gemsPool.spawned[_0x5b2d7b.GEM]) || undefined === _0x53b997 ? undefined : _0x53b997.length) > this.MaxGems;) {
              if (_0x4cd34e = this.furthest(this.Player, this.gemsPool.spawned[_0x5b2d7b.GEM])) {
                if (this.containmentRect_Screen.Contains(_0x4cd34e)) {
                  _0x230015 = true;
                  break;
                }
                _0x167af0 += _0x4cd34e.value;
                _0x4cd34e.DeSpawn();
              }
              if (++_0x1e6f79 > _0x2b3a2f) {
                break;
              }
            }
            var _0x4cd34e;
            if (_0x4cd34e = this.furthest(this.Player, this.gemsPool.spawned[_0x5b2d7b.GEM])) {
              _0x4cd34e.SetValue(_0x167af0 + _0x4cd34e.value);
            }
            if (_0x230015) {
              return _0x4cd34e;
            }
            _0x2c8caf = this.gemsPool.SpawnAt(_0x27e46f.x, _0x27e46f.y, _0x47fa97);
          } else {
            _0x2c8caf = this.pickupPool.SpawnAt(_0x27e46f.x, _0x27e46f.y, _0x47fa97);
          }
          if (_0x2c8caf.itemType == _0x5b2d7b.WEAPON && _0x26f5a5 != _0x2a5ca3.VOID) {
            _0x2c8caf.SetWeaponType(_0x26f5a5);
          }
          return _0x2c8caf;
        }
        ["furthest"](_0x1b8656, _0x3f1607) {
          var _0x58cea2 = -0x1;
          var _0x48d414 = null;
          var _0x2c251f = _0x1b8656.x;
          var _0x2490d8 = _0x1b8656.y;
          var _0x17a2c0 = _0x3f1607.length;
          for (var _0x25d9dc = 0x0; _0x25d9dc < _0x17a2c0; _0x25d9dc++) {
            var _0x42c380 = _0x3f1607[_0x25d9dc];
            var _0x16d001 = Phaser.Math.Distance.Squared(_0x2c251f, _0x2490d8, _0x42c380.x, _0x42c380.y);
            if (_0x16d001 > _0x58cea2) {
              _0x48d414 = _0x42c380;
              _0x58cea2 = _0x16d001;
            }
          }
          return _0x48d414;
        }
        ["MakeDestructible"](_0x52b019) {
          var _0x198514 = 0x0;
          if (!(0x0 == this.Player.body.velocity.x && 0x0 == this.Player.body.velocity.y)) {
            _0x198514 = 0x2d;
          }
          let _0x17739b = this.GetPositionOutOfSight(_0x198514);
          for (this.destructiblesPool.SpawnAt(_0x17739b.x, _0x17739b.y, _0x52b019); this.destructiblesPool.spawned.length > this.MaxDestructibles;) {
            var _0xbd0d2f = this.furthest(this.Player, this.destructiblesPool.spawned);
            if (_0xbd0d2f) {
              _0xbd0d2f.DeSpawn();
            }
          }
        }
        ["AddWeapon"](_0x1af45c, _0x22269e = true) {
          const _0x5ad219 = this.GetWeapon(_0x1af45c);
          _0x5ad219.level = 0x1;
          this.Weapons.push(_0x5ad219);
          if (_0x22269e) {
            this.LevelUpFactory.RemoveFromStore(_0x1af45c);
          }
          if (this.MainUI) {
            this.MainUI.AddWeaponIcon(_0x1af45c);
          }
        }
        ["RemoveWeapon"](_0x38a77a) {
          var _0x3f559b = this.Weapons.find(_0x4c86a4 => _0x4c86a4.bulletType === _0x38a77a);
          if (_0x3f559b) {
            _0x3f559b.CleanUp();
            if (this.Weapons.indexOf(_0x3f559b) > -0x1) {
              this.Weapons.splice(this.Weapons.indexOf(_0x3f559b), 0x1);
            }
          }
          if (this.MainUI) {
            this.MainUI.Remove(_0x38a77a);
          }
        }
        ["GetWeapon"](_0x5af06e) {
          return this.WeaponFactory.GetWeapon(_0x5af06e);
        }
        ['Update'](_0x2599fb = 0x0) {
          var _0x56e5b6 = false;
          this.updateTick++;
          if (this.updateTick % this.updateFreq == 0x0) {
            this.updateTick = 0x0;
            _0x56e5b6 = true;
          }
          if (_0x56e5b6) {
            this.BGMan.DayNightHue();
            for (let _0x56a8d5 = 0x0; _0x56a8d5 < this.PickupGroup.children.entries.length; _0x56a8d5++) {
              this.PickupGroup.children.entries[_0x56a8d5].Update(_0x2599fb);
            }
          }
          for (let _0x1c1604 = 0x0; _0x1c1604 < this.BulletGroup.children.entries.length; _0x1c1604++) {
            this.BulletGroup.children.entries[_0x1c1604].Update(_0x2599fb);
          }
          for (let _0x353eaf = 0x0; _0x353eaf < this.Weapons.length; _0x353eaf++) {
            this.Weapons[_0x353eaf].Update(_0x2599fb);
          }
          this.Player.Update(_0x2599fb);
          this.Magnet.Update();
          this.BGMan.Update(_0x2599fb);
          for (let _0xe3efb3 = 0x0; _0xe3efb3 < this.Enemies.length; _0xe3efb3++) {
            this.Enemies[_0xe3efb3].Update(_0x2599fb);
          }
        }
        ["GetPositionOutOfSight"](_0x3f18c8 = -0x1, _0x247308 = 0x0) {
          let _0x59cd3d;
          let _0x221be2;
          let _0xb186d;
          if (_0x3f18c8 <= 0x0) {
            _0x59cd3d = 0x2 * Math.PI * Math.random();
          } else {
            _0x59cd3d = Math.atan2(this.Player.body.velocity.y, this.Player.body.velocity.x);
            _0x59cd3d += (Math.random() - 0.5) * Phaser.Math.DegToRad(_0x3f18c8);
          }
          if (_0x247308 > 0x0) {
            var _0x47b060 = Math.cos(_0x59cd3d);
            _0x221be2 = this.Player.x + 0.5 * _0x47b060 * this.scene.renderer.width + Math.sign(_0x47b060) * _0x247308;
            _0x47b060 = Math.sin(_0x59cd3d);
            _0xb186d = this.Player.y + 0.5 * _0x47b060 * this.scene.renderer.height + Math.sign(_0x47b060) * _0x247308;
          } else {
            _0x221be2 = this.Player.x + 0.9 * Math.cos(_0x59cd3d) * this.scene.renderer.width;
            _0xb186d = this.Player.y + 0.9 * Math.sin(_0x59cd3d) * this.scene.renderer.height;
          }
          return new Phaser.Math.Vector2(_0x221be2, _0xb186d);
        }
        get ["PowerUpMarkup"]() {
          var _0xd6466d = 0x0;
          for (const _0xc0a783 in _0x5f5caf) _0xd6466d += _0x5f5caf[_0xc0a783][0x0].level;
          return 0x1 + this.baseMarkup * _0xd6466d;
        }
        get ["CharMarkup"]() {
          var _0x2305dd = 0x0;
          for (const _0x523388 in _0x4774f8) _0x2305dd += _0x4774f8[_0x523388][0x0].isBought ? 0x1 : 0x0;
          return 0x1 + this.baseMarkup * _0x2305dd;
        }
        ["ApplyBoughtPowerup"](_0x3905b2) {
          this.Player.power += _0x3905b2.power || 0x0;
          this.Player.area += _0x3905b2.area || 0x0;
          this.Player.speed += _0x3905b2.speed || 0x0;
          this.Player.cooldown += _0x3905b2.cooldown || 0x0;
          this.Player.duration += _0x3905b2.duration || 0x0;
          this.Player.amount += _0x3905b2.amount || 0x0;
          this.Player.moveSpeed += _0x3905b2.moveSpeed || 0x0;
          this.Player.growth += _0x3905b2.growth || 0x0;
          this.Player.luck += _0x3905b2.luck || 0x0;
          this.Player.armor += _0x3905b2.armor || 0x0;
          this.Player.maxHp += this.Player.maxHp * (_0x3905b2.maxHp || 0x0);
          this.Player.regen += _0x3905b2.regen || 0x0;
          this.Player.greed += _0x3905b2.greed || 0x0;
          this.Player.hp = this.Player.maxHp;
          this.Magnet.radius += this.Magnet.radius * (_0x3905b2.magnet || 0x0);
          this.Magnet.RefreshSize();
        }
        ["GameOver"]() {}
        ['StopCamera']() {
          this.scene.cameras.main.stopFollow();
          _0x1d0e6c.Core.BGMan.ToggleScrolling(false);
          _0x1d0e6c.Core.Player.SetCollideWithWorld(true);
          var _0x422f69 = _0x1d0e6c.Core.Player.x;
          var _0x30969b = _0x1d0e6c.Core.Player.y;
          var _0x542280 = this.scene.renderer.width;
          var _0x4851d2 = this.scene.renderer.height;
          var _0x5a7305 = _0x422f69 - 0.5 * _0x542280;
          var _0x22c421 = _0x30969b - 0.5 * _0x4851d2;
          this.scene.physics.world.setBounds(_0x5a7305, _0x22c421, _0x542280, _0x4851d2);
        }
        ["ResumeCamera"]() {
          this.scene.cameras.main.startFollow(_0x1d0e6c.Core.Player);
          _0x1d0e6c.Core.BGMan.ToggleScrolling(true);
          _0x1d0e6c.Core.Player.SetCollideWithWorld(false);
        }
      }
      _0x34bb1a._basePlayerPxSpeed = 82.5;
      _0x34bb1a._baseEnemySpeed = 0.23099999999999998;
      _0x34bb1a._baseProjectileSpeed = 0xa5;
      _0x34bb1a._baseGoldMultiplier = 0x1;
      _0x34bb1a.PlayerPxSpeed = _0x34bb1a._basePlayerPxSpeed;
      _0x34bb1a.EnemySpeed = _0x34bb1a._baseEnemySpeed;
      _0x34bb1a.ProjectileSpeed = _0x34bb1a._baseProjectileSpeed;
      _0x34bb1a.GoldMultiplier = _0x34bb1a._baseGoldMultiplier;
      _0x34bb1a.PixelScale = 0x1;
      _0x34bb1a.RPixelScale = 0x1;
      _0x34bb1a.ZDamageNumber = Number.MAX_SAFE_INTEGER - 0x2710;
      _0x34bb1a.ZInGameUI = Number.MAX_SAFE_INTEGER - 0x3e8;
      var _0x1d0b69 = function (_0x57ba38, _0x26a7a6, _0x318ff4, _0x5e6791) {
        return new (_0x318ff4 || (_0x318ff4 = Promise))(function (_0x5578f3, _0x520afc) {
          function _0x910b50(_0x3d4827) {
            try {
              _0x52fe9a(_0x5e6791.next(_0x3d4827));
            } catch (_0x362929) {
              _0x520afc(_0x362929);
            }
          }
          function _0x5105fe(_0x57ec10) {
            try {
              _0x52fe9a(_0x5e6791["throw"](_0x57ec10));
            } catch (_0x379b0f) {
              _0x520afc(_0x379b0f);
            }
          }
          function _0x52fe9a(_0x353dc0) {
            var _0x47819b;
            if (_0x353dc0.done) {
              _0x5578f3(_0x353dc0.value);
            } else {
              _0x47819b = _0x353dc0.value;
              (_0x47819b instanceof _0x318ff4 ? _0x47819b : new _0x318ff4(function (_0x23c03f) {
                _0x23c03f(_0x47819b);
              })).then(_0x910b50, _0x5105fe);
            }
          }
          _0x52fe9a((_0x5e6791 = _0x5e6791.apply(_0x57ba38, _0x26a7a6 || [])).next());
        });
      };
      class _0x452b26 {
        static ["Initialize"]() {
          return false;
        }
        static ['GetVideo']() {
          return _0x1d0b69(this, undefined, undefined, function* () {
            return false;
          });
        }
        static ["ShowVideo"]() {
          return _0x1d0b69(this, undefined, undefined, function* () {
            return false;
          });
        }
      }
      _0x452b26.admob_app_id = 'ca-app-pub-9914435712901407~3434857441';
      _0x452b26.VideoId = "ca-app-pub-9914435712901407/1208736088";
      _0x452b26.TestID = "ca-app-pub-3940256099942544/5224354917";
      _0x452b26.isTesting = false;
      _0x452b26.HasVideo = false;
      _0x452b26.VideoWatched = false;
      _0x452b26.Subscribed = false;
      class _0x402199 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.MainScene
          });
          this._lastVelocity = new Phaser.Math.Vector2(0x1, 0x0);
          this.cIndex = 0x0;
          this.cursorsVector = new Phaser.Math.Vector2(0x0, 0x0);
          this.wasDown = false;
        }
        ['preload']() {
          try {
            _0x452b26.GetVideo();
          } catch (_0x250a14) {
            console.log("ADMOB: failed to fetch video");
          }
          _0x1d0e6c.ApplyGameResolution();
          let _0x3ac5cd = _0x26e87a[_0x1d0e6c.Core.PlayerOptions.SelectedStage][0x0];
          if (_0x3ac5cd.tileset) {
            this.load.image(_0x3ac5cd.tileset.setKey, _0x3ac5cd.tileset.setPath);
            this.load.tilemapTiledJSON(_0x3ac5cd.tileset.mapKey, _0x3ac5cd.tileset.mapPath);
          }
        }
        ["create"]() {
          var _0x5ecbc6;
          this.joyStick = new _0xdd31c0.Z(this, {
            'x': 0x190,
            'y': 0x12c,
            'radius': 37.5,
            'base': this.add.circle(0x0, 0x0, 37.5, 0xcccccc, 0.5).setDepth(0x2711),
            'thumb': this.add.circle(0x0, 0x0, 17.5, 0x888888, 0.5).setDepth(0x2710),
            'forceMin': 8
          });
          this.cursors = this.input.keyboard.createCursorKeys();
          this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
          this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
          this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
          this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
          this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
          this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
          this.escKey.on("down", () => {
            _0x1d0e6c.Core.SceneManager.EnterPause();
          });
          this.pointer = this.input.activePointer;
          _0x1d0e6c.Core.InitGame(this, _0x1d0e6c.Core.PlayerOptions.SelectedCharacter);
          this.containmentRect_Enemies = new _0x206a30(0.7);
          this.containmentRect_Bullets = new _0x206a30(0.55);
          this.cameras.main.startFollow(_0x1d0e6c.Core.Player);
          if (null === (_0x5ecbc6 = this.input.gamepad.pad1) || undefined === _0x5ecbc6 ? undefined : _0x5ecbc6.connected) {
            this.gamepad = this.input.gamepad.pad1;
          }
          this.input.gamepad.once('down', (_0x1f9945, _0x1c5acf, _0xc03dc8) => {
            this.gamepad = _0x1f9945;
          });
          this.input.gamepad.once("connected", (_0x506677, _0x17d917, _0xff49d1) => {
            this.gamepad = _0x506677;
          });
          if (false && (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X).on("down", () => {
            _0x1d0e6c.Core.Player.xp += _0x1d0e6c.Core.LevelUpFactory.XpRequiredToLevelUp - _0x1d0e6c.Core.LevelUpFactory.PreviousXpRequiredToLevelUp;
            _0x1d0e6c.Core.CheckForLevelUp();
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).on('down', () => {
            _0x1d0e6c.Core.SceneManager.EnterDebug();
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z).on("down", () => {
            for (let _0x4c536e = _0x1d0e6c.Core.LevelUpFactory.WeaponStore.length - 0x1; _0x4c536e >= 0x0; _0x4c536e--) {
              const _0x5694e2 = _0x1d0e6c.Core.LevelUpFactory.WeaponStore[_0x4c536e];
              _0x1d0e6c.Core.LevelWeaponUp(_0x5694e2);
              _0x1d0e6c.Core.Player.LevelUp();
            }
            _0x1d0e6c.Core.Player.xp = _0x1d0e6c.Core.LevelUpFactory.PreviousXpRequiredToLevelUp;
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G).on("down", () => {
            _0x1d0e6c.Core.debug_Treasure();
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I).on("down", () => {
            _0x1d0e6c.Core.Player.SetInvulForMilliSeconds(Number.MAX_SAFE_INTEGER);
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H).on("down", () => {
            _0x1d0e6c.Core.Player.RecoverHp(0x270f);
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K).on('down', () => {
            _0x1d0e6c.Core.RosaryDamage();
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V).on("down", () => {
            _0x1d0e6c.Core.TurnOnVacuum();
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O).on("down", () => {
            _0x1d0e6c.Core.Player.OnDeath();
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E).on('down', () => {
            _0x1d0e6c.Core.debug_SpawnEnemies();
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q).on("down", () => {
            _0x1d0e6c.Core.debug_CharShowcase(false);
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T).on('down', () => {
            _0x1d0e6c.Core.debug_NextMinute();
          }), this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F).on("down", () => {
            _0x1d0e6c.Core.debug_FireAll();
          }), false)) {
            var _0x2e3c0d = this.add.image(0x0, 48, 'UI', "pause.png").setScrollFactor(0x0).setScale(1.5).setInteractive().setAlpha(0.3).setOrigin(0x0, 0x0);
            _0x2e3c0d.setAlpha(0.001);
            _0x2e3c0d.on("pointerdown", () => {
              _0x1d0e6c.Core.SceneManager.EnterDebug();
            });
          }
          this.pauseButton = this.add.image(this.renderer.width, 48, 'UI', 'pause.png').setScrollFactor(0x0).setScale(1.5).setInteractive().setAlpha(0.3).setOrigin(0x1, 0x0);
          this.pauseButton.on('pointerdown', () => {
            _0x1d0e6c.Core.SceneManager.EnterPause();
          });
          if (_0x1d0e6c.Core.PlayerOptions.SelectedHyper) {
            _0x1d0e6c.Sound.PlayMusic(_0xae9ba1.BGM_Forest, {
              'volume': 0.3,
              'loop': true,
              'rate': 1.25,
              'detune': 0x64
            });
          } else {
            _0x1d0e6c.Sound.PlayMusic(_0xae9ba1.BGM_Forest, {
              'volume': 0.3,
              'loop': true
            });
          }
        }
        ["dumpJoyStickState"]() {}
        ["update"](_0x136dd6, _0x19565b = 0x0) {
          this.maxSpeed = _0x34bb1a.PlayerPxSpeed * _0x1d0e6c.Core.Player.moveSpeed;
          if (this.pointer.isDown || this.input.pointer1.isDown) {
            if (!this.joyStick.visible) {
              this.joyStick.visible = true;
              this.joyStick.enable = true;
              this.joyStick.setPosition(this.pointer.x | this.input.pointer1.x, this.pointer.y | this.input.pointer1.y);
              if (_0x1d0e6c.Core.PlayerOptions.JoystickVisible) {
                this.joyStick.thumb.alpha = 0x1;
                this.joyStick.base.alpha = 0x1;
              } else {
                this.joyStick.thumb.alpha = 0.001;
                this.joyStick.base.alpha = 0.001;
              }
            }
            this.physics.velocityFromRotation(this.joyStick.rotation, this.joyStick.force > 8 ? this.maxSpeed : 0x0, _0x1d0e6c.Core.Player.body.velocity);
            this._lastVelocity.copy(_0x1d0e6c.Core.Player.body.velocity);
          } else {
            this.joyStick.enable = false;
            this.joyStick.visible = false;
            _0x1d0e6c.Core.Player.lastFacedDirection = this._lastVelocity;
            _0x1d0e6c.Core.Player.body.velocity.set(0x0);
            let _0x42d001 = false;
            this.cursorsVector.x = 0x0;
            this.cursorsVector.y = 0x0;
            _0x42d001 = this.updateCursors(_0x19565b);
            _0x42d001 = _0x42d001 || this.updateController(_0x19565b);
            if (_0x42d001) {
              _0x1d0e6c.Core.Player.setVelocity(this.cursorsVector.x, this.cursorsVector.y);
              this._lastVelocity.copy(_0x1d0e6c.Core.Player.body.velocity);
            } else {
              _0x1d0e6c.Core.Player.lastFacedDirection = this._lastVelocity;
              _0x1d0e6c.Core.Player.body.velocity.set(0x0);
            }
          }
          if (!_0x1d0e6c.Core.IsTimeStopped) {
            for (let _0x45630f = 0x0; _0x45630f < 0xa; _0x45630f++) {
              this.containmentRect_Enemies.DespawnIfOutside(_0x1d0e6c.Core.EnemyGroup.children.entries);
            }
          }
          for (let _0x551151 = 0x0; _0x551151 < 0xa; _0x551151++) {
            this.containmentRect_Bullets.DespawnIfOutside(_0x1d0e6c.Core.BulletGroup.children.entries);
          }
          _0x1d0e6c.Core.Update(_0x19565b);
          _0x1d0e6c.Core.Stage.Update(_0x19565b);
        }
        ["updateCursors"](_0xfb74ce) {
          let _0x497d22 = false;
          if (this.cursors.left.isDown || this.aKey.isDown) {
            this.cursorsVector.x = -0x1;
            _0x497d22 = true;
          } else if (this.cursors.right.isDown || this.dKey.isDown) {
            this.cursorsVector.x = 0x1;
            _0x497d22 = true;
          }
          if (this.cursors.up.isDown || this.wKey.isDown) {
            this.cursorsVector.y = -0x1;
            _0x497d22 = true;
          } else if (this.cursors.down.isDown || this.sKey.isDown) {
            this.cursorsVector.y = 0x1;
            _0x497d22 = true;
          }
          if (!(0x0 == this.cursorsVector.x && 0x0 == this.cursorsVector.y)) {
            this.cursorsVector = this.cursorsVector.normalize();
            this.cursorsVector.x *= this.maxSpeed;
            this.cursorsVector.y *= this.maxSpeed;
            _0x497d22 = true;
          }
          return _0x497d22;
        }
        ['updateController'](_0xd8deed) {
          let _0x5a9989 = false;
          return this.gamepad ? this.gamepad.isButtonDown(0x9) && !this.wasDown ? (_0x1d0e6c.Core.SceneManager.EnterPause(), this.wasDown = true, _0x5a9989) : this.gamepad.isButtonDown(0x8) && false && !this.wasDown ? (_0x1d0e6c.Core.SceneManager.EnterDebug(), this.wasDown = true, _0x5a9989) : (this.wasDown = false, this.gamepad.left ? (this.cursorsVector.x = -0x1, _0x5a9989 = true) : this.gamepad.right && (this.cursorsVector.x = 0x1, _0x5a9989 = true), this.gamepad.up ? (this.cursorsVector.y = -0x1, _0x5a9989 = true) : this.gamepad.down && (this.cursorsVector.y = 0x1, _0x5a9989 = true), 0x0 != this.cursorsVector.x || 0x0 != this.cursorsVector.y ? (this.cursorsVector = this.cursorsVector.normalize(), this.cursorsVector.x *= this.maxSpeed, this.cursorsVector.y *= this.maxSpeed, _0x5a9989 = true) : (Math.abs(this.gamepad.leftStick.x) > 0.3 && (this.cursorsVector.x = this.gamepad.leftStick.x * this.maxSpeed, _0x5a9989 = true), Math.abs(this.gamepad.leftStick.y) > 0.3 && (this.cursorsVector.y = this.gamepad.leftStick.y * this.maxSpeed, _0x5a9989 = true)), _0x5a9989) : _0x5a9989;
        }
      }
      class _0x17d3e5 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.PreloadScene
          });
        }
        ["preload"]() {
          this.load.image('forest_tile_bg', 'assets/img/bgTile1024A.png');
          this.load.image("introBG", 'assets/img/introBG.png');
          this.load.image("title", "assets/img/title.png");
          this.load.image('gameOver', 'assets/img/gameOver.png');
          this.load.image("stageComplete", "assets/img/stageComplete.png");
          this.load.atlas('UI', 'assets/img/UI.png', "assets/img/UI.json");
          this.load.atlas('enemies', "assets/img/enemies.png", "assets/img/enemies.json");
          this.load.atlas("vfx", "assets/img/vfx.png", "assets/img/vfx.json");
          this.load.atlas("illustrations", 'assets/img/illustrations.png', "assets/img/illustrations.json");
          this.load.multiatlas("items", 'assets/img/items.json', "assets/img");
          this.load.multiatlas('characters', "assets/img/characters.json", "assets/img");
          this.load.multiatlas("angel", "assets/img/angel.json", "assets/img");
          this.load.bitmapFont("damage", "assets/fonts/damNum-export.png", "assets/fonts/damNum-export.xml");
          this.load.audio(_0x52c10f.Treasure1, ['assets/sfx/VS_Treasure1Small_v04-03.ogg']);
          this.load.audio(_0x52c10f.Treasure2, ["assets/sfx/VS_Treasure2Medium_v02-03.ogg"]);
          this.load.audio(_0x52c10f.Treasure3, ["assets/sfx/VS_Treasure3Large_v01-03.ogg"]);
          this.load.audio(_0x52c10f.TreasureFound, ['assets/sfx/VS_TreasureFound_v04-01.ogg']);
          this.load.audio(_0x52c10f.BGM_GameOver, ["assets/sfx/VS_GameOver_v02-01.ogg"]);
          this.load.audio(_0x52c10f.BGM_Intro, ["assets/sfx/VS_TitleIntro_v01-03.ogg"]);
          this.load.audio(_0xae9ba1.BGM_Forest, ["assets/sfx/VS_Music_v04-01.ogg"]);
          this.load.audio(_0x52c10f.ClickIn, ["assets/sfx/sfx_sounds_pause7_in.ogg"]);
          this.load.audio(_0x52c10f.ClickOut, ["assets/sfx/sfx_sounds_pause7_out.ogg"]);
          this.load.audio(_0x52c10f.MagicMissile, ["assets/sfx/VS_ProjectileMagic_v04-03.ogg"]);
          this.load.audio(_0x52c10f.Whip, ["assets/sfx/sfx_sounds_impact15_2.ogg"]);
          this.load.audio(_0x52c10f.Shot, ["assets/sfx/VS_Projectile_v06-02.ogg"]);
          this.load.audio(_0x52c10f.Lightning, ['assets/sfx/sfx_lightningimpact.ogg']);
          this.load.audio(_0x52c10f.Holywater, ["assets/sfx/sfx_frostimpact.ogg"]);
          this.load.audio(_0x52c10f.LevelUp, ["assets/sfx/VS_LevelUp_v02-02.ogg"]);
          this.load.audio(_0x52c10f.Hit, ["assets/sfx/VS_EnemyHit_v06-02.ogg"]);
          this.load.audio(_0x52c10f.Coin, ["assets/sfx/sfx_coin_double4.ogg"]);
          this.load.audio(_0x52c10f.Gem, ["assets/sfx/VS_Gem_v04-01-B.ogg"]);
          this.load.audio(_0x52c10f.Roast, ["assets/sfx/sfx_sounds_powerup2.ogg"]);
          this.load.audio(_0x52c10f.Rosary, ["assets/sfx/sfx_exp_double1.ogg"]);
          this.load.audio(_0x52c10f.Orologion, ["assets/sfx/sfx_sounds_impact9.ogg"]);
          this.load.audio(_0x52c10f.Vacuum, ["assets/sfx/sfx_sounds_powerup18.ogg"]);
          this.load.audio(_0x52c10f.PentagramSFX, ['assets/sfx/sfx_wpn_cannon3.ogg']);
          this.load.audio(_0x52c10f.LossSFX, ["assets/sfx/sxf_loss.ogg"]);
          this.sound.pauseOnBlur = false;
        }
        ["create"]() {
          this.cameras.main.setBackgroundColor("#C80000");
          this.cameras.main.backgroundColor.setTo(0xc8, 0x0, 0x0);
          this.cameras.main.zoom = 1.1;
          _0x452b26.Initialize();
          this.scene.launch(_0xf7a726.OmniScene);
          _0x1d0e6c.Core = new _0x34bb1a(this.game, this);
          _0x1d0e6c.Core.SceneManager = new class {
            constructor(_0x2000a4, _0x1368dc) {
              this.Game = _0x2000a4;
              this.scene = _0x1368dc;
            }
            ['Init']() {
              this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
              this.UI_mainMenu = this.scene.get(_0xf7a726.UI_mainMenu);
              this.MainScene = this.scene.get(_0xf7a726.MainScene);
              this.IntroScene = this.scene.get(_0xf7a726.IntroScene);
              this.CharSelectionScene = this.scene.get(_0xf7a726.CharSelectionScene);
              this.StageSelectionScene = this.scene.get(_0xf7a726.StageSelectionScene);
              this.PowerUpScene = this.scene.get(_0xf7a726.PowerUpScene);
              this.OmniScene = this.scene.get(_0xf7a726.OmniScene);
              this.OptionsScene = this.scene.get(_0xf7a726.OptionsScene);
              this.GameOverScene = this.scene.get(_0xf7a726.GameOverScene);
              this.PauseScene = this.scene.get(_0xf7a726.PauseScene);
              this.UI_levelUpScene = this.scene.get(_0xf7a726.UI_levelUpScene);
              this.CollectionWeaponScene = this.scene.get(_0xf7a726.CollectionWeaponScene);
              this.UI_treasureScene = this.scene.get(_0xf7a726.UI_treasureScene);
              this.PostGameScene = this.scene.get(_0xf7a726.PostGameScene);
              this.CollectionAchievementsScene = this.scene.get(_0xf7a726.CollectionAchievementsScene);
              this.DebugScene = this.scene.get(_0xf7a726.DebugScene);
              this.UI_overlayScene = this.scene.get(_0xf7a726.UI_overlayScene);
              this.UI_creditsScene = this.scene.get(_0xf7a726.UI_creditsScene);
              this.UI_resolutionScene = this.scene.get(_0xf7a726.UI_resolutionScene);
            }
            ["LaunchUIOverlay"]() {
              this.scene.launch(this.UI_overlayScene);
              this.scene.bringToTop(this.UI_overlayScene);
            }
            ["OptionsFromMainMenu"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.launch(this.OptionsScene);
              this.scene.bringToTop(this.OptionsScene);
              this.scene.pause(this.IntroScene);
              this.UI_topBar.EnableBack(this.ExitOptions.bind(this));
              this.UI_topBar.DisableOptions();
              this.scene.bringToTop(this.UI_overlayScene);
            }
            ["ExitOptions"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.OptionsScene);
              this.scene.stop(this.OptionsScene);
              this.scene.resume(this.IntroScene);
              this.IntroScene.MakeUIGrid(this.IntroScene.UI_topBar.OptionsButton);
              this.UI_topBar.EnableOptions(this.OptionsFromMainMenu.bind(this));
              this.UI_topBar.DisableBack();
            }
            ["StartFromMainMenu"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.UI_mainMenu);
              this.scene.sleep(this.UI_mainMenu);
              this.scene.launch(this.CharSelectionScene);
              this.scene.bringToTop(this.CharSelectionScene);
              this.UI_topBar.EnableBack(this.BackFromCharSelectionScene.bind(this));
            }
            ["PowerUpFromMainMenu"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.UI_mainMenu);
              this.scene.sleep(this.UI_mainMenu);
              this.scene.launch(this.PowerUpScene);
              this.scene.bringToTop(this.PowerUpScene);
              this.UI_topBar.EnableBack(this.BackFromPowerUpSelectionScene.bind(this));
            }
            ["BackFromCharSelectionScene"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.CharSelectionScene);
              this.scene.stop(this.CharSelectionScene);
              this.scene.setVisible(true, this.UI_mainMenu);
              this.scene.wake(this.UI_mainMenu);
              this.scene.bringToTop(this.UI_mainMenu);
              this.UI_topBar.EnableOptions(this.OptionsFromMainMenu.bind(this));
              this.UI_topBar.DisableBack();
              this.IntroScene.MakeUIGrid(this.IntroScene.UI_mainMenu.StartButton);
            }
            ["BackFromStageSelectionScene"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.StageSelectionScene);
              this.scene.stop(this.StageSelectionScene);
              this.scene.setVisible(true, this.UI_mainMenu);
              this.scene.wake(this.UI_mainMenu);
              this.scene.bringToTop(this.UI_mainMenu);
              this.UI_topBar.EnableOptions(this.OptionsFromMainMenu.bind(this));
              this.UI_topBar.DisableBack();
              this.IntroScene.MakeUIGrid(this.IntroScene.UI_mainMenu.StartButton);
            }
            ["BackFromPowerUpSelectionScene"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.PowerUpScene);
              this.scene.stop(this.PowerUpScene);
              this.scene.setVisible(true, this.UI_mainMenu);
              this.scene.wake(this.UI_mainMenu);
              this.scene.bringToTop(this.UI_mainMenu);
              this.UI_topBar.EnableOptions(this.OptionsFromMainMenu.bind(this));
              this.UI_topBar.DisableBack();
              this.IntroScene.MakeUIGrid(this.IntroScene.UI_mainMenu.PowerupButton);
            }
            ["StartFromCharSelection"]() {
              this.UI_overlayScene.DestroyGrid();
              if (_0x1d0e6c.Core.PlayerOptions.UnlockedStages.length <= 0x0 && _0x1d0e6c.Core.PlayerOptions.UnlockedHypers.length <= 0x0) {
                this.scene.stop(this.CharSelectionScene);
                return void this.LaunchMainScene();
              }
              this.scene.setVisible(false, this.CharSelectionScene);
              this.scene.stop(this.CharSelectionScene);
              this.scene.launch(this.StageSelectionScene);
              this.scene.bringToTop(this.StageSelectionScene);
              this.UI_topBar.EnableBack(this.BackFromStageSelectionScene.bind(this));
            }
            ['StartFromStageSelection']() {
              this.scene.stop(this.StageSelectionScene);
              this.LaunchMainScene();
            }
            ['LaunchMainScene']() {
              this.scene.stop(this.UI_topBar);
              this.scene.stop(this.IntroScene);
              this.scene.stop(this.UI_mainMenu);
              this.scene.launch(this.MainScene);
            }
            ['QuitFromPauseMenu']() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.stop(this.PauseScene);
              this.scene.stop(this.GameOverScene);
              this.scene.stop(this.MainScene);
              this.scene.launch(this.PostGameScene);
              _0x1d0e6c.Sound.StopMusic(_0xae9ba1.BGM_Forest);
            }
            ["PostGameFromGameOver"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.pause(this.MainScene);
              this.scene.stop(this.GameOverScene);
              this.scene.launch(this.PostGameScene);
              _0x1d0e6c.Sound.StopMusic(_0xae9ba1.BGM_Forest);
            }
            ["StartFromPostGame"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.stop(this.PauseScene);
              this.scene.stop(this.PostGameScene);
              this.scene.stop(this.MainScene);
              this.scene.start(this.IntroScene);
            }
            ["CollectionFromMainMenu"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.UI_mainMenu);
              this.scene.sleep(this.UI_mainMenu);
              this.scene.launch(this.CollectionWeaponScene);
              this.scene.bringToTop(this.CollectionWeaponScene);
              this.UI_topBar.EnableBack(this.BackFromCollection.bind(this));
            }
            ['AchievementsFromMainMenu']() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.UI_mainMenu);
              this.scene.sleep(this.UI_mainMenu);
              this.scene.launch(this.CollectionAchievementsScene);
              this.scene.bringToTop(this.CollectionAchievementsScene);
              this.UI_topBar.EnableBack(this.BackFromAchievements.bind(this));
            }
            ["Credits_FromMainMenu"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.UI_mainMenu);
              this.scene.sleep(this.UI_mainMenu);
              this.scene.launch(this.UI_creditsScene);
              this.scene.bringToTop(this.UI_creditsScene);
              this.UI_topBar.EnableBack(this.BackFrom_Credits.bind(this));
            }
            ["Resolution_FromMainMenu"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.setVisible(false, this.UI_mainMenu);
              this.scene.sleep(this.UI_mainMenu);
              this.scene.launch(this.UI_resolutionScene);
              this.scene.bringToTop(this.UI_resolutionScene);
              this.UI_topBar.EnableBack(this.BackFrom_Resolution.bind(this));
            }
            ["BackFromCollection"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.stop(this.CollectionWeaponScene);
              this.scene.setVisible(true, this.UI_mainMenu);
              this.scene.wake(this.UI_mainMenu);
              this.scene.bringToTop(this.UI_mainMenu);
              this.UI_topBar.EnableOptions(this.OptionsFromMainMenu.bind(this));
              this.UI_topBar.DisableBack();
              this.IntroScene.MakeUIGrid(this.IntroScene.UI_mainMenu.CollectionButton);
            }
            ["BackFromAchievements"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.stop(this.CollectionAchievementsScene);
              this.scene.setVisible(true, this.UI_mainMenu);
              this.scene.wake(this.UI_mainMenu);
              this.scene.bringToTop(this.UI_mainMenu);
              this.UI_topBar.EnableOptions(this.OptionsFromMainMenu.bind(this));
              this.UI_topBar.DisableBack();
              this.IntroScene.MakeUIGrid(this.IntroScene.UI_mainMenu.AchievementButton);
            }
            ["BackFrom_Credits"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.stop(this.UI_creditsScene);
              this.scene.setVisible(true, this.UI_mainMenu);
              this.scene.wake(this.UI_mainMenu);
              this.scene.bringToTop(this.UI_mainMenu);
              this.UI_topBar.EnableOptions(this.OptionsFromMainMenu.bind(this));
              this.UI_topBar.DisableBack();
              this.IntroScene.MakeUIGrid(this.IntroScene.UI_mainMenu.CreditsButton);
            }
            ["BackFrom_Resolution"]() {
              this.UI_overlayScene.DestroyGrid();
              this.scene.stop(this.UI_resolutionScene);
              this.scene.setVisible(true, this.UI_mainMenu);
              this.scene.wake(this.UI_mainMenu);
              this.scene.bringToTop(this.UI_mainMenu);
              this.UI_topBar.EnableOptions(this.OptionsFromMainMenu.bind(this));
              this.UI_topBar.DisableBack();
              this.IntroScene.MakeUIGrid(this.IntroScene.UI_mainMenu.ResolutionButton);
            }
            ['StartTreasureScene']() {
              this.scene.pause(this.MainScene);
              _0x1d0e6c.Sound.FadeMusic(_0xae9ba1.BGM_Forest, 0x0, 0x1f4);
              _0x1d0e6c.Core.FreezeSnapshot(() => {
                if (this.scene.isActive(this.UI_treasureScene)) {
                  this.scene.stop(this.UI_treasureScene);
                  this.scene.restart(this.UI_treasureScene);
                } else {
                  this.scene.start(this.UI_treasureScene);
                }
              });
            }
            ["ResumeFromTreasureScene"]() {
              _0x1d0e6c.ApplyGameResolution();
              this.scene.resume(this.MainScene);
              this.scene.stop(this.UI_treasureScene);
              this.UI_overlayScene.DestroyGrid();
              _0x1d0e6c.Core.RemoveSnapshot();
              _0x1d0e6c.Sound.FadeMusic(_0xae9ba1.BGM_Forest, 0.3, 0x1f4);
            }
            ["EnterPause"]() {
              this.scene.pause(this.MainScene);
              _0x1d0e6c.Core.FreezeSnapshot(() => {
                this.scene.launch(this.PauseScene);
              });
            }
            ["ResumeFromPause"]() {
              _0x1d0e6c.ApplyGameResolution();
              this.scene.resume(this.MainScene);
              this.scene.stop(this.PauseScene);
              this.UI_overlayScene.DestroyGrid();
              _0x1d0e6c.Core.RemoveSnapshot();
            }
            ["EnterLevelUp"]() {
              this.scene.pause(this.MainScene);
              _0x1d0e6c.Core.FreezeSnapshot(() => {
                this.scene.launch(this.UI_levelUpScene);
              });
            }
            ['ResumeFromLevelUp']() {
              _0x1d0e6c.ApplyGameResolution();
              this.scene.resume(this.MainScene);
              this.scene.stop(this.UI_levelUpScene);
              this.UI_overlayScene.DestroyGrid();
              _0x1d0e6c.Core.RemoveSnapshot();
              _0x1d0e6c.Core.ExitLevelUpScene();
            }
            ['GameOver']() {
              this.scene.pause(this.MainScene);
              _0x1d0e6c.Sound.FadeMusic(_0xae9ba1.BGM_Forest, 0x0, 0x1f4);
              _0x1d0e6c.Core.FreezeSnapshot(() => {
                this.scene.launch(this.GameOverScene);
              });
            }
            ["BackFromGameOver"]() {
              _0x1d0e6c.ApplyGameResolution();
              this.scene.resume(this.MainScene);
              this.scene.stop(this.GameOverScene);
              this.UI_overlayScene.DestroyGrid();
              _0x1d0e6c.Core.RemoveSnapshot();
              _0x1d0e6c.Sound.FadeMusic(_0xae9ba1.BGM_Forest, 0.3, 0x1f4);
            }
            ["EnterDebug"]() {
              this.scene.pause(this.MainScene);
              _0x1d0e6c.Core.FreezeSnapshot(() => {
                this.scene.launch(this.DebugScene);
              });
            }
            ["ResumeFromDebug"]() {
              _0x1d0e6c.ApplyGameResolution();
              this.scene.resume(this.MainScene);
              this.scene.stop(this.DebugScene);
              this.UI_overlayScene.DestroyGrid();
              _0x1d0e6c.Core.RemoveSnapshot();
            }
          }(this.game, this.scene);
          _0x1d0e6c.Core.SceneManager.Init();
          _0x1d0e6c.Sound = new class {
            constructor(_0x258671, _0x2377d1) {
              this.isFocused = true;
              this.soundLibrary = {};
              this.musicLibrary = {};
              this.Game = _0x258671;
              this.scene = _0x2377d1;
              this.Game.events.addListener(Phaser.Core.Events.FOCUS, this.onFocus, this);
              this.Game.events.addListener(Phaser.Core.Events.BLUR, this.onBlur, this);
              for (let _0x184b42 in _0x52c10f) this.soundLibrary[_0x184b42] = {
                'instances': 0x0
              };
              for (let _0x3dd88e in _0xae9ba1) this.musicLibrary[_0x3dd88e] = {
                'instance': null
              };
            }
            ['onFocus']() {
              this.isFocused = true;
            }
            ["onBlur"]() {
              this.isFocused = false;
            }
            ["PlayMusic"](_0x1c4b1b, _0x652b93 = null) {
              var _0x146180 = this.musicLibrary[_0x1c4b1b].instance;
              if (!_0x146180) {
                _0x146180 = this.musicLibrary[_0x1c4b1b].instance = this.scene.sound.add(_0x1c4b1b.toString());
              }
              _0x146180.play(_0x652b93);
              if (!_0x1d0e6c.Core.PlayerOptions.MusicEnabled) {
                _0x146180.volume = 0x0;
              }
            }
            ['StopMusic'](_0x283ca5) {
              var _0x36158b = this.musicLibrary[_0x283ca5].instance;
              if (_0x36158b) {
                _0x36158b.stop();
                if (!_0x1d0e6c.Core.PlayerOptions.MusicEnabled) {
                  _0x36158b.volume = 0x0;
                }
              }
            }
            ["FadeMusic"](_0x2d8850, _0x58f6c0, _0xab8291) {
              var _0x55f955 = this.musicLibrary[_0x2d8850].instance;
              if (_0x55f955) {
                if (_0x1d0e6c.Core.PlayerOptions.MusicEnabled) {
                  if (_0xab8291 > 0x0) {
                    this.scene.tweens.add({
                      'targets': _0x55f955,
                      'volume': _0x58f6c0,
                      'duration': _0xab8291
                    });
                  } else {
                    _0x55f955.volume = _0x58f6c0;
                  }
                } else {
                  _0x55f955.volume = 0x0;
                }
              }
            }
            ["PlaySound"](_0x2ce313, _0x1dd324 = null, _0x354b25 = 0x0, _0x556e3a = 0x0) {
              if (_0x1d0e6c.Core.PlayerOptions.SoundsEnabled) {
                if (_0x354b25 > 0x0 && _0x556e3a > 0x0) {
                  if (this.soundLibrary[_0x2ce313].instances >= _0x556e3a) {
                    return;
                  }
                  this.scene.time.addEvent({
                    'delay': _0x354b25,
                    'callback': () => this.soundLibrary[_0x2ce313].instances--,
                    'callbackScope': this
                  });
                  this.soundLibrary[_0x2ce313].instances++;
                }
                if (_0x1dd324) {
                  if (_0x1dd324.volume) {
                    _0x1dd324.volume *= 0.5;
                  } else {
                    _0x1dd324.volume = 0.1;
                  }
                } else {
                  _0x1dd324 = {
                    'volume': 0.1
                  };
                }
                this.scene.sound.play(_0x2ce313, _0x1dd324);
              }
            }
            ["StopSound"](_0x32336f) {
              this.scene.sound.stopByKey(_0x32336f);
            }
          }(this.game, this.scene.get(_0xf7a726.OmniScene));
          this.MoveToNextScene();
        }
        ["MoveToNextScene"]() {
          _0x59bb2e = this;
          _0x39c166 = function* () {
            yield _0x1d0e6c.Core.PlayerOptions.Load();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.BGM_Intro, {
              'volume': 0.7
            });
            this.scene.start(_0xf7a726.IntroScene);
          };
          return new ((_0xb2898f = undefined) || (_0xb2898f = Promise))(function (_0x3bf352, _0xfc0318) {
            function _0x48793c(_0x428d7f) {
              try {
                _0x388c8c(_0x39c166.next(_0x428d7f));
              } catch (_0x3c6d93) {
                _0xfc0318(_0x3c6d93);
              }
            }
            function _0x508921(_0x125903) {
              try {
                _0x388c8c(_0x39c166["throw"](_0x125903));
              } catch (_0x40bfa8) {
                _0xfc0318(_0x40bfa8);
              }
            }
            function _0x388c8c(_0x5a9ff2) {
              var _0x17eaa1;
              if (_0x5a9ff2.done) {
                _0x3bf352(_0x5a9ff2.value);
              } else {
                _0x17eaa1 = _0x5a9ff2.value;
                (_0x17eaa1 instanceof _0xb2898f ? _0x17eaa1 : new _0xb2898f(function (_0x50e057) {
                  _0x50e057(_0x17eaa1);
                })).then(_0x48793c, _0x508921);
              }
            }
            _0x388c8c((_0x39c166 = _0x39c166.apply(_0x59bb2e, undefined || [])).next());
          });
          var _0x59bb2e;
          var _0xb2898f;
          var _0x39c166;
        }
      }
      class _0x579459 extends Phaser.GameObjects.Container {
        constructor(_0x36cd2c, _0x2a05f9, _0x4ca89d, _0x3cb5c9, _0x36a99c) {
          super(_0x36cd2c, _0x2a05f9, _0x4ca89d);
          this.setScale(_0x34bb1a.PixelScale);
          var _0x1c6727 = {
            'x': 0x0,
            'y': 0x0,
            'width': _0x3cb5c9,
            'height': _0x36a99c
          };
          this.Background = new _0x35cd95.NineSlice(this.scene, {
            'sourceKey': 'UI',
            'sourceFrame': 'frame1_c2.png',
            'sourceLayout': {
              'width': 0xc,
              'height': 0xc
            }
          }, _0x1c6727);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x4, 0x4, 'UI', "frameB.png").setOrigin(0x0, 0x0).setScale(0x2);
          this.myIcon = new Phaser.GameObjects.Image(this.scene, 0x1c, 0x1c, '', '').setOrigin(0.5).setScale(0x2);
          this.myName = new Phaser.GameObjects.Text(this.scene, 0x50, 0x6, "Name", {}).setScale(0x1);
          this.myNextLevel = new Phaser.GameObjects.Text(this.scene, 0.7 * _0x3cb5c9, 0x6, 'Level', {}).setScale(0x1);
          this.myDescription = new Phaser.GameObjects.Text(this.scene, 0xa, 0x3c, "Description", {});
          this.myDescription.setWordWrapWidth(0.9 * _0x3cb5c9).setScale(0x1);
          this.add([this.Background, this.myIconBG, this.myIcon, this.myName, this.myNextLevel, this.myDescription]);
        }
        ["AssignData"](_0x3586a3, _0x14c9f3) {
          this.weaponType = _0x3586a3;
          var _0x248c0d = _0x14b553[_0x3586a3][0x0];
          this.myName.text = _0x248c0d.name;
          this.myNextLevel.text = 'New!';
          this.myNextLevel.setTint(0xffff00);
          this.myDescription.text = _0x248c0d.description;
          this.myIcon.setTexture(_0x248c0d.texture, _0x248c0d.frameName);
          this.Background.setTint(_0x248c0d.isEvolution ? 0xffff00 : 0xffffff);
          if (_0x14c9f3 > 0x0) {
            _0x248c0d = _0x14b553[_0x3586a3][_0x14c9f3];
            this.myNextLevel.text = "level: " + (_0x14c9f3 + 0x1).toString();
            this.myNextLevel.clearTint();
            var _0x42229d = "Bonus: ";
            for (const _0x43a9fa in _0x248c0d) _0x42229d += _0x43a9fa + " ";
            this.myDescription.text = _0x42229d;
            this.myDescription.text = _0x579459.ParseLevelUpInfo(_0x248c0d, _0x14b553[_0x3586a3][0x0].isPowerUp);
          }
        }
        ["AssignItemData"](_0x6c2d64) {
          this.weaponType = _0x6c2d64;
          var _0x124acb = _0x34b109[_0x6c2d64];
          this.myName.text = _0x124acb.name;
          this.myNextLevel.text = '';
          this.myDescription.text = _0x124acb.description;
          this.myIcon.setTexture(_0x124acb.texture, _0x124acb.frameName);
        }
        static ["ParseLevelUpInfo"](_0x567497, _0x3f0b2d) {
          var _0x3ca49a = '';
          for (const _0x17f026 in _0x567497) switch (_0x17f026) {
            default:
            case "repeatInterval":
              break;
            case "power":
              _0x3ca49a += _0x3f0b2d ? "[All] Base damage up by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n" : "Base damage up by " + (0xa * _0x567497[_0x17f026]).toFixed(0x0) + "\n";
              break;
            case 'area':
              _0x3ca49a += (_0x3f0b2d ? "[All] " : '') + "Base area up by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n";
              break;
            case "speed":
              _0x3ca49a += (_0x3f0b2d ? "[All] " : '') + "Base speed up by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n";
              break;
            case "amount":
              _0x3ca49a += (_0x3f0b2d ? "[All] " : '') + "Fires " + _0x567497[_0x17f026].toFixed(0x0) + " more projectile" + (Number.parseInt(_0x567497[_0x17f026]) > 0x1 ? 's' : '') + "\n";
              break;
            case "penetrating":
              _0x3ca49a += (_0x3f0b2d ? "[All] " : '') + "Passes through " + _0x567497[_0x17f026].toFixed(0x0) + " more enem" + (Number.parseInt(_0x567497[_0x17f026]) > 0x1 ? "ies" : 'y') + "\n";
              break;
            case "charges":
              _0x3ca49a += "Gains " + _0x567497[_0x17f026] + " additional charge" + (Number.parseInt(_0x567497[_0x17f026]) > 0x1 ? 's' : '') + "\n";
              break;
            case 'duration':
              _0x3ca49a += _0x3f0b2d ? "[All] Effect lasts " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "% longer\n" : "Effect lasts " + (0.001 * _0x567497[_0x17f026]).toFixed(0x1) + " seconds longer\n";
              break;
            case "cooldown":
              _0x3ca49a += (_0x3f0b2d ? "[All] " : '') + "Cooldown reduced by " + (-0x64 * _0x567497[_0x17f026]).toFixed(0x1) + "%\n";
              break;
            case "interval":
              _0x3ca49a += (_0x3f0b2d ? "[All] " : '') + "Cooldown reduced by " + (-0.001 * _0x567497[_0x17f026]).toFixed(0x1) + " seconds\n";
              break;
            case "maxHp":
              _0x3ca49a += "Max Health increases by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n";
              break;
            case "growth":
              _0x3ca49a += "XP gain increases by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n";
              break;
            case 'moveSpeed':
              _0x3ca49a += "Movement speed increases by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n";
              break;
            case "magnet":
              _0x3ca49a += "Pickup range increases by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n";
              break;
            case "luck":
              _0x3ca49a += "Chance to get lucky up by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n";
              break;
            case "regen":
              _0x3ca49a += "Health recovery per second increases by " + _0x567497[_0x17f026].toFixed(0x0);
              break;
            case "greed":
              _0x3ca49a += "Coins value increases by " + (0x64 * _0x567497[_0x17f026]).toFixed(0x0) + "%\n";
              break;
            case "armor":
              _0x3ca49a += "Reduces incoming damage by " + _0x567497[_0x17f026] + "\n";
              break;
            case "desc":
              _0x3ca49a += _0x567497[_0x17f026] + "\n";
          }
          return _0x3ca49a;
        }
      }
      class _0x2631d7 {
        constructor(_0x3bde86) {
          this.scaleFactorY = 0x1;
          this.value = 0x0;
          this.progressHeight = 0xa;
          this.scene = _0x3bde86;
          this.progressBox = new _0x35cd95.NineSlice(this.scene, _0x564740.ProgressBox, {
            'x': 0x0,
            'y': 0x0,
            'width': this.scene.renderer.width,
            'height': 0x12
          });
          this.progressBox.setScale(_0x34bb1a.PixelScale);
          this.progressBox.setScrollFactor(0x0);
          this.scene.add.existing(this.progressBox);
          this.progressBar = this.scene.add.image(0x4, 0x4, "vfx", "PfxDot.png");
          this.progressBar.setOrigin(0x0, 0x0);
          this.progressBar.setScrollFactor(0x0);
          this.progressBar.setScale(this.scene.renderer.width - 0x8, 0x8);
        }
        ["setScaleY"](_0x534513) {
          this.scaleFactorY = _0x534513;
          this.progressBox.setScale(_0x34bb1a.PixelScale, _0x34bb1a.PixelScale * this.scaleFactorY);
          this.progressBar.setScale(this.scene.renderer.width - 0x8, this.progressHeight * this.scaleFactorY);
          this.progressBar.y = 0x4 * this.scaleFactorY;
        }
        ["Update"]() {
          this.value += 0.1;
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
            this.progressBar.setTintFill(Phaser.Display.Color.GetColor(0xff * Math.abs(Math.sin(this.value)), 0xff * Math.abs(Math.cos(0.5 * this.value)), 0xc8 + 0x37 * Math.abs(Math.cos(this.value))));
          } else {
            this.progressBar.setTintFill(0x2266dd);
          }
        }
      }
      class _0x3b2b95 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.UI_levelUpScene
          });
          this.panels = new Array();
          this.TopLeft = new Phaser.Math.Vector2(0x0, 0x0);
          this.IsInitialised = false;
          this.CurrentAmountOfPanels = 0x3;
        }
        ["preload"]() {
          _0x1d0e6c.ApplyMenuResolution();
        }
        ["create"]() {
          const _0x48a915 = this.anims.generateFrameNames("vfx", {
            'start': 0x1,
            'end': 0x6,
            'zeroPad': 0x0,
            'prefix': "Burst",
            'suffix': ".png"
          });
          this.OnEnterAnimation = this.add.sprite(0.5 * this.renderer.width, 0.5 * this.renderer.width, "vfx", 'Burst1.png');
          this.OnEnterAnimation.anims.create({
            'key': 'enter',
            'frames': _0x48a915,
            'frameRate': 0x1e,
            'repeat': 0x0
          });
          this.OnEnterAnimation.visible = true;
          this.OnEnterAnimation.setScale(0x8);
          this.OnEnterAnimation.setDepth(0x3e8);
          this.OnEnterAnimation.blendMode = _0x2d874d.BlendModes.ADD;
          this.PfxEmitter = this.add.particles('items');
          this.PfxEmitter.createEmitter({
            'frame': {
              'frames': ["GemRed.png", "GemBlue.png", "GemGreen.png"]
            },
            'y': 0x0,
            'x': {
              'min': 0x0,
              'max': this.renderer.width
            },
            'rotate': {
              'min': 0x0,
              'max': 0x168
            },
            'lifespan': 0xfa0,
            'speedY': {
              'min': 0x64,
              'max': 0xc8
            },
            'scale': {
              'min': 0x1,
              'max': 0x2,
              'start': 0x2,
              'end': 0x0
            },
            'quantity': 0x4
          });
          var _0x3838c4 = 0.8 * _0x3dbb73.width;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x3838c4,
            'height': 546.4
          });
          this.background.setPosition(0.5 * this.renderer.width, 0.5 * this.renderer.height);
          this.background.setOrigin(0.5);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.TopLeft.x = this.background.x - 0.5 * this.background.width * _0x34bb1a.PixelScale;
          this.TopLeft.y = this.background.y - 0.5 * this.background.height * _0x34bb1a.PixelScale;
          var _0x40198e = 0.95 * _0x3838c4;
          this.header = new Phaser.GameObjects.Text(this, 0.5 * this.renderer.width, this.TopLeft.y + 0x2d, "Level Up!", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.footer = new Phaser.GameObjects.Text(this, 0.5 * this.renderer.width, this.TopLeft.y + 464.44, "\n\n\nincrease your Luck\n\nfor a chance to get 4 choices", {
            'align': "center"
          }).setScale(0x1).setOrigin(0.5);
          this.add.existing(this.header);
          this.add.existing(this.footer);
          for (let _0x93aee7 = 0x0; _0x93aee7 < 0x4; _0x93aee7++) {
            this.panels[_0x93aee7] = new _0x579459(this, this.renderer.width, this.TopLeft.y + 109.28 * _0x93aee7 + 109.28 - 0.025 * _0x3838c4, _0x40198e, 109.28);
            this.panels[_0x93aee7].OnEnterTween = this.tweens.add({
              'targets': this.panels[_0x93aee7],
              'x': this.TopLeft.x + 0.025 * _0x3838c4,
              'duration': 0x96 + 0x1e * _0x93aee7,
              'ease': 'Linear',
              'yoyo': false
            });
            this.add.existing(this.panels[_0x93aee7]);
          }
          this.background.setScale(-0.2, -0.1);
          this.background.setAngle(0xb4);
          this.OnEnterTween = this.tweens.add({
            'targets': this.background,
            'scale': _0x34bb1a.PixelScale,
            'angle': 0x0,
            'duration': 0x96,
            'ease': "Linear",
            'yoyo': false
          });
          this.IsInitialised = true;
          if (_0x1d0e6c.Core.LevelUpFactory.HasPowerupsInStore()) {
            this.PickRandomLevelUps();
          } else {
            this.PickItemLevelUps();
          }
          this.playerUI_levelUp = new _0x2631d7(this);
          this.playerUI_levelUp.setScaleY((_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683) * 1.4978070175438596);
          this.MakeUIGrid();
        }
        ["MakeUIGrid"]() {
          let _0x2b0504 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          let _0x23540f = this.panels.length;
          _0x2b0504.MakeUIGrid(0x1, _0x23540f, true);
          for (let _0x40b19a = 0x0; _0x40b19a < _0x23540f; _0x40b19a++) {
            if (this.panels[_0x40b19a].visible) {
              _0x2b0504.UI_grid.SetContents(0x0, _0x40b19a, this.panels[_0x40b19a].Background);
            }
          }
          _0x2b0504.ToggleCursorsVisibility(true);
          _0x2b0504.UI_grid.SelectGameObject(this.panels[0x0].Background);
          _0x2b0504.UI_selected = this.panels[0x0].Background;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x2b0504);
          _0x2b0504.OnCancelCallback = () => {};
        }
        ['OnButtonClicked'](_0x5906a9) {
          this.disablePanelsInput();
          _0x1d0e6c.Core.LevelWeaponUp(_0x5906a9);
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
          _0x1d0e6c.Core.SceneManager.ResumeFromLevelUp();
        }
        ["OnItemButtonClicked"](_0x2b9095) {
          this.disablePanelsInput();
          _0x1d0e6c.Core.MakeAndActivatePickup(_0x2b9095);
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
          _0x1d0e6c.Core.SceneManager.ResumeFromLevelUp();
        }
        ["PickRandomLevelUps"]() {
          var _0x1c3bf4 = new Array();
          _0x1c3bf4 = _0x1d0e6c.Core.LevelUpFactory.GetLevelUpPowerups();
          this.CurrentAmountOfPanels = _0x1c3bf4.length;
          this.footer.setVisible(false);
          for (let _0x555040 = 0x0; _0x555040 < this.panels.length; _0x555040++) {
            var _0x569f32 = _0x1c3bf4.pop();
            this.panels[_0x555040].Background.removeAllListeners();
            if (_0x569f32) {
              this.panels[_0x555040].visible = true;
              this.panels[_0x555040].AssignData(_0x569f32, _0x1d0e6c.Core.GetWeaponLevel(_0x569f32));
              this.panels[_0x555040].OnEnterTween.restart();
            } else {
              this.panels[_0x555040].visible = false;
            }
          }
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
            this.OnEnterAnimation.play("enter");
          } else {
            this.OnEnterAnimation.setVisible(false);
          }
          this.OnEnterTween.restart();
          this.time.addEvent({
            'delay': 0x12c,
            'callback': this.enablePanelsInput,
            'callbackScope': this,
            'loop': false
          });
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.LevelUp, {
            'volume': 0x2
          });
        }
        ['PickItemLevelUps']() {
          var _0x10aee0 = new Array();
          _0x10aee0 = _0x1d0e6c.Core.LevelUpFactory.GetLevelUpItems();
          this.CurrentAmountOfPanels = _0x10aee0.length;
          this.footer.setVisible(false);
          for (let _0x160881 = 0x0; _0x160881 < this.panels.length; _0x160881++) {
            var _0x47d525 = _0x10aee0.pop();
            this.panels[_0x160881].Background.removeAllListeners();
            if (_0x47d525) {
              this.panels[_0x160881].visible = true;
              this.panels[_0x160881].AssignItemData(_0x47d525);
              this.panels[_0x160881].OnEnterTween.restart();
            } else {
              this.panels[_0x160881].visible = false;
            }
          }
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
            this.OnEnterAnimation.play("enter");
          } else {
            this.OnEnterAnimation.setVisible(false);
          }
          this.OnEnterTween.restart();
          this.time.addEvent({
            'delay': 0x12c,
            'callback': this.enableItemPanelsInput,
            'callbackScope': this,
            'loop': false
          });
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.LevelUp, {
            'volume': 0x2
          });
        }
        ['enablePanelsInput']() {
          for (let _0x387f7c = 0x0; _0x387f7c < this.panels.length; _0x387f7c++) {
            this.panels[_0x387f7c].Background.setInteractive();
            this.panels[_0x387f7c].Background.once("pointerdown", () => {
              this.OnButtonClicked(this.panels[_0x387f7c].weaponType);
            }, this);
          }
          this.footer.setVisible(this.CurrentAmountOfPanels < 0x4);
        }
        ["enableItemPanelsInput"]() {
          for (let _0x40f551 = 0x0; _0x40f551 < this.panels.length; _0x40f551++) {
            this.panels[_0x40f551].Background.setInteractive();
            this.panels[_0x40f551].Background.once('pointerdown', () => {
              this.OnItemButtonClicked(this.panels[_0x40f551].weaponType);
            }, this);
          }
          this.footer.setVisible(false);
        }
        ["disablePanelsInput"]() {
          for (let _0x127f82 = 0x0; _0x127f82 < this.panels.length; _0x127f82++) {
            this.panels[_0x127f82].Background.disableInteractive();
          }
        }
        ["update"]() {
          this.playerUI_levelUp.Update();
        }
      }
      class _0x186583 extends Phaser.GameObjects.Container {
        constructor(_0x2992a2, _0x243b42, _0x4d2db4) {
          super(_0x2992a2, _0x243b42, _0x4d2db4);
          this.char = _0x2fbe76.ANTONIO;
          this.setScale(2);
          var _0x301de7 = {
            'x': 0x0,
            'y': 0x0,
            'width': 245.76,
            'height': 0x34
          };
          this.Background = new _0x35cd95.NineSlice(this.scene, _0x564740.PanelBackground, _0x301de7);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x30, 0x18, 'UI', "frameB.png").setOrigin(0x0, 0x0);
          this.myWeaponIcon = new Phaser.GameObjects.Image(this.scene, 0x3c, 0x24, 'items', '').setOrigin(0.5);
          this.myIcon = new Phaser.GameObjects.Image(this.scene, 0x16, 0x20, "characters", '').setOrigin(0.5);
          this.myName = new Phaser.GameObjects.Text(this.scene, 0x6, 0x6, 'Name', {}).setScale(0.5);
          this.myDesc = new Phaser.GameObjects.Text(this.scene, 0x5a, 0x10, "Description", {}).setScale(0.5).setWordWrapWidth(0xc8);
          this.myBuy = new Phaser.GameObjects.Text(this.scene, 0xd7, 0x22, "Confirm", {}).setScale(0.5).setOrigin(0.5);
          this.Button = new _0x35cd95.NineSlice(this.scene, _0x564740.GreenButton, {
            'x': 0xd7,
            'y': 0x22,
            'width': 0x30,
            'height': 0x1e
          }).setScale(0x1).setOrigin(0.5);
          this.myPrice = new Phaser.GameObjects.Text(this.scene, 0xe1, 0xc, "Price", {}).setScale(0.5).setOrigin(0.5);
          this.myCoins = new Phaser.GameObjects.Image(this.scene, 0x0, 0x0, 'UI', "CoinGold.png").setScale(0x1).setOrigin(0x1, 0.5);
          this.AssignData(this.char);
          this.add([this.Background, this.myIconBG, this.myWeaponIcon, this.myName, this.myIcon, this.myDesc, this.Button, this.myBuy, this.myCoins, this.myPrice]);
        }
        ['AssignData'](_0x581be7) {
          var _0x293e9f;
          var _0x14da1b;
          this.char = _0x581be7;
          _0x293e9f = _0x4774f8[this.char] ? _0x4774f8[this.char][0x0] : _0x4774f8[_0x2fbe76.ANTONIO][0x0];
          _0x14da1b = _0x14b553[_0x293e9f.startingWeapon] ? _0x14b553[_0x293e9f.startingWeapon][0x0] : _0x14b553[_0x2a5ca3.WHIP][0x0];
          this.Background.setTint(0xffffff);
          this.myName.text = _0x293e9f.charName + " " + _0x293e9f.surname;
          this.myIcon.setFrame(_0x293e9f.spriteName);
          this.myIcon.setTint(_0x293e9f.isBought ? 0xffffff : 0x0);
          this.myWeaponIcon.setTexture(_0x14da1b.texture, _0x14da1b.frameName);
          this.myDesc.setText(_0x293e9f.description);
          this.myWeaponIcon.setVisible(_0x293e9f.isBought);
          this.myIconBG.setVisible(_0x293e9f.isBought);
          this.myBuy.setText(_0x293e9f.isBought ? 'Confirm' : "Unlock");
          this.myPrice.setText((_0x293e9f.price * _0x1d0e6c.Core.CharMarkup).toFixed(0x0));
          this.myPrice.setVisible(!_0x293e9f.isBought);
          this.myCoins.setPosition(this.myPrice.x - 0.25 * this.myPrice.width, this.myPrice.y);
          this.myCoins.setVisible(!_0x293e9f.isBought);
        }
        ['TurnToStart']() {
          this.Background.setTint(0xffff00);
          this.myBuy.setText("START");
        }
        ["TurnToSelection"]() {
          this.AssignData(this.char);
        }
      }
      class _0x4d6256 extends Phaser.GameObjects.Container {
        constructor(_0x3cc899, _0x56527e, _0x289728, _0x47d2bc, _0x40817f, _0x54113e) {
          super(_0x3cc899, _0x56527e, _0x289728);
          this.char = _0x54113e;
          this.setScale(_0x34bb1a.PixelScale);
          var _0x1eed0f = {
            'x': 0x0,
            'y': 0x0,
            'width': _0x47d2bc,
            'height': _0x40817f
          };
          this.Background = new _0x35cd95.NineSlice(this.scene, {
            'sourceKey': 'UI',
            'sourceFrame': "frame1_c2.png",
            'sourceLayout': {
              'width': 0xc,
              'height': 0xc
            }
          }, _0x1eed0f);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, _0x47d2bc - 0x9, _0x40817f - 0x9, "items", '').setOrigin(0x1).setScale(0x2 * _0x34bb1a.PixelScale).setTintFill(0x111111);
          this.myWeaponIcon = new Phaser.GameObjects.Image(this.scene, _0x47d2bc - 0xc, _0x40817f - 0xc, "items", '').setOrigin(0x1).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myIcon = new Phaser.GameObjects.Image(this.scene, 0x6, _0x40817f - 0x5, "characters", '').setOrigin(0x0, 0x1).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myName = new Phaser.GameObjects.Text(this.scene, 0x6, 0x6, "Name", {}).setScale(_0x34bb1a.PixelScale);
          this.AssignData(this.char);
          this.add([this.Background, this.myIconBG, this.myWeaponIcon, this.myName, this.myIcon]);
          this._events = {};
          this._events.pointerdown = {};
          this._events.pointerdown.fn = () => {
            this.OnClick();
          };
        }
        ["OnClick"]() {}
        ["AssignData"](_0x24e20a) {
          this.char = _0x24e20a;
          var _0xec8cf8;
          var _0x2bf961 = _0x4774f8[this.char][0x0];
          _0xec8cf8 = _0x14b553[_0x2bf961.startingWeapon] ? _0x14b553[_0x2bf961.startingWeapon][0x0] : _0x14b553[_0x2a5ca3.WHIP][0x0];
          this.myName.text = _0x2bf961.charName;
          this.myName.setTint(_0x2bf961.isBought ? 0xffffff : 0x444444);
          this.myIcon.setFrame(_0x2bf961.spriteName);
          this.myIcon.setTint(_0x2bf961.isBought ? 0xffffff : 0x0);
          this.myWeaponIcon.setTexture(_0xec8cf8.texture, _0xec8cf8.frameName);
          this.myIconBG.setTexture(_0xec8cf8.texture, _0xec8cf8.frameName);
          this.myWeaponIcon.setVisible(_0x2bf961.isBought);
        }
      }
      class _0x53b0d7 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.CharSelectionScene
          });
          this.TopLeft = new Phaser.Math.Vector2(0x0, 0x0);
          this.IsInitialised = false;
          this.HighlightedPanel = null;
          this.isReadyToStart = false;
          this.Columns = 0x4;
          this.Rows = 0x0;
          this.isStartingGameMode = false;
        }
        ['OnPanelClicked'](_0x53143d) {
          if (!this.isStartingGameMode) {
            this.Highlighted = _0x53143d;
            this.confirmationPanel.AssignData(this.Highlighted);
            this.isReadyToStart = false;
            this.OnSelectionChange(true, false, this.Highlighted);
          }
        }
        ['OnConfirmClicked']() {
          var _0x43af48 = _0x4774f8[this.Highlighted][0x0];
          var _0x5bcf10 = _0x43af48.price * _0x1d0e6c.Core.CharMarkup;
          if (_0x43af48.isBought && !this.isReadyToStart) {
            _0x1d0e6c.Core.PlayerOptions.SelectedCharacter = this.Highlighted;
            this.OnSelectionChange();
            this.confirmationPanel.TurnToStart();
            this.isReadyToStart = true;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn, {
              'detune': 0x64
            });
            _0x1d0e6c.Core.SetSeenWeapon(_0x43af48.startingWeapon);
          } else if (_0x43af48.isBought && this.isReadyToStart) {
            _0x1d0e6c.Core.SceneManager.UI_overlayScene.DestroyGrid();
            _0x1d0e6c.Core.SceneManager.StartFromCharSelection();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn, {
              'detune': 0xc8
            });
            this.isStartingGameMode = true;
          } else if (!_0x43af48.isBought && _0x1d0e6c.Core.PlayerOptions.Coins >= _0x5bcf10) {
            _0x1d0e6c.Core.PlayerOptions.Coins -= _0x5bcf10;
            _0x1d0e6c.Core.PlayerOptions.LifetimeCoins -= _0x5bcf10;
            this.UI_topBar.UpdateCoins();
            _0x43af48.isBought = true;
            this.confirmationPanel.AssignData(this.Highlighted);
            this.RefreshPanels();
            _0x1d0e6c.Core.OnCharacterBought(this.Highlighted);
            _0x1d0e6c.Core.PlayerOptions.SelectedCharacter = this.Highlighted;
            this.OnSelectionChange();
            this.isReadyToStart = false;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut, {
              'detune': -0x190
            });
          }
        }
        ["preload"]() {}
        ["create"]() {
          this.isStartingGameMode = false;
          this.Highlighted = _0x1d0e6c.Core.PlayerOptions.SelectedCharacter;
          var _0x101bb4 = _0x3dbb73.width * _0x34bb1a.RPixelScale;
          var _0x15056a = (_0x3dbb73.height - 0x40) * _0x34bb1a.RPixelScale;
          var _0x193419 = _0x15056a * _0x34bb1a.PixelScale;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x101bb4,
            'height': _0x15056a
          });
          this.background.setPosition(_0x3dbb73.centerX, _0x193419);
          this.background.setOrigin(0.5, 0x1);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.highlight = new _0x35cd95.NineSlice(this, _0x564740.SelectionHighlight, {
            'x': 0x0,
            'y': 0x0,
            'width': 0x40,
            'height': 0x40
          });
          this.highlight.setOrigin(0x0, 0x0).setScale(0x2 * _0x34bb1a.PixelScale).setDepth(0xa);
          this.add.existing(this.highlight);
          this.header = this.add.text(_0x3dbb73.centerX, 0x21, "Character Selection", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.panels = this.add.group();
          for (const _0x56869e in _0x4774f8) if (!_0x4774f8[_0x56869e][0x0].hidden) {
            var _0x101f01 = new _0x4d6256(this, 0x0, 0x0, 0x6e, 0x6e, _0x56869e);
            this.add.existing(_0x101f01);
            _0x101f01.Background.setInteractive();
            _0x101f01.Background.on('pointerdown', () => {
              this.OnPanelClicked(_0x56869e);
            }, this);
            _0x101f01.OnClick = () => {
              this.OnConfirmClicked();
            };
            this.panels.add(_0x101f01);
          }
          var _0x5c3d59 = (_0x3dbb73.width - 0x6e * this.Columns) / 0x5;
          var _0x37e790 = this.panels.getChildren();
          for (var _0x2b4ae7 = 0x0; _0x2b4ae7 < _0x37e790.length; _0x2b4ae7++) {
            const _0x2a6e97 = _0x37e790[_0x2b4ae7];
            _0x2a6e97.x = 0x0 + _0x5c3d59 + _0x2b4ae7 % this.Columns * 0x6e + _0x5c3d59 * (_0x2b4ae7 % this.Columns);
            _0x2a6e97.y = 0x3c + _0x5c3d59 + 0x6e * Math.floor(_0x2b4ae7 / this.Columns) + _0x5c3d59 * Math.floor(_0x2b4ae7 / this.Columns);
          }
          this.Rows = Math.ceil(_0x37e790.length / this.Columns);
          this.confirmationPanel = new _0x186583(this, 10, _0x193419 - 10);
          this.add.existing(this.confirmationPanel);
          this.confirmationPanel.Button.setInteractive();
          this.confirmationPanel.Button.on('pointerdown', () => {
            this.OnConfirmClicked();
          }, this);
          _0x512871.CalculateAndSetContainerSize(this.confirmationPanel);
          this.confirmationPanel.y -= this.confirmationPanel.displayHeight;
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          var _0x2fbb86 = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x2fbb86);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
          this.SceneContainer.y = this.renderer.height - this.SceneContainer.displayHeight;
          this.MakeUIGrid();
          this.OnPanelClicked(this.Highlighted);
        }
        ["RefreshPanels"]() {
          this.panels.getChildren().map(_0x7d41a => {
            _0x7d41a.AssignData(_0x7d41a.char);
          });
        }
        ["OnSelectionChange"](_0x4c7bbe = true, _0x133453 = true, _0x2a7eb4 = _0x1d0e6c.Core.PlayerOptions.SelectedCharacter) {
          var _0x3a7182;
          var _0x46a7b4 = this.panels.getChildren();
          _0x46a7b4.map(_0x6a8643 => {
            _0x6a8643.Background.setTint(0xffffff);
          });
          var _0x5c287d = _0x46a7b4.find(_0x100e07 => _0x100e07.char === _0x2a7eb4);
          if (_0x5c287d) {
            if (_0x4c7bbe) {
              this.highlight.setPosition(_0x5c287d.x - 0x9, _0x5c287d.y - 0x9);
            }
            if (_0x133453) {
              _0x5c287d.Background.setTint(0xffff00);
            }
            this.HighlightedPanel = _0x5c287d;
            let _0x3cc131 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
            if (!(null === (_0x3a7182 = _0x3cc131.UI_grid) || undefined === _0x3a7182)) {
              _0x3a7182.SelectGameObject(_0x5c287d);
            }
            _0x3cc131.UI_selected = _0x5c287d;
          }
        }
        ["update"]() {
          var _0x342eba;
          var _0x7cddd6;
          let _0x48e5e5 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          if (_0x48e5e5.UI_selected != (null === (_0x342eba = _0x48e5e5.UI_grid) || undefined === _0x342eba ? undefined : _0x342eba.previousGameObject)) {
            if (null === (_0x7cddd6 = _0x48e5e5.UI_selected) || undefined === _0x7cddd6 ? undefined : _0x7cddd6.char) {
              this.OnPanelClicked(_0x48e5e5.UI_selected.char);
              _0x48e5e5.ToggleCursorsVisibility(false);
              this.highlight.setVisible(true);
            } else {
              _0x48e5e5.ToggleCursorsVisibility(true);
              this.highlight.setVisible(false);
            }
          }
        }
        ["MakeUIGrid"]() {
          let _0x29b646 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          this.panels.children.entries.length;
          _0x29b646.MakeUIGrid(this.Columns, this.Rows + 0x1, true);
          for (let _0x1991c4 = 0x0; _0x1991c4 < this.Columns; _0x1991c4++) {
            _0x29b646.UI_grid.SetContents(_0x1991c4, 0x0, this.UI_topBar.BackButton);
          }
          for (let _0xc150fd = 0x0; _0xc150fd < this.panels.children.entries.length; _0xc150fd++) {
            const _0x21f22c = this.panels.children.entries[_0xc150fd];
            _0x29b646.UI_grid.SetContents(_0xc150fd % this.Columns, 0x1 + Math.floor(_0xc150fd / this.Columns), _0x21f22c);
          }
          _0x29b646.ToggleCursorsVisibility(false);
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x29b646);
          _0x29b646.OnCancelCallback = () => {
            var _0x451723;
            var _0x4572f3;
            var _0x36bf2d;
            if (!(null === (_0x36bf2d = null === (_0x4572f3 = null === (_0x451723 = this.UI_topBar.BackButton) || undefined === _0x451723 ? undefined : _0x451723._events) || undefined === _0x4572f3 ? undefined : _0x4572f3.pointerdown) || undefined === _0x36bf2d)) {
              _0x36bf2d.fn();
            }
          };
        }
      }
      class _0xff8f12 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.IntroScene
          });
          this.fillScale = 0x1;
          this.IS_TOUCH = false;
          this.isInitialized = false;
        }
        ["removeDebugTextOnMobile"]() {
          try {
            this.IS_TOUCH = true;
            this.DebugText.text = '';
          } catch (_0x426d46) {}
          window.removeEventListener("touchstart", this.boundf);
        }
        ["preload"]() {
          this.boundf = this.removeDebugTextOnMobile.bind(this);
          window.addEventListener("touchstart", this.boundf);
          _0x1d0e6c.ApplyMenuResolution();
          _0x1d0e6c.Sound.StopMusic(_0xae9ba1.BGM_Forest);
        }
        ["create"]() {
          this.isInitialized = false;
          _0x1d0e6c.Core.SceneManager.Init();
          this.Background = this.add.image(0.5 * this.renderer.width, 0.5 * this.renderer.height, "introBG");
          if (!_0x572c9f) {
            let _0x4f335d = this.add.image(-0x40, 0x40, "illustrations", "villain.png").setOrigin(0x0).setScale(0x3).setAlpha(0x0);
            this.tweens.add({
              'targets': _0x4f335d,
              'alpha': 0.5,
              'duration': 0x2ee,
              'delay': 0x2ee,
              'ease': "Linear"
            });
            let _0x156e0f = this.add.image(this.renderer.width, _0x3dbb73.centerY, 'illustrations', "imelda.png").setOrigin(0x1, 0.5).setScale(0x2).setAlpha(0x0).setFlipX(true);
            this.tweens.add({
              'targets': _0x156e0f,
              'alpha': 0.75,
              'duration': 0x2ee,
              'delay': 0x3e8,
              'ease': 'Linear'
            });
          }
          let _0x13c0bd = this.add.image(_0x3dbb73.centerX, _0x3dbb73.height, "illustrations", 'antonio.png').setOrigin(0.5, 0x1).setScale(0x2).setAlpha(0x0);
          this.tweens.add({
            'targets': _0x13c0bd,
            'alpha': 0x1,
            'duration': 0x1f4,
            'delay': 0x3e8,
            'ease': "Linear"
          });
          this.title = this.add.image(0.5 * this.renderer.width, 0.3 * this.renderer.height, "title").setScale(1.5 * _0x3dbb73.width / _0x3dbb73.right).setDepth(0x1);
          this.VersionText = this.add.text(0.5 * this.renderer.width, this.title.y + 0.5 * this.title.displayHeight, "version 0.2.4 - alpha", {
            'align': 'center'
          }).setScale(1).setOrigin(0.5).setVisible(false);
          this.DebugText = this.add.text(4, this.title.y + 0xa + 0.5 * this.title.displayHeight, "Menu cheats:\nC: add coins\nR: reset data\n\nGame cheats:\nX: level up\nH: heal\nZ: all weapons\nI: invulnerable\nT: next minute\nO: game over\nE: max enemies\nK: kill enemies\nG: Treasure\nV: Vacuum\nMouseWheel: zoom", {
            'align': "left"
          }).setScale(1).setOrigin(0x0).setVisible(false);
          var _0x2c8b27 = Math.min(this.Background.displayWidth, this.Background.displayHeight);
          this.fillScale = _0x572c9f ? this.renderer.height / _0x2c8b27 : this.renderer.width / _0x2c8b27;
          this.Background.setScale(5.1 * this.fillScale, 5.1 * this.fillScale);
          this.cameraFilter = this.plugins.get('rexPixelationPipeline').add(this.cameras.main);
          this.cameraFilter.pixelWidth = 0x32;
          this.cameraFilter.pixelHeight = 0x32;
          this.pluginFilter = this.plugins.get("rexPixelationPipeline");
          this.tweens.add({
            'targets': this.cameraFilter,
            'pixelWidth': 0x1,
            'pixelHeight': 0x1,
            'duration': 0x3e8,
            'ease': "Linear",
            'onComplete': () => {
              this.OnIntroEnded();
            }
          });
          this.tweens.add({
            'targets': this.cameras.main,
            'zoom': 0x1,
            'duration': 0x44c
          });
          this.tweens.add({
            'targets': this.Background,
            'scaleY': 1.1 * this.fillScale,
            'scaleX': 1.1 * this.fillScale,
            'duration': 0x44c,
            'ease': "Linear"
          });
          this.touchText = this.add.text(0.5 * this.renderer.width, 0.75 * this.renderer.height, "PRESS TO START", {}).setOrigin(0.5).setScale(2).setVisible(false);
          this.scene.launch(_0xf7a726.UI_topBar);
          this.scene.launch(_0xf7a726.UI_mainMenu);
          this.scene.setVisible(false, _0xf7a726.UI_topBar);
          this.scene.setVisible(false, _0xf7a726.UI_mainMenu);
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          this.UI_mainMenu = this.scene.get(_0xf7a726.UI_mainMenu);
          this.scene.sendToBack(_0xf7a726.IntroScene);
          this.DebugText.setText('');
          this.game.canvas.focus();
          _0x1d0e6c.Core.SceneManager.LaunchUIOverlay();
          let _0x55e55e = Phaser.Input.Keyboard.KeyCodes.ESC;
          let _0x3a1d1d = Phaser.Input.Keyboard.KeyCodes.ENTER;
          this.input.keyboard.createCombo([0x26, 0x26, 0x28, 0x28, 0x25, 0x27, 0x25, 0x27, _0x55e55e, _0x3a1d1d], {
            'resetOnMatch': true,
            'maxKeyDelay': 0x3e8
          });
          this.input.keyboard.createCombo([_0x2d874d.Input.Keyboard.KeyCodes.X, _0x2d874d.Input.Keyboard.KeyCodes.MINUS, _0x2d874d.Input.Keyboard.KeyCodes.X, _0x2d874d.Input.Keyboard.KeyCodes.ONE, _0x2d874d.Input.Keyboard.KeyCodes.V, _0x2d874d.Input.Keyboard.KeyCodes.I, _0x2d874d.Input.Keyboard.KeyCodes.I, _0x2d874d.Input.Keyboard.KeyCodes.Q], {
            'resetOnMatch': true,
            'maxKeyDelay': 0x3e8
          });
          this.input.keyboard.createCombo([_0x2d874d.Input.Keyboard.KeyCodes.H, _0x2d874d.Input.Keyboard.KeyCodes.Y, _0x2d874d.Input.Keyboard.KeyCodes.P, _0x2d874d.Input.Keyboard.KeyCodes.E, _0x2d874d.Input.Keyboard.KeyCodes.R], {
            'resetOnMatch': true,
            'maxKeyDelay': 0x3e8
          });
          this.input.keyboard.on("keycombomatch", _0x3549fc => {
            var _0x51b690;
            if (0xa == _0x3549fc.size) {
              if (_0x1d0e6c.Core.PlayerOptions.CheatCodeUsed) {
                return;
              }
              if (-0x1 == _0x1d0e6c.Core.PlayerOptions.UnlockedCharacters.indexOf(_0x2fbe76.MORTACCIO)) {
                _0x1d0e6c.Core.PlayerOptions.UnlockedCharacters.push(_0x2fbe76.MORTACCIO);
                _0x4774f8[_0x2fbe76.MORTACCIO][0x0].hidden = false;
                _0x1d0e6c.Core.PlayerOptions.SaveUnlocks();
              }
              _0x1d0e6c.Core.PlayerOptions.CheatCodeUsed = true;
              _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
              _0x1d0e6c.Sound.PlaySound(_0x52c10f.TreasureFound);
              _0x1d0e6c.Core.PlayerOptions.SaveOptions();
              _0x1d0e6c.Core.PlayerOptions.AddCoins(0xaf0);
              if (!(null === (_0x51b690 = this.UI_topBar) || undefined === _0x51b690)) {
                _0x51b690.UpdateCoins();
              }
            } else if (0x8 == _0x3549fc.size) {
              if (-0x1 == _0x1d0e6c.Core.PlayerOptions.UnlockedCharacters.indexOf(_0x2fbe76.EXDASH)) {
                _0x1d0e6c.Core.PlayerOptions.UnlockedCharacters.push(_0x2fbe76.EXDASH);
                _0x4774f8[_0x2fbe76.EXDASH][0x0].hidden = false;
                _0x4774f8[_0x2fbe76.EXDASH][0x0].isBought = true;
                _0x1d0e6c.Core.PlayerOptions.BoughtCharacters.push(_0x2fbe76.EXDASH);
                _0x1d0e6c.Core.PlayerOptions.Save();
              }
            } else if (0x5 == _0x3549fc.size && -0x1 == _0x1d0e6c.Core.PlayerOptions.UnlockedHypers.indexOf(_0x23a5f2.FOREST)) {
              _0x1d0e6c.Core.PlayerOptions.UnlockedHypers.push(_0x23a5f2.FOREST);
              _0x26e87a[_0x23a5f2.FOREST][0x0].hyper.unlocked = true;
              _0x1d0e6c.Core.PlayerOptions.Save();
            }
          });
        }
        ["FitToScreen"]() {
          this.title.setScale(1.5 * this.renderer.width / _0x3dbb73.right);
          this.touchText.setScale(2 * this.renderer.width / _0x3dbb73.right);
        }
        ['OnIntroEnded']() {
          this.pluginFilter.remove(this.cameras.main);
          this.blinkTimer = this.time.addEvent({
            'delay': 0x1f4,
            'loop': true,
            'callback': () => {
              this.touchText.visible = !this.touchText.visible;
            }
          });
          this.touchText.visible = true;
          this.Background.removeAllListeners();
          this.Background.setInteractive();
          this.CheckFirstInput();
        }
        ["CheckFirstInput"]() {
          this.Background.once("pointerdown", () => this.OnFirstInput());
          this.input.keyboard.once("keyup", () => this.OnFirstInput());
          this.input.gamepad.once('up', () => this.OnFirstInput());
        }
        ["OnFirstInput"]() {
          if (!this.isInitialized) {
            this.isInitialized = true;
            this.time.removeEvent(this.blinkTimer);
            this.touchText.visible = false;
            this.UI_topBar.Show();
            this.UI_mainMenu.Show();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            this.DebugText.setVisible(true);
            this.VersionText.setVisible(false);
            this.time.addEvent({
              'delay': 0x1e,
              'callback': () => {
                this.MakeUIGrid();
              }
            });
          }
        }
        ["MakeUIGrid"](_0x1781d2 = null) {
          if (!_0x1781d2) {
            _0x1781d2 = this.UI_mainMenu.StartButton;
          }
          let _0x1ae108 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x1ae108.MakeUIGrid(0x3, 0x4, false);
          _0x1ae108.UI_grid.SetContents(0x0, 0x0, this.UI_topBar.ExitButton);
          _0x1ae108.UI_grid.SetContents(0x1, 0x0, this.UI_topBar.OptionsButton);
          _0x1ae108.UI_grid.SetContents(0x1, 0x1, this.UI_mainMenu.StartButton);
          _0x1ae108.UI_grid.SetContents(0x1, 0x2, this.UI_mainMenu.PowerupButton);
          _0x1ae108.UI_grid.SetContents(0x0, 0x2, this.UI_mainMenu.CollectionButton);
          _0x1ae108.UI_grid.SetContents(0x2, 0x2, this.UI_mainMenu.AchievementButton);
          _0x1ae108.UI_grid.SetContents(0x1, 0x3, this.UI_mainMenu.CreditsButton);
          if (_0xadcf39.g.vs_ex_is_electron_win_build) {
            _0x1ae108.UI_grid.SetContents(0x0, 0x3, this.UI_mainMenu.ResolutionButton);
            _0x1ae108.UI_grid.SetContents(0x2, 0x3, this.UI_mainMenu.VersionButton);
            this.UI_mainMenu.VersionButton.setVisible(true);
          }
          _0x1ae108.ToggleCursorsVisibility(true);
          _0x1ae108.OnCancelCallback = () => _0x1ae108.UI_grid.SelectGameObject(this.UI_mainMenu.StartButton);
          _0x1ae108.UI_grid.SelectGameObject(_0x1781d2);
          _0x1ae108.UI_selected = _0x1781d2;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x1ae108);
        }
        ['update'](_0x1b04d1, _0x9bcab1) {}
      }
      var _0x17059a = _0xadcf39(0x32);
      var _0x74224d = _0xadcf39(0x304);
      class _0x535680 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.UI_topBar
          });
        }
        ["UpdateCoins"]() {
          if (_0x1d0e6c.Core.PlayerOptions.Coins < 0xf4240) {
            this.CoinsText.text = _0x1d0e6c.Core.PlayerOptions.Coins.toFixed(0x0);
          } else {
            this.CoinsText.text = "999999";
          }
        }
        ['preload']() {}
        ['create']() {
          const _0x31aeab = 0.5 * this.renderer.width;
          this.Background = this.add.image(0x0, 0x0, 'UI', 'blackDot.png').setScale(this.renderer.width, 64).setOrigin(0x0).setAlpha(0.5);
          this.BackButton = new _0x35cd95.NineSlice(this, _0x564740.BackButton, {
            'x': _0x3dbb73.right - 0x6,
            'y': 0x3,
            'width': 0x30,
            'height': 0x1e
          }).setScale(2).setOrigin(0x1, 0x0).setDepth(Number.MAX_SAFE_INTEGER);
          this.add.existing(this.BackButton);
          this.OptionsButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x3dbb73.right - 0x6,
            'y': 0x3,
            'width': 0x30,
            'height': 0x1e
          }).setScale(2).setOrigin(0x1, 0x0);
          this.add.existing(this.OptionsButton);
          this.ExitButton = new _0x35cd95.NineSlice(this, _0x564740.BackButton, {
            'x': 6,
            'y': 0x3,
            'width': 0x30,
            'height': 0x1e
          }).setScale(2).setOrigin(0x0, 0x0);
          this.add.existing(this.ExitButton);
          this.CoinsBG = new _0x35cd95.NineSlice(this, _0x564740.ProgressBox, {
            'x': _0x31aeab,
            'y': 32,
            'width': 0x60,
            'height': 0x1c
          }).setScale(2).setOrigin(0.5);
          this.add.existing(this.CoinsBG);
          this.CoinsIcon = this.add.image(this.CoinsBG.x - 0.5 * this.CoinsBG.displayWidth + 0x6, this.CoinsBG.y, 'UI', "MoneyPile.png").setOrigin(0x0, 0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.CoinsText = this.add.text(this.CoinsBG.x + 0.5 * this.CoinsBG.displayWidth - 0xc, this.CoinsBG.y, '', {
            'fontSize': "14px"
          }).setOrigin(0x1, 0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.BackText = this.add.text(this.BackButton.x - 0.5 * this.BackButton.displayWidth, this.BackButton.y + 0.5 * this.BackButton.displayHeight, "BACK", {}).setOrigin(0.5, 0.5).setScale(1);
          this.OptionsText = this.add.text(this.OptionsButton.x - 0.5 * this.OptionsButton.displayWidth, this.OptionsButton.y + 0.5 * this.OptionsButton.displayHeight, "OPTIONS", {}).setOrigin(0.5, 0.5).setScale(1);
          this.ExitText = this.add.text(this.ExitButton.x + 0.5 * this.ExitButton.displayWidth, this.ExitButton.y + 0.5 * this.ExitButton.displayHeight, "QUIT", {}).setOrigin(0.5, 0.5).setScale(1);
          if (!_0xadcf39.g.vs_ex_is_electron_win_build) {
            this.ExitButton.setVisible(false);
            this.ExitText.setVisible(false);
          }
          this.UpdateCoins();
          this.Hide();
          this.DisableBack();
          var _0x157bfa = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x157bfa);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
        }
        ["Show"]() {
          this.scene.setVisible(true, _0xf7a726.UI_topBar);
          this.EnableOptions(() => {
            _0x1d0e6c.Core.SceneManager.OptionsFromMainMenu();
          });
        }
        ["Hide"]() {
          this.scene.setVisible(false, _0xf7a726.UI_topBar);
        }
        ["DisableBack"]() {
          this.BackButton.setVisible(false);
          this.BackText.setVisible(false);
          this.BackButton.removeAllListeners();
        }
        ["EnableBack"](_0x479add) {
          this.BackButton.removeAllListeners();
          this.BackButton.setVisible(true);
          this.BackText.setVisible(true);
          this.BackButton.setInteractive();
          this.BackButton.on("pointerdown", () => {
            _0x479add();
            this.BackButton.setInteractive(false);
            this.BackButton.removeAllListeners();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
          });
          this.DisableOptions();
        }
        ["DisableOptions"]() {
          this.OptionsButton.setVisible(false);
          this.OptionsText.setVisible(false);
          this.OptionsButton.removeAllListeners();
          this.ExitButton.setVisible(false);
          this.ExitText.setVisible(false);
          this.ExitButton.removeAllListeners();
        }
        ['EnableOptions'](_0x5ed7f3) {
          this.OptionsButton.removeAllListeners();
          this.OptionsButton.setVisible(true);
          this.OptionsText.setVisible(true);
          this.OptionsButton.setInteractive();
          this.OptionsButton.on('pointerdown', () => {
            _0x5ed7f3();
            this.OptionsButton.setInteractive(false);
            this.OptionsButton.removeAllListeners();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
          });
          this.DisableBack();
          if (_0xfe7efc) {
            this.ExitButton.removeAllListeners();
            this.ExitButton.setVisible(true);
            this.ExitText.setVisible(true);
            this.ExitButton.setInteractive();
            try {
              const {
                ipcRenderer: _0x4b9ec7
              } = _0xadcf39(0xa3);
              this.ExitButton.on("pointerdown", () => {
                _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
                _0x4b9ec7.send("close-me");
              });
            } catch (_0x49d4ef) {}
          }
        }
        ["update"]() {}
      }
      class _0x5bd029 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.UI_mainMenu
          });
        }
        ["preload"]() {}
        ["create"]() {
          this.SceneContainer = this.add.container(0x0, this.renderer.height);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          const _0x4633f6 = 0.5 * this.renderer.width;
          this.renderer.height;
          const _0x51ddff = -12;
          const _0x47305a = -96;
          this.ResolutionButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsMiniButton, {
            'x': 12,
            'y': _0x51ddff,
            'width': 0x40,
            'height': 0x10
          }).setScale(2).setOrigin(0x0, 0x1);
          this.SceneContainer.add(this.ResolutionButton);
          this.CreditsButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsMiniButton, {
            'x': _0x3dbb73.centerX,
            'y': _0x51ddff,
            'width': 0x40,
            'height': 0x10
          }).setScale(2).setOrigin(0.5, 0x1);
          this.SceneContainer.add(this.CreditsButton);
          this.VersionButton = new _0x35cd95.NineSlice(this, _0x564740.DisabledMiniButton, {
            'x': _0x3dbb73.right - 12,
            'y': _0x51ddff,
            'width': 0x40,
            'height': 0x10
          }).setScale(2).setOrigin(0x1, 0x1).setVisible(false);
          this.SceneContainer.add(this.VersionButton);
          this.CollectionButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': 12,
            'y': _0x47305a,
            'width': 0x40,
            'height': 0x1e
          }).setScale(2).setOrigin(0x0, 0x1);
          this.SceneContainer.add(this.CollectionButton);
          this.AchievementButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x3dbb73.right - 12,
            'y': _0x47305a,
            'width': 0x40,
            'height': 0x1e
          }).setScale(2).setOrigin(0x1, 0x1);
          this.SceneContainer.add(this.AchievementButton);
          this.PowerupButton = new _0x35cd95.NineSlice(this, _0x564740.GreenButton, {
            'x': _0x4633f6,
            'y': _0x47305a,
            'width': 0x50,
            'height': 0x20
          }).setScale(2).setOrigin(0.5, 0x1);
          this.SceneContainer.add(this.PowerupButton);
          this.StartButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x4633f6,
            'y': this.PowerupButton.y - 120,
            'width': 0x60,
            'height': 0x20
          }).setScale(2).setOrigin(0.5, 0x1);
          this.SceneContainer.add(this.StartButton);
          this.CollectionText = new Phaser.GameObjects.Text(this, this.CollectionButton.x + 0.5 * this.CollectionButton.displayWidth, this.CollectionButton.y - 0.5 * this.CollectionButton.displayHeight, "COLLECTION", {}).setOrigin(0.5, 0.5).setScale(1);
          this.SceneContainer.add(this.CollectionText);
          this.AchievementText = new Phaser.GameObjects.Text(this, this.AchievementButton.x - 0.5 * this.AchievementButton.displayWidth, this.AchievementButton.y - 0.5 * this.AchievementButton.displayHeight, 'ACHIEVEMENTS', {}).setOrigin(0.5, 0.5).setScale(1);
          this.SceneContainer.add(this.AchievementText);
          this.PowerupText = new Phaser.GameObjects.Text(this, this.PowerupButton.x, this.PowerupButton.y - 0.5 * this.PowerupButton.displayHeight, "POWER UP", {}).setOrigin(0.5, 0.5).setScale(1.5);
          this.SceneContainer.add(this.PowerupText);
          this.StartText = new Phaser.GameObjects.Text(this, this.StartButton.x, this.StartButton.y - 0.5 * this.StartButton.displayHeight, "START", {}).setOrigin(0.5, 0.5).setScale(2);
          this.SceneContainer.add(this.StartText);
          this.CreditsText = new Phaser.GameObjects.Text(this, this.CreditsButton.x, this.CreditsButton.y - 0.5 * this.CreditsButton.displayHeight, "credits", {}).setOrigin(0.5, 0.5).setScale(1);
          this.SceneContainer.add(this.CreditsText);
          this.ResolutionText = new Phaser.GameObjects.Text(this, this.ResolutionButton.x + 0.5 * this.ResolutionButton.displayWidth, this.ResolutionButton.y - 0.5 * this.ResolutionButton.displayHeight, 'screen', {}).setOrigin(0.5, 0.5).setScale(1);
          this.SceneContainer.add(this.ResolutionText);
          this.VersionText = new Phaser.GameObjects.Text(this, this.VersionButton.x - 0.5 * this.VersionButton.displayWidth, this.VersionButton.y - 0.5 * this.VersionButton.displayHeight, "v0.2.4 - DEMO", {}).setOrigin(0.5, 0.5).setScale(1);
          this.SceneContainer.add(this.VersionText);
          this.Hide();
          if (!_0xadcf39.g.vs_ex_is_electron_win_build) {
            this.ResolutionButton.setVisible(false);
            this.ResolutionText.setVisible(false);
          }
          if (!_0x572c9f) {
            this.add.image(0x8, this.renderer.height - 0x8, 'UI', "steam.png").setOrigin(0x0, 0x1).setScale(0.5).setInteractive().on('pointerup', this.openSteamLink, this);
          }
        }
        ["openSteamLink"]() {
          var _0x43cc02 = window.open("https://store.steampowered.com/app/1794680/Vampire_Survivors/", "_blank");
          if (_0x43cc02 && _0x43cc02.focus) {
            _0x43cc02.focus();
          } else if (!_0x43cc02) {
            window.location.href = "https://store.steampowered.com/app/1794680/Vampire_Survivors/";
          }
        }
        ['Show']() {
          this.scene.setVisible(true, _0xf7a726.UI_mainMenu);
          this.EnableButtons();
        }
        ["Hide"]() {
          this.scene.setVisible(false, _0xf7a726.UI_mainMenu);
        }
        ["EnableButtons"]() {
          this.StartButton.setInteractive();
          this.StartButton.on("pointerdown", () => {
            _0x1d0e6c.Core.SceneManager.StartFromMainMenu();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
          });
          this.PowerupButton.setInteractive();
          this.PowerupButton.on("pointerdown", () => {
            _0x1d0e6c.Core.SceneManager.PowerUpFromMainMenu();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
          });
          this.CollectionButton.setInteractive();
          this.CollectionButton.on("pointerdown", () => {
            _0x1d0e6c.Core.SceneManager.CollectionFromMainMenu();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
          });
          this.AchievementButton.setInteractive();
          this.AchievementButton.on("pointerdown", () => {
            _0x1d0e6c.Core.SceneManager.AchievementsFromMainMenu();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
          });
          this.CreditsButton.setInteractive();
          this.CreditsButton.on("pointerdown", () => {
            _0x1d0e6c.Core.SceneManager.Credits_FromMainMenu();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
          });
          if (_0xadcf39.g.vs_ex_is_electron_win_build) {
            this.ResolutionButton.setInteractive();
            this.ResolutionButton.on("pointerdown", () => {
              _0x1d0e6c.Core.SceneManager.Resolution_FromMainMenu();
              _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            });
          }
        }
        ["DisableButtons"]() {}
        ["update"](_0x5e38ee) {}
        ['HighlightButton']() {
          if (this.selected) {
            this.highlight.copyPosition(this.selected);
            this.highlight.setOrigin(this.selected.originX, this.selected.originY);
            this.highlight.setScale(this.selected.scaleX, this.selected.scaleY);
          }
        }
      }
      class _0x20f394 extends Phaser.GameObjects.Container {
        constructor(_0x52715e, _0x445585, _0x32a261, _0x3bcd81, _0x4fdd30, _0x39515d) {
          super(_0x52715e, _0x445585, _0x32a261);
          this.power = _0x39515d;
          this.setScale(_0x34bb1a.PixelScale);
          var _0x54d7da = {
            'x': 0x0,
            'y': 0x0,
            'width': _0x3bcd81,
            'height': _0x4fdd30
          };
          var _0x462a2a = 0.5 * _0x3bcd81;
          this.Background = new _0x35cd95.NineSlice(this.scene, {
            'sourceKey': 'UI',
            'sourceFrame': "frame1_c2.png",
            'sourceLayout': {
              'width': 0xc,
              'height': 0xc
            }
          }, _0x54d7da);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, _0x462a2a, _0x462a2a, 'UI', "frameD.png").setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myWeaponIcon = new Phaser.GameObjects.Image(this.scene, _0x462a2a, _0x462a2a, 'items', '').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myName = new Phaser.GameObjects.Text(this.scene, _0x462a2a, 0x6, "Name", {}).setOrigin(0.5, 0x0).setScale(_0x34bb1a.PixelScale);
          var _0x42c5ff = _0x5f5caf[this.power];
          this.myLevelsBG = new Phaser.GameObjects.Container(this.scene);
          this.myLevelsChecks = new Phaser.GameObjects.Container(this.scene);
          for (let _0x27bdca = 0x0; _0x27bdca < _0x42c5ff.length; _0x27bdca++) {
            this.myLevelsBG.add(new Phaser.GameObjects.Image(this.scene, 0x10 * _0x27bdca, _0x462a2a + 0x26, 'UI', 'menu_checkbox_16_bg.png').setOrigin(0.5).setScale(_0x34bb1a.PixelScale));
            this.myLevelsChecks.add(new Phaser.GameObjects.Image(this.scene, 0x10 * _0x27bdca, _0x462a2a + 0x26, 'UI', "menu_checkbox_16_checkmark.png").setOrigin(0.5).setScale(_0x34bb1a.PixelScale).setVisible(true));
          }
          var _0x5bc937 = _0x462a2a - 0x8 * (_0x42c5ff.length - 0x1);
          this.myLevelsBG.x = _0x5bc937;
          this.myLevelsChecks.x = _0x5bc937;
          this.AssignData(this.power);
          this.add([this.Background, this.myIconBG, this.myWeaponIcon, this.myName]);
          this.add(this.myLevelsBG);
          this.add(this.myLevelsChecks);
          this._events = {};
          this._events.pointerdown = {};
          this._events.pointerdown.fn = () => {
            this.OnClick();
          };
        }
        ["OnClick"]() {}
        ["AssignData"](_0x3bf9be) {
          this.power = _0x3bf9be;
          var _0x5716d0 = _0x5f5caf[this.power][0x0];
          var _0x10ce78 = _0x5716d0.level;
          this.myName.text = _0x5716d0.name;
          this.myName.setTint(_0x10ce78 > 0x0 ? 0xffffff : 0x444444);
          this.myWeaponIcon.setTexture(_0x5716d0.texture, _0x5716d0.frameName);
          var _0x15bde4 = _0x5f5caf[this.power];
          this.Background.setTint(_0x10ce78 < _0x15bde4.length ? 0xffffff : 0xcccc88);
          for (let _0x4c63e7 = 0x0; _0x4c63e7 < _0x15bde4.length; _0x4c63e7++) {
            this.myLevelsChecks.getAt(_0x4c63e7).setVisible(_0x4c63e7 < _0x10ce78);
          }
        }
      }
      class _0x431e3e extends Phaser.GameObjects.Container {
        constructor(_0x4165a7, _0x42d854, _0x3a4232) {
          super(_0x4165a7, _0x42d854, _0x3a4232);
          this.power = _0x3ffba2.AMOUNT;
          this.setScale(_0x34bb1a.PixelScale);
          var _0x264741 = {
            'x': 0x0,
            'y': 0x0,
            'width': 491.52,
            'height': 0x68
          };
          this.Background = new _0x35cd95.NineSlice(this.scene, _0x564740.PanelBackground, _0x264741);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x40, 0x40, 'UI', "frameD.png").setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myWeaponIcon = new Phaser.GameObjects.Image(this.scene, 0x40, 0x40, 'items', '').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myName = new Phaser.GameObjects.Text(this.scene, 0x40, 0x6, "Name", {}).setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0);
          this.myDesc = new Phaser.GameObjects.Text(this.scene, 0x8c, 0x20, "Description", {}).setScale(_0x34bb1a.PixelScale).setWordWrapWidth(0xf0);
          this.myBuy = new Phaser.GameObjects.Text(this.scene, 0x1ae, 0x40, "Confirm", {}).setScale(_0x34bb1a.PixelScale).setOrigin(0.5);
          this.Button = new _0x35cd95.NineSlice(this.scene, _0x564740.GreenButton, {
            'x': 0x1ae,
            'y': 0x44,
            'width': 0x30,
            'height': 0x1e
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.myPrice = new Phaser.GameObjects.Text(this.scene, 0x1c2, 0x18, 'Price', {}).setScale(_0x34bb1a.PixelScale).setOrigin(0.5);
          this.myCoins = new Phaser.GameObjects.Image(this.scene, 0x0, 0x0, 'UI', "CoinGold.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x1, 0.5);
          this.AssignData(this.power);
          this.add([this.Background, this.myIconBG, this.myWeaponIcon, this.myName, this.myDesc, this.Button, this.myBuy, this.myCoins, this.myPrice]);
        }
        ['AssignData'](_0x384281) {
          this.power = _0x384281;
          var _0x4bceb9 = _0x5f5caf[this.power][0x0];
          var _0x37f883 = _0x5f5caf[this.power];
          var _0x4d4a60 = _0x4bceb9.level;
          var _0xbb3fbd = _0x4bceb9.price;
          this.Background.setTint(_0x4d4a60 < _0x37f883.length ? 0xffffff : 0xcccc88);
          this.myName.text = _0x4bceb9.name;
          this.myWeaponIcon.setTexture(_0x4bceb9.texture, _0x4bceb9.frameName);
          this.myDesc.setText(_0x4bceb9.description);
          this.myBuy.setText(_0x4d4a60 < _0x37f883.length ? "Buy" : "MAXIMUM\n LEVEL\nREACHED");
          this.Button.setVisible(_0x4d4a60 < _0x37f883.length);
          this.myPrice.setText(((0x1 + _0x4d4a60) * _0xbb3fbd * _0x1d0e6c.Core.PowerUpMarkup).toFixed(0x0));
          this.myPrice.setVisible(_0x4d4a60 < _0x37f883.length);
          this.myCoins.setPosition(this.myPrice.x - 0.35 * this.myPrice.width, this.myPrice.y);
          this.myCoins.setVisible(_0x4d4a60 < _0x37f883.length);
        }
        ["TurnToStart"]() {
          this.Background.setTint(0xffff00);
          this.myBuy.setText("START");
        }
        ["TurnToSelection"]() {
          this.AssignData(this.power);
        }
      }
      class _0x170c87 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.PowerUpScene
          });
          this.TopLeft = new Phaser.Math.Vector2(0x0, 0x0);
          this.IsInitialised = false;
          this.HighlightedPanel = null;
          this.Columns = 0x4;
          this.Rows = 0x0;
        }
        ['OnPanelClicked'](_0x56dbac) {
          this.Highlighted = _0x56dbac;
          this.confirmationPanel.AssignData(this.Highlighted);
          this.OnSelectionChange();
        }
        ["OnConfirmClicked"]() {
          var _0x1c94cd = _0x5f5caf[this.Highlighted][0x0];
          var _0x41624a = _0x5f5caf[this.Highlighted];
          var _0x1bb4da = _0x1c94cd.level;
          var _0x3fcc83 = _0x1c94cd.price;
          _0x3fcc83 = (0x1 + _0x1bb4da) * _0x3fcc83 * _0x1d0e6c.Core.PowerUpMarkup;
          if (_0x1bb4da < _0x41624a.length && _0x1d0e6c.Core.PlayerOptions.Coins >= _0x3fcc83) {
            _0x1d0e6c.Core.PlayerOptions.Coins -= _0x3fcc83;
            this.UI_topBar.UpdateCoins();
            _0x1c94cd.level = _0x1bb4da + 0x1;
            _0x1d0e6c.Core.OnPowerUpBought(this.Highlighted);
            this.RefreshPanels();
            this.confirmationPanel.AssignData(this.Highlighted);
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
          }
        }
        ["preload"]() {}
        ['create']() {
          this.Highlighted = _0x3ffba2.MIGHT;
          var _0x3d9ccb = _0x3dbb73.width * _0x34bb1a.RPixelScale;
          var _0x44b265 = (_0x3dbb73.height - 0x40) * _0x34bb1a.RPixelScale;
          var _0x47bed6 = _0x44b265 * _0x34bb1a.RPixelScale;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x3d9ccb,
            'height': _0x44b265
          });
          this.background.setPosition(_0x3dbb73.centerX, _0x47bed6);
          this.background.setOrigin(0.5, 0x1);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.highlight = new _0x35cd95.NineSlice(this, _0x564740.SelectionHighlight, {
            'x': 0x0,
            'y': 0x0,
            'width': 0x40,
            'height': 0x40
          });
          this.highlight.setOrigin(0x0, 0x0).setScale(0x2 * _0x34bb1a.PixelScale).setDepth(0xa);
          this.add.existing(this.highlight);
          this.header = this.add.text(_0x3dbb73.centerX, 0x21, "PowerUp Selection", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.panels = this.add.group();
          for (const _0xa2291 in _0x5f5caf) if (!_0x5f5caf[_0xa2291][0x0].hidden) {
            var _0x473b08 = new _0x20f394(this, 0x0, 0x0, 0x6e, 0x6e, _0xa2291);
            this.add.existing(_0x473b08);
            _0x473b08.Background.setInteractive();
            _0x473b08.Background.on("pointerdown", () => {
              this.OnPanelClicked(_0xa2291);
            }, this);
            _0x473b08.OnClick = () => {
              this.OnConfirmClicked();
            };
            this.panels.add(_0x473b08);
          }
          var _0x263068 = (_0x3dbb73.width - 0x6e * this.Columns) / 0x5;
          var _0x3cb149 = this.panels.getChildren();
          for (var _0x3412a5 = 0x0; _0x3412a5 < _0x3cb149.length; _0x3412a5++) {
            const _0x2d89ca = _0x3cb149[_0x3412a5];
            _0x2d89ca.x = 0x0 + _0x263068 + _0x3412a5 % this.Columns * 0x6e + _0x263068 * (_0x3412a5 % this.Columns);
            _0x2d89ca.y = 0x3c + _0x263068 + 0x6e * Math.floor(_0x3412a5 / this.Columns) + _0x263068 * Math.floor(_0x3412a5 / this.Columns);
          }
          this.Rows = Math.ceil(_0x3412a5 / this.Columns);
          this.confirmationPanel = new _0x431e3e(this, 10, _0x47bed6 - 0xa);
          this.add.existing(this.confirmationPanel);
          this.confirmationPanel.Button.setInteractive();
          this.confirmationPanel.Button.on("pointerdown", () => {
            this.OnConfirmClicked();
          }, this);
          _0x512871.CalculateAndSetContainerSize(this.confirmationPanel);
          this.confirmationPanel.y -= this.confirmationPanel.displayHeight;
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          var _0x2e6e8e = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x2e6e8e);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
          this.SceneContainer.y = this.renderer.height - this.SceneContainer.displayHeight;
          this.MakeUIGrid();
          this.OnPanelClicked(this.Highlighted);
        }
        ["RefreshPanels"]() {
          this.panels.getChildren().map(_0x56a5a7 => {
            _0x56a5a7.AssignData(_0x56a5a7.power);
          });
        }
        ['OnSelectionChange']() {
          var _0x2d5ee7 = this.panels.getChildren().find(_0x5e8a22 => _0x5e8a22.power === this.Highlighted);
          if (_0x2d5ee7) {
            this.highlight.setPosition(_0x2d5ee7.x - 0x9, _0x2d5ee7.y - 0x9);
            this.HighlightedPanel = _0x2d5ee7;
            let _0x15ce9 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
            _0x15ce9.UI_grid.SelectGameObject(_0x2d5ee7);
            _0x15ce9.UI_selected = _0x2d5ee7;
          }
        }
        ["update"]() {
          var _0x15492d;
          let _0x107ad0 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          if (null === (_0x15492d = _0x107ad0.UI_selected) || undefined === _0x15492d ? undefined : _0x15492d.power) {
            this.OnPanelClicked(_0x107ad0.UI_selected.power);
            _0x107ad0.ToggleCursorsVisibility(false);
            this.highlight.setVisible(true);
          } else {
            _0x107ad0.ToggleCursorsVisibility(true);
            this.highlight.setVisible(false);
          }
        }
        ['MakeUIGrid']() {
          let _0x489dd3 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          this.panels.children.entries.length;
          _0x489dd3.MakeUIGrid(this.Columns, this.Rows + 0x1, true);
          for (let _0x326299 = 0x0; _0x326299 < this.Columns; _0x326299++) {
            _0x489dd3.UI_grid.SetContents(_0x326299, 0x0, this.UI_topBar.BackButton);
          }
          for (let _0x5e04ca = 0x0; _0x5e04ca < this.panels.children.entries.length; _0x5e04ca++) {
            const _0xac18ee = this.panels.children.entries[_0x5e04ca];
            _0x489dd3.UI_grid.SetContents(_0x5e04ca % this.Columns, 0x1 + Math.floor(_0x5e04ca / this.Columns), _0xac18ee);
          }
          _0x489dd3.ToggleCursorsVisibility(false);
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x489dd3);
          _0x489dd3.OnCancelCallback = () => {
            var _0xb94b2f;
            var _0x54d3b6;
            var _0x4e43c1;
            if (!(null === (_0x4e43c1 = null === (_0x54d3b6 = null === (_0xb94b2f = this.UI_topBar.BackButton) || undefined === _0xb94b2f ? undefined : _0xb94b2f._events) || undefined === _0x54d3b6 ? undefined : _0x54d3b6.pointerdown) || undefined === _0x4e43c1)) {
              _0x4e43c1.fn();
            }
          };
        }
      }
      class _0x32998e extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.OmniScene
          });
        }
        ["preload"]() {}
        ["create"]() {}
      }
      class _0xd6a4a0 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.OptionsScene
          });
        }
        ['preload']() {}
        ["create"]() {
          var _0x18bac7 = _0x3dbb73.width * _0x34bb1a.RPixelScale;
          var _0x3daa77 = (_0x3dbb73.height - 0x40) * _0x34bb1a.RPixelScale;
          var _0x597b60 = _0x3daa77 * _0x34bb1a.PixelScale;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x18bac7,
            'height': _0x3daa77
          });
          this.background.setPosition(_0x3dbb73.centerX, _0x597b60);
          this.background.setOrigin(0.5, 0x1);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.background.setInteractive();
          this.header = this.add.text(_0x3dbb73.centerX, 0x21, "Options", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          let _0x2bc2d1 = 0x72;
          this.SFX_text = this.add.text(30, _0x2bc2d1, 'Sounds', {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.SFX_box = this.add.image(300, _0x2bc2d1, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.SFX_toggle = this.add.image(300, _0x2bc2d1, 'UI', 'yes16.png').setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          _0x2bc2d1 = 0xc7;
          this.BGM_text = this.add.text(30, _0x2bc2d1, "Music", {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.BGM_box = this.add.image(300, _0x2bc2d1, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.BGM_toggle = this.add.image(300, _0x2bc2d1, 'UI', "yes16.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          _0x2bc2d1 = 0x11c;
          this.FLASH_text = this.add.text(30, _0x2bc2d1, "Flashing VFX", {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.FLASH_box = this.add.image(300, _0x2bc2d1, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.FLASH_toggle = this.add.image(300, _0x2bc2d1, 'UI', "yes16.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          _0x2bc2d1 = 0x171;
          this.JOYSTICK_text = this.add.text(30, _0x2bc2d1, "Visible joystick", {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.JOYSTICK_box = this.add.image(300, _0x2bc2d1, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.JOYSTICK_toggle = this.add.image(300, _0x2bc2d1, 'UI', "yes16.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          _0x2bc2d1 = 0x1c6;
          this.DAMAGE_text = this.add.text(30, _0x2bc2d1, "Damage Numbers", {
            'align': 'left'
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.DAMAGE_box = this.add.image(300, _0x2bc2d1, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.DAMAGE_toggle = this.add.image(300, _0x2bc2d1, 'UI', "yes16.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.RefundButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x3dbb73.centerX,
            'y': this.renderer.height - 0x80,
            'width': 0xc8,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.add.existing(this.RefundButton);
          this.RefundText = this.add.text(this.RefundButton.x, this.RefundButton.y, "Refund PowerUps", {
            'align': "center"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          var _0x3eae6c = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x3eae6c);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
          this.SceneContainer.y = this.renderer.height - this.SceneContainer.displayHeight;
          this.EnableInput();
          this.ReadPlayerOptions();
          this.MakeUIGrid();
        }
        ["EnableInput"]() {
          this.SFX_box.setInteractive();
          this.SFX_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.SoundsEnabled = !_0x1d0e6c.Core.PlayerOptions.SoundsEnabled;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
          this.BGM_box.setInteractive();
          this.BGM_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.MusicEnabled = !_0x1d0e6c.Core.PlayerOptions.MusicEnabled;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
          this.FLASH_box.setInteractive();
          this.FLASH_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled = !_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
          this.JOYSTICK_box.setInteractive();
          this.JOYSTICK_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.JoystickVisible = !_0x1d0e6c.Core.PlayerOptions.JoystickVisible;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
          this.DAMAGE_box.setInteractive();
          this.DAMAGE_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.DamageNumbersEnabled = !_0x1d0e6c.Core.PlayerOptions.DamageNumbersEnabled;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
          this.RefundButton.setInteractive();
          this.RefundButton.on("pointerdown", () => {
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
            _0x1d0e6c.Core.PlayerOptions.RefundAll();
            this.UI_topBar.UpdateCoins();
          });
        }
        ['MakeUIGrid']() {
          let _0x417825 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x417825.MakeUIGrid(0x1, 0x7, false);
          _0x417825.UI_grid.SetContents(0x0, 0x0, this.UI_topBar.BackButton);
          _0x417825.UI_grid.SetContents(0x0, 0x1, this.SFX_box);
          _0x417825.UI_grid.SetContents(0x0, 0x2, this.BGM_box);
          _0x417825.UI_grid.SetContents(0x0, 0x3, this.FLASH_box);
          _0x417825.UI_grid.SetContents(0x0, 0x4, this.JOYSTICK_box);
          _0x417825.UI_grid.SetContents(0x0, 0x5, this.DAMAGE_box);
          _0x417825.UI_grid.SetContents(0x0, 0x6, this.RefundButton);
          _0x417825.ToggleCursorsVisibility(true);
          _0x417825.UI_grid.SelectGameObject(this.UI_topBar.BackButton);
          _0x417825.UI_selected = this.UI_topBar.BackButton;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x417825);
          _0x417825.OnCancelCallback = () => {
            var _0x292f07;
            var _0x44792f;
            var _0x4629f3;
            if (!(null === (_0x4629f3 = null === (_0x44792f = null === (_0x292f07 = this.UI_topBar.BackButton) || undefined === _0x292f07 ? undefined : _0x292f07._events) || undefined === _0x44792f ? undefined : _0x44792f.pointerdown) || undefined === _0x4629f3)) {
              _0x4629f3.fn();
            }
          };
        }
        ["ReadPlayerOptions"]() {
          var _0x21bae2 = _0x1d0e6c.Core.PlayerOptions.SoundsEnabled;
          this.SFX_toggle.setFrame(_0x21bae2 ? "yes16.png" : 'no16.png');
          var _0x517c5c = _0x1d0e6c.Core.PlayerOptions.MusicEnabled;
          this.BGM_toggle.setFrame(_0x517c5c ? "yes16.png" : "no16.png");
          var _0x1716f2 = _0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled;
          this.FLASH_toggle.setFrame(_0x1716f2 ? "yes16.png" : "no16.png");
          var _0x512f73 = _0x1d0e6c.Core.PlayerOptions.JoystickVisible;
          this.JOYSTICK_toggle.setFrame(_0x512f73 ? 'yes16.png' : "no16.png");
          var _0x13c874 = _0x1d0e6c.Core.PlayerOptions.DamageNumbersEnabled;
          this.DAMAGE_toggle.setFrame(_0x13c874 ? "yes16.png" : "no16.png");
        }
      }
      class _0x5ef933 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.GameOverScene
          });
          this.fillScale = 0x1;
          this.DEBUG_ADS = false;
          this.canSeeReviveButton = false;
          this.bonusCoinsAmount = 0x0;
          this.canRevive = false;
        }
        ["preload"]() {
          _0x1d0e6c.ApplyMenuResolution();
        }
        ['create']() {
          this.canSeeReviveButton = false;
          _0x1d0e6c.Core.PlayerOptions.SaveGameResults();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.BGM_GameOver, {
            'volume': 1.5
          });
          this.Background = this.add.image(0.5 * this.renderer.width, 0.5 * this.renderer.height, "introBG").setAlpha(0x0);
          this.title = this.add.image(0.5 * this.renderer.width, 0.3 * this.renderer.height, "gameOver").setScale(_0x34bb1a.PixelScale).setAlpha(0x1);
          this.rewardTitle = this.add.image(0.5 * this.renderer.width, 0.3 * this.renderer.height, "stageComplete").setScale(0x0).setAlpha(0x1);
          this.bonusCoinsIcon = this.add.image(0.5 * this.renderer.width - 0xaf, 0.3 * this.renderer.height + 0x64, 'UI', "MoneyPile.png").setScale(0x0).setAlpha(0x1).setOrigin(0.5);
          this.bonusCoinsText = this.add.text(0.5 * this.renderer.width + 0x19, 0.3 * this.renderer.height + 0x64, "Bonus Coins: ").setScale(0x0).setAlpha(0x1).setOrigin(0.5);
          var _0x389edd = Math.min(this.Background.displayWidth, this.Background.displayHeight);
          this.fillScale = _0x572c9f ? this.renderer.height / _0x389edd : this.renderer.width / _0x389edd;
          this.Background.setScale(5.1 * this.fillScale, 5.1 * this.fillScale);
          this.SceneContainer = this.add.container(0x0, this.renderer.height);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          const _0x5efd32 = _0x3dbb73.centerX;
          this.ReviveButton = new _0x35cd95.NineSlice(this, _0x564740.GreenButton, {
            'x': _0x5efd32,
            'y': -0x3c,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5, 0x1).setVisible(_0x452b26.HasVideo || this.DEBUG_ADS);
          this.SceneContainer.add(this.ReviveButton);
          this.QuitButton = new _0x35cd95.NineSlice(this, _0x564740.BackButton, {
            'x': _0x5efd32,
            'y': this.ReviveButton.y - 0x78,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x0).setOrigin(0.5, 0x1);
          this.SceneContainer.add(this.QuitButton);
          this.ReviveText = new Phaser.GameObjects.Text(this, this.ReviveButton.x, this.ReviveButton.y - 0.5 * this.ReviveButton.displayHeight, 'REVIVE', {}).setOrigin(0.5, 0.5).setScale(0x2 * _0x34bb1a.PixelScale).setVisible(_0x452b26.HasVideo || this.DEBUG_ADS);
          this.SceneContainer.add(this.ReviveText);
          this.QuitText = new Phaser.GameObjects.Text(this, this.QuitButton.x, this.QuitButton.y - 0x20, "QUIT", {}).setOrigin(0.5, 0.5).setScale(0x0);
          this.SceneContainer.add(this.QuitText);
          this.cameraFilter = this.plugins.get("rexPixelationPipeline").add(this.cameras.main);
          this.cameraFilter.pixelWidth = 0x32;
          this.cameraFilter.pixelHeight = 0x32;
          this.tweens.add({
            'targets': this.cameraFilter,
            'pixelWidth': 0x1,
            'pixelHeight': 0x1,
            'duration': 0x3e8,
            'ease': 'Linear',
            'onComplete': () => {
              this.OnIntroEnded();
            }
          });
          this.tweens.add({
            'targets': this.Background,
            'scaleY': this.fillScale,
            'scaleX': this.fillScale,
            'alpha': 0.4,
            'duration': 0x320,
            'ease': "Linear"
          });
          this.makeAngelVFX();
          this.omniScene = this.scene.get(_0xf7a726.OmniScene);
          this.omniScene.events.addListener('ADMOB_Rewarded', this.OnVideoWatched.bind(this));
          this.omniScene.events.addListener('ADMOB_Dismissed', this.OnVideoDismissed.bind(this));
          this.bonusCoinsAmount = 0x0;
        }
        ['MakeUIGrid']() {
          let _0x1d375e = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x1d375e.MakeUIGrid(0x1, 0x2, false);
          if (this.canSeeReviveButton) {
            _0x1d375e.UI_grid.SetContents(0x0, 0x0, this.ReviveButton);
          }
          _0x1d375e.UI_grid.SetContents(0x0, 0x1, this.QuitButton);
          let _0x1b9b8a = this.canSeeReviveButton ? this.ReviveButton : this.QuitButton;
          _0x1d375e.ToggleCursorsVisibility(false);
          _0x1d375e.UI_grid.SelectGameObject(_0x1b9b8a);
          _0x1d375e.UI_selected = _0x1b9b8a;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x1d375e);
          _0x1d375e.OnCancelCallback = () => {};
          this.time.addEvent({
            'delay': 0x1e,
            'callback': () => {
              _0x1d375e.ToggleCursorsVisibility(true);
            }
          });
        }
        ['makeAngelVFX']() {
          this.screenFade = this.add.sprite(0x0, 0x0, "vfx", "WhiteDot.png").setScrollFactor(0x0).setScale(this.renderer.width, this.renderer.height).setAlpha(0x0).setOrigin(0x0);
          const _0x13f8a7 = this.anims.generateFrameNames("angel", {
            'start': 0x1,
            'end': 0xa,
            'zeroPad': 0x0,
            'prefix': "angel",
            'suffix': ".png"
          });
          this.Angel = this.add.sprite(0.5 * this.renderer.width, 0.5 * this.renderer.height, "angel");
          this.Angel.anims.create({
            'key': "angel",
            'frames': _0x13f8a7,
            'frameRate': 0x10,
            'repeat': 0x0
          });
          this.Angel.visible = false;
          this.Angel.setScale(0x2 * _0x34bb1a.PixelScale);
          this.Angel.setDepth(0x3e8);
          this.Angel.setTintFill(0xffffbb);
          this.Angel.on('animationcomplete', this.Revive.bind(this));
        }
        ["playReviveAnim"]() {
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
            this.tweens.add({
              'targets': this.screenFade,
              'alpha': 0x1,
              'duration': 0x64,
              'yoyo': true,
              'ease': "Linear",
              'delay': 0x1a9
            });
          }
          this.tweens.add({
            'targets': this.Background,
            'alpha': 0x0,
            'duration': 0x271,
            'yoyo': true,
            'ease': 'Linear'
          });
          this.Angel.visible = true;
          this.Angel.play("angel");
        }
        ['EnableButtons']() {
          this.QuitButton.setInteractive();
          this.QuitButton.on("pointerdown", () => {
            try {
              this.omniScene.events.removeAllListeners("ADMOB_Rewarded");
              this.omniScene.events.removeAllListeners("ADMOB_Dismissed");
            } catch (_0x25ef7a) {}
            try {
              _0x1d0e6c.Core.OnPlayerQuit();
              _0x1d0e6c.Core.SceneManager.PostGameFromGameOver();
              _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
            } catch (_0x52f335) {
              console.log(_0x52f335);
              _0x1d0e6c.Core.OnPlayerQuit();
              _0x1d0e6c.Core.SceneManager.PostGameFromGameOver();
            }
          });
          this.tweens.add({
            'targets': [this.QuitButton, this.QuitText],
            'scale': 0x2 * _0x34bb1a.PixelScale,
            'duration': 0xfa,
            'ease': "Linear"
          });
          if (_0x452b26.HasVideo || this.DEBUG_ADS) {
            this.canSeeReviveButton = true;
            this.ReviveButton.setInteractive();
            this.ReviveButton.on("pointerdown", () => {
              this.ReviveButton.removeAllListeners();
              this.HideReviveButton();
              _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
              if (this.DEBUG_ADS) {
                this.OnVideoWatched({
                  'amount': 0x1
                });
                this.OnVideoDismissed();
              } else {
                _0x452b26.ShowVideo();
              }
            });
          }
        }
        ["OnVideoWatched"](_0x396b26) {
          console.log("ADMOB watched callback, reward: " + _0x396b26);
          this.canRevive = null == _0x396b26 ? undefined : _0x396b26.amount;
          if (this.canRevive) {
            this.HideQuitButton();
          }
        }
        ["OnVideoDismissed"]() {
          _0x452b26.GetVideo();
          if (this.canRevive) {
            this.canRevive = false;
            this.playReviveAnim();
            try {
              this.omniScene.events.removeAllListeners("ADMOB_Rewarded");
              this.omniScene.events.removeAllListeners("ADMOB_Dismissed");
            } catch (_0x846045) {}
          }
        }
        ['HideQuitButton']() {
          this.tweens.add({
            'targets': [this.QuitButton, this.QuitText],
            'alpha': 0x0,
            'scale': 0x0,
            'duration': 0x64,
            'ease': "Linear"
          });
          this.QuitButton.removeInteractive();
        }
        ["HideReviveButton"]() {
          this.tweens.add({
            'targets': [this.ReviveButton, this.ReviveText],
            'alpha': 0x0,
            'scale': 0x0,
            'duration': 0x64,
            'ease': 'Linear'
          });
          this.ReviveButton.removeInteractive();
        }
        ["Revive"]() {
          _0x1d0e6c.Core.SceneManager.BackFromGameOver();
          _0x1d0e6c.Core.Player.Revive();
        }
        ["OnIntroEnded"]() {
          if (_0x1d0e6c.Core.SurvivedSeconds >= 0x708) {
            this.EnterStageReward();
          } else {
            this.EnableButtons();
            this.MakeUIGrid();
          }
        }
        ['EnterStageReward']() {
          this.time.addEvent({
            'delay': 0x1f4,
            'callback': () => {
              this.tweens.add({
                'targets': this.title,
                'alpha': 0x0,
                'scale': 0x0,
                'duration': 0xfa,
                'ease': "Linear"
              });
              this.tweens.add({
                'targets': this.rewardTitle,
                'scale': _0x34bb1a.PixelScale,
                'duration': 0xfa,
                'ease': "Linear"
              });
              this.tweens.add({
                'targets': [this.bonusCoinsIcon, this.bonusCoinsText],
                'scale': 0x2 * _0x34bb1a.PixelScale,
                'duration': 0xfa,
                'ease': 'Linear'
              });
              this.tweens.add({
                'targets': this,
                'bonusCoinsAmount': 0x1f4,
                'duration': 0x5dc,
                'ease': "Linear",
                'onComplete': () => {
                  _0x1d0e6c.Core.PlayerOptions.AddCoins(0x1f4);
                  this.EnableButtons();
                  this.MakeUIGrid();
                }
              });
            }
          });
        }
        ["update"]() {
          this.bonusCoinsText.text = "Bonus Coins: " + this.bonusCoinsAmount.toFixed();
        }
      }
      class _0x1a5722 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.PauseScene
          });
        }
        ['preload']() {
          _0x1d0e6c.ApplyMenuResolution();
        }
        ["create"]() {
          this.SceneContainer = this.add.container(0x0, this.renderer.height);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          const _0x513e54 = _0x3dbb73.centerX;
          var _0x3749bf = _0x3dbb73.width;
          this.blackBg = this.add.image(0x0, 0x0, 'UI', "blackDot.png").setOrigin(0x0).setScale(1.1 * this.renderer.width, 1.1 * this.renderer.height).setAlpha(0.5).setDepth(-0x1);
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x3749bf,
            'height': 0x1b8
          });
          this.background.setPosition(_0x513e54, 0x40);
          this.background.setOrigin(0.5, 0x0);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.QuitButton = new _0x35cd95.NineSlice(this, _0x564740.BackButton, {
            'x': _0x513e54 / 0x2,
            'y': -0x48,
            'width': 0x60,
            'height': 0x20
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.SceneContainer.add(this.QuitButton);
          this.QuitText = new Phaser.GameObjects.Text(this, this.QuitButton.x, this.QuitButton.y, "QUIT", {}).setOrigin(0.5, 0.5).setScale(1.5 * _0x34bb1a.PixelScale);
          this.SceneContainer.add(this.QuitText);
          this.ResumeButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': 1.5 * _0x513e54,
            'y': -0x48,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.SceneContainer.add(this.ResumeButton);
          this.ResumeText = new Phaser.GameObjects.Text(this, this.ResumeButton.x, this.ResumeButton.y, "RESUME", {}).setOrigin(0.5, 0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.SceneContainer.add(this.ResumeText);
          this.SFX_text = this.add.text(30, 0x72, 'Sounds', {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.SFX_box = this.add.image(300, 0x72, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.SFX_toggle = this.add.image(300, 0x72, 'UI', "yes16.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.BGM_text = this.add.text(30, 0xc7, "Music", {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.BGM_box = this.add.image(300, 0xc7, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.BGM_toggle = this.add.image(300, 0xc7, 'UI', "yes16.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.FLASH_text = this.add.text(30, 0x11c, "Flashing VFX", {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.FLASH_box = this.add.image(300, 0x11c, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.FLASH_toggle = this.add.image(300, 0x11c, 'UI', 'yes16.png').setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.JOYSTICK_text = this.add.text(30, 0x171, "Visible joystick", {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.JOYSTICK_box = this.add.image(300, 0x171, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.JOYSTICK_toggle = this.add.image(300, 0x171, 'UI', "yes16.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.DAMAGE_text = this.add.text(30, 0x1c6, "Damage Numbers", {
            'align': "left"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.DAMAGE_box = this.add.image(300, 0x1c6, 'UI', "menu_checkbox_24_bg.png").setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.DAMAGE_toggle = this.add.image(300, 0x1c6, 'UI', 'yes16.png').setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0x0, 0.5);
          this.ReadPlayerOptions();
          this.time.addEvent({
            'delay': 0x1e,
            'callback': () => this.EnableButtons()
          });
          this.MakeUIGrid();
        }
        ["EnableButtons"]() {
          this.QuitButton.setInteractive();
          this.QuitButton.on('pointerdown', () => {
            try {
              _0x1d0e6c.Core.OnPlayerQuit();
              _0x1d0e6c.Core.SceneManager.QuitFromPauseMenu();
              _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
            } catch (_0x2b44b8) {
              console.log(_0x2b44b8);
              _0x1d0e6c.Core.OnPlayerQuit();
              _0x1d0e6c.Core.SceneManager.QuitFromPauseMenu();
            }
          });
          this.ResumeButton.setInteractive();
          this.ResumeButton.on('pointerdown', () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromPause();
          });
          this.SFX_box.setInteractive();
          this.SFX_box.on('pointerdown', () => {
            _0x1d0e6c.Core.PlayerOptions.SoundsEnabled = !_0x1d0e6c.Core.PlayerOptions.SoundsEnabled;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
          this.BGM_box.setInteractive();
          this.BGM_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.MusicEnabled = !_0x1d0e6c.Core.PlayerOptions.MusicEnabled;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
            if (_0x1d0e6c.Core.PlayerOptions.MusicEnabled) {
              _0x1d0e6c.Sound.FadeMusic(_0xae9ba1.BGM_Forest, 0.3, 0x64);
            } else {
              _0x1d0e6c.Sound.FadeMusic(_0xae9ba1.BGM_Forest, 0x0, 0x64);
            }
          });
          this.FLASH_box.setInteractive();
          this.FLASH_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled = !_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
          this.JOYSTICK_box.setInteractive();
          this.JOYSTICK_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.JoystickVisible = !_0x1d0e6c.Core.PlayerOptions.JoystickVisible;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
          this.DAMAGE_box.setInteractive();
          this.DAMAGE_box.on("pointerdown", () => {
            _0x1d0e6c.Core.PlayerOptions.DamageNumbersEnabled = !_0x1d0e6c.Core.PlayerOptions.DamageNumbersEnabled;
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn);
            _0x1d0e6c.Core.PlayerOptions.SaveOptions();
            this.ReadPlayerOptions();
          });
        }
        ["MakeUIGrid"]() {
          let _0x4dfe2d = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x4dfe2d.MakeUIGrid(0x2, 0x6, false);
          _0x4dfe2d.UI_grid.SetContents(0x1, 0x0, this.SFX_box);
          _0x4dfe2d.UI_grid.SetContents(0x1, 0x1, this.BGM_box);
          _0x4dfe2d.UI_grid.SetContents(0x1, 0x2, this.FLASH_box);
          _0x4dfe2d.UI_grid.SetContents(0x1, 0x3, this.JOYSTICK_box);
          _0x4dfe2d.UI_grid.SetContents(0x1, 0x4, this.DAMAGE_box);
          _0x4dfe2d.UI_grid.SetContents(0x1, 0x5, this.ResumeButton);
          _0x4dfe2d.UI_grid.SetContents(0x0, 0x5, this.QuitButton);
          _0x4dfe2d.ToggleCursorsVisibility(true);
          _0x4dfe2d.UI_grid.SelectGameObject(this.ResumeButton);
          _0x4dfe2d.UI_selected = this.ResumeButton;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x4dfe2d);
          _0x4dfe2d.OnCancelCallback = () => {
            var _0x5ae417;
            var _0x407604;
            var _0x118fcf;
            if (!(null === (_0x118fcf = null === (_0x407604 = null === (_0x5ae417 = this.ResumeButton) || undefined === _0x5ae417 ? undefined : _0x5ae417._events) || undefined === _0x407604 ? undefined : _0x407604.pointerdown) || undefined === _0x118fcf)) {
              _0x118fcf.fn();
            }
          };
        }
        ["ReadPlayerOptions"]() {
          var _0x5b3193 = _0x1d0e6c.Core.PlayerOptions.SoundsEnabled;
          this.SFX_toggle.setFrame(_0x5b3193 ? "yes16.png" : 'no16.png');
          var _0x1b6ad7 = _0x1d0e6c.Core.PlayerOptions.MusicEnabled;
          this.BGM_toggle.setFrame(_0x1b6ad7 ? "yes16.png" : 'no16.png');
          var _0x22c40c = _0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled;
          this.FLASH_toggle.setFrame(_0x22c40c ? 'yes16.png' : 'no16.png');
          var _0x270fc1 = _0x1d0e6c.Core.PlayerOptions.JoystickVisible;
          this.JOYSTICK_toggle.setFrame(_0x270fc1 ? "yes16.png" : 'no16.png');
          var _0x65a87 = _0x1d0e6c.Core.PlayerOptions.DamageNumbersEnabled;
          this.DAMAGE_toggle.setFrame(_0x65a87 ? "yes16.png" : "no16.png");
        }
        ['HideQuitButton']() {
          this.tweens.add({
            'targets': [this.QuitButton, this.QuitText],
            'alpha': 0x0,
            'scale': 0x0,
            'duration': 0x64,
            'ease': 'Linear'
          });
          this.QuitButton.removeInteractive();
        }
        ['update']() {}
      }
      class _0x2515b8 extends Phaser.GameObjects.Container {
        constructor(_0x118a77, _0xede35f, _0x49a517, _0x9337b4) {
          super(_0x118a77, _0xede35f, _0x49a517);
          this.power = _0x2a5ca3.AMOUNT;
          this.power = _0x9337b4;
          this.setScale(_0x34bb1a.PixelScale);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x20, 0x20, 'UI', 'frameB.png').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myWeaponIcon = new Phaser.GameObjects.Image(this.scene, 0x20, 0x20, "items", '').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.AssignData(this.power);
          this.add([this.myIconBG, this.myWeaponIcon]);
        }
        ["AssignData"](_0x24ea7f) {
          this.power = _0x24ea7f;
          var _0x5916e5 = _0x14b553[this.power][0x0];
          if (_0x5916e5.seen) {
            this.myWeaponIcon.setTexture(_0x5916e5.texture, _0x5916e5.frameName).setScale(0x2 * _0x34bb1a.PixelScale);
            this.myIconBG.setAlpha(0x1).setScale(0x2 * _0x34bb1a.PixelScale);
          } else {
            this.myWeaponIcon.setTexture('items', "QuestionMark.png").setScale(_0x34bb1a.PixelScale);
            this.myIconBG.setAlpha(0.5).setScale(1.6 * _0x34bb1a.PixelScale);
          }
        }
      }
      class _0x1a67db extends Phaser.GameObjects.Container {
        constructor(_0x541427, _0x285bd0, _0x55b0f7) {
          super(_0x541427, _0x285bd0, _0x55b0f7);
          this.power = _0x2a5ca3.AMOUNT;
          this.setScale(_0x34bb1a.PixelScale);
          var _0x358d09 = {
            'x': 0x0,
            'y': 0x0,
            'width': 0.96 * _0x3dbb73.width,
            'height': 0x68
          };
          var _0x2ebad4 = 0.96 * _0x3dbb73.width * 0.5;
          var _0x5a1ad2 = 0.96 * _0x3dbb73.width * 0.25;
          this.Background = new _0x35cd95.NineSlice(this.scene, _0x564740.PanelBackground, _0x358d09);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x34, 0x34, 'UI', "frameB.png").setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myWeaponIcon = new Phaser.GameObjects.Image(this.scene, 0x34, 0x34, "items", '').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myName = new Phaser.GameObjects.Text(this.scene, _0x2ebad4, 0x6, "Name", {
            'color': 'yellow'
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0);
          this.myDesc = new Phaser.GameObjects.Text(this.scene, 0.5 * _0x2ebad4, 0x20, "Description", {}).setScale(_0x34bb1a.PixelScale).setWordWrapWidth(0x3 * _0x5a1ad2);
          this.myTips = new Phaser.GameObjects.Text(this.scene, 0.5 * _0x2ebad4, 0x40, "Ignores: area,speed,cooldown", {
            'color': "orange"
          }).setScale(_0x34bb1a.PixelScale).setWordWrapWidth(0x3 * _0x5a1ad2);
          this.AssignData(this.power);
          this.add([this.Background, this.myIconBG, this.myWeaponIcon, this.myName, this.myDesc, this.myTips]);
        }
        ['AssignData'](_0x8a5536) {
          this.power = _0x8a5536;
          var _0x25e0ca = _0x14b553[this.power];
          const _0x65d44f = (_0x25e0ca = undefined !== _0x25e0ca ? _0x14b553[this.power][0x0] : _0x34b109[this.power]).seen;
          this.Background.setTint(_0x65d44f ? 0xffffff : 0x888888);
          this.myName.text = _0x65d44f ? _0x25e0ca.name : '???';
          if (_0x65d44f) {
            this.myWeaponIcon.setTexture(_0x25e0ca.texture, _0x25e0ca.frameName);
          } else {
            this.myWeaponIcon.setTexture('items', 'QuestionMark.png');
          }
          this.myDesc.setText(_0x65d44f ? _0x25e0ca.description : "Not yet found.");
          this.myTips.setText(_0x65d44f ? _0x25e0ca.tips : '');
        }
        ["TurnToSelection"]() {
          this.AssignData(this.power);
        }
      }
      class _0x4cecef extends Phaser.GameObjects.Container {
        constructor(_0x4089c5, _0x210341, _0x59876c, _0x68367a) {
          super(_0x4089c5, _0x210341, _0x59876c);
          this.power = _0x5b2d7b.COIN;
          this.power = _0x68367a;
          this.setScale(_0x34bb1a.PixelScale);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x20, 0x20, 'UI', "frameC.png").setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myWeaponIcon = new Phaser.GameObjects.Image(this.scene, 0x20, 0x20, 'items', '').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.AssignData(this.power);
          this.add([this.myIconBG, this.myWeaponIcon]);
        }
        ["AssignData"](_0x98542c) {
          this.power = _0x98542c;
          var _0x5f38cb = _0x34b109[this.power];
          if (_0x5f38cb.seen) {
            this.myWeaponIcon.setTexture(_0x5f38cb.texture, _0x5f38cb.frameName).setScale(0x2 * _0x34bb1a.PixelScale);
            this.myIconBG.setAlpha(0x1).setScale(0x2 * _0x34bb1a.PixelScale);
          } else {
            this.myWeaponIcon.setTexture('items', "QuestionMark.png").setScale(_0x34bb1a.PixelScale);
            this.myIconBG.setAlpha(0.5).setScale(1.6 * _0x34bb1a.PixelScale);
          }
        }
      }
      class _0x5ac55d extends Phaser.GameObjects.Container {
        constructor(_0x159bd5, _0x36eca5, _0x454097) {
          super(_0x159bd5, _0x36eca5, _0x454097);
          this.MaxY = 0x0;
          this.MinY = 0x0;
          _0x159bd5.add.existing(this);
        }
        get ["ReverseValue"]() {
          return this.y / this.MaxY;
        }
        ["SetSize"](_0x550dbc, _0x2b0171) {
          this.trueWidth = _0x550dbc;
          this.trueHeight = _0x2b0171;
          this.setSize(_0x550dbc, _0x2b0171);
          this.setInteractive();
          this.MaxY = this.y;
          this.MinY = this.y - 0.5 * _0x2b0171;
          this.scene.input.setDraggable(this);
          this.scene.input.on("drag", (_0x48d7dd, _0x5d8a, _0x18783c, _0x77e6e4) => {
            this.y = _0x77e6e4;
            if (this.y > this.MaxY) {
              this.y = this.MaxY;
            }
            if (this.y < this.MinY) {
              this.y = this.MinY;
            }
          });
        }
        ['ScrollBy'](_0x3bc7bf) {
          this.y += _0x3bc7bf;
          if (this.y > this.MaxY) {
            this.y = this.MaxY;
          }
          if (this.y < this.MinY) {
            this.y = this.MinY;
          }
        }
        ["AddChildren"](_0x44e076) {
          if (Array.isArray(_0x44e076)) {
            for (let _0x1d6d2c = 0x0; _0x1d6d2c < _0x44e076.length; _0x1d6d2c++) {
              const _0x5b50f8 = _0x44e076[_0x1d6d2c];
              _0x5b50f8.x -= 0.5 * this.trueWidth;
              _0x5b50f8.y -= 0.5 * this.trueHeight;
            }
          } else {
            _0x44e076.x -= 0.5 * this.trueWidth;
            _0x44e076.y -= 0.5 * this.trueHeight;
          }
          this.add(_0x44e076);
        }
      }
      class _0x565eb7 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.CollectionWeaponScene
          });
          this.TopLeft = new Phaser.Math.Vector2(0x0, 0x0);
          this.Highlighted = _0x2a5ca3.WHIP;
          this.Columns = 0x8;
          this.Rows = 0x0;
        }
        ["preload"]() {}
        ['create']() {
          var _0x1c540a = _0x3dbb73.width;
          var _0x391367 = _0x3dbb73.height - 0x40;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x1c540a,
            'height': _0x391367
          });
          this.background.setPosition(_0x3dbb73.centerX, _0x391367);
          this.background.setOrigin(0.5, 0x1);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.header = this.add.text(_0x3dbb73.centerX, 0x21, "Collection", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.panels = this.add.group();
          for (const _0x49f005 in _0x14b553) if (!_0x14b553[_0x49f005][0x0].hidden) {
            var _0x15ad3e = new _0x2515b8(this, 0x0, 0x0, _0x49f005);
            this.add.existing(_0x15ad3e);
            _0x15ad3e.myIconBG.setInteractive();
            _0x15ad3e.myIconBG.on("pointerdown", () => {
              this.OnPanelClicked(_0x49f005);
            }, this);
            this.panels.add(_0x15ad3e);
          }
          for (const _0x3096b8 in _0x34b109) if (!_0x34b109[_0x3096b8].hidden) {
            var _0x213b1a = new _0x4cecef(this, 0x0, 0x0, _0x3096b8);
            this.add.existing(_0x213b1a);
            _0x213b1a.myIconBG.setInteractive();
            _0x213b1a.myIconBG.on("pointerdown", () => {
              this.OnPanelClicked(_0x3096b8);
            }, this);
            this.panels.add(_0x213b1a);
          }
          const _0x39efc2 = new Phaser.GameObjects.Graphics(this, {
            'x': 0x0,
            'y': 0x0
          });
          _0x39efc2.lineStyle(0x1, 0xffffff, 0.9);
          _0x39efc2.fillStyle(0xffff, 0.2);
          _0x39efc2.fillRect(0x0, 0x7c, _0x3dbb73.width, this.renderer.height - 0x80 - 0x68);
          var _0x320f19 = _0x39efc2.createGeometryMask();
          var _0x231b15 = _0x391367 - 0x68;
          var _0x4ddb57 = this.Columns;
          var _0x55e384 = this.panels.getChildren();
          for (var _0x1e2575 = 0x0; _0x1e2575 < _0x55e384.length; _0x1e2575++) {
            const _0x148abf = _0x55e384[_0x1e2575];
            _0x148abf.x = 0xc + _0x1e2575 % _0x4ddb57 * 0x30 + _0x1e2575 % _0x4ddb57 * 0xc;
            _0x148abf.y = 0x38 + 0x30 * Math.floor(_0x1e2575 / _0x4ddb57) + 0xc * Math.floor(_0x1e2575 / _0x4ddb57);
          }
          this.Rows = Math.ceil(_0x1e2575 / _0x4ddb57);
          this.highlight = new _0x35cd95.NineSlice(this, _0x564740.SelectionHighlight, {
            'x': 0x0,
            'y': 0x0,
            'width': 0x24,
            'height': 0x24
          });
          this.highlight.setOrigin(0x0, 0x0).setScale(1.5 * _0x34bb1a.PixelScale).setDepth(0x3e8);
          this.add.existing(this.highlight);
          var _0x559751 = new _0x5ac55d(this, _0x3dbb73.centerX, 0.5 * _0x231b15);
          _0x559751.setMask(_0x320f19);
          this.confirmationPanel = new _0x1a67db(this, 10, _0x391367 - 0xa);
          this.add.existing(this.confirmationPanel);
          _0x512871.CalculateAndSetContainerSize(this.confirmationPanel);
          this.confirmationPanel.y -= this.confirmationPanel.displayHeight;
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          this.scene.bringToTop(this.UI_topBar);
          var _0x2f1795 = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x2f1795);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
          this.SceneContainer.y = this.renderer.height - this.SceneContainer.displayHeight;
          _0x559751.SetSize(_0x3dbb73.width, _0x231b15);
          _0x559751.AddChildren(_0x55e384);
          _0x559751.AddChildren(this.highlight);
          _0x559751.disableInteractive();
          this.MakeUIGrid();
          this.OnPanelClicked(this.Highlighted);
        }
        ["MakeUIGrid"]() {
          let _0x52e87e = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          this.panels.children.entries.length;
          _0x52e87e.MakeUIGrid(this.Columns, this.Rows + 0x1, true);
          for (let _0x455838 = 0x0; _0x455838 < this.Columns; _0x455838++) {
            _0x52e87e.UI_grid.SetContents(_0x455838, 0x0, this.UI_topBar.BackButton);
          }
          for (let _0xee734b = 0x0; _0xee734b < this.panels.children.entries.length; _0xee734b++) {
            const _0x21c903 = this.panels.children.entries[_0xee734b];
            let _0x2f79f9 = _0xee734b % this.Columns;
            let _0x284288 = 0x1 + Math.floor(_0xee734b / this.Columns);
            _0x52e87e.UI_grid.SetContents(_0x2f79f9, _0x284288, _0x21c903);
          }
          _0x52e87e.UI_grid.SelectAt(0x0, 0x0);
          _0x52e87e.UI_selected = this.UI_topBar.BackButton;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x52e87e);
          _0x52e87e.OnCancelCallback = () => {
            var _0x11c5fe;
            var _0x5c6a32;
            var _0x547c11;
            if (!(null === (_0x547c11 = null === (_0x5c6a32 = null === (_0x11c5fe = this.UI_topBar.BackButton) || undefined === _0x11c5fe ? undefined : _0x11c5fe._events) || undefined === _0x5c6a32 ? undefined : _0x5c6a32.pointerdown) || undefined === _0x547c11)) {
              _0x547c11.fn();
            }
          };
        }
        ["update"]() {
          var _0x7db82d;
          let _0x503cc6 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          if (null === (_0x7db82d = _0x503cc6.UI_selected) || undefined === _0x7db82d ? undefined : _0x7db82d.power) {
            this.OnPanelClicked(_0x503cc6.UI_selected.power);
            _0x503cc6.ToggleCursorsVisibility(false);
            this.highlight.setVisible(true);
          } else {
            _0x503cc6.ToggleCursorsVisibility(true);
            this.highlight.setVisible(false);
          }
        }
        ['OnSelectionChange']() {
          var _0x44557d = this.panels.getChildren().find(_0x375598 => _0x375598.power === this.Highlighted);
          if (_0x44557d) {
            this.highlight.setPosition(_0x44557d.x + 0x5, _0x44557d.y + 0x5);
            let _0x58250f = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
            _0x58250f.UI_grid.SelectGameObject(_0x44557d);
            _0x58250f.UI_selected = _0x44557d;
          }
        }
        ["OnPanelClicked"](_0x5b1999) {
          this.Highlighted = _0x5b1999;
          this.confirmationPanel.AssignData(this.Highlighted);
          this.OnSelectionChange();
        }
        ["OnConfirmClicked"]() {}
      }
      class _0x5bf9e7 {
        static ["MakeTexture_PowerUps"](_0x26e9ae, _0x4f3863 = "tex", _0x104524 = 0xff, _0x44b528 = 0.5, _0x22f925 = true) {
          var _0x3cd3e2;
          var _0x19e465 = new Array();
          if (null === (_0x3cd3e2 = _0x1d0e6c.Core) || undefined === _0x3cd3e2 ? undefined : _0x3cd3e2.LevelUpFactory) {
            _0x19e465 = _0x1d0e6c.Core.LevelUpFactory.GetRemainingWeaponsAndPowerUps();
          }
          if (_0x19e465.length <= 0x0) {
            for (const _0x3957d1 in _0x14b553) if (_0x14b553[_0x3957d1][0x0].isPowerUp) {
              _0x19e465.push(_0x14b553[_0x3957d1][0x0].bulletType);
            }
          }
          if (_0x22f925) {
            Phaser.Utils.Array.Shuffle(_0x19e465);
          }
          var _0x11f558 = this.MinAmountOfPowerUps - _0x19e465.length;
          const _0x31095c = _0x26e9ae.make.renderTexture({
            'x': -0x2710,
            'y': -0x2710,
            'width': 0x20,
            'height': 0x20 * (_0x19e465.length + _0x11f558)
          });
          const _0x694f40 = _0x26e9ae.make.renderTexture({
            'x': -0x2710,
            'y': -0x2710,
            'width': 0x20,
            'height': 0x20 * (_0x19e465.length + _0x11f558)
          });
          const _0x29ba6b = new Phaser.GameObjects.Graphics(_0x26e9ae, {
            'x': 0x0,
            'y': 0x0
          });
          _0x29ba6b.fillStyle(_0x104524, _0x44b528);
          _0x29ba6b.fillRect(0x0, 0x0, 0x20, 0x20 * (_0x19e465.length + _0x11f558));
          _0x31095c.draw(_0x29ba6b);
          _0x694f40.draw(_0x29ba6b);
          _0x694f40.saveTexture(_0x4f3863 + "_empty");
          var _0x3a1df3 = 0x0;
          for (_0x3a1df3 = 0x0; _0x3a1df3 < _0x19e465.length && _0x3a1df3 < this.MinAmountOfPowerUps; _0x3a1df3++) {
            var _0x4509f0 = _0x14b553[_0x19e465[_0x3a1df3]][0x0];
            _0x31095c.drawFrame(_0x4509f0.texture, _0x4509f0.frameName, 0x8, 0x20 * _0x3a1df3);
          }
          for (let _0x26c668 = 0x0; _0x26c668 < _0x11f558; _0x26c668++) {
            _0x31095c.drawFrame("items", "MoneyBagGreen.png", 0x8, 0x20 * (_0x3a1df3 + _0x26c668));
          }
          _0x31095c.saveTexture(_0x4f3863);
        }
        static ["MakeTexture_ExistingWeapons"](_0x5a13c8, _0x50a67c = "tex", _0x414d0c = 0xff0000, _0x49e4a8 = 0.5) {
          var _0x5a1f9d;
          var _0xe007f0 = new Array();
          if (null === (_0x5a1f9d = _0x1d0e6c.Core) || undefined === _0x5a1f9d ? undefined : _0x5a1f9d.LevelUpFactory) {
            _0xe007f0 = _0x1d0e6c.Core.LevelUpFactory.GetExistingNotMaxedWeapons();
          }
          if (_0xe007f0.length <= 0x0) {
            for (const _0x434ad1 in _0x14b553) if (!_0x14b553[_0x434ad1][0x0].isPowerUp) {
              _0xe007f0.push(_0x14b553[_0x434ad1][0x0].bulletType);
            }
          }
          var _0x2a4d86 = this.MinAmountOfPowerUps - _0xe007f0.length;
          const _0x4d9f10 = _0x5a13c8.make.renderTexture({
            'x': -0x2710,
            'y': -0x2710,
            'width': 0x20,
            'height': 0x20 * (_0xe007f0.length + _0x2a4d86)
          });
          const _0x1f1a84 = _0x5a13c8.make.renderTexture({
            'x': -0x2710,
            'y': -0x2710,
            'width': 0x20,
            'height': 0x20 * (_0xe007f0.length + _0x2a4d86)
          });
          const _0x24b929 = new Phaser.GameObjects.Graphics(_0x5a13c8, {
            'x': 0x0,
            'y': 0x0
          });
          _0x24b929.fillStyle(_0x414d0c, _0x49e4a8);
          _0x24b929.fillRect(0x0, 0x0, 0x20, 0x20 * (_0xe007f0.length + _0x2a4d86));
          _0x4d9f10.draw(_0x24b929);
          _0x1f1a84.draw(_0x24b929);
          _0x1f1a84.saveTexture(_0x50a67c + '_empty');
          var _0x48b3fd = 0x0;
          for (_0x48b3fd = 0x0; _0x48b3fd < _0xe007f0.length && _0x48b3fd < this.MinAmountOfPowerUps; _0x48b3fd++) {
            var _0x5eb9d6 = _0x14b553[_0xe007f0[_0x48b3fd]][0x0];
            _0x4d9f10.drawFrame(_0x5eb9d6.texture, _0x5eb9d6.frameName, 0x8, 0x20 * _0x48b3fd);
          }
          for (let _0x22f7b8 = 0x0; _0x22f7b8 < _0x2a4d86; _0x22f7b8++) {
            _0x4d9f10.drawFrame("items", "MoneyBagGreen.png", 0x8, 0x20 * (_0x48b3fd + _0x22f7b8));
          }
          _0x4d9f10.saveTexture(_0x50a67c);
        }
        static ["MakeTexture_Any"](_0x39dc11, _0x6b188a = "tex", _0x2dcbd8 = 0xff, _0x33ff85 = 0.5, _0x511503 = true) {
          var _0x138f0c = new Array();
          for (const _0x598e2f in _0x14b553) _0x138f0c.push(_0x14b553[_0x598e2f][0x0].bulletType);
          if (_0x511503) {
            Phaser.Utils.Array.Shuffle(_0x138f0c);
            _0x138f0c.sort((_0x54cdfe, _0x52940c) => _0x14b553[_0x52940c][0x0].isEvolution ? 0x1 : -0x1);
          }
          var _0x3ae07d = this.MinAmountOfPowerUps - _0x138f0c.length;
          const _0x2840b8 = _0x39dc11.make.renderTexture({
            'x': -0x2710,
            'y': -0x2710,
            'width': 0x20,
            'height': 0x20 * (_0x138f0c.length + _0x3ae07d)
          });
          const _0x653608 = _0x39dc11.make.renderTexture({
            'x': -0x2710,
            'y': -0x2710,
            'width': 0x20,
            'height': 0x20 * (_0x138f0c.length + _0x3ae07d)
          });
          const _0x4084b0 = new Phaser.GameObjects.Graphics(_0x39dc11, {
            'x': 0x0,
            'y': 0x0
          });
          _0x4084b0.fillStyle(_0x2dcbd8, _0x33ff85);
          _0x4084b0.fillRect(0x0, 0x0, 0x20, 0x20 * (_0x138f0c.length + _0x3ae07d));
          _0x2840b8.draw(_0x4084b0);
          _0x653608.draw(_0x4084b0);
          _0x653608.saveTexture(_0x6b188a + '_empty');
          var _0xb443d7 = 0x0;
          for (_0xb443d7 = 0x0; _0xb443d7 < _0x138f0c.length && _0xb443d7 < this.MinAmountOfPowerUps; _0xb443d7++) {
            var _0x929248 = _0x14b553[_0x138f0c[_0xb443d7]][0x0];
            _0x2840b8.drawFrame(_0x929248.texture, _0x929248.frameName, 0x8, 0x20 * _0xb443d7);
          }
          for (let _0x22fb25 = 0x0; _0x22fb25 < _0x3ae07d; _0x22fb25++) {
            _0x2840b8.drawFrame("items", 'MoneyBagGreen.png', 0x8, 0x20 * (_0xb443d7 + _0x22fb25));
          }
          _0x2840b8.saveTexture(_0x6b188a);
        }
        static ["RotateVectorByDegrees"](_0x44d595, _0x21c43d, _0x1703ff) {
          var _0x29275d = Phaser.Math.DegToRad(_0x21c43d);
          _0x1703ff.x = _0x44d595.x * Math.cos(_0x29275d) - _0x44d595.y * Math.sin(_0x29275d);
          _0x1703ff.y = _0x44d595.x * Math.sin(_0x29275d) + _0x44d595.y * Math.cos(_0x29275d);
        }
        static ["MakeRectangleMask"](_0x551d98, _0x9c2722, _0x27a1ee, _0x4da1b6, _0x29c65d) {
          const _0x1e8845 = new Phaser.GameObjects.Graphics(_0x551d98, {
            'x': 0x0,
            'y': 0x0
          });
          _0x1e8845.fillRect(_0x9c2722, _0x27a1ee, _0x4da1b6, _0x29c65d);
          return _0x1e8845.createGeometryMask();
        }
      }
      _0x5bf9e7.MinAmountOfPowerUps = 0xc;
      const _0x492758 = class {
        constructor(_0x38c37d, _0x121cf6, _0x508309, _0x373198, _0x5bf9a0 = 0xd) {
          this.isPlaying = false;
          this.scene = _0x38c37d;
          this.x = _0x121cf6;
          this.y = _0x508309;
          this.prizeName = _0x373198;
          this.bg = this.scene.add.sprite(_0x121cf6, _0x508309, "vfx", "PrizeBG.png").setScale(0x0).setDepth(_0x5bf9a0).setAlpha(0.8).setVisible(false);
          this.star1 = this.scene.add.sprite(_0x121cf6, _0x508309, "vfx", "HitStarWhite2.png").setBlendMode(_0x2d874d.BlendModes.ADD).setScale(0x6).setAlpha(0.7).setDepth(_0x5bf9a0).setVisible(false);
          this.star2 = this.scene.add.sprite(_0x121cf6, _0x508309, "vfx", "HitStarWhite2.png").setBlendMode(_0x2d874d.BlendModes.ADD).setScale(0x8).setAlpha(0.7).setAngle(0x2d).setDepth(_0x5bf9a0).setVisible(false);
          this.ring = this.scene.add.sprite(_0x121cf6, _0x508309, "vfx", 'sPFX_ring_64.png').setBlendMode(_0x2d874d.BlendModes.ADD).setScale(0x8).setAlpha(0.5).setDepth(_0x5bf9a0).setVisible(false);
          this.prize = this.scene.add.sprite(_0x121cf6, _0x508309, 'items', _0x373198).setScale(0x0).setDepth(_0x5bf9a0).setVisible(false);
        }
        ['Play']() {
          if (!this.isPlaying) {
            this.isPlaying = true;
            this.bg.setVisible(true);
            this.prize.setVisible(true);
            this.ring.setVisible(true);
            this.star2.setVisible(true);
            this.star1.setVisible(true);
            this.scene.tweens.add({
              'duration': 0x2710,
              'targets': [this.star1],
              'angle': 0x168,
              'repeat': -0x1
            });
            this.scene.tweens.add({
              'duration': 0x1b58,
              'targets': [this.star2],
              'angle': 0x195,
              'repeat': -0x1
            });
            this.scene.tweens.add({
              'duration': 0x32,
              'targets': [this.bg, this.prize],
              'scale': 0x2
            });
            this.scene.tweens.add({
              'duration': 0x64,
              'targets': this.ring,
              'scale': 0x0
            });
            this.scene.tweens.add({
              'duration': 0x32,
              'targets': [this.star1, this.star2],
              'scale': 0x2,
              'onComplete': () => {
                this.star1.setFrame("HitStar2.png");
                this.star2.setFrame("HitStar2.png");
                this.star1.setDepth(this.star1.depth - 0x1);
                this.star2.setDepth(this.star2.depth - 0x1);
                this.scene.tweens.add({
                  'duration': 0x1f4,
                  'targets': [this.star1],
                  'scale': 0x4,
                  'yoyo': true,
                  'repeat': -0x1
                });
                this.scene.tweens.add({
                  'duration': 0x258,
                  'targets': [this.star2],
                  'scale': 0x4,
                  'yoyo': true,
                  'repeat': -0x1
                });
              }
            });
          }
        }
        ["Hide"](_0x249fd1 = this.x, _0x4400ab = this.y) {
          this.scene.tweens.add({
            'duration': 0x96,
            'targets': [this.bg, this.prize, this.star1, this.star2],
            'scale': 0x0,
            'alpha': 0x0,
            'x': _0x249fd1,
            'y': _0x4400ab,
            'ease': 'Sine.easeInOut'
          });
        }
      };
      class _0x2fa5b7 {
        constructor() {
          this.color = 0xff;
          this.prizeType = _0x2a9e31.POWERUP;
          this.alpha = 0.5;
          this.textureName = 'texPowerUps';
        }
      }
      class _0x3fe872 {
        constructor(_0x3428b4, _0x5327dd, _0x164db9, _0x5c2cb8, _0x2b62e8) {
          this.start = new Phaser.Math.Vector2(0x0, 0x0);
          this.end = new Phaser.Math.Vector2(0x0, 0x0);
          this.scene = _0x3428b4;
          this.reelConfig = _0x5327dd;
          this.start = _0x164db9;
          this.end = _0x5c2cb8;
          this.mask = _0x2b62e8;
          if (_0x5327dd.prizeType === _0x2a9e31.POWERUP) {
            _0x5bf9e7.MakeTexture_PowerUps(_0x3428b4, _0x5327dd.textureName, _0x5327dd.color, _0x5327dd.alpha);
          } else if (_0x5327dd.prizeType === _0x2a9e31.EXISTING_WEAPON || _0x5327dd.prizeType === _0x2a9e31.EXISTING_ANY) {
            _0x5bf9e7.MakeTexture_ExistingWeapons(_0x3428b4, _0x5327dd.textureName, _0x5327dd.color, _0x5327dd.alpha);
          } else if (_0x5327dd.prizeType === _0x2a9e31.FIXED || _0x5327dd.prizeType === _0x2a9e31.EVOLUTION) {
            _0x5bf9e7.MakeTexture_Any(_0x3428b4, _0x5327dd.textureName, _0x5327dd.color, _0x5327dd.alpha);
          } else {
            _0x5bf9e7.MakeTexture_ExistingWeapons(_0x3428b4, _0x5327dd.textureName, _0x5327dd.color, _0x5327dd.alpha);
          }
          var _0x1550f1 = [0x0, 0x0, this.end.x, this.end.y];
          var _0x86d290 = new Phaser.Curves.Line(_0x1550f1);
          this.sprite1 = this.AddSpriteFollower(_0x86d290, this.start.x, this.start.y, _0x5327dd.textureName);
          this.sprite2 = this.AddSpriteFollower(_0x86d290, this.start.x, this.start.y, _0x5327dd.textureName);
        }
        ['AddSpriteFollower'](_0x43b48d, _0x32168d, _0x44b1a1, _0x520190) {
          return this.scene.add.follower(_0x43b48d, _0x32168d, _0x44b1a1, _0x520190).setOrigin(0.5, 0x0).setScale(0x2).setMask(this.mask);
        }
        ["Play"]() {
          this.sprite1.startFollow(_0x3fe872.FollowConfig_Reel_Standard1);
          this.sprite2.startFollow(_0x3fe872.FollowConfig_Reel_Standard2);
        }
        ['Stop']() {
          this.sprite1.setTexture(this.reelConfig.textureName + "_empty");
          this.sprite2.setTexture(this.reelConfig.textureName + "_empty");
          this.sprite1.stopFollow();
          this.sprite2.stopFollow();
          this.sprite1.setTintFill(0xffffff);
          this.sprite2.setTintFill(0xffffff);
          this.sprite1.setBlendMode(_0x2d874d.BlendModes.ADD);
          this.sprite2.setBlendMode(_0x2d874d.BlendModes.ADD);
          this.scene.time.addEvent({
            'delay': 0x32,
            'callback': () => {
              this.sprite1.clearTint();
              this.sprite2.clearTint();
              this.sprite1.setBlendMode(_0x2d874d.BlendModes.NORMAL);
              this.sprite2.setBlendMode(_0x2d874d.BlendModes.NORMAL);
            }
          });
        }
        ["Hide"]() {
          this.scene.tweens.add({
            'targets': [this.sprite1, this.sprite2],
            'alpha': 0x0,
            'scaleX': 0x0,
            'duration': 0x12c
          });
        }
        ['SetDepth'](_0x217550) {
          this.sprite1.setDepth(_0x217550);
          this.sprite2.setDepth(_0x217550);
        }
        ['Nuke']() {
          this.scene.children.remove(this.sprite1);
          this.scene.children.remove(this.sprite2);
          this.sprite1.destroy();
          this.sprite2.destroy();
          this.mask.destroy();
        }
      }
      _0x3fe872.FollowConfig_Reel_Standard1 = {
        'duration': 0x7d0,
        'positionOnPath': false,
        'repeat': -0x1,
        'rotateToPath': true,
        'rotationOffset': 0x5a,
        'ease': "Linear"
      };
      _0x3fe872.FollowConfig_Reel_Standard2 = {
        'duration': 0x7d0,
        'positionOnPath': false,
        'repeat': -0x1,
        'rotateToPath': true,
        'rotationOffset': 0x5a,
        'ease': "Linear",
        'delay': 0x3e8
      };
      class _0x11e68f {}
      class _0x1caabc extends Phaser.GameObjects.Container {
        constructor(_0x28e3de, _0x44c9f3, _0x3f5e82) {
          super(_0x28e3de, _0x44c9f3, _0x3f5e82);
          this.weapon = _0x2a5ca3.AMOUNT;
          this.item = _0x5b2d7b.COIN;
          this.character = _0x2fbe76.MORTACCIO;
          this.achievement = _0x340ca6.Defeat5000Enemies;
          this.setScale(_0x34bb1a.PixelScale);
          var _0x18423a = {
            'x': 0x0,
            'y': 0x0,
            'width': 491.52,
            'height': 0x68
          };
          this.Background = new _0x35cd95.NineSlice(this.scene, _0x564740.PanelBackground, _0x18423a);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x34, 0x34, 'UI', 'frameB.png').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myIcon = new Phaser.GameObjects.Image(this.scene, 0x34, 0x34, 'items', '').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myName = new Phaser.GameObjects.Text(this.scene, 245.76, 0x6, "Name", {
            'color': 'yellow'
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0);
          this.myNextLevel = new Phaser.GameObjects.Text(this.scene, 0x34, 0x6, "New!", {}).setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0).setVisible(false);
          this.myCounter = new Phaser.GameObjects.Text(this.scene, 485.52, 0x6, '', {
            'color': 'black'
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0x1, 0x0);
          this.myDesc = new Phaser.GameObjects.Text(this.scene, 122.88, 0x20, "Description", {}).setScale(_0x34bb1a.PixelScale).setWordWrapWidth(368.64);
          this.myTips = new Phaser.GameObjects.Text(this.scene, 122.88, 0x40, 'Tips', {
            'color': "orange"
          }).setScale(_0x34bb1a.PixelScale).setWordWrapWidth(368.64);
          this.add([this.Background, this.myIconBG, this.myIcon, this.myNextLevel, this.myName, this.myDesc, this.myTips, this.myCounter]);
          this.ShowTween = this.scene.tweens.add({
            'targets': this,
            'scaleY': _0x34bb1a.PixelScale,
            'duration': 0x12c,
            'paused': true
          });
          this.HideTween = this.scene.tweens.add({
            'targets': this,
            'scaleY': 0x0,
            'duration': 0x12c,
            'paused': true
          });
          this.scaleY = 0x0;
          _0x512871.CalculateAndSetContainerSize(this);
        }
        ["Show"]() {
          this.ShowTween.resume();
          this.ShowTween.restart();
        }
        ["Hide"]() {
          this.HideTween.resume();
          this.HideTween.restart();
        }
        ["AssignWeapon"](_0x21d407, _0x54001d = '') {
          var _0x5ac55a = _0x14b553[_0x21d407][0x0];
          this.myCounter.setText(_0x54001d);
          this.Background.setTint(_0x5ac55a.isEvolution ? 0xffff00 : 0xffffff);
          this.myName.text = _0x5ac55a.name;
          this.myIcon.setTexture(_0x5ac55a.texture, _0x5ac55a.frameName);
          this.myDesc.setText(_0x5ac55a.description);
          this.myTips.setText(_0x5ac55a.tips);
          this.myIconBG.setVisible(true);
        }
        ["AssignItem"](_0x100cb8, _0x31bbfb = '') {
          var _0x455f24 = _0x34b109[_0x100cb8];
          this.myCounter.setText(_0x31bbfb);
          this.Background.setTint(0xffffff);
          this.myName.text = _0x455f24.name;
          this.myIcon.setTexture(_0x455f24.texture, _0x455f24.frameName);
          this.myDesc.setText(_0x455f24.description);
          this.myTips.setText(_0x455f24.tips);
          this.myIconBG.setVisible(true);
        }
        ["AssignCharacter"](_0x2910b2, _0x4deb3b = '') {
          var _0x51e4b3 = _0x4774f8[_0x2910b2];
          this.myCounter.setText(_0x4deb3b);
          this.Background.setTint(0xffffff);
          this.myName.text = _0x51e4b3.charName;
          this.myIcon.setTexture("characters", _0x51e4b3.spriteName);
          this.myDesc.setText(_0x51e4b3.description);
          this.myTips.setText(_0x51e4b3.tips);
          this.myIconBG.setVisible(false);
        }
        ['AssignAchievement'](_0x534506, _0x2d22ef = '') {
          var _0x176840 = _0x3fbaa9[_0x534506];
          this.myCounter.setText(_0x2d22ef);
          this.Background.setTint(_0x176840.achieved ? 0xffffff : 0x888888);
          this.myName.text = _0x176840.achieved ? "Obtained" : '';
          this.myDesc.setText(_0x176840.description);
          if (_0x176840.weaponToUnlock) {
            var _0x2c8fa4 = _0x14b553[_0x176840.weaponToUnlock][0x0];
            this.myIcon.setTexture(_0x2c8fa4.texture, _0x2c8fa4.frameName);
            this.myTips.setText((_0x176840.achieved ? "Unlocked: " : "Unlocks: ") + " " + _0x2c8fa4.name);
            this.myIconBG.setVisible(true);
          }
          if (_0x176840.characterToUnlock) {
            var _0x3f8b9f = _0x4774f8[_0x176840.characterToUnlock][0x0];
            this.myIcon.setTexture("characters", _0x3f8b9f.spriteName);
            this.myTips.setText((_0x176840.achieved ? "Unlocked: " : "Unlocks: ") + " " + _0x3f8b9f.charName);
            this.myIconBG.setVisible(false);
          }
          if (_0x176840.stageToUnlock) {
            let _0x5be701 = _0x26e87a[_0x176840.stageToUnlock][0x0];
            let _0x455091 = _0x5be701.frameName ? _0x5be701.frameName : "QuestionMark.png";
            this.myIcon.setTexture('UI', _0x455091);
            this.myTips.setText((_0x176840.achieved ? "Unlocked: " : "Unlocks: ") + " " + _0x5be701.stageName);
            this.myIconBG.setVisible(false);
          }
          if (_0x176840.hyperToUnlock) {
            let _0x47a46d = _0x26e87a[_0x176840.hyperToUnlock][0x0];
            let _0x53ef4b = _0x47a46d.frameName ? _0x47a46d.frameName : "QuestionMark.png";
            this.myIcon.setTexture('UI', _0x53ef4b);
            this.myTips.setText((_0x176840.achieved ? "Unlocked: " : "Unlocks: ") + " Hyper " + _0x47a46d.stageName);
            this.myIconBG.setVisible(false);
          }
        }
        ["AssignData"](_0x557c33, _0x23fa23, _0x2d1f83 = '', _0x4ddb8e = 0x0) {
          var _0x67d17b;
          switch (_0x23fa23) {
            case "Weapon":
              _0x67d17b = _0x14b553[_0x557c33][0x0];
              break;
            case "Character":
              _0x67d17b = _0x4774f8[_0x557c33][0x0];
              break;
            case "Item":
              _0x67d17b = _0x34b109[_0x557c33];
              break;
            case "Achievement":
              _0x67d17b = _0x3fbaa9[_0x557c33];
              break;
            case "Stage":
              _0x67d17b = _0x26e87a[_0x557c33];
          }
          if (_0x67d17b) {
            this.Background.setTint("Weapon" === _0x23fa23 && _0x67d17b.isEvolution ? 0xffff00 : 0xffffff);
            this.myIconBG.setVisible("Character" !== _0x23fa23);
            this.myName.text = _0x67d17b.name;
            this.myIcon.setTexture(_0x67d17b.texture, _0x67d17b.frameName);
            this.myDesc.setText(_0x67d17b.description);
            this.myTips.setText(_0x67d17b.tips);
            this.myTips.setVisible(_0x4ddb8e <= 0x0);
            this.myCounter.setText(_0x2d1f83);
            this.myNextLevel.setVisible('Weapon' === _0x23fa23);
            this.myNextLevel.text = _0x4ddb8e > 0x0 ? "level: " + (0x1 + _0x4ddb8e).toString() : "New!";
            this.myNextLevel.setTint(_0x4ddb8e > 0x0 ? 0xffffff : 0xffff00);
            if ('Weapon' === _0x23fa23 && _0x4ddb8e > 0x0) {
              const _0xbf596 = _0x67d17b.isPowerUp;
              _0x67d17b = _0x14b553[_0x557c33][_0x4ddb8e];
              const _0x70fc56 = _0x579459.ParseLevelUpInfo(_0x67d17b, _0xbf596);
              this.myDesc.setText(_0x70fc56);
            }
            if ("Character" === _0x23fa23) {
              this.myName.text = _0x67d17b.charName;
              this.myIcon.setTexture("characters", _0x67d17b.spriteName);
            }
            if ('Achievement' === _0x23fa23) {
              this.myNextLevel.setVisible(false);
              if (_0x67d17b.weaponToUnlock) {
                var _0x7b04b5 = _0x14b553[_0x67d17b.weaponToUnlock][0x0];
                this.myName.text = "New Achievement!";
                this.myIcon.setTexture(_0x7b04b5.texture, _0x7b04b5.frameName);
                this.myTips.setText("Unlocked: " + _0x7b04b5.name);
              }
              if (_0x67d17b.characterToUnlock) {
                var _0x2958a5 = _0x4774f8[_0x67d17b.characterToUnlock][0x0];
                this.myName.text = "New Achievement!";
                this.myIcon.setTexture("characters", _0x2958a5.spriteName);
                this.myTips.setText("Unlocked: " + _0x2958a5.charName);
                this.myIconBG.setVisible(false);
              }
              if (_0x67d17b.stageToUnlock) {
                let _0x2a9a55 = _0x26e87a[_0x67d17b.stageToUnlock][0x0];
                this.myName.text = "New Achievement!";
                let _0x4ecaf5 = _0x2a9a55.frameName ? _0x2a9a55.frameName : "QuestionMark.png";
                this.myIcon.setTexture('UI', _0x4ecaf5);
                this.myTips.setText("Unlocked: " + _0x2a9a55.stageName);
                this.myIconBG.setVisible(false);
              }
              if (_0x67d17b.hyperToUnlock) {
                let _0x536d9a = _0x26e87a[_0x67d17b.hyperToUnlock][0x0];
                this.myName.text = "New Achievement!";
                let _0x157535 = _0x536d9a.frameName ? _0x536d9a.frameName : "QuestionMark.png";
                this.myIcon.setTexture('UI', _0x157535);
                this.myTips.setText("Unlocked: Hyper " + _0x536d9a.stageName);
                this.myIconBG.setVisible(false);
              }
            }
          }
        }
        ["AssignStage"](_0x9d35a2) {
          var _0x56691d = _0x26e87a[_0x9d35a2];
          this.myName.text = _0x56691d.name;
          this.myDesc.setText(_0x56691d.description);
          this.myIcon.setVisible(false);
          this.myIconBG.setVisible(false);
        }
      }
      class _0x1bec13 {
        constructor(_0x4b9697, _0x25386f) {
          this.prizeType = _0x4b9697;
          this.prizeEnum = _0x25386f;
        }
      }
      class _0x5dc8cd extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.UI_treasureScene
          });
          this.TopLeft = new Phaser.Math.Vector2(0x0, 0x0);
          this.BottomRight = new Phaser.Math.Vector2(0x0, 0x0);
          this.StripEnd = new Phaser.Math.Vector2(0x0, 0x0);
          this.CoinsAward = 0x64;
          this.CoinsTickerDisplay = 0x64;
          this.prizes = new Array();
          this.AccumulatedWeaponPrizes = new Array();
          this.AccumulatedItemPrizes = new Array();
          this.AccumulatedCoinPrize = 0x0;
          this.ribbons = new Array();
          this.ribbons2 = new Array();
          this.prizeIcons = new Array();
          this.reels = new Array();
          this.updateTrail = false;
          this.updateTrail2 = false;
          this.FollowConfig_Reel_Standard1 = {
            'duration': 0x7d0,
            'positionOnPath': false,
            'repeat': -0x1,
            'rotateToPath': true,
            'rotationOffset': 0x5a,
            'ease': "Linear"
          };
          this.FollowConfig_Reel_Standard2 = {
            'duration': 0x7d0,
            'positionOnPath': false,
            'repeat': -0x1,
            'rotateToPath': true,
            'rotationOffset': 0x5a,
            'ease': "Linear",
            'delay': 0x3e8
          };
          this.TextureNames = new Array();
        }
        ['preload']() {
          _0x1d0e6c.ApplyMenuResolution();
        }
        ["create"]() {
          this.bubbles = new class {
            constructor(_0x161ad8) {
              this.count = 0x1;
              this.enabled = false;
              this.scene = _0x161ad8;
              this.background = this.scene.add.image(0x0, 0x0, 'vfx', 'Gradient2.png').setScale(this.scene.renderer.width / 0x20, this.scene.renderer.height / 0x20).setTint(0xffff00).setScrollFactor(0x0).setAlpha(0x0).setOrigin(0x0);
              this.background2 = this.scene.add.image(0x0, 0x0, 'vfx', "Gradient2.png").setScale(this.scene.renderer.width / 0x20, this.scene.renderer.height / 0x20).setTint(0xffffff).setScrollFactor(0x0).setAlpha(0x0).setOrigin(0x0).setBlendMode(_0x2d874d.BlendModes.ADD);
              this.graphics = this.scene.add.graphics().setBlendMode(_0x2d874d.BlendModes.ADD).setScrollFactor(0x0);
              this.shapes = new Array(0xf).fill(null).map(() => new Phaser.Geom.Circle(Phaser.Math.Between(0x0, this.scene.renderer.width), Phaser.Math.Between(0x0, this.scene.renderer.height), Phaser.Math.Between(12.5, 37.5)));
              this.rect = Phaser.Geom.Rectangle.Clone(this.scene.cameras.main);
            }
            ["Update"]() {
              if (this.enabled) {
                this.count += 0.001;
                this.shapes.forEach((_0x409d93, _0x36189a) => {
                  _0x409d93.y -= 0xa * this.count + 0x1 * _0x36189a;
                });
                Phaser.Actions.WrapInRectangle(this.shapes, this.rect, 0x48);
                this.Draw();
              }
            }
            ['Draw']() {
              this.graphics.clear();
              this.shapes.forEach((_0x1b0b0b, _0x1ce69e) => {
                this.graphics.fillStyle(this.Color(_0x1ce69e), 0.5).fillCircleShape(_0x1b0b0b).setScale(0x1, 1.3);
              }, this);
            }
            ["Color"](_0x451ab1) {
              return _0x451ab1 % 0xf * 0x111100 + _0x451ab1 % 0x5 * 0x33;
            }
            ["Show"](_0x4c8871 = 0x1770, _0x4c13ea = 0xffff00) {
              this.enabled = true;
              this.background.setTint(_0x4c13ea);
              this.scene.tweens.add({
                'targets': [this.graphics],
                'alpha': 0x1,
                'duration': 0x12c
              });
              this.scene.tweens.add({
                'targets': [this.background, this.background2],
                'alpha': 0x1,
                'duration': _0x4c8871
              });
            }
            ['Hide'](_0x54285d = 0x3e8) {
              this.scene.tweens.add({
                'targets': [this.graphics],
                'alpha': 0x0,
                'duration': 0x12c
              });
              this.scene.tweens.add({
                'targets': [this.background, this.background2],
                'alpha': 0x0,
                'duration': _0x54285d,
                'onComplete': () => {
                  this.enabled = false;
                }
              });
            }
          }(this);
          this.bubbles.graphics.setAlpha(0x0);
          this.CoinsAward = 0x64;
          this.prizes = new Array();
          this.AccumulatedWeaponPrizes = new Array();
          this.ribbons = new Array();
          this.prizeIcons = new Array();
          this.reels = new Array();
          this.AccumulatedCoinPrize = 0x0;
          this.updateTrail = false;
          this.updateTrail2 = false;
          this._coinRT = new Array();
          this._coinSprites = new Array();
          const _0x3f442e = [0x1e, 0x14, 0x18, 0xe];
          for (let _0x2ec1c1 = 0x0; _0x2ec1c1 < 0x4; _0x2ec1c1++) {
            var _0x406aad = this.make.renderTexture({
              'x': -0x186a0,
              'y': -0x186a0,
              'width': 0x10,
              'height': 0x10
            });
            _0x406aad.saveTexture("coinRT" + _0x2ec1c1);
            this._coinRT.push(_0x406aad);
          }
          var _0xc1c715 = this.anims.generateFrameNames("items", {
            'start': 0x1,
            'end': 0x4,
            'zeroPad': 0x2,
            'prefix': "coin-spin-gold_",
            'suffix': '.png'
          });
          var _0x3fae47 = this.anims.generateFrameNames("items", {
            'start': 0x1,
            'end': 0x4,
            'zeroPad': 0x2,
            'prefix': "coin-spin-silver_",
            'suffix': ".png"
          });
          for (let _0x3903a4 = 0x0; _0x3903a4 < 0x4; _0x3903a4++) {
            var _0x2ee95f = this.add.sprite(-0x186a0, -0x186a0, "items", '').setOrigin(0x0);
            _0x2ee95f.anims.create({
              'key': "spin",
              'frames': _0x3903a4 < 0x2 ? _0xc1c715 : _0x3fae47,
              'frameRate': _0x3f442e[_0x3903a4],
              'repeat': -0x1
            });
            _0x2ee95f.anims.play("spin");
            this._coinSprites.push(_0x2ee95f);
          }
          const _0x3a58b4 = this.anims.generateFrameNames("vfx", {
            'start': 0x1,
            'end': 0x6,
            'zeroPad': 0x0,
            'prefix': "Burst",
            'suffix': ".png"
          });
          const _0x32367b = this.anims.generateFrameNames('UI', {
            'start': 0x1,
            'end': 0x8,
            'zeroPad': 0x2,
            'prefix': "TreasureIdle_",
            'suffix': ".png"
          });
          const _0x35ca7f = this.anims.generateFrameNames('UI', {
            'start': 0x1,
            'end': 0x8,
            'zeroPad': 0x2,
            'prefix': "TreasureOpen_",
            'suffix': ".png"
          });
          const _0x4facbe = this.anims.generateFrameNames('UI', {
            'start': 0x1,
            'end': 0x8,
            'zeroPad': 0x2,
            'prefix': 'TreasureOpenFront_',
            'suffix': ".png"
          });
          this.OnEnterAnimation = this.add.sprite(0.5 * this.renderer.width, 0.5 * this.renderer.width, "vfx", "Burst1.png");
          this.OnEnterAnimation.anims.create({
            'key': "enter",
            'frames': _0x3a58b4,
            'frameRate': 0x1e,
            'repeat': 0x0
          });
          this.OnEnterAnimation.setVisible(true).setScale(0x8).setDepth(0x3e8).setTint(0xffff00).setBlendMode(_0x2d874d.BlendModes.ADD);
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': 204.8,
            'height': 273.2
          });
          this.background.setPosition(0.5 * this.renderer.width, 0.5 * this.renderer.height);
          this.background.setOrigin(0.5);
          this.background.setScale(0x2 * _0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.backgroundOverlay = new _0x35cd95.NineSlice(this, _0x564740.PanelBackgroundAdd, {
            'x': 0x0,
            'y': 0x0,
            'width': 204.8,
            'height': 273.2
          });
          this.backgroundOverlay.setPosition(0.5 * this.renderer.width, 0.5 * this.renderer.height);
          this.backgroundOverlay.setOrigin(0.5);
          this.backgroundOverlay.setScale(0x2 * _0x34bb1a.PixelScale);
          this.backgroundOverlay.setAlpha(0x0);
          this.backgroundOverlay.setBlendMode(_0x2d874d.BlendModes.ADD);
          this.add.existing(this.backgroundOverlay);
          this.TopLeft.x = this.background.x - 0.5 * this.background.width * 0x2;
          this.TopLeft.y = this.background.y - 0.5 * this.background.height * 0x2;
          this.BottomRight.x = this.background.x + 0.5 * this.background.width * 0x2;
          this.BottomRight.y = this.background.y + 0.5 * this.background.height * 0x2;
          this.Chest = this.add.sprite(0.5 * this.renderer.width, this.BottomRight.y - 0x6e, 'UI', "TreasureIdle_01.png").setOrigin(0.5, 0x1).setScale(0x5);
          this.ChestFront = this.add.sprite(this.Chest.x, this.Chest.y, 'UI', 'TreasureOpenFront_01.png').setOrigin(0.5, 0x1).setScale(0x5);
          this.Chest.anims.create({
            'key': "idle",
            'frames': _0x32367b,
            'frameRate': 0xf,
            'repeat': 0x0
          });
          this.Chest.anims.create({
            'key': "open",
            'frames': _0x35ca7f,
            'frameRate': 0x1e,
            'repeat': 0x0
          });
          this.ChestFront.anims.create({
            'key': "open",
            'frames': _0x4facbe,
            'frameRate': 0x1e,
            'repeat': 0x0
          });
          this.Chest.anims.play("idle");
          this.openButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': 0.5 * this.renderer.width,
            'y': this.BottomRight.y - 0x40,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x0).setOrigin(0.5, 0.5).setAngle(0xb4);
          this.add.existing(this.openButton);
          this.header = new Phaser.GameObjects.Text(this, 0.5 * this.renderer.width, this.TopLeft.y + 0x2d, "Treasure Found!", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.openText = new Phaser.GameObjects.Text(this, this.openButton.x, this.openButton.y, 'OPEN', {
            'align': "center"
          }).setScale(0x0).setOrigin(0.5).setAngle(0xb4);
          this.tickerCounter = new Phaser.GameObjects.Text(this, this.openButton.x, this.openButton.y, "999.99", {
            'align': "center"
          }).setScale(0x0).setOrigin(0.5).setVisible(false);
          this.counterRing = this.add.sprite(this.tickerCounter.x, this.tickerCounter.y, "vfx", "sPFX_ring_64.png").setBlendMode(_0x2d874d.BlendModes.ADD).setScale(0x8).setAlpha(0.5).setDepth(0xc).setVisible(false);
          this.add.existing(this.header);
          this.add.existing(this.openText);
          this.add.existing(this.tickerCounter);
          this.background.setScale(-0.2, -0.1);
          this.background.setAngle(0xb4);
          this.OnEnterTween = this.tweens.add({
            'targets': this.background,
            'scale': 0x2 * _0x34bb1a.PixelScale,
            'angle': 0x0,
            'duration': 0x96,
            'ease': "Linear",
            'yoyo': false
          });
          this.OnEnterTween.restart();
          if (_0x1d0e6c.Core.PlayerOptions.FlashingVFXEnabled) {
            this.OnEnterAnimation.play('enter');
          } else {
            this.OnEnterAnimation.setVisible(false);
          }
          this.time.addEvent({
            'delay': 0x12c,
            'callback': this.enableInput,
            'callbackScope': this,
            'loop': false
          });
          this.MakeMasks();
          this.IdleTimer = this.time.addEvent({
            'delay': 0xbb8,
            'loop': true,
            'callback': () => this.Chest.anims.play("idle")
          });
          switch (_0x1d0e6c.Core.CurrentTreasureLevel) {
            default:
            case 0x1:
              this.SetupTreasureLevel1();
              break;
            case 0x2:
              this.SetupTreasureLevel2();
              break;
            case 0x3:
              this.SetupTreasureLevel3();
          }
          this.LayerUp();
          _0x1d0e6c.Sound.PlaySound(_0x52c10f.TreasureFound, {
            'volume': 1.1
          });
          this.MakeUIGrid();
        }
        ["MakeUIGrid"]() {
          let _0x52c0d8 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x52c0d8.MakeUIGrid(0x1, 0x6, false);
          _0x52c0d8.UI_grid.SetContents(0x0, 0x0, this.openButton);
          _0x52c0d8.ToggleCursorsVisibility(false);
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x52c0d8);
          _0x52c0d8.UI_grid.Deselect();
          _0x52c0d8.OnCancelCallback = () => {};
        }
        ["MakePrizePairFromAvailablePowerUps"](_0x21adaa, _0x5c2a3a) {
          var _0x2c645b;
          var _0x190e33 = _0x21adaa;
          if (_0x21adaa === _0x2a9e31.RANDOM) {
            _0x21adaa = Phaser.Math.RND.pick([_0x2a9e31.POWERUP, _0x2a9e31.EXISTING_ANY]);
          }
          switch (_0x21adaa) {
            default:
            case _0x2a9e31.FILLER:
              _0x2c645b = _0x5b2d7b.COINBAG2;
              _0x190e33 = _0x2a9e31.FILLER;
              break;
            case _0x2a9e31.POWERUP:
              _0x2c645b = _0x1d0e6c.Core.LevelUpFactory.PullRemainingPowerUp();
              _0x190e33 = _0x2a9e31.POWERUP;
              if (undefined === _0x2c645b) {
                _0x2c645b = _0x5b2d7b.COINBAG2;
                _0x190e33 = _0x2a9e31.FILLER;
              }
              break;
            case _0x2a9e31.EXISTING_WEAPON:
              _0x2c645b = _0x1d0e6c.Core.LevelUpFactory.PullExistingRemainingWeapon(false);
              _0x190e33 = _0x2a9e31.EXISTING_WEAPON;
              if (undefined === _0x2c645b) {
                _0x2c645b = _0x5b2d7b.COINBAG2;
                _0x190e33 = _0x2a9e31.FILLER;
              }
              break;
            case _0x2a9e31.EXISTING_ANY:
              _0x2c645b = _0x1d0e6c.Core.LevelUpFactory.PullExistingRemainingWeapon();
              _0x190e33 = _0x2a9e31.EXISTING_ANY;
              if (undefined === _0x2c645b) {
                _0x2c645b = _0x5b2d7b.COINBAG2;
                _0x190e33 = _0x2a9e31.FILLER;
              }
              break;
            case _0x2a9e31.EVOLUTION:
              _0x2c645b = _0x1d0e6c.Core.LevelUpFactory.PullEvolution();
              _0x190e33 = _0x2a9e31.EVOLUTION;
              if (undefined === _0x2c645b) {
                _0x2c645b = _0x1d0e6c.Core.LevelUpFactory.PullExistingRemainingWeapon();
                _0x190e33 = _0x2a9e31.EXISTING_ANY;
                if (undefined === _0x2c645b) {
                  _0x2c645b = _0x5b2d7b.COINBAG2;
                  _0x190e33 = _0x2a9e31.FILLER;
                }
              }
              break;
            case _0x2a9e31.FIXED:
              _0x2c645b = _0x1d0e6c.Core.LevelUpFactory.PullExisting(_0x5c2a3a);
              _0x190e33 = _0x2a9e31.FIXED;
              if (undefined === _0x2c645b) {
                if (_0x14b553[_0x5c2a3a][0x0].isEvolution && _0x1d0e6c.Core.LevelUpFactory.GetSpecialWeapon(_0x5c2a3a)) {
                  _0x2c645b = _0x5c2a3a;
                  _0x190e33 = _0x2a9e31.FIXED;
                }
                if (undefined === _0x2c645b) {
                  _0x2c645b = _0x1d0e6c.Core.LevelUpFactory.PullExistingRemainingWeapon();
                  _0x190e33 = _0x2a9e31.EXISTING_ANY;
                  if (undefined === _0x2c645b) {
                    _0x2c645b = _0x5b2d7b.COINBAG2;
                    _0x190e33 = _0x2a9e31.FILLER;
                  }
                }
              }
          }
          if (_0x190e33 != _0x2a9e31.FILLER) {
            this.AccumulatedWeaponPrizes.push(_0x2c645b);
            _0x1d0e6c.Core.LevelUpFactory.RemoveFromStore(_0x2c645b);
          } else if (_0x190e33 === _0x2a9e31.FILLER) {
            this.AccumulatedCoinPrize += _0x34b109[_0x5b2d7b.COINBAG2].value;
          }
          return new _0x1bec13(_0x190e33, _0x2c645b);
        }
        ["OnSceneOver"]() {
          for (let _0x485803 = 0x0; _0x485803 < this.AccumulatedWeaponPrizes.length; _0x485803++) {
            _0x1d0e6c.Core.LevelWeaponUp(this.AccumulatedWeaponPrizes[_0x485803], false);
          }
          for (let _0x39da45 = 0x0; _0x39da45 < this.AccumulatedItemPrizes.length; _0x39da45++) {
            _0x1d0e6c.Core.MakePickup(_0x1d0e6c.Core.Player.x, _0x1d0e6c.Core.Player.y, this.AccumulatedItemPrizes[_0x39da45]);
          }
          _0x1d0e6c.Core.PlayerOptions.AddCoins(this.CoinsAward + this.AccumulatedCoinPrize);
          _0x1d0e6c.Core.MainUI.UpdateCoins();
          _0x1d0e6c.Core.Player.SetInvulForMilliSeconds(0x320);
          _0x1d0e6c.Core.SceneManager.ResumeFromTreasureScene();
        }
        ['MakePrize'](_0x31fc2f) {
          this.prizes = [];
          switch (_0x31fc2f) {
            default:
            case 0x1:
              this.CoinsAward = Math.floor(0x32 + 0x32 * Math.random());
              this.prizes = [this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x0], _0x1d0e6c.Core.CurrentFixedTreasures[0x0])];
              break;
            case 0x2:
              this.CoinsAward = Math.floor(0x64 + 0x64 * Math.random());
              this.prizes.push(this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x0], _0x1d0e6c.Core.CurrentFixedTreasures[0x0]));
              this.prizes.push(this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x1], _0x1d0e6c.Core.CurrentFixedTreasures[0x1]));
              this.prizes.push(this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x2], _0x1d0e6c.Core.CurrentFixedTreasures[0x2]));
              break;
            case 0x3:
              this.CoinsAward = Math.floor(0xc8 + 0x64 * Math.random());
              this.prizes.push(this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x0], _0x1d0e6c.Core.CurrentFixedTreasures[0x0]));
              this.prizes.push(this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x1], _0x1d0e6c.Core.CurrentFixedTreasures[0x1]));
              this.prizes.push(this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x2], _0x1d0e6c.Core.CurrentFixedTreasures[0x2]));
              this.prizes.push(this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x3], _0x1d0e6c.Core.CurrentFixedTreasures[0x3]));
              this.prizes.push(this.MakePrizePairFromAvailablePowerUps(_0x1d0e6c.Core.CurrentTreasureTypes[0x4], _0x1d0e6c.Core.CurrentFixedTreasures[0x4]));
          }
        }
        ["SetupTreasureLevel1"]() {
          this.MakePrize(0x1);
          this.MakeRibbons(0x2, this.Chest.x, this.Chest.y - 0x32, 0x5dc, -0x1);
          this.textures.removeKey("reel_1_blue_powerup");
          this.textures.removeKey('reel_1_blue_powerup_empty');
          var _0x1504fe = new _0x2fa5b7();
          _0x1504fe.textureName = "reel_1_blue_powerup";
          _0x1504fe.alpha = 0.5;
          _0x1504fe.color = 0xff;
          _0x1504fe.prizeType = this.prizes[0x0].prizeType;
          this.MakeReels([_0x1504fe]);
          this.MakeCoinsEmitter(0x1);
          this.MakeWinIcons();
          this.openButton.on('pointerdown', () => {
            _0x1d0e6c.Sound.StopSound(_0x52c10f.TreasureFound);
            this.disableInput();
            this.openButton.removeAllListeners();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.Treasure1, {
              'volume': 1.1
            });
            this.OpenChest();
            this.StartCounter(0x1d4c);
            this.HideHeader();
            this.StartCoinsEmitters(0x189c);
            this.StartRibbons();
            this.StartReels();
            this.bubbles.Show(0x1770, 0x666600);
            this.Delay(0x189c, () => {
              this.StopReels();
              this.StopRibbons();
              this.StartPrizes();
              this.bubbles.Hide();
              this.Delay(0x1770, () => {
                this.HideReels();
                this.MoveCounter();
                this.ShowOKButton();
              });
            });
          });
        }
        ["SetupTreasureLevel2"]() {
          this.MakePrize(0x2);
          this.MakeRibbons(0x6, this.Chest.x, this.Chest.y - 0x32, 0x5dc, -0x1);
          this.MakeTextureNamesFromPrizes();
          var _0x94beac = new _0x2fa5b7();
          _0x94beac.textureName = this.TextureNames[0x0];
          _0x94beac.alpha = 0.5;
          _0x94beac.color = 0x8800ff;
          _0x94beac.prizeType = this.prizes[0x0].prizeType;
          var _0x170485 = new _0x2fa5b7();
          _0x170485.textureName = this.TextureNames[0x2];
          _0x170485.alpha = 0.5;
          _0x170485.color = 0xff00ff;
          _0x170485.prizeType = this.prizes[0x1].prizeType;
          var _0x27cd57 = new _0x2fa5b7();
          _0x27cd57.textureName = this.TextureNames[0x4];
          _0x27cd57.alpha = 0.5;
          _0x27cd57.color = 0xff00ff;
          _0x27cd57.prizeType = this.prizes[0x2].prizeType;
          this.MakeReels([_0x94beac, _0x170485, _0x27cd57]);
          this.MakeCoinsEmitter(0x2);
          this.MakeWinIcons();
          this.openButton.on("pointerdown", () => {
            _0x1d0e6c.Sound.StopSound(_0x52c10f.TreasureFound);
            this.disableInput();
            this.openButton.removeAllListeners();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.Treasure2, {
              'volume': 1.1
            });
            this.OpenChest();
            this.StartCounter(0x2af8);
            this.HideHeader();
            this.StartCoinsEmitters(0x2af8);
            this.StartRibbons();
            this.StartReels([0x2]);
            this.Delay(0x50, () => this.StartReels([0x0]));
            this.Delay(0xa0, () => this.StartReels([0x1]));
            this.bubbles.Show(0x25e4, 0xcccc00);
            this.tweens.add({
              'targets': this.backgroundOverlay,
              'alpha': 0.7,
              'duration': 0x25e4
            });
            this.Delay(0x25e4, () => {
              this.tweens.add({
                'targets': this.backgroundOverlay,
                'alpha': 0x0,
                'duration': 0x3e8
              });
              this.StopReels();
              this.StopRibbons();
              this.StartPrizes();
              this.bubbles.Hide();
              this.Delay(0x1770, () => {
                this.HideReels();
                this.MoveCounter();
                this.ShowOKButton();
              });
            });
          });
        }
        ["MakeTextureNamesFromPrizes"]() {
          this.TextureNames = new Array();
          for (let _0x5f48f9 = 0x0; _0x5f48f9 < this.prizes.length; _0x5f48f9++) {
            const _0x54463a = this.prizes[_0x5f48f9];
            this.TextureNames.push("reel" + (_0x5f48f9 + 0x1) + '_' + _0x54463a.prizeType.toString() + '_' + _0x54463a.prizeEnum.toString());
            this.TextureNames.push("reel" + (_0x5f48f9 + 0x1) + '_' + _0x54463a.prizeType.toString() + '_' + _0x54463a.prizeEnum.toString() + "_empty");
          }
          for (let _0x358f2f = 0x0; _0x358f2f < this.TextureNames.length; _0x358f2f++) {
            this.textures.removeKey(this.TextureNames[_0x358f2f]);
          }
        }
        ["SetupTreasureLevel3"]() {
          this.MakePrize(0x3);
          this.MakeTextureNamesFromPrizes();
          var _0x390ce1 = new _0x2fa5b7();
          _0x390ce1.textureName = this.TextureNames[0x0];
          _0x390ce1.alpha = 0.5;
          _0x390ce1.color = 0xff0000;
          _0x390ce1.prizeType = this.prizes[0x0].prizeType;
          var _0x4c3cdf = new _0x2fa5b7();
          _0x4c3cdf.textureName = this.TextureNames[0x2];
          _0x4c3cdf.alpha = 0.5;
          _0x4c3cdf.color = 0xff8800;
          _0x4c3cdf.prizeType = this.prizes[0x1].prizeType;
          var _0x172203 = new _0x2fa5b7();
          _0x172203.textureName = this.TextureNames[0x4];
          _0x172203.alpha = 0.5;
          _0x172203.color = 0xff8800;
          _0x172203.prizeType = this.prizes[0x2].prizeType;
          var _0x5befa2 = new _0x2fa5b7();
          _0x5befa2.textureName = this.TextureNames[0x6];
          _0x5befa2.alpha = 0.5;
          _0x5befa2.color = 0xffff00;
          _0x5befa2.prizeType = this.prizes[0x3].prizeType;
          var _0x27bdc4 = new _0x2fa5b7();
          _0x27bdc4.textureName = this.TextureNames[0x8];
          _0x27bdc4.alpha = 0.5;
          _0x27bdc4.color = 0xffff00;
          _0x27bdc4.prizeType = this.prizes[0x4].prizeType;
          this.MakeReels([_0x390ce1, _0x4c3cdf, _0x172203, _0x5befa2, _0x27bdc4]);
          this.MakeRibbons(0x8, this.Chest.x, this.Chest.y - 0x32, 0x5dc, -0x1);
          this.MakeRibbonsLevel3();
          this.MakeCoinsEmitter(0x3);
          this.MakeWinIcons();
          this.openButton.on('pointerdown', () => {
            _0x1d0e6c.Sound.StopSound(_0x52c10f.TreasureFound);
            this.disableInput();
            this.openButton.removeAllListeners();
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.Treasure3, {
              'volume': 1.1
            });
            this.StartFireworks();
            this.Delay(0x640, () => {
              this.OpenChest();
              this.tweens.add({
                'targets': this.backgroundOverlay,
                'alpha': 0x1,
                'duration': 0x1e,
                'yoyo': true,
                'onComplete': () => {
                  this.tweens.add({
                    'targets': this.backgroundOverlay,
                    'alpha': 0x1,
                    'duration': 0x1af4
                  });
                }
              });
              this.StartCounter(0x364c);
              this.HideHeader();
              this.StartCoinsEmitters(0x3840);
              this.StartRibbons();
              this.StartReels([0x0, 0x1, 0x2]);
              this.bubbles.Show(0x1450, 0xffff00);
              this.Delay(0x1af4, () => {
                this.StartRibbons2();
                this.Delay(0x3e8, () => {
                  this.ribbons2[0x0].setMask(this.UpperMask);
                  this.ribbons2[0x1].setMask(this.UpperMask);
                });
              });
              this.Delay(0x1edc, () => {
                this.StartReels([0x3, 0x4]);
              });
              this.Delay(0x2f44, () => {
                this.tweens.add({
                  'targets': this.backgroundOverlay,
                  'alpha': 0x0,
                  'duration': 0x3e8
                });
                this.StopReels();
                this.StopRibbons();
                this.StartPrizes();
                this.bubbles.Hide();
                this.Delay(0x1770, () => {
                  this.HideReels();
                  this.MoveCounter();
                  this.ShowOKButton();
                });
              });
            });
          });
        }
        ["StartFireworks"]() {
          var _0x5b8602 = this.add.particles("vfx");
          this.fwEmitters = [];
          for (let _0x469e95 = 0x0; _0x469e95 < 0x5; _0x469e95++) {
            this.fwEmitters.push(_0x5b8602.createEmitter({
              'frame': Phaser.Math.RND.pick(['PfxBlue.png', "PfxPink.png", "PfxPurple.png", 'PfxBlue.png']),
              'x': this.Chest.x + (Math.random() - 0.5) * (0.5 * this.BottomRight.x),
              'y': this.Chest.y - 0xe1 - 0x96 * Math.random() / 0x2,
              'lifespan': 0xbb8,
              'rotate': {
                'min': 0x0,
                'max': 0x168
              },
              'angle': {
                'start': 0x0,
                'end': 0x168,
                'steps': 0x10
              },
              'speed': {
                'min': 0x64,
                'max': 0x96 + _0x469e95 / 0x5 * 0x12c / 0x2
              },
              'quantity': 0x20 + _0x469e95 / 0x5 * 0x20,
              'scale': {
                'start': 0x2 + _0x469e95 / 0x5 * 0x2,
                'end': 0x0
              },
              'frequency': 0x40,
              'blendMode': "ADD",
              'on': false
            }));
          }
          _0x5b8602.createGravityWell({
            'x': this.Chest.x,
            'y': this.Chest.y - 0x64,
            'power': 0x1,
            'epsilon': 0x19,
            'gravity': 0x96
          });
          const _0x229671 = [0x64, 0x190, 0x2bc, 0x3e8, 0x514];
          for (let _0x464552 = 0x0; _0x464552 < 0x5; _0x464552++) {
            this.time.addEvent({
              'delay': _0x229671[_0x464552],
              'callback': () => {
                this.tweens.add({
                  'targets': this.backgroundOverlay,
                  'alpha': 0x1,
                  'yoyo': true,
                  'duration': 0x1e,
                  'onUpdate': () => {
                    this.fwEmitters[_0x464552].start();
                  },
                  'onComplete': () => {
                    this.fwEmitters[_0x464552].stop();
                  }
                });
              }
            });
          }
        }
        ['MakeRibbonsLevel3']() {
          var _0x208de1 = [0x0, 0x0, 0x1c, -0xc, 0xb1, -0x45, 0x39, -0x69, -0x5a, -0x7c, 0x4c, -0xc7, 0x33, -0xf3];
          this.ribbons2 = new Array();
          for (let _0x4f0d6b = 0x0; _0x4f0d6b < 0x2; _0x4f0d6b++) {
            var _0x382faa = new _0x37deed(this, 0x0, 0x0, this.TextureNames[0x6], null, 0x20, false);
            this.add.existing(_0x382faa);
            var _0x21a6d0 = (this.BottomRight.y - this.TopLeft.y) / 0xf3 / 0x2;
            var _0x3a40bd = new Phaser.Curves.Spline(_0x208de1);
            for (let _0x399509 = 0x0; _0x399509 < _0x3a40bd.points.length; _0x399509++) {
              const _0x24004b = _0x3a40bd.points[_0x399509];
              _0x24004b.x *= _0x21a6d0;
              _0x24004b.y *= _0x21a6d0;
            }
            _0x3a40bd.points.push(new Phaser.Math.Vector2((this.Chest.x - this.TopLeft.x) / 0x2, (this.Chest.y - this.BottomRight.y - 0x32) / 0x2));
            if (_0x4f0d6b % 0x2 == 0x1) {
              for (let _0x17d489 = 0x0; _0x17d489 < _0x3a40bd.points.length; _0x17d489++) {
                _0x3a40bd.points[_0x17d489].x *= -0x1;
              }
            }
            _0x382faa.follower = this.add.follower(_0x3a40bd, 0x0, 0x0).setVisible(false);
            _0x382faa.followerConfig = {
              'duration': 0x5dc,
              'ease': "Sine.easeInOut"
            };
            const _0x528631 = _0x4f0d6b % 0x2 == 0x0 ? this.TopLeft.x : this.BottomRight.x;
            _0x382faa.setMask(this.BGMask).setDepth(0xd).setVisible(false).setScale(0x2).setPosition(_0x528631, this.BottomRight.y).resetPoints(_0x528631, this.BottomRight.y);
            this.ribbons2.push(_0x382faa);
          }
        }
        ["LayerUp"]() {
          this.Chest.setDepth(0x5);
          this.Pfx_Coin_Manager.setDepth(0x6);
          this.Pfx_Coin_Manager2.setDepth(0x6);
          this.Pfx_CoinFront_Manager.setDepth(0x7);
          this.Pfx_CoinFront_Manager2.setDepth(0x7);
          for (let _0x2faeb3 = 0x0; _0x2faeb3 < this.reels.length; _0x2faeb3++) {
            this.reels[_0x2faeb3].SetDepth(0x8);
          }
          this.ChestFront.setDepth(0xc);
        }
        ['ShowOKButton']() {
          this.CyclePrizes();
          this.openText.text = "DONE";
          this.openButton.removeAllListeners();
          this.openButton.setInteractive();
          this.tweens.add({
            'targets': [this.openText, this.openButton],
            'scale': 0x2 * _0x34bb1a.PixelScale,
            'angle': 0x0,
            'duration': 0x96,
            'ease': "Linear",
            'yoyo': false
          });
          this.time.addEvent({
            'delay': 0x96,
            'callback': () => {
              let _0x265dc6 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
              _0x265dc6.ToggleCursorsVisibility(true);
              _0x265dc6.UI_grid.SelectGameObject(this.openButton);
              _0x265dc6.UI_selected = this.openButton;
              this.openButton.on("pointerdown", () => {
                this.disableInput();
                this.DismissScene();
                this.openButton.removeAllListeners();
              });
            }
          });
        }
        ["DismissScene"]() {
          this.time.addEvent({
            'delay': 0x1f4,
            'callback': () => {
              this.OnSceneOver();
            }
          });
          this.HidePrizes();
          this.tweens.add({
            'targets': [this.Chest, this.ChestFront, this.tickerCounter],
            'scale': 0x0,
            'alpha': 0x0,
            'duration': 0x96
          });
          this.tweens.add({
            'targets': this.background,
            'scaleX': -0.2,
            'scaleY': -0.1,
            'alpha': 0x0,
            'angle': 0xb4,
            'duration': 0x96
          });
        }
        ['MakeRibbons'](_0x25ddcb, _0x1331a1, _0x5f3b22, _0x39da55 = 0x5dc, _0x5fe10e = 0x2, _0x4c3065 = 0x64) {
          for (let _0x2e42fd = 0x0; _0x2e42fd < this.ribbons.length; _0x2e42fd++) {
            const _0x18c80f = this.ribbons[_0x2e42fd];
            this.children.remove(_0x18c80f);
          }
          this.ribbons = new Array();
          for (let _0x3b2ab5 = 0x0; _0x3b2ab5 < _0x25ddcb; _0x3b2ab5++) {
            var _0x2267e9 = new _0x37deed(this, 0x0, 0x0, 'vfx', 'Ribbon1.png', 0x20, false);
            this.add.existing(_0x2267e9);
            var _0x38d98d = new Phaser.Curves.Spline([0x0, 0x0, 0x0, 0x0, 0x1c, -0x29, -0x17, -0x51, 0x1f, -0x8f, -0x21, -0xbd, -0x60, -0x9e, -0x51, -0x5f, 0x13, -0x49, 0x9d, -0xa9]);
            for (let _0x52727a = 0x0; _0x52727a < _0x38d98d.points.length; _0x52727a++) {
              const _0x5d029e = _0x38d98d.points[_0x52727a];
              _0x5d029e.x += 0x18 * (Math.random() - 0.5);
              _0x5d029e.x *= 0x4;
              _0x5d029e.y *= 0x4;
            }
            if (_0x3b2ab5 % 0x2 == 0x0) {
              for (let _0x3a741c = 0x0; _0x3a741c < _0x38d98d.points.length; _0x3a741c++) {
                _0x38d98d.points[_0x3a741c].x *= -0x1;
              }
            }
            if (Math.random() > 0.5) {
              for (let _0x93a1c4 = 0x0; _0x93a1c4 < _0x38d98d.points.length; _0x93a1c4++) {
                const _0x432998 = _0x38d98d.points[_0x93a1c4];
                _0x5bf9e7.RotateVectorByDegrees(_0x432998, Phaser.Math.RND.pick([0xa, -0xa]), _0x432998);
              }
            }
            _0x2267e9.follower = this.add.follower(_0x38d98d, 0x0, 0x0).setVisible(false);
            _0x2267e9.followerConfig = {
              'duration': _0x39da55,
              'yoyo': true,
              'repeat': -0x1,
              'ease': "Sine.easeInOut",
              'delay': _0x4c3065 * _0x3b2ab5,
              'startAt': 0x0
            };
            _0x2267e9.setMask(this.UpperFreeMask).setScale(Phaser.Math.RND.pick([0x1, 1.1, 1.2, 1.3, 0.9, 0.8, 0.7])).setDepth(Phaser.Math.RND.pick([0x7, 0x8, 0x9])).setVisible(false).setScale(0.5).setBlendMode(_0x2d874d.BlendModes.ADD).setPosition(_0x1331a1, _0x5f3b22).resetPoints(0x0, 0x0);
            this.ribbons.push(_0x2267e9);
          }
        }
        ["StartRibbons"]() {
          this.updateTrail = true;
          for (let _0x53605b = 0x0; _0x53605b < this.ribbons.length; _0x53605b++) {
            const _0x5267e9 = this.ribbons[_0x53605b];
            _0x5267e9.setVisible(true);
            _0x5267e9.follower.startFollow(_0x5267e9.followerConfig);
          }
        }
        ['StartRibbons2']() {
          this.updateTrail2 = true;
          for (let _0x5ecae5 = 0x0; _0x5ecae5 < this.ribbons2.length; _0x5ecae5++) {
            const _0xd39c7b = this.ribbons2[_0x5ecae5];
            _0xd39c7b.setVisible(true);
            _0xd39c7b.follower.startFollow(_0xd39c7b.followerConfig);
          }
          this.time.addEvent({
            'delay': 0x0,
            'callback': () => {
              this.tweens.add({
                'targets': this.backgroundOverlay,
                'alpha': 0x0,
                'yoyo': true,
                'duration': 0x12c,
                'delay': 0x64
              });
              for (let _0x417862 = 0x0; _0x417862 < this.fwEmitters.length; _0x417862++) {
                this.fwEmitters[_0x417862].y.propertyValue += 0xc8;
              }
              this.time.addEvent({
                'delay': 0x1,
                'repeat': 0x4,
                'callback': () => {
                  for (let _0x407f14 = 0x0; _0x407f14 < this.fwEmitters.length; _0x407f14++) {
                    this.fwEmitters[_0x407f14].start();
                  }
                }
              });
              this.time.addEvent({
                'delay': 0x3c,
                'callback': () => {
                  for (let _0x49d6e7 = 0x0; _0x49d6e7 < this.fwEmitters.length; _0x49d6e7++) {
                    this.fwEmitters[_0x49d6e7].stop();
                  }
                }
              });
            }
          });
        }
        ["StopRibbons"]() {
          var _0x2371bc = this.GetStopDelays();
          var _0x5684a4 = Math.max.apply(null, _0x2371bc);
          for (let _0x481950 = 0x0; _0x481950 < this.ribbons.length; _0x481950++) {
            const _0x4f7e99 = this.ribbons[_0x481950];
            this.tweens.add({
              'targets': _0x4f7e99,
              'alpha': 0x0,
              'duration': 0x64,
              'delay': _0x481950 / this.ribbons.length * _0x5684a4
            });
          }
        }
        ["MakeReels"](_0x2d5b24) {
          for (let _0x2db7ed = 0x0; _0x2db7ed < this.reels.length; _0x2db7ed++) {
            this.reels[_0x2db7ed].Nuke();
          }
          this.reels = new Array();
          this.StripEnd.x = 0x0;
          this.StripEnd.y = -0x600;
          const _0x3a1579 = [0x0, 0x14, -0x14, 0x28, -0x28];
          for (let _0x106e86 = 0x0; _0x106e86 < _0x2d5b24.length; _0x106e86++) {
            const _0x5139d9 = _0x2d5b24[_0x106e86];
            var _0x5033fd = new Phaser.Math.Vector2(this.Chest.x, this.Chest.y - 0xa);
            var _0x586e88 = new Phaser.Math.Vector2(this.StripEnd.x, this.StripEnd.y);
            var _0x58ee03 = _0x3a1579[_0x106e86 % _0x3a1579.length];
            if (0x0 != _0x58ee03) {
              _0x5bf9e7.RotateVectorByDegrees(this.StripEnd, _0x58ee03, _0x586e88);
            }
            this.reels.push(new _0x3fe872(this, _0x5139d9, _0x5033fd, _0x586e88, this.UpperMask));
          }
        }
        ["StartReels"](_0xaa22c0 = []) {
          if (0x0 === _0xaa22c0.length) {
            for (let _0x2385f4 = 0x0; _0x2385f4 < this.reels.length; _0x2385f4++) {
              this.reels[_0x2385f4].Play();
            }
          } else {
            for (let _0x5d6c2e = 0x0; _0x5d6c2e < _0xaa22c0.length; _0x5d6c2e++) {
              this.reels[_0xaa22c0[_0x5d6c2e]].Play();
            }
          }
        }
        ["StopReels"]() {
          var _0x16520a = this.GetStopDelays();
          for (let _0x2b47e7 = 0x0; _0x2b47e7 < this.reels.length; _0x2b47e7++) {
            const _0x5d9dea = this.reels[_0x2b47e7];
            this.time.addEvent({
              'delay': _0x16520a[_0x2b47e7 % this.prizeIcons.length],
              'callback': () => {
                _0x5d9dea.Stop();
              }
            });
          }
        }
        ["HideReels"]() {
          for (let _0x543800 = 0x0; _0x543800 < this.reels.length; _0x543800++) {
            this.reels[_0x543800].Hide();
          }
        }
        ["MakeWinIcons"]() {
          const _0x14bc5d = [new Phaser.Math.Vector2(this.Chest.x, this.Chest.y - 0xfa), new Phaser.Math.Vector2(this.Chest.x - 0x73, this.Chest.y - 0x145), new Phaser.Math.Vector2(this.Chest.x + 0x73, this.Chest.y - 0x145), new Phaser.Math.Vector2(this.Chest.x - 0x96, this.Chest.y - 0xbe), new Phaser.Math.Vector2(this.Chest.x + 0x96, this.Chest.y - 0xbe)];
          for (let _0x29e583 = 0x0; _0x29e583 < this.prizes.length; _0x29e583++) {
            const _0x25a750 = this.prizes[_0x29e583];
            var _0x49c064 = _0x34b109.COINBAG2;
            if (_0x25a750.prizeType === _0x2a9e31.POWERUP || _0x25a750.prizeType === _0x2a9e31.EXISTING_WEAPON || _0x25a750.prizeType === _0x2a9e31.EXISTING_ANY || _0x25a750.prizeType === _0x2a9e31.FIXED || _0x25a750.prizeType === _0x2a9e31.EVOLUTION) {
              _0x49c064 = _0x14b553[_0x25a750.prizeEnum][0x0];
            } else if (_0x25a750.prizeType === _0x2a9e31.FILLER) {
              _0x49c064 = _0x34b109[_0x25a750.prizeEnum];
            }
            this.prizeIcons.push(new _0x492758(this, _0x14bc5d[_0x29e583].x, _0x14bc5d[_0x29e583].y, _0x49c064.frameName));
          }
        }
        ['GetStopDelays']() {
          var _0x116daa;
          switch (this.prizeIcons.length) {
            default:
            case 0x1:
              _0x116daa = [0x0];
              break;
            case 0x3:
              _0x116daa = [0x258, 0x0, 0x12c];
              break;
            case 0x5:
              _0x116daa = [0x258, 0x12c, 0x12c, 0x0, 0x0];
          }
          return _0x116daa;
        }
        ["StartPrizes"]() {
          var _0x1008e8 = this.GetStopDelays();
          for (let _0x1e056d = 0x0; _0x1e056d < this.prizeIcons.length; _0x1e056d++) {
            const _0x1c7776 = this.prizeIcons[_0x1e056d];
            this.time.addEvent({
              'delay': _0x1008e8[_0x1e056d % this.prizeIcons.length],
              'callback': () => {
                _0x1c7776.Play();
              }
            });
          }
        }
        ['HidePrizes']() {
          for (let _0x9c0763 = 0x0; _0x9c0763 < this.prizeIcons.length; _0x9c0763++) {
            this.prizeIcons[_0x9c0763].Hide(0.5 * this.renderer.width, 0x0);
          }
        }
        ['Delay'](_0x3885aa, _0x4120f4) {
          this.time.addEvent({
            'delay': _0x3885aa,
            'callback': () => {
              _0x4120f4();
            },
            'callbackScope': this
          });
        }
        ["HideHeader"]() {
          this.tweens.add({
            'targets': this.header,
            'scale': 0x0,
            'duration': 0x12c
          });
        }
        ["StartCounter"](_0x3cc487 = 0x1c84) {
          this.tickerCounter.setVisible(true);
          this.tweens.add({
            'targets': this.tickerCounter,
            'scale': 0x2,
            'duration': 0x12c
          });
          const _0x12cd52 = Math.ceil(this.CoinsAward * _0x34bb1a.GoldMultiplier);
          this.CoinsTickerDisplay = 0x0;
          this.tweens.add({
            'targets': this,
            'CoinsTickerDisplay': _0x12cd52,
            'duration': _0x3cc487,
            'onUpdate': () => {
              this.tickerCounter.text = this.CoinsTickerDisplay.toFixed(0x2);
            },
            'onComplete': () => {
              this.tickerCounter.setTint(0xffff00);
              this.counterRing.setVisible(true);
              this.tweens.add({
                'duration': 0x64,
                'targets': this.counterRing,
                'scale': 0x0
              });
              this.tweens.add({
                'duration': 0x3e8,
                'targets': this.tickerCounter,
                'scale': 2.2,
                'repeat': -0x1,
                'yoyo': true
              });
            }
          });
        }
        ['MoveCounter']() {
          this.tweens.add({
            'duration': 0xfa,
            'targets': this.tickerCounter,
            'scale': 0x0,
            'onComplete': () => {
              this.tickerCounter.x = this.header.x;
              this.tickerCounter.y = this.header.y;
              this.tweens.add({
                'duration': 0xfa,
                'targets': this.tickerCounter,
                'scale': 0x2
              });
            }
          });
        }
        ["AddSpriteFollower"](_0x3cf7c7, _0x4c5451, _0x5393d6, _0x12d7e0) {
          return this.add.follower(_0x3cf7c7, _0x4c5451, _0x5393d6, _0x12d7e0).setOrigin(0.5, 0x0).setScale(0x2).setMask(this.UpperMask);
        }
        ["MakeMasks"]() {
          this.UpperMask = _0x5bf9e7.MakeRectangleMask(this, this.TopLeft.x + 0xf, this.TopLeft.y + 0xf, 0x2 * this.background.width - 0x1e, this.Chest.y - this.TopLeft.y - 0x46);
          this.UpperFreeMask = _0x5bf9e7.MakeRectangleMask(this, 0x0, 0x0, this.renderer.width, this.Chest.y - 0x32);
          this.BGMask = _0x5bf9e7.MakeRectangleMask(this, this.TopLeft.x + 0xf, this.TopLeft.y + 0xf, 0x2 * this.background.width - 0x1e, 0x2 * this.background.height - 0x1e);
        }
        ["OnButtonClicked"]() {
          this.disableInput();
        }
        ["OpenChest"]() {
          this.time.removeEvent(this.IdleTimer);
          this.Chest.anims.play("open");
          this.ChestFront.anims.play('open');
        }
        ["enableInput"]() {
          this.tweens.add({
            'targets': [this.openText, this.openButton],
            'scale': 0x2 * _0x34bb1a.PixelScale,
            'angle': 0x0,
            'duration': 0x96,
            'ease': "Linear",
            'yoyo': false
          });
          let _0x264095 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x264095.ToggleCursorsVisibility(true);
          _0x264095.UI_grid.SelectGameObject(this.openButton);
          _0x264095.UI_selected = this.openButton;
          this.openButton.setInteractive();
        }
        ["disableInput"]() {
          this.openButton.removeInteractive();
          let _0x31c845 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x31c845.ToggleCursorsVisibility(false);
          _0x31c845.UI_grid.Deselect();
          this.tweens.add({
            'targets': [this.openText, this.openButton],
            'scale': 0x0,
            'angle': -0xb4,
            'duration': 0x96,
            'ease': "Linear",
            'yoyo': false
          });
        }
        ["customAngle"](_0x47e37c, _0x3c6317, _0x1230e7) {
          return _0x47e37c.angle + 0x5;
        }
        ["onEmitcustomAngle"](_0x31f9ec, _0x1a4acf, _0x194c07) {
          return 0x168 * Math.random();
        }
        ["MakeCoinsEmitter"](_0x51ce53) {
          _0x51ce53--;
          var _0x1ffa98 = this.Chest.x;
          var _0x41bafe = this.Chest.y - 0xa;
          var _0x20ff2e = [0x64, 0x32, 0x19, 0xc8, 0x64, 0x32];
          this.Pfx_Coin_Manager = this.add.particles("coinRT0");
          this.Pfx_Coin = this.Pfx_Coin_Manager.createEmitter({
            'x': _0x1ffa98,
            'y': _0x41bafe - 0x14,
            'lifespan': 0xfa0,
            'rotate': {
              'onEmit': (_0x26f87d, _0x411dd5, _0x4bff85) => this.onEmitcustomAngle(_0x26f87d, _0x411dd5, _0x4bff85),
              'onUpdate': (_0x5f31c1, _0x49bc37, _0x36f824) => this.customAngle(_0x5f31c1, _0x49bc37, _0x36f824)
            },
            'angle': {
              'min': 0xe1,
              'max': 0x13b
            },
            'speed': {
              'min': 0x1c2,
              'max': 0x258
            },
            'scale': {
              'start': 0x2 * _0x34bb1a.PixelScale,
              'end': _0x34bb1a.PixelScale
            },
            'gravityY': 0x1f4,
            'bounce': 0.9,
            'bounds': {
              'x': 0x0,
              'y': 0x0,
              'w': this.renderer.width,
              'h': 0x0
            },
            'collideTop': false,
            'collideBottom': false,
            'frequency': 0x2 * _0x20ff2e[_0x51ce53],
            'on': false
          });
          this.Pfx_Coin_Manager2 = this.add.particles("coinRT1");
          this.Pfx_Coin2 = this.Pfx_Coin_Manager2.createEmitter({
            'x': _0x1ffa98,
            'y': _0x41bafe - 0x14,
            'lifespan': 0xfa0,
            'rotate': {
              'onEmit': (_0x257461, _0x1479f8, _0x5ac81c) => this.onEmitcustomAngle(_0x257461, _0x1479f8, _0x5ac81c),
              'onUpdate': (_0x2917cf, _0x3473b1, _0x47c137) => this.customAngle(_0x2917cf, _0x3473b1, _0x47c137)
            },
            'angle': {
              'min': 0xe1,
              'max': 0x13b
            },
            'speed': {
              'min': 0x1c2,
              'max': 0x258
            },
            'scale': {
              'start': 0x2 * _0x34bb1a.PixelScale,
              'end': _0x34bb1a.PixelScale
            },
            'gravityY': 0x1f4,
            'bounce': 0.9,
            'bounds': {
              'x': 0x0,
              'y': 0x0,
              'w': this.renderer.width,
              'h': 0x0
            },
            'collideTop': false,
            'collideBottom': false,
            'frequency': 0x2 * _0x20ff2e[_0x51ce53],
            'on': false
          });
          this.Pfx_CoinFront_Manager = this.add.particles("coinRT2");
          this.Pfx_CoinFront = this.Pfx_CoinFront_Manager.createEmitter({
            'x': _0x1ffa98,
            'y': _0x41bafe - 0x14,
            'lifespan': 0xfa0,
            'rotate': {
              'onEmit': (_0x59f9de, _0x47ba56, _0x166566) => this.onEmitcustomAngle(_0x59f9de, _0x47ba56, _0x166566),
              'onUpdate': (_0x2c60ff, _0xbceeff, _0x4f5b01) => this.customAngle(_0x2c60ff, _0xbceeff, _0x4f5b01)
            },
            'angle': {
              'min': 0xe1,
              'max': 0x13b
            },
            'speed': {
              'min': 0x1c2,
              'max': 0x258
            },
            'scale': {
              'start': 0x2 * _0x34bb1a.PixelScale,
              'end': 2.1 * _0x34bb1a.PixelScale
            },
            'gravityY': 0x1f4,
            'bounce': 0.9,
            'bounds': {
              'x': 0x0,
              'y': 0x0,
              'w': this.renderer.width,
              'h': 0x0
            },
            'collideTop': false,
            'collideBottom': false,
            'frequency': 0x2 * _0x20ff2e[_0x51ce53 + 0x3],
            'on': false
          });
          this.Pfx_CoinFront_Manager2 = this.add.particles("coinRT3");
          this.Pfx_CoinFront2 = this.Pfx_CoinFront_Manager2.createEmitter({
            'x': _0x1ffa98,
            'y': _0x41bafe - 0x14,
            'lifespan': 0xfa0,
            'rotate': {
              'onEmit': (_0x3dff6a, _0x424bb5, _0x58a7a8) => this.onEmitcustomAngle(_0x3dff6a, _0x424bb5, _0x58a7a8),
              'onUpdate': (_0x3034ce, _0x2d0a05, _0x2aea9b) => this.customAngle(_0x3034ce, _0x2d0a05, _0x2aea9b)
            },
            'angle': {
              'min': 0xe1,
              'max': 0x13b
            },
            'speed': {
              'min': 0x1c2,
              'max': 0x258
            },
            'scale': {
              'start': 0x2 * _0x34bb1a.PixelScale,
              'end': 2.1 * _0x34bb1a.PixelScale
            },
            'gravityY': 0x1f4,
            'bounce': 0.9,
            'bounds': {
              'x': 0x0,
              'y': 0x0,
              'w': this.renderer.width,
              'h': 0x0
            },
            'collideTop': false,
            'collideBottom': false,
            'frequency': 0x2 * _0x20ff2e[_0x51ce53 + 0x3],
            'on': false
          });
        }
        ["StartCoinsEmitters"](_0x217a8e = 0x189c) {
          this.Pfx_Coin.start();
          this.Pfx_CoinFront.start();
          this.Pfx_Coin2.start();
          this.Pfx_CoinFront2.start();
          this.time.addEvent({
            'delay': _0x217a8e,
            'callback': () => {
              this.Pfx_Coin.stop();
              this.Pfx_CoinFront.stop();
              this.Pfx_Coin2.stop();
              this.Pfx_CoinFront2.stop();
            }
          });
        }
        ["CyclePrizes"]() {
          var _0x4895b3 = new Array();
          for (let _0x513bd2 = 0x0; _0x513bd2 < this.AccumulatedWeaponPrizes.length; _0x513bd2++) {
            const _0x4b8094 = this.AccumulatedWeaponPrizes[_0x513bd2];
            (_0x40877d = new _0x11e68f()).dataKey = _0x4b8094;
            _0x40877d.dataType = "Weapon";
            _0x4895b3.push(_0x40877d);
          }
          for (let _0x10fcc9 = 0x0; _0x10fcc9 < this.AccumulatedItemPrizes.length; _0x10fcc9++) {
            const _0xddeba1 = this.AccumulatedItemPrizes[_0x10fcc9];
            var _0x40877d;
            (_0x40877d = new _0x11e68f()).dataKey = _0xddeba1;
            _0x40877d.dataType = "Item";
            _0x4895b3.push(_0x40877d);
          }
          this.achievementsPopup = new _0x1caabc(this, 0x0, 0x0);
          this.achievementsPopup.setPosition(0.5 * this.renderer.width - 0.5 * this.achievementsPopup.displayWidth, this.renderer.height - this.achievementsPopup.height * _0x34bb1a.PixelScale);
          this.add.existing(this.achievementsPopup);
          const _0x194fdf = _0x4895b3.length;
          var _0x58555e = 0x0;
          const _0x5183ee = () => {
            const _0x182382 = _0x4895b3[_0x58555e % _0x194fdf];
            var _0x149f3d = 0x0;
            if ("Weapon" === _0x182382.dataType) {
              var _0x49ec18 = this.findWeaponLevel(_0x182382.dataKey);
              for (let _0x322977 = 0x0; _0x322977 < _0x58555e % _0x194fdf; _0x322977++) {
                var _0x52e6fc = _0x4895b3[_0x322977];
                if ("Weapon" === _0x52e6fc.dataType && _0x52e6fc.dataKey === _0x182382.dataKey) {
                  _0x149f3d++;
                }
              }
              _0x149f3d += _0x49ec18;
            }
            this.achievementsPopup.AssignData(_0x182382.dataKey, _0x182382.dataType, _0x194fdf > 0x1 ? 0x1 + _0x58555e % _0x194fdf + '/' + _0x194fdf : '', _0x149f3d);
            this.achievementsPopup.Show();
            _0x58555e++;
            this.time.addEvent({
              'delay': 0x1194,
              'callback': () => {
                this.achievementsPopup.Hide();
              }
            });
          };
          if (_0x194fdf > 0x0) {
            _0x5183ee();
            if (_0x194fdf > 0x1) {
              this.time.addEvent({
                'delay': 0x1388,
                'callback': () => {
                  _0x5183ee();
                },
                'repeat': _0x194fdf - 0x2
              });
            }
          }
        }
        ["findWeaponLevel"](_0x50ecf0) {
          var _0x434ccc = _0x1d0e6c.Core.Weapons.find(_0x4e59c5 => _0x4e59c5.bulletType === _0x50ecf0);
          return _0x434ccc ? _0x434ccc.level : 0x0;
        }
        ["update"]() {
          for (let _0x476ccf = 0x0; _0x476ccf < this._coinRT.length; _0x476ccf++) {
            const _0x43375a = this._coinRT[_0x476ccf];
            _0x43375a.clear();
            _0x43375a.draw(this._coinSprites[_0x476ccf], 0x0, 0x0);
          }
          this.bubbles.Update();
          if (this.updateTrail) {
            for (let _0x3141ee = 0x0; _0x3141ee < this.ribbons.length; _0x3141ee++) {
              this.ribbons[_0x3141ee].trailUpdate();
            }
          }
          if (this.updateTrail2) {
            for (let _0x1b6a78 = 0x0; _0x1b6a78 < this.ribbons2.length; _0x1b6a78++) {
              this.ribbons2[_0x1b6a78].trailUpdate();
            }
          }
        }
      }
      class _0x146df3 {
        static ["GetNewAchievementsEarnedOnThisRun"]() {
          this.NewAchievements = new Array();
          _0x1d0e6c.Core.Weapons;
          var _0x37305a = 0x0;
          for (const _0x32cbb1 in _0x37a34e) _0x37305a += _0x37a34e[_0x32cbb1][0x0].killedAmount;
          if (_0x37305a >= 0x1388) {
            this.UnlockAchievement(_0x340ca6.Defeat5000Enemies);
          }
          if (_0x37a34e[_0x433cce.SKELETON][0x0].killedAmount >= 0xbb8) {
            this.UnlockAchievement(_0x340ca6.Defeat3000Skeletons);
          }
          if (_0x37a34e[_0x433cce.BOSS_XLFLOWER][0x0].killedAmount >= 0x1 && _0x1d0e6c.Core.PlayerOptions.SelectedStage === _0x23a5f2.FOREST) {
            this.UnlockAchievement(_0x340ca6.DefeatBossMadForest);
          }
          if (_0x5984e8[_0x4b0b3f.BRAZIER].destroyedAmount >= 0x14) {
            this.UnlockAchievement(_0x340ca6.Destroy20Candles);
          }
          if (_0x34b109[_0x5b2d7b.ROAST].pickedupAmount >= 0x5) {
            this.UnlockAchievement(_0x340ca6.Eat5PotRoast);
          }
          if (_0x34b109[_0x5b2d7b.CLOVER].pickedupAmount >= 0x1) {
            this.UnlockAchievement(_0x340ca6.FindAClover);
          }
          if (_0x34b109[_0x5b2d7b.ROSARY].pickedupAmount >= 0x1) {
            this.UnlockAchievement(_0x340ca6.FindARosary);
          }
          if (_0x34b109[_0x5b2d7b.VACUUM].pickedupAmount >= 0x1) {
            this.UnlockAchievement(_0x340ca6.FindAVacuum);
          }
          if (_0x34b109[_0x5b2d7b.OROLOGION].pickedupAmount >= 0x1) {
            this.UnlockAchievement(_0x340ca6.FindAnOrologion);
          }
          if (Math.random() < _0x34b109[_0x5b2d7b.CLOVER].pickedupAmount * _0x34b109[_0x5b2d7b.CLOVER].pickedupAmount / 0xffff) {
            _0x4774f8[_0x2fbe76.EXDASH][0x0].hidden = false;
            _0x4774f8[_0x2fbe76.EXDASH][0x0].isBought = true;
            _0x1d0e6c.Core.PlayerOptions.BoughtCharacters.push(_0x2fbe76.EXDASH);
            _0x1d0e6c.Core.PlayerOptions.Save();
          }
          if (_0x1d0e6c.Core.Weapons.find(_0x16f2e7 => _0x16f2e7.bulletType == _0x2a5ca3.FIREBALL && _0x16f2e7.level >= 0x4) || _0x1d0e6c.Core.Weapons.find(_0x23ad11 => _0x23ad11.bulletType == _0x2a5ca3.HELLFIRE)) {
            this.UnlockAchievement(_0x340ca6.GetFireWandToLevel4);
          }
          if (_0x1d0e6c.Core.Weapons.find(_0x57753a => _0x57753a.bulletType == _0x2a5ca3.HOLYBOOK && _0x57753a.level >= 0x4) || _0x1d0e6c.Core.Weapons.find(_0xa9690 => _0xa9690.bulletType == _0x2a5ca3.VESPERS)) {
            this.UnlockAchievement(_0x340ca6.GetHolyBookToLevel4);
          }
          if (_0x1d0e6c.Core.Weapons.find(_0x5560e7 => _0x5560e7.bulletType == _0x2a5ca3.HOLYWATER && _0x5560e7.level >= 0x4)) {
            this.UnlockAchievement(_0x340ca6.GetHolyWaterToLevel4);
          }
          if (_0x1d0e6c.Core.Weapons.find(_0x13cc1f => _0x13cc1f.bulletType == _0x2a5ca3.MAGIC_MISSILE && _0x13cc1f.level >= 0x7) || _0x1d0e6c.Core.Weapons.find(_0x3b278d => _0x3b278d.bulletType == _0x2a5ca3.HOLY_MISSILE)) {
            this.UnlockAchievement(_0x340ca6.GetMagicMissileToLevel7);
          }
          if (_0x1d0e6c.Core.Weapons.find(_0x2bcc2e => _0x2bcc2e.bulletType == _0x2a5ca3.LIGHTNING && _0x2bcc2e.level >= 0x4)) {
            this.UnlockAchievement(_0x340ca6.GetLightningRingToLevel4);
          }
          if (_0x1d0e6c.Core.Weapons.find(_0xf4f816 => _0xf4f816.bulletType == _0x2a5ca3.SILF && _0xf4f816.level >= 0x7)) {
            this.UnlockAchievement(_0x340ca6.GetPeachoneToLevel7);
          }
          if (_0x1d0e6c.Core.Weapons.find(_0x57dcdf => _0x57dcdf.bulletType == _0x2a5ca3.DIAMOND && _0x57dcdf.level >= 0x7)) {
            this.UnlockAchievement(_0x340ca6.GetRunetracerToLevel7);
          }
          if (_0x1d0e6c.Core.Weapons.length >= 0x6) {
            this.UnlockAchievement(_0x340ca6.Have6DifferentWeapons);
          }
          if (_0x1d0e6c.Core.Player.level >= 0xa) {
            this.UnlockAchievement(_0x340ca6.ReachLV10);
          }
          if (_0x1d0e6c.Core.Player.level >= 0x5) {
            this.UnlockAchievement(_0x340ca6.ReachLV5);
          }
          if (_0x1d0e6c.Core.SurvivedSeconds >= 0x3c) {
            this.UnlockAchievement(_0x340ca6.Survive1Minute);
          }
          if (_0x1d0e6c.Core.SurvivedSeconds >= 0x12c && _0x1d0e6c.Core.Player.characterType === _0x2fbe76.PASQUALINA) {
            this.UnlockAchievement(_0x340ca6.Survive5MinutesWithDiamond);
          }
          if (_0x1d0e6c.Core.SurvivedSeconds >= 0x258) {
            this.UnlockAchievement(_0x340ca6.Survive10Minutes);
          }
          if (_0x1d0e6c.Core.SurvivedSeconds >= 0x4b0) {
            this.UnlockAchievement(_0x340ca6.Survive20Minutes);
          }
          return this.NewAchievements;
        }
        static ["UnlockAchievement"](_0x502b41) {
          const _0x5da6b4 = _0x3fbaa9[_0x502b41];
          if (!_0x5da6b4.achieved) {
            _0x5da6b4.achieved = true;
            if (_0x5da6b4.weaponToUnlock) {
              _0x1d0e6c.Core.PlayerOptions.UnlockedWeapons.push(_0x5da6b4.weaponToUnlock);
              _0x14b553[_0x5da6b4.weaponToUnlock][0x0].isUnlocked = true;
            }
            if (_0x5da6b4.characterToUnlock) {
              _0x1d0e6c.Core.PlayerOptions.UnlockedCharacters.push(_0x5da6b4.characterToUnlock);
              _0x4774f8[_0x5da6b4.characterToUnlock][0x0].hidden = false;
            }
            if (_0x5da6b4.stageToUnlock) {
              _0x1d0e6c.Core.PlayerOptions.UnlockedStages.push(_0x5da6b4.stageToUnlock);
              _0x26e87a[_0x5da6b4.stageToUnlock][0x0].unlocked = true;
            }
            if (_0x5da6b4.hyperToUnlock) {
              _0x1d0e6c.Core.PlayerOptions.UnlockedHypers.push(_0x5da6b4.hyperToUnlock);
              _0x26e87a[_0x5da6b4.hyperToUnlock][0x0].hyper.unlocked = true;
            }
            _0x1d0e6c.Core.PlayerOptions.Achievements.push(_0x502b41);
            this.NewAchievements.push(_0x502b41);
          }
        }
      }
      _0x146df3.NewAchievements = new Array();
      class _0x298ea6 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.PostGameScene
          });
          this.fillScale = 0x1;
          this.TopLeft = new Phaser.Math.Vector2(0x0, 0x0);
          this.achievements = new Array();
        }
        ["preload"]() {
          _0x1d0e6c.ApplyMenuResolution();
          this.survivedTime = {
            'text': null,
            'value': null
          };
          this.obtainedGold = {
            'text': null,
            'value': null
          };
          this.enemiesDefeated = {
            'text': null,
            'value': null
          };
          this.levelReached = {
            'text': null,
            'value': null
          };
          this.powerUps = new Array();
          this.achievements = new Array();
        }
        ["create"]() {
          var _0x2f5c9f;
          var _0x8761c6;
          this.RedBackground = this.add.image(0.5 * this.renderer.width, 0.5 * this.renderer.height, "introBG");
          this.fillScale = this.renderer.height / this.RedBackground.height;
          this.RedBackground.setScale(0x5 * this.fillScale, 0x5 * this.fillScale);
          var _0x75a4b6 = 0.8 * _0x3dbb73.width / _0x34bb1a.PixelScale;
          var _0x4226ec = 0.8 * _0x3dbb73.height / _0x34bb1a.PixelScale;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x75a4b6,
            'height': _0x4226ec
          });
          this.background.setPosition(0.5 * this.renderer.width, 0.5 * this.renderer.height);
          this.background.setOrigin(0.5);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.TopLeft.x = this.background.x - 0.5 * this.background.width * _0x34bb1a.PixelScale;
          this.TopLeft.y = this.background.y - 0.5 * this.background.height * _0x34bb1a.PixelScale;
          var _0xf5fab1 = this.background.x + 0.5 * this.background.width * _0x34bb1a.PixelScale;
          this.header = new Phaser.GameObjects.Text(this, 0.5 * this.renderer.width, this.TopLeft.y + 0x28, "Results", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.add.existing(this.header);
          _0x1d0e6c.Core.PlayerOptions.LifetimeSurvived += _0x1d0e6c.Core.SurvivedSeconds;
          _0x1d0e6c.Core.PlayerOptions.LifetimeSurvived;
          this.add.text(0.5 * this.renderer.width, 0x48 + this.TopLeft.y, _0x26e87a[_0x1d0e6c.Core.PlayerOptions.SelectedStage][0x0].stageName + " - " + (_0x1d0e6c.Core.PlayerOptions.SelectedHyper ? "Hyper" : "Normal") + " - Gold x" + _0x34bb1a.GoldMultiplier.toString(), {}).setScale(_0x34bb1a.PixelScale).setTint(0xffff00).setOrigin(0.5);
          var _0x25c24d = _0x1d0e6c.Core.SurvivedSeconds >= 0x708 ? 'MAX' : _0x31ae0d.FormatTime(_0x1d0e6c.Core.SurvivedSeconds);
          this.survivedTime.text = this.add.text(0x18 + this.TopLeft.x, 0x60 + this.TopLeft.y, "Survived:", {}).setScale(_0x34bb1a.PixelScale);
          this.survivedTime.value = this.add.text(_0xf5fab1 - 0x18, 0x60 + this.TopLeft.y, _0x25c24d, {
            'align': "right"
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0x1, 0x0);
          this.obtainedGold.text = this.add.text(0x18 + this.TopLeft.x, 0x78 + this.TopLeft.y, "Gold earned:", {}).setScale(_0x34bb1a.PixelScale);
          this.obtainedGold.value = this.add.text(_0xf5fab1 - 0x18, 0x78 + this.TopLeft.y, Math.ceil(_0x1d0e6c.Core.PlayerOptions.RunCoins).toString(), {
            'align': 'right'
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0x1, 0x0);
          this.levelReached.text = this.add.text(0x18 + this.TopLeft.x, 0x90 + this.TopLeft.y, "Level reached:", {}).setScale(_0x34bb1a.PixelScale);
          this.levelReached.value = this.add.text(_0xf5fab1 - 0x18, 0x90 + this.TopLeft.y, null === (_0x2f5c9f = _0x1d0e6c.Core.Player) || undefined === _0x2f5c9f ? undefined : _0x2f5c9f.level.toString(), {
            'align': 'right'
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0x1, 0x0);
          this.enemiesDefeated.text = this.add.text(0x18 + this.TopLeft.x, 0xa8 + this.TopLeft.y, "Enemies defeated:", {}).setScale(_0x34bb1a.PixelScale);
          this.enemiesDefeated.value = this.add.text(_0xf5fab1 - 0x18, 0xa8 + this.TopLeft.y, null === (_0x8761c6 = _0x1d0e6c.Core.PlayerOptions.RunEnemies) || undefined === _0x8761c6 ? undefined : _0x8761c6.toString(), {
            'align': "right"
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0x1, 0x0);
          if (_0x1d0e6c.Core.SurvivedSeconds >= 0x708) {
            this.survivedTime.value.setTint(0xffff00);
          }
          var _0x41de91 = _0x34bb1a.PixelScale;
          var _0x2ecc34 = 0x10 * _0x41de91;
          for (let _0xb5a0c0 = 0x0; _0xb5a0c0 < _0x1d0e6c.Core.Weapons.length; _0xb5a0c0++) {
            const _0x5c2824 = _0x1d0e6c.Core.Weapons[_0xb5a0c0];
            var _0x155dd8 = _0x14b553[_0x5c2824.bulletType][0x0];
            var _0x4ee608 = _0x5c2824.level >= _0x14b553[_0x5c2824.bulletType].length;
            var _0x15f7a3 = this.TopLeft.x + 0x20 + 0xc + _0x2ecc34 * (_0xb5a0c0 % 0xc) + _0xb5a0c0 % 0xc * 0xc;
            var _0xd3ce02 = this.TopLeft.y + 0xc0 + 0xc + 0x2 * _0x2ecc34 * Math.floor(_0xb5a0c0 / 0xc) + 0xc * _0x41de91 * Math.floor(_0xb5a0c0 / 0xc);
            this.add.image(_0x15f7a3, _0xd3ce02, _0x155dd8.texture, _0x155dd8.frameName).setScale(_0x41de91).setOrigin(0.5, 0x0);
            this.add.text(_0x15f7a3, _0xd3ce02 + _0x2ecc34, '' + _0x5c2824.level, {}).setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0).setTint(_0x4ee608 ? 0xffff00 : 0xffffff);
          }
          const _0x25cbc6 = _0x146df3.GetNewAchievementsEarnedOnThisRun();
          for (let _0xed7ac3 = 0x0; _0xed7ac3 < _0x25cbc6.length; _0xed7ac3++) {
            const _0xe15c0f = _0x25cbc6[_0xed7ac3];
            (_0xefbb11 = new _0x11e68f()).dataKey = _0xe15c0f;
            _0xefbb11.dataType = 'Achievement';
            this.achievements.push(_0xefbb11);
            if (_0xfe7efc) {
              _0xfe7efc.send("activateAchievement", _0xe15c0f.toString());
            }
          }
          var _0xefbb11;
          if (this.achievements.length > 0x0) {
            this.achievementsPopup = new _0x1caabc(this, 0x0, 0x0);
            this.achievementsPopup.setPosition(0.5 * this.renderer.width - 0.5 * this.achievementsPopup.displayWidth, 0.5 * this.renderer.height + 0.5 * this.background.displayHeight - this.achievementsPopup.height - 0x18);
            this.add.existing(this.achievementsPopup);
            const _0x223441 = this.achievements.length;
            var _0x3a5e53 = 0x0;
            this.achievementsPopup.AssignData(this.achievements[0x0].dataKey, this.achievements[0x0].dataType, _0x223441 > 0x1 ? '1/' + _0x223441 : '');
            this.achievementsPopup.Show();
            if (_0x223441 > 0x1) {
              this.time.addEvent({
                'delay': 0x1388,
                'callback': () => {
                  this.achievementsPopup.Hide();
                  this.time.addEvent({
                    'delay': 0x1f4,
                    'callback': () => {
                      _0x3a5e53++;
                      this.achievementsPopup.AssignData(this.achievements[_0x3a5e53 % _0x223441].dataKey, this.achievements[_0x3a5e53 % _0x223441].dataType, 0x1 + _0x3a5e53 % _0x223441 + '/' + _0x223441);
                      this.achievementsPopup.Show();
                    }
                  });
                },
                'repeat': -0x1
              });
            }
          }
          const _0x225d6a = _0x3dbb73.centerX;
          const _0x508831 = _0x3dbb73.height;
          this.QuitButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x225d6a,
            'y': _0x508831 - 0xc,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5, 0x1);
          this.add.existing(this.QuitButton);
          this.QuitText = new Phaser.GameObjects.Text(this, this.QuitButton.x, this.QuitButton.y - 0.5 * this.QuitButton.displayHeight, "DONE", {}).setOrigin(0.5, 0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.add.existing(this.QuitText);
          _0x1d0e6c.Core.PlayerOptions.Save();
          this.EnableButtons();
        }
        ['EnableButtons']() {
          this.QuitButton.setInteractive();
          this.QuitButton.on('pointerdown', () => {
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
            _0x1d0e6c.Core.SceneManager.StartFromPostGame();
          });
          this.MakeUIGrid();
        }
        ["MakeUIGrid"]() {
          let _0x594cbc = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x594cbc.MakeUIGrid(0x1, 0x1, false);
          _0x594cbc.UI_grid.SetContents(0x0, 0x0, this.QuitButton);
          _0x594cbc.ToggleCursorsVisibility(true);
          _0x594cbc.UI_grid.SelectGameObject(this.QuitButton);
          _0x594cbc.UI_selected = this.QuitButton;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x594cbc);
          _0x594cbc.OnCancelCallback = () => {};
        }
        ["HideQuitButton"]() {
          this.tweens.add({
            'targets': [this.QuitButton, this.QuitText],
            'alpha': 0x0,
            'scale': 0x0,
            'duration': 0x64,
            'ease': "Linear"
          });
          this.QuitButton.removeInteractive();
        }
        ["OnIntroEnded"]() {
          this.EnableButtons();
        }
        ["update"]() {}
      }
      class _0x225b45 extends Phaser.GameObjects.Container {
        constructor(_0xd7b5bb, _0x4dfaca, _0x525d6f, _0x4ca9fa) {
          super(_0xd7b5bb, _0x4dfaca, _0x525d6f);
          this.power = _0x340ca6.ReachLV5;
          this.power = _0x4ca9fa;
          this.setScale(_0x34bb1a.PixelScale);
          this.myCheckbox = new Phaser.GameObjects.Image(this.scene, 0x20, 0x20, 'UI', "menu_checkbox_24_bg.png").setOrigin(0.5).setScale(_0x34bb1a.PixelScale);
          this.myTick = new Phaser.GameObjects.Image(this.scene, 0x20, 0x20, 'UI', "menu_checkbox_24_checkmark.png").setOrigin(0.5).setScale(_0x34bb1a.PixelScale);
          this.myDesc = new Phaser.GameObjects.Text(this.scene, 0x36, 0x20, "Description", {}).setOrigin(0x0, 0.5).setWordWrapWidth(0x168).setScale(_0x34bb1a.PixelScale);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x1b0, 0x20, 'UI', "frameB.png").setOrigin(0.5);
          this.myIcon = new Phaser.GameObjects.Image(this.scene, 0x1b0, 0x20, 'items', '').setOrigin(0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.myInteractable = new Phaser.GameObjects.Image(this.scene, 0xa, 0x10, 'UI', "blackDot.png").setOrigin(0x0).setScale(0x1a4, 0x20).setAlpha(0.001);
          this.AssignData(this.power);
          this.add([this.myInteractable, this.myCheckbox, this.myTick, this.myDesc, this.myIconBG, this.myIcon]);
        }
        ["AssignData"](_0x31a12c) {
          this.power = _0x31a12c;
          var _0x55a8ed = _0x3fbaa9[this.power];
          this.myDesc.text = _0x55a8ed.description;
          this.myTick.setVisible(_0x55a8ed.achieved);
          if (_0x55a8ed.weaponToUnlock) {
            var _0x178881 = _0x14b553[_0x55a8ed.weaponToUnlock][0x0];
            this.myIcon.setTexture(_0x178881.texture, _0x178881.frameName);
            this.myIconBG.setVisible(false);
          }
          if (_0x55a8ed.characterToUnlock) {
            let _0x31d769 = _0x4774f8[_0x55a8ed.characterToUnlock][0x0];
            let _0x526130 = _0x31d769.portraitName ? _0x31d769.portraitName : 'QuestionMark.png';
            this.myIcon.setTexture('UI', _0x526130);
            this.myIconBG.setVisible(false);
          }
          if (_0x55a8ed.stageToUnlock) {
            let _0x45ad08 = _0x26e87a[_0x55a8ed.stageToUnlock][0x0];
            let _0x4e1225 = _0x45ad08.frameName ? _0x45ad08.frameName : "QuestionMark.png";
            this.myIcon.setTexture('UI', _0x4e1225);
            this.myIconBG.setVisible(false);
          }
          if (_0x55a8ed.hyperToUnlock) {
            let _0x47310e = _0x26e87a[_0x55a8ed.hyperToUnlock][0x0];
            let _0x31096b = _0x47310e.frameName ? _0x47310e.frameName : "QuestionMark.png";
            this.myIcon.setTexture('UI', _0x31096b);
            this.myIconBG.setVisible(false);
          }
        }
      }
      class _0x5aa38f extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.CollectionAchievementsScene
          });
          this.TopLeft = new Phaser.Math.Vector2(0x0, 0x0);
          this.Highlighted = _0x340ca6.ReachLV5;
          this.scrollTopY = 0x40;
          this.scrollHeight = 0x0;
          this.Columns = 0x1;
          this.Rows = 0x0;
          this.screenYcoordToPositionScrollableContainer = 0x0;
          this.screenYcoordToCutScrollableContainer = 0x0;
          this.alphaMod = -0.02;
        }
        ["preload"]() {}
        ["create"]() {
          var _0x4d01da = _0x3dbb73.width;
          var _0x334933 = _0x3dbb73.height - 0x40;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x4d01da,
            'height': _0x334933
          });
          this.background.setPosition(_0x3dbb73.centerX, _0x334933);
          this.background.setOrigin(0.5, 0x1);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.scrollTopY = 0x40;
          this.scrollHeight = _0x334933 - 0xc8;
          this.ScrollBar = new _0x35cd95.NineSlice(this, _0x564740.Scrollbar, {
            'x': 0x0 + _0x4d01da - 0x20,
            'y': this.scrollTopY,
            'width': 0x8,
            'height': this.scrollHeight
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0);
          this.add.existing(this.ScrollBar);
          this.ScrollCursor = this.add.image(0x0 + _0x4d01da - 0x20, this.scrollTopY, 'UI', "menu_slider_button_strip3.png").setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0);
          var _0xb6de68 = 0x0;
          var _0x391f92 = 0x0;
          for (const _0x300631 in _0x3fbaa9) {
            _0xb6de68 += _0x3fbaa9[_0x300631].achieved ? 0x1 : 0x0;
            _0x391f92++;
          }
          this.header = this.add.text(_0x3dbb73.centerX, 0x21, "Completed: " + _0xb6de68 + " of " + _0x391f92, {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.panels = this.add.group();
          for (const _0x5a6ca3 in _0x3fbaa9) if (!_0x3fbaa9[_0x5a6ca3].hidden) {
            var _0x26946c = new _0x225b45(this, 0x0, 0x0, _0x5a6ca3);
            _0x26946c.myInteractable.setInteractive();
            _0x26946c.myInteractable.on("pointerdown", () => {
              this.OnPanelClicked(_0x5a6ca3);
            }, this);
            this.panels.add(_0x26946c);
          }
          this.Rows = this.panels.children.entries.length;
          var _0x568a64 = this.panels.getChildren();
          for (let _0x7ec503 = 0x0; _0x7ec503 < _0x568a64.length; _0x7ec503++) {
            const _0x1dff34 = _0x568a64[_0x7ec503];
            _0x1dff34.x = 0x0;
            _0x1dff34.y = 0x2d + 0x20 * _0x7ec503 + 0xc * _0x7ec503;
          }
          var _0x184b48 = 0x3c * (0x2 + _0x568a64.length);
          this.screenYcoordToPositionScrollableContainer = this.renderer.height - 0x80 - 0x68;
          this.screenYcoordToCutScrollableContainer = 0x7c + 0.5 * this.screenYcoordToPositionScrollableContainer;
          const _0x4f63e0 = new Phaser.GameObjects.Graphics(this, {
            'x': 0x0,
            'y': 0x0
          });
          _0x4f63e0.lineStyle(0x1, 0xffffff, 0.9);
          _0x4f63e0.fillStyle(0xffff, 0.2);
          _0x4f63e0.fillRect(0x0, 0x7c, _0x3dbb73.width, this.renderer.height - 0x80 - 0x68);
          var _0x126bf9 = _0x4f63e0.createGeometryMask();
          this.highlight = new _0x35cd95.NineSlice(this, _0x564740.SelectionHighlight, {
            'x': 0x0,
            'y': 0x0,
            'width': 0x1b8,
            'height': 0x24
          });
          this.highlight.setOrigin(0x0, 0x0).setScale(_0x34bb1a.PixelScale).setDepth(0x3e8);
          this.add.existing(this.highlight);
          this.sc = new _0x5ac55d(this, _0x3dbb73.centerX, _0x4f63e0.y + 0.5 * (this.renderer.height - 0x80 - 0x68));
          this.sc.setMask(_0x126bf9);
          this.confirmationPanel = new _0x1caabc(this, 10, _0x334933 - 0xa).setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.confirmationPanel);
          _0x512871.CalculateAndSetContainerSize(this.confirmationPanel);
          this.confirmationPanel.y -= this.confirmationPanel.displayHeight;
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          this.scene.bringToTop(this.UI_topBar);
          var _0x2ed70b = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x2ed70b);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
          this.SceneContainer.y = this.renderer.height - this.SceneContainer.displayHeight;
          this.sc.y = 0.5 * _0x184b48;
          this.sc.SetSize(_0x3dbb73.width, _0x184b48);
          this.sc.AddChildren(_0x568a64);
          this.sc.AddChildren(this.highlight);
          this.HandleInput();
          this.MakeUIGrid();
          this.OnPanelClicked(this.Highlighted);
        }
        ["HandleInput"]() {
          this.input.mouse.disableContextMenu();
          this.input.on("pointerup", _0x20e53a => {
            this.alphaMod = -0.1;
          });
          this.input.on('pointerdown', _0x50e6e4 => {
            this.alphaMod = 0.1;
          });
          this.input.on('wheel', (_0x2ba4d5, _0x59854a, _0x5a6411, _0x3ec0d6, _0xad4462) => {
            this.sc.ScrollBy(0.4 * -_0x3ec0d6);
            this.alphaMod = 0.1;
          });
        }
        ["update"]() {
          var _0x1d677a;
          let _0x4b9206 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          if (_0x4b9206.UI_selected != _0x4b9206.UI_grid.previousGameObject) {
            if (null === (_0x1d677a = _0x4b9206.UI_selected) || undefined === _0x1d677a ? undefined : _0x1d677a.power) {
              this.OnPanelClicked(_0x4b9206.UI_selected.power);
              _0x4b9206.ToggleCursorsVisibility(false);
              this.highlight.setVisible(true);
              this.correctScrollableContainerPosition(_0x4b9206.UI_selected);
              this.alphaMod = 0x1;
            } else {
              _0x4b9206.ToggleCursorsVisibility(true);
              this.highlight.setVisible(false);
            }
          }
          this.ScrollCursor.alpha += this.alphaMod;
          this.ScrollBar.alpha += this.alphaMod;
          this.ScrollCursor.setPosition(this.ScrollCursor.x, this.scrollTopY + this.sc.ReverseValue * (this.scrollHeight * _0x34bb1a.PixelScale - this.ScrollCursor.displayHeight));
        }
        ["correctScrollableContainerPosition"](_0x53fb3b) {
          if (this.sc.y + this.highlight.y > this.renderer.height - 0x80 - 0x68 + 0x2c) {
            for (this.sc.y -= 0x2c; this.sc.y + this.highlight.y > this.renderer.height - 0x80 - 0x68 + 0x2c;) {
              this.sc.y -= 0x2c;
            }
          } else {
            if (this.sc.y + this.highlight.y < 0x2c) {
              for (this.sc.y += 0x2c; this.sc.y + this.highlight.y < 0x2c;) {
                this.sc.y += 0x2c;
              }
            }
          }
        }
        ["MakeUIGrid"]() {
          let _0x1a9185 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          this.panels.children.entries.length;
          _0x1a9185.MakeUIGrid(this.Columns, this.Rows + 0x1, true);
          for (let _0x32d39a = 0x0; _0x32d39a < this.Columns; _0x32d39a++) {
            _0x1a9185.UI_grid.SetContents(_0x32d39a, 0x0, this.UI_topBar.BackButton);
          }
          for (let _0xc0f7e7 = 0x0; _0xc0f7e7 < this.panels.children.entries.length; _0xc0f7e7++) {
            const _0x4615fd = this.panels.children.entries[_0xc0f7e7];
            _0x1a9185.UI_grid.SetContents(_0xc0f7e7 % this.Columns, 0x1 + Math.floor(_0xc0f7e7 / this.Columns), _0x4615fd);
          }
          _0x1a9185.UI_grid.SelectAt(0x0, 0x0);
          _0x1a9185.UI_selected = this.UI_topBar.BackButton;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x1a9185);
          _0x1a9185.OnCancelCallback = () => {
            var _0x5abfce;
            var _0x4f0492;
            var _0x17b6b5;
            if (!(null === (_0x17b6b5 = null === (_0x4f0492 = null === (_0x5abfce = this.UI_topBar.BackButton) || undefined === _0x5abfce ? undefined : _0x5abfce._events) || undefined === _0x4f0492 ? undefined : _0x4f0492.pointerdown) || undefined === _0x17b6b5)) {
              _0x17b6b5.fn();
            }
          };
        }
        ["OnSelectionChange"]() {
          var _0x391940 = this.panels.getChildren().find(_0x5521a4 => _0x5521a4.power === this.Highlighted);
          if (_0x391940) {
            this.highlight.setPosition(_0x391940.x + 0xe, _0x391940.y + 0xe);
            let _0x1f172f = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
            _0x1f172f.UI_grid.SelectGameObject(_0x391940);
            _0x1f172f.UI_selected = _0x391940;
          }
        }
        ["OnPanelClicked"](_0xc3e390) {
          this.Highlighted = _0xc3e390;
          this.confirmationPanel.AssignAchievement(this.Highlighted);
          this.OnSelectionChange();
        }
      }
      class _0xb660ea extends Phaser.GameObjects.Container {
        constructor(_0x3af32b, _0x18eee1, _0x4c338a, _0x573198) {
          super(_0x3af32b, _0x18eee1, _0x4c338a);
          this.power = _0x23a5f2.FOREST;
          this.power = _0x573198;
          this.setScale(_0x34bb1a.PixelScale);
          this.myIconBG = new Phaser.GameObjects.Image(this.scene, 0x10, 0x10, 'UI', "whiteDot.png").setOrigin(0x0).setScale(0x1cc, 0x60).setAlpha(0.1).setTint(0xffff00).setVisible(false);
          this.myInteractable = new Phaser.GameObjects.Image(this.scene, 0x10, 0x10, 'UI', "stage_forest.png").setOrigin(0x0).setScale(_0x34bb1a.PixelScale);
          this.myName = new Phaser.GameObjects.Text(this.scene, 0x5e, 0x1a, "Name", {
            'color': "yellow"
          }).setOrigin(0.5, 0x0).setWordWrapWidth(0x12c).setScale(_0x34bb1a.PixelScale);
          this.myDesc = new Phaser.GameObjects.Text(this.scene, 0xb4, 0x1a, 'Description', {}).setOrigin(0x0, 0x0).setWordWrapWidth(0x12c).setScale(_0x34bb1a.PixelScale);
          this.AssignData(this.power);
          this.add([this.myIconBG, this.myInteractable, this.myName, this.myDesc]);
          this._events = {};
          this._events.pointerdown = {};
          this._events.pointerdown.fn = () => {
            this.OnClick();
          };
        }
        ['OnClick']() {}
        ["ToggleHighlight"](_0x24249d) {
          this.myIconBG.setVisible(_0x24249d);
        }
        ["AssignData"](_0x463b86) {
          this.power = _0x463b86;
          var _0xffbd17 = _0x26e87a[this.power][0x0];
          this.myName.text = _0xffbd17.unlocked ? _0xffbd17.stageName : "???";
          this.myDesc.text = _0xffbd17.unlocked ? _0xffbd17.description : "Not yet discovered.";
          this.myInteractable.setTexture(_0xffbd17.uiTexture, _0xffbd17.uiFrame);
        }
      }
      class _0x66eae1 extends Phaser.GameObjects.Container {
        constructor(_0x2c942b, _0x270a6e, _0x50d155) {
          super(_0x2c942b, _0x270a6e, _0x50d155);
          this.stageType = _0x23a5f2.FOREST;
          this.setScale(_0x34bb1a.PixelScale);
          var _0x49d9ad = {
            'x': 0x0,
            'y': 0x0,
            'width': 491.52,
            'height': 0x68
          };
          this.Background = new _0x35cd95.NineSlice(this.scene, _0x564740.PanelBackground, _0x49d9ad);
          this.myName = new Phaser.GameObjects.Text(this.scene, 245.76, 0xc, "Name", {}).setScale(0x1).setOrigin(0.5, 0x0);
          this.myHyper = new Phaser.GameObjects.Text(this.scene, 0x38, 0x16, "Hyper?", {}).setScale(0x1).setOrigin(0.5, 0x0);
          this.myDesc = new Phaser.GameObjects.Text(this.scene, 245.76, 0x20, "Description", {}).setScale(0x1).setWordWrapWidth(0x12c).setOrigin(0.5, 0x0).setTint(0xffff00);
          this.myButton1 = new _0x35cd95.NineSlice(this.scene, _0x564740.GreenButton, {
            'x': 0x1ae,
            'y': 0x44,
            'width': 0x30,
            'height': 0x1e
          }).setScale(0x2).setOrigin(0.5);
          this.myButton1Text = new Phaser.GameObjects.Text(this.scene, this.myButton1.x, this.myButton1.y, "START", {}).setScale(0x1).setOrigin(0.5);
          this.Hyper_Box = new Phaser.GameObjects.Image(this.scene, 0x20, 0x40, 'UI', "menu_checkbox_24_bg.png").setScale(_0x34bb1a.PixelScale).setOrigin(0x0, 0.5).setScale(0x2);
          this.Hyper_Toggle = new Phaser.GameObjects.Image(this.scene, 0x20, 0x40, 'UI', "yes16.png").setScale(_0x34bb1a.PixelScale).setOrigin(0x0, 0.5).setScale(0x2);
          this.AssignStage(this.stageType);
          this.add([this.Background, this.myName, this.myDesc, this.myButton1, this.myButton1Text, this.myHyper, this.Hyper_Box, this.Hyper_Toggle]);
        }
        ["AssignStage"](_0x2099e5) {
          this.stageType = _0x2099e5;
          var _0xa1892e = _0x26e87a[this.stageType][0x0];
          this.Background.setTint(0xffffff);
          this.myName.text = _0xa1892e.unlocked ? _0xa1892e.stageName : '???';
          this.myDesc.setText(_0xa1892e.unlocked ? _0xa1892e.tips : '');
          this.myButton1.setVisible(_0xa1892e.unlocked);
          this.myButton1Text.setVisible(_0xa1892e.unlocked);
          this.myHyper.setVisible(_0xa1892e.hyper.unlocked);
          this.Hyper_Box.setVisible(_0xa1892e.hyper.unlocked);
          this.Hyper_Toggle.setVisible(_0xa1892e.hyper.unlocked);
          if (_0xa1892e.unlocked) {
            this.myDesc.setText(_0x1d0e6c.Core.PlayerOptions.SelectedHyper ? _0xa1892e.hyper.tips : _0xa1892e.tips);
            this.Hyper_Toggle.setFrame(_0x1d0e6c.Core.PlayerOptions.SelectedHyper ? "yes16.png" : "no16.png");
            if (!_0xa1892e.hyper.unlocked) {
              _0x1d0e6c.Core.PlayerOptions.SelectedHyper = false;
            }
            if (_0xa1892e.hyper.unlocked) {
              this.Hyper_Box.removeAllListeners();
              this.Hyper_Box.setInteractive();
              this.Hyper_Box.on("pointerdown", () => {
                _0x1d0e6c.Core.PlayerOptions.SelectedHyper = !_0x1d0e6c.Core.PlayerOptions.SelectedHyper;
                _0x1d0e6c.Sound.PlaySound(_0x1d0e6c.Core.PlayerOptions.SelectedHyper ? _0x52c10f.ClickIn : _0x52c10f.ClickOut);
                this.Hyper_Toggle.setFrame(_0x1d0e6c.Core.PlayerOptions.SelectedHyper ? "yes16.png" : "no16.png");
                this.myDesc.setText(_0x1d0e6c.Core.PlayerOptions.SelectedHyper ? _0xa1892e.hyper.tips : _0xa1892e.tips);
              });
            }
          }
        }
        ["TurnToStart"]() {
          this.Background.setTint(0xffff00);
        }
        ["TurnToSelection"]() {
          this.AssignStage(this.stageType);
        }
      }
      class _0x4bdbc4 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.StageSelectionScene
          });
          this.TopLeft = new Phaser.Math.Vector2(0x0, 0x0);
          this.Highlighted = _0x23a5f2.FOREST;
          this.scrollTopY = 0x40;
          this.scrollHeight = 0x0;
          this.isStartingGameMode = false;
          this.isReadyToStart = false;
          this.alphaMod = -0.02;
        }
        ['preload']() {}
        ['create']() {
          this.isStartingGameMode = false;
          var _0x2ca978 = _0x3dbb73.width;
          var _0x37fb97 = _0x3dbb73.height - 0x40;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x2ca978,
            'height': _0x37fb97
          });
          this.background.setPosition(_0x3dbb73.centerX, _0x37fb97);
          this.background.setOrigin(0.5, 0x1);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.scrollTopY = 0x40;
          this.scrollHeight = _0x37fb97 - 0xc8;
          this.ScrollBar = new _0x35cd95.NineSlice(this, _0x564740.Scrollbar, {
            'x': 0x0 + _0x2ca978 - 0x20,
            'y': this.scrollTopY,
            'width': 0x8,
            'height': this.scrollHeight
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0);
          this.add.existing(this.ScrollBar);
          this.ScrollCursor = this.add.image(0x0 + _0x2ca978 - 0x20, this.scrollTopY, 'UI', "menu_slider_button_strip3.png").setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x0);
          this.header = this.add.text(_0x3dbb73.centerX, 0x21, "Stage Selection", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.panels = this.add.group();
          for (const _0x5907b4 in _0x26e87a) if (!_0x26e87a[_0x5907b4][0x0].hidden) {
            var _0x47d08e = new _0xb660ea(this, 0x0, 0x0, _0x5907b4);
            _0x47d08e.myInteractable.setInteractive();
            _0x47d08e.myInteractable.on("pointerdown", () => {
              this.OnPanelClicked(_0x5907b4);
            }, this);
            _0x47d08e.OnClick = () => {
              this.OnConfirmClicked();
            };
            this.panels.add(_0x47d08e);
          }
          var _0x59073c = this.panels.getChildren();
          for (let _0x2f513 = 0x0; _0x2f513 < _0x59073c.length; _0x2f513++) {
            const _0x355b4b = _0x59073c[_0x2f513];
            _0x355b4b.x = 0x0;
            _0x355b4b.y = 0x2d + 0x60 * _0x2f513 + 0xc * _0x2f513;
          }
          var _0x426d6f = 0x3c * (0x2 + _0x59073c.length);
          this.screenYcoordToPositionScrollableContainer = this.renderer.height - 0x80 - 0x68;
          this.screenYcoordToCutScrollableContainer = 0x7c + 0.5 * this.screenYcoordToPositionScrollableContainer;
          const _0x351cca = new Phaser.GameObjects.Graphics(this, {
            'x': 0x0,
            'y': 0x0
          });
          _0x351cca.lineStyle(0x1, 0xffffff, 0.9);
          _0x351cca.fillStyle(0xffff, 0.2);
          _0x351cca.fillRect(0x0, 0x7c, _0x3dbb73.width, this.renderer.height - 0x80 - 0x68);
          var _0x3bd2b2 = _0x351cca.createGeometryMask();
          this.highlight = new _0x35cd95.NineSlice(this, _0x564740.SelectionHighlight, {
            'x': 0x0,
            'y': 0x0,
            'width': 0xa0,
            'height': 0x64
          });
          this.highlight.setOrigin(0x0, 0x0).setScale(_0x34bb1a.PixelScale).setDepth(0x3e8);
          this.add.existing(this.highlight);
          this.sc = new _0x5ac55d(this, _0x3dbb73.centerX, _0x351cca.y + 0.5 * (this.renderer.height - 0x80 - 0x68));
          this.sc.setMask(_0x3bd2b2);
          this.confirmationPanel = new _0x66eae1(this, 10, _0x37fb97 - 0xa).setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.confirmationPanel);
          this.confirmationPanel.myButton1.setInteractive();
          this.confirmationPanel.myButton1.on("pointerdown", () => {
            this.OnConfirmClicked();
          }, this);
          _0x512871.CalculateAndSetContainerSize(this.confirmationPanel);
          this.confirmationPanel.y -= this.confirmationPanel.displayHeight;
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          this.scene.bringToTop(this.UI_topBar);
          var _0x3f6b92 = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x3f6b92);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
          this.SceneContainer.y = this.renderer.height - this.SceneContainer.displayHeight;
          this.sc.y = 0.5 * _0x426d6f;
          this.sc.SetSize(_0x3dbb73.width, _0x426d6f);
          this.sc.AddChildren(_0x59073c);
          this.sc.AddChildren(this.highlight);
          this.HandleInput();
          this.MakeUIGrid_ScrollView();
          this.confirmationPanel.AssignStage(this.Highlighted);
          this.isReadyToStart = false;
          this.OnSelectionChange();
        }
        ['HandleInput']() {
          this.input.mouse.disableContextMenu();
          this.input.on("pointerup", _0x208e1d => {
            this.alphaMod = -0.1;
          });
          this.input.on("pointerdown", _0x4d96e2 => {
            this.alphaMod = 0.1;
          });
        }
        ["update"]() {
          var _0x4cbb55;
          var _0x3f435e;
          if (this.isStartingGameMode) {
            return;
          }
          let _0x2f18e3 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          if (_0x2f18e3.UI_selected != _0x2f18e3.UI_grid.previousGameObject) {
            if (null === (_0x4cbb55 = _0x2f18e3.UI_selected) || undefined === _0x4cbb55 ? undefined : _0x4cbb55.power) {
              this.Highlighted = null === (_0x3f435e = _0x2f18e3.UI_selected) || undefined === _0x3f435e ? undefined : _0x3f435e.power;
              this.OnSelectionChange();
              this.confirmationPanel.AssignStage(this.Highlighted);
              _0x2f18e3.ToggleCursorsVisibility(false);
              this.highlight.setVisible(true);
              this.correctScrollableContainerPosition(_0x2f18e3.UI_selected);
              this.alphaMod = 0x1;
            } else {
              _0x2f18e3.ToggleCursorsVisibility(true);
              this.highlight.setVisible(false);
            }
          }
          this.ScrollCursor.alpha += this.alphaMod;
          this.ScrollBar.alpha += this.alphaMod;
          this.ScrollCursor.setPosition(this.ScrollCursor.x, this.scrollTopY + this.sc.ReverseValue * (this.scrollHeight * _0x34bb1a.PixelScale - this.ScrollCursor.displayHeight));
        }
        ["correctScrollableContainerPosition"](_0x2cbcae) {
          if (this.sc.y + this.highlight.y > this.renderer.height - 0x80 - 0x68) {
            for (this.sc.y -= 0x6c; this.sc.y + this.highlight.y > this.renderer.height - 0x80 - 0x68;) {
              this.sc.y -= 0x6c;
            }
          } else {
            if (this.sc.y + this.highlight.y < 0x0) {
              for (this.sc.y += 0x6c; this.sc.y + this.highlight.y < 0x0;) {
                this.sc.y += 0x6c;
              }
            }
          }
        }
        ["OnSelectionChange"]() {
          var _0x574447;
          var _0x48b157 = this.panels.getChildren();
          _0x48b157.forEach(_0x42a6f9 => _0x42a6f9.ToggleHighlight(false));
          var _0x400471 = _0x48b157.find(_0x157809 => _0x157809.power === this.Highlighted);
          if (_0x400471) {
            this.highlight.setPosition(_0x400471.x + 0xe, _0x400471.y + 0xe);
            _0x400471.ToggleHighlight(true);
          }
          this.HighlightedPanel = _0x400471;
          let _0x223167 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          if (!(null === (_0x574447 = _0x223167.UI_grid) || undefined === _0x574447)) {
            _0x574447.SelectGameObject(_0x400471);
          }
          _0x223167.UI_selected = _0x400471;
          this.ToggleButtonInUIGrid(_0x26e87a[this.Highlighted][0x0].unlocked);
          this.ToggleHyperInUIGrid(_0x26e87a[this.Highlighted][0x0].hyper.unlocked);
          this.isReadyToStart = false;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x223167);
        }
        ["OnPanelClicked"](_0x2fde4d) {
          if (!this.isStartingGameMode) {
            this.Highlighted = _0x2fde4d;
            this.confirmationPanel.AssignStage(this.Highlighted);
            this.isReadyToStart = false;
            this.OnSelectionChange();
          }
        }
        ["OnConfirmClicked"]() {
          if (_0x26e87a[this.Highlighted][0x0].unlocked) {
            if (this.isReadyToStart) {
              if (this.isReadyToStart) {
                _0x1d0e6c.Core.SceneManager.UI_overlayScene.DestroyGrid();
                _0x1d0e6c.Core.SceneManager.StartFromStageSelection();
                _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn, {
                  'detune': 0xfa
                });
                this.isStartingGameMode = true;
              }
            } else {
              _0x1d0e6c.Core.PlayerOptions.SelectedStage = this.Highlighted;
              this.OnSelectionChange();
              this.confirmationPanel.TurnToStart();
              this.isReadyToStart = true;
              _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickIn, {
                'detune': 0xe1
              });
              this.gridScene.UI_grid.SelectAt(0x1, this.gridBottom);
              this.gridScene.UI_selected = this.confirmationPanel.myButton1;
            }
          } else {
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
          }
        }
        ["MakeUIGrid_ScrollView"]() {
          this.gridScene = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          let _0x1fbb66 = this.panels.children.entries.length;
          this.gridBottom = _0x1fbb66 + 0x1;
          this.gridScene.MakeUIGrid(0x2, _0x1fbb66 + 0x2, false);
          this.gridScene.UI_grid.SetContents(0x1, 0x0, this.UI_topBar.BackButton);
          let _0x4139ea = 0x0;
          for (_0x4139ea = 0x0; _0x4139ea < this.panels.children.entries.length; _0x4139ea++) {
            const _0x407b85 = this.panels.children.entries[_0x4139ea];
            this.gridScene.UI_grid.SetContents(0x1, 0x1 + _0x4139ea, _0x407b85);
          }
          this.gridScene.UI_grid.SetContents(0x0, this.gridBottom, this.confirmationPanel.Hyper_Box);
          this.gridScene.UI_grid.SetContents(0x1, this.gridBottom, this.confirmationPanel.myButton1);
          this.gridScene.ToggleCursorsVisibility(false);
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(this.gridScene);
          this.gridScene.OnCancelCallback = () => {
            var _0x1d6854;
            var _0x40917e;
            var _0x26b16d;
            if (!(null === (_0x26b16d = null === (_0x40917e = null === (_0x1d6854 = this.UI_topBar.BackButton) || undefined === _0x1d6854 ? undefined : _0x1d6854._events) || undefined === _0x40917e ? undefined : _0x40917e.pointerdown) || undefined === _0x26b16d)) {
              _0x26b16d.fn();
            }
          };
        }
        ['ToggleButtonInUIGrid'](_0xcf96) {
          if (_0xcf96) {
            this.gridScene.UI_grid.SetContents(0x1, this.gridBottom, this.confirmationPanel.myButton1);
          } else {
            this.gridScene.UI_grid.SetContents(0x1, this.gridBottom, null);
          }
        }
        ["ToggleHyperInUIGrid"](_0x410965) {
          if (_0x410965) {
            this.gridScene.UI_grid.SetContents(0x0, this.gridBottom, this.confirmationPanel.Hyper_Box);
          } else {
            this.gridScene.UI_grid.SetContents(0x0, this.gridBottom, null);
          }
        }
      }
      class _0x1458bc extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.DebugScene
          });
          this.buttons = {};
        }
        ['preload']() {
          _0x1d0e6c.ApplyMenuResolution();
        }
        ['create']() {
          return void _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
          const _0x53672c = _0x3dbb73.centerX;
          const _0x10eb7e = _0x3dbb73.height;
          var _0x5c331f = _0x3dbb73.width;
          var _0x28d3bb = _0x3dbb73.height;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x5c331f,
            'height': _0x28d3bb
          });
          this.background.setPosition(_0x53672c, 0x0);
          this.background.setOrigin(0.5, 0x0);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.header = this.add.text(_0x53672c, 0x21, "Cheats", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.ResumeButton = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x53672c,
            'y': _0x10eb7e - 0x30,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5, 0x1);
          this.add.existing(this.ResumeButton);
          this.ResumeText = new Phaser.GameObjects.Text(this, this.ResumeButton.x, this.ResumeButton.y - 0.5 * this.ResumeButton.displayHeight, "RESUME", {}).setOrigin(0.5, 0.5).setScale(0x2 * _0x34bb1a.PixelScale);
          this.add.existing(this.ResumeText);
          var _0x5c906b = 90;
          var _0x5c4c5c = -0x1;
          this.buttons["LEVEL UP"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "LEVEL UP", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.Player.xp += _0x1d0e6c.Core.LevelUpFactory.XpRequiredToLevelUp - _0x1d0e6c.Core.LevelUpFactory.PreviousXpRequiredToLevelUp;
            _0x1d0e6c.Core.CheckForLevelUp();
          });
          this.buttons["MAX ENEMIES"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "MAX ENEMIES", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.debug_SpawnEnemies();
          });
          this.buttons["NEXT MINUTE"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "NEXT MINUTE", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.debug_NextMinute();
          });
          this.buttons["KILL ALL"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "KILL ALL", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.RosaryDamage();
          });
          _0x5c4c5c = -0x1;
          _0x5c906b = _0x53672c;
          this.buttons.INVULNERABLE = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "INVULNERABLE", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.Player.SetInvulForMilliSeconds(Number.MAX_SAFE_INTEGER);
          });
          this.buttons["RECOVER HP"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "RECOVER HP", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.Player.RecoverHp(0x270f);
          });
          this.buttons["GAME OVER"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "GAME OVER", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.Player.OnDeath();
          });
          _0x5c4c5c = -0x1;
          _0x5c906b = _0x3dbb73.right - 0x5a;
          this.buttons["TREASURE LV1"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "TREASURE LV1", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.debug_Treasure(0x1);
          });
          this.buttons["TREASURE LV2"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "TREASURE LV2", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.debug_Treasure(0x2);
          });
          this.buttons["TREASURE LV3"] = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, "TREASURE LV3", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.debug_Treasure(0x3);
          });
          this.buttons.VACUUM = this.MakeButton(_0x5c906b, 0x80 + 0x55 * ++_0x5c4c5c, 'VACUUM', () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
            _0x1d0e6c.Core.TurnOnVacuum();
          });
          this.time.addEvent({
            'delay': 0x1e,
            'callback': () => {
              this.EnableButtons();
              this.MakeUIGrid();
            }
          });
        }
        ["MakeUIGrid"]() {
          let _0x1a6476 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x1a6476.MakeUIGrid(0x3, 0x7, false);
          _0x1a6476.UI_grid.SetContents(0x0, 0x0, this.buttons["LEVEL UP"]);
          _0x1a6476.UI_grid.SetContents(0x0, 0x1, this.buttons["MAX ENEMIES"]);
          _0x1a6476.UI_grid.SetContents(0x0, 0x2, this.buttons["NEXT MINUTE"]);
          _0x1a6476.UI_grid.SetContents(0x0, 0x3, this.buttons["KILL ALL"]);
          _0x1a6476.UI_grid.SetContents(0x0, 0x4, this.ResumeButton);
          _0x1a6476.UI_grid.SetContents(0x1, 0x0, this.buttons.INVULNERABLE);
          _0x1a6476.UI_grid.SetContents(0x1, 0x1, this.buttons["RECOVER HP"]);
          _0x1a6476.UI_grid.SetContents(0x1, 0x2, this.buttons["GAME OVER"]);
          _0x1a6476.UI_grid.SetContents(0x2, 0x0, this.buttons["TREASURE LV1"]);
          _0x1a6476.UI_grid.SetContents(0x2, 0x1, this.buttons["TREASURE LV2"]);
          _0x1a6476.UI_grid.SetContents(0x2, 0x2, this.buttons["TREASURE LV3"]);
          _0x1a6476.UI_grid.SetContents(0x2, 0x3, this.buttons.VACUUM);
          _0x1a6476.ToggleCursorsVisibility(true);
          _0x1a6476.UI_grid.SelectGameObject(this.ResumeButton);
          _0x1a6476.UI_selected = this.ResumeButton;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x1a6476);
          _0x1a6476.OnCancelCallback = () => {
            var _0x266973;
            var _0x57adc4;
            var _0x200772;
            if (!(null === (_0x200772 = null === (_0x57adc4 = null === (_0x266973 = this.ResumeButton) || undefined === _0x266973 ? undefined : _0x266973._events) || undefined === _0x57adc4 ? undefined : _0x57adc4.pointerdown) || undefined === _0x200772)) {
              _0x200772.fn();
            }
          };
        }
        ["MakeButton"](_0x264ccc, _0x46d031, _0x1d5167, _0x3c69c5) {
          var _0x36eb0d = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x264ccc,
            'y': _0x46d031,
            'width': 0x80,
            'height': 0x40
          }).setScale(_0x34bb1a.PixelScale).setOrigin(0.5, 0x1).setInteractive();
          var _0x327823 = new Phaser.GameObjects.Text(this, _0x36eb0d.x, _0x36eb0d.y - 0.5 * _0x36eb0d.displayHeight, _0x1d5167, {}).setOrigin(0.5, 0.5).setScale(_0x34bb1a.PixelScale);
          this.add.existing(_0x36eb0d);
          this.add.existing(_0x327823);
          _0x36eb0d.on("pointerdown", () => {
            _0x3c69c5();
          });
          return _0x36eb0d;
        }
        ["EnableButtons"]() {
          this.ResumeButton.setInteractive();
          this.ResumeButton.on("pointerdown", () => {
            _0x1d0e6c.Core.SceneManager.ResumeFromDebug();
          });
        }
        ["update"]() {}
      }
      class _0x396021 {
        constructor(_0x5c050d, _0x49cc0c) {
          this.isLink = false;
          this.go = null;
          this.go = _0x5c050d;
          this.isLink = _0x49cc0c;
        }
      }
      class _0x426bcd extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.UI_overlayScene
          });
          this.inputDelay = 0xfa;
          this.timeDown = new Array();
        }
        ["preload"]() {
          this.UI_highlightL = null;
          this.UI_highlightR = null;
          this.UI_selected = null;
          this.EnterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
          this.SpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
          this.EscKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        }
        ["create"]() {
          this.input.gamepad.once("down", (_0x1dc7ab, _0x310270, _0x83daf8) => {
            this.gamepad = _0x1dc7ab;
            for (let _0x21d8cb = 0x0; _0x21d8cb < 0xa; _0x21d8cb++) {
              this.timeDown.push(-this.inputDelay);
            }
          });
          this.INPUT_cursors = this.input.keyboard.createCursorKeys();
          this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
          this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
          this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
          this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
          this.MakeHighlighters();
        }
        ['update'](_0x15c148, _0x485deb) {
          if (this.UI_grid) {
            this.updateCursors(_0x485deb);
            this.updateController(_0x485deb);
            this.HighlightButton();
          }
        }
        ['updateCursors'](_0x534064) {
          var _0x3b44d6;
          var _0xe8b032;
          var _0x4012f0;
          if (this.input.keyboard.checkDown(this.INPUT_cursors.left, this.inputDelay)) {
            this.UI_selected = this.UI_grid.GoLeft();
          } else if (this.input.keyboard.checkDown(this.INPUT_cursors.right, this.inputDelay)) {
            this.UI_selected = this.UI_grid.GoRight();
          } else if (this.input.keyboard.checkDown(this.aKey, this.inputDelay)) {
            this.UI_selected = this.UI_grid.GoLeft();
          } else if (this.input.keyboard.checkDown(this.dKey, this.inputDelay)) {
            this.UI_selected = this.UI_grid.GoRight();
          }
          if (this.input.keyboard.checkDown(this.INPUT_cursors.up, this.inputDelay)) {
            this.UI_selected = this.UI_grid.GoUp();
          } else if (this.input.keyboard.checkDown(this.INPUT_cursors.down, this.inputDelay)) {
            this.UI_selected = this.UI_grid.GoDown();
          } else if (this.input.keyboard.checkDown(this.wKey, this.inputDelay)) {
            this.UI_selected = this.UI_grid.GoUp();
          } else if (this.input.keyboard.checkDown(this.sKey, this.inputDelay)) {
            this.UI_selected = this.UI_grid.GoDown();
          }
          if (this.input.keyboard.checkDown(this.EnterKey, this.inputDelay) || this.input.keyboard.checkDown(this.SpaceKey, this.inputDelay)) {
            try {
              if (!(null === (_0x4012f0 = null === (_0xe8b032 = null === (_0x3b44d6 = this.UI_selected) || undefined === _0x3b44d6 ? undefined : _0x3b44d6._events) || undefined === _0xe8b032 ? undefined : _0xe8b032.pointerdown) || undefined === _0x4012f0)) {
                _0x4012f0.fn();
              }
            } catch (_0x246455) {
              console.log(_0x246455);
            }
          }
          if (this.input.keyboard.checkDown(this.EscKey, this.inputDelay)) {
            this.OnCancelPressed();
          }
        }
        ["updateController"](_0x21dc5a) {
          var _0x4b5b7d;
          var _0x14fa79;
          var _0x3d4a65;
          var _0xf49a8a;
          var _0x25feb6;
          var _0x18a659;
          var _0x594b8a;
          var _0x196997;
          var _0x3aaa63;
          var _0x471d1f;
          var _0x47470d;
          if (this.gamepad && this.UI_grid) {
            this.CheckButton(0x0, _0x21dc5a, this.gamepad.left, null === (_0x4b5b7d = this.UI_grid) || undefined === _0x4b5b7d ? undefined : _0x4b5b7d.GoLeft);
            this.CheckButton(0x1, _0x21dc5a, this.gamepad.right, null === (_0x14fa79 = this.UI_grid) || undefined === _0x14fa79 ? undefined : _0x14fa79.GoRight);
            this.CheckButton(0x2, _0x21dc5a, this.gamepad.up, null === (_0x3d4a65 = this.UI_grid) || undefined === _0x3d4a65 ? undefined : _0x3d4a65.GoUp);
            this.CheckButton(0x3, _0x21dc5a, this.gamepad.down, null === (_0xf49a8a = this.UI_grid) || undefined === _0xf49a8a ? undefined : _0xf49a8a.GoDown);
            this.CheckButton(0x4, _0x21dc5a, this.gamepad.A, null === (_0x594b8a = null === (_0x18a659 = null === (_0x25feb6 = this.UI_selected) || undefined === _0x25feb6 ? undefined : _0x25feb6._events) || undefined === _0x18a659 ? undefined : _0x18a659.pointerdown) || undefined === _0x594b8a ? undefined : _0x594b8a.fn, this.UI_selected);
            this.CheckButton(0x5, _0x21dc5a, this.gamepad.B, this.OnCancelPressed, this);
            this.CheckButton(0x6, _0x21dc5a, this.gamepad.leftStick.x < -0.78, null === (_0x196997 = this.UI_grid) || undefined === _0x196997 ? undefined : _0x196997.GoLeft);
            this.CheckButton(0x7, _0x21dc5a, this.gamepad.leftStick.x > 0.78, null === (_0x3aaa63 = this.UI_grid) || undefined === _0x3aaa63 ? undefined : _0x3aaa63.GoRight);
            this.CheckButton(0x8, _0x21dc5a, this.gamepad.leftStick.y < -0.78, null === (_0x471d1f = this.UI_grid) || undefined === _0x471d1f ? undefined : _0x471d1f.GoUp);
            this.CheckButton(0x9, _0x21dc5a, this.gamepad.leftStick.y > 0.78, null === (_0x47470d = this.UI_grid) || undefined === _0x47470d ? undefined : _0x47470d.GoDown);
          }
        }
        ['OnCancelPressed']() {
          if (this.OnCancelCallback) {
            return this.OnCancelCallback();
          }
        }
        ["CheckButton"](_0x2eec91, _0xb4f9a5, _0x13a146, _0x16d1ce, _0x79bb07 = this.UI_grid) {
          if (_0x13a146 && this.timeDown[_0x2eec91] >= this.inputDelay) {
            if (_0x16d1ce) {
              let _0x11092c = _0x16d1ce.call(_0x79bb07);
              if (_0x11092c) {
                this.UI_selected = _0x11092c;
              }
            }
            this.timeDown[_0x2eec91] = 0x0;
          }
          this.timeDown[_0x2eec91] += _0xb4f9a5;
        }
        ["MakeHighlighters"]() {
          const _0x1a1a2b = this.anims.generateFrameNames('UI', {
            'start': 0x1,
            'end': 0x8,
            'zeroPad': 0x2,
            'prefix': "arrow_",
            'suffix': ".png"
          });
          this.UI_highlightL = this.add.sprite(-0x3e8, -0x3e8, 'UI', 'arrow_01.png').setAlpha(0x1).setDepth(Number.MAX_SAFE_INTEGER).setOrigin(0x1, 0.5).setScale(0x2);
          this.UI_highlightR = this.add.sprite(-0x3e8, -0x3e8, 'UI', "arrow_01.png").setAlpha(0x1).setDepth(Number.MAX_SAFE_INTEGER).setOrigin(0x0, 0.5).setScale(0x2).setFlipX(true);
          this.UI_highlightL.anims.create({
            'key': "idle",
            'frames': _0x1a1a2b,
            'frameRate': 0x6,
            'repeat': -0x1
          });
          this.UI_highlightR.anims.create({
            'key': "idle",
            'frames': _0x1a1a2b,
            'frameRate': 0x6,
            'repeat': -0x1
          });
          this.UI_highlightL.play('idle');
          this.UI_highlightR.play("idle");
        }
        ["MakeUIGrid"](_0xcfc0fc, _0x5313d5, _0x19b504 = false) {
          this.UI_grid = new class {
            constructor() {
              this.selected = new _0x396021(null, false);
              this.currentPosition = new Phaser.Math.Vector2(0x0, 0x0);
              this.wrap = true;
              this.currentGameObject = null;
              this.previousGameObject = null;
            }
            ['Init'](_0x44729a, _0x201a99) {
              this.grid = new Array();
              this.width = _0x44729a;
              this.height = _0x201a99;
              for (let _0x2f59e6 = 0x0; _0x2f59e6 < this.width * this.height; _0x2f59e6++) {
                this.grid.push(new _0x396021(null, false));
              }
            }
            ["Deselect"]() {
              this.previousGameObject = this.currentGameObject;
              this.currentGameObject = null;
            }
            ['SelectGameObject'](_0x3ff713) {
              this.previousGameObject = this.currentGameObject;
              var _0x22f839 = this.grid.find(_0x43d8af => null != _0x43d8af && _0x43d8af.go == _0x3ff713 && !_0x43d8af.isLink);
              for (let _0x17d5dc = 0x0; _0x17d5dc < this.grid.length; _0x17d5dc++) {
                const _0x178e4e = this.grid[_0x17d5dc];
                if (!(_0x178e4e.go != _0x3ff713 || _0x178e4e.isLink)) {
                  _0x22f839 = _0x178e4e;
                }
              }
              var _0x5d7c5e = this.grid.indexOf(_0x22f839);
              if (!(_0x5d7c5e < 0x0)) {
                this.currentPosition.x = _0x5d7c5e % this.width;
                this.currentPosition.y = Math.floor(_0x5d7c5e / this.width);
                this.currentGameObject = _0x22f839.go;
                return this.currentGameObject;
              }
              console.error("GameObject not found in UI grid");
            }
            ["SelectAt"](_0x51c5e7, _0x3b45ce) {
              if (!(_0x51c5e7 + _0x3b45ce * this.width >= this.grid.length)) {
                this.currentPosition.x = _0x51c5e7;
                this.currentPosition.y = _0x3b45ce;
                return this.GetCurrent();
              }
              console.error("Invalid UI slot: " + _0x51c5e7 + ',' + _0x3b45ce / this.width);
            }
            ['SetContents'](_0xbf7306, _0x1ba9b1, _0x26851e, _0x24553f = false) {
              if ((_0xbf7306 = _0xbf7306) + (_0x1ba9b1 *= this.width) >= this.grid.length) {
                console.error("Invalid UI slot: " + _0xbf7306 + ',' + _0x1ba9b1 / this.width);
              } else {
                this.grid[_0xbf7306 + _0x1ba9b1] = new _0x396021(_0x26851e, _0x24553f);
              }
            }
            ["GetCurrent"]() {
              var _0x560c8c;
              this.previousGameObject = this.currentGameObject;
              var _0x4b68b0 = this.currentPosition.x;
              var _0x259833 = this.currentPosition.y * this.width;
              var _0x3c1f15 = this.grid[_0x4b68b0 + _0x259833];
              if (null != _0x3c1f15 && _0x3c1f15.isLink) {
                _0x3c1f15 = this.grid.find(_0x125232 => _0x125232.go == _0x3c1f15.go && !_0x125232.isLink);
                var _0xf1e65c = this.grid.indexOf(_0x3c1f15);
                _0x4b68b0 = _0xf1e65c % this.width;
                _0x259833 = Math.floor(_0xf1e65c / this.height);
                this.currentPosition.x = _0x4b68b0;
                this.currentPosition.y = _0x259833;
              }
              let _0x4f8f9f = null === (_0x560c8c = this.grid[_0x4b68b0 + _0x259833]) || undefined === _0x560c8c ? undefined : _0x560c8c.go;
              this.currentGameObject = _0x4f8f9f || this.currentGameObject;
              return _0x4f8f9f;
            }
            ['GoLeft']() {
              var _0x3865ca = this.currentPosition.x;
              this.currentPosition.x -= 0x1;
              if (this.currentPosition.x < 0x0) {
                this.currentPosition.x = this.wrap ? this.width - 0x1 : 0x0;
              }
              return this.GetCurrent() || (this.currentPosition.x = _0x3865ca, this.currentGameObject);
            }
            ["GoRight"]() {
              var _0x4af845 = this.currentPosition.x;
              this.currentPosition.x += 0x1;
              if (this.currentPosition.x > this.width - 0x1) {
                this.currentPosition.x = this.wrap ? 0x0 : this.width - 0x1;
              }
              return this.GetCurrent() || (this.currentPosition.x = _0x4af845, this.currentGameObject);
            }
            ["GoUp"]() {
              var _0x179312 = this.currentPosition.y;
              this.currentPosition.y -= 0x1;
              if (this.currentPosition.y < 0x0) {
                this.currentPosition.y = this.wrap ? this.height - 0x1 : 0x0;
              }
              return this.GetCurrent() || (this.currentPosition.y = _0x179312, this.currentGameObject);
            }
            ["GoDown"]() {
              var _0x4d9179 = this.currentPosition.y;
              this.currentPosition.y += 0x1;
              if (this.currentPosition.y > this.height - 0x1) {
                this.currentPosition.y = this.wrap ? 0x0 : this.height - 0x1;
              }
              return this.GetCurrent() || (this.currentPosition.y = _0x4d9179, this.currentGameObject);
            }
          }();
          this.UI_grid.Init(_0xcfc0fc, _0x5313d5);
          this.UI_grid.wrap = _0x19b504;
          this.UI_selected = null;
        }
        ['DestroyGrid']() {
          this.UI_grid = null;
          this.UI_selected = null;
          this.ToggleCursorsVisibility(false);
          this.OnCancelCallback = null;
        }
        ["ToggleCursorsVisibility"](_0x2ee460) {
          var _0x88fb85;
          var _0x412632;
          if (!(null === (_0x88fb85 = this.UI_highlightL) || undefined === _0x88fb85)) {
            _0x88fb85.setVisible(_0x2ee460);
          }
          if (!(null === (_0x412632 = this.UI_highlightR) || undefined === _0x412632)) {
            _0x412632.setVisible(_0x2ee460);
          }
        }
        ['SetNesting'](_0xf98ada) {
          this.nesting = _0xf98ada;
        }
        ["HighlightButton"]() {
          if (!this.UI_selected) {
            return void this.ToggleCursorsVisibility(false);
          }
          var _0x2f373e = 0x0;
          var _0x5a0c30 = 0x0;
          let _0x164871 = this.UI_selected.parentContainer;
          for (; _0x164871;) {
            _0x2f373e += _0x164871.x;
            _0x5a0c30 += _0x164871.y;
            _0x164871 = _0x164871.parentContainer;
          }
          this.UI_highlightL.x = _0x2f373e + this.UI_selected.x - this.UI_selected.displayWidth * this.UI_selected.originX;
          this.UI_highlightR.x = _0x2f373e + this.UI_selected.x - this.UI_selected.displayWidth * this.UI_selected.originX + this.UI_selected.displayWidth;
          this.UI_highlightL.y = _0x5a0c30 + this.UI_selected.y - this.UI_selected.displayHeight * this.UI_selected.originY + 0.5 * this.UI_selected.displayHeight;
          this.UI_highlightR.y = _0x5a0c30 + this.UI_selected.y - this.UI_selected.displayHeight * this.UI_selected.originY + 0.5 * this.UI_selected.displayHeight;
        }
      }
      class _0xd6fe40 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.UI_creditsScene
          });
        }
        ["preload"]() {}
        ["create"]() {
          var _0x5d29cd = _0x3dbb73.width * _0x34bb1a.RPixelScale;
          var _0x5dfc7c = (_0x3dbb73.height - 0x40) * _0x34bb1a.RPixelScale;
          var _0x50e44a = _0x5dfc7c * _0x34bb1a.PixelScale;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x5d29cd,
            'height': _0x5dfc7c
          });
          this.background.setPosition(_0x3dbb73.centerX, _0x50e44a);
          this.background.setOrigin(0.5, 0x1);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.background.setInteractive();
          this.header = this.add.text(_0x3dbb73.centerX, 0x21, "Credits", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          0x0;
          0x0;
          this.text = this.add.text(16, 0x40, "Credits", {}).setScale(0x1 * _0x34bb1a.PixelScale).setOrigin(0x0);
          this.text.setText(["VAMPIRE SURVIVORS - a game by", "• Luca Galante", '', "MAIN ARTWORK", "• Alessio Greco Art", '', "SOUND & MUSIC", "• William Davies", '', "GRAPHICS", "• main asset pack: Oryx Design Lab", "• UI asset pack: Thomas Feichtmeir (Cyangmou)", "• angel and explosion sfx: Luis Zuno (Ansimuz)", "• tilesets: Bokou", '', "ANIMATIONS", "• main characters: Twiranux", "• monsters: Mathew Gurunlian", '', "TRAILERS", "• nareshps", '', "TECH STACK", "• Phaser 3 and RexPlugins", "• Electron", "• JuiceFX"]);
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          var _0x57d00b = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x57d00b);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
          this.SceneContainer.y = this.renderer.height - this.SceneContainer.displayHeight;
          this.MakeUIGrid();
        }
        ["MakeUIGrid"]() {
          let _0x484a91 = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x484a91.MakeUIGrid(0x1, 0x1, false);
          _0x484a91.UI_grid.SetContents(0x0, 0x0, this.UI_topBar.BackButton);
          _0x484a91.ToggleCursorsVisibility(true);
          _0x484a91.UI_grid.SelectGameObject(this.UI_topBar.BackButton);
          _0x484a91.UI_selected = this.UI_topBar.BackButton;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x484a91);
          _0x484a91.OnCancelCallback = () => {
            var _0x2b9710;
            var _0x2541a3;
            var _0x24617d;
            if (!(null === (_0x24617d = null === (_0x2541a3 = null === (_0x2b9710 = this.UI_topBar.BackButton) || undefined === _0x2b9710 ? undefined : _0x2b9710._events) || undefined === _0x2541a3 ? undefined : _0x2541a3.pointerdown) || undefined === _0x24617d)) {
              _0x24617d.fn();
            }
          };
        }
      }
      class _0x344f00 extends Phaser.Scene {
        constructor() {
          super({
            'key': _0xf7a726.UI_resolutionScene
          });
          if (_0xadcf39.g.vs_ex_is_electron_win_build) {
            const {
              ipcRenderer: _0x2990ba
            } = _0xadcf39(0xa3);
            this.ipcRenderer = _0x2990ba;
          } else {
            this.ipcRenderer = null;
          }
        }
        ["preload"]() {}
        ["create"]() {
          var _0x2265fd = _0x3dbb73.width * _0x34bb1a.RPixelScale;
          var _0x283e57 = (_0x3dbb73.height - 0x40) * _0x34bb1a.RPixelScale;
          var _0x4f85ae = _0x283e57 * _0x34bb1a.PixelScale;
          this.background = new _0x35cd95.NineSlice(this, _0x564740.MenuBackground, {
            'x': 0x0,
            'y': 0x0,
            'width': _0x2265fd,
            'height': _0x283e57
          });
          this.background.setPosition(_0x3dbb73.centerX, _0x4f85ae);
          this.background.setOrigin(0.5, 0x1);
          this.background.setScale(_0x34bb1a.PixelScale);
          this.add.existing(this.background);
          this.background.setInteractive();
          this.header = this.add.text(_0x3dbb73.centerX, 0x21, "Resolution", {}).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          0x0;
          0x0;
          var _0x28bf12 = 0x5a;
          this.Res1 = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x3dbb73.centerX,
            'y': _0x28bf12,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          _0x28bf12 = 0xb4;
          this.Res2 = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x3dbb73.centerX,
            'y': _0x28bf12,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          _0x28bf12 = 0x10e;
          this.Res3 = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x3dbb73.centerX,
            'y': _0x28bf12,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          _0x28bf12 = 0x168;
          this.Res4 = new _0x35cd95.NineSlice(this, _0x564740.OptionsButton, {
            'x': _0x3dbb73.centerX,
            'y': _0x28bf12,
            'width': 0x60,
            'height': 0x20
          }).setScale(0x2 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.add.existing(this.Res1);
          this.add.existing(this.Res2);
          this.add.existing(this.Res3);
          this.add.existing(this.Res4);
          this.add.text(this.Res1.x, this.Res1.y, "1024 x 640", {
            'align': "center"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.add.text(this.Res2.x, this.Res2.y, "1536 x 960", {
            'align': "center"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.add.text(this.Res3.x, this.Res3.y, "2048 x 1280", {
            'align': "center"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.add.text(this.Res4.x, this.Res4.y, "FULLSCREEN", {
            'align': "center"
          }).setScale(1.5 * _0x34bb1a.PixelScale).setOrigin(0.5);
          this.UI_topBar = this.scene.get(_0xf7a726.UI_topBar);
          var _0x383ca1 = this.children.getAll();
          this.children.removeAll();
          this.SceneContainer = this.add.container(0x0, 0x0, _0x383ca1);
          this.SceneContainer.setScale(_0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683);
          _0x512871.CalculateAndSetContainerSize(this.SceneContainer);
          this.SceneContainer.y = this.renderer.height - this.SceneContainer.displayHeight;
          this.EnableInput();
          this.ReadPlayerOptions();
          this.MakeUIGrid();
          this.time.addEvent({
            'delay': 0x1,
            'callback': () => {
              _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x1d0e6c.Core.SceneManager.UI_overlayScene);
            }
          });
        }
        ["EnableInput"]() {
          this.Res1.setInteractive();
          this.Res2.setInteractive();
          this.Res3.setInteractive();
          this.Res4.setInteractive();
          this.Res1.on("pointerdown", () => {
            var _0x10ac70;
            if (!(null === (_0x10ac70 = this.ipcRenderer) || undefined === _0x10ac70)) {
              _0x10ac70.sendSync("resolution", "1024 x 640");
            }
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
            window.location.reload();
          });
          this.Res2.on("pointerdown", () => {
            var _0x2b200d;
            if (!(null === (_0x2b200d = this.ipcRenderer) || undefined === _0x2b200d)) {
              _0x2b200d.sendSync("resolution", "1536 x 960");
            }
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
            window.location.reload();
          });
          this.Res3.on("pointerdown", () => {
            var _0x47c6b3;
            if (!(null === (_0x47c6b3 = this.ipcRenderer) || undefined === _0x47c6b3)) {
              _0x47c6b3.sendSync("resolution", "2048 x 1280");
            }
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
            window.location.reload();
          });
          this.Res4.on('pointerdown', () => {
            var _0x1a598e;
            if (!(null === (_0x1a598e = this.ipcRenderer) || undefined === _0x1a598e)) {
              _0x1a598e.sendSync("fullscreen", "true");
            }
            _0x1d0e6c.Sound.PlaySound(_0x52c10f.ClickOut);
            window.location.reload();
          });
        }
        ["MakeUIGrid"]() {
          let _0x49bd4d = _0x1d0e6c.Core.SceneManager.UI_overlayScene;
          _0x49bd4d.MakeUIGrid(0x1, 0x5, false);
          _0x49bd4d.UI_grid.SetContents(0x0, 0x0, this.UI_topBar.BackButton);
          _0x49bd4d.UI_grid.SetContents(0x0, 0x1, this.Res1);
          _0x49bd4d.UI_grid.SetContents(0x0, 0x2, this.Res2);
          _0x49bd4d.UI_grid.SetContents(0x0, 0x3, this.Res3);
          _0x49bd4d.UI_grid.SetContents(0x0, 0x4, this.Res4);
          _0x49bd4d.ToggleCursorsVisibility(true);
          _0x49bd4d.UI_grid.SelectGameObject(this.UI_topBar.BackButton);
          _0x49bd4d.UI_selected = this.UI_topBar.BackButton;
          _0x1d0e6c.Core.SceneManager.scene.bringToTop(_0x49bd4d);
          _0x49bd4d.OnCancelCallback = () => {
            var _0x532369;
            var _0x4bb4dc;
            var _0x4fc4ad;
            if (!(null === (_0x4fc4ad = null === (_0x4bb4dc = null === (_0x532369 = this.UI_topBar.BackButton) || undefined === _0x532369 ? undefined : _0x532369._events) || undefined === _0x4bb4dc ? undefined : _0x4bb4dc.pointerdown) || undefined === _0x4fc4ad)) {
              _0x4fc4ad.fn();
            }
          };
        }
        ['ReadPlayerOptions']() {}
      }
      document.oncontextmenu = function () {
        return false;
      };
      const _0x572c9f = window.innerWidth <= window.innerHeight;
      var _0xfe7efc = null;
      var _0x1e40e2 = _0x572c9f ? Math.min(512 / window.innerWidth, devicePixelRatio) : Math.min(683 / window.innerHeight, devicePixelRatio);
      var _0x25efe0 = window.innerWidth * _0x1e40e2;
      var _0x2fcc22 = window.innerHeight * _0x1e40e2;
      var _0x57fecd = Phaser.Scale.ScaleModes.FIT;
      const _0x3dbb73 = {
        'left': 0x0,
        'right': _0x25efe0,
        'gameLeft': 0x0,
        'gameRight': _0x25efe0,
        'width': _0x25efe0,
        'height': _0x2fcc22,
        'centerX': 0.5 * _0x25efe0,
        'centerY': 0.5 * _0x2fcc22
      };
      if (!_0x572c9f) {
        _0x57fecd = Phaser.Scale.ScaleModes.FIT;
        _0x2fcc22 = 683;
        var _0x59317a = window.innerWidth;
        if ((_0x25efe0 = Math.min(1536, _0x59317a)) > 1.6 * _0x2fcc22) {
          _0x25efe0 = 1.6 * _0x2fcc22;
        }
        var _0x40784f = 0x1c8 * (_0x25efe0 / _0x2fcc22);
        _0x3dbb73.left = 0.5 * _0x25efe0 - 256;
        _0x3dbb73.right = 0.5 * _0x25efe0 + 256;
        _0x3dbb73.width = _0x3dbb73.right - 0x0;
        _0x3dbb73.centerX = 0.5 * _0x25efe0;
        _0x3dbb73.gameLeft = 0.5 * _0x40784f - 171;
        _0x3dbb73.gameRight = 0.5 * _0x40784f + 171;
        _0x3dbb73.height = _0x2fcc22;
        _0x3dbb73.centerY = 0.5 * _0x2fcc22;
      }
      function _0x67570c() {
        return _0x572c9f ? _0x25efe0 / 512 : _0x2fcc22 / 683;
      }
      const _0x3fa92c = {
        'type': Phaser.AUTO,
        'scale': {
          'parent': 'phaser-game',
          'mode': _0x57fecd,
          'autoRound': true,
          'autoCenter': Phaser.Scale.Center.CENTER_BOTH,
          'width': _0x25efe0,
          'height': _0x2fcc22
        },
        'input': {
          'gamepad': true
        },
        'scene': [_0x17d3e5, _0x426bcd, _0xff8f12, _0x402199, _0x3b2b95, _0x535680, _0x5bd029, _0x53b0d7, _0x170c87, _0x32998e, _0xd6a4a0, _0x5ef933, _0x1a5722, _0x565eb7, _0x5dc8cd, _0x298ea6, _0x5aa38f, _0x1458bc, _0x4bdbc4, _0xd6fe40, _0x344f00],
        'antialias': false,
        'physics': {
          'default': "arcade",
          'arcade': {
            'debug': false,
            'gravity': {
              'y': 0x0
            }
          }
        },
        'plugins': {
          'global': [_0x35cd95.Plugin.DefaultCfg, {
            'key': "rexPixelationPipeline",
            'plugin': _0x17059a.Z,
            'start': true
          }, {
            'key': "rexShatterImagePlugin",
            'plugin': _0x74224d.Z,
            'start': true
          }],
          'scene': []
        }
      };
      class _0x1d0e6c extends Phaser.Game {
        constructor(_0x894548) {
          super(_0x894548);
        }
        static get ['Core']() {
          return this._core;
        }
        static set ["Core"](_0x1f6ab1) {
          this._core = _0x1f6ab1;
        }
        static get ["Sound"]() {
          return this._sound;
        }
        static set ["Sound"](_0x25d0e3) {
          this._sound = _0x25d0e3;
        }
        static ["ApplyGameResolution"]() {
          if (_0x572c9f) {
            var _0x2f3c9a = this._core.scene.scale.height / this._core.scene.scale.width;
            _0x1d0e6c.Core.scene.scale.setGameSize(0x156, 0x156 * _0x2f3c9a);
          } else {
            _0x2f3c9a = this._core.scene.scale.width / this._core.scene.scale.height;
            _0x1d0e6c.Core.scene.scale.setGameSize(0x1c8 * _0x2f3c9a, 0x1c8);
          }
        }
        static ["ApplyMenuResolution"]() {
          _0x1d0e6c.Core.scene.scale.setGameSize(_0x25efe0, _0x2fcc22);
        }
      }
      try {
        const {
          ipcRenderer: _0x1b849e
        } = _0xadcf39(0xa3);
        (_0xfe7efc = _0x1b849e).on("console_log", function (_0x28096e, _0x30ff0a) {
          console.log(_0x30ff0a);
        });
      } catch (_0x29ae20) {
        _0xfe7efc = null;
      }
      window.addEventListener("load", () => {
        new _0x1d0e6c(_0x3fa92c);
      });
    },
    0x66: () => {}
  };
  var _0x55e22c = {};
  function _0x1f0bc8(_0x11c8ef) {
    var _0x5c75c1 = _0x55e22c[_0x11c8ef];
    if (undefined !== _0x5c75c1) {
      return _0x5c75c1.exports;
    }
    var _0x4f2e2e = _0x55e22c[_0x11c8ef] = {
      'exports': {}
    };
    _0x117779[_0x11c8ef].call(_0x4f2e2e.exports, _0x4f2e2e, _0x4f2e2e.exports, _0x1f0bc8);
    return _0x4f2e2e.exports;
  }
  _0x1f0bc8.m = _0x117779;
  _0x1eb76f = [];
  _0x1f0bc8.O = (_0x182581, _0x4373ac, _0x598ded, _0x4ef58b) => {
    if (!_0x4373ac) {
      var _0x24dcc2 = Infinity;
      for (_0x327e47 = 0x0; _0x327e47 < _0x1eb76f.length; _0x327e47++) {
        var [_0x4373ac, _0x598ded, _0x4ef58b] = _0x1eb76f[_0x327e47];
        var _0x423886 = true;
        for (var _0x3363f7 = 0x0; _0x3363f7 < _0x4373ac.length; _0x3363f7++) {
          if ((false & _0x4ef58b || _0x24dcc2 >= _0x4ef58b) && Object.keys(_0x1f0bc8.O).every(_0x13d2d7 => _0x1f0bc8.O[_0x13d2d7](_0x4373ac[_0x3363f7]))) {
            _0x4373ac.splice(_0x3363f7--, 0x1);
          } else {
            _0x423886 = false;
            if (_0x4ef58b < _0x24dcc2) {
              _0x24dcc2 = _0x4ef58b;
            }
          }
        }
        if (_0x423886) {
          _0x1eb76f.splice(_0x327e47--, 0x1);
          var _0x42372b = _0x598ded();
          if (undefined !== _0x42372b) {
            _0x182581 = _0x42372b;
          }
        }
      }
      return _0x182581;
    }
    _0x4ef58b = _0x4ef58b || 0x0;
    for (var _0x327e47 = _0x1eb76f.length; _0x327e47 > 0x0 && _0x1eb76f[_0x327e47 - 0x1][0x2] > _0x4ef58b; _0x327e47--) {
      _0x1eb76f[_0x327e47] = _0x1eb76f[_0x327e47 - 0x1];
    }
    _0x1eb76f[_0x327e47] = [_0x4373ac, _0x598ded, _0x4ef58b];
  };
  _0x1f0bc8.n = _0x543718 => {
    var _0x305c08 = _0x543718 && _0x543718.__esModule ? () => _0x543718["default"] : () => _0x543718;
    _0x1f0bc8.d(_0x305c08, {
      'a': _0x305c08
    });
    return _0x305c08;
  };
  _0x1f0bc8.d = (_0x53317b, _0x63b29) => {
    for (var _0x28e96c in _0x63b29) if (_0x1f0bc8.o(_0x63b29, _0x28e96c) && !_0x1f0bc8.o(_0x53317b, _0x28e96c)) {
      Object.defineProperty(_0x53317b, _0x28e96c, {
        'enumerable': true,
        'get': _0x63b29[_0x28e96c]
      });
    }
  };
  _0x1f0bc8.e = () => Promise.resolve();
  _0x1f0bc8.g = function () {
    if ('object' == typeof globalThis) {
      return globalThis;
    }
    try {
      return this || new Function("return this")();
    } catch (_0x5bb3cb) {
      if ("object" == typeof window) {
        return window;
      }
    }
  }();
  _0x1f0bc8.o = (_0x4e4595, _0x2e5b68) => Object.prototype.hasOwnProperty.call(_0x4e4595, _0x2e5b68);
  _0x1f0bc8.r = _0x414156 => {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(_0x414156, Symbol.toStringTag, {
        'value': 'Module'
      });
    }
    Object.defineProperty(_0x414156, '__esModule', {
      'value': true
    });
  };
  (() => {
    var _0x1bec58 = {
      0xb3: 0x0
    };
    _0x1f0bc8.O.j = _0x566b7f => 0x0 === _0x1bec58[_0x566b7f];
    var _0x24ccc3 = (_0x62b637, _0x2019e2) => {
      var _0x3d3ba5;
      var _0x530968;
      var [_0x1fe031, _0x452935, _0x4fffa7] = _0x2019e2;
      var _0x356d69 = 0x0;
      if (_0x1fe031.some(_0x306a42 => 0x0 !== _0x1bec58[_0x306a42])) {
        for (_0x3d3ba5 in _0x452935) if (_0x1f0bc8.o(_0x452935, _0x3d3ba5)) {
          _0x1f0bc8.m[_0x3d3ba5] = _0x452935[_0x3d3ba5];
        }
        if (_0x4fffa7) {
          var _0x56f135 = _0x4fffa7(_0x1f0bc8);
        }
      }
      for (_0x62b637 && _0x62b637(_0x2019e2); _0x356d69 < _0x1fe031.length; _0x356d69++) {
        _0x530968 = _0x1fe031[_0x356d69];
        if (_0x1f0bc8.o(_0x1bec58, _0x530968) && _0x1bec58[_0x530968]) {
          _0x1bec58[_0x530968][0x0]();
        }
        _0x1bec58[_0x1fe031[_0x356d69]] = 0x0;
      }
      return _0x1f0bc8.O(_0x56f135);
    };
    var _0x38b907 = self.webpackChunkvampire_survivors = self.webpackChunkvampire_survivors || [];
    _0x38b907.forEach(_0x24ccc3.bind(null, 0x0));
    _0x38b907.push = _0x24ccc3.bind(null, _0x38b907.push.bind(_0x38b907));
  })();
  var _0x40d240 = _0x1f0bc8.O(undefined, [0xd8], () => _0x1f0bc8(0x356));
  _0x40d240 = _0x1f0bc8.O(_0x40d240);
})();
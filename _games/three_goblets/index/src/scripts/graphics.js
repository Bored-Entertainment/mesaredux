"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['lib/pixi'], function (PIXI) {

  document.getElementById("screenCanvas").oncontextmenu = function (e) {
    e.preventDefault();
  };
  PIXI.utils.skipHello();
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  var colors = [0x000000, 0xf0f0f0, 0x4a4a4a, 0x3ccf1b, 0xad2013, 0x1f70f2, 0xa14213, 0x6e2391, null];

  //*******************************************************************************************************************
  // ** Graphics - Handles low level PIXI communication
  //*******************************************************************************************************************

  var Graphics = function () {
    function Graphics() {
      _classCallCheck(this, Graphics);

      this.renderer = new PIXI.CanvasRenderer(160 * 4, 144 * 4, { view: document.getElementById("screenCanvas"), transparent: true });
      this.renderer.roundPixels = true;
      document.body.appendChild(this.renderer.view);
      this.stage = new PIXI.Container();
      this.stage.scale.x = 4;
      this.stage.scale.y = 4;
      this.videoExt = '';
      this.logos = [];
      this.monsterSizes = [];
      this.modifiedTextures = {};
      this.masks = [];
      this.initializeLayers();
    }

    _createClass(Graphics, [{
      key: "initializeLayers",
      value: function initializeLayers() {
        var _this = this;

        this.layers = {};
        this.layers.base = new PIXI.Container();
        this.layers.tooltip = new PIXI.Container();
        Object.values(this.layers).forEach(function (l) {
          return _this.stage.addChild(l);
        });
      }
    }, {
      key: "setVideoExtension",
      value: function setVideoExtension(extenstion) {
        this.videoExt = extenstion;
      }
      //*******************************************************************************************************************
      // * Load Resources
      //*******************************************************************************************************************

    }, {
      key: "loadInitResources",
      value: function loadInitResources(config, callback) {
        var _this2 = this;

        var loader = PIXI.loader;
        loader.add('loading', 'assets/loading.png');
        config.logos.forEach(function (logoData) {
          var ext = logoData.type == 'Image' ? '.png' : '.' + _this2.videoExt;
          var metadata = { logoType: logoData.type, link: logoData.link };
          loader.add(logoData.source, 'assets/' + logoData.source + ext, { metadata: metadata });
        });

        loader.load(function (loader, resources) {
          Object.values(resources).forEach(function (resource) {
            if (resource.metadata.logoType) {
              var duration = resource.data.duration ? Math.ceil(resource.data.duration * 60) : 180;
              _this2.logos.push({ type: resource.metadata.logoType, url: resource.url.match(/^(.*)\./)[1], link: resource.metadata.link, duration: duration });
            }

            if (resource.extension !== _this2.videoExt) {
              PIXI.BaseTexture.addToCache(resource.texture.baseTexture, resource.url);
            }
          });
          callback();
        });
      }
    }, {
      key: "loadResources",
      value: function loadResources(callback) {
        var _this3 = this;

        var loader = PIXI.loader;
        loader.add('fontData', 'assets/MunroFont.fnt');
        loader.add('atlas', 'assets/SpriteAtlas.json');
        loader.add('attackAnim', 'assets/animations/attackAnim.json');
        loader.add('sweepAnim', 'assets/animations/sweepAnim.json');
        loader.add('criticalAnim', 'assets/animations/criticalAnim.json');
        loader.add('fireballAnim', 'assets/animations/fireballAnim.json');
        loader.add('splashAnim', 'assets/animations/splashAnim.json');
        loader.add('crossAnim', 'assets/animations/crossAnim.json');
        loader.load(function (loader, resources) {
          _this3.generateModifiedTextures(resources.atlas);
          _this3.generateMonsterSizes(resources.atlas);
          callback();
        });
      }
      //*******************************************************************************************************************
      // * Update / Render Frame
      //*******************************************************************************************************************

    }, {
      key: "update",
      value: function update() {
        this.renderer.render(this.stage);
      }
      //*******************************************************************************************************************
      // * Add Sprites
      //*******************************************************************************************************************

    }, {
      key: "addText",
      value: function addText(x, y, text) {
        var layer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'base';

        var textSprite = this.newText(text);
        textSprite.x = x;
        textSprite.y = y;
        this.layers[layer].addChild(textSprite);
        return textSprite;
      }
    }, {
      key: "addRect",
      value: function addRect(rect, fillColor, borderColor) {
        var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var layer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'base';

        var basic = this.newRect(rect, fillColor, borderColor, width);
        basic.x = rect.x + 0.5;
        basic.y = rect.y + 0.5;
        this.layers[layer].addChild(basic);
        return basic;
      }
    }, {
      key: "addSprite",
      value: function addSprite(x, y, name) {
        var layer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'base';

        var sprite = new PIXI.Sprite.fromImage(name + '.png');
        sprite.x = x;
        sprite.y = y;
        this.layers[layer].addChild(sprite);
        return sprite;
      }
    }, {
      key: "addVideoSprite",
      value: function addVideoSprite(x, y, name) {
        var layer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'base';

        var sprite = new PIXI.Sprite(this.getVideoTexture(name));
        sprite.x = x;
        sprite.y = y;
        this.layers[layer].addChild(sprite);
        return sprite;
      }
    }, {
      key: "addContainer",
      value: function addContainer(x, y) {
        var layer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'base';

        var container = new PIXI.Container();
        container.x = x;
        container.y = y;
        this.layers[layer].addChild(container);
        return container;
      }
      //*******************************************************************************************************************
      // * Create Sprites
      //*******************************************************************************************************************

    }, {
      key: "newText",
      value: function newText(text) {
        var sprite = new PIXI.extras.BitmapText(text.toString(), { font: '10px Munro' });
        return sprite;
      }
    }, {
      key: "newRect",
      value: function newRect(rect, fillColor, borderColor, width) {
        var sprite = new PIXI.Graphics();
        this.drawRect(sprite, rect, fillColor, borderColor, width);
        return sprite;
      }
    }, {
      key: "newSprite",
      value: function newSprite(name) {
        var sprite = new PIXI.Sprite.fromImage(name + '.png');
        return sprite;
      }
    }, {
      key: "newDitherMask",
      value: function newDitherMask(intensity) {
        var graphic = new PIXI.Graphics();
        this.drawDitherMask(graphic, intensity);
        return graphic;
      }
      //*******************************************************************************************************************
      // * Draw Sprites
      //*******************************************************************************************************************

    }, {
      key: "drawRect",
      value: function drawRect(sprite, rect, fillColor, borderColor, width) {
        fillColor = colors[fillColor];
        borderColor = colors[borderColor];
        var fillAlpha = fillColor === null ? 0 : 1;
        var borderAlpha = borderColor === null ? 0 : 1;
        sprite.beginFill(fillColor, fillAlpha);
        sprite.moveTo(-0.5, -0.5);
        sprite.lineTo(rect.w - 0.5, -0.5);
        sprite.lineTo(rect.w - 0.5, rect.h - 0.5);
        sprite.lineTo(-0.5, rect.h - 0.5);
        sprite.lineTo(-0.5, -0.5);
        sprite.endFill();

        sprite.moveTo(0, 0);
        sprite.lineStyle(width, borderColor, borderAlpha);
        sprite.lineTo(rect.w - 1, 0);
        sprite.lineTo(rect.w - 1, rect.h - 1);
        sprite.lineTo(0, rect.h - 1);
        sprite.lineTo(0, -0.5);
      }
    }, {
      key: "redrawRect",
      value: function redrawRect(sprite, size, fillColor, borderColor) {
        var width = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

        sprite.clear();
        this.drawRect(sprite, size, fillColor, borderColor, width);
      }
    }, {
      key: "drawDitherMask",
      value: function drawDitherMask(graphic, intensity) {
        var fillColor = colors[0];
        var fillAlpha = fillColor === null ? 0 : 1;
        graphic.lineStyle(1, fillColor);
        for (var i = 0; i < 99 * 99; i++) {
          if (i % intensity == 0) {
            var x = i % 99;
            var y = Math.floor(i / 99);
            graphic.moveTo(x, y);
            graphic.lineTo(x + 1, y);
          }
        }
      }
      //*******************************************************************************************************************
      // * Midified Texture Generation
      //*******************************************************************************************************************

    }, {
      key: "generateModifiedTextures",
      value: function generateModifiedTextures(resource) {
        var textures = resource.spritesheet.textures;
        this.generateRecoloredSprites(textures, 'skill', 'disabled', 2);
        this.generateRecoloredSprites(textures, 'icon', 'glow', 3);
        this.generateRecoloredSprites(textures, 'key', 'disabled', 2);
        this.generateScaledSprites(textures);
        this.generateDitheredSprites(textures);
      }
    }, {
      key: "generateRecoloredSprites",
      value: function generateRecoloredSprites(textures, filter, modificationName, colorId) {
        var _this4 = this;

        this.modifiedTextures[modificationName] = this.modifiedTextures[modificationName] || {};
        var sprite = new PIXI.Sprite();
        textures = Object.entries(textures).filter(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              textureObj = _ref2[1];

          return name.includes(filter);
        });
        textures.forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              name = _ref4[0],
              textureObj = _ref4[1];

          sprite.texture = textureObj;
          var canvas = _this4.renderer.extract.canvas(sprite);
          var context = canvas.getContext('2d');

          var color = '#' + colors[colorId].toString(16);
          context.fillStyle = color;
          context.globalCompositeOperation = 'source-in';
          context.beginPath();
          context.rect(0, 0, canvas.width, canvas.height);
          context.fill();
          context.closePath();

          _this4.modifiedTextures[modificationName][name] = new PIXI.Texture.fromCanvas(canvas);
        });
      }
    }, {
      key: "generateScaledSprites",
      value: function generateScaledSprites(textures) {
        var _this5 = this;

        ;[0, 1, 2, 3, 4].forEach(function (i) {
          return _this5.modifiedTextures['appearing' + i] = {};
        });
        var sprite = new PIXI.Sprite();
        textures = Object.entries(textures).filter(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              name = _ref6[0],
              textureObj = _ref6[1];

          return name.includes('mon');
        });
        textures.forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              name = _ref8[0],
              textureObj = _ref8[1];

          sprite.texture = textureObj;
          var iterations = 5;
          for (var i = 0; i < iterations; i++) {
            sprite.anchor.y = 1.0;
            sprite.scale.y = (i + 1) / (iterations + 1);
            sprite.y = sprite.height;
            var renderTexture = PIXI.RenderTexture.create(sprite.width, sprite.height + 1, PIXI.SCALE_MODES.NEAREST);
            _this5.renderer.render(sprite, renderTexture);
            _this5.modifiedTextures['appearing' + i][name] = renderTexture;
          }
        });
      }
    }, {
      key: "generateDitheredSprites",
      value: function generateDitheredSprites(textures) {
        var _this6 = this;

        this.modifiedTextures.dithered = {};
        var sprite = new PIXI.Sprite();
        var mask = this.renderer.extract.canvas(new PIXI.Sprite.fromImage('maskFull.png'));
        textures = Object.entries(textures).filter(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              name = _ref10[0],
              textureObj = _ref10[1];

          return name.includes('mon');
        });
        textures.forEach(function (_ref11) {
          var _ref12 = _slicedToArray(_ref11, 2),
              name = _ref12[0],
              textureObj = _ref12[1];

          sprite.texture = textureObj;
          var canvas = _this6.renderer.extract.canvas(sprite);
          var context = canvas.getContext('2d');

          context.globalCompositeOperation = 'destination-out';
          context.drawImage(mask, 0, 0);

          var color = '#' + colors[2].toString(16);
          context.fillStyle = color;
          context.globalCompositeOperation = 'source-in';
          context.beginPath();
          context.rect(0, 0, canvas.width, canvas.height);
          context.fill();
          context.closePath();

          _this6.modifiedTextures.dithered[name] = new PIXI.Texture.fromCanvas(canvas);
        });
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: "getTexture",
      value: function getTexture(name) {
        return PIXI.Texture.fromImage(name + '.png');
      }
    }, {
      key: "getModifiedTexture",
      value: function getModifiedTexture(name, modification) {
        return this.modifiedTextures[modification][name + '.png'];
      }
    }, {
      key: "generateMonsterSizes",
      value: function generateMonsterSizes(resource) {
        var _this7 = this;

        var frames = resource.spritesheet.data.frames;
        var monsterFrames = Object.entries(frames).filter(function (_ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
              name = _ref14[0],
              frameObj = _ref14[1];

          return name.includes('mon');
        });
        monsterFrames.forEach(function (_ref15) {
          var _ref16 = _slicedToArray(_ref15, 2),
              name = _ref16[0],
              frameObj = _ref16[1];

          return _this7.monsterSizes[name] = { w: frameObj.frame.w, h: frameObj.frame.h };
        });
      }
    }, {
      key: "getMonsterSize",
      value: function getMonsterSize(id) {
        return this.monsterSizes['mon' + id + '.png'];
      }
    }]);

    return Graphics;
  }();

  return Graphics;
});
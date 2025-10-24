'use strict';

define(['game', 'config', 'loader', 'initScreen', 'statistics', 'storage', 'input', 'graphics', 'audio', 'player', 'panels', 'world', 'loot', 'forge', 'tips', 'tooltip'], function (game, config, Loader, InitScreen, Statistics, Storage, Input, Graphics, Audio, Player, Panels, World, Loot, Forge, Tips, Tooltip) {

  game.config = config;
  game.statistics = new Statistics();
  game.storage = new Storage();
  game.graphics = new Graphics();
  game.audio = new Audio();

  game.initScreen = new InitScreen();
  game.loader = new Loader();
  game.loader.preload(startLogos);

  function startLogos() {
    game.initScreen.setup(start);
  }

  function start() {
    initialize();
    setup();
    update();
  }

  function initialize() {
    game.input = new Input();
    game.player = new Player();
    game.world = new World();
    game.loot = new Loot();
    game.forge = new Forge();
    game.tips = new Tips();
  }

  function setup() {
    game.encounter = game.world.areas[0].encounters[0];
    game.draggedItem = null;
    game.draggedSkill = null;
    game.panels = new Panels();
    game.tooltips = [new Tooltip(), new Tooltip(), new Tooltip()];
    game.audio.playSoundtrack(1);
  }

  function update() {
    requestAnimationFrame(update);

    game.tooltips.forEach(function (t) {
      return t.clear();
    });
    game.input.update();
    game.tips.update();
    game.panels.update();
    game.graphics.update();
  }
});
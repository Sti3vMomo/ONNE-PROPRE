let game = new Phaser.Game(640, 960, Phaser.AUTO, "flappyBird");
game.transparent = true;

let gameState = {};

gameState.load = function () {};

gameState.load.prototype = {
  preload: function () {
    this.game.stage.scaleMode == Phaser.StageScaleMode.SHOW_ALL;
    this.game.stage.scale.setShowAll();
    window.addEventListener("resize", function () {
      this.game.stage.scale.refresh();
    });
    this.game.stage.scale.refresh();
    this.game.load.atlasJSONHash('bird', '')
  },

  create: function () {},
};

gameState.main = function () {};
game.State.main.prototype = {=
  create: function () {},

  update: function () {},
};

game.state.add("load", gameState.load);
game.state.add("main", gameState.main);
game.State.start("load");

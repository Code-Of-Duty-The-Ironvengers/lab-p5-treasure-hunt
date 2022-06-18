const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.player.draw();
  if (isMultiPlayer) {
    game.player2.draw();
  }
  game.treasure.drawTreasure();
  game.play();
}

function preload() {
  viking = loadImage("../assets/character-down.png");
  viking2 = loadImage("../assets/character-up.png");
  treasure = loadImage("../assets/treasure.png");
}

function keyPressed() {
  if (keyCode === ARROW_DOWN) {
    game.player.moveDown();
    viking = loadImage("../assets/character-down.png");
  } else if (keyCode === ARROW_UP) {
    game.player.moveUp();
    viking = loadImage("../assets/character-up.png");
  } else if (keyCode === ARROW_LEFT) {
    game.player.moveLeft();
    viking = loadImage("../assets/character-left.png");
  } else if (keyCode === ARROW_RIGHT) {
    game.player.moveRight();
    viking = loadImage("../assets/character-right.png");
  } else if (keyCode === S_DOWN) {
    game.player2.moveDown();
    viking2 = loadImage("../assets/character-down.png");
  } else if (keyCode === W_UP) {
    game.player2.moveUp();
    viking2 = loadImage("../assets/character-up.png");
  } else if (keyCode === A_LEFT) {
    game.player2.moveLeft();
    viking2 = loadImage("../assets/character-left.png");
  } else if (keyCode === D_RIGHT) {
    game.player2.moveRight();
    viking2 = loadImage("../assets/character-right.png");
  } else if (keyCode === T_MULTI_PLAYER) {
    isMultiPlayer = true;
  } else if (keyCode === L_SINGLE_PLAYER) {
    isMultiPlayer = false;
  }
}

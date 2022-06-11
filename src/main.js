function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

const game = new Game();

function preload() {
  vikingImage = loadImage("assets/character-down.png");
  treasureImage = loadImage("assets/treasure.png");
}

function draw() {
  game.play();
}

function keyPressed() {
  if (keyCode === ARROW_UP) {
    game.player.moveUp();
  } else if (keyCode === ARROW_DOWN) {
    game.player.moveDown();
  } else if (keyCode === ARROW_LEFT) {
    game.player.moveLeft();
  } else if (keyCode === ARROW_RIGHT) {
    game.player.moveRight();
  }
}

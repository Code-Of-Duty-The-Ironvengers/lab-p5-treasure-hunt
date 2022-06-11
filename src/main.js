const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.player.draw();
  // game.play();
  // game.test();
}

function preload() {
  viking = loadImage("../assets/character-down.png");
}

function keyPressed() {
  // move() {
  //   if (keyIsDown(ARROW_DOWN)) {
  //     this.moveDown();
  //   } else if (keyIsDown(ARROW_UP)) {
  //     this.moveUp();
  //   }
  //   if (keyIsDown(ARROW_LEFT)) {
  //     this.moveLeft();
  //   } else if (keyIsDown(ARROW_RIGHT)) {
  //     this.moveRight();
  //   }
  // }
  if (keyCode === ARROW_DOWN) {
    game.player.moveDown();
  } else if (keyCode === ARROW_UP) {
    game.player.moveUp();
  } else if (keyCode === ARROW_LEFT) {
    game.player.moveLeft();
  } else if (keyCode === ARROW_RIGHT) {
    game.player.moveRight();
  }
}

const game = new Game();

let img1;
let img2;

function preload() {
  img1 = loadImage("/assets/character-down.png");
  img2 = loadImage("/assets/treasure.png");
}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.play();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    game.player.moveUp();
  } else if (keyIsDown(DOWN_ARROW)) {
    game.player.moveDown();
  }

  if (keyIsDown(LEFT_ARROW)) {
    game.player.moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    game.player.moveRight();
  }
}

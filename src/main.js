const game = new Game();

//Setting up the width and height of the canvas 
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  // Attaching it as the parent element
  canvas.parent("canvas");
}

// Painting the grid of the game
function draw() {
  game.drawGrid();
  game.play();
}
// Asigning the moving functionality to the player
function keyPressed() {
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

// Loads the preload function of the game
function preload() {
  game.preload();
}

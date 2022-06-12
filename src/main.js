const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.play();
}

function keyPressed() {
  game.players.forEach((player) => {
    player.move(keyCode);
  });
}
function preload() {
  PLAYER_DIRECTION_IMAGE.up = loadImage("../assets/character-up.png");
  PLAYER_DIRECTION_IMAGE.down = loadImage("../assets/character-down.png");
  PLAYER_DIRECTION_IMAGE.left = loadImage("../assets/character-left.png");
  PLAYER_DIRECTION_IMAGE.right = loadImage("../assets/character-right.png");
  treasureImage = loadImage("../assets/treasure.png");
}

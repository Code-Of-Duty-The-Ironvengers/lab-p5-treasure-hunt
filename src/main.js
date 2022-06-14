const game = new Game();
const player = new Player();
let img;
let treasure;
const gold = new Treasure();

function preLoad() {
  treasure = loadImage("./assets/treasure.png");
  img = loadImage('./assets/character-down.png');
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  player.drawPlayer();
  game.drawGrid();
  gold.drawTreasure();
  game.play();
}

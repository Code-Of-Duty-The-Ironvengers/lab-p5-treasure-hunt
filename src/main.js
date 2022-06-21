let game = new Game()
let player = new Player(0, 0)

function setup() {
  let canvas = createCanvas(WIDTH, WIDTH);
  canvas.parent("canvas")
  loadImage("/assets/character-down.png", img => {
    player.draw(img)
  })
  loadImage("/assets/character-up.png", img => {
    player.moveUpImage = img
  });
  loadImage("/assets/character-down.png", img => {
    player.moveDownImage = img
  });
  loadImage("/assets/character-left.png", img => {
    player.moveLeftImage = img
  });
  loadImage("/assets/character-right.png", img => {
    player.moveRightImage = img
  });


}

function draw() {
  game.drawGrid();



}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    console.log(player.moveLeftImage);
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  } else if (keyCode === UP_ARROW) {
    player.moveUp();

  } else if (keyCode === DOWN_ARROW) {
    player.moveDown();
  }
}










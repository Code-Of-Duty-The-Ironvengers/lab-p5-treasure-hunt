let game = new Game()
let player = new Player(0, 0)


function setup() {
  let canvas = createCanvas(WIDTH, WIDTH);
  canvas.parent("canvas")
  loadImage("/assets/character-down.png", img => {
    player.draw(img)
  })

}

function draw() {
  game.drawGrid();



}











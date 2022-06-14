class Game {
  drawGrid() {
    for (let x = 0; x <= WIDTH; x += WIDTH / 10) {
      for (let y = 0; y <= HEIGHT; y += HEIGHT / 10) {
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }

  preload() {
    this.player.preload();
  }

  constructor() {
    this.player = new Player();
  }

  play() {
    this.player.moveDown();
    this.player.moveUp();
    this.player.moveLeft();
    this.player.moveRight();
    this.player.drawPlayer();
  }
}

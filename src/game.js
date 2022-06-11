class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure();
    this.score = 0;
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i < WIDTH; i += SQUARE_SIDE) {
      //vertical lines
      line(i, 0, i, HEIGHT);

      //horizontal lines
      line(0, i, WIDTH, i);
    }
  }

  play() {
    this.drawGrid();
    this.player.drawPlayer();
    this.treasure.drawTreasure();
    if (this.isColliding()) {
      this.player.drawPlayer();
      this.treasure.setRandomPosition();
      this.player.score++;
    }
  }

  isColliding() {
    return (
      this.player.col == this.treasure.col &&
      this.player.row == this.treasure.row
    );
  }
}

class Game {
  constructor() {
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = HEIGHT;
    this.player = new Player(0, 0);
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    while (this.startX <= WIDTH) {
      line(this.startX, this.startY, this.endX, this.endY);
      this.startX += SQUARE_SIDE;
      this.endX += SQUARE_SIDE;
    }
    this.startX = 0;
    this.startY = 0;
    this.endX = WIDTH;
    this.endY = 0;

    while (this.startY <= HEIGHT) {
      line(this.startX, this.startY, this.endX, this.endY);
      this.startY += SQUARE_SIDE;
      this.endY += SQUARE_SIDE;

      // this.endX = 0;
      // this.endY = 0;
      // line(this.startX, this.startY, this.endX, this.endY);
      // this.startY += SQUARE_SIDE;
      // // this.endY -= SQUARE_SIDE;
    }
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = HEIGHT;
  }

  // play() {
  //   this.player.move();
  // }

  // test() {
  //   this.player.moveDown(); // Increase by 1 the value of player.row
  //   this.player.moveDown(); // Increase by 1 the value of player.row
  //   this.player.moveRight(); // Increase by 1 the value of player.col
  //   console.log(this.player.col, this.player.row); // => 1,2
  // }
  // line(0, 0, 0, WIDTH);
  // line(0, 0, WIDTH, 0);
}

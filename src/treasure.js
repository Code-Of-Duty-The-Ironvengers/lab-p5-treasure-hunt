class Treasure {
  constructor(col, row) {
    // this.col = random(WIDHT - SQUARE_SIDE);
    // this.row = random(HEIGHT - SQUARE_SIDE);
    // this.col = 900;
    // this.row = 900;
    // this.col = Math.floor(Math.random() * (WIDHT - SQUARE_SIDE));
    // this.row = Math.floor(Math.random() * (HEIGHT - SQUARE_SIDE));
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * ((WIDTH - SQUARE_SIDE) / 100)) * 100;
    this.row = Math.floor(Math.random() * ((HEIGHT - SQUARE_SIDE) / 100)) * 100;
    console.log("New col: " + this.col + " // New row: " + this.row);
  }

  drawTreasure() {
    image(treasure, this.col, this.row, this.width, this.height);
  }
}

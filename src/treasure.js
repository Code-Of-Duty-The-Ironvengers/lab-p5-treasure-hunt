class Treasure {
  constructor(col, row) {
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

class Treasure {
  constructor(col, row, treasureImage) {
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.treasureImage = treasureImage;
  }

  preload() {
    this.treasureImage = loadImage("assets/treasure.png");
  }

  setRandomPosition() {
    return Math.floor(Math.random() * WIDTH - 50);
  }

  drawTreasure() {
    image(this.treasureImage, this.col, this.row, 80, 80);
  }

  resetTreasure() {
    this.col = this.setRandomPosition();
    this.row = this.setRandomPosition();
  }
}

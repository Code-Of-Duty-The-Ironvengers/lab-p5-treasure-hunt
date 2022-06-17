class Treasure {
  constructor(column, row, treasureImg) {
    this.column = column;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.treasureImg = treasureImg;
  }

  preload() {
    this.treasureImg = loadImage("../assets/treasure.png");
  }

  setRandomPosition() {
    // this.column = Math.floor(Math.random() * 10) * 50; // Returns a random integer from 0 to 9, multiply that number by 50
    // this.row = Math.floor(Math.random() * 10) * 50;

    return Math.floor(Math.random() * WIDTH - 50);
  }

  drawTreasure() {
    image(this.treasureImg, this.column, this.row, 80, 80);
  }

  resetTreasure() {
    this.column = this.setRandomPosition();
    this.row = this.setRandomPosition();
  }
}

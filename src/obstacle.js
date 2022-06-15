class Treasure {
  constructor() {
    this.col = this.randomPosition();
    this.row = this.randomPosition();
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }
  randomPosition() {
    // Random method that puts the image into one of the squares available
    // WIDTH/SQUARE SIDE => the number of squares to do the random in, in this case 60 positions
    // The floor function will bring that number
    return Math.floor(Math.random() * (WIDTH / SQUARE_SIDE)) * SQUARE_SIDE;
  }

  preload() {
    // loading all the images with preload
    this.treasure = loadImage("/assets/treasure.png");
  }

  drawTreasure() {
    treasureImage = this.treasure;
    image(treasureImage, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }

  resetTreasure() {
    this.col = this.randomPosition();
    this.row = this.randomPosition();
  }
}

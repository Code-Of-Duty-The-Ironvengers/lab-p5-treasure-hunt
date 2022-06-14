class Treasure {
  constructor() {
    this.col = this.randomPosition();
    this.row = this.randomPosition();
  }
  randomPosition() {
    return Math.floor(Math.random() * (WIDTH / SQUARE_SIDE)) * SQUARE_SIDE;
  }
  draw() {
    image(TREASURE_IMAGE, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
  resetTreasure() {
    this.col = this.randomPosition();
    this.row = this.randomPosition();
  }
}

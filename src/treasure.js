class Treasure {
  constructor(col, row) {
    this.col = this.setRandomPosition();
    this.row = this.setRandomPosition();
    this.treasure = treasure;
  }

  setRandomPosition() {
    return Math.floor(Math.random() * (WIDTH - 100));
  }

  drawTreasure() {
    image(this.treasure, this.col, this.row);
  }

  resetTopAndLeft() {
    this.col = this.setRandomPosition();
    this.row = this.setRandomPosition();
  }
}

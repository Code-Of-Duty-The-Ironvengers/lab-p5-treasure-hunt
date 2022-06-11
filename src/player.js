class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
  }

  moveUp() {
    clear();
    this.row--;
    image(
      vikingImage,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  moveDown() {
    clear();
    this.row++;
    image(
      vikingImage,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
    //imgae(image, initialPositionForX, initialPositionForY, imageWidth, imageHeight)
  }

  moveLeft() {
    clear();
    this.col--;
    image(
      vikingImage,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  moveRight() {
    clear();
    this.col++;
    image(
      vikingImage,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  drawPlayer() {
    player1Score.innerText = this.score;
    if (this.row === 0 && this.col === 0) {
      image(vikingImage, 0, 0, SQUARE_SIDE, SQUARE_SIDE);
    }
  }
}

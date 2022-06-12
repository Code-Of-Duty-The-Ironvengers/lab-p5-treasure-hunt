class Player {
  constructor(col, row, playerNumber, span) {
    this.col = col;
    this.playerNumber = playerNumber;
    this.span = span;
    this.row = row;
    this.score = 0;
    this.movementDirection = "down";
  }

  draw() {
    push();
    image(
      PLAYER_DIRECTION_IMAGE[this.movementDirection],
      this.col,
      this.row,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
    this.span.innerText = this.score;
    pop();
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= SQUARE_SIDE;
    }
    this.movementDirection = "up";
  }
  moveDown() {
    if (this.row < HEIGHT - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
    }
    this.movementDirection = "down";
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
    }
    this.movementDirection = "left";
  }
  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
    }
    this.movementDirection = "right";
  }
}

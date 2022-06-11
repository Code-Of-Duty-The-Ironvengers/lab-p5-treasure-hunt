class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  moveUp() {
    this.row -= SQUARE_SIDE;
  }

  moveDown() {
    this.row += SQUARE_SIDE;
  }

  moveLeft() {
    this.col -= SQUARE_SIDE;
  }

  moveRight() {
    this.col += SQUARE_SIDE;
  }

  draw() {
    // push();
    // fill("orange");
    // rect(this.col, this.row, this.width, this.height);
    image(viking, this.col, this.row, this.width, this.height);

    // pop();
  }

  move() {
    if (keyIsDown(ARROW_DOWN)) {
      this.moveDown();
    } else if (keyIsDown(ARROW_UP)) {
      this.moveUp();
    }
    if (keyIsDown(ARROW_LEFT)) {
      this.moveLeft();
    } else if (keyIsDown(ARROW_RIGHT)) {
      this.moveRight();
    }
  }
}

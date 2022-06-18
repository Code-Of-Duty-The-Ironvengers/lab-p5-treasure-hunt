class Player {
  constructor(col, row, name) {
    this.col = col;
    this.row = row;
    this.name = name;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.score = 0;
    // this.directions = DIRECTIONS[name];
  }

  moveUp() {
    if (this.row - SQUARE_SIDE >= 0) {
      this.row -= SQUARE_SIDE;
    }
  }

  moveDown() {
    if (this.row + SQUARE_SIDE <= HEIGHT - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
    }
  }

  moveLeft() {
    if (this.col - SQUARE_SIDE >= 0) {
      this.col -= SQUARE_SIDE;
    }
  }

  moveRight() {
    if (this.col + SQUARE_SIDE <= WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
    }
  }

  draw() {
    // push();
    // fill("orange");
    // rect(this.col, this.row, this.width, this.height);
    if (this.name === "player1") {
      image(viking, this.col, this.row, this.width, this.height);
    } else if (this.name === "player2") {
      image(
        viking2,
        this.col + 10,
        this.row + 10,
        this.width - 20,
        this.height - 20
      );
      // rect("orange", this.col, this.row, this.width, this.height);
    }
    // pop();
  }

  // move() {
  // if (keyCode === this.directions.down) {
  //   this.moveDown();
  // } else if (keyCode === this.directions.up) {
  //   this.moveUp();
  // }
  // if (keyCode === this.directions.left) {
  //   this.moveLeft();
  // } else if (keyCode === this.directions.right) {
  //   this.moveRight();
  // }
  // }
}

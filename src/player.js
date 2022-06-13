class Player {
  constructor(col, row, name) {
    this.col = col;
    this.row = row;
    this.name = name;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.score = 0;
    this.directions = DIRECTIONS[name];
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

  // move() {
  //   if (keyIsDown(this.directions.down)) {
  //     this.moveDown();
  //   } else if (keyIsDown(this.directions.up)) {
  //     this.moveUp();
  //   }
  //   if (keyIsDown(this.directions.left)) {
  //     this.moveLeft();
  //   } else if (keyIsDown(this.directions.right)) {
  //     this.moveRight();
  //   }
  // }
}

class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    // line(0, 0, WIDTH, 0); //top border
    //line(0, 0, 0, HEIGHT); //left border
    // line(WIDTH, 0, WIDTH, HEIGHT); // right border
    // line(0, HEIGHT, WIDTH, HEIGHT); //bottom border

    let x = 0;
    let y = 0;
    const horizontalLine = line(0, y, WIDTH, y);
    const verticalLine = line(x, 0, x, HEIGHT);

    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }

    for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row -= 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
  moveRight() {
    this.col += 1;
  }

  drawPlayer(col, row) {}

  move() {
    if (keyPressed(UP_ARROW)) {
      this.moveUp();
    } else if (keyPressed(DOWN_ARROW)) {
      this.moveDown();
    }

    if (keyPressed(LEFT_ARROW)) {
      this.moveLeft();
    } else if (keyPressed(RIGHT_ARROW)) {
      this.moveRight();
    }
  }
}

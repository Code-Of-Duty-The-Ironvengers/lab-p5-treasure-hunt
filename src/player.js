class Player {
  constructor(col, row, img) {
    this.col = col;
    this.row = row;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
    this.img = img;
  }

  preLoad() {
    this.img = loadImage("./assets/character-down.png");
  }

  drawPlayer() {
    image(this.img, this.row, this.col, this.width, this.height);
  }

  moveUp() {
    if (keyDown(ARROW_UP)) {
      this.row -= PLAYER_MOVEMENT;

      if (this.row <= this.height) {
        this.row = HEIGHT;
      }
    }
  }

  moveDown() {
    if (keyDown(ARROW_DOWN)) {
      this.row += PLAYER_MOVEMENT;

      if (this.row >= HEIGHT) {
        this.row = -this.height;
      }
    }
  }

  moveLeft() {
    if (keyDown(ARROW_LEFT)) {
      this.col -= PLAYER_MOVEMENT;

      if ((this.col -= this.width)) {
        this.col = WIDTH;
      }
    }
  }

  moveRight() {
    if (keyDown(ARROW_RIGHT)) {
      this.col += PLAYER_MOVEMENT;

      if (this.col >= WIDTH) {
        this.col = -this.width;
      }
    }
  }
}

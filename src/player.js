class Player {
  constructor(col, row, img) {
    this.col = col;
    this.row = row;
    this.img = img;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
  }
  preload() {
    this.img = loadImage("./assets/character-down.png");
  }

  drawPlayer() {
    push();
    image(this.img, this.col, this.row, this.width, this.height);
    pop();
    this.move();
  }

  move() {
    if (keyIsDown(ARROW_LEFT)) {
      this.col -= 5;
      if (this.col < 0) {
        this.col = 0;
      }
      this.img = loadImage("/assets/character-left.png");
    } else if (keyIsDown(ARROW_RIGHT)) {
      this.col += 5;
      if (this.col >= 450) {
        this.col = 450;
      }
      this.img = loadImage("/assets/character-right.png");
    } else if (keyIsDown(ARROW_DOWN)) {
      this.row += 5;
      if (this.row >= 450) {
        this.row = 450;
      }
      this.img = loadImage("/assets/character-down.png");
    } else if (keyIsDown(ARROW_UP)) {
      this.row -= 5;
      if (this.row < 0) {
        this.row = 0;
      }
      this.img = loadImage("/assets/character-up.png");
    }
  }
}

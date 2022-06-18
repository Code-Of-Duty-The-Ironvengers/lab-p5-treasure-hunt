class Game {
  constructor() {
    this.player = new Player(PLAYER_WIDTH, PLAYER_HEIGHT);
    this.treasure = new Treasure(SQUARE_SIDE, SQUARE_SIDE);
    this.score = 0;
  }

  preload() {
    this.player.preload();
    this.treasure.preload();
    this.treasure.setRandomPosition();
  }

  play() {
    this.player.drawPlayer();
    this.treasure.drawTreasure();
    if (this.isColliding()) {
      this.treasure.resetTreasure();
      this.score++;
      scoreOfPlayer.innerText = `${this.score} points`;
    }
  }

  isColliding() {
    const bottomOfPlayer = this.player.col + this.player.height;
    const topOfTreasure = this.treasure.col;
    const isBottomOfPlayer = bottomOfPlayer >= topOfTreasure;

    const topOfPlayer = this.player.col;
    const bottomOfTreasure = this.treasure.height + this.treasure.col;
    const isTopOfTreasure = topOfPlayer <= bottomOfTreasure;

    const leftOfPlayer = this.player.row;
    const rightOfTreasure = this.treasure.row + this.treasure.width;
    const isLeftOfTreasure = leftOfPlayer <= rightOfTreasure;

    const rightOfPlayer = this.player.width + this.player.row;
    const leftOfTreasure = this.treasure.row;
    const isRightOfPlayer = rightOfPlayer >= leftOfTreasure;

    return (
      isBottomOfPlayer && isTopOfTreasure && isLeftOfTreasure && isRightOfPlayer
    );
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let x = 0; x <= WIDTH; x += WIDTH / 10) {
      for (let y = 0; y <= HEIGHT; y += HEIGHT / 10) {
        stroke(0);
        strokeWeight(2);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
}

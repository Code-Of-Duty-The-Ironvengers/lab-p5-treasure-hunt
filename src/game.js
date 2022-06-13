class Game {
  constructor() {
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = HEIGHT;
    this.player = new Player(0, 0, player1);
    this.treasure = new Treasure(
      Math.floor(Math.random() * ((WIDTH - SQUARE_SIDE) / 100)) * 100,
      Math.floor(Math.random() * ((HEIGHT - SQUARE_SIDE) / 100)) * 100
    );
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    while (this.startX <= WIDTH) {
      line(this.startX, this.startY, this.endX, this.endY);
      this.startX += SQUARE_SIDE;
      this.endX += SQUARE_SIDE;
    }
    this.startX = 0;
    this.startY = 0;
    this.endX = WIDTH;
    this.endY = 0;

    while (this.startY <= HEIGHT) {
      line(this.startX, this.startY, this.endX, this.endY);
      this.startY += SQUARE_SIDE;
      this.endY += SQUARE_SIDE;
    }
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = HEIGHT;
  }

  treasureFound(player, treasure) {
    return player.col === treasure.col && player.row === treasure.row;
  }

  play() {
    if (this.treasureFound(this.player, this.treasure)) {
      this.treasure.setRandomPosition();
      this.player.score++;
      document.getElementById("score").querySelector("span").innerText =
        this.player.score;
    }
  }
}

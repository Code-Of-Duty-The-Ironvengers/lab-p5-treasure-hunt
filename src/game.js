class Game {
  constructor() {
    this.player = new Player(0, 0, 1, p1ScoreSpan);
    this.player2 = new Player(
      (WIDTH / 10) * 9,
      (HEIGHT / 10) * 9,
      2,
      p2ScoreSpan
    );
    this.players = [this.player, this.player2];
    this.treasure = new Treasure();
  }
  play() {
    this.draw();
  }

  draw() {
    clear();
    this.drawGrid();
    this.players.forEach((player) => {
      player.draw();
      if (this.isColliding(player, this.treasure)) {
        this.treasure.resetTreasure();
        player.score++;
      }
    });
    this.treasure.draw();
  }

  drawGrid() {
    for (let i = 0; i < 11; i++) {
      // Horizontal Lines
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i);
      // Vertical Lines
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, HEIGHT);
    }
  }

  isColliding(player, treasure) {
    const playerRow = player.row;
    const treasureRow = treasure.row;
    const playerCol = player.col;
    const treasureCol = treasure.col;

    return playerCol === treasureCol && playerRow === treasureRow;
  }
}

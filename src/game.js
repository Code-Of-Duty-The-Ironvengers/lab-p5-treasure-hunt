class Game {
  constructor() {
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = HEIGHT;
    this.player = new Player(0, 0, "player1");
    this.player2 = new Player(
      HEIGHT - SQUARE_SIDE,
      WIDTH - SQUARE_SIDE,
      "player2"
    );
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

  // TO DO: Needs adjustement when second player is around
  treasureFound(player, treasure) {
    return player.col === treasure.col && player.row === treasure.row;
  }

  play() {
    if (this.treasureFound(this.player, this.treasure)) {
      this.treasure.setRandomPosition();
      this.player.score++;
      document.getElementById("scoreP1").querySelector("span").innerText =
        this.player.score;
    } else if (this.treasureFound(this.player2, this.treasure)) {
      this.treasure.setRandomPosition();
      this.player2.score++;
      document.getElementById("scoreP2").querySelector("span").innerText =
        this.player2.score;
    }

    // btnPlayer1.addEventListener("click", function () {
    //   if (!btnPlayer1.classList.contains("active")) {
    //     btnPlayer1.classList.add("active");
    //     btnPlayer2.classList.remove("active");
    //   }
    // });

    // btnPlayer2.addEventListener("click", function () {
    //   if (!btnPlayer2.classList.contains("active")) {
    //     btnPlayer2.classList.add("active");
    //     btnPlayer1.classList.remove("active");
    //     game.player2.draw();
    //   }
    // });
  }
}

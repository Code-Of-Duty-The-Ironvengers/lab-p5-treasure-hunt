class Game {
  constructor() {
    // Places the player on a fix position and the treasure on a random position in the game frame
    this.player = new Player(0, 0, 1, 1);
    // The treasure its in no random position as it is randomized
    this.treasure = new Treasure();
  }
  // Preloads the image of the player and the treasure into the game
  // So you can then call it with an asynchronous call or something like that
  preload() {
    this.player.preload();
    this.treasure.preload();
  }

  play() {
    // Draws the player and the treasure every play iteration, from the draw in main
    this.draw();

  // If in the colliding method returns in the object both the player and the treasure, then 
  // Apply the reset method from the obstacle to the treasure
    if (this.isColliding(this.player, this.treasure)) {
      this.treasure.resetTreasure();
    }
  }

  draw() {
    // Clears for every round after object collision, every time a new game starts
    // Draws the grid for the game, the player and the treasure
    clear();
    this.drawGrid();
    this.player.drawPlayer();
    this.treasure.drawTreasure();
  }

  // Iteración 1 - Drawing the grid for the vikingo
  drawGrid() {
    background("white");
    // For loop for every 60 px of the canvas
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      // Vertical line(x1, y1, x2, y2)
      // 1st loop line x =60  y1=0 x=60 y2=600px
      // 2nd loop line x =120  y1=0 x=120 y2=600px
      line(i, 0, i, WIDTH);
      // Horizontal line(x1, y1, x2, y2)
      line(0, i, HEIGHT, i);
    }
  }

  // Defining the collision method that takes to arguments in the game
  isColliding(player, treasure) {
    // Object keys for all of the rows and columns from the player and treasure created from the classes
    player.row;
    treasure.row;
    player.col;
    treasure.col;
    if (player.row == treasure.row && player.col == treasure.col) {
      return player, treasure;
    }
  }
}

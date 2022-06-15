class Player {
  constructor(col, row, playerNumber, span) {
    // The col, row, the player,the score and the span number passed as the class
    this.col = col;
    this.row = row;
    this.playerNumber = playerNumber;
    this.score = 0;
    this.span = span;
  }

  preload() {
    // loading all the images with preload somewhere
    this.imgUp = loadImage("/assets/character-up.png");
    this.imgDown = loadImage("/assets/character-down.png");
    this.imgRight = loadImage("/assets/character-right.png");
    this.imgLeft = loadImage("/assets/character-left.png");
  }
  drawPlayer() {
    // Setting the initial position of the image, and changing it based on the row and the column
    imagePosition = this.imgDown;
    image(imagePosition, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }

  // Moving up the ffviking
 
  moveUp() {
  // As long as the row is bigger than zero which is the starting position
    if (this.row > 0) {
      // Each time the key is pressed up 
      //this.row equals to the current value of the row minus the square side
      this.row -= SQUARE_SIDE;
    }
  }

  // Moving down the ffvicking

  moveDown() {
  //As long as the row is not bigger than the height - the SQUARE SIDE
  //to keep the little fellaw on canvas
    if (this.row < HEIGHT - SQUARE_SIDE) {
    // To the actual row object position add a square side everytime the key is pressed down
      this.row += SQUARE_SIDE;
    }
  }

  // Moving left the ffvicking

  moveLeft() {
    //As long as the actual value of the column is higher than 0
    if (this.col > 0) {
      // Everytime the left arrow key is pressed change the value of the actual column position the size of a viking
      this.col -= SQUARE_SIDE;
    }
  }

  // Moving to the right the ffviking
  moveRight() {
    // as long as the colum is smaller than the width -SQUARE SIDE
    // To keep the little viking on Canvas
    if (this.col < WIDTH - SQUARE_SIDE) {
      //Add a square side to the current column object value
      this.col += SQUARE_SIDE;
    }
  }
}

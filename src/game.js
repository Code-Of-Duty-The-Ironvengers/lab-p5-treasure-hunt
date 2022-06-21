class Game {
  drawGrid() {
    for (let x = 0; x <= WIDTH; x += WIDTH / 10) {
      for (let y = 0; y < HEIGHT; y += HEIGHT / 10) {
        stroke(1);
        strokeWeight(3);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);

      }
    }



  }


}

class Player {
  constructor(col, row) {
    this.col = col
    this.row = row


  }





  draw(img) {
    image(img, 0, 0)

  }


  moveUp() {
    this.row = this.row - 1
    image(this.moveUpImage, this.col * (WIDTH / 10), this.row * (WIDTH / 10))
  }
  moveDown() {
    this.row = this.row + 1
    image(this.moveDownImage, this.col * (WIDTH / 10), this.row * (WIDTH / 10))
  }
  moveLeft() {
    this.col = this.col - 1
    image(this.moveLeftImage, this.col * (WIDTH / 10), this.row * (WIDTH / 10))
  }
  moveRight() {
    this.col = this.col + 1
    image(this.moveRightImage, this.col * (WIDTH / 10), this.row * (WIDTH / 10))

  }



}


class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.image;
        this.score = 0;
    }
    preLoadPlayer() {
        this.characterImageDown = loadImage("../assets/character-down.png");
        this.characterImageUp = loadImage("../assets/character-up.png");
        this.characterImageLeft = loadImage("../assets/character-left.png");
        this.characterImageRight = loadImage("../assets/character-right.png");
    }

    setupPlayer() {
        this.image = this.characterImageDown;
    }

    moveUp() {
        if (this.row > firstRowYAxis) {
            this.row -= playermove;
            this.image = this.characterImageUp;
        }
    }
    moveDown() {
        if (this.row < lastRowYAxis) {
            this.row += playermove;
            this.image = this.characterImageDown;
        }
    }
    moveLeft() {
        if (this.col > firstRowXAxis) {
            this.col -= playermove;
            this.image = this.characterImageLeft;
        }
    }
    moveRight() {
        if (this.col < lastRowXAxis) {
            this.col += playermove;
            this.image = this.characterImageRight;
        }
    }

    drawPlayer() {
        image(this.image, this.col * 100, this.row * 100, 100, 100);
    }
}

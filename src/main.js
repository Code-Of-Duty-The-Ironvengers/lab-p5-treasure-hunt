const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();

function preload() {
    player.preLoadPlayer();
    treasure.preLoadTreasure();
}

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    player.setupPlayer();
    treasure.setRandomPosition();
}

function draw() {
    clear();
    game.drawGrid();
    player.drawPlayer();
    treasure.drawTreasure();
}

function keyPressed() {
    if (keyCode === 37) {
        player.moveLeft();
    }
    if (keyCode === 39) {
        player.moveRight();
    }
    if (keyCode === 38) {
        player.moveUp();
    }
    if (keyCode === 40) {
        player.moveDown();
    }
    score();
}

function score() {
    let distPlayer = dist(player.col, player.row, treasure.col, treasure.row);

    if (distPlayer === 0) {
        player.score += 1;
        scoreCount();
        setup();
        draw();
    }
}

function scoreCount() {
    document.querySelector("span").innerText = player.score;
}

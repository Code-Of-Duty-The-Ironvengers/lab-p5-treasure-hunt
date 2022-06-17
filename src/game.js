class Game {
    drawGrid() {
        for (let i = 0; i < WIDTH + 1; i += 100) {
            for (let y = 0; y < HEIGHT + 1; y += 100) {
                strokeWeight(1);
                line(i, 0, i, HEIGHT);
                line(0, y, WIDTH, y);
            }
        }
    }
}

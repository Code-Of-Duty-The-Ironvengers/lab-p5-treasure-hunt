const WIDTH = 1000;
const HEIGHT = WIDTH;
const SQUARE_SIDE = WIDTH / 10;
const ARROW_RIGHT = 39;
const ARROW_LEFT = 37;
const ARROW_UP = 38;
const ARROW_DOWN = 40;
const LETTER_W = 87;
const LETTER_A = 65;
const LETTER_S = 83;
const LETTER_D = 68;

const DIRECTIONS = {
  1: {
    left: ARROW_LEFT,
    right: ARROW_RIGHT,
    up: ARROW_UP,
    down: ARROW_DOWN,
  },
  2: {
    up: LETTER_W,
    left: LETTER_A,
    down: LETTER_S,
    right: LETTER_D,
  },
};
Object.freeze(DIRECTIONS);

const PLAYER_DIRECTION_IMAGE = {};
let TREASURE_IMAGE;

const p1ScoreSpan = document.querySelector(".p1-score span");
const p2ScoreSpan = document.querySelector(".p2-score span");

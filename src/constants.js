const WIDTH = 1000;
const HEIGHT = WIDTH;
const SQUARE_SIDE = WIDTH / 10;

const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;

const D_RIGHT = 68;
const S_DOWN = 83;
const A_LEFT = 65;
const W_UP = 87;

const T_MULTI_PLAYER = 84;
const L_SINGLE_PLAYER = 76;

let viking;
let viking2;
let treasure;

// const DIRECTIONS = {
//   player1: {
//     right: ARROW_RIGHT,
//     down: ARROW_DOWN,
//     left: ARROW_LEFT,
//     up: ARROW_UP,
//   },
//   player2: {
//     right: D_RIGHT,
//     down: S_DOWN,
//     left: A_LEFT,
//     up: W_UP,
//   },
// };
// Object.freeze(DIRECTIONS);

const btnPlayer1 = document.getElementById("player1");
const btnPlayer2 = document.getElementById("player2");

let isMultiPlayer = false;

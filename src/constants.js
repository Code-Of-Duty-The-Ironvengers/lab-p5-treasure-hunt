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

let viking;
let treasure;

const DIRECTIONS = {
  player1: {
    right: ARROW_RIGHT,
    down: ARROW_DOWN,
    left: ARROW_LEFT,
    up: ARROW_UP,
  },
  player2: {
    right: D_RIGHT,
    down: S_DOWN,
    left: A_LEFT,
    up: W_UP,
  },
};
Object.freeze(DIRECTIONS);

// TO DO: functionality of buttons
// const btnPlayer1 = document.getElementById('player1');

// btnPlayer1.addEventListener('click', event  => {
// if (btnPlayer1.classList.contains('active')){
//     btnPlayer1.classList.remove('active');
// } else {
//     btnPlayer1.classList.add('active');
// }
// });

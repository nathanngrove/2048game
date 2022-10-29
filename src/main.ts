import { moveTilesDown, moveTilesLeft, moveTilesRight, moveTilesUp } from "./utils/movement";
import { addTile } from "./utils/addTile";

const board = document.getElementById("board");

let canMoveRight = true;
let canMoveLeft = true;
let canMoveUp = true;
let canMoveDown = true;

addTile(board!);

document.addEventListener("keypress", (e) => {
  if(e.key === "d") {
    moveTilesRight(board!, 3, 15);
  }
  if(e.key === "a") {
    moveTilesLeft(board!, 0, 0);
  }
  if(e.key === "w") {
    moveTilesUp(board!, 0, 0);
  }
  if(e.key === "s") {
    moveTilesDown(board!, 0, 0);
  }
  addTile(board!);
  console.log(e.key);
});

export {  };
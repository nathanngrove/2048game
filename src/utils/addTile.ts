import { getEmptyTiles } from "./getEmptyTiles";

export const addTile = (board : HTMLElement) => {
  const emptyTiles = getEmptyTiles(board);

  const randomPlacement = Math.floor(Math.random() * emptyTiles.length);
  const randomNumber = Math.floor(Math.random() * 1.1);

  const tile = document.createElement("div");
  randomNumber === 0 ? tile.textContent = "2" : tile.textContent = "4";
  tile.classList.add("tile");
  randomNumber === 0 ? tile.classList.add("t2") : tile.classList.add("t4");

  board.children[emptyTiles[randomPlacement]].appendChild(tile);
}
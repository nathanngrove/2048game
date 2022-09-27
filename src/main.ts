import Tile from "./tile";
import { shiftTilesRight, shiftTilesLeft, shiftTilesUp, shiftTilesDown } from "./utils/movement";
import { addTile } from "./utils/addTile";

const tilesContainer: HTMLCollection = document.getElementsByClassName("wrapper");
let tiles: Array<Array<Tile>> = [];

Array.from(tilesContainer).forEach((container) => {
  let tempArray: Array<Tile> = new Array;
  Array.from(container.children).forEach((tile) => {
    let newTile = new Tile(tile, tile.textContent === "" ? false : true);
    tempArray.push(newTile);
  });
  tiles.push(tempArray);
});

addTile(tiles);

document.addEventListener("keypress", (e) => {
  if(e.key === "d") {
    shiftTilesRight(tiles);
    addTile(tiles);
  }
  if(e.key === "a") {
    shiftTilesLeft(tiles);
    addTile(tiles);
  }
  if(e.key === "w") {
    shiftTilesUp(tiles);
    addTile(tiles);
  }
  if(e.key === "s") {
    shiftTilesDown(tiles);
    addTile(tiles);
  }
});

export {};
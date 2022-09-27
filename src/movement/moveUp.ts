import Tile from "../Tile";

const findFirstEmptyTileUp = (tilesArray: Array<Array<Tile>>, column: number): number => {
  let amountOfTiles = tilesArray.length - 1;
  for(let i = 0; i <= amountOfTiles; i++) {
    if(tilesArray[i][column].isOccupied()) continue;
    return i;
  }
  return -1;
}

const shiftUp = (tilesArray: Array<Array<Tile>>, column: number) => {
  if(column >= tilesArray.length) return;

  let amountOfTiles = tilesArray.length - 1;
  
  for(let i = 0; i <= amountOfTiles; i++) {
    if(tilesArray[i][column].isOccupied()) {
      let emptyTile = findFirstEmptyTileUp(tilesArray, column);
      if(emptyTile === -1) {
        console.log(`Column ${column} has no empty tiles.`);
        continue;
      }
      if(emptyTile > i) {
        console.log(`Column ${column} is already all the way to the right.`);
        continue;
      }
      tilesArray[emptyTile][column].setText(tilesArray[i][column].getText());
      tilesArray[i][column].setText("");
    }
  }

  shiftUp(tilesArray, column + 1);
}

export const shiftTilesUp = (tilesArray: Array<Array<Tile>>) => {
  shiftUp(tilesArray, 0);
}
import Tile from "../Tile";

const findFirstEmptyTileRight = (tilesArray: Array<Array<Tile>>, row: number): number => {
  let currentRow = tilesArray[row];
  let amountOfTiles = currentRow.length - 1;
  for(let i = amountOfTiles; i >= 0; i--) {
    if(currentRow[i].isOccupied()) continue;
    return i;
  }
  return -1;
}

const shiftRight = (tilesArray: Array<Array<Tile>>, row: number) => {
  if(row >= tilesArray.length) return;
  let currentRow = tilesArray[row];
  let amountOfTiles = currentRow.length - 1;
  
  for(let i = amountOfTiles; i >= 0; i--) {
    if(currentRow[i].isOccupied()) {
      let emptyTile = findFirstEmptyTileRight(tilesArray, row);
      if(emptyTile === -1) {
        console.log(`Row ${row} has no empty tiles.`);
        continue;
      }
      if(emptyTile < i) {
        console.log(`Row ${row} is already all the way to the right.`);
        continue;
      }
      currentRow[emptyTile].setText(currentRow[i].getText());
      currentRow[i].setText("");
    }
  }
  shiftRight(tilesArray, row + 1);
}

export const shiftTilesRight = (tilesArray: Array<Array<Tile>>) => {
  shiftRight(tilesArray, 0);
}
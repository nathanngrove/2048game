import Tile from "../Tile";

const findFirstEmptyTileLeft = (tilesArray: Array<Array<Tile>>, row: number): number => {
  let currentRow = tilesArray[row];
  let amountOfTiles = currentRow.length - 1;
  for(let i = 0; i <= amountOfTiles; i++) {
    if(currentRow[i].isOccupied()) continue;
    return i;
  }
  return -1;
}

const shiftLeft = (tilesArray: Array<Array<Tile>>, row: number) => {
  if(row >= tilesArray.length) return;

  let currentRow = tilesArray[row];
  let amountOfTiles = currentRow.length - 1;
  
  for(let i = 0; i <= amountOfTiles; i++) {
    if(currentRow[i].isOccupied()) {
      let emptyTile = findFirstEmptyTileLeft(tilesArray, row);
      if(emptyTile === -1) {
        console.log(`Row ${row} has no empty tiles.`);
        continue;
      }
      if(emptyTile > i) {
        console.log(`Row ${row} is already all the way to the right.`);
        continue;
      }
      currentRow[emptyTile].setText(currentRow[i].getText());
      currentRow[i].setText("");
    }
  }

  shiftLeft(tilesArray, row + 1);
}

export const shiftTilesLeft = (tilesArray: Array<Array<Tile>>) => {
  shiftLeft(tilesArray, 0);
}
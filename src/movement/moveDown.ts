import Tile from "../Tile";

const findFirstEmptyTileDown = (tilesArray: Array<Array<Tile>>, column: number): number => {
  let amountOfTiles = tilesArray.length - 1;
  for(let i = amountOfTiles; i >= 0; i--) {
    if(tilesArray[i][column].isOccupied()) continue;
    return i;
  }
  return -1;
}

const shiftDown = (tilesArray: Array<Array<Tile>>, column: number) => {
  if(column >= tilesArray.length) return;

  let amountOfTiles = tilesArray.length - 1;
  
  for(let i = amountOfTiles; i >= 0; i--) {
    if(tilesArray[i][column].isOccupied()) {
      let emptyTile = findFirstEmptyTileDown(tilesArray, column);
      if(emptyTile === -1) {
        console.log(`Column ${column} has no empty tiles.`);
        continue;
      }
      if(emptyTile < i) {
        console.log(`Column ${column} is already all the way to the right.`);
        continue;
      }
      tilesArray[emptyTile][column].setText(tilesArray[i][column].getText());
      tilesArray[i][column].setText("");
    }
  }

  shiftDown(tilesArray, column + 1);
}

export const shiftTilesDown = (tilesArray: Array<Array<Tile>>) => {
  shiftDown(tilesArray, 0);
}
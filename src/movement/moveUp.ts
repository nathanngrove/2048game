import Tile from "../Tile";

const shiftTileUp = (tilesArray: Array<Array<Tile>>, column: number, tile: number) => {
  if(column > tilesArray.length - 1) return;

  if(tile > tilesArray.length - 1) {
    shiftTileUp(tilesArray, column + 1, 0);
    return;
  }

  if(tile === 0 || !tilesArray[tile][column].isOccupied()) {
    shiftTileUp(tilesArray, column, tile + 1);
    return;
  }

  if(!tilesArray[tile - 1][column].isOccupied()) {
    tilesArray[tile - 1][column].setText(tilesArray[tile][column].getText());
    tilesArray[tile][column].setText("");
    shiftTileUp(tilesArray, column, tile - 1);
  } else {
    if(tilesArray[tile - 1][column].getText() === tilesArray[tile][column].getText()) {
      tilesArray[tile - 1][column].setText(`${Number(tilesArray[tile - 1][column].getText()) + Number(tilesArray[tile][column].getText())}`);
      tilesArray[tile][column].setText("");
    }
  }

  shiftTileUp(tilesArray, column, tile + 1);
}

export const shiftTilesUp = (tilesArray: Array<Array<Tile>>) => {
  shiftTileUp(tilesArray, 0, 0);
}
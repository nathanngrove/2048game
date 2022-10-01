import Tile from "../Tile";

const shiftTileDown = (tilesArray: Array<Array<Tile>>, column: number, tile: number) => {
  if(column > tilesArray.length - 1) return;

  if(tile < 0) {
    shiftTileDown(tilesArray, column + 1, 3);
    return;
  }

  if(tile === (tilesArray.length - 1) || !tilesArray[tile][column].isOccupied()) {
    shiftTileDown(tilesArray, column, tile - 1);
    return;
  }

  if(!tilesArray[tile + 1][column].isOccupied()) {
    tilesArray[tile + 1][column].setText(tilesArray[tile][column].getText());
    tilesArray[tile][column].setText("");
    shiftTileDown(tilesArray, column, tile + 1);
  } else {
    if(tilesArray[tile + 1][column].getText() === tilesArray[tile][column].getText()) {
      tilesArray[tile + 1][column].setText(`${Number(tilesArray[tile + 1][column].getText()) + Number(tilesArray[tile][column].getText())}`);
      tilesArray[tile][column].setText("");
    }
  }

  shiftTileDown(tilesArray, column, tile - 1);
}

export const shiftTilesDown = (tilesArray: Array<Array<Tile>>) => {
  shiftTileDown(tilesArray, 0, 3);
}
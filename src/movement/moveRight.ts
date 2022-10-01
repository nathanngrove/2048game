import Tile from "../Tile";

const shiftTileRight = (tilesArray: Array<Array<Tile>>, row: number, tile: number) => {
  if(row > tilesArray.length - 1) return;

  if(tile < 0) {
    shiftTileRight(tilesArray, row + 1, tilesArray.length - 1);
    return;
  }

  if(tile === (tilesArray.length - 1) || !tilesArray[row][tile].isOccupied()) {
    shiftTileRight(tilesArray, row, tile - 1);
    return;
  }

  if(!tilesArray[row][tile + 1].isOccupied()) {
    tilesArray[row][tile + 1].setText(tilesArray[row][tile].getText());
    tilesArray[row][tile].setText("");
    shiftTileRight(tilesArray, row, tile + 1);
  } else {
    if(tilesArray[row][tile + 1].getText() === tilesArray[row][tile].getText()) {
      tilesArray[row][tile + 1].setText(`${Number(tilesArray[row][tile + 1].getText()) + Number(tilesArray[row][tile].getText())}`);
      tilesArray[row][tile].setText("");
    }
  }

  shiftTileRight(tilesArray, row, tile - 1);
}

export const shiftTilesRight = (tilesArray: Array<Array<Tile>>) => {
  shiftTileRight(tilesArray, 0, 3);
}
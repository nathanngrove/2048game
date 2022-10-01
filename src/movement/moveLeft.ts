import Tile from "../Tile";

const shiftTileLeft = (tilesArray: Array<Array<Tile>>, row: number, tile: number) => {
  if(row > tilesArray.length - 1) return;

  if(tile > tilesArray.length - 1) {
    shiftTileLeft(tilesArray, row + 1, 0);
    return;
  }

  if(tile === 0 || !tilesArray[row][tile].isOccupied()) {
    shiftTileLeft(tilesArray, row, tile + 1);
    return;
  }

  if(!tilesArray[row][tile - 1].isOccupied()) {
    tilesArray[row][tile - 1].setText(tilesArray[row][tile].getText());
    tilesArray[row][tile].setText("");
    shiftTileLeft(tilesArray, row, tile - 1);
  } else {
    if(tilesArray[row][tile - 1].getText() === tilesArray[row][tile].getText()) {
      tilesArray[row][tile - 1].setText(`${Number(tilesArray[row][tile - 1].getText()) + Number(tilesArray[row][tile].getText())}`);
      tilesArray[row][tile].setText("");
    }
  }

  shiftTileLeft(tilesArray, row, tile + 1);
}

export const shiftTilesLeft = (tilesArray: Array<Array<Tile>>) => {
  shiftTileLeft(tilesArray, 0, 0);
}
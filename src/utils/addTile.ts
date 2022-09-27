import Tile from "../Tile"

const findAllEmptyTiles = (tilesArray: Array<Array<Tile>>): Array<Tile> => {
  let emptyTiles: Array<Tile> = [];

  tilesArray.forEach(row => {
    row.forEach(tile => {
      if(!tile.isOccupied())
        emptyTiles.push(tile);
    });
  });

  return emptyTiles;
}

export const addTile = (tilesArray: Array<Array<Tile>>) => {
  let emptyTiles: Array<Tile> = findAllEmptyTiles(tilesArray);

  if(emptyTiles.length === 0) return;
  
  let pendingTile: number = Math.floor(Math.random() * emptyTiles.length);
  let number: number = Math.random() < 0.5 ? 4 : 2;
  emptyTiles[pendingTile].setText(`${number}`);
}
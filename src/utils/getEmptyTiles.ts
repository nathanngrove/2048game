export const getEmptyTiles = (board : HTMLElement): Array<number> => {
  const emptyTiles : Array<number> = [];

  for(let i = 0; i < board.children.length; i++) {
    if(!board.children[i].hasChildNodes()) {
      emptyTiles.push(i);
    }
  }

  return emptyTiles;
}
import { BEGINNING_OF_ROW, END_OF_ROW } from "../utils/constants";

const moveRowRight = (board : HTMLElement, tile : number) => {
  //If the tile is the end of the row, we know we could just return - no moving necessary
  if(END_OF_ROW.includes(tile)) return;
  
  let currentTile = board.children[tile];
  
  //If the tile doesn't have an actual tile, we know we could just return as well since there is nothing to move
  if(!currentTile.hasChildNodes()) return;
  //Changing the currentTile to be the actual tile itself so that the code below is slightly cleaner
  currentTile = board.children[tile].children[0];

  const neighborTile = board.children[tile + 1];

  //If the neighborTile doesn't have child nodes, we know we have to move the tile to the right at least once
  if(!neighborTile.hasChildNodes()) {
    currentTile.classList.add("move-tile-right");
    neighborTile.appendChild(currentTile);
    neighborTile.children[0].classList.remove("move-tile-right");
    moveRowRight(board, tile + 1);
  }

  return;
}

const combineRow = (board : HTMLElement, row : number) => {
  //Start combining for one row, starting from the end of the row (the right)
  combineTiles(board, row, END_OF_ROW[row], END_OF_ROW[row] - 1);
  return;
}

const combineTiles = (board : HTMLElement, row : number, firstTile : number, secondTile : number) => {
  //Since we're using recursion, these are our base cases
  if(secondTile < BEGINNING_OF_ROW[row] || firstTile > END_OF_ROW[row]) return;
  
  //Creating variables for the elements so that it's easier to follow
  let firstTileElement = board.children[firstTile];
  let secondTileElement = board.children[secondTile];

  //If the firstTileElement doesn't have child nodes, but the secondElement does we know that we need to move the tile over since we want them to be all to the right
  //Otherwise we could end up with empty spots that shouldn't be there
  if(!firstTileElement.hasChildNodes() && secondTileElement.hasChildNodes()) {
    secondTileElement.children[0].classList.add("move-tile-right");
    firstTileElement.appendChild(secondTileElement.children[0]);
    firstTileElement.children[0].classList.remove("move-tile-right");
    combineTiles(board, row, firstTile - 1, secondTile - 1);
  }

  //If both elements have child nodes, we know they are occupied and that we have to do something
  if(firstTileElement.hasChildNodes() && secondTileElement.hasChildNodes()) {
    //If the tiles do have the same textContent, we will combine them
    if(firstTileElement.children[0].textContent === secondTileElement.children[0].textContent) {
      console.log(`Combine ${firstTile} and ${secondTile} in row ${row}`);
      secondTileElement.children[0].classList.add("move-tile-right");
      firstTileElement.children[0].textContent = (Number(firstTileElement.children[0].textContent) + Number(secondTileElement.children[0].textContent)).toString();
      firstTileElement.children[0].classList.remove(`t${secondTileElement.children[0].textContent}`);
      firstTileElement.children[0].classList.add(`t${firstTileElement.children[0].textContent}`);
      secondTileElement.children[0].remove();
    }
    //If the tiles don't have the same textContent, we will call the next tiles to be combined
    combineTiles(board, row, firstTile - 1, secondTile - 1);
  }
}

const canMoveTileRight = (board : HTMLElement, row : number, tile : number) : boolean => {
  if(tile > 15) return true;


}

const canMoveRowRight = (board : HTMLElement, row : number) : boolean => {
  if(row > 3) return true;
  
  canMoveTileRight(board, row, END_OF_ROW[row]);
  return false;
}

const canMoveRight = (board : HTMLElement) : boolean => {
  return canMoveRowRight(board, 0);
}

export const moveTilesRight = (board : HTMLElement, row : number, tile : number) => {
  //Check if it's a valid row
  if(row > 3 || row < 0) return;
  
  //Check if it's a valid tile
  if(tile > 15 || tile < 0) return;

  //If it's the end of the row, we know we don't need to move at all, just combine if possible and call the next tile
  if(END_OF_ROW.includes(tile)) {
    //Combine
    moveTilesRight(board, row, tile - 1);
    return;

  //If it's the beginning of the row, we have to do what we would do normally except we call the function with an decreasing row as well
  } else if(BEGINNING_OF_ROW.includes(tile)) {
    moveRowRight(board, tile);
    combineRow(board, row);
    moveTilesRight(board, row - 1, tile - 1);
    return;

  //If the tile has child nodes we know we have to possibly move the tile or combine with another tile
  } else if(board.children[tile].hasChildNodes()) {
    moveRowRight(board, tile);
  }

  moveTilesRight(board, row, tile - 1);
  return;
}
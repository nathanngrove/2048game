export default class Tile {
  element: Element;
  private occupied: boolean;

  constructor(element: Element, occupied: boolean) {
    this.element = element;
    this.occupied = occupied;
  }

  isOccupied(): boolean {
    return this.occupied;
  }

  getText(): string {
    let text : string = this.element.textContent === null ? "" : String(this.element.textContent);
    return text;
  }

  setText(newText: string) {
    if(newText === "")
      this.occupied = false;
    else
      this.occupied = true;
    this.element.textContent = newText;
  }
}
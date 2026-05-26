export default class Ship {
  constructor(length) {
    this.length = length;
    this.health = length;
  }
  hit() {
    this.health--;
  }
  isSunk() {
    return this.health <= 0;
  }
}

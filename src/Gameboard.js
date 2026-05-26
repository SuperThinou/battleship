export default class Gameboard {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.ships = [];
  }
  placeShip() {
    const shipTypes = [
      { name: "Carrier", length: 5 },
      { name: "Battleship", length: 4 },
      { name: "Destroyer", length: 3 },
      { name: "Submarine", length: 3 },
      { name: "Patrol Boat", length: 2 },
    ];

    for (const type of shipTypes) {
      const ship = new Ship(type.length);
      this.ships.push(ship);
    }
  }
}

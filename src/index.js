import './styles/style.scss';

class Ship {
  constructor(width, hit, sunk) {
    this.width = width;
    this.hit = hit;
    this.sunk = sunk;
  }

  get shipWidth() {
    return this.width;
  }

  get beenHit() {
    return this.hit;
  }

  get isSunk() {
    return this.sunk;
  }
}

export { Ship };

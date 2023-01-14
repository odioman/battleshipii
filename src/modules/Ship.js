export default class Ship {
    constructor(length) {
        this.length = length;
        this.hits = [];
        this.name = this.nameHandler()
    }

    hit(position) {
        if (this.hits.includes(position) || position < 0 || position >= this.length) {
            return
        }
        this.hits.push(position)
    }

    isSunk() {
        return this.hits.length === this.length
    }

    nameHandler() {
        if (this.length === 6) return "Carrier";
        if (this.length === 5) return "Battleship";
        if (this.length === 4) return "Destroyer";
        if (this.length === 3) return "Submarine";
        if (this.length === 2) return "Patrol Boat";
    }

    getLength() {
        return this.length
    }
}
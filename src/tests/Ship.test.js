import Ship from "../modules/Ship";

test('creates and initializes a ship', () => {
    let ship = new Ship(3);
    expect(ship).toEqual({ length: 3, hits: [], name:'Submarine' });
});

test('creates name', () => {
    let ship = new Ship(6);
    expect(ship.name).toBe('Carrier');
});

test('ship should take a hit', () => {
    let ship = new Ship(4);
    ship.hit(2);
    expect(ship.hits).toContain(2);
    
});

test('ship should sink', () => {
    let ship = new Ship(3);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBeTruthy
});

test('prevents hit from multiple times at the same spot', () => {
    let ship = new Ship(4);
    ship.hit(1);
    ship.hit(1);
    expect(ship.hits.length).toBe(1);
});

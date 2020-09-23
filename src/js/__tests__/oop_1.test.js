import { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon }  from '../oop_1';

test('create Character', () => {
    const received = new Character('Jane', 'Bowman');
    const expected = {
        name: 'Jane',
        type: 'Bowman',
        health: 100,
        level: 1,

        attack: 0,
        defence: 0
    }


expect(received).toEqual(expected);
});

test('create Character with error', () => {
    
    function createCharacter(name, type) {
        let character = new Character(name, type);
        return character;
    }

    expect(() => {
        createCharacter(123, 345);
      }).toThrow(Error);
    
});
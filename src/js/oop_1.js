export class Character {

    constructor(name, type) {
        if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
            const error = new Error('Error!');
            return error;
        } else {
            this.name = name;
        }

        if (typeof type !== 'string') {
            const error = new Error('Error!');
            return error;
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;

        this.attack = 0;
        this.defence = 0;
    }

    levelUp() {

        if (this.health == 0) {
            const error = new Error('Error!');
            return error;
        } else {
            this.level += 1;
            let procentAttack = (this.attack / 100) * 20;
            let procentDefence = (this.defence / 100) * 20;
            this.attack += procentAttack;
            this.defence += procentDefence;
            this.health = 100;
        }
        
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

export class Bowman extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 40;
        this.defence = 10;
    }
}

export class Daemon extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 10;
        this.defence = 40;
    }
}
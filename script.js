class Pet {
    constructor(name) {
        this.name = name;
        this.health = 100
        this.hunger = 100
    }
    drinks() {
        this.health += 5;
        return this;
    }
    eats() {
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.name}'s health is ${this.health}`)
    }
    stats() {
        return console.table({
            name:this.name,
            health: this.health,
            hunger: this.hunger,
        });
    }
}

class Bulbasaur {

}

class Charmander {

}

class Squirtle {
    
}

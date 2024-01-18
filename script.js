class Pet {
    constructor(name) {
        this.name = name;
        this.health = 100
        this.hunger = 100
        this.xp = 0
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

class Bulbasaur extends Pet {
    constructor(name) {
        super(name)
        this.bulbasaurSpecial = 100
    }
    grass() {
        this.bulbasaurSpecial += 10;
        this.hunger -= 5;
    }
}

class Charmander extends Pet {
    constructor(name) {
        super(name)
        this.charmanderSpecial = 100
    }
    fire() {
        this.charmanderSpecial += 10;
        this.hunger -= 5;
    }
}

class Squirtle extends Pet {
    constructor(name) {
        super(name)
        this.squirtleSpecial = 100
    }
    water(){
        this.squirtleSpecial += 10;
        this.hunger -= 5;
    }
}


const petChooser = document.querySelector("#petChooser")




// class Pet {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         this.hunger = 100;
//         this.xp = 0;
//     }

//     drinks() {
//         this.health += 5;
//         return this;
//     }

//     eats() {
//         this.health += 5;
//         this.hunger += 10;
//         console.log(`${this.name}'s health is ${this.health}`);
//     }

//     stats() {
//         return console.table({
//             name: this.name,
//             health: this.health,
//             hunger: this.hunger,
//         });
//     }
// }

// class Bulbasaur extends Pet {
//     constructor(name) {
//         super(name);
//         this.bulbasaurSpecial = 100;
//     }

//     grass() {
//         this.bulbasaurSpecial += 10;
//         this.hunger -= 5;
//     }
// }

// class Charmander extends Pet {
//     constructor(name) {
//         super(name);
//         this.charmanderSpecial = 100;
//     }

//     fire() {
//         this.charmanderSpecial += 10;
//         this.hunger -= 5;
//     }
// }

// class Squirtle extends Pet {
//     constructor(name) {
//         super(name);
//         this.squirtleSpecial = 100;
//     }

//     water() {
//         this.squirtleSpecial += 10;
//         this.hunger -= 5;
//     }
// }

// const petChooser = document.getElementById("petChooser");

// petChooser.addEventListener("click", (event) => {
//     const clickbutton = event.target;
//     if (clickbutton.matches("#bulbasaur")) {
//       
//     } else if (clickbutton.matches("#charmander")) {
//     
//     } else if (clickbutton.matches("#squirtle")) {
//       
//     }
// });
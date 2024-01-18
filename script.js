function startGame() {
    document.getElementById("gameStart").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
}




class Pet {
    constructor(name) {
        this.name = name;
        this.health = 100
        this.hunger = 100
        this.xp = 0
        // this.status = "Alive"
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
        })
    }
    // updateStatus () {
    //     if (this.health < 50) {
    //         this.status = "Injured"
    //     } else if (this.health === 0) {
    //         this.status = "Runs away"
    //     };
    // }
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



function choosePet() {
  const userChoice = document.getElementById('petChooser').value;

  switch (userChoice) {
    case 'bulbasaur':
      currentPet = new Bulbasaur();
      break;
    case 'charmander':
      currentPet = new Charmander();
      break;
    case 'squirtle':
      currentPet = new Squirtle();
      break;
    default:
      console.error("Invalid pet choice"); 
      break;
  }
}



const chosenName = new Squirtle ('spu----')
console.log(chosenName)

// playerChoice.eats()
// console.log(chosenName)




// const petChooser = document.getElementById("petChooser");

// petChooser.addEventListener("click", (event) => {
//     const clickbutton = event.target;
//     if (clickbutton.matches("#bulbasaur")) {
      
//     } else if (clickbutton.matches("#charmander")) {
    
//     } else if (clickbutton.matches("#squirtle")) {
//     }
// });

// console.log("petChooser")
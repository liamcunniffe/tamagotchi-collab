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


let choosePet = ""
let yourPet = ""

const bulbasaurBtn = document.getElementById("bulbasaurBtn");
bulbasaurBtn.addEventListener("click", ()=>{
    choosePet = "bulbasaur"
})

const charmanderBtn = document.getElementById("charmanderBtn");
charmanderBtn.addEventListener("click", ()=>{
    choosePet = "charmander"
})

const squirtleBtn = document.getElementById("squirtleBtn");
squirtleBtn.addEventListener("click", ()=>{
    choosePet = "squirtle"
})

const namePetInpt = document.getElementById("namePetInpt");
const namePetBtn = document.getElementById("namePetBtn");
namePetBtn.addEventListener("click", ()=>{
    if (namePetInpt.value === "") {
        alert("Please enter a name!")
        return
    }

    if (choosePet === "bulbasaur") {
        yourPet = new Bulbasaur (namePetInpt.value)
    }
    else if (choosePet === "charmander") {
        yourPet = new Charmander (namePetInpt.value)
    }
    else if (choosePet === "squirtle") {
        yourPet = new Squirtle (namePetInpt.value)
    }
    else {
        alert("Please choose a Pet!")
    }
    console.log(yourPet)
})


setInterval(() => {
    yourPet.health -=5
    yourPet.hunger -=5
    yourPet[`${choosePet}Special`] -=5
    yourPet.exp +=10
    document.getElementById("health").value=yourPet.health
    document.getElementById("hunger").value=yourPet.hunger
    document.getElementById("special").value=yourPet[`${choosePet}Special`]
    document.getElementById("exp").value=yourPet.exp
}, 1000);

const healthBtn = document.getElementById("healthBtn");
const hungerBtn = document.getElementById("hungerBtn");
const specialBtn = document.getElementById("specialBtn");
const evolveBtn = document.getElementById("evolveBtn");

















// const petChoice = (playerChoice) => {
//     const petType = document.addEventListener ("click", () => {
//         if (player )

//     });
//     petImage.src = `./images/dice-${petType}.svg`;
// }



// const chosenName = new Squirtle ('spu----')
// console.log(chosenName)

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
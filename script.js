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
    }

    drinks() {
        this.health = (this.health + 20 >= 100)?100:this.health+20;

    }

    eats() {
        this.hunger = (this.hunger + 20 >= 100)?100:this.hunger+20;
    }
}
class Bulbasaur extends Pet {
    constructor(name) {
        super(name)
        this.bulbasaurSpecial = 100
        this.species = ["Bulbasaur", "Ivysaur", "Venusaur"]
    }

    grass() {
        this.bulbasaurSpecial = (this.bulbasaurSpecial >= 100)?100:this.bulbasaurSpecial +20;
    }
}
class Charmander extends Pet {
    constructor(name) {
        super(name)
        this.charmanderSpecial = 100
        this.species = ["Charmander", "Charmeleon", "Charizard"]
    }

    fire() {
        this.charmanderSpecial = (this.charmanderSpecial >= 105)?100:this.charmanderSpecial +20;
    }
}
class Squirtle extends Pet {
    constructor(name) {
        super(name)
        this.squirtleSpecial = 100
        this.species = ["Squirtle", "Wartortle", "Blastoise"]
    }

    water(){
        this.squirtleSpecial = (this.squirtleSpecial >= 105)?100:this.squirtleSpecial +20;
    }
}


// Pet chooser
let choosePet = ""
let yourPet = ""
let evolveNum = 1

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

const youLose = () => {
    if (yourPet.health <= 0 && yourPet.hunger <= 0 && yourPet[`${choosePet}Special`]) {
        clearInterval (timer)
        alert("Your Pokemon died, hungry and with special needs!")
        location.reload
    }
    else if (yourPet.health <= 0 && yourPet.hunger) {
        clearInterval (timer)
        alert("Your Pokemon died, hungry!")
        location.reload
    }
    else if (yourPet.health <= 0) {
        clearInterval (timer)
        alert("Your Pokemon died!")
        location.reload
    }
    else if (yourPet.hunger <= 0) {
        clearInterval (timer)
        alert("Your Pokemon ate you! They are wild you know!")
        location.reload
    }
    else if (yourPet[`${choosePet}Special`] <= 0) {
        clearInterval (timer)
        alert("Your Pokemon has devloped special needs!")
        location.reload
    }
};

const namePetInpt = document.getElementById("namePetInpt");
const namePetBtn = document.getElementById("namePetBtn");
namePetBtn.addEventListener("click", ()=>{
    if (namePetInpt.value === "") {
        alert("Please enter a name!")
        return
    }

    if (choosePet === "bulbasaur") {
        yourPet = new Bulbasaur (namePetInpt.value)
        petImage.src = `./images/${choosePet}/${evolveNum}.jpg`
    }
    else if (choosePet === "charmander") {
        yourPet = new Charmander (namePetInpt.value)
        petImage.src = `./images/${choosePet}/${evolveNum}.jpg`
    }
    else if (choosePet === "squirtle") {
        yourPet = new Squirtle (namePetInpt.value)
        petImage.src = `./images/${choosePet}/${evolveNum}.jpg`
    }
    else {
        alert("Please choose a Pet!")
    }
    document.getElementById("specialPet").textContent = `${yourPet.species[evolveNum-1]} Special`
    console.log(`${yourPet} Special`)
    timer = setInterval(() => {
        yourPet.health -=5
        yourPet.hunger -=5
        yourPet[`${choosePet}Special`] -=5
        yourPet.xp +=5
        document.getElementById("health").value=yourPet.health
        document.getElementById("hunger").value=yourPet.hunger
        document.getElementById("special").value=yourPet[`${choosePet}Special`]
        document.getElementById("exp").value=yourPet.xp
        youLose()
    }, 1000);
})
let timer = 0


const healthBtn = document.getElementById("healthBtn");
const hungerBtn = document.getElementById("hungerBtn");
const specialBtn = document.getElementById("specialBtn");
const evolveBtn = document.getElementById("evolveBtn");

healthBtn.addEventListener("click", ()=> {
    yourPet.drinks()
})

hungerBtn.addEventListener("click", ()=> {
    yourPet.eats()
})

specialBtn.addEventListener("click", ()=> {
    if (choosePet === "bulbasaur") {
        yourPet.grass()
    }
    if (choosePet === "charmander") {
        yourPet.fire()
    }
    else if (choosePet === "squirtle") {
        yourPet.water()
    }
})


const petImage = document.getElementById("petImage");
evolveBtn.addEventListener("click", ()=> {
    if (yourPet.xp >= 100) {
        yourPet.xp = 0
        evolveNum ++
        petImage.src = `./images/${choosePet}/${evolveNum}.jpg`
        document.getElementById("specialPet").textContent = `${yourPet.species[evolveNum-1]} Special`
        clearInterval (timer)
        timer = setInterval(() => {
            yourPet.health -=5
            yourPet.hunger -=5
            yourPet[`${choosePet}Special`] -=5
            yourPet.xp +=10
            document.getElementById("health").value=yourPet.health
            document.getElementById("hunger").value=yourPet.hunger
            document.getElementById("special").value=yourPet[`${choosePet}Special`]
            document.getElementById("exp").value=yourPet.xp
            youLose()
        }, 1000-(evolveNum*200));
    }
})



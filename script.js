
//semi colons are optional in js
//declare your variables upfront like above even if you dont have a value for them yet.

let xp = 0;
let health = 100;
let gold = 500;
let currentWeapon = 1;
let fighting;              //without initializing
let monsterHealth;
let inventory = ["stick"];
let powerRecord = [5];
let prices =[1];
let indexes = [0];

//referencing and updating html elements example
const button1 = document.querySelector("#button1"); //notice the css selector type #el for ids
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#xpText");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
        name: "stick",
        power: 5,
        price: 1,
        text: "stick bought",
        "button function": addStick,
        text2: "stick sold",
    },
    {
        name: "dagger",
        power: 30,
        price: 5,
        text: "dagger bought",
        "button function": addDagger,
        text2: "dagger sold",
    },
    {
        name: "claw hammer",
        power: 50,
        price: 20,
        text: "claw hammer bought",
        text2: "claw hammer sold",
    },
    {
        name: "sword",
        power: 100,
        price: 40,
        text: "sword bought",
        text2: "Sword sold",
    }
];

let stored = [{
    name: "stick",
    power: 5,
    price: 1,
    text: "stick bought",
    "button function": addStick,
    text2: "stick sold",
},]

const monsters=[
    {
        name: "slime",
        level: 2,
        health: 15

    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    },
];

const locations=[
    {
    name: "town square", 
    "button text":["Go to store.", "Go to cave.", "Fight the dragon."],
    "button functions":[goStore, goCave, fightDragon],
    text:"You are in the town square. You see a sign that says \"store\".",
    },
    {
    name: "store",
    "button text":["buy 10 health(10 gold).", "buy weapon.", "Go to town square.", "sell items"],
    "button functions":[buyHealth, buyWeapon, goTown, sellWeapon],
    text:"You are in the store.",
    },
    {
    name: "cave",
    "button text":["Fight slime", "Fight fanged beast", "Go to town", "sell weapons"],
    "button functions":[fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters"
    }
]

// initialize buttons
button1.onclick = locations[0]["button functions"][0];
button2.onclick = locations[0]["button functions"][1]; 
button3.onclick = locations[0]["button functions"][2];

function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onclick = location["button functions"][0]; 
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location["text"];  //alternatively location.text if the key is a single word
}

function goTown(){
    update(locations[0]);
    console.log("going!");
    button4.setAttribute("style", "display : none");
}

function goStore(){
    hideButtons();
    showFirstButtons();
    button4.setAttribute("style", "display: inline-block");
    update(locations[1]);
    button4.innerText = "sell items";
    button4.onclick = sellWeapon;
}
function goCave(){
    update(locations[2]);
}
function fightDragon(){
    console.log("fighting the dragon.");
}

function buyGold(){
    console.log("buying gold");
}
function buyHealth(){
    if (gold >= 10){
        gold -= 10;
        health += 10;
        healthText.innerText = health;
        goldText.innerText = gold;
    }
    else{
        text.innerText = "Not enough gold";
    }
}
function buyWeapon(){
    showButtons();
    button1.innerText = weapons[0]["name"];
    button2.innerText = weapons[1]["name"];
    button3.innerText = weapons[2]["name"];
    button4.innerText = weapons[3]["name"];
    button5.innerText ="go back to the store";

    button1.onclick = addStick; 
    button2.onclick = addDagger;
    button3.onclick = addHammer;
    button4.onclick = addSword;
    button5.onclick = goStore;
    text.innerHTML = "<strong>Buy weapon:<br>---stick for 1 gold ---dagger for 5 gold<br> ---claw hammer for 1 gold";
}

function getWeapon(position){
    const a = Number(position-1);
    if (weapons[a].name == inventory[a]){
        let addedWeapon = weapons[position]
        if (powerRecord.every(checkWeapon) == true){
            if (inventory.length <= 4){    
                if(gold >= addedWeapon.price){
                    gold -= addedWeapon.price;
                    currentWeapon += 1;
                    inventory.push(addedWeapon.name);
                    stored.push(addedWeapon);
                    text.innerText= index.text;
                    goldText.innerText = gold;
                }
                else{
                    text.innerText="not enough gold"
                }
                }
            else {
                text.innerText="You are out of storage.Sell or drop some items "
            }
        } else{
            text.innerText= "you already have a better weapon"
        }
    } else{
        text.innerText = "you have not unlocked this weapon yet!"
    }
}
function addStick(){
   getWeapon(0);
}
function addDagger(){
    getWeapon(1);
}
function addHammer(){
    getWeapon(2);
}
 function addSword(){
    getWeapon(3);
}



function fightSlime(){
    console.log("fighting slime");
}
function fightBeast(){
    console.log("fighting beast");
}

function showButtons(){
    button4.setAttribute("style", "display: inline-block");
    button5.setAttribute("style", "display: inline-block");
}

function hideButtons(){
    button4.setAttribute("style", "display: none");
    button5.setAttribute("style", "display: none");
}
function showFirstButtons(){
    button2.setAttribute("style", "display: inline-block");
    button3.setAttribute("style", "display: inline-block");
    
}

function sellWeaponShortened(d){
    console.log(d)
    showButtons();
    button1.innerText = inventory[0];
    button2.innerText = inventory[1];
    button3.innerText = inventory[2];
    button4.innerText =inventory[3];
    button5.innerText ="go back to the store";

    button1.onclick = sell0; 
    button2.onclick = sell1;
    button3.onclick = sell2;
    button4.onclick = sell3;
    button5.onclick = goStore;
    text.innerHTML = "<strong>Sell weapon:<br>---stick for 1 gold ---dagger for 5 gold<br> ---claw hammer for 1 gold ---sword for 40 gold";

}

function checkWeapon(x) {
    return x < stored[position].power;
  }

function sellWeapon(){

if (inventory.length <= 1){
    sellWeaponShortened(0);

    button2.setAttribute("style", "display: none");
    button3.setAttribute("style", "display: none");
    button4.setAttribute("style", "display: none");
} else if(inventory.length == 2){
    sellWeaponShortened(0);

    button3.setAttribute("style", "display: none");
    button4.setAttribute("style", "display: none");
} else if(inventory.length == 3) {
    sellWeaponShortened(0);

    button4.setAttribute("style", "display: none");
} else {
    sellWeaponShortened(0);
}
}


function sell0(){
    giveWeapon(0);
 }
 function sell1(){
    giveWeapon(1);
 }
 function sell2(){
    giveWeapon(2);
 }
 function sell3(){
    giveWeapon(3);
 }

function giveWeapon(bon){
    const matchExists = weapons.some(weapon => inventory.includes(weapons[bon].name)) ;
    if (matchExists == true){ 

        if (inventory.length >= 1){
            gold += stored.price;
            currentWeapon -= 1;
            inventory = inventory.filter(item => item !== stored[bon].name);
            stored = stored.filter(item => item.name !== stored[bon]);
            text.innerText= stored[bon].text;
            goldText.innerText = gold;
        } else {
            text.innerText  = "you cannot have 0 weapons"
        }

    } else {
        text.innerText = "you do not posses this weapon"
    }
}

let xp = 0;
let health = 100;
let gold = 500;
let currentWeapon = 1;
let fighting;          
let monsterHealth;
let inventory = ["stick"];
let powerChat =[5];


const button1 = document.querySelector("#button1");
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
        text2: "stick sold",
    },
    {
        name: "dagger",
        power: 30,
        price: 5,
        text: "dagger bought",
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


const stored = [
    {
        name: "stick",
        power: 5,
        price: 1,
        text: "stick bought",
        text2: "stick sold",
    },
]

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
    text.innerText = location["text"]; 
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
    button1.innerText = weapons[1]["name"];
    button2.innerText = weapons[2]["name"];
    button3.innerText = weapons[3]["name"];
    button4.innerText ="go back to the store";
    button5.setAttribute("style", "display: none");
; 
    button1.onclick = addDagger;
    button2.onclick = addHammer;
    button3.onclick = addSword;
    button4.onclick = goStore;
    text.innerHTML = "<strong>Buy weapon:<br>---stick for 1 gold ---dagger for 5 gold<br> ---claw hammer for 1 gold";
}


function getWeapon(weaponIndex){
    if (inventory.includes(weapons[weaponIndex].name)) {  //check if player has the weapon already
        text.innerText = "You already have this weapon!"
    } else{
        if (stored.some(value => value.power > weapons[weaponIndex].power) == true){ //check that player weapons aren't better than weapon being purchased
            text.innerText = "You already have a more powerful weapon!"
        } else{
            if (weapons[(weaponIndex-1)].name == inventory[(inventory.length-1)]){  //make sure player purchases weapons in order of increasing power
                if (inventory.length <= 4){  //limit on number of weapons a player can have at a time

                    if(gold >= weapons[weaponIndex].price){  //check that player has enough gold
                        gold -= weapons[weaponIndex].price;
                        currentWeapon += 1;
                        inventory.push(weapons[weaponIndex].name);
                        stored.push(weapons[weaponIndex]);
                        text.innerText= weapons[weaponIndex].text;
                        goldText.innerText = gold;
                    } else{
                        text.innerText="Not enough gold!";
                    }

                    } else {
                        text.innerText="You are out of storage!"
                    }
            } else{
                text.innerText = "you cannot purchase this weapon yet!"
            }
        }
    }
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

function sellWeapon(sold){
    console.log(sold)
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
    if (inventory.includes(stored[bon].name)) {  //check if player has the weapon
        if (bon == 0){
            giveWeaponCore(bon);
        }else{
            if (inventory. includes(weapons[([bon]-1)])){  //make sure player sells weapons in order of increasing power
                text.innerText = "you cannot sell this weapon. You have less powerful weapon(s) in inventory"
            } else{
                giveWeaponCore(bon); 
            }
    }
    } else{
        text.innerText = "You do not have this weapon"
    }
}

function giveWeaponCore(bon2){ 
    console.log(bon2)  
    if (inventory.length > 1) {  //lensure player remains with at least 1 weapon

        gold += stored[bon2].price;
        currentWeapon -= 1;
        inventory.splice([bon2], 1);
        stored.splice([bon2], 1);
        text.innerText= weapons[bon2].text2;
        goldText.innerText = gold;
        sellWeapon(1);  //to refresh the page after every purchase

    } else {
        text.innerText="You cannot have zero weapons"
    }
}

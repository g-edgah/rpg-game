//vanilla
//test

let xp = 0;
let health = 100;
let gold = 100;
let currentWeapon = 1;
let fighting;          
let monsterHealth;
let inventory = ["Stick"];
let defeatedMonsters = []


const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
        name: "Stick",
        power: 5,
        price: 2,
        sellPrice: 1,
    },
    {
        name: "Dagger",
        power: 30,
        price: 5,
        sellPrice: 3,
    },
    {
        name: "Claw hammer",
        power: 50,
        price: 20,
        sellPrice: 15,
    },
    {
        name: "Sword",
        power: 100,
        price: 40,
        sellPrice: 30,
    }
];


let stored = [
    {
        name: "Stick",
        power: 5,
        Price: 2,
        sellPrice: 1,
    },
];


let equiped = [
    {
        name: "Stick",
        power: 5,
        Price: 2,
        sellPrice: 1,
    },
];


const monsters=[
    {
        name: "Slime",
        level: 2,
        health: 15

    },
    {
        name: "Fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "Dragon",
        level: 20,
        health: 300
    },
];

const locations=[
    {
    name: "town square", 
    "button text":["Go to store.", "Go to cave.", "Fight the dragon.", "inventory"],
    "button functions":[goStore, goCave, fightDragon, seeInventory],
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
    "button text":["Fight slime", "Fight fanged beast", "Go to town"],
    "button functions":[fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters"
    },
    {
    name: "fight",
    "button text":["Attack", "Dodge", "Run"],
    "button functions":[attack, dodge, goTown],
    text: "You are fighting a monster"
    },
    {
    name: "easter egg",
    "button text": ["2", "8", "Go to town"],
    "button functions":[pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a numberabove. Ten numbers will be randomly chosen between o and 10. if the number you chose matches one of the random numbers, you win!"
    }
    /*
    {
    name: "kill monster",
    "button text":["Go to town square"],
    "button functions":[goTown],
    text: "The monster has been defeated. You have gained "+xpGained+" xp and "+goldGainedTotal+"gold for your victory."
    },*/
]

// initialize buttons
button1.onclick = locations[0]["button functions"][0];
button2.onclick = locations[0]["button functions"][1]; 
button3.onclick = locations[0]["button functions"][2];
button4.onclick = locations[0]["button functions"][3];



function showButtons(){
    button4.style.display = "inline-block";
    button5.style.display = "inline-block";
}

function hideButtons(){
    button4.style.display = "none";
    button5.style.display = "none";
}
function showFirstButtons(){
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    
}
function hideLastButton(){
    button4.style.display = "inline-block";
    button5.style.display = "none";
}


function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];

    button1.onclick = location["button functions"][0]; 
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
    text.innerText = location["text"]; 
}

function goTown(){
    opacity(0);
    monsterStats.style.display = "none";
    button2.style.display= "inline-block"
    button3.style.display= "inline-block";
    button4.style.display = "inline-block";
    button5.style.display= "none";
    update(locations[0]);
}

function goStore(){
    opacity();
    button5.style.display = "none";
    button4.style.display = "inline-block";
    showFirstButtons();
    
    update(locations[1]);
}

function goCave(){
    hideButtons;
    button4.style.display = "none";
    update(locations[2]);

}


function buyHealth(){
    if (health < 100 ){
        if (gold >= 10){
            gold -= 10;
            health += 10;
            healthText.innerText = health;
            goldText.innerText = gold;
        }
        else{
            text.innerText = "Not enough gold!";
        }
    } else {
        text.innerText= "You have maxed out your health!"
    }
}
function buyWeapon(){
    showButtons();
    button1.innerText = weapons[0]["name"];
    button2.innerText = weapons[1]["name"];
    button3.innerText = weapons[2]["name"];
    button4.innerText = weapons[3]["name"];
    button5.innerText ="go back to the store";
    

;   button1.onclick = displayw0;
    button2.onclick = displayw1;
    button3.onclick = displayw2;
    button4.onclick = displayw3;
    button5.onclick = goStore;
    text.innerHTML = "<strong>click on a weapon to see more details</strong>";
}

function displayw0(){
    displayDetailsw(0)
    opacity();
    button1.style.opacity = 0.5;
}
function displayw1(){
    displayDetailsw(1)
    opacity();
    button2.style.opacity = 0.5;
}
function displayw2(){
    displayDetailsw(2)
    opacity();
    button3.style.opacity = 0.5;
}
function displayw3(){
    displayDetailsw(3)
    opacity();
    button4.style.opacity = 0.5;
}

function displayDetailsw(pok) {
    text.innerHTML = "Name: "+weapons[pok].name+"<br>Power: "+weapons[pok].power+"<br> Price: "+weapons[pok].price+"<br> <button id='buy'> Buy "+weapons[pok].name+"</button>";
    buttonBuy = document.querySelector("#buy");
    pakow = pok;

    if (inventory.includes(weapons[pok].name)){
        buttonBuy.innerText = "Already bought!";
        buttonBuy.style.opacity = 0.5;
    } else {
        if (pok == 0){
            buttonBuy.onclick = addStick;
        } else if (pok ==1 ){
            buttonBuy.onclick = addDagger;
        } else if (pok ==2 ){
            buttonBuy.onclick = addHammer;
        } else if (pok ==3 ){
            buttonBuy.onclick = addSword;
        }
    }
}

function getWeapon(weaponIndex){
    if (inventory.includes(weapons[weaponIndex].name)) {  //check if player has the weapon already
        text.innerText = "You already have this weapon!"
    } else{
        //if (stored.some(value => value.power > weapons[weaponIndex].power) == true){ //check that player weapons aren't better than weapon being purchased
         //   text.innerText = "You already have a more powerful weapon!"
       // } else{
            //if (weapons[(weaponIndex-1)].name == inventory[(inventory.length-1)]){  //make sure player purchases weapons in order of increasing power
               
                if (inventory.length <= 4){  //limit on number of weapons a player can have at a time

                    if(gold >= weapons[weaponIndex].price){  //check that player has enough gold
                        gold -= weapons[weaponIndex].price;
                        currentWeapon += 1;
                        inventory.push(weapons[weaponIndex].name);
                        stored.push(weapons[weaponIndex]);
                        text.innerText= weapons[weaponIndex].name+" bought for "+ weapons[weaponIndex].price+" gold!";
                        goldText.innerText = gold;
                    } else{
                        text.innerText="Not enough gold!";
                    }

                    } else {
                        text.innerText="You are out of storage!"
                    }
            //} else{
              //  text.innerText = "you cannot purchase this weapon yet!"
            //}
        //}
    }
}


function addStick(){
    opacity();
    button1.style.opacity = 0.5;
    getWeapon(0);
}
function addDagger(){
    opacity();
    button2.style.opacity = 0.5;
    getWeapon(1);
}
function addHammer(){
    opacity();
    button3.style.opacity = 0.5;
    getWeapon(2);
}
 function addSword(){
    opacity();
    button4.style.opacity = 0.5;
    getWeapon(3);
}


function fightSlime(){
    fighting = 0;
    goFight();
}
function fightBeast(){
    fighting = 1;
    goFight();
}
function fightDragon(){
    button4.style.display = "none";
    fighting = 2;
    goFight();
}


function goFight(){
    monsterHealth = monsters[fighting].health
    monsterHealthText.innerText = monsterHealth;
    monsterNameText.innerText = monsters[fighting].name;
    update(locations[3]);
    monsterStats.style.display = "block";
}


function attack(){
    text.innerText = monsters[fighting].name+" attacking!"
    text.innerText += " You attack it with your "+equiped[0].name+".";
    
    
    if (isMonsterHit || (health <= 20) && (equiped[0].name !== "Hilt")){
        if (Math.random() <= 0.1){
            let index = stored.findIndex(item => item.name === equiped[0].name);
            text.innerText = "Your "+equiped[0].name+" broke!";
           
            if (index !== -1){ 
                stored.splice(index, 1)
                inventory.splice(index, 1);
                //stored = stored.filter(item => item.name !== equiped[0].name)
                
                equiped.splice(0, 1);
                equiped.push( {     //equips a broken hilt with zero attack power
                    name: "Hilt",
                    power: 0,
                    sellPrice: 0,
                    namba : 4
                    })
                
                if (inventory.length >=1 ){
                    text.innerText += " You can equip another weapon from the inventory";
            } else {
                    text.innerText = " Your last weapon broke!"
                    //equiped.push(weapons[0]); 
                    stored.push(weapons[0]);  //give player stick if last weapon breaks
                    //inventory.push(weapons[0].name);
                }
        } else{
            text.innerText = "The brocken weapon has no effect on the monster"
            health -= getMonsterAttackValue(monsters[fighting].level); //monster will still damage player if he continues to attack with broken weapon
            if (health <= 0){
                health = 0;
                healthText.innerText = health
                lose();
            } else {
                text.innerText = "The brocken weapon has no effect on the monster";
                healthText.innerText = health;
            }
        }
        } else {
            health -= getMonsterAttackValue(monsters[fighting].level);
            monsterHealth -= equiped[0].power+Math.floor(Math.random()*xp)+1;
            healthText.innerText = health;
            monsterHealthText.innerText = monsterHealth;
            if (health <= 0){
                health = 0;
                healthText.innerText = health
                lose();
            } else if (monsterHealth <= 0){
            monsterHealth = 0;
            fighting === 2 ? winGame() : defeatMonster();

        }
    }
    } else{
        text.innerText += " You miss!";
    }
     

    

}

function getMonsterAttackValue(level){
     let hit = (level * 5) - (Math.floor(Math.random() * xp));
     return hit;
}

function isMonsterHit(){
    return Math.random() > 0.2 ; //makes it such that its true 80% of the time
}

function lose(){
    text.innerText = "You lost!! Dead!! Finito!! The end!!";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";

    button1.innerText = "Restart";
    button1.onclick = restart;
    
}
function winGame(){
    monsterStats.style.display = "none";
    text.innerText = "You won!! yaay!!";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";

    button1.innerText = "Restart";
    button1.onclick = restart;
}

function defeatMonster(){
    //monsterHealthText.innerText = monsterHealth
    monsterStats.style.display = "none";
    goldGained = Math.floor(monsters[fighting].level*6.7)
    gold += goldGained;
    goldGainedTotal = 0;
    goldGainedTotal += goldGained;
    xpGained = monsters[fighting].level
    //update(locations[4])
    xp += xpGained;
    goldText.innerText = gold; 
    xpText.innerText = xp;
    
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";

    button1.innerText = "Go back to town";
    button1.onclick = easterEgg;
    button2.innerText = "Go back to town";
    button2.onclick = goTown;
    text.innerText = "The monster has been defeated. You have gained "+xpGained+" xp and "+goldGainedTotal+" gold for your victory.";
    defeatedMonsters.push(monsters[fighting].name)
}


function dodge(){
    text.innerText = "you dodge the attack from the "+monsters[fighting].name+".";
}


function sellWeaponCore(){
    showButtons();
    button1.innerText = inventory[0];
    button2.innerText = inventory[1];
    button3.innerText = inventory[2];
    button4.innerText =inventory[3];
    button5.innerText ="go back to the store";

    button1.onclick = displaySell0; 
    button2.onclick = displaySell1;
    button3.onclick = displaySell2;
    button4.onclick = displaySell3;
    button5.onclick = goStore;

    if (abra == "[object MouseEvent]"){  //text will only update with sold items if an item has been sold
        text.innerHTML = "<strong>Sell weapon:</strong> Click on a weapon to see more details.";
    } else {  
        text. innerText = abra
    }
}

function displaySell0(){
    displayDetailss(0)
    opacity();
    button1.style.opacity = 0.5;
}
function displaySell1(){
    displayDetailss(1)
    opacity();
    button2.style.opacity = 0.5;
}
function displaySell2(){
    displayDetailss(2)
    opacity();
    button3.style.opacity = 0.5;
}
function displaySell3(){
    displayDetailss(3)
    opacity();
    button4.style.opacity = 0.5;
}

function displayDetailss(pik) {
    text.innerHTML = "Name: "+stored[pik].name+"<br>Power: "+stored[pik].power+"<br> Selling Price: "+stored[pik].sellPrice+"<br> <button id='sell'> Sell "+stored[pik].name+"</button>";
    buttonSell = document.querySelector("#sell");
    pakos = pik;

    if (inventory.includes(stored[pik].name)){
        if (pik == 0){
            buttonSell.onclick = sell0;
        } else if (pik ==1 ){
            buttonSell.onclick =sell1;
        } else if (pik ==2 ){
            buttonSell.onclick = sell2;
        } else if (pik ==3 ){
            buttonSell.onclick = sell3;
        }
        
    } else {
        buttonSell.innerText = "Already sold!";
        buttonSell.style.opacity = 0.5;
    }
}

function sellWeapon(boom){
    abra = boom;
    if (inventory.length <= 1){
        sellWeaponCore(abra);

        button2.style.display= "none";
        button3.style.display = "none";
        button4.style.display = "none";
    } else if(inventory.length == 2){
        sellWeaponCore(abra);

        button3.style.display = "none";
        button4.style.display = "none";
    } else if(inventory.length == 3) {
        sellWeaponCore(abra);

        button4.style.display = "none";
    } else {
        sellWeaponCore(abra);
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

function giveWeapon(num){
    bon = num;
    if (inventory.includes(stored[bon].name)) {  //check if player has the w        eapon
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

function giveWeaponCore(){ 
    if (inventory.length > 1) {  //lensure player remains with at least 1 weapon
        
        gold += stored[bon].sellPrice;
        currentWeapon -= 1;
        let boughtText= stored[bon].name+" sold for "+ stored[bon].sellPrice+" gold!";
        inventory.splice([bon], 1);
        stored.splice([bon], 1);
        goldText.innerText = gold;
        sellWeapon(boughtText);  //to refresh the page after every purchase

    } else {
        text.innerText="You cannot have zero weapons"
    }
}


function seeInventory(){
    text.innerHTML = "Click on a weapon to see more details and/or to equip it<br><strong>your current weapon is: </strong><br><strong>Name: </strong>"+equiped[0].name+"<br><strong>Power: </strong>"+equiped[0].power;

    if (inventory.length == 0){
        button1.innerText = "Go back to town";
        button1.onclick = goTown;
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        button5.style.display = "none";
    } else if (inventory.length == 1){
        button1.innerText = stored[0].name;
        button1.onclick = display0;
        button2.innerText = "Go back to town";
        button2.onclick = goTown;
        button3.style.display = "none";
        button4.style.display = "none";
        button5.style.display = "none";
    } else if(inventory.length == 2){
        button1.innerText = stored[0].name;
        button1.onclick = display0;
        button2.innerText = stored[1].name;
        button2.onclick = display1;
        button3.innerText = "Go back to town square";
        button3.onclick = goTown;
        button4.style.display = "none";
        button5.style.display = "none";
    } else if(inventory.length == 3){
        button1.innerText = stored[0].name;
        button1.onclick = display0;
        button2.innerText = stored[1].name;
        button2.onclick = display1;
        button3.innerText = stored[2].name;
        button3.onclick = display2;
        button4.innerText = "Go back to town square";
        button4.onclick = goTown;
        button5.style.display = "none"
    }else{
        button1.innerText = stored[0].name;
        button1.onclick = display0;
        button2.innerText = stored[1].name;
        button2.onclick = display1;
        button3.innerText = stored[2].name;
        button3.onclick = display2;
        button4.innerText = stored[3].name;
        button4.onclick = display3;
        button5.style.display = "inline-block";
        button5.innerText = "Go back to town square";
        button5.onclick = goTown;
        }
            
}


function display0(){
    displayDetails(0)
    opacity();
    button1.style.opacity = 0.5;
}
function display1(){
    opacity();
    displayDetails(1)
    button2.style.opacity = 0.5
}
function display2(){
    opacity();
    displayDetails(2);
    button3.style.opacity = 0.5;
}
function display3(){
    opacity();
    displayDetails(3);
    button4.style.opacity = 0.5;
}

function displayDetails(pak) {
    text.innerHTML = "Name: "+stored[pak].name+"<br> Power: "+stored[pak].power+"<br> <button id='yes'> Equip "+stored[pak].name+"</button> <br> Your current weapon is "+equiped[0].name+" with a power of "+equiped[0].power;
    buttonYes = document.querySelector("#yes");
    pako = pak;

    if (stored[pak].name == equiped[0].name){
        buttonYes.innerText = "Already quiped!";
        buttonYes.style.opacity = 0.5;
    } else {
    buttonYes.onclick = chosen;
    }
}

function chosen(){
    equiped.splice(0, 1, stored[pako])
    text.innerHTML = equiped[0].name+" equiped successfully!<br>Your current weapon is "+equiped[0].name+" with a power of "+equiped[0].power;
}


function opacity(){
    button1.style.opacity = 1;
    button2.style.opacity = 1;
    button3.style.opacity = 1;
    button4.style.opacity = 1;
}

function restart(){
    xp = 0;
    health = 100;
    currentWeapon = 0;
    inventory = ["Stick"]
    gold = 50;
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    defeatedMonsters = [];

    stored = [
    {
        name: "Stick",
        power: 5,
        sellPrice: 1,
    },
    ];


    equiped = [
        {
            name: "Stick",
            power: 5,
            sellPrice: 1,
        },
    ];
    goTown();
}

function easterEgg (){
    update(locations[4]);
}

function pickTwo(){
    pick(2);
}
function pickEight(){
    pick(8);
}
function pick (guess) {
    let numbers = [];

    while (numbers.length < 5 ){
        numbers.push(Math.floor(Math.random() * 11));
    }

    text.innerText = "You picked "+ guess +". Here are the random numbers: \n"
    //for (let x in numbers) {
        //text.innerText += numbers[x];
    for (let i = 0; i < 5; i++) {
        text.innerText += numbers[i] + "\n";
    }
    if (numbers.indexOf(guess) !== -1){
        text.innerText += "You guessed right! You win 20 gold!";
        gold += 20;
        goldText.innerText = gold;
    } else {
        text.innerText += "You guessed wrong! You lose 5 health!";
        health -= 5;
        healthText.innerText = health;

        if (health <= 0){
            lose();
        }
    }

}
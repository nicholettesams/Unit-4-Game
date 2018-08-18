//Objects
//Probably would be better to have a class called Pokemon and then create new objects of the Pokemon class
var Venusar = {
    name:"Vemusar", 
    defaultHP: 100, 
    currentHP: 100,
    defaultAttackPower:9,
    currentAttackPower: 9, //Keeps track of increasing attackPower after each attack
    counterAttackPower: 50,
    resetAttackPower: function() {this.currentAttackPower = this.defaultAttackPower;},
    resetHP: function() {this.currentHP = this.defaultHP;}
};

var Blastoise = {
    name:"Blastoise", 
    defaultHP: 100, 
    currentHP: 100,
    defaultAttackPower:11,
    currentAttackPower:11,
    counterAttackPower: 50,
    resetAttackPower: function() {this.currentAttackPower = this.defaultAttackPower;},
    resetHP: function() {this.currentHP = this.defaultHP;}
};

var Charizard = {
    name:"Charizard", 
    defaultHP: 100, 
    currentHP: 100, 
    defaultAttackPower:7,
    currentAttackPower:7,
    counterAttackPower: 50,
    resetAttackPower: function() {this.currentAttackPower = this.defaultAttackPower;},
    resetHP: function() {this.currentHP = this.defaultHP;}
};

var Raichu = {
    name:"Raichu", 
    defaultHP: 100, 
    currentHP: 100, 
    defaultAttackPower:5,
    currentAttackPower:5,
    counterAttackPower: 50,
    resetAttackPower: function() {this.currentAttackPower = this.defaultAttackPower;},
    resetHP: function() {this.currentHP = this.defaultHP;}
};

var character = ""; //character chosen by user
var defender = ""; //current defender

var outputData = function(){
    console.log("outputData")
    
}

var updateHTML = function(tag, value, append){
    var element = document.getElementById(tag);
    var tempValue = "";

    if (append){
        tempValue = element.textContent + value;
    } else {
        tempValue = value;
    }

    element.textContent = tempValue;
}

/***************/
/*  Game Play  */
/***************/
//Setup/Reset game

//User selects character, character to new section
$(".pokemon").on("click", function() {
    character = this;

    //set all as defenders that are not the chosen one from above
    
});


//User selects defender, move defender to new section
$(".pokemon").on("click", function() {
    defender = this;
});

//Each attack - When user clicks Attack button
var $attackBtn = $("#attack");
$attackBtn.on("click", function() {
    //User character attack power increases by it's base attack power
    //defender attack power never changes
    character.currentAttackPower += character.attackPower

    //Decrease user hp and defender hp

    //Log attacks to the screen
    updateHTML("attack-log", "You attacked " + defender + "for " + attackPower + "damage.", true);
    updateHTML("attack-log", defender + " + attacked you back for " + counterAttackPower + "damage.", true);
});

//Check to see if won/lost
//If user HP = 0, you lost

//If all defender's HP = 0, you won

//Restart game
$("#restart").on("click", function() {
    Blastoise.resetAttackPower;
    Blastoise.resetHP;
    Charizard.resetAttackPower;
    Charizard.resetHP;
    Venusar.resetAttackPower;
    Venusar.resetHP;
    Raichu.resetAttackPower;
    Raichu.resetHP;
});
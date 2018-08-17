//Objects
//Probably would be better to have a class called Pokemon and then create new objects of the Pokemon class
var Venusar = {
    name:"Vemusar", 
    hp: 100, 
    attackPower:9,
    counterAttackPower: 50
};

var Blastoise = {
    name:"Blastoise", 
    hp: 100, 
    attackPower:11,
    counterAttackPower: 50
};

var Charizard = {
    name:"Charizard", 
    hp: 100, 
    attackPower:7,
    counterAttackPower: 50
};

var Raichu = {
    name:"Raichu", 
    hp: 100, 
    attackPower:5,
    counterAttackPower: 50
};

var character = "";
var defender = "";

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

//User selects character, move other 3 characters to new section
$(".pokemon").on("click", function() {
    character = this;
});

//set all as defenders that are not the chosen one from above
defe.addClass("defender");

//User selects defender, move defenders to new section
$(".pokemon").on("click", function() {
    defender = this;
});

//Each attack - When user clicks Attack button
var $attackBtn = $("#attack");
$attackBtn.on("click", function() {
    //User character attack power increases by it's base attack power
    //defender attack power never changes

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
    
});
var character = ""; //character chosen by user
var defender = ""; //current defender
var characterCurrentHP = 0;
var characterCurrentAttachPower = 0;
var defenderCurrentHP = 0;

var outputData = function(){
    console.log("outputData")
    console.log("current character:" + character);
    console.log("current defender"  + defender);
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
$(document).ready(function() {

    //User selects character, character to new section
    $(".pokemon").on("click", function() {
        if (character) {
            defender = this;
            //character.addClass("defender");
            $(defender).detach().appendTo("#defender-section");
            defenderCurrentHP = defender.attr("defaultHP");
        } else {
            character = this;
            //character.addClass("character");
            $(character).detach().appendTo("#character-section");
            characterCurrentHP = character.attr("defaultHP");
        }
        
        outputData();
        //set all as defenders that are not the chosen one from above
        
    });

    //Each attack - When user clicks Attack button
    var $attackBtn = $("#attack");
    $attackBtn.on("click", function() {
        //Decrease user hp and defender hp
        characterCurrentHP -= defender.attr("counterAttackPower") ;
        defenderCurrentHP -= characterCurrentAttachPower;

        //User character attack power increases by it's base attack power
        //defender attack power never changes
        characterCurrentAttackPower += character.attr("defaultAttackPower");

        //Log attacks to the screen
        updateHTML("attack-log", "You attacked " + defender.name + "for " + characterCurrentAttackPower + "damage. <br>", true);
        updateHTML("attack-log", defender.name + " + attacked you back for " + defender.attr("counterAttackPower") + "damage. <br>", true);
    
        //Check to see if won/lost
        //If user HP = 0, you lost
        //If no more defenders left and current defender's HP = 0, you won
        if (characterCurrentHP = 0){
            alert("You lost!");
        } else if (defenderCurrentHP === 0 && $("#start").is(":empty")){
            alert("You won!");
        }
    });

    //Restart game
    $("#restart").on("click", function() {
        location.reload();
    });

});
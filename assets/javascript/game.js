var character = ""; //character chosen by user
var defender = ""; //current defender
var characterCurrentHP = 0;
var characterCurrentAttackPower = 0;
var defenderCurrentHP = 0;

var outputData = function(){
    console.log("outputData")
    console.log("current character: " + character);
    console.log("current defender: " + defender);
    console.log("characterCurrentHP: " + characterCurrentHP);
    console.log("defenderCurrentHP: " + defenderCurrentHP);
    console.log("characterCurrentAttackPower: " + characterCurrentAttackPower);
}
/***************/
/*  Game Play  */
/***************/
$(document).ready(function() {

    //User selects character, character to new section
    $(".pokemon").on("click", function() {
        if (character) {
            defender = $(this);
            //character.addClass("defender");
            defender.detach().appendTo("#defender-section");
            defenderCurrentHP = Number(defender.attr("defaultHP"));
        } else {
            character = $(this);
            //character.addClass("character");
            character.detach().appendTo("#character-section");
            characterCurrentHP = Number(character.attr("defaultHP"));
            characterCurrentAttackPower = Number(character.attr("defaultAttackPower"));
        } 
        outputData(); 
    });

    //Each attack - When user clicks Attack button
    var $attackBtn = $("#attack");
    $attackBtn.on("click", function() {
        //Decrease user hp and defender hp
        characterCurrentHP -= defender.attr("counterAttackPower") ;
        defenderCurrentHP -= characterCurrentAttackPower;

        //User character attack power increases by it's base attack power
        //defender attack power never changes
        characterCurrentAttackPower += Number(character.attr("defaultAttackPower"));

        //Log attacks to the screen
        $("#attack-log").append("<p>You attacked " + defender.attr("name") + " for " + characterCurrentAttackPower + " damage. </p>");
        $("#attack-log").append("<p>" + defender.attr("name") + " attacked you back for " + defender.attr("counterAttackPower") + " damage. </p>");
    
        outputData();
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
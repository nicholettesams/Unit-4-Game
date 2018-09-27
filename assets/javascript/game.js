var character = ""; //character chosen by user
var defender = ""; //current defender
var characterCurrentHP = 0;
var characterCurrentAttackPower = 0;
var defenderCurrentHP = 0;
var attackEnabled = false;

var outputData = function(){
    console.log("outputData")
    console.log("characterCurrentHP: " + characterCurrentHP);
    console.log("characterCurrentAttackPower: " + characterCurrentAttackPower);
    console.log("defenderCurrentHP: " + defenderCurrentHP);
}
/***************/
/*  Game Play  */
/***************/
$(document).ready(function() {

    //User selects character, add character to new section
    $(".pokemon").on("click", function() {
        if (character) {
            //if character has been chosen and a defender has not been chosen, 
            //add to defender section
            if (!attackEnabled) {    
                defender = $(this);
                defender.detach().appendTo("#defender-section");
                defenderCurrentHP = Number(defender.attr("defaultHP"));
                attackEnabled = true;
            }
        } else {
            //if character has not been chosen add to the character section
            character = $(this);
            character.detach().appendTo("#character-section");
            characterCurrentHP = Number(character.attr("defaultHP"));
            characterCurrentAttackPower = Number(character.attr("defaultAttackPower"));
            $("#enemy-section").text("Enemies Available to Attack");
            $("#enemy-section").addClass("enemy");
        } 

    });

    //Each attack - When user clicks Attack button
    var $attackBtn = $("#attack");
    $attackBtn.on("click", function() {
        //Validate that both character and defender have been chosen first
        if (attackEnabled === false){
            alert("Please select a character and a defender.")
            return;
        }

        //Decrease user hp and defender hp
        characterCurrentHP -= defender.attr("counterAttackPower") ;
        defenderCurrentHP -= characterCurrentAttackPower;
        //Don't allow negatives
        if (characterCurrentHP <= 0) {
            characterCurrentHP = 0;
        } 
        if (defenderCurrentHP <= 0) {
            defenderCurrentHP = 0;
        } 

        //User character attack power increases by it's base attack power
        //defender attack power never changes
        characterCurrentAttackPower += Number(character.attr("defaultAttackPower"));

        //Log attacks to the screen
        $("#attack-log").empty();
        $("#attack-log").append("<p>You attacked " + defender.attr("name") + " for <strong>" + characterCurrentAttackPower + "</strong> damage. </p>");
        $("#attack-log").append("<p>" + defender.attr("name") + " attacked you back for <strong>" + defender.attr("counterAttackPower") + "</strong> damage. </p>");
        $("#attack-log").append("<p>" + character.attr("name") + " HP: <strong>" + characterCurrentHP + "</strong>  " + defender.attr("name") + " HP: <strong>" + defenderCurrentHP + "</strong></p>");
        outputData();

        //If defender HP = 0, remove defender image
        if (defenderCurrentHP === 0) {
            defender.detach()
            $("#attack-log").append("<p>Select a new defender!</p>");
            attackEnabled = false;
        }

        //Check to see if won/lost
        //If user HP = 0, you lost
        //If no more defenders left and current defender's HP <= 0, you won
        if (characterCurrentHP === 0){
            alert("You lost!");
        } else if (defenderCurrentHP === 0 && $('#start').children().length === 0){
            alert("You won!");
        }
    });

    //Restart game
    $("#restart").on("click", function() {
        location.reload();
    });

});
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

    //User selects character, character to new section
    $(".pokemon").on("click", function() {
        if (character) {
            defender = $(this);
            defender.detach().appendTo("#defender-section");
            defenderCurrentHP = Number(defender.attr("defaultHP"));
            attackEnabled = true;

            console.log("current defender: " + defender.attr("name"));
            console.log("default HP defender: " + defender.attr("defaultHP"));
            console.log("counter attack defender: " + defender.attr("counterAttackPower"));

        } else {
            character = $(this);
            character.detach().appendTo("#character-section");
            characterCurrentHP = Number(character.attr("defaultHP"));
            characterCurrentAttackPower = Number(character.attr("defaultAttackPower"));
            $("#enemy-section").text("Enemies Available to Attack");
            $("#enemy-section").addClass("enemy");

            console.log("current character: " + character.attr("name"));
            console.log("default HP character: " + character.attr("defaultHP"));
        } 

    });

    //Each attack - When user clicks Attack button
    var $attackBtn = $("#attack");
    $attackBtn.on("click", function() {
        if (attackEnabled === false){
            alert("Please select a character and a defender.")
            return;
        }

        //Decrease user hp and defender hp
        console.log(characterCurrentHP + "-" + defender.attr("counterAttackPower"));
        console.log(defenderCurrentHP + "-" + characterCurrentAttackPower);
        characterCurrentHP -= defender.attr("counterAttackPower") ;
        defenderCurrentHP -= characterCurrentAttackPower;
        //don't allow negatives
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
        $("#attack-log").append("<p>You attacked " + defender.attr("name") + " for " + characterCurrentAttackPower + " damage. </p>");
        $("#attack-log").append("<p>" + defender.attr("name") + " attacked you back for " + defender.attr("counterAttackPower") + " damage. </p>");
        $("#attack-log").append("<p>" + character.attr("name") + " HP: " + characterCurrentHP + "  " + defender.attr("name") + " HP: " + defenderCurrentHP + "</p>");
        outputData();

        //If defender HP = 0, remove image
        if (defenderCurrentHP === 0) {
            defender.detach()
            $("#attack-log").append("<p>Select a new defender!</p>");
            attackEnabled = false;
        }

        //Check to see if won/lost
        //If user HP = 0, you lost
        //If no more defenders left and current defender's HP <= 0, you won
        console.log($("#start").contents().length);
        if (characterCurrentHP === 0){
            alert("You lost!");
        } else if (defenderCurrentHP === 0 && $("#start:has(img)") === false){
        //else if (defenderCurrentHP === 0 && $("#start").contents().length === 0) {
        //else if (defenderCurrentHP === 0 && $("#start").is(":empty")){
            alert("You won!");
        }
    });

    //Restart game
    $("#restart").on("click", function() {
        location.reload();
    });

});
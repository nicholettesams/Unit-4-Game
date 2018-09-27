# Unit-4-Game

# Assignment
The assignment was to create a fun and interactive game for web browsers by dynamically updating your HTML pages with the jQuery library.

# Solution
The solution uses click events to drive the game forward.  The html is very basic and most of the DOM is created dynamically by the javascript.  New methods such as .appendTo(), .detach() and .children() were needed to accomplish this task.  Validation is used to make sure that the user imputs are what we expect before calculations are performed.

# Technologies used
HTML, CSS, JavaScript, jQuery

# Game Play
1.  User starts by selecting one Pokemon from a list of four to represent their character.
2.  The user must then select their first defender from the remaining Pokemon to attack.
3.  The user then clicks the Attack button until that defender is defeated or until the game ends.
    - If the defender is defeated, the user must select a new defender.  

# How to Win
The user character's attack power increases by it's base attack power after each attack while the 
defender attack power never changes.  The attacks continue until the defender's HP reaches 0.  The goal of the game is to select a character whose attack power will increase enough over time to defeat all defenders.
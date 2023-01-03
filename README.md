# Remember-the-card
Memory Card Game Project: The game consists of a 4x4 grid of clickable cards that reveal their content when clicked.
When two matching cards are clicked consecutively, that is considered a correct guess.
Consecutively clicking on two cards that do not match is considered an incorrect guess.
When all cards have been matched correctly, the player has won the game. 
If no cards are matched after five incorrect guesses, the player has lost the game. 
_________________________________________________________________
## This Readme will include the following:
* A project wireframe showing what the game will look like.
* MVP User Stories
* Pseudo Code For Each MVP User Story
* V2 User Stories
* V3 User Stories

## Wireframe:

This is what the game will look like:

![alt Wireframe (wireframe.png "Wireframe")]
_________________________________________________________________
## MVP User Stories
* As a user, I want to see a 4X4 grid of clickable cards.
* As a user, I want to click on individual cards.
* As a user, I want cards to reveal their content when I click on them.
* As a user, I want to see my 'correct' guesses.
* As a user, I want to see my 'Wrong' guesses.
* As a user, I want to know when I have won the game.
* As a user, I want to know when I have lost the game.
* As a user, I want to have 5 attempts to match one card to another.
* As a user, I want to be able to reset the game at any point.
_________________________________________________________________
## Pseudo Code for MVP User Stories

### As a user, I want to see a 4X4 grid of clickable cards.
* Hold each card in a <div> inside of a <main>. Each div will have its own id so it can be identified (e.g. 'card1', 'card2' etc.). 
* All cards will have the class of '.card-content'.

### As a user, I want to click on individual cards.
* Add an eventListener to each card <div> to register when an individual card is clicked. 

### As a user, I want cards to reveal their content when I click on them.
* Add a function to the eventListener targets the '.card-content' class and toggles the display on/off when clicked.

### As a user, I want to see my 'correct' & 'wrong' guesses.
* Add a function that stores the id of each card clicked into a 'card1' & 'card2' variable. 
* If the value of card1 === card2, store 'correct' into a 'results' variable and display 'correct' else store 'incorrect' and display 'incorrect'. 

### As a user, I want to know when I have won/lost the game.
* Declare a variable (e.g. 'correctGuesses') that takes in the number of correct guesses from the 'results' variable above and increment by one each time 'correct' is returned/displayed (correctGuesses++) . When the number reaches 8, display 'Congratulations. You won'.
* Declare another variable (e.g. 'wrongGuesses') that stores the number of incorrect guesses and increment by one each time. When the number reaches 5, display 'Game Over' and disable card elements to prevent further clicks until game is re-rendered.

### As a user, I want to have 5 attempts to match one card to another.
Display 'Game Over' and disable the div elements when the 'wrongGuesses' variable counter reaches 5.

### As a user, I want to be able to reset the game at any point.
Write a startGame() function that renders the game and add an event listener to the play/restart button that calls this function when clicked.

_________________________________________________________________
## V2 User Stories
* As a user, I want to select the difficulty of the game.
* As a user, I want to choose how many cards to play with.
* As a user, I want to see how many rounds I have played.
* As a user, I want the game to play music.

_________________________________________________________________
## V3 User Stories
* As a user, I want to select a game card category/theme.
* As a user, I want to turn the music on/on.
* As a user, I want to create a username.
* As a user, I want to save my game data.
* As a user, I want to hear a winning sound effect.
* As a user, I want to hear a losing sound effect.
* As a user, I want to see an animation when I win.
* As a user, I want to see an animation when I lose.
_________________________________________________________________



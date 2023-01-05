const cards = document.querySelectorAll('.card-content');
const gameGrid = document.querySelector('.game-grid');
let results = document.querySelector('#results');
let goodGuess = 0 
let badGuess = 0
 
// restart game
const playButton = document.querySelector('.play-button')

playButton.addEventListener('click', () => {
  gameGrid.style.display = 'grid';
  card1 = null;
  card2 = null;
  goodGuess = 0
  badGuess = 0
  results.innerHTML = "Choose your cards"
   cards.forEach(card => {
    card.querySelector('img').style.display = 'none';
  });
});

//Store card clicks
let card1
let card2

//Check for card matches
function checkMatch() {
    if (card1 === card2) {
    results.innerHTML = 'Match :)';
  } else {
    results.innerHTML = 'No Match :(';
    cards.forEach(card => {
      if (card.getAttribute('id') === card1 || card.getAttribute('id') === card2) {
        card.querySelector('img').style.display = 'none';
      }
    })
    }
}
//Record good & bad guesses into variables 
  checkResults = function (){
    if (results.innerHTML == 'Match :)') {
    goodGuess++
    console.log(`good guess counter: ${goodGuess}`)
  } else {
    badGuess++
    console.log(`bad guess counter: ${badGuess}`)
  }
}

//Win the game
function winGame(){
  if (goodGuess > 7) {
  results.innerHTML = 'Congratulations. You win!'
} 
} 

//lose the game 
function loseGame(){
  if (badGuess > 4) {
    results.innerHTML = 'You lose. Try again.'
} 
}

// add a click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
// show the image when the card is clicked
    card.querySelector('img').style.display = 'block';

//grab the ID of first & second card clicked
if (!card1) {
  card1 = card.getAttribute('id')
} else {
  card2 = card.getAttribute('id')
}

//Run functions after 2 clicks
if (card1 && card2) {
  checkMatch()
  checkResults()
  winGame()
  loseGame()
  
  
//reset the clicks for next turn  
card1 = null;
card2 = null;
}
     
  });  
});

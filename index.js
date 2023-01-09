const cards = document.querySelectorAll('.game-grid .card-content')
const gameGrid = document.querySelector('.game-grid')
let results = document.querySelector('#results')
let goodGuess = 0 
let badGuess = 0
let attempts = 5
//Store card clicks here
let Arr1 =[]
let card1 
let card2 
//button
const playButton = document.querySelector('.play-button')
const winButton = document.querySelector('.win-button')
const loseButton = document.querySelector('.lose-button')


// restart game
playButton.addEventListener('click', () => {
  gameGrid.style.display = 'grid'
  card1 = null
  card2 = null
  goodGuess = 0
  badGuess = 0
  attempts = 5
  results.innerHTML = "Choose your cards"
  cards.forEach(card => {
  card.querySelector('img').style.display = 'none'
  card.classList.remove('clicked')
  // card.classList.remove('matched')
  Arr1 = []

  })
})


//Add 'matched' class if match
function addMatch() {
  if (card1 === card2) {
    document.getElementById(card1).classList.add('matched')
    document.getElementById(card2).classList.add('matched')
    
    card1 = null
    card2 = null
  }  
}

//Add 'unmatched' class if cards don't match
function noMatch(){
  if(card1 != card2){
    document.getElementById(card1).querySelector('img').classList.add('noMatch')
    document.getElementById(card2).querySelector('img').classList.add('noMatch')
    
}}

//Check for card matches
function checkMatch() {
  if (card1 == card2) {
  results.innerHTML = 'Match :)'
} else {
  results.innerHTML = `No Match. You have ${attempts} attempts left`
  noMatch()
}
}

// // //Hide cards if they don't match
function hideUnmatched() {
  if (Arr1[0] != Arr1[1]) {
    document.getElementById(card1).querySelector('img').style.display='none'
    document.getElementById(card2).querySelector('img').style.display='none'
  }
  card1 = null
  card2 = null
}
  

     
//Record good & bad guesses into variables 
  grabResults = function(){
    if (results.innerHTML == 'Match :)') {
    goodGuess++
    console.log(`good guess counter: ${goodGuess}`)
  } else {
    badGuess++
    console.log(`bad guess counter: ${badGuess}`)
  }
}

//Reduce attempts when guessing incorrectly
function reduceAttempts(){
  if (results.innerHTML !== 'Match :)') {
    attempts--
    console.log(`you have ${attempts} attempts left`)
  }
}


//Win the game
function winGame(){
  if (goodGuess > 7) {
  cards.forEach(card => {
  card.querySelector('img').style.display = 'block'
  card.classList.add('clicked')
  })
  results.innerHTML = 'Congratulations. You win!'
    }
} 


//lose the game 
function loseGame(){
  if (badGuess > 4 || attempts < 1) {
    results.innerHTML = 'Game Over. Click restart to try again.'
    gameGrid.style.display = 'none'
} 
}

// Add event listener to all cards
cards.forEach(card => {
  card.addEventListener('click', () => {
    // If the card has the 'clicked' class, do not allow it to be clicked again
    if (card.classList.contains('clicked')) {
      return;
    }
    // Add the 'clicked' class to the card
    card.classList.add('clicked');
    // show the image when the card is clicked
    card.querySelector('img').style.display = 'block'
    
    // grab the ID of first & second card clicked     
    if (!card1) {
      card1 = card.getAttribute('id')
    } else {
      card2 = card.getAttribute('id')
    }
    // Run functions after 2 clicks
    if (card1 && card2) {
    
    //push cards clicked into Array
      Arr1.push(card1)
      Arr1.push(card2)

      reduceAttempts()
      checkMatch()
      addMatch()
      if (card1 != card2) {
        setTimeout(hideUnmatched, 0700)
      }
      
      grabResults()
      winGame()
      loseGame()
 
      // remove 'clicked' class
      cards.forEach(card => {
        card.classList.remove('clicked')
      })
    }
  })
})

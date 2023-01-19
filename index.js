const cards = document.querySelectorAll('.game-grid .card-content')
const gameGrid = document.querySelector('.game-grid')
let results = document.querySelector('#results')
let goodGuess = 0 
let badGuess = 0
let attempts = 5 // could be better named: is this supposed to be a difficulty setting/ attempts per game or how many attempts are left ?
//Store card clicks here
let Arr1 =[] // use const for initializing reference types, unless you want them to be nullable. By using let we could end up changing the data type accidentally and it would let it happen, like if we said arr1={} it would happen, but if we const Array1 = [], it has to stay an array and we can still change the contents. Arr1 is also not a good name: its capitalized like a class, is it a constructor function for a custom array ? nope: arr1. Additionally arr1 is not telling me anything about what it is other than it's an array. I don't know what is supposed to happen in there - is it a card array ? try and be more semantic
let card1 // consider renaming since it is SO close to your actual cards' ids, which they will be holding the value of, remember : be semantic. Maybe something like firstCardId, cardPicked1, etc.
let card2 
//button
const playButton = document.querySelector('.play-button')

// restart game
playButton.addEventListener('click', () => {
  gameGrid.style.display = 'grid'
  card1 = null // good use of null
  card2 = null
  Arr1 = []
  goodGuess = 0
  badGuess = 0
  attempts = 5
  results.innerHTML = "Choose your cards" // mixing use of double nd single quotes, pick one and stick with it
  cards.forEach(card => {
  card.querySelector('img').style.display = 'none' // mind your indentation here, we're in the forEach callback function
  card.classList.remove('clicked')
  // card.classList.remove('matched')

  })
})

//Check for card matches
function checkMatch() { // this is a function declaration 
  if (card1 == card2) {
  results.innerHTML = 'Match :)' // i would rather have returned a boolean after effecting the inner html to help drive the following logic, 
} else {
  results.innerHTML = `No Match. You have ${attempts} attempts left` // innerHTML is very editable wth dev tools and not a great way to drive your JS logic
}
}

//Record good & bad guesses into variables 
grabResults = function(){ // this is a variable declaration of a function expression : not consistent with your other functions, pick one style and stick with it 
  if (results.innerHTML == 'Match :)') {
  goodGuess++
} else {
  badGuess++
}
}

//Add 'matched' class if match
function addMatch() { // Good function name ! 
  if (card1 === card2) {
    document.getElementById(card1).classList.add('matched')
    document.getElementById(card2).classList.add('matched')
    
    card1 = null
    card2 = null
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
  


//Reduce attempts when guessing incorrectly
function reduceAttempts(){
  if (results.innerHTML !== 'Match :)') { // this is a potentially dangerous pattern, basing our JS logic on an innerHTML, why not just call the function in hideUnmatched without the check 
    attempts--
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
cards.forEach(card => { // consider putting this into an initialize game function so you could re-use some of the code. Alternatively you could change this callback to a named function, as opposed to the anonymous function it is now 
  card.addEventListener('click', () => {
    // If the card has the 'clicked' class, do not allow it to be clicked again
    if (card.classList.contains('clicked')) {
      return
    }
    // Add the 'clicked' class to the card
    card.classList.add('clicked')
    // show the image when the card is clicked
    card.querySelector('img').style.display = 'block'
    
    // grab the ID of first & second card clicked     
    if (!card1) {
      card1 = card.getAttribute('id')
    } else {
      card2 = card.getAttribute('id')
    }
    // Run functions after 2 clicks
    if (card1 && card2) { // i like the use of this && ! 
    
    //push cards clicked into Array
      Arr1.push(card1)
      Arr1.push(card2)

      reduceAttempts()// could this be ordered better ?
      checkMatch()
      addMatch()
      if (card1 != card2) { // isn't this check why we have checkMatch ?
        setTimeout(hideUnmatched, 0700)// good use of setTimeout 
      }
      grabResults()
      winGame()
      setTimeout(loseGame, 0700)
 
      // remove 'clicked' class
      cards.forEach(card => {
        card.classList.remove('clicked')
      })
    }
  })
}) 

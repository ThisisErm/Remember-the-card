// variables
const cards = document.querySelectorAll('.card-content');
const gameGrid = document.querySelector('.game-grid');
const messageDiv = document.querySelector('#results');


//Store card clicks
let card1
let card2


//Check if cards clicked match
function checkMatch() {
  if (card1 === card2) {
    messageDiv.innerHTML = 'Match :)';
  } else {
    messageDiv.innerHTML = 'No Match :(';
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

//check if the ids are the same
if (card1 && card2) {
  checkMatch();
card1 = null;
card2 = null;
}
     
  });  
});


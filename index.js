   // hide the grid by default
//    document.querySelector('.game-grid').style.display = 'none';

// //    // show the grid when the button is clicked
//    document.querySelector('.play-button').addEventListener('click', () => {
//      document.querySelector('.game-grid').style.display = 'block';
//    });
   
// get all the cards
const cards = document.querySelectorAll('.grid-item');

// add a click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // show the image when the card is clicked
    card.querySelector('img').style.display = 'block';
  });
});

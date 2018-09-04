// array of cards
var cards = [
  {
    name: "1 star",
    cardImage: "images/1star.png"
  },
  {
    name: "2 star",
    cardImage: "images/2star.png"
  },
  {
    name: "3 star",
    cardImage: "images/3star.png"
  },
  {
    name: "4 star",
    cardImage: "images/4star.png"
  },
  {
    name: "5 star",
    cardImage: "images/5star.png"
  },
  {
    name: "6 star",
    cardImage: "images/6star.png"
  }
];

// returns array as original array * 2
function copyArray(array) {
  var newArray = [];
  var currentArray = array;
  for (var i = 0; i < currentArray.length; i++) {
    newArray.push(currentArray[i]);
  }
  for (var j = 0; j < newArray.length; j++) {
    currentArray.push(newArray[j]);
  }
  return currentArray;
}

/* shuffle function was borrowed from
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
with minor adjustments */
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//calls copyArray and shuffle functions
cards = copyArray(cards);
shuffle(cards);



// remove cards when match is found
// turn over cards again when no match is found
// add score board and timeer(?)
// hide instructions when game link is selected
// hide gameboard when instructions is selected


function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back-2.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var cardsInPlay = [];

function checkForMatch() {
  var match = false;
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    match = true;
    cardsInPlay = [];
  } else {
    alert("Sorry, try again.");
  }
  if (match === false) {
    for (var i = 0; i < cardsInPlay.length; i++) {
      console.log(cardsInPlay);
    }
  }
}

function flipCard () {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].name);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

function resetGame () {
  window.location.reload(true);
}


createBoard();

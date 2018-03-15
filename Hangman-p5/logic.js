var fruitslist = ['Banana', 'Apple','Grape'];

var chosenword= '';

var letterInChosenWord= [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 0;





function startGame() {

	numGuesses = 9;
	chosenword = fruitsList[Math.floor(Math.random() * fruitslist.length)];

	letterInChosenWord = chosenword.split('');
	numBlanks = letterInChosenWord.length;
	console.log(chosenword);

}


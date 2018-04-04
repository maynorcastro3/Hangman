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


blanksAndSuccesses = [];
wrongGuesses = [];
for (var i = 0; i < numBlanks; i++) {
	blanksAndSuccesses.push("_");

}
console.log(blanksAndSuccesses);
document.getElementId("guesses-left").innerHTML = numGuesses;
document.getElementId("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
document.getElementId("wrong-guesses").innerHTML = wrongGuesses.join(" ");


}

function checkLetters(letter) {
	var letterInWord = false;
	for (var i=0; i < numBlanks; i++) {
		if (chosenword[i] === letter) {
			letterInWord = true;
		}
	}

if (letterInWord) {
	for(var j=0; j < numBlanks; j++)
		if (chosenword[j] === letter) {
			letterInWord = true;
		

		}
	}
	console.log(blanksAndSuccesses);

}
	else{
		wrongGuesses.push(letter)
		numGuesses--;
	}
}

function roundComplete() {
	console.log("WinCount; " + winCounter + " |lossCount; " + 
		lossCount + " | numGuesses; "  + numGuesse);

document.getElementId("guesses-left").innerHTML = numGuesses;
document.getElementId("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
document.getElementId("wrong-guesses").innerHTML = wrongGuesses.join(" ");

if (letterInChosenWord.toString() === blanksAndSuccesses.toString()) {
	winCounter ++;
	alert("You Win");
	document.getElementId("win-ounter").innerHTML = winCounter;

	startGame();

	}
else if (numGuesses === 0) {
	lossCounter++;
	alert("You Lose")

	document.getElementId("loss-counter").innerHTML = lossCounter;

startGame();

}


}

startGame();













document.onkeyup = function(event) {
	var letterGuessed = String. fromCharCode(event.keyCode).toLowerCase();
 	checkLetters(letterGuessed);
 	roundComplete();
}



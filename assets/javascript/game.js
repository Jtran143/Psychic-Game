//Computer Chooses Random Letter from Array
var computerChooses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];


// Set Variables for all
var wins = 0;
var losses = 0;
var guessCount = 9;
var lettersGuessed = [];
var userGuess = null;

//Computer select random letter



//User Presses key and chooses letters to guess


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	var computerGuess = computerChooses[Math.floor(Math.random() * computerChooses.length)];
	lettersGuessed.push(userGuess);


	if (userGuess === computerGuess) {
		wins++;
		guessCount = 9;
		lettersGuessed = [];
		computerGuess[Math.floor(Math.random() * computerChooses.length)];
		lettersGuessed.push(userGuess);
	} 
	else if (guessCount === 0) {
		losses++;
		guessCount = 9;
		lettersGuessed = [];
		computerGuess[Math.floor(Math.random() * computerChooses.length)];

	}
	else if (userGuess !== computerGuess) {
		guessCount--;
	}

		var html = "<h1> The Pyschic Game </h1>" + 
			 "<p>" + "Guess what letter I'm thinking of!" + "</p>"+ 
			 "<p> Wins: " + wins + "</p>"+
			 "<p> Losses: " + losses + "</p>" +
			 "<p> Guesses Left: " + guessCount + "</p>" +
			 "<p> Your Guesses so far: " + lettersGuessed + "</p>";
		document.querySelector("#html").innerHTML = html;

}






window.onload = function() {

var wordArray = ["star", "moon", "earth", "planet", "comet", "meteor", "galaxy", "nebula", "universe", "lander", "spacecraft"];
	
	var wins= 0;
	var dashesArray = [];
	var guessArray = [];
	var triesLeft = 10;
	var messages = {
		win: "You Win!",
		lose: "You Lose! Try Again.",
		}

	$("#reset").on("click", function() {
		location.reload();
		})


	function hangman() {
		var compWord = wordArray[Math.floor(Math.random() * wordArray.length)];
		console.log(compWord);
		for (var i = 0; i < compWord.length; i++) {
			dashesArray[i] = "_";
		}

		document.getElementById("hiddenWord").innerHTML = ("Guess this word:  " + dashesArray.join(" "));

		document.getElementById("tries").innerHTML = ("Lives left: " + triesLeft);

		document.onkeyup = function() {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);
				for (var i = 0; i < compWord.length; i++) {
					if (compWord[i] === userGuess) {
						dashesArray[i] = userGuess;
						document.getElementById("hiddenWord").innerHTML = ("Guess this word:  " + dashesArray.join(" "));
					}
				}

				if (!compWord.includes(userGuess)) {
					guessArray.push(userGuess);
						document.getElementById("guesses").innerHTML = ("Wrong letters:  " + guessArray);
							triesLeft--;
							document.getElementById("tries").innerHTML = ("Lives left: " + triesLeft);
						}

				if (triesLeft === 0) {
					alert(messages.lose);
					location.reload();
  				}
			
				if (dashesArray.join("") === compWord) {
					alert(messages.win);
					wins++;
					document.getElementById("wins").innerHTML = ("Player Winning Streak:  " + wins);
					hangman();
					}
			}
		}

hangman();

}
const 
	buttonRock = document.getElementById('button-rock'),
	buttonPaper = document.getElementById('button-paper'), 
	buttonScissors = document.getElementById('button-scissors');

let argButtonName;

function buttonClicked(argButtonName) {

	// ta funkcja zwraca ruch losowy komputera
	function getMoveName() {

		let argMoveId = Math.floor(Math.random() * 3 + 1);
		console.log('wylosowana liczba to: ' + argMoveId);

		if (argMoveId == 1) {
		return 'kamień';
		} else if (argMoveId == 2) {
		return 'papier';
		} else if (argMoveId == 3) {
		return 'nożyce';
		} else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
		return 'kamień';
		}
		}

	// ta funkcja zwraca wynik w oparciu o ruch gracza oraz ruch komputera
	function displayResult() {

		console.log('wywołano funkcję displayResults');

		let playerMove = argButtonName;
		console.log('ruch gracza to: ' + playerMove);

		let computerMove = getMoveName();
		console.log('ruch komputera to: ' + computerMove);

		if (playerMove == 'papier' && computerMove == 'kamień') {
			printMessage('Wygrywasz!');
		} else if (playerMove == 'kamień' && computerMove == 'nożyce') {
			printMessage('Wygrywasz!');
		} else if (playerMove == 'nożyce' && computerMove == 'papier') {
			printMessage('Wygrywasz!');
		} else if (playerMove == computerMove && computerMove == playerMove) {
			printMessage('Remis!');
		} else {
			printMessage('Przegrywasz :(');
		}
		printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
		}

	clearMessages();
	console.log(argButtonName + ' został kliknięty');
	displayResult();

	}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });












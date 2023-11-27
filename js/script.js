// argButtonName

const 
	buttonRock = document.getElementById('button-rock'),
	buttonPaper = document.getElementById('button-paper'), 
	buttonScissors = document.getElementById('button-scissors');

let argButtonName;

function buttonClicked(argButtonName) {

	let argComputerMove, argPlayerMove, computerMove, playerInput, playerMove;

	// ta funkcja zwraca wynik w oparciu o ruch gracza oraz ruch komputera
	function displayResult(argPlayerMove, argComputerMove) {
		console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
		if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
			printMessage('Wygrywasz!');
		} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
			printMessage('Wygrywasz!');
		} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
			printMessage('Wygrywasz!');
		} else if (argPlayerMove == argComputerMove && argComputerMove == argPlayerMove) {
			printMessage('Remis!');
		} else {
			printMessage('Przegrywasz :(');
		}
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		}

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


	clearMessages();
	console.log(argButtonName + ' został kliknięty');

	playerMove = argButtonName;
	console.log('ruch gracza to: ' + playerMove);
	computerMove = getMoveName();
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);


	}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, PlayerMove, set_playerMove_to;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
PlayerMove = 'papier';
printMessage('Zagrałam' + PlayerMove + '! Wygrałam!');
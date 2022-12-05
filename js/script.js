const canvas = document.getElementById('canvas1');
const initialBackground = document.getElementById('initial-background');
const startBtn = document.getElementById('start-btn');
const reLoadBtn = document.getElementById('re-load-btn');
const ctx = canvas.getContext('2d');
const initialContainer = document.getElementById('container1')
const gameContainer = document.getElementById('container2')
const game = new Game(ctx);

let spacePressed = false;
let aPressed = false;
let sPressed = false;


startBtn.addEventListener('click', function() {
	initialContainer.style.display = 'none';
	gameContainer.style.display = 'block';
	game.start();
});

reLoadBtn.addEventListener('click', function() {
	game.start();
});


window.addEventListener('keydown', function (e){
	if (e.keyCode == 32) {
		e.preventDefault();
		spacePressed = true;
	}
});
window.addEventListener ('keyup', function(e) {
	if (e.keyCode == 32) {
	spacePressed = false;
}
});

window.addEventListener('keydown', function (e){
	if (e.keyCode == 65) {
		aPressed = true;
	}
});

window.addEventListener ('keyup', function(e) {
	if (e.keyCode == 65) {
	aPressed = false;
}
});

window.addEventListener('keydown', function (e){
	if (e.keyCode == 83) {
		sPressed = true;
		game.SantaGun(event);
	}
});

window.addEventListener ('keyup', function(e) {
	if (e.keyCode == 83) {
		sPreseed = false;
		game.SantaGun(event);
	}
});
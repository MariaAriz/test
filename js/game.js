class Game {
	constructor(ctx) {
		this.ctx = ctx;
		this.backgroung = new Background(this.ctx, 0, 0);
		this.player = new Player(this.ctx, 100, 100);
		this.intervalId = null;
		this.presents = [
			new Present(this.ctx, 1100, 300, 30),
			new Present(this.ctx, 1000, 400, 30),
			new Present(this.ctx, 900, 300, 30),
			new Present(this.ctx, 2000, 400, 30),
			new Present(this.ctx, 1900, 400, 30),
			new Present(this.ctx, 1800, 400, 30),
			new Present(this.ctx, 3000, 125, 30),
			new Present(this.ctx, 2900, 125, 30),
			new Present(this.ctx, 2800, 125, 30),
			new Present(this.ctx, 3300, 200, 30),
			new Present(this.ctx, 3250, 200, 30),
			new Present(this.ctx, 3200, 200, 30),
		];
		this.score = 0;

		this.grinchs = [
			new GrinchTop(this.ctx, 1000, 0, 30),
			new GrinchTop(this.ctx, 1500, 0, 30),
			new GrinchDown(this.ctx, 2000, 350, 30),
			new GrinchDown(this.ctx, 2200, 350, 30),
		];

		this.caramels = [];

	}

	start() {
		console.log("DEBUG  on start", this.intervalId)
		this.intervalId = setInterval(() => {
			this.clear();
			this.move();
			this.draw();
			this.checkCollisions();
		}, 1000 / 60);
	}

	draw() {
		this.backgroung.draw();
		this.caramels.forEach(caramel => caramel.draw());
		this.player.draw();
		this.presents.forEach(present => present.draw());
		this.grinchs.forEach(grinch => grinch.draw());
		this.drawScore();

	}

	move() {
		this.backgroung.move();
		this.caramels.forEach(caramel => caramel.move());
		this.player.move();
		this.presents.forEach(present => present.move());
		this.grinchs.forEach(grinch => grinch.move());
	}

	SantaGun(event) {
		if (event.keyCode === 83) {
			event.preventDefault();
			this.caramels.push(new Caramel(this.ctx, this.player.x, this.player.y + 25, 30));

		}}

	clear() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}

	checkCollisions() {
		const collidingPresent = this.presents.find(present => this.player.isPresent(present));
		if (collidingPresent) {
			this.presents.splice(this.presents.indexOf(collidingPresent), 1);
			this.score++;
		}

		const collidingGrinch = this.grinchs.find(grinch => this.player.isGrinch(grinch));
		if (collidingGrinch) {
				this.gameOver();
		}

		const collindingCaramels = this.caramels.find(caramel =>{
			return this.grinchs.some(grinch => {
				if(caramel.isColliding(grinch)) {
					this.grinchs.splice(this.grinchs.indexOf(grinch), 1);
					this.caramels.splice(this.caramels.indexOf(grinch),1);
				}
			})
		});

	}

	drawScore() {
		this.ctx.fillStyle = '#891010';
		this.ctx.font = '24px Arial';
		this.ctx.fillText("Score: " + this.score, 10, 30);
	}

	gameOver() {
		clearInterval(this.intervalId);
		this.ctx.fillStyle = "rgba(50, 50, 50, 0.7)";
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.ctx.fillStyle = '#891010';
		this.ctx.font = "40px Arial";
		this.ctx.textAlign = "center";
		this.ctx.fillText("Game Over", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
	}
}
class Background {
	constructor(ctx, x, y) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.w = this.ctx.canvas.width;
		this.h = this.ctx.canvas.height;
		this.img = new Image();
		this.img.src = "./images/background_mountain.jpg";
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};
		this.vx = 1;
	}

	/*En algunos ejemplos se pone el primer if de this.x y this.w , pero creo que no tiene sentido funcional. Revisar al final */
	draw() {
		if (this.isReady) {
			if (this.x + this.w <= 0) {
				this.x = 0;
			}
			this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
			this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
		}
	}

	move() {
		this.x -= this.vx;
	}
}
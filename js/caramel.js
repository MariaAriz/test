class Caramel {
	constructor(ctx, x, y, size) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.size = size;
		this.width = size;
		this.height = size;
		this.img = new Image();
		this.img.src = "./images/baston-de-caramelo.png",
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};
        this.speed=7

	}

	draw() {
		if (this.isReady) {
			this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size * this.img.height / this.img.width);
		}
	}

	move() {
		this.x += this.speed;
	}

	isColliding(obj) {
		return this.x < obj.x + obj.width-45
		&& this.x + this.width-45 > obj.x
		&& this.y < obj.y + obj.height
		&& this.y + this.height > obj.y;
	}
}
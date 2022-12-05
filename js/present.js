class Present {
	constructor(ctx, x, y, size) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
        this.size = size;
		this.width = size;
		this.height = size;
		this.img = new Image();
        this.imagesStrings = [
            /*"./images/caja-de-regalo.png",*/
            "./images/calcetin_navidad.png",
            "./images/caramelo.png",
            "./images/chupete.png",
            "./images/oso.png",
            "./images/pelota.png",
            "./images/libro.png",
            "./images/tenis.png",
            "./images/guantes-de-boxeo.png",

        ];
		this.img.src = this.imagesStrings[Math.floor(Math.random() * this.imagesStrings.length)];
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};
        this.speed = 2.5;
	}

	draw() {
		if (this.isReady) {
			this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size * this.img.height / this.img.width);
		}

	}

    move() {
        this.x -= this.speed;
	}


}


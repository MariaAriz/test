class Player {
        constructor(ctx, x, y) {
            this.ctx = ctx;
            this.x = x;
            this.y = y;
            this.width = 300;
            this.ySpeed = 0;
            this.img = new Image();
            this.img.src = "./images/santa.png";
            this.imgReady = false;
            this.img.onload = () => {
                this.height = this.width * (this.img.height / 5) / this.img.width;
                this.imgReady = true;
            };
            this.gravity = 0.09;

            this.yFrame = 0;
            this.verticalFrames = 5;

            this.tick = 0;
        }
    
        draw() {
            if (this.imgReady) {
                this.ctx.drawImage(
                    this.img,
                    0,
                    this.yFrame * this.img.height / this.verticalFrames,
                    this.img.width,
                    this.img.height / this.verticalFrames,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                this.tick++;
            }
        }
    
        move() {
            this.y += this.ySpeed;
            this.ySpeed += this.gravity;

            if (this.tick % 10 === 0) {
                this.yFrame++;
                if (this.yFrame > 4) {
                    this.yFrame = 0;
                }
            }

            if (spacePressed) this.flap();
            if (aPressed) this.superFlap();
        }

        flap() {
            this.ySpeed = -1
        }
        
        superFlap() {
            this.ySpeed = -2.25
        }
        
        isPresent(obj) {
            return this.x < obj.x + obj.width
            && this.x + this.width > obj.x
            && this.y < obj.y + obj.height
            && this.y + this.height > obj.y;
        }

        isGrinch(obj) {
            return this.x < obj.x + obj.width-70
            && this.x + this.width-70 > obj.x
            && this.y < obj.y + obj.height-35
            && this.y + this.height-35 > obj.y;
        }
    } 
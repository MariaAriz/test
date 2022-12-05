class GrinchTop {
        constructor(ctx, x, y) {
            this.ctx = ctx;
            this.x = x;
            this.y = y;
            this.width = 150;
            this.height = 250;
            this.img = new Image();
            this.img.src = "./images/grinch_top.png";
            this.imgReady = false;
            this.img.onload = () => {
                this.isReady = true;
            };
            this.speed = 2;
        }
    
        draw() {
            if (this.isReady) {
                this.ctx.drawImage(this.img, this.x, this.y,this.width,this.height);
        }}
    
        move() {
            this.x -= this.speed;
    }
    }
    
class GrinchDown {
        constructor(ctx, x, y) {
            this.ctx = ctx;
            this.x = x;
            this.y = y;
            this.width = 150;
            this.height = 250;
            this.img = new Image();
            this.img.src = "./images/grinch_down.png";
            this.imgReady = false;
            this.img.onload = () => {
                this.isReady = true;
            };
            this.speed = 2;
        }
    
        draw() {
            if (this.isReady) {
                this.ctx.drawImage(this.img, this.x, this.y,this.width,this.height);
        }}
    
        move() {
            this.x -= this.speed;
    }
    } 
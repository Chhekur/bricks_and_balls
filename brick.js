class Brick {
    constructor(x, y, w, h, color, on_screen){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.on_screen = on_screen;
    }

    draw(){
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }

    update(){
        if((parseInt(ball.x) >= this.x && parseInt(ball.x) <= this.x + this.w) && parseInt(ball.y) == this.y + this.h){
            this.on_screen = false;
            ball.a = - ball.a;
            console.log('collision');
        }
    }
}
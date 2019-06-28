class Player{
    constructor(x, y, w, h, color, r){
        this.x = x;
        this.y = y;
        this.color = color;
        this.w = w;
        this.h = h;
        this.r = r;
    }

    draw(){
        fill(this.color);
        rect(this.x, this.y, this.w, this.h, this.r);
    }

    update(){
        this.x = constrain(mouseX, 0, width - this.w);
    }
}
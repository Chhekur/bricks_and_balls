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

        let dist1 = abs(this.y - ball.y);
        let dist2 = abs(this.y + this.h - ball.y);
        let dist3 = abs(this.x - ball.x);
        let dist4 = abs(this.x + this.w - ball.x);

        if(((dist1 <= ball.d / 2) || (dist2 <= ball.d / 2)) && (ball.x >= this.x && ball.x <= this.x + this.w)) ball.v_y *= -1, this.on_screen = false;
        if(((dist3 <= ball.d / 2) || (dist4 <= ball.d / 2)) && (ball.y >= this.y && ball.y <= this.y + this.h)) ball.v_x *= -1, ball.v_y *= -1, this.on_screen = false;

        // if((parseInt(ball.x) >= this.x && parseInt(ball.x) <= this.x + this.w) && (parseInt(ball.y) == this.y + this.h)){
        //     this.on_screen = false;
        //     ball.a = - ball.a;
        //     console.log('collision');
        // }
    }
}
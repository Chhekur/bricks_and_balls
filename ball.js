class Ball{
    constructor(x, y, d, v, a, color){
        this.x = x;
        this.y = y;
        this.d = d;
        this.color = color;
        this.v = v;
        this.a = a;
    }

    draw(){
        fill(this.color);
        circle(this.x, this.y, this.d);
    }


    update(){
        // console.log(this.x, this.y);
        // console.log(this.a);
        if(this.y >= height) game_over();
        console.log([player.x, player.y], [parseInt(this.x), parseInt(this.y)]);
        if((parseInt(this.x) >= player.x && parseInt(this.x) <= player.x + player.w && (parseInt(this.y) >= player.y - player.h && parseInt(this.y) <= player.y)))
            this.a =  - this.a;
        if(parseInt(this.y) <= 0 + this.d) this.a =  - this.a;
        if(parseInt(this.x) <= 0 + this.d) this.a =   - (360 - this.a);
        if(parseInt(this.x) >= width - this.d) this.a = - (360 - this.a);
        // if(this.x <= 0 + this.d || this.x >= width - this.d || this.y <= 0 + this.d || (parseInt(this.x) == player.x && parseInt(this.y) == player.y)) this.a = 180 - 2 * (this.a);
        this.x += cos(this.a) * this.v;
        this.y += sin(this.a) * this.v;
    }
}
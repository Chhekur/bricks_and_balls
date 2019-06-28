class Ball{
    constructor(x, y, d, v_x, v_y, i ,color){
        this.x = x;
        this.y = y;
        this.d = d;
        this.color = color;
        this.v_x = v_x;
        this.v_y = v_y;
        this.i = i;
    }

    draw(){
        fill(this.color);
        circle(this.x, this.y, this.d);
    }


    update(){
        if(this.y >= height) game_over();

        if(this.x >= (width - this.d) || this.x <= 0 + this.d) this.v_x *= -1;
        if(this.y <= 0 + this.d) this.v_y *= -1;

        let dist = abs(this.y - player.y);
        let dist1 = abs(this.x - player.x);
        let dist2 = abs((this.x + this.w) - player.x);

        console.log(dist);
        if(dist <= this.d / 2 && (this.x >= player.x && this.x <= player.x + player.w)) this.v_y *= -1;
        if(((dist1 <= this.d / 2) || (dist2 <= this.d / 2)) &&  (this.y >= player.y && this.y <= player.y + player.h)) this.v_x *= -1, this.v_y *= -1;

        this.x += this.v_x;
        this.y += this.v_y;
    }
}
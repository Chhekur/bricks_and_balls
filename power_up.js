class Power_up{
    constructor(x, y, d, v, type, on_screen){
        this.x = x;
        this.y = y;
        this.d = d;
        this.v = v;
        this.type = type;
        this.on_screen = on_screen;
    }

    draw(){
        if(this.type == '+') fill(color(0,255,0))
        if(this.type == '-') fill(color(255,0,0))
        if(this.type == '*') fill(color(150,255,0))
        circle(this.x, this.y, this.d);
    }

    update(){
        if(this.on_screen){
            this.y += this.v;
            
            let dist = abs(this.y - player.y);
            let dist1 = abs(this.x - player.x);
            let dist2 = abs(this.x - player.x + player.w);

            console.log(dist);
            if(dist <= this.d / 2 && (this.x >= player.x && this.x <= player.x + player.w)){
                // this.on_screen = false;
                if(this.type == '+') player.w += 5;
                else if(this.type == '-') player.w -= 5;
            }
            if(((dist1 <= this.d / 2) || (dist2 <= this.d / 2)) &&  (this.y >= player.y && this.y <= player.y + player.h)){
                // this.on_screen = false;
                if(this.type == '+') player.w += 5;
                else if(this.type == '-') player.w -= 5;
            }
        }
    }
}
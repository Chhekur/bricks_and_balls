var player;
var ball;
var bricks = [];
var no_of_bricks;
var brick_width = 50;
var no_of_layers = 3;
var brick_height = 10

function setup(){
    createCanvas(windowWidth, windowHeight);
    no_of_bricks = Math.floor(width / brick_width);
    player = new Player(0, height - 20, 100, 10, random_color(), 10);
    ball = new Ball(50, 50 , 15, random(5), random(5), random_color());
    generate_bricks();
}


function generate_bricks(){
    let x = -50, y = 20, w = brick_width, h = brick_height;
    for(let i = 0; i < no_of_layers; i++){
        x = -50, y += h;
        for(let j = 0; j < no_of_bricks; j++){
            x += w;
            let brick = new Brick(x, y, w, h, random_color(), true);
            bricks.push(brick);
        }
        
    }
}

function draw_bricks(){
    for(let i = 0; i < bricks.length; i++){
        if(bricks[i].on_screen){
            bricks[i].draw();
            bricks[i].update();
        }
    }
}

function random_color(){
    return color(random(255), random(255), random(255));
}

function game_over(){
    noLoop();
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
}

function draw(){
    background(51);
    player.draw();
    player.update();
    ball.draw();
    ball.update();
    draw_bricks();
}
// basket.x = constrain(mouseX, 0 ,width);
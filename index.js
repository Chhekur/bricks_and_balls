var player;
var ball;
var bricks = [];
var no_of_bricks_in_a_row = 11;
var no_of_layers = 5;
var brick_width = 60;
var brick_height = 20
var score = 0;

function show_score(){
    textSize(25);
    fill(255);
    text(`${score}`, width / 2, 30);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    // no_of_bricks = Math.floor(width / brick_width);
    player = new Player(0, height - 20, 100, 10, random_color(), 10);
    ball = new Ball(50, 50 , 15, random(3,5), random(3,5), 0.3 ,random_color());
    generate_bricks();
}


function generate_bricks(){
    let padding  = 10;
    let x = 0, y = 20, w = brick_width, h = brick_height;
    for(let i = 0; i < no_of_layers; i++){
        x = abs((no_of_bricks_in_a_row * (brick_width + padding)) - width) / 3;
        y += h + padding;
        for(let j = 0; j < no_of_bricks_in_a_row; j++){
            x += w + padding;
            let brick = new Brick(x, y, w, h, color(150,255,140), true);
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
    fill(255);
    text("Game Over", width / 2, height / 2);
}

function draw(){
    background(51);
    player.draw();
    player.update();
    ball.draw();
    ball.update();
    draw_bricks();
    show_score();
}
// basket.x = constrain(mouseX, 0 ,width);
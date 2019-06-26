var player;
var ball;

function setup(){
    createCanvas(windowWidth, windowHeight);
    player = new Player(0, height - 20, 100, 10, random_color(), 10);
    ball = new Ball(20, 20 , 15, 5, 120, random_color());
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
}
// basket.x = constrain(mouseX, 0 ,width);
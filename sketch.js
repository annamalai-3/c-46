
var catcher;
var score= 0;

function setup() {
  createCanvas(1200,1200);

   catcher = createSprite(400, 600, 50, 50);
}

function draw() {
  background(0,0,0);
catcher.x = mouseX;
catcher.y = mouseY;
textSize(25);
text("SCORE :"+ score,700,120)
  drawSprites();
}
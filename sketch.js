var box 
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
  drawSprites()
  if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+3

  }
  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-3
  }
  if(keyIsDown(UP_ARROW)){
    box.y=box.y-3
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y+3
  }
}





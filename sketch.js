var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite (200,200,40,40);
  

}

function draw() 
{
  background(30);
  if (keyDown("up")){
    sprite.position.y= sprite.position.y-10

  }
  if (keyDown("down")){
    sprite.position.y= sprite.position.y+10

  }

  if (keyDown("left")){
    sprite.position.x= sprite.position.x-10

  }

  if (keyDown("right")){
    sprite.position.x= sprite.position.x+10

  }

  drawSprites();
  
}





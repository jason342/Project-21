var bullet, wall;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);
  bullet = createSprite(50, 200, 40, 20);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255, 255, 255);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var dmg = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(dmg > 10){
      bullet.shapeColor=color(255,0,0);
    }
    if(dmg<10){
    bullet.shapeColor=(0,255,0);
    }
  }
}
function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
      return true
  }
  return false;
}
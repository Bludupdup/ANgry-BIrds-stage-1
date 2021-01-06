var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50, 200, 50, 100);
  wall = createSprite(900,200,60,height/2);
}

function draw() {
  
  background(0);  
  
  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);
  
  
  
  
  
  drawSprites();
}
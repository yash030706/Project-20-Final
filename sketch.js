var car
var wall;
var speed 
var weight
var deformation;

function setup() {
  createCanvas(1600,400);
  
  weight = Math.round(random(400,1500));
  speed = Math.round(random(55,90));
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed
  
  car.shapeColor = color(255);

  wall = createSprite(1500,200,60,200);
  wall.shapeColor = color(80,80,80);
  
  

}

function draw() {
  background (0);
  
  if(wall.x-car.x < (wall.width + car.width/2)){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed/22500;
  if(deformation < 100){
    car.shapeColor = color(0,255,0);
  }

  if(deformation > 100 && deformation < 180){
    car.shapeColor = color(230,230,0);
  }

  if(deformation > 180){
    car.shapeColor = color(255,0,0);
  }
}
drawSprites();
}
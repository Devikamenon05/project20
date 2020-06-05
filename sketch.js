var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1280,400);
 car= createSprite(50, 200, 50, 50);
 speed = random(55,90) ;
 weight = random(400,1500);
 wall = createSprite(1180,200,60,height/2);
 wall.shapeColor = color(80,80,80);
 car.velocityX = speed; 
 deformation = 0.5*weight*speed*speed/22500;
 car.shapeColor = color(255);
}
function draw() {
  background(0); 
  collision1(); 
  drawSprites();
}
function collision1(){ 
  if(car.collide(wall)){
    car.velocityX = 0;

    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation>180){
      car.shapeColor="red";
    }
  }
 }








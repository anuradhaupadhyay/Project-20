var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,800);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  deformation = Math.round((0.5*weight*speed*speed)/22500)
  
  wall = createSprite(1500, 200, 60, 800);
  wall.shapeColor=color(80,80,80);

  car = createSprite(100, 200, 50, 50);
  car.velocityX=speed;
}

function draw() {
  background(0);

  if(wall.x-car.x<(wall.width+car.width)/2){

    car.velocityX=0;

    textSize(36);
    text("deformation: "+deformation,800,400);
    text("speed: "+speed,800,500);
    text("weight: "+weight,800,600);
    if(deformation<=100){
      car.shapeColor="green";
    }

    if(deformation>100&&deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation>=180){
      car.shapeColor="red";
    }
  }

  drawSprites();
}
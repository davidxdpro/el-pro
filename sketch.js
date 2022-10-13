
var trex ,trex_running,trex_collided;
var ground,  invisibleGround,groundImage,cloudImage;
function preload(){
  // 3 llamar imagenes para animación
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
// 4 llamar a la animacion
  trex_collided=loadAnimation("trex_collided.png");
  // groundImage=loadImage("ground2.png")
  groundImage=loadImage("ground2.png");
  cloudImage=loadImage("cloud.png");

  obstacle1=loadImage("obstacle1.png"); 
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
   obstacle5=loadImage("obstacle5.png"); 
  obstacle6=loadImage("obstacle6.png");
  
}
function setup(){
  createCanvas(600,200)
  coluldImage=loadImage("could.png");
  //1 create a trex sprite
  trex=createSprite(50,100,20,100);
  // llamar animación 
  trex.addAnimation("running",trex_running);
  //  5 tamaño de trex
  trex.scale=0.5;
  // 5 ubicación de trex
  trex.x=50;   
  // 2 crear sprite del piso
  ground=createSprite(200,180,400,20)
 ground.addImage("ground",groundImage);
invisibleGround=createSprite(200,190,400,10);
invisibleGround.visible=false;
var rand=Math.round(random(1,100))
console .log(rand);
}

function draw(){

  background("white")
 ground.velocityX=-2;
 
 if(ground.x<0){
 ground.x=ground.width/2;
 }
 // 6 trex se mueve con la tecla space
  if(keyDown("space")&&trex.y >=100)
  {
    trex.velocityY=-10;
           
  }
  //  7 gravedad Trex
  trex.velocityY=trex.velocityY + 0.5;    
  // 8 trex toca el suelo
 //trex.collide(ground);
  trex.collide(invisibleGround);
  spawnObstacles();
  
  spawnClouds();
  drawSprites();
  

}
  
function spawnClouds(){
  if(frameCount%60===0){
  cloud=createSprite(600,100,40,10);
  cloud.addImage(cloudImage)
  cloud.y=Math.round(random(10,60))
  cloud.sacle=0.4;
  cloud.velocityX=-3
 cloud.lifetime=200
  console.log(trex.depth);
  console.log(cloud.depth);
cloud.depth=trex.depth
trex.depth=trex.depth+1

 }
 //cloud=createSprite(600,100,40,10)
 //cloud.velocity=-3
}

function spawnObstacles(){
  if(frameCount%60==0){
    var obstacle=createSprite(600,165,10,40);
    obstacle.velocityX=6;
var rand=Math.round(random(1,6))
switch(rand){
case 1 : obstacle.addImage(obstacle1)
break;
case 2 : obstacle.addImage(obstacle2)
break;
case 3 : obstacle.addImage(obstacle3)
break;
case 4 : obstacle.addImage(obstacle4)
break;
case 5 : obstacle.addImage(obstacle5)
break;
case 6 : obstacle.addImage(obstacle6)
 break;
 default:break;   
    
    }
  }
}

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;
var ground, groundI;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
  
}



function setup() {
  createCanvas(600,400);
 monkey=createSprite(50,330,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.12;
  
  ground=createSprite(300,380,1900,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
 FoodGroup=createGroup();
 obstacleGroup=createGroup();
  
  
}


function draw() {
   
background("pink");
  
  score = score + Math.round(frameRate()/60);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score "+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime,100,50);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-15;
    
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  spawnBanana();
  spawnObstacle();
  drawSprites();
}
function spawnBanana(){
  if(frameCount%60===0){    
  
   banana=createSprite(300,100,20,20);
     banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=100;
    FoodGroup.add(banana);
    
  }
}

function spawnObstacle(){
  if(frameCount%100===0){    
  
   obstacle=createSprite(500,350,20,20);
      
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=200;
  obstacleGroup.add(obstacle);
  }
}




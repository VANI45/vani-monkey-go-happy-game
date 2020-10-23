
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
}


function draw() {
  background(0);
stroke("white");
textSize(20);
fill("white");
text("score: "+score,500,50);
  
stroke("black");
textSize(20);
survivalTime=Math.ceil(frameCount/frameRate())
text("survivalTime: "+ survivalTime, 100,10);
 
  monkey.collide (ground);
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
  
  spawnObstacles();
  spawnfood();
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(800,320,10,40);
   obstacle.velocityX = -6; 
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.15;
   
  obstacle.lifetime=300;
   obstacle  Group.add(obstacle);
 }
    }

function spawnfood(){
  if(frameCount% 80 === 0){
banana = createSprite(600,250,40,10)
    banana.y = random(120,200)
    banana.velocityX=-5;
    banana.lifetime=300;
    monkey.depth=banana.depth +1;
    banana.addImage(bananaImage);
    banana.scale=0.05;
    
    foodGroup.add(banana);
    
     }
}



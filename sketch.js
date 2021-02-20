var backImage,backgr;
var player, player_running;
var ground,ground_img;
var banana, bananaImg;
var bananaGroup;
var obstacle, obstacleImage, obstacleGroup;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaImg = loadImage("banana.png");
obstacleImage = loadImage("stone.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
  //console.log(frameCount);
  drawSprites();
  spawnFood();
  obstacles();

}

function spawnFood(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,200,20,20);
    banana.addImage("bananaImg", bananaImg);
    banana.scale = 0.05;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -4;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 200 === 0){
    obstacle = createSprite(400, 180, 20, 20);
    obstacle.addImage ("obstacleImage", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.y = Math.round(random(120,200));
    obstacle.velocityX = -4;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}

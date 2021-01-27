var PLAY=2;
var END=1;
var gameState=2 ;

var fruit2, fruit3, fruit4

var Enemy , fruit 
  var world
var fruit, monster

var g0 , swordimage , fruits , monsterd

function preload(){
  
 
  swordimage = loadImage("sword.png");
  moving = loadImage("alien1.png");
  gmeovr = loadImage("gameover.png")
  fruit = loadImage("fruit1.png")
 fruit1 = loadImage("fruit2.png")
  fruit2 = loadImage("fruit3.png")
  fruit3 = loadImage("fruit4.png")
  
}

function setup(){
   createCanvas(600, 600);
  
  
  //creating sword
sword = createSprite(40,200,20,20); 
  sword.addImage("swordimage",swordimage);
sword.scale=0.7
  
  
 EnemyGroup = createGroup();
  fruitGroup = createGroup();
  g0=createSprite(300,300,20,20)
  g0.addImage(gmeovr)
  g0.scale = 0.5
  
  monster=createSprite(400,200,20,20);
  monster.addImage(moving);
    monster.y=Math.round(random(100,300));
monster.velocityX=-8;


  
 


}




















function draw(){
background("LightBlue")
  
   
  
  
   

  if(gameState === PLAY){
   fruits();
enemy();
   
    g0.visible = false;
    
  if(fruitGroup.isTouching(sword)){
fruitGroup.destroyEach(); score=score+2;
  
  GameState = END
  }
  }
 if(gameState === END){
   
   g0.visible = true;
   
 }
  
  
  
 sword.y = World.mouseY
   sword.x = World.mouseX
  
  
  
 
  
 
  
 
  
  
  drawSprites();
}



function fruits() {
if(World.frameCount%80===0){
 fruit = createSprite(300,600,20,20);
  r=Math.round(random(2,5)); 
if (r == 2) {
fruit.addImage("fruit",fruit);
}else if(r == 3){
  fruit.addImage("fruit1",fruit1);
}else if(r == 4){
  fruit.addImage("fruit2",fruit2);
}else {
fruit.addImage("fruit3",fruit3);
}
    
  
    
    
    
   fruit.scale = 0.2;

 fruit.y=Math.round(random(50,340));
fruit.velocityX=-7; fruit.lifetime = 100;
fruitGroup.add(fruit);

}

}

function enemy() {
  if(frameCount%129 === 0) {
monster=createSprite(600,600,20,20);
  monster.addImage(moving);
    monster.y=Math.round(random(100,300));
monster.velocityX=-8;
  
  
  monsterGroup.add(monster)
  
  monster.lifetime = 100
  
}
}










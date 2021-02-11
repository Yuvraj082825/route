var database,gameState=0,playerCount,canvas;
var allPlayers;
var form,game,player;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,down7,block11,block12,block13;
var block14,block15,block16,luscus,germ1,germ2,germ3;
var mainImg,germ1Img,germ2Img,germ3Img,button1,button2,Gweapon1,Gweapon2,Mweapon1,Mweapon2,Gweapon3;
var gate1,gate2,b1block,b2block,g1block,g2block,button1,button2,germ1,germ2,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var button,buttonPressed;
function preload()
{
  database=firebase.database();
  mainImg=loadImage("images/main.png");
  germ1Img=loadImage("images/germ.png");
  germ2Img=loadImage("images/germ1.png");
  germ3Img=loadImage("images/germ2.png");
  button=loadImage("images/button.png");
  buttonPressed=loadImage("images/buttonPressed.png");
}

function setup()
{
  createCanvas(displayWidth+500,displayHeight+100);
  game=new Game();
  game.getState();
  game.start();
  console.log(displayHeight);//964
  console.log(displayWidth);//2036
}
function draw() {
  background("yellow");  
  if(playerCount===4){
    game.update(1);
  }
  if(gameState==1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }

}

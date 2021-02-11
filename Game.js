class Game
{
    constructor(){

    }
    
    getState()
    {
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getPlayerCount();
            }
            form = new Form()
            form.display();
        }
        block1 = createSprite(1018,100,2036,10);
        block2 = createSprite(2031,532,20,864);
        block3 = createSprite(5,532,10,864);
        block4 = createSprite(1018,960,2036,10);
        block5 = createSprite(778,210,1536,10);
        block6 = createSprite(1700,270,10,350);
        block7 = createSprite(1785,445,180,10);
        block8 = createSprite(1950,210,150,10);
        block9 = createSprite(628,348,450,10);
        down7 = createSprite(1825,690,10,280);
        gate1=createSprite(1925,815,195,30);
        gate1.shapeColor="brown";
        gate2=createSprite(1835,900,30,150);
        gate2.shapeColor="brown";
        block10= createSprite(1400,395,290,10);
        block11 = createSprite(1400,495,10,200);
        block12 = createSprite(1100,515,20,350);
        b1block=createSprite(110,395,200,10);
        button1=createSprite(50,318,50,60);
        button1.addImage(button);
        button1.scale=0.6;
        block13 = createSprite(400,540,200,10);
        block14 = createSprite(890,580,10,200);
        block16=createSprite(2031,914,20,95);
        block16.shapeColor="green";
        block17=createSprite(820,475,150,10);
        block18=createSprite(190,730,10,210);
        button2=createSprite(50,883,50,60);
        button2.addImage(button);
        button2.scale=0.6;
        block19=createSprite(628,815,355,10);
        block20=createSprite(1100,900,20,160);
        block21=createSprite(1260,750,10,150);
        block22=createSprite(1500,900,180,10);
        luscus = createSprite(55,128);
        luscus.addImage(mainImg);
        luscus.scale=0.48;
        fill("green")
        text(this.name,55,123);
       germ1 = createSprite(1955,300);
       germ1.addImage(germ1Img);
       germ1.scale=0.6;
        germ2 = createSprite(90,460);
        germ2.addImage(germ2Img);
        germ2.scale=0.6;
        germ3 = createSprite(1955,750);
        germ3.addImage(germ3Img);
        germ3.scale=0.6;
        players= [luscus, germ1, germ2, germ3];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background(47,79,79);
        
        
        
        var index=0;
        for(var plr in allPlayers){
            index=index+1;
            if(index===player.index){
                /*stroke(4);
                fill("red");
                ellipse(x,y,80,80);*/
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y
            }
        }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null)
        {
            //main.y=main.y-2;
            player.update();
        }
        if(keyIsDown(DOWN_ARROW)&& player.index!==null)
        {
            player.y+=2;
            player.update();
        }
        if(keyIsDown(RIGHT_ARROW)&& player.index!==null)
        {
            luscus.x=luscus.x+2;
            player.update();
        }
        if(keyIsDown(LEFT_ARROW)&& player.index!==null)
        {
            player.x-=2;
            player.update();
        }
        if(luscus.isTouching(block16)){
            gameState=2;
        }
        drawSprites();
    }
}
    
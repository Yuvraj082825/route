class Form
{
    constructor(){
        this.title=createElement("h1");
        this.enter=createInput("Name");
        this.name=createButton('Play');
        this.greeting=createElement("h3");
        this.reset=createButton("reset");
    }
    hide(){
        this.greeting.hide();
        this.name.hide();
        this.enter.hide();
    }
    display(){
        //creating title
        var title=createElement("h1");
        title.html("Routes");
        title.position((displayWidth/2)-50,-5);
        
        this.enter.position(displayWidth/2,50);
        this.name.position(displayWidth/2,80);
        this.reset.position(displayWidth/2-110,25)
        this.name.mousePressed(()=>{
            this.enter.hide();
            this.name.hide();
            player.name = this.enter.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello " + player.name)
          this.greeting.position(displayWidth/2-70, displayHeight/4);
        })
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        })
    }
}
class Player
{
    constructor(){
        this.index=null;
        this.name=null;

    }
    getPlayerCount()
    {
        var playerCountref=database.ref('playerCount');
        playerCountref.on("value",function(data){
            playerCount=data.val();
        })
    }
    update(){
        var player="members/player"+this.index;
        database.ref(player).set({
            name:this.name
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    static getPlayerInfo(){
        var playerInfoRef=database.ref('members');
        playerInfoRef.on("value",function(data){
            allPlayers=data.val();
        })
    }

}
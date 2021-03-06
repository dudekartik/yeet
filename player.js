class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    getCount(){
        var playerRef = database.ref("playerCount");
        playerRef.on("value",function(data){
            pc = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).update({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
        var playerinforef = database.ref('players');
        playerinforef.on('value',(data)=>{
            allPlayers = data.val();
        })
    }
}
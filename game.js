class Game{

constructor(){

}

    getState(){
        var gameref = database.ref("gameState");
        gameref.on("value",function(data){
            gs = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if(gs===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1=createSprite(100,300)
        car2=createSprite(300,300)
        car3=createSprite(500,300)
        car4=createSprite(700,300)
        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
    
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
          //var display_position = 100;
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 0;
          var y;
    
          for(var plr in allPlayers){

            index = index + 1 ;
    
            x = x + 200;
            y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
    
         
           
          }
    
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=10
          player.update();
        }
    
        drawSprites();
      }
    }
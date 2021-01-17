class Game {
    constructor(){}

    getState(){
        var gameref = database.ref("gameState")
        gameref.on("value",function(data){
            gameState = data.val();
        })
    }

    update(State){
        database.ref("/").update({
            gameState : State
        })
    }

    async start(){
        if (gameState ===0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
    }

    play(){
             form.hide();

             fill("Black");
           text("Game start",250,250)  
          Player.getPlayerinfo();
          if(allPlayers!=undefined){

            var ypos = 200;
            for(var plr in allPlayers){
                if(plr=="player"+player.index){
                    fill("green")
                 }else{
                    fill("red")
                }
                ypos = ypos+20;
                text (allPlayers[plr].name +":" + allPlayers[plr].distance,250,ypos);
                
            }
          }

           if(keyIsDown(UP_ARROW) && player.index != null){
               player.distance = player.distance + 10
               player.update();
           }
    }
    


}


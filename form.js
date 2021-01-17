class Form {
    constructor(){
        this.input  = createInput("player")
        this.button = createButton("click here!")
        this.greeting = createElement("h2")  
    }

    hide(){
        this.greeting.hide(); 
         this.input.hide();
         this.button.hide();
    }
    

    display(){
        var title = createElement("h1")
        title.html("Car Racing Game");
        title.position(130,0);
        
        
        this.input.position(530,160);
        
        
       this. button.position(500,350);
       this. button.mousePressed(()=>{
           this.input.hide();
          this.button.hide();

           player.name = this.input.value()
           
           playerCount = playerCount + 1 
           player.index = playerCount;
           player.update();
           player.updateCount(playerCount);

               
           this.greeting.html("hello  " + player.name)
           this.greeting.position(550,360);


        })
    }
}

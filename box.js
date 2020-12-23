class Box{

constructor(x,y,width,height){
    //properties
    var options = {
        restitution : 0.08,    //JSON
        friction : 0.3,
        density : 0.7
    }

    this.box = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(myworld,this.box);
  
}


//functions
display(){

    var pos =this.box.position;
    var angle = this.box.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("coral");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();

}

}
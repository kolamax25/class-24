class Ground{


    constructor(x, y, width, height){

        var options ={
        friction: 0.5,
        density: 400,
        isStatic: true
        }  

        this.ground = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(myworld, this.ground)
    }

display(){

    var pos = this.ground.position
    push();
    fill("navy")
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
}



























}
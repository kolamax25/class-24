const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myngine, myworld;
var ground, box1, box2, box3;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
    myworld = myengine.world;

    box1 = new Box(110, 10,50,50);
    box2 = new Box(138,100,60,100);
    box3 = new Box(120,200,40,60);

    ground = new Ground(200, 380, 600, 40)
    

}

function draw(){
    background(0);
    Engine.update(myengine);
   

    box1.display();
    box2.display();
    box3.display();
    ground.display();
}
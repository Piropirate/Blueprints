const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Box1, Box2;
var Ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    Box1 = new box(200,100,50,50);
    Box2 = new box(240,300,50,50);

    Ground = new ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    Box1.display();
    Box2.display();
    Ground.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var g, b1, b2;
var canvas;
function setup()
{
engine = Engine.create();
world = engine.world;
canvas = createCanvas(400,400);
g = new Ground(200,height,width,10);
b1 = new Box(200,300,50,50);
b2 = new Box(240,100,50,100);
}

function draw()
{
  background("white");
  Engine.update(engine);

  g.display();
  b1.display();
  b2.display();
}
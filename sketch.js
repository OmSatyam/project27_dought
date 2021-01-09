
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(200,550,70);
	bob2 = new Bob(270,550,70);
	bob3 = new Bob(340,550,70);
	bob4 = new Bob(410,550,70);
	bob5 = new Bob(480,550,70);

	roof = new Roof(340,200,400,30);

  rope1 = new Rope(bob1.body,roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
}




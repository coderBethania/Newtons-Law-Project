
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

		//Create the Bodies Here.
		bob1 = new Bob(400,380);
		bob2 = new Bob(425,380);
		bob3 = new Bob(375,380); 
		bob4 = new Bob(350,380);
		bob5 = new Bob(450,380);
				 roof1 = new Roof(400,250,400,20);
				rope1 = new Rope(bob1.body,roof1.body);
				rope2 = new Rope(bob2.body,roof1.body);
				rope3 = new Rope(bob3.body,roof1.body);
					rope4 = new Rope(bob4.body,roof1.body); 
				rope5 = new Rope(bob5.body,roof1.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed()
{ if(keyCode === UP_ARROW)
	{ Matter.Body.applyForce(bob4.body,bob4.body.position,{x: -50, y: -50});
 } 
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, rope1,rope2,rope3,rope4,rope5,world;
var bobObject1, bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;

	//Create the Bodies Here.
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	roof = new Roof(350,20,420,50);

	rope1= new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2= new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3= new Rope(bobObject3.body,roof.body,0,0);
	rope4= new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5= new Rope(bobObject5.body,roof.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);


  roof.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}


 function drawLine(constraint)
 {
	 bobBodyPosition=constraint.bodyA.position
	 roofBodyPosition=constraint.bodyB.position
 
	 roofBodyOffset=constraint.pointB;
	 
	 roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	 roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	 line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
 }
 
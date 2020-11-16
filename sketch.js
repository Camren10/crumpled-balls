
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground,box1,box2,box3,paper;

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);
	box1 = new Box(550,620,20,100);
	box2 = new Box(650,620,20,100);
	box3 = new Box(600,660,100,20);
	paper = new Paper(50,600,20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  box3.display();
  box1.display();
  box2.display();
  paper.display();
}
 function keyPressed() {
	 if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce (paper.body,paper.body.position,{x:70,y:-55});
	 }
 }




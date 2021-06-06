const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper,ground;
var leftside,rightside,bottom

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground (600,380,1200,20)
	papper = new Papper(200,300,40)
	leftside = new Dustbin(900,310,15,120)
	bottom = new Dustbin(978,363,140,15)
	rightside = new Dustbin(1056,310,15,120)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("black");


  ground.display();
  papper.display();
  leftside.display();
  bottom.display();
  rightside.display();

  drawSprites();
	
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(papperObject.body, papperObject.body.position,{x:85,y:85})
	}
}




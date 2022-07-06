
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftWall, rightWall
var ball
var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground =new Ground(300,680,1000,20)
	leftWall =new Ground(550,607,20,125)
	rightWall =new Ground(750,607,20,125)

	var ball_options = {
		isStatic:false,
		resitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball)



	Engine.run(engine);


  
}


function draw() {
  background(0);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,radius,radius);


  ground.show();
  leftWall.show()
  rightWall.show()
  Engine.update(engine)
  


  drawSprites();

}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-80})		
	}
  }





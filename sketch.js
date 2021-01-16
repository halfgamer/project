
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,GROUND,dust1,dust2,dust3

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;
	  
	var option2= {
		isStatic:false
	}

	//Create the Bodies Here.
	GROUND= new Ground(600,height ,1200,20)
	box1= new Box(200,-50,50,50);
	dust1= new Box(650,420,20,190,option2)
	dust2= new Box(780,420,240,20,option2)
	dust3= new Box(790+70,420,20,190,option2)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  GROUND.display();
  dust1.display();
  dust2.display();
  dust3.display();

  if (keyCode=== UP_ARROW){
	  Matter.Body.applyForce(box1.body,box1.body.position,{x:2,y:-7})
  }
  if (keyCode=== DOWN_ARROW){
	Matter.Body.applyForce(box1.body,box1.body.position,{x:0,y:5})

}

  //if (box1.isTouching(dust2)){
//	  Text(200,200,"HURRAAy")
//  }
  drawSprites();

 
}




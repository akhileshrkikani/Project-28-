var boy,boyImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload(){

	
}

function setup() {
	createCanvas(1300, 700);



	engine = Engine.create();
	world = engine.world;


ground1=new Ground(700,705,1500,30);
tree1=new Tree(1000,400,600,600);
mango1=new Mango(930,200,80,80)
mango2=new Mango(850,350,80,80)
mango3=new Mango(970,300,80,80)
mango4=new Mango(1100,200,80,80)
mango5=new Mango(1200,300,80,80)
mango6=new Mango(1100,350,80,80)
boy1=new Boy(200,630,200,250);
stone1=new Stone(140,550,60,60)
rope=new Chain(stone1.body,{x:200,y:630})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

ground1.display();
tree1.display()
stone1.display();
rope.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
boy1.display();



detectCollision(stone1,mango1)
detectCollision(stone1,mango2)
detectCollision(stone1,mango3)
detectCollision(stone1,mango4)
detectCollision(stone1,mango5)
detectCollision(stone1,mango6)
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly()
}
function detectCollision(Lstone,Lmango){
	MangoBodyPosition=Lmango.body.position
	StoneBodyPosition=Lstone.body.position

	var distance=dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
 
		Matter.Body.setStatic(Lmango.body,false)
	}

}




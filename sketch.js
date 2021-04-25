
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, Slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//boy=new Boy(200,240,200,300);

	mango1=new Mango(1120,100,30);
	mango2= new Mango(1100,50,30);
	mango3=new Mango(1050,140,30);
	mango4= new Mango(1100,160,30);
	mango5=new Mango(1000,150,30);
	mango6= new Mango(950,220,30);
	mango7=new Mango(1050,200,30);
	mango8= new Mango(900,200,30);
	mango9=new Mango(1200,200,30);
	mango10=new Mango(1150,200,30);
	stoneObj=new Stone(230,400,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	slingshot = new SlingShot(stoneObj.body,{x:290, y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,250,320,200,300);

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
 
  
 //boy.display();
 
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();
  stoneObj.display();
  slingshot.display();
}

function mouseDragged(){
	
Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
	
}

function mouseReleased(){
	
slingshot.fly()
}

function detectCollision(stoneObj,mango){
if(stoneObj.body.position.x-mango.body.position.x<mango.r+stoneObj.r
	&&mango.body.position.x-stoneObj.body.position.x<mango.r+stoneObj.r
	&&stoneObj.body.position.y-mango.body.position.x<mango.r+stoneObj.r
	&&mango.body.position.y-stoneObj.body.position.y<mango.r+stoneObj.r){
	Matter.Body.setStatic(mango.body,false)
}
}

function keyPressed(){
	if(keyCode===32){
 
slingshot.attached(stoneObj.body);
	}
}
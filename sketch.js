
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var tree;
var chain;
var boy, boyImg;
var mango1, mango2;

function preload()
{
	boyImg = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(500,585,50,50);
	boy.scale = 0.1;

	//Create the Bodies Here.
  ground = new Ground(width/2, 650, width, 20);
	tree = new Tree(1000,405,10,50);
  stone = new Stone(395,540,25);
  //boy = new Boy(400,650,60,70)
	mango1 = new Mango(800,300,15);
	mango2 = new Mango(920,230,15);
	mango3 = new Mango(910,320,15);
  mango4 = new Mango(1080,310,15);
	mango5 = new Mango(900,390,15);
	mango6 = new Mango(800,375,15);
  mango7 = new Mango(1040,190,15);
	mango8 = new Mango(1150,270,15);
	mango9 = new Mango(1190,350,15);
	chain = new Chain(stone.body,{x: 445, y: 520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211);
  Engine.update(engine);
  
  tree.display();
  ground.display();
  boy.addImage(boyImg);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 // boy.display();
  
  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  
  drawSprites();
  stone.display();
  textFont("Times New Roman")
  textSize(30)
  stroke(211)
  fill(0)
  text("Press 'SPACE' to play again",50,50)
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x:395, y:545}); 
    chain.attach(stone.body);
  }
}

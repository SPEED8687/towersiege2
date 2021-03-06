const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2,ground3;
var engine,world;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450,380,900,10);
  ground2 = new Ground(390,300,250,10);
  ground3 = new Ground(700,200,250,10);

  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(330,235,30,40);
  box8 = new Box(360,235,30,40);
  box9 = new Box(390,235,30,40);
  box10 = new Box(420,235,30,40);
  box11 = new Box(360,195,30,40);
  box12 = new Box(390,195,30,40);
  box13 = new Box(375,155,30,40);
  box14 = new Box(640,175,30,40);
  box15 = new Box(670,175,30,40);
  box16 = new Box(700,175,30,40);
  box17 = new Box(730,175,30,40);
  box18 = new Box(760,175,30,40);
  box19 = new Box(790,175,30,40);
  box20 = new Box(670,145,30,40);
  box21 = new Box(700,145,30,40);
  box22 = new Box(730,145,30,40);
  box23 = new Box(760,145,30,40);
  box24 = new Box(700,105,30,40);
  box25 = new Box(730,105,30,40);
  box26 = new Box(715,75,30,40);

  ball = new Ball(50,200,40);

  slingshot = new SlingShot(ball.body,{x:100,y:200})
}

function draw() {
background(0);
Engine.update(engine);
ground.display();
ground2.display();
ground3.display();
fill("red");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
fill("green");
box7.display();
box8.display();
box9.display();
box10.display();
fill("blue");
box11.display();
box12.display();
fill("yellow");
box13.display();
ball.display();
slingshot.display();
fill("red");
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
fill("green");
box20.display();
box21.display();
box22.display();
box23.display();
fill("blue");
box24.display();
box25.display();
fill("yellow");
box26.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.ball);
  }
}
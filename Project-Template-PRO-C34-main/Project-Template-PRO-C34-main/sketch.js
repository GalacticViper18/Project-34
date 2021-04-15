const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 400, 2500, 5);

  hero = new Hero(400,3,100,100);
  rope = new Rope(hero.body, { x: 100, y: 465 });
  monster = new Monster(900,200,100,100);

  box1 = new Box(280, 100, 70, 70);
  box2 = new Box(310, 100, 70, 70);
  box3 = new Box(340, 100, 70, 70);
  box4 = new Box(370, 100, 70, 70);
  box5 = new Box(400, 100, 70, 70);
  box6 = new Box(430, 100, 70, 70);
  box7 = new Box(460, 100, 70, 70);
  box8 = new Box(490, 100, 70, 70);
  box9 = new Box(310, 100, 70, 70);
  box10 = new Box(340, 100, 70, 70);
  box11= new Box(370, 100, 70, 70);
  box12 = new Box(400, 100, 70, 70);
  box13 = new Box(430, 100, 70, 70);
  box14 = new Box(460, 100, 70, 70);

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(bg);
  hero.display();
  ground.display();
  stroke(15);
  fill("red");
  monster.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var courtimg;
var circle1, circle2, circle3, circle4;
var myteam, opponentteam;
var circle1img, circle2img, circle3img, circle4img;
var ballimg, ball;
var inv1, inv2, inv3, inv4;
function preload(){
 courtimg = loadImage("images/court.jpg");
 circle1img = loadImage("images/walluigi.png");
 circle2img = loadImage("images/lebron james.png");
 circle3img = loadImage("images/KD.png");
 circle4img = loadImage("images/wario.png");
 ballimg = loadImage("images/Basketball.png");
}
function setup() {
  createCanvas(displayWidth - 100, displayHeight);
  engine = Engine.create();
  world = engine.world;
  myteam = createGroup();
  opponentteam = createGroup();
  circle1 = createSprite(displayWidth/2 - 300, displayHeight/2 - 200, 10, 10);
  circle1.addImage("circle1", circle1img);
  circle1.scale = 0.1;
  opponentteam.add(circle1);
  circle2 = createSprite(displayWidth/2 + 250, displayHeight/2 - 200, 10, 10);
  circle2.addImage("circle2", circle1img);
  circle2.scale = 0.1;
  opponentteam.add(circle2);
  circle3 = createSprite(displayWidth/2 - 300, displayHeight/2 + 200, 10, 10);
  circle3.addImage("circle3", circle2img);
  circle3.scale = 0.1;
  myteam.add(circle3);
  circle4 = createSprite(displayWidth/2 + 250, displayHeight/2 + 200, 10, 10);
  circle4.addImage("circle4", circle3img);
  circle4.scale = 0.1;
  myteam.add(circle4);
  ball = createSprite(displayWidth/2 - 50, displayHeight/2 - 30, 10, 10);
  ball.addImage("ball", ballimg);
  ball.scale = 0.1;
  inv1 = createSprite(1105, 380, 10, displayHeight-100);
  inv1.shapeColor = "blue";
  inv1.visible = false;
  inv2 = createSprite(159, 380, 10, displayHeight-100);
  inv2.shapeColor = "green";
  inv2.visible = false;
  inv3 = createSprite(639, 723, displayWidth-400, 9);
  inv3.shapeColor = "green";
  inv3.visible = false; 
  inv4 = createSprite(639, 49, displayWidth-400, 9);
  inv4.shapeColor = "green";
  inv4.visible = false; 
}
function draw() {
  background(courtimg);
  Engine.update(engine);
  if(keyDown("w")){
    circle3.y-=10;
  }
  if(keyDown("s")){
    circle3.y+=10;
  }
  if(keyDown("d")){
    circle3.x+=10;
  }
  if(keyDown("a")){
    circle3.x-=10;
  }
  if(keyDown("up")){
    circle4.y-=10;
  }
  if(keyDown("down")){
    circle4.y+=10;
  }
  if(keyDown("left")){
    circle4.x-=10;
  }
  if(keyDown("right")){
    circle4.x+=10;
  }
  if(ball.isTouching(circle1)||ball.isTouching(circle2)||ball.isTouching(circle3)||ball.isTouching(circle4)){
    ball.x = mouseX;
    ball.y = mouseY;
    ball.velocityX = 10;
    ball.velocityY = 10;
  }
  ball.bounceOff(inv1);
  ball.bounceOff(inv2);
  ball.bounceOff(inv3);
  ball.bounceOff(inv4);
  drawSprites();
}
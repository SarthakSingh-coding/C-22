var ground;
var engine;
const B = Matter.Bodies;
const W = Matter.World;
const E = Matter.Engine;
var ball;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  engine = E.create();
  world = engine.world;

  var groundHolder = { isStatic: true}
  var ballHolder = {restitution: 1}

  ground = B.rectangle(200, 300, 50, 20, groundHolder);
  ball = B.rectangle(150, 200, 20, 20, ballHolder);
 
  W.add(world, ground);
  W.add(world, ball);
  console.log(ball, ground);

}

function draw() {
  background("green");
  Matter.Engine.update(engine);

  // rect(400, 100, 50, 50);
  rect(ground.position.x, ground.position.y, 500, 20);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  

 //drawSprites();
}

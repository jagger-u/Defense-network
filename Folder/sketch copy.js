var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;
var boxes = [];
var ground;
var options = { isStatic: true };
function setup() {
  canvasWidth = 1200;
  canvasHeight = 600;
  createCanvas(canvasWidth, canvasHeight);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  Engine.run(engine);
  box1 = new Box(100,100,100,100);
  ground = Bodies.rectangle((canvasWidth/2), (canvasHeight-50), canvasWidth, 2, options)
}
function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}
function draw() {
  background(51);
  World.add(world, ground);
  for (var i = 0; i < boxes.length; i++){
    boxes[i].show();
  }  
}

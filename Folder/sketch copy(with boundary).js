var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;
var boxes = [];
var proteins = [];
var ground;
function setup() {
  canvasWidth = 800;
  canvasHeight = 500;
  createCanvas(canvasWidth, canvasHeight);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  ground = new Boundary((canvasWidth/2), (canvasHeight-50), canvasWidth, 21);
  World.add(world, ground);
}
function mouseDragged() {
  proteins.push(new c3(mouseX, mouseY, random(10,20)));
}
function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < proteins.length; i++){
    proteins[i].show();
    if (proteins[i].isOffScreen()) {
      proteins.splice(i, 1);
      i--;                                        //to avoid the "blinking"
    }
  }  
  ground.show();
}

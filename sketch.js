var Engine = Matter.Engine, World = Matter.World, Bodies = Matter.Bodies; Body = Matter.Body;
var engine, world;
//********************************************************** */
//* Your variables
//*
//****/
var proteins = [];
var theR = 80;
var theG = 120;
var theB = 60;
var canvasWidth = 800;
var canvasHeight = 500;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  microEngine = Engine.create();
  microWorld = microEngine.world;
  //********************************************************** */
  //* Setup Code here
  //*
  //****/
  // initProteins(20);
  microWorld.gravity.x = 0;
  microWorld.gravity.y = 0;









}
function mouseDragged() {
  proteins.push(new c3(mouseX, mouseY, random(10,20), random(10,20), random(0,255))); 
}
function draw() {
  background(theR,theG,theB);
  Engine.update(microEngine);
  //********************************************************** */
  //* Draw Code here
  //*
  //****/
  // console.log(proteins);
  var theframeRate = frameRate();
  if (theframeRate < 50) {
    console.log(theframeRate);
  }
  // console.log(theframeRate);
  for (var i = 0; i < proteins.length; i++){
    proteins[i].show();
    // proteins[i].body.position.x += random(-0.1,0.2);
    // proteins[i].body.position.y += random(-0.1,0.1);
    if (proteins[i].isOffScreen()) {
      proteins.splice(i, 1);
      i--;                                        //to avoid the "blinking"
    }
  }














  
}

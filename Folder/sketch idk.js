var Engine = Matter.Engine, World = Matter.World, Bodies = Matter.Bodies; Body = Matter.Body;
var engine, world;
//********************************************************** */
//* Your variables
//*
//****/
var proteins = [];




function setup() {
  createCanvas(800, 500);
  microEngine = Engine.create();
  microWorld = microEngine.world;
  //********************************************************** */
  //* Setup Code here
  //*
  //****/
  // microWorld.gravity.x = 0.1;
  // microWorld.gravity.y = 0.05;
  microWorld.gravity.scale = 0;
  // proteinGenerator(100,5);
  ball = new c3(random(100,700), random(100,400), random(10,20));
  mforce = {x: 0, y: -0.05};
  // Body.applyForce(ball, ball.body.position, mforce);




}
function draw() {
  background(51);
  Engine.update(microEngine);
  //********************************************************** */
  //* Draw Code here
  //*
  //****/
  // proteinGenerator(100,3);
  // proteinGenerator(300,5);
  // proteinGenerator(500,7);
  for (var i = 0; i < proteins.length; i++){
    proteins[i].show();
    if (proteins[i].isOffScreen()) {
      proteins.splice(i, 1);
      i--;                                        //to avoid the "blinking"
    }
  }
  // for (var i = 0; i < proteins.length; i++){
  //   Matter.Body.applyForce(proteins[i], [xx,yy], 3)
  // }
  ball.show();














  
}

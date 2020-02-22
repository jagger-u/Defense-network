function c3(x, y, r) {
  var options = {
    friction: 0.1,
    restitution: 0.1,
    angle: 0,
    angularVelocity: 0,
    frictionAir: 0.01,
    mass: 10,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(microWorld, this.body);


  this.isOffScreen = function() {
    var pos = this.body.position;
    return (pos.y > height);
  }


  this.show = function() {
    var pos = this.body.position; 
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    ellipse(0, 0, this.r * 2);          // p5 expects diameter!!!
    pop();
  }
}
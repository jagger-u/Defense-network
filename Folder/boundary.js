function Boundary(x, y, w, h) {
  var options = {
    isStatic: true,
    angle: 0
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position; 
    var angle = this.body.angle;
    // push();
    translate(pos.x, pos.y); 
    rotate(angle);
    fill(100,200,200);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    // pop();
  }
}
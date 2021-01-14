class Mango {
    constructor(x, y, r) {
      var options = {
        'restitution':0.5,
        'friction':0.3,
        'density':1.0,
        isStatic: true
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
     this.image = loadImage("images/mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("yellow");
      circle(0, 0, this.radius);
      pop();
      image(this.image,pos.x-17,pos.y-30, 50, 50);
    }
  }
  
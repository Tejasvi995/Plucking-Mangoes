class Stone {
    constructor(x, y, r) {
      var options = {
        'isStatic': false,
        'restitution':0.5,
        'friction':1.0,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.image = loadImage("images/stone.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("blue");
      fill("red");
      ellipse(0, 0, this.r);
      pop();

      image(this.image,pos.x-39,pos.y-45, 70, 70);
    }
  }

  
  
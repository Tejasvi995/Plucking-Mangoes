class Tree{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/tree.png")

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(211);
        stroke(211)
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,pos.x-260,pos.y-250,500,500);
    }
}
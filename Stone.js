class Stone{
    constructor(x, y, r) {
        var options = {
            'density':1.0,
            'frictionAir' :0.005
        }
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,50,50);
        pop();
      }
}
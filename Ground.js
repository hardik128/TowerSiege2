class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction:2
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      stroke(255);
      strokeWeight(0);
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }

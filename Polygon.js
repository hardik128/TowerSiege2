class Polygon{
    constructor(x,y,r){
        var options={
            density:1.2,
            friction:1,
            restitution:0.3
        }
        this.r=r;
        this.image=loadImage("polygon.png")
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    
    display(){
        push();
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r*2.5,this.r*2.5)
        pop();
    }
}

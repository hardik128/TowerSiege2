class Box{
    constructor(x,y,width,height){
        var options={
            density:0.2,
            friction:1,
            restitution:0.5
        }     
        this.width=width;
        this.height=height;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
        if(this.body.speed < 10){
        push();
        fill(this.color)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
    }
    else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 2;
        tint(255,this.Visiblity);
        pop();
    
}
}
}
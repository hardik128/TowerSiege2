const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygonImg
var gameState = "onsling";
function preload(){
  polygonImg=loadImage("polygon.png")
}

var boxes=[]

function setup(){
    var canvas = createCanvas(1200,600);
   
  
    engine = Engine.create();
    world = engine.world;
   
    ground01 = new Ground(600,590,1200,20);
    ground02 = new Ground(550,500,400,20);
    ground03 = new Ground(950,300,300,20);
    polygon1 = new Polygon(250,250,20);

    sling1 = new SlingShot(polygon1.body,{ x: 250, y: 250})
    Engine.run(engine)
    
    for(var i=430; i<710; i=i+40){
      boxes.push(new Box(i,460,40,60))
    }

    for(var i=470; i<670; i=i+40){
      boxes.push(new Box(i,400,40,60))
    }

    for(var i=510; i<630; i=i+40){
      boxes.push(new Box(i,340,40,60))
    }

    for(var i=550; i<590; i=i+40){
      boxes.push(new Box(i,280,40,60))
    }

    for(var i=870; i<1070; i=i+40){
      boxes.push(new Box(i,260,40,60))
    }

    for(var i=910; i<1030; i=i+40){
      boxes.push(new Box(i,200,40,60))
    }
    
    for(var i=950; i<990; i=i+40){
      boxes.push(new Box(i,140,40,60))
    }
}

function draw(){
    background(0) 
  frameRate(120)
   sling1.display();
   ground01.display();
   ground02.display();
   ground03.display();
   polygon1.display();

   for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();
  }

}

function mouseDragged(){
   if (gameState==="onsling"){
        Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
}

function mouseReleased(){
   sling1.fly(); 
   gameState = "launched"
}

function keyPressed(){
   if ((keyCode === 32) && (gameState==="launched")){
      sling1.attach(polygon1.body)
      Matter.Body.setPosition(polygon1.body, { x: 250, y: 250 });
      gameState="onsling"
      
}
}






const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stoneObj, ground, platform;
var box1;
var backgroundImg;

function preload() {
    //getTime();
    backgroundImg = loadImage("sprites/city day.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(250, 230, 20, 325);
    platform2 = new Ground(298, 80, 75, 20);
    box1 = new Box(500,360,50,75);
    box2 = new Box(550,360,50,75);
    box3 = new Box(600,360,50,75);
    
    

    box4 = new Box(500,285,50,75);
    box5 = new Box(550,285,50,75);
    box6 = new Box(600,285,50,75);

    box7 = new Box(500,210,50,75);
    box8 = new Box(550,210,50,75);
    box9 = new Box(600,210,50,75);

    stoneObj = new Stone(320,350,20);

    sling = new SlingShot(stoneObj.body, {x:320,y:80});
}

function draw(){
    //if(backgroundImg)
     background(backgroundImg);  

     Engine.update(engine);
     ground.display();
     platform.display();
     platform2.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();

     sling.display();
     stoneObj.display();
     
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY})
}


async function getTime() {
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson= await response.json();
    var dt = await responseJson.datetime;
    var hour= dt.slice(11,13);
    if(hour>=06 && hour<= 18) {
        backgroundImg = loadImage("sprites/city day.jpg");
    }

    else{
        backgroundImg = loadImage("sprites/city night.jpg");
    }
}
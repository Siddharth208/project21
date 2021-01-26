var canvas;
var music;
var obstacle,obstacle1,obstacle2,obstacle3,box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    obstacle=createSprite(100,550,150,20);
    obstacle.shapeColor="green";

    obstacle1=createSprite(270,550,150,20);
    obstacle1.shapeColor="blue";

    obstacle2=createSprite(460,550,150,20);
    obstacle2.shapeColor="red";

    obstacle3=createSprite(640,550,150,20);
    obstacle3.shapeColor="orange";


    //create box sprite and give velocity
    box=createSprite(random(20,750),300,50,50);
    box.shapeColor="white";
    box.velocityY=2;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    
    if(obstacle.isTouching(box)&&box.bounceOff(obstacle)){
        box.shapeColor="green";
        music.play();
    }
    
    if(obstacle1.isTouching(box)&&box.bounceOff(obstacle1)){
        box.shapeColor="blue";
        music.play();
    }
     
    if(obstacle2.isTouching(box)&&box.bounceOff(obstacle2)){
        box.shapeColor="red";
        music.play();
    }

    if(obstacle3.isTouching(box)&&box.bounceOff(obstacle3)){
        box.shapeColor="orange";
        music.play();
    }


    drawSprites();
}

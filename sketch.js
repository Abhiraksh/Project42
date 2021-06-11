const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100, drops = [], ground, t1, t2,t3,t4, thunder, man, thunderFrame, rand;

function preload(){
    t1 = loadImage("thunderbolt/1.png");
    t2 = loadImage("thunderbolt/2.png");
    t3 = loadImage("thunderbolt/3.png");
    t4 = loadImage("thunderbolt/4.png");

}

function setup(){
 createCanvas(500,700);
 engine = Engine.create();
 world = engine.world;
 
 man = new Umbrella(200,500);

 for(var i = 0; i<maxDrops;i++){
     drops.push(new Drops(random(0,500), random(0,500)));
 }
}
 


function draw(){
 Engine.update(engine);
 background("black");

 rand = Math.round(random(1,4));
 if(frameCount%80 === 0){
     thunderFrame = frameCount;
     thunder = createSprite(random(10,370), random(10,30), 10, 10);

     switch(rand){
         case 1: thunder.addImage(t1);

         break;

         case 1: thunder.addImage(t2);

         break;
         
         case 1: thunder.addImage(t3);

         break;
         
         case 1: thunder.addImage(t4);

         break;

         default: break;
     }

     thunder.scale = 1.0;

     
 }
 
 if(thunderFrame+10 === frameCount && thunder){
    thunder.destroy();
}

man.display();

for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].reset();
}

drawSprites();

}   


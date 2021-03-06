const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

	var divisions1;
	var plinkos = [];
	var particles = [];

function preload() {

}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(240,height,1480,20);
	divisions1 = new Divisions(80, height, 10, 500);
	divisions2 = new Divisions(160, height, 10, 500);
	divisions3 = new Divisions(240, height, 10, 500);
	divisions4 = new Divisions(340, height, 10, 500);
	divisions5 = new Divisions(420, height, 10, 500);

	for (var i = 40; i<=width; i=i+50){
		plinkos.push(new Plinkos(i, 75));
	}
	for (var i = 40; i<=width; i=i+50){
	  plinkos.push(new Plinkos(i, 175));
  }
  	for (var i = 40; i<=width; i=i+50){
	plinkos.push(new Plinkos(i, 275));
}
for (var i = 40; i<=width; i=i+50){
	plinkos.push(new Plinkos(i, 375));
}
  
}	



function draw() {
  rectMode(CENTER);
  background(0);

	if(frameCount%60 === 0){
		particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))
	}


  ground.display();
  divisions1.display()
  divisions2.display()
  divisions3.display()
  divisions4.display()
  divisions5.display()

  
  for (var i=0; i < plinkos.length; i++){
	plinkos[i].display()
}
for (var i=0; i < particles.length; i++){
	particles[i].display()
}
	drawSprites(); 
}


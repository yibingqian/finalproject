var hit = false;
var robots = [];
var ship;
var lasers = [];
var controls = [87,68,83,65]
var enemies = [];
var bullets = [];
var bosses = [];
var score = 0;
var dead = false;
var starteasy = false;
var startnormal=false;
var starthard=false;
var song;

function preload(){
	instruction = loadImage("instruction2.png")
 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
	ship = new Ship();
	//song.loop();
	//song.play();
	for (var i=0; i<10; i++){
	robots.push(new Robot());
	}
	for (var i=0; i<3; i++){
	bosses.push(new Boss());
	}
}

function draw() {
  background(166,160,144);
	image(instruction, 300,0,800,400);
	textSize(20);
	stroke(0);
	fill(0);
	text(score,50,20);

	easybutton();
	normalbutton();
	hardbutton();
	ship.render();
  ship.turn();
	ship.update();
	ship.move();
	ship.edges();
	for (var i = 0; i< lasers.length; i++){
		
		
		lasers[i].render();
		lasers[i].update();
			if(collidePointRect(lasers[i].pos.x,lasers[i].pos.y,150,400,100,50)&&startnormal==false&&starthard==false){	
      starteasy=true;
		
		
			}
		  else if(collidePointRect(lasers[i].pos.x,lasers[i].pos.y,340,400,100,50)&&starteasy==false&&starthard==false){
			startnormal=true;
	
		
			}else if(collidePointRect(lasers[i].pos.x,lasers[i].pos.y,540,400,100,50)&&starteasy==false&&startnormal==false){
			starthard=true;
	
				
			}
	}
	if(starteasy == true){
		easy();
	
	}else if(startnormal == true){
	  normal();
		
	}else if(starthard == true){
	  hard();
	
	}
	}

function easybutton(){

	translate(300,0);
	noStroke();
	push();
	fill(236,231,223);
	quad(140,407,143,447,284,447,280,407);
	fill(192,187,183);
	quad(140,407,135,418,138,458,143,448);
	quad(143,447,138,458,279,458,284,447);
	pop();
	stroke(0);
	fill(0);
	text("easy", 190,430);
}

function normalbutton(){


	noStroke();
	push();
	fill(236,231,223);
	quad(340,407,343,447,484,447,480,407);
	fill(192,187,183);
	quad(340,407,335,418,338,458,343,448);
	quad(343,447,338,458,479,458,484,447);
	pop();
	stroke(0);
	fill(0);
	text("normal", 380,430);
}

function hardbutton(){
	noStroke();
	push();
	fill(236,231,223);
	quad(540,407,543,447,684,447,680,407);
	fill(192,187,183);
	quad(540,407,535,418,538,458,543,448);
	quad(543,447,538,458,679,458,684,447);
	pop();
	stroke(0);
	fill(0);
	text("hard", 590,430);
}
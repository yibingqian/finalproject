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
function Boss() {
	this.pos = createVector(random(width),random(height));
	this.vel = p5.Vector.random2D();
	this.r = 200;
	this.s = 200;
	this.hp = 300;
	this.fullhp = this.hp;
	this.render = function(){
		
		push();
		noStroke();
		translate(this.pos.x, this.pos.y);
		fill(255,0,0);
		rect(-this.s * 0.5, this.s, this.s, this.s * 0.1);
		fill(0,255,0);
		rect(-this.s * 0.5, this.s, this.s * (this.hp/this.fullhp), this.s * 0.1);
		
		rotate(this.r);
		fill(97,93,83);
		
		ellipse(0,0,this.r,this.r);
		pop();
		
	}
	
	this.update = function(){
	this.pos.add(this.vel);
	}
	
	this.edges = function(){
		if (this.pos.x > width - 10){
			this.pos.x = this.r;
		}else if (this.pos.x <10){
		this.pos.x = width - 10;
		}
		if (this.pos.y > height - 10){
			this.pos.y = 10;
		}else if (this.pos.y <10){
		this.pos.y = height - 10;
		}
	}
	
}
function updateEnemies(){
	this.pos = createVector(random(width),random(height));
	this.vel = p5.Vector.random2D();
	
	fill(53,12,86);
	for(var e of enemies){
		noStroke();
		ellipse(e.x, e.y, 20, 20);
		e.x += 1;
		e.y += 1;
		
	}
}

function addBullet(){
  for(var i in robots){
		var r = robots[i];
	bullets.push({x: r.pos.x, y: r.pos.y});
	}
}

function addBullet2(){
  for(var i in bosses){
		var b = bosses[i];
	bullets.push({x: b.pos.x, y: b.pos.y});
	}
}

function updateBullets(){
	this.pos = createVector(random(width),random(height));
	this.vel = p5.Vector.random2D();
	fill(255, 100, 50);
	for(var e of bullets){
		noStroke();
		ellipse(e.x, e.y, 20, 20);
		e.x += -1;
		e.y += 1;
		
	}
}
function Laser(spos, angle){
this.pos = createVector(spos.x, spos.y);
this.vel = p5.Vector.fromAngle(angle-PI/2);
this.vel.mult(10);	
this.update = function(){
	this.pos.add(this.vel);
}

this.render = function(){
 push();
    stroke(236,229,211);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
}
}
function Robot() {
	this.pos = createVector(random(width),random(height));
	this.vel = p5.Vector.random2D();
	this.r = 50;
	this.s = 50;
	this.hp = 30;
	this.fullhp = this.hp;
	this.render = function(){
		
		push();
		noStroke();
		translate(this.pos.x, this.pos.y);
		fill(255,0,0);
		rect(-this.s * 0.5, this.s, this.s, this.s * 0.1);
		fill(0,255,0);
		rect(-this.s * 0.5, this.s, this.s * (this.hp/this.fullhp), this.s * 0.1);
		
		rotate(this.r);
		fill(97,93,83);
		
		ellipse(0,0,this.r,this.r);
		pop();
		
	}
	
	this.update = function(){
	this.pos.add(this.vel);
	}
	
	this.edges = function(){
		if (this.pos.x > width - this.r){
			this.pos.x = this.r;
		}else if (this.pos.x <this.r){
		this.pos.x = width - this.r;
		}
		if (this.pos.y > height - this.r){
			this.pos.y = this.r;
		}else if (this.pos.y <this.r){
		this.pos.y = height - this.r;
		}
	}
	
}
function Ship() {
	
	this.pos = createVector(width/2, height/2);
	this.r=-10;
	this.heading=0;
	this.rotation=0;
	this.speed = 3;
	this.s = 40;
	this.hp = 20;
	this.fullhp = this.hp;
	this.update = function(){
		this.pos.add(this.vel);
	}
	
	this.move = function(){
		if( keyIsDown(controls[0])){
				//up
				this.pos.y -= this.speed;
			}
			if( keyIsDown(controls[1])){
				// right
				this.pos.x += this.speed;
			}
			if( keyIsDown(controls[2])){
				//down
				this.pos.y += this.speed;
			}
			if( keyIsDown(controls[3])){
			//left
			this.pos.x -= this.speed;
			}
		if( keyIsDown(controls[4])){
			//space
				lasers.push(new Laser(ship.pos, ship.heading));
			}
	}
	
	this.render = function() {
		push();
     
		translate(this.pos.x, this.pos.y);
		fill(255,0,0);
		rect(-this.s * 0.5, this.s, this.s, this.s * 0.1);
		fill(0,255,0);
		rect(-this.s * 0.5, this.s, this.s * (this.hp/this.fullhp), this.s * 0.1);
	
		rotate(this.heading);
		fill(218,216,204);
		quad(-this.r,0,0,2*this.r,this.r,0,0,-this.r);
		fill(0);
		ellipse(0,0,this.r/2,this.r/2);
		fill(218,216,204);
		rect(-this.r*1.3,-this.r,this.r/2,this.r/2);
    rect(this.r*0.9,-this.r,this.r/2,this.r/2);
		pop();
		if (this.hp <= 0){
				dead = true;	
			fill(0);
			rect(-200,0,windowWidth,windowHeight);
			textSize(100);
			 fill(255);
			text("Game Over",300,200);
		}
		
	}
	
	this.edges = function(){
		if (this.pos.x > width - this.r){
			this.pos.x = this.r;
		}else if (this.pos.x <this.r){
		this.pos.x = width - this.r;
		}
		if (this.pos.y > height - this.r){
			this.pos.y = this.r;
		}else if (this.pos.y <this.r){
		this.pos.y = height - this.r;
		}
	}
	
	this.setRotation = function(a){
		this.rotation = a;
	}
	this.turn = function(){
		this.heading +=this.rotation;
}
}
function easy() {

  background(166,160,144);
	textSize(20);
		  fill(0);
			text(score,50,20);
	ship.render();
  ship.turn();
	ship.update();
	ship.move();
	ship.edges();
	updateEnemies();
	updateBullets();
	if(frameCount % 50 == 0){
		addEnemy();
		addBullet();
	}
	
	for (var i = 0; i< robots.length; i++){
		robots[i].render();
		robots[i].update();
		robots[i].edges();
	
	}
	
	for(var i=0; i< enemies.length; i++){
	if (collideRectCircle(-400,0,3000,3000,enemies[i].x,enemies[i].y,20,) == false){
			enemies.splice(i,1);	
		} 
		else if(collideCircleCircle(enemies[i].x, enemies[i].y, 20, ship.pos.x,ship.pos.y,ship.s)){
			ship.hp -= 0.01;
		}
	}
	
		for(var i=0; i< bullets.length; i++){
		if (collideRectCircle(-400,0,3000,3000,bullets[i].x,bullets[i].y,20) == false){
			bullets.splice(i,1);	
		} 
		else if(collideCircleCircle(bullets[i].x, bullets[i].y, 20, ship.pos.x,ship.pos.y,ship.s)){
			ship.hp -= 0.01;
		}
	}
	 if(score==100){
		
		for (var i = 0; i< bosses.length; i++){
		bosses[i].render();
		bosses[i].update();
		bosses[i].edges();
	
	}
		updateEnemies();
	updateBullets();
		 addEnemy2();
		addBullet2();
	}
	for (var i = 0; i< lasers.length; i++){
		
		
		lasers[i].render();
		lasers[i].update();
			for (var j = 0; j < robots.length; j++){
			if(collidePointCircle(lasers[i].pos.x,lasers[i].pos.y,robots[j].pos.x,robots[j].pos.y,robots[j].r)){	
      robots[j].hp -= 5;
			}
				 if(robots[j].hp <0){
		  robots.splice(j,1);
			score += 10;

		 }
			}
			for (var k = 0; k < bosses.length; k++){
			if(collidePointCircle(lasers[i].pos.x,lasers[i].pos.y,bosses[k].pos.x,bosses[k].pos.y,bosses[k].r)){	
      bosses[k].hp -= 0.5;
			}
				if(bosses[k].hp <0){
		  bosses.splice(k,1);
			score += 50;

		 }
			}
		
			
	}
	}


function keyReleased(){
	ship.setRotation(0);
}
function mousePressed(){
	lasers.push(new Laser(ship.pos, ship.heading));
}
function keyPressed() {
	
		if (keyCode == RIGHT_ARROW){
		ship.setRotation(0.1);
	}else if (keyCode == LEFT_ARROW){
		ship.setRotation(-0.1);
	}else if (keyCode ==UP_ARROW){
	lasers.push(new Laser(ship.pos, ship.heading));
	}
		
}

function addEnemy(){
  for(var i in robots){
		var r = robots[i];
	enemies.push({x: r.pos.x, y: r.pos.y});
	}

}
function addEnemy2(){
  for(var i in bosses){
		var b = bosses[i];
	enemies.push({x: b.pos.x, y: b.pos.y});
	}

}
function normal() {

  background(166,160,144);
	textSize(20);
		  fill(0);
			text(score,50,20);
	ship.render();
  ship.turn();
	ship.update();
	ship.move();
	ship.edges();
	updateEnemies();
	updateBullets();
	if(frameCount % 50 == 0){
		addEnemy();
		addBullet();
	}
	
	for (var i = 0; i< robots.length; i++){
		robots[i].render();
		robots[i].update();
		robots[i].edges();
	
	}
	
	for(var i=0; i< enemies.length; i++){
	if (collideRectCircle(-400,0,3000,3000,enemies[i].x,enemies[i].y,20,) == false){
			enemies.splice(i,1);	
		} 
		else if(collideCircleCircle(enemies[i].x, enemies[i].y, 20, ship.pos.x,ship.pos.y,ship.s)){
			ship.hp -= 0.05;
		}
	}
	
		for(var i=0; i< bullets.length; i++){
		if (collideRectCircle(-400,0,3000,3000,bullets[i].x,bullets[i].y,20) == false){
			bullets.splice(i,1);	
		} 
		else if(collideCircleCircle(bullets[i].x, bullets[i].y, 20, ship.pos.x,ship.pos.y,ship.s)){
			ship.hp -= 0.05;
		}
	}
	 if(score==100){
		
		for (var i = 0; i< bosses.length; i++){
		bosses[i].render();
		bosses[i].update();
		bosses[i].edges();
	
	}
		updateEnemies();
	updateBullets();
		 addEnemy2();
		addBullet2();
	}
	for (var i = 0; i< lasers.length; i++){
		
		
		lasers[i].render();
		lasers[i].update();
			for (var j = 0; j < robots.length; j++){
			if(collidePointCircle(lasers[i].pos.x,lasers[i].pos.y,robots[j].pos.x,robots[j].pos.y,robots[j].r)){	
      robots[j].hp -= 1;
			}
				 if(robots[j].hp <0){
		  robots.splice(j,1);
			score += 10;

		 }
			}
			for (var k = 0; k < bosses.length; k++){
			if(collidePointCircle(lasers[i].pos.x,lasers[i].pos.y,bosses[k].pos.x,bosses[k].pos.y,bosses[k].r)){	
      bosses[k].hp -= 0.5;
			}
				if(bosses[k].hp <0){
		  bosses.splice(k,1);
			score += 50;

		 }
			}
		
			
	}
	}


function keyReleased(){
	ship.setRotation(0);
}
function mousePressed(){
	lasers.push(new Laser(ship.pos, ship.heading));
}
function keyPressed() {
	
		if (keyCode == RIGHT_ARROW){
		ship.setRotation(0.1);
	}else if (keyCode == LEFT_ARROW){
		ship.setRotation(-0.1);
	}else if (keyCode ==UP_ARROW){
	lasers.push(new Laser(ship.pos, ship.heading));
	}
		
}

function addEnemy(){
  for(var i in robots){
		var r = robots[i];
	enemies.push({x: r.pos.x, y: r.pos.y});
	}

}
function addEnemy2(){
  for(var i in bosses){
		var b = bosses[i];
	enemies.push({x: b.pos.x, y: b.pos.y});
	}

}
function hard() {

  background(166,160,144);
	textSize(20);
		  fill(0);
			text(score,50,20);
	ship.render();
  ship.turn();
	ship.update();
	ship.move();
	ship.edges();
	updateEnemies();
	updateBullets();
	if(frameCount % 50 == 0){
		addEnemy();
		addBullet();
	}
	
	for (var i = 0; i< robots.length; i++){
		robots[i].render();
		robots[i].update();
		robots[i].edges();
	
	}
	
	for(var i=0; i< enemies.length; i++){
	if (collideRectCircle(-400,0,3000,3000,enemies[i].x,enemies[i].y,20,) == false){
			enemies.splice(i,1);	
		} 
		else if(collideCircleCircle(enemies[i].x, enemies[i].y, 20, ship.pos.x,ship.pos.y,ship.s)){
			ship.hp -= 0.1;
		}
	}
	
		for(var i=0; i< bullets.length; i++){
		if (collideRectCircle(-400,0,3000,3000,bullets[i].x,bullets[i].y,20) == false){
			bullets.splice(i,1);	
		} 
		else if(collideCircleCircle(bullets[i].x, bullets[i].y, 20, ship.pos.x,ship.pos.y,ship.s)){
			ship.hp -= 0.1;
		}
	}
	 if(score==100){
		
		for (var i = 0; i< bosses.length; i++){
		bosses[i].render();
		bosses[i].update();
		bosses[i].edges();
	
	}
		updateEnemies();
	updateBullets();
		 addEnemy2();
		addBullet2();
	}
	for (var i = 0; i< lasers.length; i++){
		
		
		lasers[i].render();
		lasers[i].update();
			for (var j = 0; j < robots.length; j++){
			if(collidePointCircle(lasers[i].pos.x,lasers[i].pos.y,robots[j].pos.x,robots[j].pos.y,robots[j].r)){	
      robots[j].hp -= 0.5;
			}
				 if(robots[j].hp <0){
		  robots.splice(j,1);
			score += 10;

		 }
			}
			for (var k = 0; k < bosses.length; k++){
			if(collidePointCircle(lasers[i].pos.x,lasers[i].pos.y,bosses[k].pos.x,bosses[k].pos.y,bosses[k].r)){	
      bosses[k].hp -= 0.1;
			}
				if(bosses[k].hp <0){
		  bosses.splice(k,1);
			score += 50;

		 }
			}
		
			
	}
	}


function keyReleased(){
	ship.setRotation(0);
}
function mousePressed(){
	lasers.push(new Laser(ship.pos, ship.heading));
}
function keyPressed() {
	
		if (keyCode == RIGHT_ARROW){
		ship.setRotation(0.1);
	}else if (keyCode == LEFT_ARROW){
		ship.setRotation(-0.1);
	}else if (keyCode ==UP_ARROW){
	lasers.push(new Laser(ship.pos, ship.heading));
	}
		
}

function addEnemy(){
  for(var i in robots){
		var r = robots[i];
	enemies.push({x: r.pos.x, y: r.pos.y});
	}

}
function addEnemy2(){
  for(var i in bosses){
		var b = bosses[i];
	enemies.push({x: b.pos.x, y: b.pos.y});
	}

}
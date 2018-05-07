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
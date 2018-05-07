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
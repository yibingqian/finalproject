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
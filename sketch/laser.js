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
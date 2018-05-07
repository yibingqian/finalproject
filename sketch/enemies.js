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
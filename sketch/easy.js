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
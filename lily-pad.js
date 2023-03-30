background(255, 255, 255);

function lilypad (x, y, s, r) { 
push();
translate(x, y);
rotate(r);
scale(s);
fill(155, 191, 105);
noStroke();
arc(0, 0, 80, 80, 0, PI + 8 / PI, PIE);
pop();
}

function lilypadFlower(x, y, s) {
push();
fill(230, 171, 196);
noStroke();
translate(x, y);
scale(s);

push();
rotate(-0.8);
beginShape();
vertex(0, 0);
bezierVertex(- 20, - 20, -20, -30, 0, -50);
bezierVertex(20, - 30, 20, - 20, 0, 0);
endShape();
pop();

push();
rotate(0.8);
beginShape();
vertex(0, 0);
bezierVertex(- 20, - 20, -20, -30, 0, -50);
bezierVertex(20, - 30, 20, - 20, 0, 0);
endShape();
pop();

push();
fill(255, 210, 229);
beginShape();
vertex(0, 0);
bezierVertex(- 20, - 20, -20, -30, 0, -50);
bezierVertex(20, - 30, 20, - 20, 0, 0);
endShape();
pop();

pop();
}

lilypadFlower(100, 100, 0.8);

lilypad(200, 80, 0.7, -2);
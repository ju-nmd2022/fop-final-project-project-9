background(255, 255, 255);

function snake(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  translate(-x, -y);

  translate(x - 200, y - 322, 5);
  //body
  noFill();
  stroke(38, 65, 0);
  strokeWeight(19);

  beginShape();
  vertex(200, 200);
  bezierVertex(150, 225, 150, 275, 200, 300);
  endShape();

  beginShape();
  vertex(200, 300);
  bezierVertex(250, 325, 250, 375, 200, 400);
  endShape();

  beginShape();
  vertex(200, 400);
  bezierVertex(150, 425, 200, 470, 200, 480);
  endShape();

  noStroke();
  fill(38, 65, 0);
  triangle(191, 485, 210, 477, 205, 510);

  //orange line
  noFill();
  strokeWeight(2);
  stroke(246, 128, 30);
  beginShape();
  vertex(200, 200);
  bezierVertex(150, 225, 150, 275, 200, 300);
  endShape();

  beginShape();
  vertex(200, 300);
  bezierVertex(250, 325, 250, 375, 200, 400);
  endShape();

  beginShape();
  vertex(200, 400);
  bezierVertex(150, 425, 200, 455, 205, 508);
  endShape();

  //tounge
  noStroke();
  fill(255, 117, 117);
  rect(198, 120, 4, 30);
  triangle(198, 120, 194, 110, 202, 120);
  triangle(198, 120, 206, 110, 202, 120);

  //head
  fill(38, 65, 0);
  noStroke();
  ellipse(200, 180, 35, 60);
  beginShape();
  vertex(183, 175);
  bezierVertex(193, 130, 209, 130, 217, 175);
  endShape();

  //eyes
  fill(246, 128, 30);
  ellipse(192, 170, 5, 10);
  ellipse(208, 170, 5, 10);

  pop();
}

function lilypad(x, y, s, r) {
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
  bezierVertex(-20, -20, -20, -30, 0, -50);
  bezierVertex(20, -30, 20, -20, 0, 0);
  endShape();
  pop();

  push();
  rotate(0.8);
  beginShape();
  vertex(0, 0);
  bezierVertex(-20, -20, -20, -30, 0, -50);
  bezierVertex(20, -30, 20, -20, 0, 0);
  endShape();
  pop();

  push();
  fill(255, 210, 229);
  beginShape();
  vertex(0, 0);
  bezierVertex(-20, -20, -20, -30, 0, -50);
  bezierVertex(20, -30, 20, -20, 0, 0);
  endShape();
  pop();

  pop();
}

function bread(x, y, s, r) {
  push();
  translate(x, y);
  scale(s);
  rotate(r);
  translate(-x, -y);

  translate(x - 125, y - 200);
  fill(214, 158, 91);
  noStroke();
  beginShape();
  vertex(100, 250);
  bezierVertex(100, 300, 150, 300, 150, 250);
  endShape();
  rect(100, 125, 50, 125);
  triangle(100, 125, 150, 100, 150, 125);

  fill(255, 214, 164);

  beginShape();
  vertex(100, 125);
  bezierVertex(100, 100, 150, 90, 150, 100);
  endShape();

  triangle(150, 140, 150, 150, 120, 160);
  triangle(150, 170, 150, 180, 120, 190);
  triangle(150, 200, 150, 210, 120, 220);
  pop();
}

snake(200, 322.5, 0.5);

lilypad(200, 80, 0.7, -2);

lilypadFlower(100, 100, 0.8);

bread(100, 322, 0.8, 0);
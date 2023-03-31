background(255, 255, 255);

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

bread(200, 200, 0.8, 0);

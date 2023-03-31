background(255, 255, 255);

function snake(x, y, s) {
  
  push();
  translate(x, y);
  scale(s);
  translate(-x, -y);

  translate(x - 200, y - 322,5);
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

snake(200, 322.5, 0.5);

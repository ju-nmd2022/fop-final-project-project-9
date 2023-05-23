background(255, 255, 255);

function snake(snakeX, snakeY, snakeS, snakeR) {
  push();
  translate(snakeX, snakeY);
  scale(snakeS);
  rotate(snakeR);
  translate(-snakeX, -snakeY);

  translate(snakeX - 200, snakeY - 322, 5);
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

function lilypad(lilypadX, lilypadY, lilypadS, lilypadR) {
  push();
  translate(lilypadX, lilypadY);
  rotate(lilypadR);
  scale(lilypadS);
  fill(155, 191, 105);
  noStroke();
  arc(0, 0, 80, 80, 0, PI + 8 / PI, PIE);
  pop();
}

function lilypadFlower(lilypadFlowerX, lilypadFlowerY, lilypadFlowerS) {
  push();
  fill(230, 171, 196);
  noStroke();
  translate(lilypadFlowerX, lilypadFlowerY);
  scale(lilypadFlowerS);

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

function bread(breadX, breadY, breadS, breadR, breadO) {
  push();
  translate(breadX, breadY);
  scale(breadS);
  rotate(breadR);
  translate(-breadX, -breadY);

  translate(breadX - 125, breadY - 200);
  fill(214, 158, 91, breadO);
  noStroke();
  beginShape();
  vertex(100, 250);
  bezierVertex(100, 300, 150, 300, 150, 250);
  endShape();
  rect(100, 125, 50, 125);
  triangle(100, 125, 150, 100, 150, 125);

  fill(255, 214, 164, breadO);

  beginShape();
  vertex(100, 125);
  bezierVertex(100, 100, 150, 90, 150, 100);
  endShape();

  triangle(150, 140, 150, 150, 120, 160);
  triangle(150, 170, 150, 180, 120, 190);
  triangle(150, 200, 150, 210, 120, 220);
  pop();
}

let waveX = [];
let waveY = [];
let waveAlpha = [];

for (let i = 0; i < 20; i++) {
  const x = Math.floor(Math.random() * 600);
  const y = Math.floor(Math.random() * 650);
  const alpha = Math.random();

  waveX.push(x);
  waveY.push(y);
  waveAlpha.push(alpha);
}
////
function draw() {
  background(255, 255, 255);

  for (let index in waveX) {
    noFill();
    strokeWeight(2);
    stroke(169, 200, 234, Math.abs(Math.sin(waveAlpha[index])) * 255);

    beginShape();
    vertex(waveX[index], waveY[index]);
    bezierVertex(
      waveX[index],
      waveY[index] - 5,
      waveX[index] + 20,
      waveY[index] - 5,
      waveX[index] + 20,
      waveY[index]
    );
    endShape();

    beginShape();
    vertex(waveX[index] + 20, waveY[index]);
    bezierVertex(
      waveX[index] + 20,
      waveY[index] + 5,
      waveX[index] + 40,
      waveY[index] + 5,
      waveX[index] + 40,
      waveY[index]
    );
    endShape();

    waveAlpha[index] = waveAlpha[index] + 0.03;
  }
}

snake(200, 322.5, 0.5);

lilypad(200, 80, 0.7, -2);

lilypadFlower(100, 100, 0.8);

bread(100, 322, 0.8, 0);

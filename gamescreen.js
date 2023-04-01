function goose(gooseX, gooseY, gooseS, gooseR) {
  push();
  translate(gooseX, gooseY);
  scale(gooseS);
  rotate(gooseR);
  translate(-gooseX, -gooseY);
  translate(gooseX - 280, gooseY - 322);

  //Head
  fill(255, 255, 255);
  noStroke();
  ellipse(200, 95, 70);
  triangle(150, 102, 180, 66, 180, 110);

  push();
  fill(254, 176, 72);
  triangle(160, 90, 115, 130, 180, 125);
  triangle(120, 140, 115, 130, 180, 125);
  pop();

  ellipse(163, 94, 10);

  //Eye
  push();
  fill(0, 0, 0);
  ellipse(190, 90, 10, 9);
  pop();

  //Neck
  push();
  translate(240, 110);
  rotate(0.7);
  ellipse(0, 0, 80, 40);
  pop();
  triangle(230, 80, 200, 130, 260, 140);
  triangle(215, 130, 225, 150, 225, 130);
  rect(225, 130, 48, 200);
  triangle(225, 205, 195, 315, 225, 315);
  triangle(273, 230, 300, 315, 273, 315);

  //Body

  ellipse(240, 340, 150, 160);
  push();
  translate(320, 285);
  rotate(0.25);
  ellipse(0, 0, 200, 50);
  pop();
  push();
  translate(400, 300);
  rotate(2.6);
  ellipse(0, 0, 100, 40);
  pop();
  triangle(423, 305, 380, 360, 370, 300);
  ellipse(330, 330, 90);

  triangle(190, 400, 220, 450, 260, 435);
  triangle(220, 420, 330, 490, 400, 315);

  //Legs and feet
  fill(254, 176, 72);
  rect(218, 447, 10, 50);
  triangle(220, 485, 235, 507, 220, 510);

  function feet(feetX, feetY) {
    push();
    translate(feetX, feetY);
    triangle(220, 495, 165, 500, 220, 520);
    triangle(170, 520, 185, 500, 200, 520);
    triangle(235, 507, 195, 545, 200, 505);
    ellipse(195, 510, 20);
    pop();
  }

  feet();
  rect(322, 484, 10, 65);
  feet(97, 42);
  rect(317, 537, 10, 15);
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

//#region  guide for "walls"
noFill();

// noFill();
// rect(0, 280, 130, 40);
// rect(470, 280, 130, 40);
// rect(280, 125, 40, 350);
// rect(130, 85, 340, 40);
// rect(130, 475, 340, 40);
//#endregion

function gamescreen() {
  //#region background
  fill(186, 223, 255);
  rect(0, 0, 600, 650);

  //Lilypad placement
  //center top
  lilypad(150, 105, 0.45, 1);
  lilypad(200, 105, 0.55, 5);
  lilypad(250, 105, 0.5, 1);
  lilypad(300, 105, 0.45, 0);
  lilypad(350, 105, 0.5, 2);
  lilypad(400, 105, 0.55, 3);
  lilypad(450, 105, 0.5, 4);

  //center vertical
  lilypad(300, 150, 0.5, 3);
  lilypad(300, 200, 0.45, 1);
  lilypad(300, 250, 0.55, 4);
  lilypad(300, 300, 0.5, 0);
  lilypad(300, 350, 0.45, 3);
  lilypad(300, 400, 0.55, 5);
  lilypad(300, 450, 0.5, 3);

  //center bottom
  lilypad(150, 495, 0.45, 1);
  lilypad(200, 495, 0.55, 5);
  lilypad(250, 495, 0.5, 1);
  lilypad(300, 495, 0.45, 0);
  lilypad(350, 495, 0.5, 2);
  lilypad(400, 495, 0.55, 3);
  lilypad(450, 495, 0.5, 4);

  //left horizontal
  lilypad(15, 300, 0.5, 7);
  lilypad(65, 300, 0.55, 4);
  lilypad(115, 300, 0.45, 2);

  //right horizontal
  lilypad(485, 300, 0.45, 7);
  lilypad(535, 300, 0.55, 4);
  lilypad(585, 300, 0.5, 2);

  //bridge
  stroke(185, 163, 136);
  strokeWeight(0.3);
  fill(221, 196, 164);
  rect(250, 580, 100, 75);
  line(250, 595, 350, 595);
  line(250, 610, 350, 610);
  line(250, 625, 350, 625);
  line(250, 640, 350, 640);

  lilypadFlower(300, 410, 0.4);
  lilypadFlower(300, 260, 0.45);
  lilypadFlower(300, 115, 0.4);
  lilypadFlower(200, 115, 0.4);
  lilypadFlower(450, 115, 0.4);
  lilypadFlower(200, 505, 0.4);
  lilypadFlower(350, 505, 0.4);
  lilypadFlower(65, 310, 0.4);
  lilypadFlower(485, 310, 0.4);
  lilypadFlower(585, 310, 0.4);
  //#endregion
  //collected items
  bread(20, 615, 0.3, 0, 120);
  bread(50, 615, 0.3, 0, 120);
  bread(80, 615, 0.3, 0, 120);

  //items to collect
  bread(245, 300, 0.35, 6, 255);
  bread(355, 300, 0.35, 3.4, 255);
  bread(300, 60, 0.35, 4.6, 255);

  //enemies
  let snakeY = 300;
  snake(160, snakeY, 0.3, 0);
  snake(440, snakeY, 0.3, 3.1);

  gooseX = gooseX + speedGooseX;
  gooseY = gooseY + speedGooseY;

  if (isGameActive) {
    if (keyIsDown(RIGHT_ARROW)) {
      speedGooseX = 3;
    } else if (keyIsDown(UP_ARROW)) {
      speedGooseY = -3;
    } else if (keyIsDown(LEFT_ARROW)) {
      speedGooseX = -3;
    } else if (keyIsDown(DOWN_ARROW)) {
      speedGooseY = 3;
    } else {
      speedGooseX = 0;
      speedGooseY = 0;
    }
  
  }
}
let gooseX = 300;
let gooseY = 600;
let speedGooseX = 0;
let speedGooseY = 0;
let isGameActive = true;

function draw() {
  gamescreen();
  goose(gooseX, gooseY, 0.16, 0);
}
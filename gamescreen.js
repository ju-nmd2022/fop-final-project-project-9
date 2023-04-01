background(186, 223, 255);
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
//guide for "walls"
// noFill();
// stroke(0, 0, 0);
// rect(0, 280, 130, 40);
// rect(470, 280, 130, 40);
// rect(280, 125, 40, 350);
// rect(130, 85, 340, 40);
// rect(130, 475, 340, 40);

//#region background
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
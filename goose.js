background(254, 226, 254);

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

function sirGooseOutfit(sirGooseOutfitX, sirGooseOutfitY, sirGooseOutfitS) {
  push();
  translate(sirGooseOutfitX, sirGooseOutfitY);
  scale(sirGooseOutfitS);
  //Hat
  fill(0, 0, 0);
  rect(165, 55, 70, 10);
  rect(180, 15, 40, 40);

  //Monocel
  noFill();
  stroke(0, 0, 0);
  strokeWeight(2);
  ellipse(190, 90, 30);
  line(195, 105, 224, 175);

  //Bowtie
  fill(0, 0, 0);
  ellipse(245, 240, 15);
  triangle(245, 240, 275, 220, 280, 245);
  triangle(245, 240, 210, 230, 210, 255);
  pop();
}

function slayGooseOutfit(slayGooseOutfitX, slayGooseOutfitY, slayGooseOutfitS) {
  translate(slayGooseOutfitX, slayGooseOutfitY);
  scale(slayGooseOutfitS);

  //Tiara
  fill(245, 245, 245);
  rect(180, 45, 40, 20);
  triangle(180, 45, 175, 25, 195, 45);
  triangle(190, 45, 210, 45, 200, 25);
  triangle(205, 45, 225, 25, 220, 45);

  //Lipstick
  fill(244, 71, 60);
  push();
  translate(120, 125);
  rotate(1);
  rect(0, 0, 15, 10);
  pop();

  //Eyelashes
  stroke(0, 0, 0);
  line(190, 90, 190, 80);
  line(190, 90, 180, 85);
  line(190, 90, 200, 85);

  //Necklace
  noStroke();
  fill(252, 154, 148);
  ellipse(225, 220, 10);
  ellipse(235, 223, 10);
  ellipse(245, 225, 10);
  ellipse(255, 223, 10);
  ellipse(265, 220, 10);
  ellipse(272, 213, 10);
}

function gangsterGooseOutfit(
  gangsterGooseOutfitX,
  gangsterGooseOutfitY,
  gangsterGooseOutfitS
) {
  push();
  translate(gangsterGooseOutfitX, gangsterGooseOutfitY);
  scale(gangsterGooseOutfitS);
  //Sunglasses
  push();
  stroke(0, 0, 0);
  translate(175, 78);
  rotate(0.15);
  fill(0, 0, 0, 160);
  rect(0, 0, 30, 20);
  line(0, 10, -10, 10);
  pop();

  //Cigarette
  push();
  translate(130, 130);
  rotate(0.4);
  fill(255, 255, 255);
  rect(0, 0, 5, 35);
  fill(175, 89, 25);
  rect(0, 0, 5, 8);
  fill(244, 124, 35);
  ellipse(0, 35, 3);
  ellipse(5, 35, 3);
  fill(251, 193, 74);
  ellipse(2, 37, 4);
  pop();

  //Necklace
  stroke(0);
  strokeWeight(4);
  line(210, 265, 250, 310);
  line(280, 250, 250, 310);
  textSize(50);
  text("$", 235, 345);
  pop();
}

slayGooseOutfit(0, 0, 1);
// sirGooseOutfit(0, 0, 1);
// gangsterGooseOutfit(0, 0, 1);

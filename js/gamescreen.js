function goose(gooseX, gooseY, gooseMirror, gooseS, gooseR) {
  push();
  translate(gooseX, gooseY);
  scale(gooseMirror, gooseS);
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
function sirGooseOutfit(
  sirGooseOutfitX,
  sirGooseOutfitY,
  sirMirror,
  sirScale,
  r
) {
  push();
  translate(sirGooseOutfitX, sirGooseOutfitY);
  scale(sirMirror, sirScale);
  rotate(r);
  translate(-sirGooseOutfitX, -sirGooseOutfitY);

  translate(sirGooseOutfitX - 280, sirGooseOutfitY - 320);

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
function slayGooseOutfit(
  slayGooseOutfitX,
  slayGooseOutfitY,
  slayMirror,
  slayScale,
  r
) {
  push();
  translate(slayGooseOutfitX, slayGooseOutfitY);
  scale(slayMirror, slayScale);
  rotate(r);
  translate(-slayGooseOutfitX, -slayGooseOutfitY);
  translate(slayGooseOutfitX - 280, slayGooseOutfitY - 320);

  //Tiara
  fill(245, 245, 245);
  noStroke();
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
  pop();
}
function gangsterGooseOutfit(
  gangsterGooseOutfitX,
  gangsterGooseOutfitY,
  gangsterMirror,
  gangsterScale,
  r
) {
  push();
  translate(gangsterGooseOutfitX, gangsterGooseOutfitY);
  scale(gangsterMirror, gangsterScale);
  rotate(r);
  translate(-gangsterGooseOutfitX, -gangsterGooseOutfitY);

  translate(gangsterGooseOutfitX - 280, gangsterGooseOutfitY - 320);
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
  noStroke();
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
  fill(254, 176, 72);
  text("$", 235, 345);
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
function lilypadPlacement() {
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
}
function bridge() {
  stroke(185, 163, 136);
  strokeWeight(0.3);
  fill(221, 196, 164);
  rect(250, 580, 100, 75);
  line(250, 595, 350, 595);
  line(250, 610, 350, 610);
  line(250, 625, 350, 625);
  line(250, 640, 350, 640);
}
function bread(breadX, breadY, breadS, breadR, breadOpacity) {
  push();
  translate(breadX, breadY);
  scale(breadS);
  rotate(breadR);
  translate(-breadX, -breadY);

  translate(breadX - 125, breadY - 200);
  fill(214, 158, 91, breadOpacity);
  noStroke();
  beginShape();
  vertex(100, 250);
  bezierVertex(100, 300, 150, 300, 150, 250);
  endShape();
  rect(100, 125, 50, 125);
  triangle(100, 125, 150, 100, 150, 125);

  fill(255, 214, 164, breadOpacity);

  beginShape();
  vertex(100, 125);
  bezierVertex(100, 100, 150, 90, 150, 100);
  endShape();

  triangle(150, 140, 150, 150, 120, 160);
  triangle(150, 170, 150, 180, 120, 190);
  triangle(150, 200, 150, 210, 120, 220);
  pop();
}
function snake(snakeX, snakeY, snakeMirror, snakeScale, snakeR) {
  push();
  translate(snakeX, snakeY);
  scale(snakeMirror, snakeScale);

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
function snakeCollision(x, y, width, height) {
  for (let i = 0; i < snakeArray.length; i++) {
    let enemie = snakeArray[i];
    if (
      gooseX > enemie.x &&
      gooseX < enemie.x + enemie.width &&
      gooseY > enemie.y &&
      gooseY < enemie.y + enemie.height
    ) {
      state = "lose";
    }
  }
}
function setup() {
  const canvas = createCanvas(600, 650);
  x = (windowWidth - 600) / 2;
  y = (windowHeight - 650) / 2;
  canvas.position(x, y);
}
function wallCollision() {
  for (let i = 0; i < wallsArray.length; i++) {
    let wall = wallsArray[i];

    //bottom
    if (
      gooseX > wall.x &&
      gooseX < wall.x + wall.width &&
      gooseY > wall.y &&
      gooseY - 45 < wall.y + wall.height
    ) {
      gooseY = oldGooseY;
    }
    //top
    if (
      gooseX > wall.x &&
      gooseX < wall.x + wall.width &&
      gooseY < wall.y &&
      gooseY + 25 > wall.y
    ) {
      gooseY = oldGooseY;
    }
    //left
    if (
      gooseX + 20 > wall.x &&
      gooseX < wall.x + 10 &&
      gooseY > wall.y &&
      gooseY < wall.y + wall.height
    ) {
      gooseX = oldGooseX;
    }
    //right
    if (
      gooseX - 20 < wall.x + wall.width &&
      gooseX > wall.x + 10 &&
      gooseY > wall.y &&
      gooseY < wall.y + wall.height
    ) {
      gooseX = oldGooseX;
    }
  }
}
function collectingItems(x, y, width, height) {
  // left bread
  if (
    gooseX > leftBread.x - leftBread.width &&
    gooseX < leftBread.x + leftBread.width &&
    gooseY > leftBread.y - leftBread.height &&
    gooseY < leftBread.y + leftBread.height &&
    keyIsDown(32) &&
    !leftBread.itemCollected
  ) {
    leftBread.itemCollected = true;
    breadOpacityLeft = 0;
    collectBreadArray.push(leftBread);
    collectedBreadOpacityLeft = 255;
  }

  // center bread
  if (
    gooseX > centerBread.x - centerBread.width &&
    gooseX < centerBread.x + centerBread.width &&
    gooseY > centerBread.y - centerBread.height &&
    gooseY < centerBread.y + centerBread.height &&
    keyIsDown(32) &&
    !centerBread.itemCollected
  ) {
    centerBread.itemCollected = true;
    breadOpacityCenter = 0;
    collectBreadArray.push(centerBread);
    collectedBreadOpacityCenter = 255;
  }
  // right bread
  if (
    gooseX > rightBread.x - rightBread.width &&
    gooseX < rightBread.x + rightBread.width &&
    gooseY > rightBread.y - rightBread.height &&
    gooseY < rightBread.y + rightBread.height &&
    keyIsDown(32) &&
    !rightBread.itemCollected
  ) {
    rightBread.itemCollected = true;
    breadOpacityRight = 0;
    collectBreadArray.push(rightBread);
    collectedBreadOpacityRight = 255;
  }

  if (collectBreadArray.length === 3) {
    fill(255, 255, 255);
    noStroke();
    rect(20, 20, 200, 100);
    fill(0, 0, 0);
    textSize(15);
    text("You collected all the items,", 30, 60);
    text("now return to the dock!", 40, 90);
  }

  if (
    gooseX > 275 &&
    gooseX < 275 + 50 &&
    gooseY > 605 &&
    gooseY < 605 + 50 &&
    collectBreadArray.length === 3
  ) {
    state = "win";
  }
}
function mousePressed() {
  if (state === "start") {
    if (
      mouseX > 150 &&
      mouseX < 150 + 300 &&
      mouseY > 100 &&
      mouseY < 100 + 100
    ) {
      state = "character";
    }
  }
}

//#region walls
let leftWall = { x: 0, y: 280, width: 130, height: 40 };
let centerTopWall = { x: 130, y: 85, width: 340, height: 40 };
let centerMiddleWall = { x: 280, y: 125, width: 40, height: 350 };
let centerBottomWall = { x: 130, y: 475, width: 340, height: 40 };
let rightWall = { x: 470, y: 280, width: 130, height: 40 };

let wallsArray = [
  leftWall,
  centerTopWall,
  centerMiddleWall,
  centerBottomWall,
  rightWall,
];
//#endregion

//#region breads
let breadRotationLeft = 6;
let breadOpacityLeft = 255;

let breadRotationCenter = 4.6;
let breadOpacityCenter = 255;

let breadRotationRight = 3.4;
let breadOpacityRight = 255;

let leftBread = {
  x: 245,
  y: 300,
  width: 15,
  height: 35,
  itemCollected: false,
};
let centerBread = {
  x: 300,
  y: 60,
  width: 15,
  height: 35,
  itemCollected: false,
};
let rightBread = {
  x: 355,
  y: 300,
  width: 15,
  height: 35,
  itemCollected: false,
};

let collectedBreadOpacityLeft = 120;
let collectedBreadOpacityCenter = 120;
let collectedBreadOpacityRight = 120;

let collectBreadArray = [];
//#endregion

//#region snakes
let snakeXLeft = 160;
let snakeYLeft = 300;

let snakeXRight = 440;
let snakeYRight = 300;

let snakeScale = 0.3;

let snakeSpeedLeft = -4;
let snakeSpeedRight = 4;

let snakeMirrorLeft = 0.3;
let snakeMirrorRight = -0.3;
//#endregion

//#region goose
let gooseX = 300;
let gooseY = 600;

let oldGooseX = 300;
let oldGooseY = 600;

let speedGooseX = 0;
let speedGooseY = 0;

let gooseMirror = 0.16;
let gooseScale = 0.16;
let slayMirror = 0.16;
let sirMirror = 0.16;
let gangsterMirror = 0.16;
//#endregion

let isGameActive = true;
let state = "start";
let character = null;

//waves in the water
let waveX = [];
let waveY = [];
let waveAlpha = [];

for (let i = 0; i < 20; i++) {
  const x = Math.floor(Math.random() * 550);
  const y = Math.floor(Math.random() * 650);
  const alpha = Math.random();

  waveX.push(x);
  waveY.push(y);
  waveAlpha.push(alpha);
}

function startScreen() {
  background(166, 208, 141);

  push();
  stroke(183, 228, 255);
  noFill();
  strokeWeight(150);

  beginShape();
  vertex(200, 0);
  bezierVertex(100, 40, 100, 160, 200, 200);
  bezierVertex(300, 240, 300, 360, 200, 400);
  bezierVertex(100, 440, 100, 560, 200, 600);
  bezierVertex(300, 640, 300, 760, 200, 800);
  endShape();
  pop();

  fill(255, 255, 255);
  rect(150, 100, 300, 100, 50);

  noStroke();
  fill(0, 0, 0);
  textSize(20);
  text("Start the Goose Story", 200, 155);

  fill(255, 255, 255);
  textSize(20);
  text("How to play", 250, 245);

  // textSize(30);
  // text("↑", 295, 290);
  // text("↓", 295, 330);
  // text("←", 255, 330);
  // text("→", 325, 330);

  // ↑ ↓ → ←
  push();
  translate(95, 60);
  textSize(15);
  text("up", 192, 215);
  text("left", 120, 340);
  text("down", 182, 340);
  text("right", 260, 340);

  noFill();
  stroke(255, 255, 255);
  triangle(200, 235, 190, 255, 210, 255);

  triangle(200, 315, 190, 295, 210, 295);
  triangle(140, 295, 140, 315, 120, 305);
  triangle(260, 295, 260, 315, 280, 305);
  pop();

  noFill();
  stroke(255, 255, 255);
  rect(250, 450, 100, 15);
  noStroke();
  fill(255, 255, 255);
  textSize(15);
  text("press to collect", 250, 490);

  goose(480, 440, 0.6);
  goose(130, 500, -0.15, 0.15);
  goose(180, 590, -0.15, 0.15);
  goose(150, 50, 0.15);
}
function characterScreen() {
  background(166, 208, 141);

  fill(0, 0, 0);
  noStroke();
  textSize(30);
  text("Coose your character", 160, 100);
  textSize(15);
  text("Slay Goose", 85, 510);
  text("Sir Goose", 260, 510);
  text("Gangsta´ Goose", 410, 510);

  goose(130, 350, 0.5);
  slayGooseOutfit(130, 350, 0.5);
  goose(300, 350, 0.5);
  sirGooseOutfit(300, 350, 0.5);
  goose(470, 350, 0.5);
  gangsterGooseOutfit(470, 350, 0.5);

  if (
    mouseIsPressed &&
    mouseX > 50 &&
    mouseX < 50 + 150 &&
    mouseY > 200 &&
    mouseY < 200 + 280 &&
    state === "character"
  ) {
    character = "slay";
    state = "game";
  } else if (
    mouseIsPressed &&
    mouseX > 220 &&
    mouseX < 220 + 150 &&
    mouseY > 200 &&
    mouseY < 200 + 280 &&
    state === "character"
  ) {
    character = "sir";
    state = "game";
  } else if (
    mouseIsPressed &&
    mouseX > 390 &&
    mouseX < 390 + 150 &&
    mouseY > 200 &&
    mouseY < 200 + 280 &&
    state === "character"
  ) {
    character = "gangster";
    state = "game";
  }
}
function gamescreen() {
  fill(186, 223, 255);
  stroke(0);
  rect(0, 0, 600, 650);

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

  //enemies
  snakeYLeft = snakeYLeft + snakeSpeedLeft;
  snakeYRight = snakeYRight + snakeSpeedRight;

  if (snakeYLeft > 415) {
    snakeSpeedLeft = -4;
    snakeMirrorLeft = 0.3;
  }
  if (snakeYLeft < 190) {
    snakeSpeedLeft = 4;
    snakeMirrorLeft = -0.3;
  }

  if (snakeYRight > 415) {
    snakeSpeedRight = -4;
    snakeMirrorRight = 0.3;
  }
  if (snakeYRight < 190) {
    snakeSpeedRight = 4;
    snakeMirrorRight = -0.3;
  }

  let leftSnake = {
    x: snakeXLeft - 15,
    y: snakeYLeft - 55,
    width: 30,
    height: 110,
  };

  let rightSnake = {
    x: snakeXRight - 15,
    y: snakeYRight - 55,
    width: 30,
    height: 110,
  };

  snakeArray = [leftSnake, rightSnake];

  snake(snakeXLeft, snakeYLeft, snakeScale, snakeMirrorLeft);
  snake(snakeXRight, snakeYRight, snakeScale, snakeMirrorRight);

  //items to collect
  bread(245, 300, 0.35, breadRotationLeft, breadOpacityLeft);
  bread(300, 60, 0.35, breadRotationCenter, breadOpacityCenter);
  bread(355, 300, 0.35, breadRotationRight, breadOpacityRight);

  //collected items
  bread(20, 615, 0.3, 0, collectedBreadOpacityLeft);
  bread(50, 615, 0.3, 0, collectedBreadOpacityCenter);
  bread(80, 615, 0.3, 0, collectedBreadOpacityRight);

  bridge();
  lilypadPlacement();

  goose(gooseX, gooseY, gooseMirror, gooseScale, 0);

  switch (character) {
    case "slay":
      slayGooseOutfit(gooseX, gooseY, gooseMirror, gooseScale);
      break;

    case "sir":
      sirGooseOutfit(gooseX, gooseY, gooseMirror, gooseScale);
      break;

    case "gangster":
      gangsterGooseOutfit(gooseX, gooseY, gooseMirror, gooseScale);
      break;
  }

  oldGooseX = gooseX;
  oldGooseY = gooseY;
  gooseX = gooseX + speedGooseX;
  gooseY = gooseY + speedGooseY;

  if (isGameActive) {
    if (keyIsDown(RIGHT_ARROW)) {
      gooseMirror = -0.16;
      slayMirror = -0.16;
      sirMirror = -0.16;
      gangsterMirror = -0.16;
      speedGooseX = 3;
    } else if (keyIsDown(UP_ARROW)) {
      speedGooseY = -3;
    } else if (keyIsDown(LEFT_ARROW)) {
      speedGooseX = -3;
      gooseMirror = 0.16;
      slayMirror = 0.16;
      sirMirror = 0.16;
      gangsterMirror = 0.16;
    } else if (keyIsDown(DOWN_ARROW)) {
      speedGooseY = 3;
    } else {
      speedGooseX = 0;
      speedGooseY = 0;
    }
  }

  wallCollision();
  collectingItems();
  snakeCollision();

  //outer walls
  if (state === "game") {
  }
  if (gooseX - 25 < 0) {
    gooseX = oldGooseX;
  } else if (gooseX + 25 > 600) {
    gooseX = oldGooseX;
  } else if (gooseY - 45 < 0) {
    gooseY = oldGooseY;
  } else if (gooseY + 40 > 650) {
    gooseY = oldGooseY;
  }
}
function loseScreen() {
  background(255, 0, 0);
}
function winScreen() {
  background(0, 255, 0);
}
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "character") {
    characterScreen();
  } else if (state === "game") {
    frameRate(30);
    gamescreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}

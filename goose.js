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

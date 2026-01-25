let grid = undefined;
let fill1 = prompt("What is your favorite snow color?", "white");
function setup() {
  createCanvas(1000, 800);
  background("#dbeeff");
  grid = loadImage("img/100px_grid.png");
}
function draw() {
  background(grid);
  //background
  fill(fill1);
  strokeWeight(3);
  stroke("#bcbcbc");
  ellipse(600, 600, 900, 300);
  ellipse(40, 650, 900, 300);
  ellipse(900, 700, 700, 300);
  ellipse(600, 800, 900, 300);
  
  //snow
  ellipse(50, 40, 50, 50);
  ellipse(900, 70, 50, 50);
  ellipse(640, 90, 50, 50);
  ellipse(160, 150, 50, 50);
  ellipse(980, 170, 50, 50);
  ellipse(300, 350, 50, 50);
  ellipse(50, 40, 50, 50);
  ellipse(800, 150, 50, 50);
  ellipse(700, 500, 50, 50);
  ellipse(100, 410, 50, 50);
  ellipse(980, 370, 50, 50);
  ellipse(280, 460, 50, 50);
  //legs
  fill("#eddaff");
  strokeWeight(10);
  stroke("#5503a4");
  //left leg (x from the left, y from the bottom, width, optional height)
  ellipse(350, 600, 200, 100);
  //right leg
  ellipse(650, 600, 200, 100);
  //body
  ellipse(500, 450, 360, 400);
  //head
  ellipse(500, 200, 200);
  //hat brim
  stroke("#0094ff");
  strokeWeight(10);
  line(400, 120, 600, 120);
  //hat body
  fill("#a0d0f2");
  quad(390, 55, 610, 55, 580, 120, 420, 120);
  //cheeks
  stroke("#d5a6bd");
  strokeWeight(30);
  point(430, 210);
  point(530, 210);
  //eyes
  stroke("#444444");
  strokeWeight(50);
  point(450, 200);
  point(505, 200);
  stroke("#eeeeee");
  strokeWeight(25);
  point(459, 193);
  point(513, 193);
  stroke("#eeeeee");
  strokeWeight(15);
  point(497, 210);
  point(440, 210);
  //nose
  stroke("#e89f51ff");
  strokeWeight(35);
  point(475, 230);
  strokeWeight(25);
  point(465, 235);
  strokeWeight(20);
  point(455, 245);
  //mouth
  noFill();
  stroke("#444444");
  strokeWeight(5);
  arc(490, 230, 90, 90, 0, HALF_PI);
  //buttons
  stroke("#ffaff1");
  strokeWeight(45);
  point(475, 390);
  point(475, 450);
  point(475, 520);
  //left arm
  stroke("#744700");
  strokeWeight(10);
  line(300, 300, 380, 380);
  //right arm
  noFill();
  strokeWeight(10);
  arc(660, 310, 140, 200, 0, HALF_PI);
}

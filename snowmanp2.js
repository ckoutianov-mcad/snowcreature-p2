let grid = undefined;
function setup() {
  createCanvas(1000, 800);
  background("#dbeeff");
  grid = loadImage("img/100px_grid.png");
}
function draw() {
  background(grid);
  //background
  fill("#fff");
  strokeWeight(3);
  stroke("#bcbcbc");
  ellipse(50, 700, 900, 300);
  ellipse(900, 700, 400, 300);
  ellipse(600, 700, 900, 300);
  ellipse(50, 40, 50, 50);
  ellipse(900, 70, 50, 50);
  ellipse(600, 90, 50, 50);
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
  fill("#d5a0f2");
  strokeWeight(10);
  stroke("#652687");
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
  strokeWeight(25);
  line(400, 120, 600, 120);
  //hat body
  fill("#a0d0f2");
  quad(400, 50, 600, 50, 550, 120, 450, 120);
  //eyes
  stroke("#444444");
  strokeWeight(50);
  point(450, 200);
  point(505, 200);
  //nose
  stroke("#ff8200");
  strokeWeight(25);
  point(475, 230);
  //mouth
  noFill();
  stroke("#444444");
  strokeWeight(5);
  arc(500, 200, 110, 120, 0, HALF_PI);
  //buttons
  stroke("#ffaff1");
  strokeWeight(35);
  point(475, 400);
  point(475, 450);
  point(475, 500);
  //left arm
  stroke("#744700");
  strokeWeight(10);
  line(300, 300, 380, 380);
  //right arm
  noFill();
  strokeWeight(10);
  arc(660, 310, 140, 200, 0, HALF_PI);
}

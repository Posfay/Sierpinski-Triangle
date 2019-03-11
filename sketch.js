let cnv, p, res, rand;
let reset = true;
let rCol = false;


function setup() {
  cnv = createCanvas(windowWidth, windowWidth);
  cnv.mousePressed(msPrsd);
  p = createP("Click on the canvas to draw the Sierpinski Triangle");
  res = createButton("Reset");
  res.mousePressed(resPrsd);
  rand = createButton("Random Colors: OFF");
  rand.mousePressed(randCol);
  background(0);
}

function draw() {

}

function resPrsd() {
  reset = true;
  background(0);
}

function randCol() {
  rCol = !rCol;
  if (rCol) {
    rand.html("Random Colors: ON");
  } else {
    rand.html("Random Colors: OFF");
  }
}

function msPrsd() {
  let m = 0.5 * sqrt(3) * width;
  if (reset) {
    sTriangle(width / 2, height - m, 0, height, width, height, 1);
    reset = false;
  }
}

function sTriangle(x1,y1,x2,y2,x3,y3,lvl) {
  let a = abs(x2 - x3);
  let m = 0.5 * sqrt(3) * a;
  let half_a = a / 2;
  let dist_y = abs(y1 - y2);
  let n = lvl;

  let xA = x2 + a / 4;
  let yA = y2 - dist_y / 2;
  let xB = x3 - a / 4;
  let yB = y2 - dist_y / 2;
  let xC = x2 + half_a;
  let yC = y2;

  let r = random(255);
  let g = random(255);
  let b = random(255);

  if (rCol) {
    fill(r, g, b);
    stroke(0);
  } else {
    fill(255);
    stroke(0);
  }
  triangle(xA, yA, xB, yB, xC, yC);

  if (n < 9) {
    sTriangle(x1, y1, xA, yA, xB, yB, n + 1);
    sTriangle(xA, yA, x2, y2, xC, yC, n + 1);
    sTriangle(xB, yB, xC, yC, x3, y3, n + 1);
  }
}

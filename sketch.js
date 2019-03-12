let cnv, p, res, rand;
let reset = true;
let rCol = false;
let done = false;
let a = [];
let b = [];
let c = [];
let d = [];
let e = [];
let f = [];

const SPEED = 10;


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

  if (done) {
    for (let i = 1; i <= SPEED; i++) {
      let x1 = a.shift();
      let y1 = b.shift();
      let x2 = c.shift();
      let y2 = d.shift();
      let x3 = e.shift();
      let y3 = f.shift();

      let rC = random(255);
      let gC = random(255);
      let bC = random(255);

      if (rCol) {
        fill(rC, gC, bC);
        noStroke();
      } else {
        fill(255);
        noStroke();
      }

      triangle(x1, y1, x2, y2, x3, y3);
    }
  }


}

function resPrsd() {
  reset = true;
  background(0);

  a = [];
  b = [];
  c = [];
  d = [];
  e = [];
  f = [];

  done = false;
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
    done = true;
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


  saveTri(xA, yA, xB, yB, xC, yC);

  if (n < 9) {
    sTriangle(x1, y1, xA, yA, xB, yB, n + 1);
    sTriangle(xA, yA, x2, y2, xC, yC, n + 1);
    sTriangle(xB, yB, xC, yC, x3, y3, n + 1);
  }
}

function saveTri(x1, y1, x2, y2, x3, y3) {
  a.push(x1);
  b.push(y1);
  c.push(x2);
  d.push(y2);
  e.push(x3);
  f.push(y3);
}

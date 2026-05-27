let moonSpeed = 0.02;
let minMoonY;
let maxMoonY;
function setup() {
  createCanvas(600, 400);
  minMoonY = height * 0.1;
  maxMoonY = height * 0.6;
}
function draw() {
  let val = sin(frameCount * moonSpeed);
  let c1 = color(15, 20, 40);
  let c2 = color(60, 40, 80);
  let amt = map(val, -1, 1, 0, 1);
  background(lerpColor(c1, c2, amt));
  noStroke();

  let moonY = map(val, -1, 1, minMoonY, maxMoonY);
  let moonSize = 60 + cos(frameCount * moonSpeed) * 10;
  fill(255, 255, 230);
  circle(500, moonY, moonSize);

  fill(30, 40, 70);
  triangle(0, 300, 150, 150, 300, 300);
  fill(25, 35, 60);
  triangle(200, 300, 400, 100, 600, 300);

  fill(10, 10, 20);
  rect(0, 300, 600, 100);

  let shadowAlpha = map(moonY, minMoonY, maxMoonY, 150, 50);

  function drawBuildingShadow(bx, by, bw, bh) {
    let shadowLen = map(moonY, minMoonY, maxMoonY, bh * 0.2, bh * 1.5);
    let shadowSkew = map(moonY, minMoonY, maxMoonY, 10, 80);
    fill(0, 0, 0, shadowAlpha);
    quad(bx, by + bh, bx + bw, by + bh, bx + bw - shadowSkew, by + bh + shadowLen, bx - shadowSkew, by + bh + shadowLen);
  }

  stroke(50);
  strokeWeight(1);
  
  drawBuildingShadow(50, 150, 60, 150);
  fill(40, 50, 80);
  rect(50, 150, 60, 150);
  
  drawBuildingShadow(150, 100, 80, 200);
  fill(50, 60, 90);
  rect(150, 100, 80, 200);
  
  drawBuildingShadow(300, 180, 50, 120);
  fill(30, 40, 70);
  rect(300, 180, 50, 120);

  drawBuildingShadow(100, 200, 70, 100);
  fill(70, 90, 120);
  rect(100, 200, 70, 100);
  
  drawBuildingShadow(220, 120, 60, 180);
  fill(200, 100, 150);
  rect(220, 120, 60, 180);
  
  drawBuildingShadow(380, 80, 90, 220);
  fill(90, 110, 140);
  rect(380, 80, 90, 220);
  drawBuildingShadow(430, 150, 20, 150);
  fill(100, 255, 200);
  rect(430, 150, 20, 150);
  drawBuildingShadow(500, 160, 60, 140);
  fill(60, 80, 110);
  rect(500, 160, 60, 140);
  noStroke();
  
  let windowAlpha = 150 + random(50);
  fill(255, 255, 150, windowAlpha);
  
  rect(60, 170, 10, 10);
  rect(80, 170, 10, 10);
  rect(60, 190, 10, 10);
  rect(80, 190, 10, 10);
  rect(60, 210, 10, 10);
  rect(80, 210, 10, 10);
  fill(255, 255, 200, 180);
  rect(160, 120, 10, 10);
  rect(180, 120, 10, 10);
  rect(200, 120, 10, 10);
  rect(160, 140, 10, 10);
  rect(200, 140, 10, 10);
  rect(160, 160, 10, 10);
  rect(180, 160, 10, 10);
  
  fill(255, 255, 230);
  rect(390, 100, 15, 5);
  rect(390, 120, 15, 5);
  rect(390, 140, 15, 5);
  rect(390, 160, 15, 5);
  rect(410, 100, 15, 5);
  rect(410, 120, 15, 5);
  
  fill(255, 200, 100, 150);
  rect(510, 180, 8, 8);
  rect(530, 180, 8, 8);
  rect(510, 200, 8, 8);
  rect(530, 200, 8, 8);
  rect(510, 220, 8, 8);
  rect(530, 220, 8, 8);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('homework_animation_shadows', 3);
  }
}

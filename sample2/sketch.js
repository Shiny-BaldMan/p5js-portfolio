function setup() {
  createCanvas(400, 600);
  noLoop();
}
function draw() {
  background(255);
  
  //몸
  noStroke();
  fill(100, 100, 200);
  rect(0, 300, 400, 300);
  
  fill(100, 100, 200);
  ellipse(50, 320, 120, 120);
  ellipse(350, 320, 120, 120);
  
  // --- 얼굴 ---
  fill(255, 224, 189);
  rect(120, 100, 160, 160);
  fill(255, 224, 200);
  triangle(120, 260, 280, 260, 200, 350);
  
  //머리
  fill(0);
  rect(120, 30, 160, 100);
  
  //코
  stroke(0);
  strokeWeight(3)
  fill(255, 224, 189);
  rect(195, 170, 10, 80);
  
  // --- 눈 ---
  fill(255);
  rect(140, 170, 40, 10);
  rect(220, 170, 40, 10);
  fill(0);
  arc(160, 170, 20, 20, 0, PI);
  arc(240, 170, 20, 20, 0, PI);
  
  //안경
  noFill();
  stroke(50);
  strokeWeight(3);
  ellipse(160, 180, 60, 60);
  ellipse(240, 180, 60, 60);
  line(190, 170, 210, 170);
  
  //눈썹
  line(130, 150, 185, 165); 
  line(215, 165, 270, 150);
  
  //얼굴 옆
  line(130, 210, 130, 250);
  line(270, 210, 270, 250);
  
  //입
  noFill();
  strokeWeight(3);
  arc(200, 270, 50, 10, 0, PI);
  arc(200, 290, 20, 10, PI, TWO_PI);
}

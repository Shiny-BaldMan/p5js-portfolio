let shoulderSize = 120;
let angle = 0;
let angleDir = 1;
function setup() {
  createCanvas(400, 600);
  
  document.oncontextmenu = function() {
    return false;
  };
}
function draw() {
  background(255);
  
  // 1. 마우스 이벤트: 어깨 크기 조절
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      shoulderSize += 2;
    } else if (mouseButton === RIGHT) {
      shoulderSize -= 2;
    }
  }
  shoulderSize = constrain(shoulderSize, 20, 400);

  // 2. 키보드 이벤트: 스페이스바 누를 때 애니메이션
  if (keyIsDown(32)) {
    angle += 2 * angleDir; 
    if (angle >= 15 || angle <= -15) {
      angleDir *= -1; 
    }
  } else {
    if (angle > 0) angle -= 2;
    if (angle < 0) angle += 2;
  }
  
  //몸통 (회전 적용)
  push(); 
  translate(200, 600);
  rotate(radians(angle));
  translate(-200, -600);
  
  noStroke();
  fill(100, 100, 200);
  rect(-200, 300, 800, 400); 
  pop(); 

  //어깨
  let leftShoulderOffset = angle * 2.8; 
  let rightShoulderOffset = -angle * 2.8; 
  
  noStroke();
  fill(100, 100, 200);
  ellipse(50, 320 - leftShoulderOffset, shoulderSize, shoulderSize);
  ellipse(350, 320 - rightShoulderOffset, shoulderSize, shoulderSize);

  // 얼굴
  noStroke();
  fill(255, 224, 189);
  rect(120, 100, 160, 160);
  fill(255, 224, 200);
  triangle(120, 260, 280, 260, 200, 350);
  
  // 머리
  fill(0);
  rect(120, 30, 160, 100);
  
  // 코
  stroke(0);
  strokeWeight(3);
  fill(255, 224, 189);
  rect(195, 170, 10, 80);
  
  // 눈
  fill(255);
  rect(140, 170, 40, 10);
  rect(220, 170, 40, 10);
  fill(0);
  arc(160, 170, 20, 20, 0, PI);
  arc(240, 170, 20, 20, 0, PI);
  
  // 안경
  noFill();
  stroke(50);
  strokeWeight(3);
  ellipse(160, 180, 60, 60);
  ellipse(240, 180, 60, 60);
  line(190, 170, 210, 170);
  
  // 눈썹
  line(130, 150, 185, 165); 
  line(215, 165, 270, 150);
  
  // 얼굴 옆
  line(130, 210, 130, 250);
  line(270, 210, 270, 250);
  
  // 입
  noFill();
  strokeWeight(3);
  arc(200, 270, 50, 10, 0, PI);
  arc(200, 290, 20, 10, PI, TWO_PI);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('my_animation', 3);
  }
}

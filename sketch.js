var fixedRect, movingRect;

function setup() {
  createCanvas(800, 800);
  fixedRect = createSprite(200, 200, 50, 100);
  movingRect = createSprite(500, 200, 100, 50);
}

function draw() {
  background("lightblue");

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  text("moving minus fixed: " + (movingRect.x - fixedRect.x), 200, 50);
  text("Fixed minus moving: " + (fixedRect.x - movingRect.x), 200, 100);
  text("Sum of half the width: " + (movingRect.width / 2 + fixedRect.width / 2), 200, 150);

  text("moving minus fixed in Y axis: " + (movingRect.y - fixedRect.y), 200, 400);
  text("fixed minus moving in Y axis: " + (fixedRect.y - movingRect.y), 200, 450);
  text("sum of half the height:" + (fixedRect.height / 2 + movingRect.height / 2), 200, 500);


  if (movingRect.x - fixedRect.x <= movingRect.width / 2 + fixedRect.width / 2
    && fixedRect.x - movingRect.x <= movingRect.width / 2 + fixedRect.width / 2
    && movingRect.y - fixedRect.y <= fixedRect.height / 2 + movingRect.height / 2
    && fixedRect.y - movingRect.y <= fixedRect.height / 2 + movingRect.height / 2) {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
  else {
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }

  drawSprites();
}
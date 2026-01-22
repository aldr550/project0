let bg;

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = color(255,0,0)
}

function draw() {
  background(bg);
  // ellipse(mouseX, mouseY, 50, 50);
  // line(0, height/2, width, 0)
// for(let i = 0; i < 4; i++) {
//   rect(i * 100, 0, 100, 100);
// }
// translate(width/2, height/2);
// beginShape();
// for(let i = 0; i < 10; i++) {
//   const x = random(-100, 100);
//   const y = random(-100, 100);
//   vertex(x, y);
// }
// endShape();
// }
bezier(0, 0, 923, 59, 150, 250, width, height);
// bezier(width,0, 666, 350, 0,0, height/2, 0);

// myTriangle(.05, mouseX, mouseY);
console.log("mouseX: "+mouseX, "mouseY: "+mouseY);
}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  bg = color(random(255), random(150),random(255));
}
// function myTriangle(amountOfWindow, x, y){
//   push();
//   const size = width * amountOfWindow;
//   translate(x,y);
//   triangle(0,0, size, size*2, -size, size*2);
//   pop();
// }
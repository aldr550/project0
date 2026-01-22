let bg;
var speed = 50
var x;
var y;

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = color(255,0,0)
  x = width/2;
  y = width/2;
}

function draw() {
  background(bg);
console.log(mouseX,mouseY)
bezier(0, 0,305, y, x, 50, width, height);
// x += random(-speed, speed); //redraw at random vertical direction between -2.5 and 2.5
// y += random(-speed, speed);
fill(150,y+150,x+150)
bezier(width/2,100, 800,400 ,width/5,height/5, width/2, height/2);
}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  bg = color(x, random(150),random(255));
}
// function myTriangle(amountOfWindow, x, y){
//   push();
//   const size = width * amountOfWindow;
//   translate(x,y);
//   triangle(0,0, size, size*2, -size, size*2);
//   pop();
// }
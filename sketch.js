var x=0;
var y;
var r=100
var theta = 0;
var inc = 0.05;
var backgroundVal = 220;


function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  
  //x = r * cos(theta);
  y = r * sin(theta);
  
  if(x< width) {
  x +=1;
  } else {
    x=0;
  }
  
  //translate(width/2, height/2);
  translate(0,height/2);
  stroke(200);
  fill(random(200),random(100),random(255),random(100));
  ellipse(x,y,r/2);
  ellipse(x,-y*0.1,r/2);
  console.log(y);
  checkY();
  
  theta+=inc;
}


function checkY() {
 // if(y < -98 || y > 98) {
 //   backgroundVal = random(220);
 //   background(backgroundVal); 
 // }
  var checkVal = random(5);
   if(y < checkVal && y > -checkVal) {
   backgroundVal = random(220);
   background(backgroundVal); 
 }
}
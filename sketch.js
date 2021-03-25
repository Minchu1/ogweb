var hr;
var m;
var s;
var ma;
var sa;
var ha;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)


}

function draw() {
  background(255,255,255); 
  translate(400,200);
  rotate(-90);
  hr=hour();
  console.log(hr); 
  m=minute();
  console.log(m);
  s=second();
  console.log(s);
  ma=map(m,0,60,0,360);
  push();
  stroke("red");
  strokeWeight(10);
  rotate(ma);
  line(0,0,75,0);
  pop();
  sa=map(s,0,60,0,360);
  push();
  stroke("purple");
  strokeWeight(10);
  rotate(sa);
  line(0,0,100,0);
  pop();
  ha=map(hr % 12,0,12,0,360);
  push();
  stroke("pink");
  strokeWeight(10);
  rotate(ha);
  line(0,0,50,0);
  pop();
  stroke("purple");
  strokeWeight(5);
  noFill();
  arc(0,0,300,300,0,sa);
  stroke("red")
  arc(0,0,280,280,0,ma);
  stroke("pink")
  arc(0,0,260,260,0,ha);
}
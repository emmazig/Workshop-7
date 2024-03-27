
let water = [];
let water2 = [];
let water3 = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  for(s = 0; s < 1000; s++){
    let x = random(0, width);
    let y = random(0, height);
    water[s] = new Sea (x, y);
  }
  for(s = 0; s < 1000; s++){
    let x = random(0, width);
    let y = random(0, height);
    water2[s] = new Sea2 (x, y);
  }
  for(s = 0; s < 100; s++){
    let x = random(0, width);
    let y = random(0, height);
    water3[s] = new Sea3 (x, y);
  }


}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  

  for(x = 0; x < water.length; x++){
    water[x].grow();
    water[x].show();
  }
  for(x = 0; x < water2.length; x++){
    water2[x].grow();
    water2[x].show();
  }
  for(x = 0; x < water3.length; x++){
    water3[x].grow();
    water3[x].show();
  }

}


class Sea{

  constructor(x, y){
    this.x = random(windowWidth)
    this.y = random(windowHeight)
  }

  grow(){
    this.x += random(-40, 40)
    this.y += random(-4, 4)
  }

  show(){
    strokeWeight(3);
    stroke(10, 70, 125)
    point(this.x, this.y);
  }

}

class Sea2{

  constructor(x, y){
    this.x = random(windowWidth)
    this.y = random(windowHeight)
  }

  grow(){
    this.x += random(-20, 20)
    this.y += random(-2, 2)
  }

  show(){
    strokeWeight(3);
    stroke(1, 115, 170)
    point(this.x, this.y);
  }

}

class Sea3{

  constructor(x, y){
    this.x = random(windowWidth)
    this.y = random(windowHeight)
  }

  grow(){
    this.x += random(-20, 20)
    this.y += random(-2, 2)
  }

  show(){
    strokeWeight(2);
    stroke(255)
    point(this.x, this.y);
  }

}

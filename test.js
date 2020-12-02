
function setup() {
    createCanvas(600, 600, WEBGL);
    perspective(PI / 4.0, 1, 1, 5000);
  }
  function draw() {
    background(100);
    orbitControl();
      
    rotateX(-0.3);
    rotateY(-0.2);
    translate(0, 0, -50);
  
    push();
    translate(-15, 0, sin(frameCount / 30) * 95);
    box(10);
    pop();
  
    push();
    translate(10, 0, sin(frameCount / 30) * 95);
    sphere(90);
    pop();
  }
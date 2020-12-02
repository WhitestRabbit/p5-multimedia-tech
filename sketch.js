let img;
let button;
let a = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    img = loadImage('assets/img.jpg');
    p = createP('Lights Out!');
    p.position(width/2.1,height*0.08);
    console.log(p);
    btn = createButton('Light Toggler');
    btn.position(width/2.1,height*0.92);
    btn.mousePressed(lightToggle);
  }
  function draw() {
    background(30);

    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;

    switch(a) {
      case 0: 
        ambientLight(0);
        p.elt.innerText = "Lights Out!";
        break;
      case 1:
        directionalLight(250, 250, 250, -dirX, -dirY, -1);
        p.elt.innerText = "Directional Light";
        break;
      case 2:
        pointLight(255, 255, 255, locX, locY, 200);
        p.elt.innerText = "Point Light";
        break;
    }
    
    rotateX(frameCount*0.05);
    rotateY(frameCount*0.01);
    rotateZ(frameCount*0.05);
    texture(img);
    sphere(height/5);
    noStroke();
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    btn.position(width/2.15,height*0.92);
    p.position(width/2.1,height*0.08);
  }

  function lightToggle() {
    if(a === 2){
      a = 0;
    } else {
      a += 1;
    }
  }
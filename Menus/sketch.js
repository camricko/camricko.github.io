let header;
let menu;

// let home;
let about;
let products;
let services;
let careers;
let contactUs;
let ourDogs;
let ourParrots;

let button1;
let button2;
let button3;
let button4;
let button5;
let uwu;
let goDogs = false;

let menu5 = false;


// let allmenubuttons = [home, about, products, services, careers, contactUs, ourDogs, ourParrots];
let allsidebuttons = [button1, button2, button3, button4, button5, uwu];

function preload() {
  dog = loadImage("dog.png");
  clouds = loadImage("clouds.png");
  clouds2 = loadImage("clouds.jpg");
}

function setup() {
  frameRate(25);

  canvas = createCanvas(1800, 1800);
  background(240, 240, 240);
  canvas.style("z-index", "-1");

  image(clouds, 0, 0, 1800, 300);

  welcome = createButton("Welcome");
  welcome.position(windowWidth/2-150, windowHeight/2-50);
  welcome.class('welcome');
  welcome.mousePressed(menu1);

}




function menu1() {
  for (i = 0; i < 4; i++) {
    image(clouds2, 0, 300+400*i, 1800, 400);
  }

  fill (190, 13, 38);
  header1 = rect(0, 0, windowWidth, 150);
  fill (150, 13, 38);
  header2 = rect(0, 100, windowWidth, 50);


  home = createButton("Home");
  home.position(100, 110);
  home.class('menubuttons');
  home.mousePressed(menubuttonpressed);


  about = createButton("About");
  about.position(250, 110);
  about.class('menubuttons');
  about.mousePressed(menubuttonpressed);

  products = createButton("Products");
  products.position(400, 110);
  products.class('menubuttons');
  products.mousePressed(menubuttonpressed);


  services = createButton("Services");
  services.position(550, 110);
  services.class('menubuttons');
  services.mousePressed(menubuttonpressed);

  careers = createButton("Careers");
  careers.position(700, 110);
  careers.class('menubuttons');
  careers.mousePressed(menubuttonpressed);

  contactUs = createButton("Contact Us");
  contactUs.position(850, 110);
  contactUs.class('menubuttons');
  contactUs.mousePressed(menubuttonpressed);

  ourDogs = createButton("Our Dogs");
  ourDogs.position(1000, 110);
  ourDogs.class('menubuttons');
  ourDogs.mousePressed(menubuttonpressed);

  ourParrots = createButton("Our Parrots");
  ourParrots.position(1150, 110);
  ourParrots.class('menubuttons');
  ourParrots.mousePressed(menubuttonpressed);

}

  // I
  // dont
  // know
  // how
  // to
  // group
  // code

function menu2() {
  fill (150, 13, 38);
  verticalheader = rect(0, 0, 90, 1800);
  image(dog, 10, 20, 70, 70);

  fill (240, 240, 240);
  button1 = createButton("");
  button1.position(15, 170);
  button1.size(60, 60);
  button1.class('sidebuttons');
  image(dog, 15, 120, 60, 60);
  button1.mousePressed(menu3);

  button2 = createButton("");
  button2.position(15, 270);
  button2.size(60, 60);
  button2.class('sidebuttons');
  button2.style("background-color", "rgb(0, 120, 240)");
  image(dog, 15, 225, 60, 60);
  button2.mousePressed(menu3);

  button3 = createButton("");
  button3.position(15, 370);
  button3.size(60, 60);
  button3.class('sidebuttons');
  button3.style("background-color", "rgb(222, 47, 204)");
  image(dog, 15, 330, 60, 60);
  button3.mousePressed(menu3);

  button4 = createButton("");
  button4.position(15, 470);
  button4.size(60, 60);
  button4.class('sidebuttons');
  button4.style("background-color", "rgb(31, 196, 106)");
  image(dog, 15, 435, 60, 60);
  button4.mousePressed(menu3);

  button5 = createButton("");
  button5.position(15, 570);
  button5.size(60, 60);
  button5.class('sidebuttons');
  button5.style("background-color", "rgb(0, 0, 0)");
  image(dog, 15, 540, 60, 60);
  button5.mousePressed(menu3);

  for (i = 0; i<10; i++) {
    let uwu = "button" + i
    let r = random(255);
    let g = random(255);
    let b = random(255);

    uwu = createButton("");
    uwu.position(15, 670 +100*i);
    uwu.size(60, 60);
    uwu.class('sidebuttons');
    uwu.mousePressed(menu3);

    if (i == 0) {
      uwu.style("background-color", "rgb(81, 12, 200)");
    } else if (i == 1) {
      uwu.style("background-color", "rgb(81, 22, 200)");
    } else if (i == 2) {
      uwu.style("background-color", "rgb(20, 34, 222)");
    } else if (i == 3) {
      uwu.style("background-color", "rgb(200, 145, 20)");
    } else if (i == 4) {
      uwu.style("background-color", "rgb(189, 240, 2)");
    } else if (i == 5) {
      uwu.style("background-color", "rgb(90, 204, 150)");
    } else if (i == 6) {
      uwu.style("background-color", "rgb(255, 140, 180)");
    } else if (i == 7) {
      uwu.style("background-color", "rgb(70, 1, 32)");
    } else if (i == 8) {
      uwu.style("background-color", "rgb(20, 12, 100)");
    } else if (i == 9) {
        uwu.style("background-color", "rgb(1, 120, 150)");
    }

  }

}


function menu3() {
  fill (222, 13, 38);
  verticalheader = rect(90, 0, 200, 1800);
  goDogs = true
  for (q = 0; q < 15; q++) {
    newButton = createButton("Futility");
    newButton.position(115, 200+100*q);
    newButton.class('futility');
    newButton.mousePressed(menu4);
}
  }

function menu4() {
  fill (240, 13, 38);
  verticalheader2 = rect(290, 0, 200, 1800);
  for (q = 0; q < 15; q++) {
    newButton2 = createButton("and lots of doggos");
    newButton2.position(315, 200+100*q);
    newButton2.class('futility2');
}
dogY = 490;
}



function draw() {
  if (frameCount > 500) {
    menu5 = true;
  }

if (menu5 == false) {
  if(goDogs == true && frameCount > 300) {
    dogX = 290;
    dogY = 1800;
  x = random(90, dogX);
  y = random(dogY);
  image(dog, x, y, 60, 60);
}
} else {
    for (i = 0; i < 8; i++){
      r = random(255);
      g = random(255);
      b = random(255);
    fill (r, g, b);
    verticalheader2 = rect(290+200*i, 0, 200, 1800);
    for (q = 0; q < 15; q++) {
      newButton2 = createButton("and lots of doggos");
      newButton2.position(315+200*i , 200+100*q);
      newButton2.class('futility2');
  }}
  dogX = 1800;
  dogY = 1800;
  x = random(90, dogX);
  y = random(dogY);
  image(dog, x, y, 60, 60);
}

}



function menubuttonpressed() {
  image(dog, 200, 200, 200, 200);
  fill (190, 13, 38);
home.hide();
about.hide();
products.hide();
services.hide();
careers.hide();
contactUs.hide();
ourParrots.hide();

ourDogs.mousePressed(menu2);
}

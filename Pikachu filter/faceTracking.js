// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

var capture;
var tracker;
let iris;
let y;


var w = 640,
    h = 480;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();
    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);


}

function preload() {
  iris = loadImage("iris blue.png");
  eyes = loadImage("eyes.png");
  nose = loadImage("nose.png");
  shy = loadImage("shy.png");
  lear = loadImage("lear.png");
  rear = loadImage("rear.png");
  pikachu1 = loadImage("pikachu1.png");
  pikachu2 = loadImage("pikachu2.png");
  pikachu3 = loadImage("pikachu3.png");
}

function draw() {
    imageMode(CORNERS);
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();
    imageMode(CENTER);
    noFill();
    stroke(255);
    print(positions.length);
    // beginShape();
    // for (var i = 0; i < positions.length; i++) {
    //     vertex(positions[i][0], positions[i][1]);
    // }
    // endShape();

    noStroke();
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        // ellipse(positions[i][0], positions[i][1], 4, 4);
        // text(i, positions[i][0], positions[i][1]);
    }


    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        rect(20, 20, smile * 3, 20);

        var mouthTop = createVector(positions[47][0], positions[47][1]);
        var mouthBottom = createVector(positions[53][0], positions[53][1]);
        var open = mouthTop.dist(mouthBottom);
        print("open is" + open);

        if (open > 35) {
        pikastorm();
        }

        // uncomment the line below to show an estimate of amount "smiling"


        image(eyes, positions[32][0], positions[32][1], 80, 60);
        image(eyes, positions[27][0], positions[27][1], 80, 60);
        imageMode(CENTER);
        image(nose, positions[62][0], positions[62][1], 20, 20);
        image(shy, positions[2][0] + 25, positions[2][1]-10, 200, 200);
        image(shy, positions[12][0], positions[12][1]-10, 200, 200);
        image(lear, positions[19][0]-25, positions[19][1]-160);
        image(rear, positions[15][0]+25, positions[15][1]-160);


        // uncomment for a surprise
        noStroke();
        fill(0, 255, 255);
        // ellipse(positions[62][0], positions[62][1], 50, 50);

        // for(let i = 0; i<positions.length; i++) {
        //   image(iris, positions[i][0], positions[i][1], 50, 50);
        // }
    }
}

function pikastorm() {
  print("pikastorm active!");
  for (i = 0; i < 20; i++) {
    let pika = [pikachu1, pikachu2, pikachu3];
    // y = y - 1;
    image(random(pika), random(windowWidth), 450, 200, 200);
  }
}

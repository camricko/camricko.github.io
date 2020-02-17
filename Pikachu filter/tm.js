let canvas;
let video;
let classifier;
let flippedVideo;

let label = "...waiting";

let counter = 0;

let graphX = 0;
let graphSpeed = 5;

let modelURL = "https://teachablemachine.withgoogle.com/models/jX9_FDwL/";

function preload(){
  //add a link to your own data set here
  classifier = ml5.imageClassifier(modelURL + 'model.json');

}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 video = createCapture(VIDEO);
 video.size(640, 480);
 video.hide();

 flippedVideo = ml5.flipImage(video);

 classifyVideo();

}

function classifyVideo(){
  flippedVideo = ml5.flipImage(video);
  //classify our images/video against pretrained model
  //after it's finished, go to function gotResults
  classifier.classify(flippedVideo, gotResults);
}

function gotResults(error, results){
  if(error){
    console.log(error);
    return
  }
  label = results[0].label;
  classifyVideo();
  console.log(results);
}

function draw() {
  background(0);
  image(video, 0, 0);

  textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  uwu = text("$" + counter, width/2, height = 100);



  text(label, width/2, height - 16);

  rect(0, 500, graphX, 50);

  if (label == "Class 1") {
    stroke(random(255), random(255), random(255));
    strokeWeight(5);
    fill(255);
    //updating the width of the rectangle every frame
    graphX = graphX + graphSpeed;
    counter++;
  }

  if (label == "Class 2"){
    stroke(0);
    fill(0, 255, 0);
    graphX = graphX;
  }




}

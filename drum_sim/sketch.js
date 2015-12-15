var canvas;
var bass;
var drum;
var hihat;
var snare;
var isOverCircle;
var isOverCircles;
var isOverSnareCircle;
var backgroundColor;
var c;
var bassColor;
var hithatColor;
var crashColor;
var crashRColor;
var s;
var showbass = 255;
var showsnare = 255;
var showhihat = 255;
var bassTimer = [1048,1049,1050,1051,1052,1053,1416,1418,1419,1420,11421]
var snareTimer = [17769]
var timer;
var CurrentTime
var bassTimerIndex = 0;
var snareTimerIndex = 0;

var notes = [ 60, 62, 64, 65, 67, 69, 71];

var index = 0;
var song = [   
  { note: 0, duration: 400, display: "Bass" },
  { duration: 50, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
   { note: 0, duration: 400, display: "Bass" },
    { duration: 50, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
  { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    
    {note: 3, duration:100, display: "crash"},
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    
    
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
     { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
     { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
     { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
     { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
     { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
     { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
     { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
     { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" },
    { note: 0, duration: 400, display: "Bass" },
    { duration: 10, display: "Rest" },
  { note: 0, duration: 400, display: "Bass" },
  { note: 2, duration: 200, display: "Snare" },
  { duration: 400, display: "Quarter Rest" }
   
];
var trigger = 0;
var autoplay = false;
var osc;


function preload() {
	bass = loadSound('bass.mp3');
    drum = loadSound('drum.mp3');
    hihat = loadSound('hihat.mp3');
    snare = loadSound('snare2.mp3');
    backgroundColor = color(255, 255, 255);
    drums = loadImage("../addons/drums.jpg");
    crashL = loadSound('crashL.mp3');
    crashR = loadSound('ride.mp3');
    openhihat= loadSound('openhihat.mp3');
    recording= loadSound('wewillrockyou.mp3');
    partone = loadSound('part1.mp3');
    parttwo = loadSound('part2.mp3');
}

function setup() {
   canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent('canvasholder2');
   bass.setVolume(1);
    drum.setVolume(0.5);
    hihat.setVolume(2.5);
    openhihat.setVolume(2);
    snare.setVolume(1);
    crashL.setVolume(3);
    crashR.setVolume(3);
    recording.setVolume(10);
    partone.setVolume(10);
     parttwo.setVolume(2);
    c = color(138);
    bassColor = color(138);
    hihatColor = color(138);
    crashColor = color(138);
    crashRColor = color(138);
    
     
     var button = createButton("Start Song!");
     button.parent("buttonholder");
     button.mousePressed(play);
}

function play() {
    if (!autoplay) {
      index = 0;
      autoplay = true;
    }
  
  
  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
    
    recording.play();
}

function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  osc.fade(0);
  
 
}



//function trackone() {
  //  parttwo.play();
//    console.log("playing first applause track");

  //  setTimeout(trackone, 5000);
    //setInterval(trackone, 20000);
    


function draw() {
    background(backgroundColor);
    
    
    
    image(drums, 400,86);
 
  // get distance between mouse and circle
  var distancebass = dist(mouseX, mouseY, 685, 550);
var distancehihat = dist(mouseX, mouseY, 1060, 280);
    var snare = dist(mouseX, mouseY, 930, 350); 
  
  // if the distance is less than the circle's radius
  if(distancebass < 50)
  {
    isOverCircle = true;
      
  } else {
    isOverCircle = false;
  }
  
    if (distancehihat < 50) {
        isOverCircles = true;
    } else {
        isOverCircles = false;
  }
    
  // draw a circle
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
  if(isOverCircle == true)
  {
    fill(31,161,79);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  ellipse(685, 550, 100, 100);
    
    
    
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
  if(isOverCircles == true)
  {
    fill(31,161,79);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  ellipse(1060, 280, 20, 20);
  

    
     // if the distance is less than the circle's radius
  if(snare < 50)
  {
    isOverSnareCircle = true;
  } else {
    isOverSnareCircle = false;
  }
    
    
     ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
  if(isOverSnareCircle == true)
  {
    fill(31,161,79);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  ellipse(930, 350, 50, 50);
  
    
        fill(bassColor);
        ellipse(685, 550, 100, 100);   
    
        fill(c);
        ellipse(930, 350, 50, 50);
    
        fill(hihatColor);
        ellipse(1060, 280, 20, 20);
    
        fill(crashColor);
        ellipse(530, 140, 20, 20);
    
        fill(crashRColor);
        ellipse(920, 120, 20, 20);
    
    
   
    fill(showbass);
    textStyle(NORMAL);
    textSize(30);
    strokeWeight(0);
    text("Bass", 20, 160); 
    rect(0,30,182,20);
    
    fill(showsnare);
    textStyle(NORMAL);
    textSize(30);
    strokeWeight(0);
    rect(420,30,182,20);
    text("Snare", 400, 160);
    
    
     fill(showhihat);
    textStyle(NORMAL);
    textSize(30);
    strokeWeight(0);
     rect(620,30,182,20);
    text("Hi-hat", 680, 160);
    
    backgroundColor = color(255,255,255);   
    
    
if (autoplay && millis() > trigger){
    playNote(notes[song[index].note], song[index].duration);
    trigger = millis() + song[index].duration;
    
    index ++;
  } else if (index >= song.length) {
    autoplay = false;
  }

  
 
  var w = width / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var x = i * w;
    

      fill(200);
  
    
   
    if (autoplay && i === song[index-1].note) {
      fill(100,255,200);
    }
    
   
    rect(x, 0, w-1, 20); 
  }

    
    
    
 if (CurrentTime <= bassTimer[bassTimerIndex] - 10 || CurrentTime >= bassTimer[bassTimerIndex] + 10) {
            backgroundColor = color(0,255,34);
           bassTimerIndex++;
     
        if (bassTimerIndex > bassTimer.length) {
            bassTimerIndex = 0;
          }  
     
    }
    
if (CurrentTime <= snareTimer[snareTimerIndex]- 10 || CurrentTime >= snareTimer[snareTimerIndex] + 10) {
           backgroundColor = color(255,0,0);
           snareTimerIndex++;
          
    if (snareTimerIndex > snareTimer.length) {
            snareTimerIndex = 0;
          }
    
    
    }
    
    
   
    
}
    
    
       


function mousePressed() {
    if(isOverCircle == true){
       //backgroundColor = color(random(255), random(255), random(255));
       bass.play();
	   console.log("Playing");
  }
    
    if(isOverCircles == true){
       //backgroundColor = color(random(255), random(255), random(255));
       hihat.play();
	   console.log("Playing");
  }
    
    if(isOverSnareCircle == true){
       //backgroundColor = color(random(255), random(255), random(255));
      snare.play();
	   console.log("Playing");
  
    }
}

function keyPressed() {
    
    if(key == 'S' || key == 's')
  {
       c = color(0, 255, 0);
       snare.play();
	   console.log("Playing");
      showsnare = color(100,255,200);
      
      if (CurrentTime == snareTimer[snareTimerIndex]) {
           alert("correct");
           snareTimerIndex++;
    }
      
  }
    
 
  if(key == 'B' || key == 'b')
  {  
      bassColor = color(0, 255, 0);
      bass.play();
      console.log("Playing");
      showbass = color(100,255,200);
  }
    
    
    if(key == 'b' && CurrentTime == bassTimer[bassTimerIndex]) {
           alert("correct");
           bassTimerIndex++;
        
    }
  
        

  if(key == 'H' || key == 'h')
  {
    hihatColor = color(0, 255, 0);
      hihat.play();
      console.log("Playing");
       showhihat = color(100,255,200);
      
      
      
  }
    
    if(key == 'Q' || key == 'q')
  {
    crashRColor = color(0, 255, 0);
      crashL.play();
      console.log("Playing");
  }
    
    
     if(key == 'P' || key == 'p')
  {
      crashColor = color(0, 255, 0);
    
      crashR.play();
      
      console.log("Playing");
  }
    
      if(key == 'J' || key == 'j')
  {
       hihatColor = color(0, 255, 0);
    
      openhihat.play();
      
      console.log("Playing");
  }
    
    if(key == 'A' || key == 'a')
    {
            recording.play();
	       console.log("Playing Song");
    }
       
}


function keyReleased() {
    
 if(key == 'S' || key == 's')
  {
       c = color(138);
      showsnare = 255;
  }
    
   if(key == 'B' || key == 'b')
  {
      bassColor = color(138);
      showbass = 255;
  } 
    
     if(key == 'H' || key == 'h')
  {
    hihatColor = color(138);
      showhihat = 255;
  }
    
     if(key == 'Q' || key == 'q')
  {
      crashRColor = color(138);
  }
    
     if(key == 'P' || key == 'p')
  {
      crashColor = color(138);
      
  }
    
    
       if(key == 'J' || key == 'j')
  {
      hihatColor = color(138);
  }
    
    
    
}



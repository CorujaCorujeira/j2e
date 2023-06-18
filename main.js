var song="";

function setup() {
    var canvas=createCanvas(600,500);
    canvas.center();

    var video=createCapture(Video);
    video.hide();
}

function draw() {
    image(video,0,0,600,500);
}

function preload() {
    song=loadSound("music.mp3");
}

function play() {
    song.play;
}



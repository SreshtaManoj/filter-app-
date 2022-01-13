noseX=0;
noseY=0;
function preload(){
    lip_stick = loadImage('lipstick.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes)
}
function draw(){
    image(video, 0, 0, 300, 300)
    fill(255, 0, 0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(lip_stick, noseX, noseY, 30, 30 );
}
function take_snapshot(){
    save('FilterImage.png');
}
function modelLoaded(){
    
}
function gotposes(error, results){
    if(error){
      console.log(error);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
    } 
    else{
console.log("nose x = " + results[0].pose.nose.x)
console.log("nose y = " + results[0].pose.nose.y)
console.log("nose x =" + noseX)
console.log("nose y =" + noseY)
    }
}
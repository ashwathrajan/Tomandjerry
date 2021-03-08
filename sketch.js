var garden, gardenimg;
var tom, tomimg,tomimg2,tomimg3,tomimg4;
var jerry, jerryimg,jerryimg2,jerryimg3,jerryimg4;
function preload() {
    //load the images here
    gardenimg = loadImage("garden.png");
    tomimg = loadAnimation("cat1.png");
    tomimg2 = loadAnimation("cat2.png");
    tomimg3 = loadAnimation("cat3.png");
    tomimg4 = loadAnimation("cat4.png");
    jerryimg = loadAnimation("mouse1.png");
    jerryimg2 = loadAnimation("mouse2.png");
    jerryimg3 = loadAnimation("mouse3.png");
    jerryimg4 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage("garden", gardenimg);
    tom = createSprite(700,600);
    tom.addAnimation("tom", tomimg);
    tom.scale = 0.15;
    jerry = createSprite(200,650);
    jerry.addAnimation("jerry", jerryimg2);
    jerry.scale = 0.1;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed(); 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -5;
      tom.addAnimation("tomrun", tomimg2);
      tom.changeAnimation("tomrun");
      jerry.addAnimation("jerrylaugh",jerryimg3);
      jerry.changeAnimation("jerrylaugh");
      keyEvents();
  }

}
function keyEvents(){
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
        tom.velocityX = 0;
        tom.addAnimation("tomlast",tomimg4)
        tom.changeAnimation("tomlast");
        jerry.addAnimation("jerrylast", jerryimg4);
        jerry.changeAnimation("jerrylast");
    }
}

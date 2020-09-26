
var dog
var dog1
var dog2
var happydog;
var database;
var foodS;
var foodStock;
var b1,b2;
var fedTime,lastFed;
var foodOBJ;


function preload()
{
  dog1.loadImage("dogImage.png/images");
  dog2.loadImage("dogImage1.png/images");
 
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50)
  dog.addImage(dog1);
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2);
 
}

  drawSprites();

}

function readStock(){
  foodS=data.val();

}


function writeStock(x){
  databasse.ref('/').update({
    Food:x
  })
}

co
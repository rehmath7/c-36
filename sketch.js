/*var sBall, database, position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    sBall = createSprite(250,250,10,10);
    sBall.shapeColor = "red";

    var sBallPosition=database.ref('ball/position');
    sBallPosition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({'x':position.x+x,'y':position.y+y})
   
}

function  readPosition(data){
position=data.val();
sBall.x=position.x;
sBall.y=position.y;
}*/

var database;
var game,form,player;
var gameState=0;
var playerCount;
var backGroundImg;

function setup(){
    createCanvas(400,400)

    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();
}

function draw(){

}


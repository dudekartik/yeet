var database;
var pc,gs;
var player,game,form;
var allPlayers;
var car1,car2,car3,car4;
var cars;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);
  gs=0;
  game=new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  if(pc===4){
    game.update(1);
  }
  if(gs===1){
    game.play();
  }
   
  
}


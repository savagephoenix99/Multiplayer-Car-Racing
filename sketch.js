var database;
var gameState=0;
var playerCount;
var distance=0;
const zero=0;
var allPlayers;//to get commone information on all players
// object variables
var form,game,player;
var car1, car2, car3, car4, cars;
var track;


function preload(){
  carImg1=loadImage("car1.png")
  carImg2=loadImage("car2.png")
  carImg3=loadImage("car3.png")
  carImg4=loadImage("car4.png")
  trackImg=loadImage("track.jpg")
}

function setup(){

    //creating database
    database=firebase.database()
    

    createCanvas(displayWidth-20, displayHeight-30);
    game = new Game();
    game.getState();
    game.start();

}


function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState==2){
        game.end();
      }
      
      //console.log(gameState)
      /*if (gameState =! 4){
        //gameState=
      }*/

}




/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>*/
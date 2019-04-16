



var button;
var button2;
let playername = " ";
let newname= false;
var inp;let points= 0;

let savedpoints= 0;
let balls = [];


function setup() {
   createCanvas(1200, 650);
   angleMode(RADIANS);


   if (points == null){
     points = 0
   }

   frameRate(60);



    savedpoints = parseInt(localStorage.getItem('points'));
    button = createButton('Click to save name');
    button2 = createButton('Click to save your score');
    button.position(500, 400);
    button2.position(500, 400);
    button.size(200,50);
    button2.size(200,50);
    button.mousePressed(savename);
    button2.mousePressed(savescore);
    button.hide();
    button2.hide();

    inp = createInput('');
    inp.input(myInputEvent);
    inp.position(550,300);
    inp.size(100,20);
    inp.hide();
}

function draw(){
  console.log(points);




    background(38, 153, 45);
    stroke(252, 239, 60);
    strokeWeight(5);
    line(553.75,150,646.25,150);
    line(600,150,600,200);
    line(553.75,150,553.75,50);
    line(646.25,150,646.25,50);
    stroke(255);
    strokeWeight(2);
    line(200,203,1000,203);
    line(200,203,80,650);
    line(1000,203,1120,650);
    line(180,282.4,1020,282.4);
    line(158,361.8,1042,361.8);
    line(136,441.2,1064,441.2);
    line(116,520.6,1084,520.6);
    line(94,600,1106,600);

scoreboard();

	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].drawTriangle();
        balls[i].score();


      if(keyCode===13){
        balls[i].kickBall();
      }

	  }

    if (frameCount >= 1800){

        background(0);
        textSize(100);
        stroke(255);
        fill(255);
        textAlign(CENTER);
        text("Game over",600,150);
        textSize(50);
        text("SCORE = " + points,600,275);



          text("Press A to retry", 600,525);
  button2.show();

    }



}

function keyPressed(){
  if (keyCode === 32){
     let  b = new Ball(random(400,800),random(400,600),0);
     balls.push(b);
     console.log(balls);
   }
  if (keyCode === 37){
    for (let i = 0; i < balls.length; i++) {
        balls[i].aimLeft();
      }
  }
  if (keyCode === 39){
    for (let i = 0; i < balls.length; i++) {
        balls[i].aimRight();
      }
  }

  if (keyCode === 65){


   location.reload();



    points = 0;
}


}

class Ball {

	constructor(x,y, angle){
		    this.x = x;
    		this.y = y;
        this.angle = angle;
	}

	drawTriangle(){  // draw a triangle on the screen at x,y
    		stroke(0);
    		fill("red");
        push();//save canvas state
        translate(this.x,this.y); //translate to this.x, this.y
        rotate(this.angle/PI); // rotate
        triangle(0, 0, 10, -20, 20, 0); // draw the triangle at 0,0- because you've moved the center
        pop(); // pop back to normal

	}

    score(){
         if (this.x >= 555 && this.x <= 645 && this.y <= 150 && this.y>= 145){
             points = points + 3;
             
                if (points >= savedpoints) {
             localStorage.setItem('points', points);
          }
         }
       }

  drawBall(){  // draw a football on the screen at x,y
    		stroke(0);
        strokeWeight(1);
    		fill(135, 67, 8);
		    ellipse(this.x,this.y,21,33);
        stroke(0);
        strokeWeight(0.5);
        line(this.x,this.y+16.5,this.x,this.y-16.5);
        stroke(255);
        strokeWeight(1.5);
        line(this.x,this.y+6,this.x,this.y-6);
        strokeWeight(1);
        line(this.x+2,this.y+6,this.x-2,this.y+6);
        line(this.x+2,this.y+4,this.x-2,this.y+4);
        line(this.x+2,this.y+2,this.x-2,this.y+2);
        line(this.x+2,this.y,this.x-2,this.y);
        line(this.x+2,this.y-2,this.x-2,this.y-2);
        line(this.x+2,this.y-4,this.x-2,this.y-4);
        line(this.x+2,this.y-6,this.x-2,this.y-6);
	}

  aimLeft(){ //change the trajectory angle
    this.angle = this.angle - 1;
    print(this.angle);
  }

  aimRight(){ //change the trajectory angle
    this.angle = this.angle+1;
    print(this.angle);
  }

	kickBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.angle;
		this.y = this.y-5;
	}



}

function scoreboard(){
  stroke(0);
  strokeWeight(2);
  fill(0);
  textSize(20);
  text("score = " + points,100,100);
  text("highest score = " + savedpoints,900,100);
}


function myInputEvent() {
  console.log('you are typing: ', this.value());
  playername = this.value();

}

function savename() {
 text(playername,400,500);
}

function savescore() {
background (134);
    text("SCORE = " + points,600,200);
    text("Enter your name ",600,100);
    button.show();
    button2.hide();
    inp.show();
}

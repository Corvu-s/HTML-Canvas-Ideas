var canvas = document.querySelector("canvas");
//episode 3/15

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things
//Rectangles
// c.fillStyle = "rgba(100,312,3,0.5)";
// c.fillRect(100, 100, 100, 100);

// //Lines
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(200, 350);
// c.lineTo(250, 350);
// c.lineTo(200, 500);
// c.strokeStyle = "blue";
// c.stroke();

// //Arcs
// //x,y,radius,start angle,end angle (in radians)
// c.beginPath();
// c.arc(300, 300, 50, 0, Math.PI * 2, false);
// c.stroke();

// for (i = 0; i < 30; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var r = Math.random();
//   var col = Math.random(20);
//   c.beginPath();
//   c.arc(x, y, 10 * r, 0, Math.PI * 2, false);
//   c.stroke();
//   c.strokeStyle = `rgb(${col},66,${col * 3},1)`;
// }

//Moving Circles

var circleCount=100;
window.addEventListener("resize",()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  Init();
})
var mouse={
 x:undefined,
 y:undefined   
}
var colours=[
  "#F59F77",
  "#FF5484",
  "#B04CE6",
  "#4758FF",
  "#9AE3F5"

];
window.addEventListener("mousemove",(e)=>{
  mouse.x=e.x
  mouse.y=e.y
})


function Circle(x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.dx = dx;
  this.dy = dy;
  this.col=colours[Math.floor( Math.random() * colours.length)]
  this.minRadius=r;
  this.maxRadius=Math.random() * 75 +1;

  this.target;
  this.isConnected;
  this.targetX=undefined;
  this.targetY=undefined;

    this.setTarget= function(tar){
      this.target=tar
      
    }
    this.setIsConnected=function(val){
      this.isConnected=val;
    }

    this.getX=function(){
      return this.x
    }
    this.getY=function(){
      return this.y
    }

   this.setTargetX= function (num1){
      this.targetX=num1
     
    }
    this. setTargetY= function (num2){
      this.targetY=num2
      

    }

  this.draw = function () {
    c.rect(mouse.x,mouse.y,10,10)
    c.stroke()
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.fillStyle= this.col;
    c.fill()
    c.closePath()
   
    if(this.isConnected){
      c.beginPath()
      c.lineTo(this.x,this.y)
      c.lineTo(this.targetX,this.targetY)
    c.strokeStyle = this.col;
  c.stroke();
  
    }
    

  };

  this.update = function () {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.x = this.x + this.dx;
    this.y = this.y + this.dy;

    if(mouse.x - this.x <50 && mouse.y-this.y <50 && mouse.x-this.x >-50 && mouse.y-this.y > -50){
      if(this.r<this.maxRadius){
        this.r +=1;

      }
    }else if(this.r > this.minRadius){
      this.r -=1;
    }

    //update the coords of the target circle
    this.targetX=circleArray[this.target].getX()
    this.targetY=circleArray[this.target].getY()

    this.draw();
  };
}
var circleArray = [];

function Init(){
  circleArray=[]
  for (i = 0; i < circleCount; i++) {
    var x = Math.random() * (innerWidth - r * 2) + r;
    var y = Math.random() * (innerHeight - r * 2) + r;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    var r = Math.random() * 20 +1;
    circleArray.push(new Circle(x, y, dx, dy, r));
  }
  //once the circles are made, establish their connections
  for(k=0;k<circleCount;k++){
    //too many circles are connected, make it so that 
    var t =Math.floor(Math.random() * circleCount/20);//target circle for line

    var choice=Math.random();
    var ran;
    if(choice <0.4){//tweek this to determine how many circles get connections 
      ran=false;
    }else{
      ran=true;
    }
    circleArray[k].setIsConnected(ran)
    circleArray[k].setTarget(t);
    circleArray[k].setTargetX(circleArray[t].getX())
    circleArray[k].setTargetY(circleArray[t].getY())
   
   //console.log(circleArray[k])
  }
}





function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var j = 0; j < circleArray.length; j++) {
    circleArray[j].update();
  }
}
Init();
animate();

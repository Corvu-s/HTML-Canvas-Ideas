var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things

mouse={
    x:undefined,y:undefined
}
window.addEventListener("mousemove",(e)=>{
    mouse.x=e.x
    mouse.y=e.y

  })


  function distance(x1,x2,y1,y2){
    var x=x2-x1;
    var y= y2-y1;
    return Math.sqrt((Math.pow(x,2)+Math.pow(y,2)))
  }



function Circle(x,y,rad){
this.xPos=x;
this.yPos=y;
this.r=rad;

this.draw= function(){
    c.beginPath();
    c.arc(this.xPos, this.yPos, this.r, 0, Math.PI * 2, false);
    c.fillStyle= "red"
    c.fill()
    c.closePath()
}
this.update = function(){
    if(this === c2){
        if(distance(mouse.x,this.xPos,mouse.y,this.yPos) < 130 ){
            console.log("collide")
        }
    }
    
    this.draw()
}

}
var circleArray=[]
var c1;
var c2;
function init(){
    circleArray=[];
    c1=new Circle(500,500,100);
    c2=new Circle(20,20,30)
    // for(i=r;i<200;i=i+50){
    //     for(j=r;j<200;j=j+50){
    //         var colChoice =Math.floor(Math.random()*5)
    //         var maxRad=Math.floor(Math.random()*(100-50)+50)
    //         console.log(colChoice)
    //         circleArray.push(new Circle(i,j,colChoice,maxRad) )
    //     }
    // }
  
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle="black" 
    c1.update()
    c2.update()
    c2.xPos=mouse.x
    c2.yPos=mouse.y
   
    // for(k=0;k<circleArray.length;k++){
    //     circleArray[k].update()
    // }
    

}

init()
animate()
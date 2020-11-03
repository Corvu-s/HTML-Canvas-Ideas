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



function Circle(x,y,rad,sx,sy){
this.xPos=x;
this.yPos=y;
this.r=rad;
this.dx=sx;
this.dy=sy;
this.draw= function(){
    c.beginPath();
    c.arc(this.xPos, this.yPos, this.r, 0, Math.PI * 2, false);
    c.fillStyle= "red"
    c.fill()
    c.closePath()
}
this.update = function(props){
    
        for(k=0;k<props.length;k++){
            if(distance(props[k],this.xPos,props[k],this.yPos)+this.r*2 < 2*this.r ){
                 console.log("collide")
             }else{
                // console.log("not")
             }
            // console.log(distance(props[k],this.xPos,props[k],this.yPos))
        }
       
        if (this.xPos + this.r > innerWidth || this.xPos - this.r < 0) {
            this.dx = -this.dx;
          }
          if (this.yPos + this.r > innerHeight || this.yPos - this.r < 0) {
            this.dy = -this.dy;
          }
   
    this.xPos=this.xPos+this.dx;
    this.yPos=this.yPos+this.dy;

    this.draw()
}

}
var circleArray=[]

function init(){
    circleArray=[];
    
    for(i=0;i<5;i++){
        var r =Math.random()*1000;
        circleArray.push(new Circle(r,100*(i+1),40,4,4))
    }
  
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle="black" 
    for(j=0;j<circleArray.length;j++){
        circleArray[j].update(circleArray)
    }
   
 
    

}

init()
animate()
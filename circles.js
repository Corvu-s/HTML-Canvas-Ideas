var canvas = document.querySelector("canvas");
//episode 3/15

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things
var cols=["#292929","#5B7876","#8F9E8B",,"#F2E6B6","#412A22"]
mouse={
    x:undefined,y:undefined
}
window.addEventListener("mousemove",(e)=>{
    mouse.x=e.x
    mouse.y=e.y
  })

  var r=25;
function Circle(x,y,co,rad){
this.xPos=x;//
this.yPos=y;
this.origionalPosX=x;// the origional position to return back to
this.origionalPosY=y;
this.r=25;
this.minr=25;
this.maxr=rad;
this.draw= function(){
    c.beginPath();
    c.arc(this.xPos, this.yPos, this.r, 0, Math.PI * 2, false);
    c.fillStyle= cols[co]
    c.fill()
    c.closePath()
}
this.update = function(){
    if(mouse.x - this.xPos <75 && mouse.y-this.yPos <75 && mouse.x-this.xPos >-75 && mouse.y-this.yPos > -75){
        

        if(this.r<this.maxr){
          this.r +=1;
        }
      }else if(this.r > this.minr){
   

        this.r -=1;
      }

    this.draw()
}

}
var circleArray=[]
function init(){
    circleArray=[];
    
    for(i=r;i<innerWidth;i=i+50){
        for(j=r;j<innerHeight;j=j+50){
            var colChoice =Math.floor(Math.random()*5)
            var maxRad=Math.floor(Math.random()*(100-50)+50)
            console.log(colChoice)
            circleArray.push(new Circle(i,j,colChoice,maxRad) )
        }
    }
  
}

function animate(){
    requestAnimationFrame(animate);
   
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle="black" 
    for(k=0;k<circleArray.length;k++){
        circleArray[k].update()
    }
    

}

init()
animate()
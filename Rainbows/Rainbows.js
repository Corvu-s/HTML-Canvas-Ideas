var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things


function Rainbow(x,y){
this.freq=0;
this.x=x;
this.y=y;
this.counter=0;

    this.draw=function(){
        var r=Math.sin(0.02*this.counter+0)*127+128;
        var g=Math.sin(0.05*this.counter+5)*127+128;
        var b=Math.sin(0.05*this.counter+10)*127+128;

        c.fillStyle=`rgba(${r},${g},${b})`
        c.fillRect(x,y,25,25)
    
    }
    this.update=function(){
        
        this.counter++;
        if(this.counter >5000){
            this.counter=0;
        }
        this.draw()
    }
}

var  boxes=[]
function init(){
    boxes=[]
    for(i=0;i<500;i=i+30){
        for(j=0;j<500;j=j+30){
            boxes.push(new Rainbow(i,j))
        }
    }
     //test = new Rainbow(100,100)
}

function animate(){
    requestAnimationFrame(animate)
      c.clearRect(0, 0, innerWidth, innerHeight);
    //test.update()
    for(i=0;i<boxes.length;i++){
        boxes[i].update()
    }
}
init()
animate()
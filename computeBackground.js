var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things
//implemrnt some sort of slider to change the recgangle size
var colours = ["#d0ffb5","#c1ff9e","#90ff52","#86ff42","#74ff26","#6aff17","#5bff00"]
function Rectangle(x,y){
    min=0;
    max=255;
    this.dir=1;
    this.default=Math.floor(Math.random()* (max -min)+min)
    this.ci1=this.default
    this.Xpos=x;
    this.Ypos=y;
    this.draw =function(){
    c.fillStyle = `rgba(${this.ci1},${this.ci1},${this.ci1})`;
    c.fillRect(x*100, y*100,100, 100);
    
    }
    this.update= function(){
        
         var speed =Math.floor((Math.random()*5) +1)
        if(this.ci1 > 225){// if you hit the top start 
            this.dir= -speed;
        }else if( this.ci1 <40){
            this.dir =speed;
        }
        this.ci1 =this.ci1 + this.dir
        this.draw();
    }
}

var rectArray=[];
function init(){
    //rectArray.push(new Rectangle(0,0))
    for( i=0;i<Math.floor((window.innerWidth)/100);i++){
        for(j=0;j<Math.floor((window.innerHeight)/100);j++){
            rectArray.push(new Rectangle(i,j))

        }
     }
}



setInterval(animate,100)

function animate() {
    //requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
  
    for(k=0;k<rectArray.length;k++){
        rectArray[k].update()
    }    
  }
  init()
  animate();
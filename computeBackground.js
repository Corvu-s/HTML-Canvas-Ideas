var canvas = document.querySelector("canvas");
var slider =document.getElementById("myRange")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things
//implemrnt some sort of slider to change the recgangle size
//this it in another computer

slider.oninput=function(){
    init()
}
var colours = ["#d0ffb5","#c1ff9e","#90ff52","#86ff42","#74ff26","#6aff17","#5bff00"]
function Rectangle(x,y){
    min=0;
    max=255;
    this.dir=1;
    this.red=Math.floor(Math.random()* (max -min)+min)
    this.Xpos=x;
    this.Ypos=y;
    this.draw =function(){
    c.fillStyle = `rgba(${this.red},${this.red},${this.red})`;
    c.fillRect(x*slider.value, y*slider.value,slider.value, slider.value);
    
    }
    this.update= function(){
        
        // var speed =Math.floor((Math.random()*5) +1)
         var speed =2

        if(this.red > 225){// if you hit the top start 
            this.dir= -speed;
        }else if( this.red <40){
            this.dir =speed;
        }
        this.red =this.red + this.dir
     
 
        this.draw();
    }
}

var rectArray=[];
function init(){
    //rectArray.push(new Rectangle(0,0))
    rectArray=[]
    for( i=0;i<Math.floor((window.innerWidth)/slider.value);i++){
        for(j=0;j<Math.floor((window.innerHeight)/slider.value);j++){
            rectArray.push(new Rectangle(i,j))

        }
     }
}



setInterval(animate,60)

function animate() {
    console.log(slider.value)
    //requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
  
    for(k=0;k<rectArray.length;k++){
        rectArray[k].update()
    }    
  }
  init()
  animate();

var canvas = document.querySelector("canvas")
var c=canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var colours=["#A80027","#000000","#363636","#DCDCDC","#FFFAFA"]

var mouse={
    x:undefined,
    y:undefined
}

window.addEventListener("mousemove",(e)=>{
    mouse.x=e.x;
    mouse.y=e.y;
})
window.addEventListener("mousedown",()=>{
    clicked=true;
})
window.addEventListener("mouseup",()=>{
    clicked = false;
})

var clicked=false;
function Square(x,y,id,speed,col){
    this.id=id
    this.dir=speed;
    this.maxLength=40;
    this.maxWidth=40;
    this.origionalX=x;
    this.origionalY=y;

    this.length=30;
    this.width=30;
    this.x=x;
    this.y=y;
    this.draw = function(){
       
        
        c.fillStyle=colours[col]
        c.fillRect(x,y,this.length,this.width)
    }
    this.update = function(){
       

        //this.x=this.x-this.dir;
        //this.y=this.y-this.dir;
        if(this.length > this.maxLength || this.width > this.maxWidth){
            this.dir = -this.dir
        }
        if(this.length < 30 || this.width < 30){
            this.dir=-this.dir
        }
        this.length=this.length+this.dir;
        this.width=this.width+this.dir;
        
        if(clicked&&mouse.x>this.x && mouse.x<this.x+40 && mouse.y>this.y && mouse.y>this.y+40){
            console.log(this.id)
        }

        this.draw()
    }
}

var squares=[]
var runners=[]
function init(){
squares=[]
runners=[]
var id=0;


for(i=0;i<innerWidth;i=i+40){
    for(j=0;j<innerHeight;j=j+40){
        var s = Math.random()*0.2;
        var colChoice=Math.floor(Math.random()*5)
        squares.push(new Square (i,j,id,s,colChoice))
        id++;
    }
}
}

function animate(){
requestAnimationFrame(animate)
c.clearRect(0, 0, innerWidth, innerHeight);

for(k=0;k<squares.length;k++){
    squares[k].update()
    
}

}
init()
animate()
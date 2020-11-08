
var canvas = document.querySelector("canvas")
var c=canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function Square(x,y,id){
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
        c.fillStyle="black"
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
     
        this.draw()
    }
}

var squares=[]
function init(){
squares=[]
var id=0;
for(i=0;i<innerWidth;i=i+80){
    for(j=0;j<innerHeight;j=j+80){

        squares.push(new Square (i,j,))
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
var canvas= document.querySelector("canvas")
var c =canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

var width=200;
var height=323.607;
function GoldenRect(x,y){
    this.originX=width;
    this.originY=height;

    this.width=this.originX
    this.height=this.originY
this.x=x;
this.y=y;
this.draw = function(){
   // c.rect(this.x-this.width/2,this.y-this.height/2,this.width,this.height)
   c.rect(this.x,this.y,this.width,this.height)
    c.stroke()
    c.strokeStyle="white"
    console.log(this.x,this.y)
}

this.update = function(){
    this.x=this.x-1;
    this.y=this.y-1;
    this.width=this.width+2;
    this.height=this.height+2;

    if(this.y < 0){
        this.width=this.originX
        this.height=this.originY
        this.x=innerWidth/2-this.width/2
        this.y=innerHeight/2-this.width/2
    }
    this.draw()

}
}

var test;
function init(){
test= new GoldenRect(innerWidth/2,innerHeight/2)
}
function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);

        requestAnimationFrame(animate)
        c.fillStyle="black"
                c.fillRect(0,0,innerWidth,innerHeight)

        test.update()

}

init();
animate()
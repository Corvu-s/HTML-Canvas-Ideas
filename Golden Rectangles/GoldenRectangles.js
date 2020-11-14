var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things

window.addEventListener("mousemove",(e)=>{
    mouse.x=e.x;
    mouse.y=e.y;
})
mouse={
    x:undefined,
    y:undefined
}
// var width=200;
// var height=323.607;
function GoldenRect(x,y){
    this.freeX=x
    this.freeY=y
    this.originX=200;
    this.originY=323.607;

    this.width=this.originX
    this.height=this.originY
this.x=x-this.width/2;
this.y=y-this.height/2;
this.draw = function(){

   // c.rect(this.x-this.width/2,this.y-this.height/2,this.width,this.height)
   c.rect(this.freeX,this.freeY,10,10)
   c.stroke()
//    c.rect(this.x,this.y,this.width, this.height)
//     c.stroke()
//     c.strokeStyle="black"
//     //console.log(this.x,this.y)
}

this.update = function(){
    this.freeX=mouse.x
    this.freeY=mouse.y

//     this.x=this.x-4;
//     this.y=this.y-4;
//     this.width=this.width+8;
//     this.height=this.height+8;

//     if(this.y < 0){
//         this.width=this.originX
//         this.height=this.originY
//         this.x=innerWidth/2-this.width/2
//         this.y=innerHeight/2-this.height/2
//     }
  this.draw()

}
}

var rectangles=[];
function init(){
    for(i=0;i<1;i++){
        rectangles.push(new GoldenRect(innerWidth/2,innerHeight/2))
    }

}

function animate(){
requestAnimationFrame(animate)

   c.clearRect(0,0, window.innerWidth,window.innerHeight)

        // c.fillStyle="black"
        //         c.fillRect(0,0,innerWidth,innerHeight)

    for(k=0;k<rectangles.length;k++){
        rectangles[k].update()
    }

}

init();
animate()





























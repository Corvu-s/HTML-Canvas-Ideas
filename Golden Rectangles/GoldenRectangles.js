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


function Rectangle(length,width){
    this.length=length;
    this.width=width;
    this.origionalLength=length;
    this.origionalWidth=width
    this.originX=(innerWidth/2)-(length/2);
    this.originY=(innerHeight/2)-(width/2);
    this.x=this.originX;
    this.y=this.originY
   
    this.draw=function(){

        c.strokeRect(this.x,this.y,this.length,this.width)
        c.strokeStyle="white"
    }

    this.update=function(){
        this.x=this.x-1;
        this.y=this.y-1;
        this.length=this.length+2;
        this.width=this.width+2;

        if(this.y < 0){
            this.x=this.originX
            this.y=this.originY
            this.length=0
            this.width=0
        }

     this.draw() 
    }
}



var path=[]
function init(){
    path=[]
    for(i=1;i<300;i=i+100){
        path.push(new Rectangle(i,2*i))
    }
    console.log(path)
}


function animate(){
requestAnimationFrame(animate)
c.clearRect(0,0,innerWidth,innerHeight)

c.fillStyle="black"
c.fillRect(0,0,innerWidth,innerHeight)

 for(k=0;k<path.length;k++){
     path[k].update()
 }
}

init()
animate()



// function Test(x,y){

//     this.r=10;
//     this.x=x;
//     this.y=y
//     this.draw =function(){
// c.strokeRect(this.x, this.y,10,10)      
//     }
//     this.update =function(){
//         this.x=mouse.x
//         this.y=mouse.y
//         this.draw()
//     }
// }

// var thing = new Test()

// function animate(){
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, innerWidth, innerHeight);
// thing.update()
// }



// animate()


















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


function Rectangle(length,width,id){
    this.id=id;
    this.length=length;
    this.width=width;


    this.x=this.originX;
    this.y=this.originY
   
    this.draw=function(){

        c.strokeRect(this.x,this.y,this.length,this.width)
        c.strokeStyle="white"
    }

    this.update=function(){
        this.x=this.x-2;
        this.y=this.y-2;
        this.length=this.length+4;
        this.width=this.width+4;

        if(this.y < 0 || this.width > innerHeight){
           
            // this.x=innerWidth/2
            // this.y=innerHeight/2
                 
            this.x=mouse.x
            this.y=mouse.y
            this.length=2
            this.width=2
        }

     this.draw() 
    }
}



var path=[]
function init(){
    path=[]
    var id=0;
    for(i=1;i<innerHeight;i=i+300){
        
        path.push(new Rectangle(i,i,id))
        id++;
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


















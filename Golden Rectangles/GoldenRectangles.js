var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things

function button(){
    mode=!mode
}

var mode=false;


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
    this.animationCount=0;

    this.startX=0;
    this.startY=innerHeight/2;
    this.maxWidth=300;
    this.mayLength=300;
    this.id=id;
    this.length=length;
    this.width=width;


    this.x=innerWidth/2-this.width/2;
    this.y=innerHeight/2-this.length/2
   
    this.draw=function(){

        c.strokeRect(this.x,this.y,this.length,this.width)
        c.strokeStyle="white"
    }

    this.update=function(){
        if(this.animationCount == 0){
            this.startX=this.startX+10

        }
        else if(this.animationCount == 1){
            this.startY=this.startY+10;
        }
        else if(this.animationCount == 2){
            this.startX=this.startX +10;
            this.startY=this.startY -10;
        }else if(this.animationCount  == 3){
            this.startX=this.startX+10;
            this.startY=this.startY+10;
        }

        if(this.startX > innerWidth && this.animationCount == 0){
            this.animationCount++
            this.startX=innerWidth/2
            this.startY=0;
        }   
        else if(this.startY > innerHeight && this.animationCount == 1){
            this.animationCount++
            this.startX=0
            this.startY=innerHeight
        }
        else if(this.startX> innerWidth || this.startY<0 && this.animationCount == 2){
            this.animationCount++;
            this.startX=innerWidth/2
            this.startY=0;
            
        }
        else if(this.startX > innerWidth || this.startY > innerHeight && this.animationCount == 3){
            this.animationCount++;

            this.startX=0
            this.startY=innerHeight/2;
        }

        if(this.animationCount > 3){
            this.animationCount =0;
        }


        this.x=this.x-2;
        this.y=this.y-2;
        this.length=this.length+4;
        this.width=this.width+4;

        if(this.width >= this.maxWidth || this.length > this.mayLength){
           
          if(mode){
            this.x=mouse.x
              this.y=mouse.y
          }else{
            this.x=this.startX
            this.y=this.startY
          }
           
               
           
 
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
    for(i=0;i<innerHeight;i=i+1){
        
        path.push(new Rectangle(i,i,id))
        id++;
    }
    
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


















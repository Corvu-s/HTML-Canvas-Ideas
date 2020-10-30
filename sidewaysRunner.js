var canvas = document.querySelector("canvas")
var c=canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var symbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var rectangleWidth=10;

var defaultCol=`rgba(57,255,20)`;
var firstCharCol="rgba(255,255,255)"
var charsPerLine=20;


function RunnerRectangle (y,start,speed){
this.xPos=start;
this.yPos=y;
this.speed = speed;
this.symbol="a";
this.changeCount=0;
this.col=235;
this.setSymbol = function(){
    var i=Math.floor(Math.random()*symbols.length);
this.symbol=symbols[i];
}
this.draw = function(){
    this.changeCount++;
    if(this.changeCount == 100){
        this.setSymbol()
        this.changeCount=0;
    }
    c.font ="20px Arial"
    if(start == charsPerLine-1){
        c.fillStyle=firstCharCol;

    }else{
        c.fillStyle=defaultCol;

    }
    
    c.fillText(this.symbol,this.xPos*rectangleWidth,this.yPos*10)//this constant changes the spacing of each line of "code"

}

this.update = function(){
    this.xPos=this.xPos+this.speed
    if(this.xPos > (innerWidth/rectangleWidth)){//divide by the width of the rectngle
        this.xPos=0;   
    }
    this.draw()
}
}


var runnerElements=[]

function init(){
    runnerElements=[]
for(j=1;j<100;j++){
    var speed=Math.random();
    for(k=0;k<charsPerLine;k++){
        runnerElements.push(new RunnerRectangle(j,k,speed/5))//add a slider for te division here.
    }
   
}
}


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle="black"
    c.fillRect(0,0,canvas.width,canvas.height)//blak background
    for(i=0;i<runnerElements.length;i++){
        runnerElements[i].update();
    }
}
init()
animate()
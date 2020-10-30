var canvas = document.querySelector("canvas")
var c=canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var symbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var rectangleWidth=10;

var defaultCol=`rgba(57,255,20)`;
var firstCharCol={red:255,green:255,blue:255}
var charsPerLine=30;
var lineHeight=20;

function RunnerRectangle (y,start,speed,symbolChangeSpeed){
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
    if(this.changeCount == symbolChangeSpeed){
        this.setSymbol()
        this.changeCount=0;
    }
    c.font ="20px Arial"
    if(start > charsPerLine-4){//these n-1 symbols will have a fading white colour
        
        c.fillStyle=`rgba(${firstCharCol.red-((charsPerLine-start)*30)},${firstCharCol.green-((charsPerLine-start)*20)},${firstCharCol.blue-((charsPerLine-start)*20)})`;
    }else{
        c.fillStyle=defaultCol;

    }
    
    c.fillText(this.symbol,this.xPos*rectangleWidth,this.yPos*lineHeight)//this constant changes the spacing of each line of "code"
    c.shadowColor = `rgba(57,255,20)`;
    c.shadowBlur = 25;
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
for(j=1;j<innerHeight/lineHeight;j++){
    var speed=Math.random();
    for(k=0;k<charsPerLine;k++){
        var symbolChange = Math.floor(Math.random()*150)
        runnerElements.push(new RunnerRectangle(j,k,speed/5,symbolChange))//add a slider for te division here.
    }
   
}
console.log(runnerElements.length)
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
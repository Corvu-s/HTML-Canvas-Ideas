var canvas = document.querySelector("canvas")
var c=canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var symbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var rectangleWidth=25;
function RunnerRectangle (y,start,speed){
this.xPos=start;
this.yPos=y;
this.speed = speed;
this.symbol="a";
this.col=235;
this.setSymbol = function(){
    var i=Math.random()*symbols.length;
this.symbol=symbols[i];
console.log(symbols[i])
}
this.draw = function(){
    c.fillStyle = `rgba(57,255,20)`;
    c.fillRect(this.xPos*rectangleWidth, this.yPos*rectangleWidth,rectangleWidth,rectangleWidth);
    c.font ="20px Arial"
    c.fillStyle="black"
    setInterval(this.setSymbol(),1000);
    c.fillText(this.symbol,this.xPos*rectangleWidth,this.yPos*rectangleWidth)
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
for(j=0;j<innerHeight/rectangleWidth;j++){
    var speed=Math.random();
    var startingPos = Math.floor((Math.random()*innerWidth)/25)
    runnerElements.push(new RunnerRectangle(j,startingPos,speed/5))//add a slider for te division here.
}
}


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(i=0;i<runnerElements.length;i++){
        runnerElements[i].update();
    }
}
init()
animate()
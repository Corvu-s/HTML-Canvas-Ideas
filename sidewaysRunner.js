var canvas = document.querySelector("canvas")
var c=canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function RunnerRectangle (y){
this.xPos=0;
this.yPos=y;
this.speed = 0.5;
this.col=235;
this.draw = function(){
    c.fillStyle = `rgba(0,0,0)`;
    c.fillRect(this.xPos*100, this.yPos*100,100,100);
}

this.update = function(){
    this.xPos=this.xPos+this.speed
    if(this.xPos > 500){
        this.xPos=0;
    }
    this.draw()
}
}


var runnerElements=[]

function init(){
    runnerElements=[]
for(j=0;j<4;j++){
    var startingPos = Math.floor(Math.random()*1000)
    runnerElements.push(new RunnerRectangle(j))
}
}


function animate(){
    requestAnimationFrame(animate)
    console.log(runnerElements)

    c.clearRect(0, 0, innerWidth, innerHeight);
    for(i=0;i<runnerElements.length;i++){
        runnerElements[i].update();
    }
}
init()
animate()
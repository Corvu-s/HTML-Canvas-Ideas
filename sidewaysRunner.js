var canvas = document.querySelector("canvas")
var c=canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//𐌁	𐌂	𐌃	𐌄	𐌅	𐌆	𐌇	𐌈	𐌉	𐌊	𐌋	𐌌	𐌍	𐌎	𐌏	𐌐	𐌑	𐌒	𐌓	𐌔	𐌕	𐌖	𐌗	𐌘	𐌙	𐌚
//var symbols = ["𐌀","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var symbols=["𐌁","𐌂","𐌃","𐌄","𐌅","𐌆","𐌇","𐌈","𐌉","𐌊","𐌋","𐌌","𐌍","𐌎","𐌏","𐌐","𐌑","𐌒","𐌓","𐌔","𐌕","𐌖","𐌗","𐌘","𐌙","𐌚"];

var rectangleWidth=20;


var defaultCol=`rgba(57,255,20)`;
var firstCharCol={red:255,green:255,blue:255}
var charsPerLine=30;
var lineHeight=20;

function RunnerRectangle (x,y,speed,symbolChangeSpeed,id){
    this.id=id;
this.xPos=x;
this.yPos=y;
this.speed = speed;
this.symbol=symbols[Math.floor(Math.random()*symbols.length)];
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
  
    c.fillStyle=defaultCol;

    c.fillText(this.symbol,this.xPos,this.yPos*12)//this constant changes the spacing of each line of "code"
    c.shadowColor = `rgba(57,255,20)`;
    c.shadowBlur = 25;
}

this.update = function(){
    this.yPos=this.yPos+this.speed
    if(this.yPos > (innerHeight/10)){//divide by the width of the rectngle
        this.yPos=0;   
    }
    this.draw()
}
}


var runnerElements=[]

function init(){
    runnerElements=[]
    var count=0;
for(j=1;j<innerWidth;j=j+30){
    var speed=Math.random()*1.2;
    for(k=0;k<charsPerLine;k++){
        var symbolChange = Math.floor(Math.random()*900)
        runnerElements.push(new RunnerRectangle(j,k,speed/5,symbolChange,count))//add a slider for te division here.
        count++;
    }
   
}
console.log(runnerElements)
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
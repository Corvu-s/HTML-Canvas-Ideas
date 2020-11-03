var canvas = document.querySelector("canvas");
//episode 3/15

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d"); // context, alows us to draw things
var cols=["#292929","#5B7876","#8F9E8B",,"#F2E6B6","#412A22"]
mouse={
    x:undefined,y:undefined
}
window.addEventListener("mousemove",(e)=>{
    mouse.x=e.x
    mouse.y=e.y
  })

  var r=25;



  function distance(x1,x2,y1,y2){
    var x=x2-x1;
    var y= y2-y1;
    return Math.sqrt((Math.pow(x,2)+Math.pow(y,2)))
  }


/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}






function Circle(x,y,co,rad){
this.x=x;//
this.y=y;
this.origionalPosX=x;// the origional position to return back to
this.origionalPosY=y;
this.mass=1;
this.r=25;
this.minr=25;
this.maxr=rad;
this.velocity={
    x:0,
    y:0
}
this.draw= function(){
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.fillStyle= cols[co]
    c.fill()
    c.closePath()
}
this.update = function(props){

    if(mouse.x - this.x <75 && mouse.y-this.y <75 && mouse.x-this.x >-75 && mouse.y-this.y > -75){
        

        if(this.r<this.maxr){
          this.r +=1;
        }
      }else if(this.r > this.minr){
   

        this.r -=1;
      }



    for(k=0;k<props.length;k++){
        if(this === props[k]) continue;
        if(distance(props[k].x,this.x,props[k].y,this.y)-this.r*2 < 1 ){
           resolveCollision(this,props[k])
         }else{
            // console.log("not")
         }
        // console.log(distance(props[k],this.x,props[k],this.y))
    }
   
    if (this.x + this.r > innerWidth || this.x - this.r <= 0) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.y + this.r > innerHeight || this.y - this.r <= 0) {
        this.velocity.y = -this.velocity.y;
      }






      this.x=this.x+this.velocity.x;
      this.y=this.y+this.velocity.y;
    this.draw()
}

}
var circleArray=[]
function init(){
    circleArray=[];
    
    // for(i=r;i<100;i=i+50){
    //     for(j=r;j<100;j=j+50){
    //         var colChoice =Math.floor(Math.random()*5)
    //         var maxRad=Math.floor(Math.random()*(100-50)+50)
        
    //         circleArray.push(new Circle(i,j,colChoice,maxRad) )
    //     }
    // }
    for(j=25;j<200;j=j+50){
        var colChoice =Math.floor(Math.random()*5)
          var maxRad=Math.floor(Math.random()*(100-50)+50)
    circleArray.push(new Circle(j,100,colChoice,maxRad) )

    }
  console.log(circleArray)
}

function animate(){
    requestAnimationFrame(animate);
   
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle="black" 
    for(k=0;k<circleArray.length;k++){
        circleArray[k].update(circleArray)
 
    }
    

}

init()
animate()
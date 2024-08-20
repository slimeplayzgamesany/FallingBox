const canvas=document.getElementById("canvas");
canvas.width=1536;
canvas.height=864;    
const ctx=canvas.getContext("2d");


class Player{
    constructor(x,y,color){
        this.x=x;
        this.y=y;
        this.color=color;
        this.width=50;
        this.height=50;
        this.gravity=1.005;


    }
    update(){
        this.y+=5;
        this.y*=this.gravity;
        if(this.y>canvas.height-this.height){
            this.y=canvas.height-this.height;
        }

    }
    draw(){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);

    }
}
let players=[];
let clickX; //GLOBAL VARIABLES
let clickY;
let color;
//! Click event listner----click,mousedown
window.addEventListener("mousemove",(event)=>{
    clickX=event.clientX;
    clickY=event.clientY;
    color=`rgba(${Math.random()*256},${Math.random()*256},${Math.random()*256},${Math.random()})`
    players.push(new Player(clickX,clickY,color));
    console.log(players);
})
const pipeLine=new Player(200,canvas.height-50,"yellow");





function animate(){
    ctx.clearRect(0,0,1536,864);
    requestAnimationFrame(animate);
    for(i=0;i<players.length;i++){
        players[i].update();
        players[i].draw();
    }
    pipeLine.draw();

}
animate();
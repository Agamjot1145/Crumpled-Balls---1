class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.Body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.shapeColor = "white";
        World.add(world,this.Body)
    }
    display(){
        var pos=this.Body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}
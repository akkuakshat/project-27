class Roof {
    constructor(x,y,width,height)   {
        var options = {
           isStatic:true 
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world,this.body);
}

    display()   {
        push();
        var pos1 = this.body.position;
        translate(pos1.x,pos1.y);
        fill (12,12,12);
        rect(0,0,this.width,this.height);        
        pop();
    }

}
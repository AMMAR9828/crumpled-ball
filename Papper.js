class Papper {
    constructor(radius){
        var options={
            isStatic:false,
            'restitution':0.4,
            'friction':0.5,
            'density':0.5
        }
        this.body= Bodies.circle(200,300,40)
        this.radius= 40

        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
         
        push()
        translate(pos.x,pos.y,this.body,this.radius)
        ellipseMode(RADIUS)
        fill("green")
        stroke("red")
        ellipse(0,0,this.radius);
        pop()
    }
};
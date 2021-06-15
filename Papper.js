class Papper {
    constructor(){
        var options={
            isStatic:false,
            'restitution':0.4,
            'friction':0.5,
            'density':0.5
        }
        this.body= Bodies.circle(200,300,25,options)
        this.radius= 25

        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
         
        push()
        ellipseMode(RADIUS)
        translate(pos.x,pos.y,this.body,this.radius)
        fill("green")
        stroke("red")
        ellipse(0,0,this.radius);
        pop()
    }
};
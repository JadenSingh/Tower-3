class polygon {

    constructor(x,y,r){
    
    var options={
    
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    
    }
    this.x=x;
    this.y=y;
    this.r=30;
    this.body=Bodies.circle(this.x,this.y, this.r/2, options)
    this.image = loadImage("polygon.png");
    World.add(world, this.body);
    }
    display(){
        var polygonpos=this.body.position;
        push()
        translate(polygonpos.x, polygonpos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        
        pop()
    }
    
    
    
    }

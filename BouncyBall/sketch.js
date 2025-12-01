
let ballarray = []
let collide = false
let collidetestparam = 0

function setup(){
    createCanvas(windowWidth, windowHeight)
    background(0)


    for(var i = 0; i < 1; i ++){
        let b = new ball();
        ballarray.push(b)
    }




}

function draw(){
    background(0,100)
    fill(255)
    for(var i = 0; i < ballarray.length; i ++){
        ballarray[i].show()
    }



    if (collide == true){
        collide = false
        collidetestparam += 10
        collidetestparam =  collidetestparam % 100

    }




}


class ball{
    constructor() {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight)

        this.xspeed = random(-10, 10)
        this.yspeed = random(-10,10)
        this.shine = 1
    }

    show(){
        fill(255)

        if ((this.x > windowWidth) || (this.x < 0)){
            this.xspeed *= -1
            this.shine = 4
            collide = true
        }
        if ((this.y > windowHeight) || (this.y < 0)){
            this.yspeed *= -1
            this.shine = 4
            collide = true
        }

        if (this.shine > 1){
            this.shine -= 0.1

        }


        this.x += this.xspeed
        this.y += this.yspeed
        circle(this.x, this.y, 10 * this.shine)
    }

}
let dots = []


function setup(){
    createCanvas(windowWidth, windowHeight)
    for (var i = 0; i < 10; i++){
        d = new CreateDot()
        dots.push(d)
    }
}

function draw(){
    background(255)
    for (var i = 0; i < dots.length; i++){
        dots[i].show()

        line(dots[i].pos.x,dots[i].pos.y,dots[((i+1) % dots.length)].pos.x,dots[((i+1) % dots.length)].pos.y)
    }
}


class CreateDot{
    constructor(){
        this.pos = createVector(random(0, windowWidth),
            random(0, windowHeight))

    }

    show(){
        circle(this.pos.x, this.pos.y, 10)

    }
}

function mouseDragged(){
    for (var i = 0; i < dots.length; i++){
        distance = dist(dots[i].pos.x, dots[i].pos.y, mouseX, mouseY )
        if (distance < 10){
            dots[i].pos.x = mouseX
            dots[i].pos.y = mouseY
        }
    }




}
let Timer = 0;
let BlockArray = []
let blockColour = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(30)
}

function draw() {
    background(0);
    stroke(100)
    fill(0)
    for (i = 0; i < windowWidth; i += 30){
        for (j = 0; j < windowHeight; j += 30)
            rect(i, j, 30)
    }

    Timer ++
    if (Timer > 20){
        Timer = 0;
        BlockArray = []
        blockColour = [random(0, 255),random(0, 255),random(0, 255)]
        for (i = 0; i < 20; i++){
            r = new randomBlock(blockColour)
            BlockArray.push(r)
            console.log(BlockArray)
        }
    }
    for (i = 0; i < BlockArray.length; i++){
        BlockArray[i].show()
    }


}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

class randomBlock{

    constructor(BlockColour){
        this.x = round(random(0, windowWidth) / 30) * 30
        this.y = round(random(0, windowHeight) / 30) * 30
        this.col = BlockColour
    }
    show(){
        fill(this.col)
        rect(this.x, this.y, 30)

    }
}
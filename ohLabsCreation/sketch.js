let Timer = 0;
let BlockArray = []
let blockColour = []


function setup() {
    createCanvas(windowWidth, windowHeight)
    grid = createGraphics(windowWidth, windowHeight)
    createInitGrid()



}

function draw() {
    background(0);
    stroke(100)
    fill(0)

    image(grid,0,0)


    Timer ++
    if (Timer > random(0,100)){
        Timer = 0;
        BlockArray = []
        blockColour = [random(0, 255),random(0, 255),random(0, 255)]
        for (i = 0; i < 40; i++){
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
    grid.resizeCanvas(windowWidth, windowHeight)
    createInitGrid()
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

function createInitGrid(){
    for (i = 0; i < windowWidth; i += 30){
        for (j = 0; j < windowHeight; j += 30)
            grid.rect(i, j, 30)
    }
}


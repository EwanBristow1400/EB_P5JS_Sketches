
const sketches =
    [{ name: "3D Cube Selection", path: "3D_Cube_Selection/index.html" },
        { name: "Asciify Webcam", path: "Asciify_webcam/index.html" },
        { name: "Bezier Fun", path: "Bezier_Fun/index.html" },
        { name: "Blood Vessel Thing", path: "BloodVesselThing/index.html" },
        { name: "Blurred Squares", path: "BlurredSquares/index.html" },
        { name: "Bouncy Ball", path: "BouncyBall/index.html" },
        { name: "Circular Grid", path: "CircularGrid/index.html" },
        { name: "EB Website Tests", path: "EB_Website_Tests/index.html" },
        { name: "Feedback", path: "Feedback/index.html" },
        { name: "Hand Tracking", path: "HandTracking/index.html" },
        { name: "Innovation Practice Ryoji Ikeda", path: "Innovation_Practice_Ryoji_Ikeda/index.html" },
        { name: "Live Radios", path: "Live_Radios/index.html" },
        { name: "Meta Ball Blobs", path: "MetaBallBlobs/index.html" },
        { name: "Meta Balls", path: "MetaBalls/index.html" },
        { name: "Moving Ascii Text", path: "MovingAsciiText/index.html" },
        { name: "Noise Tests Abstract", path: "Noise_Tests_Abstract/index.html" },
        { name: "OBJ To Points", path: "OBJ_To_Points/index.html" },
        { name: "Sand Physics (Matter.js)", path: "SandPhysics(Matter.js)/index.html" },
        { name: "Throwable Square", path: "ThrowableSquare/index.html" },
        { name: "Tree Generation", path: "Tree_Generation/index.html" },
        { name: "UMAP Tests", path: "UMAP_TESTS/index.html" },
        { name: "Website Fetch", path: "Website_Fetch/index.html" },
        { name: "Weird Envelope Tests", path: "WeirdEnvelopeTests/index.html" }
];

let FakeButtonArray = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(name in sketches){
        b = new FakeButton(name)
        FakeButtonArray.push(b)

        console.log(b)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(11, 13, 16);
    for(let i = 0; i < sketches.length; i++){
        FakeButtonArray[i].show()
        mdistance = dist(mouseX, mouseY, FakeButtonArray[i].positionx,FakeButtonArray[i].positiony )


        if (mdistance < 25){
            FakeButtonArray[i].fill = 255;
        }
        else{
            FakeButtonArray[i].fill = 0
        }

        FakeButtonArray[i].size = constrain(mdistance,50,100)
    }
}
function mousePressed(){
    for(let i = 0; i < sketches.length; i++){
        FakeButtonArray[i].click()
    }
}
class FakeButton{
    constructor(name){
        this.positionx = (name) * windowWidth/sketches.length
        this.positiony = windowWidth/2
        this.fill = 255
        this.index = name
        this.size = 50
    }
    click(){
        this.mdistance = dist(mouseX, mouseY, this.positionx, this.positiony)
        if (this.mdistance < 25){
            console.log("CLICKED: " + this.positiony)
            this.fill = 0
            console.log(this.index)
            window.location.href = sketches[this.index].path;
        }
    }
    show(){
        fill(this.fill)
        circle(this.positionx, this.positiony, this.size)
    }
}

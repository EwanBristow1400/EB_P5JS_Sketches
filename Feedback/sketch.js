let pg, swap;

function setup() {
    createCanvas(windowWidth, windowHeight);

    frameRate(90)

    // this will hold our main graphic
    pg = createGraphics(windowWidth, windowHeight, WEBGL);
    // this will hold the previous frame
    swap = createGraphics(windowWidth, windowHeight, WEBGL);
    swap.drawingContext.filter = 'blur(100px)';

}

function draw() {
    // draw the previous frame
    pg.texture(swap);
    pg.noStroke();
    pg.plane(width, height);


    pg.noFill()
    pg.strokeWeight(3)
    pg.stroke(0,0,255)

    size1 = noise(frameCount*0.1) * 300
    size2 = noise(frameCount*0.3) * 300

    pg.ellipse(0,0,size1,size2)

    swap.push();
    swap.scale(1.04, 1.04);
    swap.texture(pg);
    swap.noStroke();
    swap.plane(width, height);
    swap.pop();


    swap.fill(0, 30);
    swap.rect(-width / 2, -height / 2, width, height);

    image(swap, 0, 0);
}
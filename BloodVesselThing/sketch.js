let n;
let narray = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    n = new RandomNoise();
    narray.push(n);
}

function draw() {
    translate(windowWidth/2, windowHeight/2);


    for (let i = narray.length - 1; i >= 0; i--) {
        let current = narray[i];

        if (current.parent) {
            stroke(255, 100);
            line(current.x, current.y, current.parent.x, current.parent.y);
        }

        current.show();
    }
}

class RandomNoise {
    constructor(x = 0, y = 0, s = 5, parent = null) {
        this.x = x;
        this.y = y;
        this.s = s;
        fill(255);
        noStroke();
        this.xoffset = random(0, 0.1);
        this.yoffset = random(0, 0.1);
        this.splitstate = false;
        this.parent = parent;
    }

    show() {
        this.splitnum = noise(frameCount * 0.1);

        if (this.splitnum >= 0.85 && this.s > 2) {
            this.splitstate = true;
            let angle1 = random(0, TWO_PI);
            let angle2 = random(0, TWO_PI);

            narray.push(new RandomNoise(this.x + cos(angle1) * this.s, this.y + sin(angle1) * this.s, this.s * 0.9, this));
            narray.push(new RandomNoise(this.x + cos(angle2) * this.s, this.y + sin(angle2) * this.s, this.s * 0.9, this));
        }

        this.x += (noise(frameCount * this.xoffset) * 2 - 1);
        this.y += (noise(frameCount * this.yoffset) * 2 - 1);

        ellipse(this.x, this.y, this.s, this.s);
    }
}
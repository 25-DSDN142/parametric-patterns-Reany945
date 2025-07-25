let characterSize = 80;
let characterStrokeWeight = 2;

let patternDensity = 1.0;

let characterBodyHue = 220;
let characterBodySaturation = 70;
let characterBodyBrightness = 80;

let eyeHue = 0;
let eyeSaturation = 0;
let eyeBrightness = 100;

let mouthHue = 0;
let mouthSaturation = 100;
let mouthBrightness = 100;

let backgroundHue = 200;
let backgroundSaturation = 80;
let backgroundBrightness = 70;

let mouthStyle = 0;

let earSizeFactor = 0.5;


function setup() {
    createCanvas(2000, 1000);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    noLoop();
}

function draw() {
    background(backgroundHue, backgroundSaturation, backgroundBrightness);

    stroke(characterBodyHue, characterBodySaturation, characterBodyBrightness * 0.7);
    strokeWeight(characterStrokeWeight);

    let tileWidth = characterSize * patternDensity * 2.5;
    let tileHeight = characterSize * patternDensity * 2.5;

    for (let x = 0; x < width; x += tileWidth) {
        for (let y = 0; y < height; y += tileHeight) {
            push();

            translate(x + tileWidth / 2, y + tileHeight / 2);

            my_symbol(characterSize);

            pop();
        }
    }
}


function my_symbol(size) {
    let scaleFactor = size / 100;
    scale(scaleFactor);

    fill(characterBodyHue, characterBodySaturation, characterBodyBrightness);
    ellipse(0, 0, 120, 60);

    fill(characterBodyHue, characterBodySaturation, characterBodyBrightness);
    triangle(60, 0, 100, -40, 90, 0);
    triangle(60, 0, 90, 20, 90, 0);

    fill(characterBodyHue, characterBodySaturation, characterBodyBrightness);
    triangle(-10, 30 * earSizeFactor, -22, 50 * earSizeFactor, 2, 50 * earSizeFactor);

    fill(characterBodyHue, characterBodySaturation, characterBodyBrightness);
    triangle(-60, 0, -100, -40 * earSizeFactor, -90, 0);
    triangle(-60, 0, -90, 20 * earSizeFactor, -90, 0);

    fill(mouthHue, mouthSaturation, mouthBrightness);
    if (mouthStyle === 0) {
        arc(-20, 0, 20, 20, 0, PI, CHORD);
    } else if (mouthStyle === 1) {
        rectMode(CENTER);
        rect(-20, 0, 15, 5);
    } else {
        arc(-20, 0, 20, 20, 0, PI, CHORD);
    }

    fill(eyeHue, eyeSaturation, eyeBrightness);
    ellipse(20, -20, 20, 20);
    fill(0);
    ellipse(20, -20, 10, 10);

    fill(eyeHue, eyeSaturation, eyeBrightness);
    ellipse(-35, -15, 15, 15);
    fill(0);
    ellipse(-35, -15, 6, 6);
}

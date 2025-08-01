let Role = 40; // Size of the character
let lineThickness = 0.5; // Thickness of the lines
        
let mainColorR = 100;   
let mainColorG = 255;
let mainColorB = 100;

let densityFactor = 0.5; // Density of the pattern, 0.7 for medium density

let eyeColorR = 255;
let eyeColorG = 255;
let eyeColorB = 255;

let mouthColorR = 0;
let mouthColorG = 0;
let mouthColorB = 255;

let backgroundColorR = 50;
let backgroundColorG = 76;
let backgroundColorB = 168;

let characterStyle = 0; // 0 for arc mouth, 1 for rectangle mouth, 

let earScaleFactor = 0.7;
let eyeSizeFactor = 1;

function setup() {
createCanvas(2000, 1000);
colorMode(RGB, 255);
noStroke();
noLoop();
}

function draw() {
background(backgroundColorR, backgroundColorG, backgroundColorB);

stroke(mainColorR - 50, mainColorG - 50, mainColorB - 50);
strokeWeight(lineThickness);

let tileWidth = Role * densityFactor * 2.5;
let tileHeight = Role * densityFactor * 2.5;

for (let x = 0; x < width; x += tileWidth) {
for (let y = 0; y < height; y += tileHeight) {
push();
translate(x + tileWidth / 2, y + tileHeight / 2);
drawMyCharacter(Role);
pop();
}
}
}

function drawMyCharacter(size) {
let scaleFactor = size / 100;
scale(scaleFactor);

fill(mainColorR, mainColorG, mainColorB);
ellipse(0, 0, 120, 60);

fill(mainColorR, mainColorG, mainColorB);
triangle(60, 0, 100, -40, 90, 0);
triangle(60, 0, 90, 20, 90, 0);

fill(mainColorR, mainColorG, mainColorB);
triangle(-10, 30 * earScaleFactor, -22, 50 * earScaleFactor, 2, 50 * earScaleFactor);

fill(mainColorR, mainColorG, mainColorB);
triangle(-60, 0, -100, -40 * earScaleFactor, -90, 0);
triangle(-60, 0, -90, 20 * earScaleFactor, -90, 0);

fill(mouthColorR, mouthColorG, mouthColorB);
if (characterStyle === 0) {
arc(-20, 0, 20, 20, 0, PI, CHORD);
} else if (characterStyle === 1) {
rectMode(CENTER);
rect(-20, 0, 15, 5);
} else {
arc(-20, 0, 20, 20, 0, PI, CHORD);
}

fill(eyeColorR, eyeColorG, eyeColorB);
ellipse(20, -20, 20 * eyeSizeFactor, 20 * eyeSizeFactor);
fill(0);
ellipse(20, -20, 10 * eyeSizeFactor, 10 * eyeSizeFactor);

fill(eyeColorR, eyeColorG, eyeColorB);
ellipse(-35, -15, 15 * eyeSizeFactor, 15 * eyeSizeFactor);
fill(0);
ellipse(-35, -15, 6 * eyeSizeFactor, 6 * eyeSizeFactor);
}
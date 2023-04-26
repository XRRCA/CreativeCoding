let mic;

function setup() {
    createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    let vol = mic.getLevel();
    background(220);

    const displayVol = (Math.round(vol * 100)/100).toFixed(2);
    fill('red');
    textAlign('center');
    text('VU', 100, 20);
    text('VU', 300, 20);
    text(displayVol, 100, 40);
    text(displayVol, 300, 40);
    
    rect(75, 400, 50, -vol*400);
    
    stroke('red');
    line(300,400,300+100*sin(vol*PI-HALF_PI), 400-100*cos(vol*PI-HALF_PI));
}

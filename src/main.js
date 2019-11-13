estado = 0;
playerRunAnime = [];

function preload(){
    bgImage = loadImage("../img/street.jpg");
    fonte = loadFont("../img/Pixelmania.ttf");
    backImg = loadImage("../img/back.png");
    
    obstaculoImg = loadImage("../img/obstaculo.png");

    let a = ["000", "001", "002", "003", "004", "005", "006", "007", "008", "009"];

    for (let i = 0; i < a.length; i++) {
        let img = loadImage("../img/run/Run__"+a[i]+".png");
        playerRunAnime.push(img);

        // img = loadImage("images/jump/Jump__"+a[i]+".png");
        // playerJumpAnime.push(img);
    }
    
}

function mouseClicked(){
    if(estado == 0){
        if (mouseX > 270 && mouseX < 470 && mouseY > 230 && mouseY < 270) {
            estado = 1;
        }
        if (mouseX > 250 && mouseX < 480 && mouseY > 280 && mouseY < 320) {
            estado = 2;
        }
    }
    if (estado == 2) {
        if (mouseX > 315 && mouseX < 375 && mouseY > 297 && mouseY < 362) {
            estado = 0;
        }
    }
}

function keyPressed() {
    if (key == ' ' || keyCode == 38) {
        game.jogador.pular();
    }
}

function setup(){
    createCanvas(700, 400);
    menu = new Menu();
    game = new Game();
}

function update(){
    
}

function draw(){
    clear();
    if (estado == 0) {
        menu.show();

        if (mouseX > 270 && mouseX < 470 && mouseY > 230 && mouseY < 270 || mouseX > 250 && mouseX < 480 && mouseY > 280 && mouseY < 320) {
            cursor('pointer');
        }else{
            cursor('default');
        }
    }
    if(estado == 1) {
        cursor('default');
        game.start();
        fill(255);
        textSize(25);
        text(menu.txtRecorde, width-220, 25);
    }
    if(estado == 2) {
        menu.showCreditos();

        if (mouseX > 315 && mouseX < 375 && mouseY > 297 && mouseY < 362) {
            cursor('pointer');
        }else{
            cursor('default');
        }
    }
    if (estado == 3) {
        menu.record = jogador.pontos;
    }
}
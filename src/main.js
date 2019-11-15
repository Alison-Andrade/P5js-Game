estado = 0;
playerRunAnime = [];
recorde = 0;

function preload(){
    bgImage = loadImage("../img/street.jpg");
    fonte = loadFont("../img/Pixelmania.ttf");
    backImg = loadImage("../img/back.png");
    restartImg = loadImage("../img/reset.png")
    
    obstaculoImg = loadImage("../img/obstaculo.png");

    let a = ["000", "001", "002", "003", "004", "005", "006", "007", "008", "009"];

    for (let i = 0; i < a.length; i++) {
        let img = loadImage("../img/run/Run__"+a[i]+".png");
        playerRunAnime.push(img);
    }

    jumpSound = loadSound("../sound/jump.mp3");
    music = loadSound("../sound/music.ogg");
    
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
    if (estado == 4) {
        if (mouseX > 266 && mouseX < 325 && mouseY > 300 && mouseY < 360) {
            estado = 1;
        }
        if (mouseX > 414 && mouseX < 475 && mouseY > 300 && mouseY < 360) {
            estado = 0;
        }
    }
}

function keyPressed() {
    if (estado == 1) {
        if (key == ' ' || keyCode == 38) {
            jumpSound.play();
            game.jogador.pular();
        }
    }
}

function setup(){
    createCanvas(700, 400);
    menu = new Menu();
    game = new Game();
    music.play();
}

function update(){
}

function draw(){
    menu.txtRecorde = "RECORDE: " + recorde;
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
        if(game.jogador.pontos > recorde){
            recorde = floor(game.jogador.pontos);
            textSize(25);
            fill(255, 150, 100);
            text("Novo recorde :D", 270, 250);
        }
        estado = 4;
    }
    if (estado == 4) {
        game = new Game();

        if ((mouseX > 266 && mouseX < 325 || mouseX > 414 && mouseX < 475) && mouseY > 300 && mouseY < 360) {
            cursor('pointer');
        }else{
            cursor('default');
        }
    }
}
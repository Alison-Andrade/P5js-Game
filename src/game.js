class Game{
    constructor(){
        this.jogador = new Player();
        this.x1 = 0;
        this.x2 = width;
        this.scrollBg = 4;
        this.obstaculos = [];
    }

    bgControll(){
        image(bgImage, this.x1, 0, width+4, height);
        image(bgImage, this.x2, 0, width+4, height);

        this.x1 -= this.scrollBg;
        this.x2 -= this.scrollBg;

        if (this.x1 < -width){
            this.x1 = width;
        }
        if (this.x2 < -width){
            this.x2 = width;
        }
    }

    start(){
        if (this.jogador.estaVivo()) {
            this.bgControll();

            if(random(1) < 0.02){
                if(this.obstaculos.length < 1){
                    this.obstaculos.push(new Obstaculo(this.scrollBg));
                }else if (this.obstaculos[this.obstaculos.length-1].pos.x < 470) {
                    this.obstaculos.push(new Obstaculo(this.scrollBg));
                    this.scrollBg += 0.2;
                    for (let o of this.obstaculos) {
                        o.velocidade += 0.2;
                    }
                }
            }
    
            for (let o of this.obstaculos) {
                o.update();
                o.draw();
                if (this.jogador.colidir(o)) {
                    this.jogador.vidas--;
                }
            }
            
            this.jogador.mover();
            this.jogador.draw();
        }else{
            this.gameOver()
        }
    }

    gameOver(){
        
        estado = 3;
        textSize(50);
        text("GAME OVER", width/4+30, height/2);

        // fill(222);
        // rectMode(CORNER)
        // rect(415, 300, 60, 60);
        // rect(265, 300, 60, 60);
        image(backImg, 420, 300, 50, 60);
        image(restartImg, 260, 300, 70, 60);
    }
}

class Menu{
    constructor(){
        this.nomeJogo = "STREET\n     RUN";
        
        this.txtRecorde = "RECORDE: " + recorde;
    }

    btnIniciar(){
        this.txtIniciar = "INICIAR";
        // noFill();
        // stroke(222)
        // fill(100, 255, 0);
        // rect(270, 230, 200, 40);
        fill(255);
        textSize(20);
        text(this.txtIniciar, 280, 255);
    }

    btnCreditos(){
        this.txtCreditos = "CREDITOS";
        // fill(255, 100, 255);
        // rect(250, 280, 230, 40);
        fill(255);
        textSize(20);
        text(this.txtCreditos, 250, 310);
    }

    show(){
        image(bgImage, 0, 0, width, height);
        fill(255);
        textSize(15);
        text(this.txtRecorde, width-260, 25);

        textFont(fonte);
        textSize(30);
        text(this.nomeJogo, 230, 150);

        this.btnIniciar();
        this.btnCreditos();
        
    }

    showCreditos(){
        textFont(fonte);
        image(bgImage, 0, 0, width, height);
        fill(255);
        textSize(15);
        text("POR:", 100, 120);
        text("DAVYSON", 150, 170);
        text("LUCAS", 150, 200);

        // fill(222);
        // rect(315, 297, 60, 65);
        image(backImg, 320, 300, 50, 60);
    }
}
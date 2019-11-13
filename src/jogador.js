class Player{

    constructor(){
        this.tamanho = 50;
        this.pos = createVector(this.tamanho*2, height/2);
        this.spriteSizeL = 363;
        this.spriteSizeA = 458;
        

        this.velPulo = 0;
        this.gravidade = 1;

        this.pontos = 0;
        this.vidas = 1;
        
        this.ui = "Pontos: " + this.pontos.toString();

        this.spriteSheet;

        this.spriteSheet = new PlayerSprite(playerRunAnime, 0.5, this.pos.x-(this.tamanho/2), this.pos.y-(this.tamanho),this.tamanho, this.tamanho*2 , this.spriteSizeL, this.spriteSizeA);
    }

    estaVivo(){
        return this.vidas > 0 ? true : false;
    }

    pular(){
        if(!this.caindo()){
            this.velPulo = -18;
        }
    }

    mover() {

        if(this.estaVivo()){

            this.pos.y += this.velPulo;
            this.updateGravidade();

        }
        
    }

    gameOver(){
        textSize(50);
        fill(255);
        text("GAME OVER", 250, 200);
    }

    updateGravidade(){
        this.velPulo += this.gravidade;
        this.pos.y = constrain(this.pos.y, 0, height/2);
    }

    caindo(){
        return this.pos.y != height/2 ? true : false;
    }
    
    colidir(obstaculo){
        return collideRectCircle(obstaculo.pos.x+obstaculo.tamanho/2+20, obstaculo.pos.y+20, 25, 60,this.pos.x,this.pos.y,this.tamanho);
    }

    draw(){
        
        noFill();
        ellipseMode(CENTER);
        let e = ellipse(this.pos.x, this.pos.y-((this.tamanho/2)-15), this.tamanho, this.tamanho*2);

        this.spriteSheet.x = this.pos.x-(this.tamanho/2);
        this.spriteSheet.y = this.pos.y-(this.tamanho);
        this.spriteSheet.draw();
        this.spriteSheet.animar();

        this.pontos += 0.05;
        this.ui = "Pontos: " + floor(this.pontos);
            
        textSize(25);
        fill(255);
        textFont('verdana');
        text(this.ui, 20, 25);
    }
}

class PlayerSprite{
    constructor(animacao, velocidade, x, y, dw, dh, sw, sh){
        this.animacao = animacao;
        this.x = x;
        this.y = y;
        this.dw = dw;
        this.dh = dh;
        this.sw = sw;
        this.sh = sh;
        this.len = this.animacao.length;
        this.velocidade = velocidade;
        this.index = 0;
    }

    draw(){
        let index = floor(this.index) % this.len;
        image(this.animacao[index], this.x, this.y, this.dw, this.dh, 0, 0, this.sw, this.sh);
    }

    animar(){
        this.index += this.velocidade;
    }
}
class Obstaculo{
    constructor(velocidade){
        this.tamanho = 100;
        this.pos = createVector(width, height/2);
        this.velocidade = velocidade;
    }

    update(){
        this.mover();
    }

    mover() {
        this.pos.x -= this.velocidade;
    }

    draw() {
        
        image(obstaculoImg, this.pos.x, this.pos.y-this.tamanho/2, this.tamanho, this.tamanho+20);
        
        noFill();
        noStroke();
        rectMode(CENTER);
        rect(this.pos.x+this.tamanho/2+20, this.pos.y+20, 25, 60);
    }
}
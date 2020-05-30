class NumberBox {
    constructor(color, number){
        this.color = color;
        this.number = number;    
    }

    createNumberBox = () => {
        let numberBox = `<div class='col-sm-1'><button class="numberBox clickableBox noX ${this.color} end" data-type=${this.color} data-number=${this.number}>${this.number}</button></div>`
        return numberBox;
    }

}
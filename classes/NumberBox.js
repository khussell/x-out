class NumberBox {
    constructor(color, number){
        this.color = color;
        this.number = number;    
    }

    createNumberBox = () => {
        let numberBox = `<button class="numberBox clickableBox col-sm-1 noX ${this.color} end" style="color: ${this.color}" data-type=${this.color} data-number=${this.number}>${this.number}</button>`
        return numberBox;
    }

}
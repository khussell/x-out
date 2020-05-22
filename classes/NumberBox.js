class NumberBox {
    constructor(color, number){
        this.color = color;
        this.number = number;
        
    }

    createNumberBox = () => {
        let numberBox = `<span class="numberBox" style="color: ${this.color}" data-color=${this.color} data-number=${this.number}>${this.number}</span>`
        return numberBox;
    }
}
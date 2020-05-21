class NumberBox {
    constructor(color, number){
        this.color = color;
        this.number = number;
        
    }

    createNumberBox = () => {
        let numberBox = `<span class="numberBox" data-color=${this.color} data-number=${this.number}>${this.number}</span>`
        return numberBox;
    }
}
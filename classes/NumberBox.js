class NumberBox {
    constructor(color, number){
        this.color = color;
        this.number = number;
        
    }

    createNumberBox = () => {
        let numberBox = `<button class="numberBox" style="color: ${this.color}" data-color=${this.color} data-number=${this.number}>${this.number}</button>`
        return numberBox;
    }
}
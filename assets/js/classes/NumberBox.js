class NumberBox {
    constructor(color, number){
        this.color = color;
        this.number = number; 
        this.disableName = "disable" + color  
        this.isLast = "notLast";
        if (color == 'red' || color == 'yellow'){
            if (number == 12){
                this.isLast = 'isLast';
            }
        }

        if (color == 'green' || color == 'blue'){
            if (number == 2){
                this.isLast = 'isLast';
            }
        }
    }

    createNumberBox = () => {
        let numberBox = `<div class='col-sm-1'><button class="numberBox ${this.isLast} clickableBox noX ${this.disableName} ${this.color} end" data-type=${this.color} data-number=${this.number}>${this.number}</button></div>`
        return numberBox;
    }

}
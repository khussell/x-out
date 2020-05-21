class NumberRow {
    constructor(color) {
      this.color = color;
      this.name = color + "Row";
      
    }
    displayNumberRow = () => {
        let numberRow = $(`<p class=${this.name}></p>`)
        for(var i = 1; i<=12; i++) {
            let numberBox = new NumberBox(this.color, i);
            let numberBoxHTML = numberBox.createNumberBox();
            numberRow.append(numberBoxHTML);
        }
        return numberRow;
    }
  }
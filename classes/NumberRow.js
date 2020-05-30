class NumberRow {
    constructor(color) {
      this.color = color;
      this.name = color + "Row";
      this.xBoxName = color + 'X';
      this.colorNumberRow = color + 'NumberRow'
      
    }
    displayNumberRow = (color) => {
        let entireNumberRow = $(`<div class='row numberRow align-items-center ${this.colorNumberRow}'></div>`)
        let numberBoxAndCloseColumn = $(`<div class='col-11'></div>`)
        let xboxColumn = $(`<div class='col-1'></div>`)
        let numberBoxes = $(`<span class='${this.name} row'></span>`)
        numberBoxAndCloseColumn.append(numberBoxes)
        if (color === 'red' || color === 'yellow'){
            for(var i = 2; i<=12; i++) {
                let numberForBox = i
                let numberBox = new NumberBox(this.color, numberForBox);
                let numberBoxHTML = numberBox.createNumberBox();  
                numberBoxes.append(numberBoxHTML);
            }
        } else {
            for(var i = 12; i>=2; i--) {
              let numberForBox = i
              let numberBox = new NumberBox(this.color, numberForBox);
              let numberBoxHTML = numberBox.createNumberBox();  
              numberBoxes.append(numberBoxHTML);
            }
        }
        let closeBox = new CloseBox(color);
        numberBoxes.append(closeBox.html)
        let xbox = new Xbox(this.xBoxName);
       
        let xBoxRow = $(`<div class='row'></div>`)
        xBoxRow.append(xbox.html);
        xboxColumn.append(xBoxRow)
        entireNumberRow.append(numberBoxAndCloseColumn, xboxColumn)
        return entireNumberRow;
    }
  }
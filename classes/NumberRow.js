class NumberRow {
    constructor(color) {
      this.color = color;
      this.name = color + "Row";
      
    }
    displayNumberRow = () => {
        let entireNumberRow = $(`<div class='row'></div>`)
        let numberBoxColumn = $(`<div class='col-10'></div>`)
        let closeAndXboxColumn = $(`<div class='col-2'></div>`)
        let numberBoxes = $(`<span class='${this.name} row'></span>`)
        numberBoxColumn.append(numberBoxes)
        for(var i = 1; i<=12; i++) {
            let numberForBox = i
            let numberBox = new NumberBox(this.color, numberForBox);
            let numberBoxHTML = numberBox.createNumberBox();  
            numberBoxes.append(numberBoxHTML);
        }
        let closeBox = new CloseBox();
        let xbox = new Xbox();
       
        let closeAndXBox = $(`<div class='row'></div>`)
        closeAndXBox.append(closeBox.html, xbox.html);
        closeAndXboxColumn.append(closeAndXBox)
        entireNumberRow.append(numberBoxColumn, closeAndXboxColumn)
        return entireNumberRow;
    }
  }
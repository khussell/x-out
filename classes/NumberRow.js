class NumberRow {
    constructor(color) {
      this.color = color;
      this.name = color + "Row";
      
    }
    displayNumberRow = () => {
        let entireNumberRow = $(`<p></p>`)
        let justNumberBoxesAndCloseBox = $(`<span class=${this.name}></span>`)
        for(var i = 1; i<=12; i++) {
            let numberForBox = i
            let numberBox = new NumberBox(this.color, numberForBox);
            let numberBoxHTML = numberBox.createNumberBox();  
            justNumberBoxesAndCloseBox.append(numberBoxHTML);
        }
        let closeBox = new CloseBox();
        justNumberBoxesAndCloseBox.append(closeBox.html);
        let xbox = new Xbox();
        entireNumberRow.append(justNumberBoxesAndCloseBox, xbox.html)
        return entireNumberRow;
    }
  }
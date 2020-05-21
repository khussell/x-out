class AllRows {
    constructor() {
       
    }
    displayAllRows = () => {
        let redRow = new NumberRow('red');
        let redRowDisplay = redRow.displayNumberRow();
        let yellowRow = new NumberRow('yellow');
        let yellowRowDisplay = yellowRow.displayNumberRow();
        let greenRow = new NumberRow('green');
        let greenRowDisplay = greenRow.displayNumberRow();
        let blueRow = new NumberRow('blue');
        let blueRowDisplay = blueRow.displayNumberRow();
        $('.allRows').append(redRowDisplay, yellowRowDisplay, greenRowDisplay, blueRowDisplay);
    }
}
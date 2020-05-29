class AllRows {
    constructor() {
       
    }
    displayAllRows = () => {
        let redRow = new NumberRow('red');
        let redRowDisplay = redRow.displayNumberRow('red');
        let yellowRow = new NumberRow('yellow');
        let yellowRowDisplay = yellowRow.displayNumberRow('yellow');
        let greenRow = new NumberRow('green');
        let greenRowDisplay = greenRow.displayNumberRow('green');
        let blueRow = new NumberRow('blue');
        let blueRowDisplay = blueRow.displayNumberRow('blue');
        $('.allRows').append(redRowDisplay, yellowRowDisplay, greenRowDisplay, blueRowDisplay);
    }
}
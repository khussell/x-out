class XBoxController {
    constructor() {
        this.howManyHaveXs = 0; 
        this.whichColor = ['', 'red', 'yellow', 'green', 'blue'];  
    }

    addX = () => {
        if (this.howManyHaveXs === 4) {
            return;
        }
        this.howManyHaveXs++;
        let whichBoxColor = this.whichColor[this.howManyHaveXs];
        let xBox = $("body").find(`[data-name='${whichBoxColor + 'X'}']`);
        xBox.text('X');
    }

    removeX = () => {
        if (this.howManyHaveXs === 0) {
            return;
        }
        let whichBoxColor = this.whichColor[this.howManyHaveXs];
        let xBox = $("body").find(`[data-name='${whichBoxColor + 'X'}']`);
        xBox.text('');
        this.howManyHaveXs--;
    }
}
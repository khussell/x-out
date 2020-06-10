class ScoreCalculator {
    constructor(){
        this.redXs = 0;
        this.yellowXs = 0;
        this.greenXs = 0;
        this.blueXs = 0;
        this.xAmount = 0;
        this.scoresForHowManyXs = [0,1,3,6,10,15,21,28,36,45,55,66,78];
        this.totalScore = 0;
        this.howManyCloseOuts = 0;
    }

    addToScore = (type) => {
        switch(type) {
            case 'red':
                this.redXs += 1
                break;
            case 'yellow':
                this.yellowXs += 1
                break;
            case 'green':
                this.greenXs += 1
                break;
            case 'blue':
                this.blueXs += 1
                break;
        }
    }

    removeFromScore = (type) => {
        switch(type) {
            case 'red':
                this.redXs -= 1
                break;
            case 'yellow':
                this.yellowXs -= 1
                break;
            case 'green':
                this.greenXs -= 1
                break;
            case 'blue':
                this.blueXs -= 1
                break;
        }
    }

    addX = () => {
        if(this.xAmount === 4){
            return;
        }
        this.xAmount++;
    }

    removeX = () => {
        if(this.xAmount === 0){
            return;
        }
        this.xAmount--;
    }

    calculateColorScore = (type) => {
        switch(type) {
            case 'red':
                return this.scoresForHowManyXs[this.redXs]
            case 'yellow':
                return this.scoresForHowManyXs[this.yellowXs]
            case 'green':
                return this.scoresForHowManyXs[this.greenXs]
            case 'blue':
                return this.scoresForHowManyXs[this.blueXs]
            case 'x':
                return this.xAmount * 5
        }
    }
    

    calculateScore = () => {
        let redScore = this.scoresForHowManyXs[this.redXs];
        let yellowScore = this.scoresForHowManyXs[this.yellowXs];
        let greenScore = this.scoresForHowManyXs[this.greenXs];
        let blueScore = this.scoresForHowManyXs[this.blueXs];
        let xScore =  this.xAmount * 5 ;

        let totalScore = redScore + yellowScore + greenScore + blueScore - xScore;

        return totalScore;
    }

    checkForValidCloseOut = (color) => {
        let isValid = false;
        switch(color) {
            case 'red':
                if(this.redXs === 5){
                    console.log(this.redXs)
                    isValid = true;
                }
                break;
            case 'yellow':
                if(this.yellowXs === 5){
                    isValid = true;
                }
                break;
            case 'green':
                if(this.greenXs === 5){
                    isValid = true;
                }
                break;
            case 'blue':
                if(this.blueXs === 5){
                    isValid = true;
                }
                break;
            case 'x':
                return false;
        }
        return isValid;
    }

    checkIfLastCloseOut = () => {

    }
}
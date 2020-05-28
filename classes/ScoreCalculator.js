class ScoreCalculator {
    constructor(){
        this.redXs = 0;
        this.yellowXs = 0;
        this.greenXs = 0;
        this.blueXs = 0;
        this.xAmount = 0;
        this.scoresForHowManyXs = [0,1,3,6,10,15,21,28,36,45,55,66,78];
        this.totalScore = 0;
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
            case 'x':
                this.xAmount += 1
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
            case 'x':
                break;
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
}
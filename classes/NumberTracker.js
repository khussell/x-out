class NumberTracker {
    constructor(){
        this.redNumber = 2;
        this.yellowNumber = 2;
        this.greenNumber = 12;
        this.blueNumber = 12;
    }

    changeNumber = (color, number) => {
        switch(color) {
            case 'x':
                return;
            case 'red':
                this.redNumber = number;
                break;
            case 'yellow':
                this.yellowNumber = number;
                break;
            case 'green':
                this.greenNumber = number;
                break;
            case 'blue':
                this.blueNumber = number;
                break;
        }
    }

    checkNumberIfValid = (color, number) => {
        switch(color) {
            case 'x':
                return true;
            case 'red':  
                if(number < this.redNumber){
                    return false;
                }
                break;
            case 'yellow':
                if(number < this.yellowNumber){
                    return false;
                }
                break;
            case 'green':
                if(number > this.greenNumber){
                    return false;
                }
                break;
            case 'blue':
                if(number > this.blueNumber){
                    return false;
                }
                break;
        }
        return true;
    }

   
}
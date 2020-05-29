class CloseBoxController {
    constructor() {
        this.howManyClosed = 0;
    }

    removeClose = () => {
        this.howManyClosed --;
    }

    closeOutColor = () => {
        if(this.howManyClosed === 1) {
            return;
        }
        this.howManyClosed ++;
        $('.open').attr('data-toggle', 'modal');
        $('.open').attr('data-target', '#endGame');
        
    }
}
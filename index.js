let allRows = new AllRows();

allRows.displayAllRows();

let scoreCalculator = new ScoreCalculator();
let xBoxController = new XBoxController();
let closeBoxController = new CloseBoxController();
let numberTracker = new NumberTracker();

$('body').on('click', '.addXBtn', function(event){
    xBoxController.addX();
    scoreCalculator.addX();
    console.log(scoreCalculator.xAmount)
})

$('body').on('click', '.xbox', function(event){
    xBoxController.removeX();
    scoreCalculator.removeX();
    console.log(scoreCalculator.xAmount)
})

$('body').on('click', '.clickableBox', function(event){
    let button = $(this)
    let type = button.attr('data-type')
    console.log(type)
    let number = parseInt(button.attr('data-number'))

    if (type === 'x' && scoreCalculator.xAmount === 4) {
        return;
    }

    if (button.hasClass('noX')){
        let isValid = numberTracker.checkNumberIfValid(type, number);
        if (button.hasClass('isLast')){
            let isValidClose = scoreCalculator.checkForValidCloseOut(type);
            if (!isValidClose) {
                return;
            }
        }
        if (isValid) {
            numberTracker.changeNumber(type, number);
            scoreCalculator.addToScore(type);
            button.text('X')
            button.removeClass('noX');
            button.addClass('hasX');
        } else {
            return;
        }
    } else {
        scoreCalculator.removeFromScore(type);
        button.removeClass('hasX');
        button.addClass('noX');
        button.text(number);
    }
    
})

$('body').on('click', '.endGame', function(event) {
    $('.end').prop('disabled', true);
    $('.redTotal').text(scoreCalculator.calculateColorScore('red')).css('color', 'black').css('font-size', '25px').css('text-align', 'center');
    $('.yellowTotal').text(scoreCalculator.calculateColorScore('yellow')).css('color', 'black').css('font-size', '25px').css('text-align', 'center');
    $('.greenTotal').text(scoreCalculator.calculateColorScore('green')).css('color', 'black').css('font-size', '25px').css('text-align', 'center');
    $('.blueTotal').text(scoreCalculator.calculateColorScore('blue')).css('color', 'black').css('font-size', '25px').css('text-align', 'center');
    $('.xTotal').text(scoreCalculator.calculateColorScore('x')).css('color', 'black').css('font-size', '25px').css('text-align', 'center');
    $('.scoreTotal').text(scoreCalculator.calculateScore()).css('color', 'black').css('font-size', '25px').css('text-align', 'center');
})

$('body').on('click', '.closeBox', function(event) {
    let button = $(this); 
    let color = button.attr('data-color');
    let disableBtns = '.disable' + color;
    
    if (button.hasClass('closed') && closeBoxController.howManyClosed === 1){
        button.removeClass('closed').addClass('open')
        button.html('<svg class="bi bi-unlock" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.655 8H2.333c-.264 0-.398.068-.471.121a.73.73 0 0 0-.224.296 1.626 1.626 0 0 0-.138.59V14c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 0 0 .436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 0 0 .224-.296 1.627 1.627 0 0 0 .138-.59V9c0-.342-.076-.531-.14-.635a.658.658 0 0 0-.255-.237A1.122 1.122 0 0 0 9.655 8zm.012-1H2.333C.5 7 .5 9 .5 9v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2V9c0-2-1.833-2-1.833-2zM8.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/></svg>')
        $(disableBtns).prop('disabled', false);
        closeBoxController.removeClose();
    } else if (button.hasClass('open') && closeBoxController.howManyClosed === 0){
        button.removeClass('open').addClass('closed');
        button.html('<svg class="bi bi-lock-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect width="11" height="9" x="2.5" y="7" rx="2"/><path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/></svg>')
        $(disableBtns).prop('disabled', true);
        closeBoxController.closeOutColor();
    }
    console.log(closeBoxController.howManyClosed)
})






$('body').on('click', '.refresh', function(){
    window.location.reload();
})



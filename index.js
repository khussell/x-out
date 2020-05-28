let allRows = new AllRows();

allRows.displayAllRows();

let scoreCalculator = new ScoreCalculator();


$('body').on('click', '.clickableBox', function(event){
    let button = $(this)
    let type = button.attr('data-type')
    console.log(type)
    let number = parseInt(button.attr('data-number'))

    if (type === 'x' && scoreCalculator.xAmount === 4) {
        return;
    }

    if (button.hasClass('noX')){
        scoreCalculator.addToScore(type);
        button.text('X')
        button.removeClass('noX');
        button.addClass('hasX');
    } else {
        scoreCalculator.removeFromScore(type);
        button.removeClass('hasX');
        button.addClass('noX');
        button.text(number);
    }
    let score = scoreCalculator.calculateScore();
    console.log(score)
    
})



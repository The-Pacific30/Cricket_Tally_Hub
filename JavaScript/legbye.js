function lbClick()
{
    const maxOver = localStorage.getItem('maxOver')
    if(clickOvers<=maxOver && clickWickets<10){
    var bye = prompt("Hello Umpire This is legbye" , "1")
    switch(parseInt(bye))
    {
        case 0: 
        clickRuns = clickRuns+0;
        break;
        case 1: 
        clickRuns = clickRuns+1;
        break;
        case 2: 
        clickRuns = clickRuns+2;
        break;
        case 3: 
        clickRuns = clickRuns+3;
        break;
        case 4: 
        clickRuns = clickRuns+4;
        break;
        default :
        alert("Enter valid runs")
        clickOvers = clickOvers-0.1
        
    }
    clickBall = clickBall + 1
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    Overs()
    saveData()
    update()
    if(clickOvers == maxOver){
        inning()
    }
    }
}
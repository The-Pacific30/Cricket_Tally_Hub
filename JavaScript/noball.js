function noBallClick()
{
    var bye = prompt("This is no ball if the free hit si no ball then press 9 or if wide enter 7 " , "Enter the run for free hit")
    switch(parseInt(bye))
    {
        case 0: 
        clickRuns = clickRuns+1;
        break;
        case 1: 
        clickRuns = clickRuns+2;
        break;
        case 2: 
        clickRuns = clickRuns+3;
        break;
        case 3: 
        clickRuns = clickRuns+4;
        break;
        case 4: 
        clickRuns = clickRuns+5;
        break;
        case 6: 
        clickRuns = clickRuns+7;
        break;
        case 7: 
        clickRuns = clickRuns+1;
        clickOvers = clickOvers-0.1
        noBallClick();
        break;
        case 9: 
        clickRuns = clickRuns+1;
        clickOvers = clickOvers-0.1
        noBallClick();
        break;
        default :
        alert("Enter valid runs")
        clickOvers = clickOvers-0.1
    
    }
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    Overs()
    saveData()
    update()

}
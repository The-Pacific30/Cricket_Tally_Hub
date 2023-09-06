function lbClick()
{
    const maxOver = localStorage.getItem('maxOver')
    if(clickOvers<=maxOver && clickWickets<10){
    var bye = prompt("Hello Umpire This is bye/legbye" , "1")
    if(parseInt(bye)<0 || parseInt(bye)>5){
        alert("Enter valid runs")
    }else{
        clickRuns = clickRuns+parseInt(bye);
        Overs()
        clickBall = clickBall + 1
        saveData()
        update()
    }
    // switch(parseInt(bye))
    // {
    //     case 0: 
    //     clickRuns = clickRuns + 0
    //     break
    //     case 1: 
    //     clickRuns = clickRuns + 1
    //     break
    //     case 2: 
    //     clickRuns = clickRuns + 2
    //     break
    //     case 3: 
    //     clickRuns = clickRuns + 3
    //     break
    //     case 4: 
    //     clickRuns = clickRuns + 4
    //     break
    //     case 5: 
    //     clickRuns = clickRuns + 5
    //     break
    //     default :
    //     alert("Enter valid runs")
    //     // clickOvers = clickOvers - 0.1
    // }
    // clickOvers = clickOvers - 0.1
    document.querySelector('.total-clickRuns').textContent = clickRuns
    if(clickOvers == maxOver){
        inning()
    }
    }
}
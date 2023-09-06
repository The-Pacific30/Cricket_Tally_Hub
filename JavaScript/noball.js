function noBallClick()
{
    const maxOver = localStorage.getItem('maxOver')
    if(clickOvers <= maxOver && clickWickets < 10){
    var noball = prompt("This is no ball Enter Run" , "1")
    if(parseInt(noball)<0 || parseInt(noball)>6){
        alert("Enter valid runs")
    }else{
        clickRuns = clickRuns+parseInt(noball) + 1;
        // Overs()
        // clickBall = clickBall + 1
        saveData()
        update()
    }
    // switch(parseInt(noball))
    // {
    //     case 0: 
    //     clickRuns = clickRuns + 1
    //     break
    //     case 1: 
    //     clickRuns = clickRuns + 2
    //     break
    //     case 2: 
    //     clickRuns = clickRuns + 3
    //     break
    //     case 3: 
    //     clickRuns = clickRuns + 4
    //     break
    //     case 4: 
    //     clickRuns = clickRuns + 5
    //     break
    //     case 5: 
    //     clickRuns = clickRuns + 6
    //     break
    //     case 6: 
    //     clickRuns = clickRuns + 7
    //     break
    //     default :
    //     alert("Enter valid runs")
    //     // clickOvers = clickOvers - 0.1
    // }
    // // clickBall = clickBall + 1
    // document.querySelector('.total-clickRuns').textContent = clickRuns
    // // Overs()
    // saveData()
    // update()
    if(clickOvers == maxOver|| clickWickets == 10){
        inning()
    }
}}


let firstScore = 0,secondScore = 0,maxScore = 0, firstWicket = 0, secondWicket = 0, team1 = 1, team2 = 2
function inning(){
    if(document.getElementById("inning").value === "inning"){
        const previousState = history[history.length - 1]
        firstScore = previousState.clickRuns
        firstWicket = previousState.clickWickets
        console.log(firstScore)                                  //debugging
        document.getElementById("inning").value = "endInning"
        const storedHostName = localStorage.getItem("visitorname")

        if (storedHostName) {
            document.getElementById("batting").textContent = "Batting  : " + storedHostName
        }
        const storedVisitorName = localStorage.getItem("hostname")
        if (storedVisitorName) {
            document.getElementById("balling").textContent = "bowling  : " + storedVisitorName
        }
        alert("First Inning is Completed")

        clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall = 0, clickOvers = 0,over = 0
        document.querySelector('.total-clickRuns').textContent = clickRuns
        document.querySelector('.total-clickWickets').textContent = clickWickets
        document.querySelector('.total-overs').textContent = clickOvers.toFixed(1)
        document.querySelector('.total-clickBalls').textContent = clickBall
    }
    else{
        const previousState = history[history.length - 1]
        secondScore = previousState.clickRuns
        secondWicket = previousState.clickWickets
        console.log(secondScore) //debugging

        if(firstScore > secondScore){
            maxScore = firstScore
            localStorage.setItem("maxScore", maxScore)
            localStorage.setItem("Wicket", firstWicket)
            const teamName = localStorage.getItem("hostname")
            localStorage.setItem("teamName",teamName)
        }
        else if(firstScore === secondScore){
            maxScore = firstScore
            localStorage.setItem("maxScore",firstScore)
            localStorage.setItem("Wicket", firstWicket)
            const teamName = localStorage.getItem("matchtied")
            localStorage.setItem("teamName", teamName)
        }
        else{
            maxScore = secondScore
            localStorage.setItem("maxScore", maxScore)
            localStorage.setItem("Wicket", secondWicket)
            const teamName = localStorage.getItem("visitorname")
            localStorage.setItem("teamName",teamName)
        }
        
        window.location.href = 'declare.html'
        console.log("more score is ", maxScore)                //debugging
    }
}


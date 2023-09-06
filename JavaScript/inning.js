let firstScore = 0,secondScore = 0,maxScore = 0, firstWicket = 0, secondWicket = 0, team1 = 1, team2 = 2
function inning(){
    if(document.getElementById("inning").value === "Inning"){
        if(clickBall === 0)
        {
            alert("please play a ball")
        }
        else
        {
            const previousState = history[history.length - 1]
            firstScore = previousState.clickRuns
            firstWicket = previousState.clickWickets
            console.log(firstScore)                                  //debugging
            document.getElementById("inning").value = "2nd Inning"
            
            const storedHostName = localStorage.getItem("visitorname")
            if (storedHostName) {
                document.getElementById("batting").textContent = storedHostName
            }
            const storedVisitorName = localStorage.getItem("hostname")
            if (storedVisitorName) {
                document.getElementById("balling").textContent = storedVisitorName
            }
            alert("First Inning is Completed")
            history = []
            clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall = 0, clickOvers = 0,over = 0
            document.querySelector('.total-clickRuns').textContent = clickRuns
            document.querySelector('.total-clickWickets').textContent = clickWickets
            document.querySelector('.total-overs').textContent = clickOvers.toFixed(1)
            document.querySelector('.target').textContent = "Target: " + (firstScore+1)
            console.log(secondScore)            //debugging
        }
        // if(p)
        // {}
    }
    else{
            console.log(secondScore)
            const previousState = history[history.length - 1]
            secondScore = previousState.clickRuns
            secondWicket = previousState.clickWickets
            console.log(secondScore) //debugging
            if(firstScore > secondScore){
                maxScore = firstScore
                scoreDifference = firstScore - secondScore
                localStorage.setItem("maxScore", maxScore)
                localStorage.setItem("Wicket", firstWicket)
                const teamName = localStorage.getItem("hostname")
                localStorage.setItem("teamName",teamName)
                localStorage.setItem("scoreDifference",scoreDifference)
            }
            else if(firstScore === secondScore){
                maxScore = firstScore
                scoreDifference = secondScore - firstScore
                localStorage.setItem("maxScore",firstScore)
                localStorage.setItem("Wicket", firstWicket)
                const teamName = localStorage.getItem("matchtied")
                localStorage.setItem("teamName", teamName)
                localStorage.setItem("scoreDifference",scoreDifference)
            }
            else{
                maxScore = secondScore
                scoreDifference = secondScore - firstScore
                localStorage.setItem("maxScore", maxScore)
                localStorage.setItem("Wicket", secondWicket)
                const teamName = localStorage.getItem("visitorname")
                localStorage.setItem("teamName",teamName)
                localStorage.setItem("scoreDifference",scoreDifference)
            }
            window.location.href = 'declare.html'
            console.log("more score is ", maxScore)                //debugging
    }
}


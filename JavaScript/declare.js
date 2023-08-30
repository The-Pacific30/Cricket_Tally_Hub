let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall = 0, countBall = 0, clickOvers = 0            
document.addEventListener('DOMContentLoaded', function() {
    //if browser support localstorage
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("savedData")) {
            console.log("localstorage")  //debugging
            const savedData = JSON.parse(localStorage.getItem("savedData"))
            console.log("savedata",savedData)   //debugging
            clickRuns = savedData.clickRuns
            clickWickets = savedData.clickWickets
            clickOvers = savedData.clickOvers
            console.log("clickruns " + clickRuns,clickWickets,clickBall,clickOvers)   //debugging
            update1();
        }
    }
});

function update1(){
    // const clickRuns = localStorage.getItem("maxScore")
    // const clickWickets = localStorage.getItem("Wicket")
    const winnerTeam = localStorage.getItem("teamName")
    const scoregap = localStorage.getItem("scoreDifference")
    
    console.log("declare ",clickRuns)   //debugging
    console.log(document)   //debugging
    document.querySelector('.winTeamName').textContent = winnerTeam
    document.querySelector('.scoredifference').textContent = scoregap + "Runs"
    // document.querySelector('.total-clickRuns1').textContent = clickRuns
    // document.querySelector('.total-clickWickets1').textContent = clickWickets
    // document.querySelector('.total-overs1').textContent = clickOvers.toFixed(1)
    // console.log("update1 "+clickRuns,clickWickets,clickBall,clickOvers)  //debugging
}    

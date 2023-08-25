let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0,over=0, winTeam;              
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    if (typeof(Storage) !== "undefined") {
        // Load saved data from localStorage when the page loads
        console.log("abcccc");
        if (localStorage.getItem("savedData")) {
            console.log("localstorage")
            const savedData = JSON.parse(localStorage.getItem("savedData"));
            console.log("savedata",savedData)
            clickRuns = savedData.clickRuns;
            clickWickets = savedData.clickWickets;
            // clickBall = savedData.clickBall;
            clickOvers = savedData.clickOvers;
            console.log("clickruns "+clickRuns,clickWickets,clickBall,clickOvers)
            update1();
            
        }
    }
});

function update1(){
    const clickRuns = localStorage.getItem("maxScore")
    const clickWickets = localStorage.getItem("Wicket")
    const winnerTeam = localStorage.getItem("teamName")
    
    console.log("declare ",clickRuns);
    console.log(document)
    document.querySelector('.winTeamName').textContent = winnerTeam;
    document.querySelector('.total-clickRuns1').textContent = clickRuns;
    document.querySelector('.total-clickWickets1').textContent = clickWickets;
    // document.querySelector('.total-clickBalls1').textContent = clickBall;
    document.querySelector('.total-overs1').textContent = clickOvers.toFixed(1);
    console.log("update1 "+clickRuns,clickWickets,clickBall,clickOvers)
}    

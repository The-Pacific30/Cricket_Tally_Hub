let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0, over=0
function run0Click()
{
    clickRuns=clickRuns+0;
    // ballClick()
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
}
function run1Click()
{
    clickRuns=clickRuns+1;    
    // ballClick()
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
}
function run2Click()
{
    clickRuns=clickRuns+2;   
    // ballClick()
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
}

function run3Click()
{
    clickRuns=clickRuns+3;
    // ballClick()
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
}

function run4Click()
{
    clickRuns=clickRuns+4;
    // ballClick()
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
}
function run5Click()
{
    clickRuns=clickRuns+5;
    // ballClick()
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
}

function run6Click()
{
    clickRuns=clickRuns+6;
    // ballClick()
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
}

function wideBallClick()
{
    clickRuns=clickRuns+1;
    saveData()
    update()
}

function wicketClick()
{
    if(clickWickets<10){
        clickWickets=clickWickets+1;
        // ballClick()
        clickBall=clickBall+1;
        Overs()
        saveData()
        update()
    }
}

    function Overs(){
        if(clickBall<6){
            clickOvers = clickOvers + 0.1
        }
        else{
            clickOvers =parseInt(clickOvers)+1
            clickBall = 0
        }
    }

let history = []
function saveData() {
    const state = {
        clickRuns,
        // clickBall,
        clickWickets,
        clickOvers
    }
    history.push(state)
}

function update() {
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    document.querySelector('.total-clickWickets').textContent = clickWickets;
    // document.querySelector('.total-clickBalls').textContent = clickBall;
    document.querySelector('.total-overs').textContent = clickOvers.toFixed(1);
    const maxOver = localStorage.getItem('maxOver');
    document.querySelector('.max-Over').textContent = maxOver;
}
// document.getElementById("max-Over").value = maxOver;


function Undo() {
    if (history.length>0){
        history.pop();
        const previousState = history[history.length-1];
        clickRuns = previousState.clickRuns
        // clickBall = previousState.clickBall
        clickWickets = previousState.clickWickets
        clickOvers = previousState.clickOvers
        update();
    }
}


// Check if localStorage is supported by the browser
if (typeof(Storage) !== "undefined") {
    // Function to save data to localStorage
    function saveData() {
        const state = {
                clickRuns,
                // clickBall,
                clickWickets,
                clickOvers
            }
            history.push(state);
            localStorage.setItem("savedData", JSON.stringify(state));
        }
        // Function to clear saved data from localStorage
    }
    
document.addEventListener('DOMContentLoaded', () => {
const batting = document.getElementById("batting");
const storedHostName = localStorage.getItem("hostname");
if (storedHostName) {
    batting.textContent = "Batting  : " + storedHostName;
}

const balling = document.getElementById("balling");
const storedVistorName = localStorage.getItem("visitorname");
if(storedVistorName) {
   balling.textContent = "Bowling  : " + storedVistorName;
}});


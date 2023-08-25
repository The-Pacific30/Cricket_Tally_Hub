let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0, over=0
const maxOver=localStorage.getItem('maxOver')
function run0Click()
{
    if(clickOvers<=maxOver || clickWickets<10){
    clickRuns=clickRuns+0;
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
    if(clickOvers == maxOver|| clickWickets == 10){
        inning()
    }
    }
}
function run1Click()
{
    if(clickOvers<=maxOver || clickWickets<10){
    clickRuns=clickRuns+1;    
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
    if(clickOvers == maxOver|| clickWickets == 10 ){
    inning()
    }
    }
}
function run2Click()
{
    if(clickOvers<=maxOver || clickWickets<10){
    clickRuns=clickRuns+2;   
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
    if(clickOvers == maxOver|| clickWickets == 10){
        inning()
    }
    }
}

function run3Click()
{
    if(clickOvers<=maxOver || clickWickets<10){
    clickRuns=clickRuns+3;
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
    if(clickOvers == maxOver|| clickWickets == 10){
        inning()
    }
    }
}

function run4Click()
{
    if(clickOvers<=maxOver || clickWickets<10){
    clickRuns=clickRuns+4;
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
    if(clickOvers == maxOver|| clickWickets == 10){
        inning()
    }
    }
}
function run5Click()
{
    if(clickOvers<=maxOver || clickWickets<10){
    clickRuns=clickRuns+5;
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
    if(clickOvers == maxOver|| clickWickets == 10){
        inning()
    }
    }
}

function run6Click()
{
    if(clickOvers<=maxOver || clickWickets<10){
    clickRuns=clickRuns+6;
    clickBall=clickBall+1;
    Overs()
    saveData()
    update()
    if(clickOvers == maxOver|| clickWickets == 10){
        inning()
    }
    }
}
function wideBallClick()
{ 
    clickRuns=clickRuns+1;
    saveData()
    update()
}

function wicketClick()
{
    if(clickOvers<=maxOver || clickWickets<10){
        clickWickets=clickWickets+1;
        clickBall=clickBall+1;
        Overs()
        saveData()
        update()
    if(clickOvers == maxOver|| clickWickets == 10){
        inning()
    }
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
        clickWickets,
        clickOvers
    }
    history.push(state)
}

function update() {
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    document.querySelector('.total-clickWickets').textContent = clickWickets;
    document.querySelector('.total-overs').textContent = clickOvers.toFixed(1);
    const maxOver = localStorage.getItem('maxOver');
    document.querySelector('.max-Over').textContent = maxOver;
}

function Undo() {
    if (history.length>0){
        history.pop();
        const previousState = history[history.length-1];
        clickRuns = previousState.clickRuns
        clickWickets = previousState.clickWickets
        clickOvers = previousState.clickOvers
        update();
    }
}


if (typeof(Storage) !== "undefined") {
    function saveData() {
        const state = {
                clickRuns,
                clickWickets,
                clickOvers
            }
            history.push(state);
            localStorage.setItem("savedData", JSON.stringify(state));
        }
    }
    
document.addEventListener('DOMContentLoaded', () => {
const batting = document.getElementById("batting");
const storedHostName = localStorage.getItem("hostname");
if (storedHostName) {
    batting.textContent =  storedHostName;
}

const balling = document.getElementById("balling");
const storedVistorName = localStorage.getItem("visitorname");
if(storedVistorName) {
   balling.textContent =  storedVistorName;
}});



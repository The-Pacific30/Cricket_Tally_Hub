let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall = 0, countBall = 0, clickOvers = 0, over = 0
let history = []
const maxOver = localStorage.getItem('maxOver')

function runClick(runvalue) {
    if (clickOvers <= maxOver || clickWickets < 10) {
        clickRuns = clickRuns + runvalue
        clickBall = clickBall + 1
        Overs()
        saveData()
        update()
        if (clickOvers == maxOver || clickWickets == 10) {
            inning()
        }
    }
}
function wideBallClick() {
    var wideball = prompt("This is Wide Ball, Enter runs", "1")
    switch (parseInt(wideball)) {
        case 0:
            clickRuns = clickRuns + 1
            break
        case 1:
            clickRuns = clickRuns + 2
            break
        case 2:
            clickRuns = clickRuns + 3
            break
        case 3:
            clickRuns = clickRuns + 4
            break
        case 4:
            clickRuns = clickRuns + 5
            break
        case 5:
            clickRuns = clickRuns + 6
            break
        default:
            alert("Enter valid runs")
            // clickOvers = clickOvers - 0.1
    }
    saveData()
    update()
}

function wicketClick() {
    if (clickOvers <= maxOver || clickWickets < 10) {
        clickWickets = clickWickets + 1
        clickBall = clickBall + 1
        Overs()
        saveData()
        update()
        if (clickOvers == maxOver || clickWickets == 10) {
            inning()
        }
    }
}

function Overs() {
    if (clickBall < 6) {
        clickOvers = clickOvers + 0.1
    }
    else {
        clickOvers = parseInt(clickOvers) + 1
        clickBall = 0
    }
}

function saveData() {
    const state = {
        clickRuns,
        clickWickets,
        clickOvers,
        clickBall
    }
    history.push(state)
}

function update() {
    document.querySelector('.total-clickRuns').textContent = clickRuns
    document.querySelector('.total-clickWickets').textContent = clickWickets
    document.querySelector('.total-overs').textContent = clickOvers.toFixed(1)
    const maxOver = localStorage.getItem('maxOver')
    document.querySelector('.max-Over').textContent = maxOver
    const state = {
        clickRuns,
        clickWickets,
        clickOvers,
        clickBall
    }
    localStorage.setItem("savedData", JSON.stringify(state))
}

function Undo() {
    console.log("undoooooo")
    if (history.length == 1) {
        history.pop()
        clickRuns = 0
        clickWickets = 0
        clickOvers = 0
        clickBall = 0
        update()
    } else if (history.length > 1) {
        history.pop()
        const previousState = history[history.length - 1]
        clickRuns = previousState.clickRuns
        clickWickets = previousState.clickWickets
        clickOvers = previousState.clickOvers
        clickBall = previousState.clickBall
        update()
    } else {
        alert("Nothing is scored to undo")
    }
}

if (typeof (Storage) !== "undefined") {
    function saveData() {
        const state = {
            clickRuns,
            clickWickets,
            clickOvers,
            clickBall
        }
        history.push(state);
        // localStorage.setItem("savedData", JSON.stringify(state))
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const batting = document.getElementById("batting");
    const storedHostName = localStorage.getItem("hostname");
    if (storedHostName) {
        batting.textContent = storedHostName;
    }

    const balling = document.getElementById("balling");
    const storedVistorName = localStorage.getItem("visitorname");
    if (storedVistorName) {
        balling.textContent = storedVistorName;
    }
});



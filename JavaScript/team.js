document.addEventListener("DOMContentLoaded", () => {
    let start = document.getElementById("start");
    start.addEventListener("click", (e) => {
        e.preventDefault()
        let maxOverInput = document.getElementById("maxOver")
        let hostTeamInput = document.getElementById("hostteam")
        let visitorTeamInput = document.getElementById("visitorteam")
        if (maxOverInput.value && hostTeamInput.value && visitorTeamInput.value) {
            if(hostTeamInput.value != visitorTeamInput.value  && maxOverInput.value<50 && maxOverInput.value>0){
            console.log("All fields are filled out. Proceeding to index.html")
            window.location.href = 'index.html'}
            else{
                alert("enter the different names for both the teams as well as overs should be positive and less than 50")
            }
        } else {
            console.log("Please fill out all required fields.")
            alert("Fill out all required details appropriately.")
        }
    })
    let hostteam = document.getElementById("hostteam")
    hostteam.addEventListener("input", () => {
        const hostteam = document.getElementById("hostteam").value
        localStorage.setItem("hostname", hostteam)
    })
    let visitorteam = document.getElementById("visitorteam")
    visitorteam.addEventListener("input", () => {
        const visitorteam = document.getElementById("visitorteam").value
        localStorage.setItem('visitorname', visitorteam)
    })
        const matchtied = "Match Tied"
        localStorage.setItem('matchtied', matchtied)
    let maxOver = document.getElementById("maxOver")
    maxOver.addEventListener("input", () => {
        const maxOver = document.getElementById("maxOver").value
        localStorage.setItem('maxOver', maxOver)
    })
})
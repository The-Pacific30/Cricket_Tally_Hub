document.addEventListener("DOMContentLoaded", () => {

    let start = document.getElementById("start");
    start.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
    let hostteam = document.getElementById("hostteam");
    hostteam.addEventListener("input", () => {
        const hostteam = document.getElementById("hostteam").value;
        localStorage.setItem("hostname", hostteam);
    });
    let visitorteam = document.getElementById("visitorteam");
    visitorteam.addEventListener("input", () => {
        const visitorteam = document.getElementById("visitorteam").value;
        localStorage.setItem('visitorname', visitorteam);
    });
        const matchtied = "Match Tied";
        localStorage.setItem('matchtied', matchtied);
    let maxOver = document.getElementById("maxOver");
    maxOver.addEventListener("input", () => {
        const maxOver = document.getElementById("maxOver").value;
        localStorage.setItem('maxOver', maxOver);
    });
});

document.addEventListener("DOMContentLoaded", function () {

    console.log("Inside 1st")
    if (document.getElementsByTagName("body")[0].id === "home") {
        let sections = document.getElementsByClassName("timeline-button")
        console.log(sections)
        console.log("Only if home")
        for (i = 0; i < sections.length; i++) {
            sections[i].addEventListener("click", showHistory)
        }
    }
	}
);

function showHistory() {
    console.log("Inside show history")
    item = document.getElementById("first-job-detail");
    item.style.display = "block";
}
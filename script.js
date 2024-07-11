
document.addEventListener("DOMContentLoaded", function () {

    console.log("Inside 1st")
    if (document.getElementsByTagName("body")[0].id === "home") {
        let timelineSection = document.getElementById("first-job")
        console.log(timelineSection)
        timelineSection.addEventListener("click", showHistory);
        console.log("Only if home")
    }
	}
);

function showHistory() {
    console.log("Inside show history")
    let things = document.getElementsByClassName("tl-item");
    things.style.display = "block";

}
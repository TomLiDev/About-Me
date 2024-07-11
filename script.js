
document.addEventListener("DOMContentLoaded", function () {

    console.log("Inside 1st")
    if (document.getElementsByTagName("body")[0].id === "home") {
        let sections = document.getElementsByClassName("timeline-button")
        console.log(sections)
        console.log("Only if home")
        for (i = 0; i < sections.length; i++) {
            sections[i].addEventListener("click", selectDetail)
        }
    }
	}
);

function selectDetail() {
    console.log("Inside select detail")
    thing = this.id+"-detail"
    console.log(thing)
    document.getElementById(thing);
    sections = document.getElementsByClassName("job-detail");
    for (i = 0; i <sections.length; i++) {
        if (sections[i].id === thing) {
            console.log("yes")
            sections[i].style.display = "flex";
        }
    }
}
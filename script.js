
/*Below is controlling function which places click event listeners on the job timeline sections.
It also sets a variable of sectionVisible to no, which is used as a flag to show/hide sections.*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Inside 1st")
    if (document.getElementsByTagName("body")[0].id === "home") {
        let sections = document.getElementsByClassName("timeline-button")
        let details = document.getElementsByClassName("job-detail")
        sessionStorage.setItem("sectionVisible", "no")
        for (i = 0; i < sections.length; i++) {
            sections[i].addEventListener("click", checkVisible)
            details[i].addEventListener("click", checkVisible)
        }

    }
	}
);

/*This function is called when any of the job timeline sections are clicked, based on the section clicked
the function will display the relevant details of that particular job if there is no job-detail section 
already displayed. If there is, then clicking the section will hide the currently displayed section.*/

function checkVisible() {
    console.log("Inside check")
    job = this.id+"-detail"
    let details = document.getElementsByClassName("job-detail")

    if (sessionStorage.getItem("sectionVisible") == "no") {
            showDetail(job)
        }
    else {
        console.log("Inside fade out part")
        for (i = 0; i < details.length; i++) {
            $(details[i]).fadeOut("slow");
        }
        sessionStorage.setItem("sectionVisible", "no")
        console.log(sessionStorage.getItem("sectionVisible"))
    }
}


function showDetail(job) {
    console.log(job)
    let details = document.getElementsByClassName("job-detail")
    for (i = 0; i < details.length; i++) {
        if (details[i].id === job) {
            console.log("yes")
            $(details[i]).fadeIn("slow")
            sessionStorage.setItem("sectionVisible", "Yes")
            console.log(sessionStorage.getItem("sectionVisible"))
        }
    }
}

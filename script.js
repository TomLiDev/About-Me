
/*Below is controlling function which places click event listeners on the job timeline sections.
It also sets a variable of sectionVisible to no, which is used as a flag to show/hide sections.*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Inside 1st")
    if (document.getElementsByTagName("body")[0].id === "home") {
        let sections = document.getElementsByClassName("timeline-button")
        console.log(sections)
        console.log("Only if home")
        sessionStorage.setItem("sectionVisible", "no")
        for (i = 0; i < sections.length; i++) {
            sections[i].addEventListener("click", checkVisible)
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
    if (sessionStorage.getItem("sectionVisible") == "no") {
        if ($(window).width()>=400) {
            showDetail(job)
        }
        else {
            showDetailMobile(job)
        }
    } else {
        for (i = 0; i < sections.length; i++) {
            $(sections[i]).fadeOut("slow");
        }
        sessionStorage.setItem("sectionVisible", "no")
    }
}


function showDetail(job) {
    sections = document.getElementsByClassName("job-detail");
    console.log(job)
    for (i = 0; i < sections.length; i++) {
        if (sections[i].id === job) {
            console.log("yes")
            $(sections[i]).fadeIn("slow")
            sections[i].style.display = "flex";
            sessionStorage.setItem("sectionVisible", "Yes")
        }
    }
}

function showDetailMobile(job) {
    sections = document.getElementsByClassName("job-detail");
    for (i = 0; i < sections.length; i++) {
        if (sections[i].id === job) {
            $(sections[i]).fadeIn("slow")
            sessionStorage.setItem("sectionVisible", "Yes")
        }
    }
}


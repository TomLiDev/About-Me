
//Below is controlling function which places click event listeners on the job timeline sections//

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
the function will display the relevant details of that particular job*/

function checkVisible() {
    console.log("Inside check")
    job = this.id+"-detail"
    if (sessionStorage.getItem("sectionVisible") == "no") {
        showDetail(job)
    } else {
        for (i = 0; i < sections.length; i++) {
            sections[i].style.display = "none";
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
            sections[i].style.display = "flex";
            sessionStorage.setItem("sectionVisible", "Yes")
        }
    }
}


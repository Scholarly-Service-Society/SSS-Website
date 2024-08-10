let zones = Object.keys(chapters);

function generateZoneButton() {
    let $zoneButtonContainer = $(".projectsZoneButtonContainer");
    $zoneButtonContainer.empty();

    for (let i = 0; i < zones.length; i++) {
        let zoneButton = document.createElement("button");
        zoneButton.classList.add("projectsZoneButton");
        zoneButton.textContent = chapters[zones[i]].name;
        zoneButton.id = zones[i];

        zoneButton.onclick = function () {
            generateProjects(zones[i]);
        }

        $zoneButtonContainer.append(zoneButton);
    }
}

generateZoneButton();

function generateProjects(zone) {
    let $projects = $(".projects");
    $projects.empty();

    $(".projectsTitle").text("Projects in " + chapters[zone].name);

    if (Object.keys(projects[zone]).length > 0) {
        for (let i = 0; i < Object.keys(projects[zone]).length; i++) {
            let project = projects[zone][Object.keys(projects[zone])[i]];

            let $project = $("<div>").addClass("project");

            let projectDetails = document.createElement("div");
            projectDetails.classList.add("projectDetails");

            let projectTitle = document.createElement("div");
            projectTitle.classList.add("projectTitle");
            projectTitle.textContent = project.title;

            let projectDescription = document.createElement("div");
            projectDescription.classList.add("projectDescription");
            projectDescription.innerHTML = "<b>Description: </b>" + project.description;

            let projectDate = document.createElement("div");
            projectDate.classList.add("projectDate");
            projectDate.innerHTML = "<b>Date: </b>" + project.date;

            let projectLocation = document.createElement("div");
            projectLocation.classList.add("projectLocation");
            projectLocation.innerHTML = "<b>Location: </b>" + project.location;

            projectDetails.appendChild(projectTitle);
            projectDetails.appendChild(projectDescription);
            projectDetails.appendChild(projectDate);
            projectDetails.appendChild(projectLocation);

            $project.append(projectDetails);

            let projectImageContainer = document.createElement("div");
            projectImageContainer.classList.add("projectImageContainer");

            let projectImage = document.createElement("img");
            projectImage.classList.add("projectImage");
            projectImage.src = project.image;
            projectImage.alt = project.title;

            projectImageContainer.appendChild(projectImage);

            $project.append(projectImageContainer);

            $projects.append($project);
        }
    } else {
        let noProjects = document.createElement("div");
        noProjects.classList.add("noProjects");
        noProjects.textContent = "No projects yet in this zone.";

        $projects.append(noProjects);
    }
}

generateProjects("mnj");
let chapterKeys = Object.keys(chapters);

let chaptersContainer = document.querySelector(".chapters");

for(let i = 0; i < chapterKeys.length; i++) {
    let chapter = chapters[chapterKeys[i]];

    let newChapter = document.createElement("div");
    newChapter.classList.add("chapter");
    newChapter.id = chapterKeys[i];

    let chapterTitle = document.createElement("div");
    chapterTitle.classList.add("chapterTitle");
    chapterTitle.textContent = "Scholarly Service Society - " + chapter.name;

    newChapter.appendChild(chapterTitle);

    let chapterLeader = document.createElement("div");
    chapterLeader.classList.add("chapterSubtitle");
    chapter.leader.includes(",") ? chapterLeader.textContent = "Chapter Leaders: " + chapter.leader : chapterLeader.textContent = "Chapter Leader: " + chapter.leader

    newChapter.appendChild(chapterLeader);

    let chapterContent = document.createElement("div");
    chapterContent.classList.add("chapterContent");

    let chapterDescription = document.createElement("div");
    chapterDescription.classList.add("chapterContentText");
    chapterDescription.textContent = chapter.description;

    chapterContent.appendChild(chapterDescription);

    let chapterButtonContainer = document.createElement("div");
    chapterButtonContainer.classList.add("chapterContentButtonContainer");

    let chapterButton = document.createElement("a");
    chapterButton.classList.add("chapterContentButton");
    chapterButton.href = chapter.link;
    chapterButton.textContent = "Join Chapter";
    chapterButton.target = "_blank";

    chapterButtonContainer.appendChild(chapterButton);

    chapterContent.appendChild(chapterButtonContainer);

    newChapter.appendChild(chapterContent);

    chaptersContainer.appendChild(newChapter);
}
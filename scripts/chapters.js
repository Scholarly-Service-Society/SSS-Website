window.addEventListener('load', function() {
    let chapterKeys = Object.keys(chapters);

    let chaptersContainer = document.querySelector(".chapters");

    for (let i = 0; i < chapterKeys.length; i++) {
        let chapter = chapters[chapterKeys[i]];

        let col = document.createElement('div');
        col.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');

        let card = document.createElement('div');
        card.classList.add('chapter', 'card', 'h-100');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let chapterTitle = document.createElement("div");
        chapterTitle.classList.add("chapterTitle");
        chapterTitle.textContent = "Scholarly Service Society - " + ((chapter && chapter.name) ? chapter.name : "TBA");

        let chapterLeader = document.createElement("div");
        chapterLeader.classList.add("chapterSubtitle");
        let leader = (chapter && typeof chapter.leader === 'string') ? chapter.leader.trim() : '';
        if (leader) {
            if (leader.includes(",")) {
                chapterLeader.textContent = "Chapter Leaders: " + leader;
            } else {
                chapterLeader.textContent = "Chapter Leader: " + leader;
            }
        } else {
            chapterLeader.textContent = "Chapter Leader: TBA";
        }

        let chapterFounded = document.createElement("div");
        chapterFounded.classList.add("chapterFounded");
        chapterFounded.textContent = "Founded: " + (chapter && chapter.date ? chapter.date : "TBD");

        let chapterContent = document.createElement("div");
        chapterContent.classList.add("chapterContent");

        let chapterDescription = document.createElement("div");
        chapterDescription.classList.add("chapterContentText");
        chapterDescription.textContent = (chapter && chapter.description) ? chapter.description : "";

        let chapterButtonContainer = document.createElement("div");
        chapterButtonContainer.classList.add("chapterContentButtonContainer");

        let chapterButton = document.createElement("a");
        chapterButton.classList.add("chapterContentButton", 'btn', 'btn-sm');
        if (chapter && chapter.link && chapter.link !== "TBD") {
            chapterButton.href = chapter.link;
            chapterButton.textContent = "Join Chapter";
            chapterButton.target = "_blank";
        } else {
            chapterButton.href = "#";
            chapterButton.textContent = "Coming Soon";
            chapterButton.classList.add('disabled');
            chapterButton.setAttribute('aria-disabled','true');
        }

        chapterButtonContainer.appendChild(chapterButton);

        cardBody.appendChild(chapterTitle);
        cardBody.appendChild(chapterLeader);
        cardBody.appendChild(chapterFounded);
        cardBody.appendChild(chapterDescription);
        cardBody.appendChild(chapterButtonContainer);

        card.appendChild(cardBody);
        col.appendChild(card);

        chaptersContainer.appendChild(col);
    }
});

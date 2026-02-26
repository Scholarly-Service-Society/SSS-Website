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

        if (chapterKeys[i] === 'luk') {
            let londonPageLink = document.createElement('a');
            londonPageLink.classList.add('chapterContentButton', 'btn', 'btn-sm');
            londonPageLink.href = (chapter && chapter.page) ? chapter.page : 'chapters/london.html';
            londonPageLink.textContent = 'View London Page';
            chapterButtonContainer.appendChild(londonPageLink);
        }

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

function createMemberCard(m) {
    var card = document.createElement('div');
    card.className = 'memberCard';

    // LinkedIn icon
    var linkedinUrl = m.linkedin || 'https://www.linkedin.com/in/ishbir-singh/';
    var li = document.createElement('a');
    li.className = 'cardLinkedIn';
    li.href = linkedinUrl;
    li.target = '_blank';
    li.rel = 'noopener';
    li.setAttribute('aria-label', 'LinkedIn');
    li.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#0A66C2"></rect><path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-4 0v5h-4v-5a6 6 0 0 1 6-6z" fill="#fff"></path><rect x="6" y="9" width="4" height="8" fill="#fff"></rect><circle cx="8" cy="7" r="2" fill="#fff"></circle></svg>';
    card.appendChild(li);

    // Left section with image and metadata
    var left = document.createElement('div');
    left.className = 'memberLeft';

    var img = document.createElement('img');
    img.className = 'memberImg';
    img.src = '../' + m.image;
    img.alt = safeText(m.name || m.title, 'Member');
    img.loading = 'lazy';

    var meta = document.createElement('div');
    meta.className = 'memberMeta';

    var name = document.createElement(m.linkedin ? 'a' : 'div');
    name.className = m.linkedin ? 'memberName memberNameLink' : 'memberName';
    if (m.linkedin) {
        name.href = m.linkedin;
        name.target = '_blank';
        name.rel = 'noopener';
    }
    name.textContent = safeText(m.name, m.title);

    var role = document.createElement('div');
    role.className = 'memberRole';
    role.textContent = safeText(m.title, '');

    meta.appendChild(name);
    meta.appendChild(role);

    left.appendChild(img);
    left.appendChild(meta);

    // Description section
    var desc = document.createElement('div');
    desc.className = 'memberDesc';
    desc.textContent = safeText(m.description, '');

    card.appendChild(left);
    card.appendChild(desc);

    return card;
}
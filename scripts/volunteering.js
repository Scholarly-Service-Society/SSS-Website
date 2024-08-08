let chapterKeys = Object.keys(chapters);

let $chaptersList = $(".curChaptersList");
$chaptersList.css("margin-top", "10px")

$chaptersList.empty();

for(let i = 0; i < chapterKeys.length; i++) {
    let chapter = chapters[chapterKeys[i]];

    let listItem = document.createElement("li");
    listItem.classList.add("pageSectionContentListItem");

    let listItemA = document.createElement("a");
    listItemA.classList.add("pageSectionContentLink");
    listItemA.href = "/chapters.html#" + chapterKeys[i];
    listItemA.target = "_blank";
    listItemA.textContent = chapter.name;

    listItem.appendChild(listItemA);

    $chaptersList.append(listItem);
}
const faqs = [
    {
        question: "Who can participate?",
        answer: "The competition is open to students aged 14–19"
    },
    {
        question: "How much does it cost to join?",
        answer: "Participation is completely free of charge."
    },
    {
        question: "What do I need to submit?",
        answer: "You must submit a form of visual media, such as a poster, max 3-minute video, or slideshow showcasing the problem you are addressing, your research, and your proposed solution. You must also include references in any recognisable format. This can be submitted to the Google form along with a 2000-character abstract summarising your research."
    },
    {
        question: "Can I work in a team?",
        answer: "No, this is an individual competition. However, feel free to share your research to your peers!",
    },
    {
        question: "Can I submit more than one project?",
        answer: "No, all participants are limited to only one entry",
    },
    {
        question: "What if my problem doesn’t seem “big enough”?",
        answer: "That’s okay! Local or niche problems can be just as important as global ones, what matters is your research and solution.",
    },
    {
        question: "Do I need prior research experience?",
        answer: "Not at all. The competition is designed for students of all backgrounds, curiosity and effort matter most.",
    },
    {
        question: "Can I use AI tools in my project?",
        answer: "Yes, but you must acknowledge where and how you used them and your submission must still reflect your own understanding and creativity.",
    },
    {
        question: "What should I do if I encounter technical issues during submission?",
        answer: "If you encounter any technical issues during submission, please contact us at scholarlyservicesociety@gmail.com",
    },
    {
        question: "Can I edit my submission after it’s been uploaded?",
        answer: "Once submitted, entries cannot be edited. Please review your submission carefully before finalising."
    }
];

function renderFAQs(containerId = 'faqAccordion'){
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    faqs.forEach((item, i) => {
        const headingId = `heading-${i}`;
        const collapseId = `collapse-${i}`;
        const isFirst = i === 0;

        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="${headingId}">
                <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst}" aria-controls="${collapseId}">
                    ${item.question}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" data-bs-parent="#${containerId}">
                <div class="accordion-body">
                    ${item.answer}
                </div>
            </div>
        `;

        container.appendChild(accordionItem);
    });
}

if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', () => renderFAQs());
} else {
    renderFAQs();
}
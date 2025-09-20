let judgesDB = {
    judge1: {
        name: "Frank Armenante",
        occupation: "Director of Field Systems and Projects at Novo Nordisk",
        disciplines: ["Pharmaceutical", "Medicine"],
        mainImg: "images/judges/people/frank_armenante.png",
        secondaryImg: "images/judges/org/novo_nordisk.png",
        linkedin: "https://www.linkedin.com/in/frank-armenante-01079a/"
    },
    judge2: {
        name: "Lasen Wanni Arachchige",
        occupation: "Aeronautical Engineering MEng Graduate from Imperial College London",
        disciplines: ["Engineering", "Aerospace"],
        mainImg: "images/judges/people/lasen_wanni_arachchige.jpeg",
        secondaryImg: "images/judges/org/imperial.svg",
        linkedin: "https://www.linkedin.com/in/lasen/"
    },
    judge3: {
        name: "Anhad Wasson*",
        occupation: "2nd Year Mechanical Engineering MEng Student at Imperial College London",
        disciplines: ["Mechanical Engineering", "Physics"],
        mainImg: "images/judges/people/anhad_wasson.jpeg",
        secondaryImg: "images/judges/org/imperial.svg",
        linkedin: "https://www.linkedin.com/in/anhad-wasson/"
    },
    judge4: {
        name: "Jonah Boucher",
        occupation: "Managing Director of <a href = 'https://www.leaf.courses/' target = '_blank'>Leaf Courses</a> and Maths Specialist",
        disciplines: ["Mathematics", "Environmental Science"],
        mainImg: "images/judges/people/jonah_boucher.jpeg",
        secondaryImg: "images/judges/org/leaf.jpeg",
        linkedin: "https://www.linkedin.com/in/jonah-boucher-663926b0/"
    },
    judge5: {
        name: "Beth Burke",
        occupation: "2nd Year Biology Undergraduate at Keble College, University of Oxford",
        disciplines: ["Biology", "Medicine"],
        mainImg: "images/judges/people/beth_burke.png",
        secondaryImg: "images/judges/org/oxford.jpg",
        linkedin: "https://www.linkedin.com/in/beth-gambotto-burke-153534238/"
    },
    judge6: {
        name: "Dr. Ivan Ling",
        occupation: "Chair of the <a href = 'https://www.theiet.org/involved/young-professionals/young-professionals-committee/your-committee-members' target = '_blank'>IET Young Professionals Committee</a>, Computer Science Lecturer @ Uni of Southampton, Co-Founder of <a href = 'https://www.carbongpt.ai/home' target = '_blank'>CarbonGPT</a>",
        disciplines: [""],
        mainImg: "images/judges/people/ivan_ling.jpg",
        secondaryImg: "images/judges/org/soton_iet.png",
        linkedin: "https://www.linkedin.com/in/ivanling92/"
    },
    judge7: {
        name: "Rohan Gahir",
        occupation: "1st Year Discrete Mathematics Undergraduate at the University of Warwick",
        disciplines: ["Mathematics", "Computer Science"],
        mainImg: "images/judges/people/rohan_gahir.jpg",
        secondaryImg: "images/judges/org/warwick.png",
        linkedin: "https://www.linkedin.com/in/rohan-gahir-b15aaa2ab/"
    },
    judge8: {
        name: "Timothee Dusserre Cordonnier",
        occupation: "1st Year Natural Sciences Undergraduate at the University of Cambridge",
        disciplines: ["Sciences", "Physics", "Chemistry"],
        mainImg: "images/judges/people/timothee_cordonnier.png",
        secondaryImg: "images/judges/org/cambridge.jpg",
        linkedin: "https://www.linkedin.com/in/timothee-dusserre-cordonnier-106a512ba/"
    },
    judge9: {
        name: "Karthik Sadanand",
        occupation: "5th Year Medical Student at Emmanuel College, University of Cambridge",
        disciplines: ["Medicine", "Biology", "Chemistry"],
        mainImg: "images/judges/people/karthik_sadanand.jpg",
        secondaryImg: "images/judges/org/cambridge.jpg",
        linkedin: "https://www.linkedin.com/in/karthik-sadanand-241954211/"
    },
    judge10: {
        name: "Manav Mahesh",
        occupation: "2nd Year Medical Student at the University of Cambridge",
        disciplines: ["Medicine", "Biology", "Chemistry"],
        mainImg: "images/judges/people/manav_mahesh.jpg",
        secondaryImg: "images/judges/org/cambridge.jpg",
        linkedin: "https://www.linkedin.com/in/manav-mahesh-116735276/"
    },
}

function renderJudges() {
    const judgesRow = document.querySelector('.judgesRow');
    if (!judgesRow) return;
    judgesRow.innerHTML = '';

    const shuffledJudges = Object.values(judgesDB)
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    shuffledJudges.forEach(judge => {
        judgesRow.innerHTML += `
            <div class="judgeCard">
                <div class="judgeCardImages">
                    <img src="${judge.mainImg}" alt="${judge.name}" class="judgeCardImageMain">
                    <img src="${judge.secondaryImg}" alt="${judge.name}" class="judgeCardImageSecondary">
                </div>
                <div class="judgeCardDetails">
                    <div class="judgeName">${judge.name}</div>
                    <div class="judgeOccupation">${judge.occupation}</div>
                    <div class="judgeDiscipline">${judge.disciplines.join(', ')}</div>
                    ${judge.linkedin ? `<a href="${judge.linkedin}" class="judgeLinkedin" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> <span>LinkedIn</span></a>` : ''}
                </div>
            </div>
        `;
        
        document.querySelectorAll('.judgeDiscipline').forEach(el => {
            if(el.innerHTML.trim() === '') {
                el.style.marginTop = '-15px';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', renderJudges);
let chapters = {
    mnj: {
        name: "Mansfield, New Jersey, USA",
        leader: "Pahul Virk, Yusuf Dagli",
        description: "The Scholarly Service Society - Mansfield, New Jersey chapter is dedicated to empowering teenagers in New Jersey to foster cleaner, safer, and more educated communities through volunteerism. We aim to provide our members with a variety of volunteer opportunities that align with their fields of interest, such as business, STEM, medicine, law, computer science, and more.",
        link: "https://classroom.google.com/c/NjI4ODU1MjMyNTgw?cjc=tcgfcgx"
    },
    hnj: {
        name: "Hightstown, New Jersey, USA",
        leader: "Amrit Mann, Harshbir Guron",
        description: "The Scholarly Service Society - Hightstown, New Jersey Chapter is the 2nd established SSS Chapter which aims to follow in the footsteps of the Mansfield Chapter, building on their foundations to continue empowering teenagers and the community, via the powers of volunteering, teamwork, and communication.",
        link: "https://classroom.google.com/c/NjgxMjAzODU5NTQw?cjc=p2lvowh"
    },
    luk: {
        name: "London, England, UK",
        leader: "Ishbir Singh, Tharul Wanni-Arachchige",
        description: "The Scholarly Service Society - London, UK Chapter is the 3rd established SSS Chapter and 1st International Chapter which looks to expand the SSS mission internationally to the UK, providing teenagers with the opportunity to volunteer and make a difference in their community, not just in the USA, but now across the globe.",
        link: "https://classroom.google.com/c/NzAyOTc4NTM0MDQx?cjc=h4xrdsb"
    },
}

let projects = {
    mnj: {
        p1: {
            title: "Mansfield Food Drive",
            description: "Collected nonperishable food over a one-month period, donating all items to the Trenton Area Soup Kitchen, accumulating over 200 pounds of nonperishable food.",
            date: "February 18th, 2024",
            location: "Mansfield Township Community Park",
            image: "images/projects/mansfield/mansfieldProject1.png"
        },
        p2: {
            title: "Mansfield Park Clean Up",
            description: "Organized trash collection at Mansfield Park and Kinkora Trail, engaging 22 volunteers, collecting and disposing of 12 trash bags and raising $500 for park maintenance.",
            date: "March 9th, 2024",
            location: "Mansfield Township Community Park",
            image: "images/projects/mansfield/mansfieldProject2.png"
        },
        p3: {
            title: "Mansfield Hygiene Drive",
            description: "Collected hygiene products over a one-month period and donated all items to the Trenton Area Soup Kitchen., Contributing over $500 and 200 pounds of hygiene products.",
            date: "March 16 to 23, 2024",
            location: "Mansfield",
            image: "images/projects/mansfield/mansfieldProject3.png"
        },
        p4: {
            title: "Mansfield Tree Branch Cleanup",
            description: "Removed and recycled hazardous tree branches at Mansfield Community Park, engaging 16 volunteers to collect and recycle 8 trash bags of tree branches.",
            date: "March 30th, 2024",
            location: "Mansfield Township Community Park",
            image: "images/projects/mansfield/mansfieldProject4.png"
        },
        p5: {
            title: "Aaronson Road Clean Up",
            description: "Organized a road cleanup with 20 volunteers, collecting over 6 bags of trash",
            date: "20th April, 2024",
            location: "Aaronson Road, Bordentown, NJ",
            image: "images/projects/mansfield/mansfieldProject5.png"
        },
        p6: {
            title: "Springfield Veterans Park Clean Up",
            description: "Conducted a park cleanup with 15 volunteers, collecting over 6 bags of trash",
            date: "April 28th, 2024",
            location: "Springfield Veterans Park",
            image: "images/projects/mansfield/mansfieldProject6.png"
        },
        p7: {
            title: "Business/AI Discussion Panel",
            description: "Hosted a discussion panel on 'How AI Will Change the Field of Business' with AI specialist Khuraam Mahmood, engaging 52 volunteers",
            date: "May 19th, 2024",
            location: "Online - Google Meet",
            image: "images/projects/mansfield/mansfieldProject7.png"
        },
        p8: {
            title: "Mansfield Sandwich Donation Drive",
            description: "Coordinated the preparation and donation of 250 sandwich bags sponsored by Wrightstown Taco Bell, engaging 20 volunteers.",
            date: "June 8th, 2024",
            location: "Mansfield Township Community Park",
            image: "images/projects/mansfield/mansfieldProject8.png"
        },
        p9: {
            title: "Mansfield Clothing Drive",
            description: "Collected and donated approximately $15,000 worth of clothing to the homeless, donating over 1,500 pieces of clothing.",
            date: "July 1st to August 1st, 2024",
            location: "Trenton Area Soup Kitchen",
            image: "images/projects/mansfield/mansfieldProject9.png"
        },
        p10: {
            title: "Mansfield Birthday Bag Charity Event",
            description: "Collaborated with AyuMedics to create and donate 'Birthday Party Bags' for children with cancer at the Ronald McDonald Charity House.",
            date: "August 7th, 2024",
            location: "Mansfield Township Community Park",
            image: "images/projects/mansfield/mansfieldProject10.png"
        },
    },
    hnj : {},
    luk : {},
}

let founders = {
    psv: {
        name: "Pahul Singh Virk",
        role: "Co-Founder",
        description: "Hi, my name is Pahul Virk. I am a first-generation rising junior at Northern Burlington County High School. In February 2024, I co-founded the Scholarly Service Society after observing my friends' challenges in finding volunteer opportunities aligned with their interests. This inspired me to create a nonprofit organization to address this need. Outside of school, I am active in basketball, volleyball, and track. My academic interests lie in business, particularly finance. Additionally, I have authored a research paper on immigrant financial literacy and an economics paper.",
        image: "images/founders/Pahul S Virk.png"
    },
    yd: {
        name: "Yusuf Dagli",
        role: "Co-Founder",
        description: "Hi, my name is Yusuf Dagli. I am a first-generation rising junior at Northern Burlington County High School and currently serve as my class president. I co-founded the Scholarly Service Society to help my community while providing students with opportunities to benefit their future. I excel in various subjects, including math, history, marketing, and medical studies. Outside of school, I play basketball, soccer, and work at my family's restaurant.",
        image: "images/founders/Yusuf Dagli.jpeg"
    },
}

if(!window.location.href.includes("index") && window.location.href.includes(".html")) {
    let footer = document.querySelector("footer");

    footer.innerHTML = "";

    let footerLeft = document.createElement("div");
    footerLeft.classList.add("footerLeft");
    footerLeft.innerHTML = `<i class="fa-regular fa-copyright"></i> Scholarly Service Society`;

    let footerRight = document.createElement("div");
    footerRight.classList.add("footerRight");
    footerRight.textContent = "Website by Ishbir lSingh";

    footer.appendChild(footerLeft);
    footer.appendChild(footerRight);
}
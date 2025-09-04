document.addEventListener('DOMContentLoaded', function () {
    const judgesRow = document.querySelector('.judgesRow');
    const leftBtn = document.querySelector('.judges-scroll-left');
    const rightBtn = document.querySelector('.judges-scroll-right');
    if (judgesRow && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', function () {
            judgesRow.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
        rightBtn.addEventListener('click', function () {
            judgesRow.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        });
    }

    const currencyElements = document.querySelectorAll('.currency');
    const slider = document.querySelector('.slider');

    let gbpAmounts = {
        'prize-amount': "275",
        'prize-1st': "75",
        'prize-2nd': "50",
        'prize-3rd': "40",
        'prize-4th': "35",
        'prize-5th': "25",
        'prize-6th': "10",
    }

    let usdAmounts = {
        'prize-amount': "375",
        'prize-1st': "100",
        'prize-2nd': "65",
        'prize-3rd': "55",
        'prize-4th': "45",
        'prize-5th': "35",
        'prize-6th': "15",
    }

    function setCurrency(symbol) {
        currencyElements.forEach(el => {
            el.textContent = symbol;
        });

        let amounts = symbol === '£' ? gbpAmounts : usdAmounts;

        let keys = Object.keys(amounts);

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];

            document.getElementById(key).textContent = amounts[key];
        }
    }

    function initializeCurrency() {
        const browserLanguage = navigator.language || navigator.userLanguage;
        // const isEnglish = browserLanguage.startsWith('en');
        // if (isEnglish) {
        //     slider.classList.remove('active');
        //     setCurrency('$');
        // } else {
        //     slider.classList.add('active');
        //     setCurrency('£');
        // }

        slider.classList.add('active');
        setCurrency('£');
    }

    slider.addEventListener('click', function () {
        const isActive = slider.classList.toggle('active');
        setCurrency(isActive ? '£' : '$');
    });

    initializeCurrency();

    window.setMainTopBubbleAmount = function (amount, prizeText) {
        let bubbleAmount = document.querySelector('.mainTop-bubble-left .mainTop-bubble-amount');
        let currencySpan = bubbleAmount ? bubbleAmount.querySelector('.currency') : null;
        if (bubbleAmount && currencySpan) {
            currencySpan.textContent = currencySymbol;
            bubbleAmount.innerHTML = `💰 <span class="currency">${currencySymbol}</span>${amount} ${prizeText}`;
        }
    };

    function reorderPodiumMobile() {
        if (window.innerWidth <= 900) {
            const podium = document.querySelector('.podium');
            if (podium) {
                const stepGroups = Array.from(podium.querySelectorAll('.step-group'));
                const order = ['first', 'second', 'third', 'fourth', 'fifth'];
                const orderedGroups = order.map(cls => stepGroups.find(g => g.querySelector('.step') ?.classList.contains(cls)));
                orderedGroups.forEach(group => {
                    if (group) podium.appendChild(group);
                });
            }
        }
    }
    reorderPodiumMobile();
    window.addEventListener('resize', reorderPodiumMobile);
});
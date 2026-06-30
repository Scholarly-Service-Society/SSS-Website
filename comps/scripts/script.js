document.addEventListener('DOMContentLoaded', function () {
    const countdownTarget = new Date('2026-07-15T07:00:00Z'); // 8:00 PM BST = 7:00 PM UTC

    // Scope to the judges section: the 2025-results carousel reuses the
    // .judges-scroll-left/right classes, so a page-wide querySelector can grab
    // the wrong buttons depending on which section comes first in the DOM.
    const judgesSection = document.querySelector('.judges-scroll-section');
    const judgesRow = judgesSection ? judgesSection.querySelector('.judgesRow') : null;
    const leftBtn = judgesSection ? judgesSection.querySelector('.judges-scroll-left') : null;
    const rightBtn = judgesSection ? judgesSection.querySelector('.judges-scroll-right') : null;
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
        'prize-amount': "375",
        'prize-1st': "100",
        'prize-2nd': "80",
        'prize-3rd': "65",
        'prize-4th': "45",
        'prize-5th': "35",
        'prize-6th': "10",
    }

    let usdAmounts = {
        'prize-amount': "500",
        'prize-1st': "130",
        'prize-2nd': "105",
        'prize-3rd': "85",
        'prize-4th': "60",
        'prize-5th': "45",
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

    function pad(value) {
        return String(value).padStart(2, '0');
    }

    function updateCountdown() {
        const daysEl = document.getElementById('countdown-days');
        const hoursEl = document.getElementById('countdown-hours');
        const minutesEl = document.getElementById('countdown-minutes');
        const secondsEl = document.getElementById('countdown-seconds');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
            return;
        }

        const now = new Date();
        const diff = countdownTarget.getTime() - now.getTime();

        if (diff <= 0) {
            daysEl.textContent = '0';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            const countdownPanel = document.querySelector('.countdown-note');
            if (countdownPanel) {
                countdownPanel.textContent = 'Submissions are now closed.';
            }
            return;
        }

        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        daysEl.textContent = String(days);
        hoursEl.textContent = pad(hours);
        minutesEl.textContent = pad(minutes);
        secondsEl.textContent = pad(seconds);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

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
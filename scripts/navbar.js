window.addEventListener('load', function () {
    document.querySelectorAll('.nav-link').forEach(function (el) {
        el.removeAttribute('data-aos');
        el.classList.remove('fade-up');
        el.classList.remove('aos-init');
        el.classList.remove('aos-animate');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.visibility = 'visible';
        el.style.pointerEvents = 'auto';
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const obs = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            const target = mutation.target;
            if (target && target.classList && target.classList.contains('nav-link')) {
                if (target.hasAttribute('data-aos')) target.removeAttribute('data-aos');
                target.classList.remove('aos-init');
                target.classList.remove('aos-animate');
                target.style.opacity = '1';
                target.style.transform = 'none';
                target.style.visibility = 'visible';
                target.style.top = '';
                target.style.left = '';
                target.style.pointerEvents = 'auto';
            }
        });
    });

    navLinks.forEach(function (el) {
        obs.observe(el, { attributes: true, attributeFilter: ['style', 'class', 'data-aos'] });
    });
});

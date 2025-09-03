window.addEventListener('DOMContentLoaded', function () {
    const images = [
        "images/gallery/Mansfield Park Cleanup.png",
        "images/gallery/Aaronsen Road Cleanup.png",
        "images/gallery/Online AI Discussion Panel.png",
        "images/gallery/Sandwich Donation Drive.png",
        "images/gallery/Tree Branch Cleanup.png",
        "images/gallery/Hedding Kinkora Road Cleanup.png",
        "images/gallery/Anker Park Cleanup.png",
        "images/gallery/Petticoat Bridge Road Cleanup.png",
        "images/gallery/College Food Insecurity Talk.png",
        "images/gallery/Dawes Park Cleanup.png"
    ];
    const descriptions = [
        "Mansfield Park Cleanup, New Jersey",
        "Aaronsen Road Cleanup, New Jersey",
        "Online AI Discussion Panel",
        "Sandwich Donation Drive, New Jersey",
        "Tree Branch Cleanup, New Jersey",
        "Hedding Kinkora Road Cleanup, New Jersey",
        "Anker Park Cleanup, New Jersey",
        "Petticoat Bridge Road Cleanup, New Jersey",
        "College Food Insecurity Talk, Philadelphia",
        "Dawes Park Cleanup, New Jersey"
    ];

    const container = document.querySelector('.imagesGalleryImages');
    if (!container) {
        console.error('[Gallery] Container .imagesGalleryImages not found');
        return;
    }

    container.textContent = '';

    function changeImage(src, alt, desc) {
        const mainImgEl = document.querySelector('.imagesGalleryMainImage');
        if (!mainImgEl) {
            console.error('[Gallery] Main image element missing');
            return;
        }
        mainImgEl.style.transition = 'opacity 250ms ease';
        mainImgEl.style.opacity = '0';
        setTimeout(() => {
            mainImgEl.src = src;
            mainImgEl.alt = alt;
            mainImgEl.style.opacity = '1';
            const captionEl = document.querySelector('.imagesGalleryMainCaption');
            if (captionEl) captionEl.textContent = desc;
        }, 220);
    }

    images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = descriptions[i];
        img.className = 'imageGalleryImageSmall';
        img.id = `gallery-img-${i}`;
        img.dataset.index = String(i);
        img.addEventListener('error', () => {
            console.warn(`[Gallery] Failed to load image: ${src}`);
            img.style.display = 'none';
        });
        img.addEventListener('click', () => selectIndex(i));
        container.appendChild(img);
    });

    function selectIndex(i) {
        changeImage(images[i], descriptions[i], descriptions[i]);
        document.querySelectorAll('.imageGalleryImageSmall').forEach(el => el.classList.remove('active'));
        const activeThumb = document.getElementById(`gallery-img-${i}`);
        if (activeThumb) activeThumb.classList.add('active');
    }

    if (images.length) selectIndex(0);

    function nextImage() {
        const current = document.querySelector('.imageGalleryImageSmall.active');
        let idx = current ? parseInt(current.dataset.index || '0', 10) : 0;
        idx = (idx + 1) % images.length;
        selectIndex(idx);
    }

    function prevImage() {
        const current = document.querySelector('.imageGalleryImageSmall.active');
        let idx = current ? parseInt(current.dataset.index || '0', 10) : 0;
        idx = (idx - 1 + images.length) % images.length;
        selectIndex(idx);
    }

    const btnRight = document.querySelector('.btnRight');
    if (btnRight) btnRight.addEventListener('click', nextImage);
    const btnLeft = document.querySelector('.btnLeft');
    if (btnLeft) btnLeft.addEventListener('click', prevImage);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
});

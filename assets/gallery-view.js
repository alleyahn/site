document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to buttons
    document.getElementById('grid-view').addEventListener('click', function() {
        setGalleryView('grid');
    });

    document.getElementById('horizontal-scroll-view').addEventListener('click', function() {
        setGalleryView('horizontal');
    });

    document.getElementById('vertical-scroll-view').addEventListener('click', function() {
        setGalleryView('vertical');
    });

    function setGalleryView(view) {
        const galleryContainer = document.querySelector('.gallery-container');
        // Reset class list
        galleryContainer.className = 'gallery-container';

        switch (view) {
            case 'grid':
                galleryContainer.classList.add('grid-view');
                break;
            case 'horizontal':
                galleryContainer.classList.add('horizontal-scroll-view');
                // Apply horizontal scroll
                galleryContainer.style.display = 'flex';
                galleryContainer.style.flexWrap = 'nowrap';
                galleryContainer.style.overflowX = 'auto';
                break;
            case 'vertical':
                galleryContainer.classList.add('vertical-scroll-view');
                // Apply vertical scroll if needed
                galleryContainer.style.display = 'block';
                galleryContainer.style.overflowY = 'auto';
                break;
        }
    }
});

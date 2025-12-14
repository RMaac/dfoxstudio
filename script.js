
document.addEventListener('DOMContentLoaded', () => {
    // ------------------- GAMES SLIDER LOGIC -------------------
    const wrapper = document.querySelector('.game-wrapper');
    const slideLeftBtn = document.getElementById('slide-left');
    const slideRightBtn = document.getElementById('slide-right');
    const gameBoxWidth = 150; 
    let currentPosition = 0;
    const gameCount = wrapper.children.length; 
    const maxShift = (gameCount - 3) * gameBoxWidth; 


    if (slideRightBtn && slideLeftBtn && wrapper) {
        slideRightBtn.addEventListener('click', () => {
            if (currentPosition < maxShift) {
                currentPosition += gameBoxWidth;
                wrapper.style.transform = `translateX(-${currentPosition}px)`;
            }
        });

        slideLeftBtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition -= gameBoxWidth;
                wrapper.style.transform = `translateX(-${currentPosition}px)`;
            }
        });
    }

    // ------------------- IMAGE GALLERY LOGIC -------------------
    const moreImagesBtn = document.getElementById('more-images-btn');
    const hiddenItems = document.querySelectorAll('.hidden-gallery-item');
    let imagesShown = false; // Tracks if the 4 extra images are visible

    if (moreImagesBtn && hiddenItems.length > 0) {
        moreImagesBtn.addEventListener('click', () => {
            if (!imagesShown) {
                // State 1: Show the hidden images (4 more images in 2x2 grid)
                hiddenItems.forEach(item => {
                    item.style.display = 'flex'; // Override 'display: none' from CSS
                });
                
                // Update button text and flag
                moreImagesBtn.innerHTML = 'VIEW FULL GALLERY <i class="fas fa-chevron-right"></i>';
                imagesShown = true;
            } else {
                // State 2: Redirect to the full image page
                window.location.href = 'image-gallery-page.html'; 
            }
        });
    }
});

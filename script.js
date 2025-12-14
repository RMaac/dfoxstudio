document.addEventListener('DOMContentLoaded', () => {
    // ------------------- ALBUM SLIDER LOGIC -------------------
    const wrapper = document.querySelector('.album-wrapper');
    const slideLeftBtn = document.getElementById('slide-left');
    const slideRightBtn = document.getElementById('slide-right');
    const albumBoxWidth = 150; 
    let currentPosition = 0;
    const albumCount = wrapper.children.length;
    // Assuming 3 visible items in the 430px viewport on larger screens
    const maxShift = (albumCount - 3) * albumBoxWidth; 


    if (slideRightBtn && slideLeftBtn && wrapper) {
        slideRightBtn.addEventListener('click', () => {
            if (currentPosition < maxShift) {
                currentPosition += albumBoxWidth;
                wrapper.style.transform = `translateX(-${currentPosition}px)`;
            }
        });

        slideLeftBtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition -= albumBoxWidth;
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
                // Redirects to a placeholder page. Create 'image-gallery-page.html' to continue the design.
                window.location.href = 'image-gallery-page.html'; 
            }
        });
    }
});


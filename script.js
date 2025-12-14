// --- script.js ---

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.album-wrapper');
    const albumBox = document.querySelector('.album-box'); // Used to measure the slide distance
    const slideRight = document.getElementById('slide-right');
    const slideLeft = document.getElementById('slide-left');
    
    // Calculate the exact distance to slide (box width + gap defined in CSS)
    const boxWidth = 130; 
    const gap = 20; 
    const slideDistance = boxWidth + gap; // 150px
    
    let currentIndex = 0; // Tracks the position/number of slides made
    
    // Function to update the slider position
    function updateSlider() {
        // Use CSS transform property to move the wrapper
        wrapper.style.transform = `translateX(-${currentIndex * slideDistance}px)`;
        
        // Optional: Implement logic here to hide the 'slide-left' arrow 
        // when currentIndex is 0, and hide 'slide-right' when at the end.
    }

    slideRight.addEventListener('click', () => {
        // Check if there are albums to the right (assuming 5 albums total, max slide is 2)
        // You'll need more complex logic if dynamically loading albums
        const maxSlides = wrapper.children.length - 3; // Number of items - visible items
        if (currentIndex < maxSlides) {
            currentIndex++;
            updateSlider();
        }
    });

    slideLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    // Initialize the slider position
    updateSlider(); 
});

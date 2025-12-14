document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.album-wrapper');
    const slideLeftBtn = document.getElementById('slide-left');
    const slideRightBtn = document.getElementById('slide-right');
    const albumBoxWidth = 150; // Approximated width (130px width + 20px gap)
    let currentPosition = 0;
    
    // Calculate the maximum scrollable width (total width of all boxes - width of viewport)
    const albumCount = wrapper.children.length;
    // Assuming 3 visible items in the 430px viewport on larger screens
    const maxShift = (albumCount - 3) * albumBoxWidth; 


    slideRightBtn.addEventListener('click', () => {
        if (currentPosition < maxShift) {
            currentPosition += albumBoxWidth;
            wrapper.style.transform = `translateX(-${currentPosition}px)`;
        } else {
             // Optional: Loop back to the beginning
             // currentPosition = 0; 
             // wrapper.style.transform = `translateX(0px)`;
        }
    });

    slideLeftBtn.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition -= albumBoxWidth;
            wrapper.style.transform = `translateX(-${currentPosition}px)`;
        } else {
             // Optional: Loop to the end
             // currentPosition = maxShift;
             // wrapper.style.transform = `translateX(-${maxShift}px)`;
        }
    });
});


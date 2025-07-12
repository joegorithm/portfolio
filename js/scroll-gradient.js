
document.querySelectorAll('.scroll-gradient-element').forEach(element => {
    // Also make scroll-gradient-element grab scrollable with the mouse (click and drag)
    element.style.overflowX = 'auto';
    element.style.scrollBehavior = 'smooth';
    element.style.scrollSnapType = 'x mandatory';
    

    // Find the gradient elements within the current scroll container
    const startGradient = element.nextElementSibling
    const endGradient = element.nextElementSibling.nextElementSibling;

    function updateGradientVisibility() {
        // For horizontal scrolling (which is what the preview images use)
        const scrollLeft = element.scrollLeft;
        const scrollWidth = element.scrollWidth;
        const clientWidth = element.clientWidth;

        // Check scroll position
        const isAtStart = scrollLeft === 0;
        const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;

        // Update gradients
        if (isAtStart) {
            startGradient.style.opacity = '0';
            endGradient.style.opacity = '1';
            console.log("Start")
        } else if (isAtEnd) {
            startGradient.style.opacity = '1';
            endGradient.style.opacity = '0';
            console.log("End")
        } else {
            startGradient.style.opacity = '1';
            endGradient.style.opacity = '1';
            console.log("Middle")
        }
    }

    // Run on initial load and scroll
    updateGradientVisibility();
    element.addEventListener('scroll', updateGradientVisibility);
});
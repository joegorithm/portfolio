const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is in view, start the count-up animation
            const numberElement = entry.target;
            const targetNumber = parseInt(numberElement.dataset.target);
            // check if count-up-float class is present
            if (numberElement.classList.contains('count-up-float')) {
                // If the class is present, animate with floating point numbers
                animateFloatCountUp(numberElement, targetNumber);
            } else {
                // If the class is not present, animate with integers
                animateIntegerCountUp(numberElement, targetNumber);
            }
            observer.unobserve(numberElement); // Stop observing after animation starts
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

// Function to animate count-up for floating point numbers
function animateFloatCountUp(element, target) {
    let current = 0;
    const duration = 1000; // Animation duration in milliseconds
    const increment = target / (duration / 16); // Approximate increment per frame (assuming 60fps)

    function updateCount() {
        if (current < target) {
            current += increment;
            element.textContent = (Math.min(current, target)).toFixed(1); // Ensure it doesn't exceed target and format to one decimal place
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target.toFixed(1); // Set to final target value formatted to one decimal place
        }
    }
    requestAnimationFrame(updateCount);
}

// Function to animate integer count-up
function animateIntegerCountUp(element, target) {
    let current = 0;
    const duration = 1000; // Animation duration in milliseconds
    const increment = target / (duration / 16); // Approximate increment per frame (assuming 60fps)

    function updateCount() {
        if (current < target) {
            current += increment;
            element.textContent = Math.min(Math.round(current), target); // Ensure it doesn't exceed target
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target; // Set to final target value
        }
    }
    requestAnimationFrame(updateCount);
}

document.querySelectorAll('.count-up-number').forEach(numberElement => {
    observer.observe(numberElement);
});
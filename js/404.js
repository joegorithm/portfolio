var touchscreen = getComputedStyle(document.documentElement).getPropertyValue("--touchscreen").trim() || "false";

const pupils = document.querySelectorAll(".face-eye-pupil");

if (touchscreen === "true") {
    // Function to generate random deviation
    function getRandomDeviation(min, max) {
        return Math.random() * (max - min) + min; // Random number between min and max
    }

    // Function to animate pupils with random timing and movement
    function movePupils() {
        // Generate new random positions
        const pupilDeviationX = getRandomDeviation(-0.5, 0.5); // X-axis deviation
        const pupilDeviationY = getRandomDeviation(-0.5, 0.5); // Y-axis deviation

        // Loop through each pupil and update its position
        pupils.forEach((pupil) => {
            pupil.style.left = `${pupilDeviationX * 42 + 30}%`;
            pupil.style.top = `${pupilDeviationY * 42 + 30}%`;

            // Add smooth transition effect
            // pupil.style.transition = "all 0.5s ease-out"; // Adjust timing and easing for realism
        });

        // Randomize the next movement timing between 200ms and 1500ms
        const nextMoveDelay = getRandomDeviation(300, 1500);

        // Schedule the next movement
        setTimeout(movePupils, nextMoveDelay);
    }

    // Start the animation loop
    movePupils();
    
} else {
    document.addEventListener("mousemove", (event) => {
        // Get dimentions of viewport
        const viewportWidth = window.innerWidth; // Width of the viewport
        const viewportHeight = window.innerHeight; // Height of the viewport

        // Get user cursor coordinates 
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        // Calculate deviation from the center
        const pupilDeviationX = (mouseX - viewportWidth / 2) / viewportWidth;
        const pupilDeviationY = (mouseY - viewportHeight / 2) / viewportHeight;
    
    
        // Loop through each pupil and update its position
        pupils.forEach((pupil) => {
            pupil.style.left = `${pupilDeviationX * 42 + 30}%`; // Adjust the unit as needed
            pupil.style.top = `${pupilDeviationY * 42 + 30}%`; // If you want vertical movement too
        });
    });
}
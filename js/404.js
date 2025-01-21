document.addEventListener("mousemove", (event) => {
    const pupils = document.querySelectorAll(".face-eye-pupil");

    const viewportWidth = window.innerWidth; // Width of the viewport
    const viewportHeight = window.innerHeight; // Height of the viewport

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const pupilDeviationX = (mouseX - viewportWidth / 2) / viewportWidth;
    const pupilDeviationY = (mouseY - viewportHeight / 2) / viewportHeight;


    // Loop through each pupil and update its position
    pupils.forEach((pupil) => {
        pupil.style.left = `${pupilDeviationX * 42 + 30}%`; // Adjust the unit as needed
        pupil.style.top = `${pupilDeviationY * 42 + 30}%`; // If you want vertical movement too
    });
});
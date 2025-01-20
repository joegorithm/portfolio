// const projectTiles = document.querySelectorAll(".project-tile");

// // Loop through each tile and add mousemove event listener
// projectTiles.forEach((tile) => {
//     const glowDiv = tile.querySelector(".glow"); // Select the glow div inside each tile

//     tile.addEventListener("mousemove", (event) => {
//         const parentBounds = tile.getBoundingClientRect();

//         const mouseX = event.clientX - parentBounds.left;
//         const mouseY = event.clientY - parentBounds.top;

//         const glowWidth = glowDiv.offsetWidth;
//         const glowHeight = glowDiv.offsetHeight;

//         const clampedX = Math.max(
//             0,
//             Math.min(mouseX - glowWidth / 2, parentBounds.width - glowWidth)
//         );
//         const clampedY = Math.max(
//             0,
//             Math.min(mouseY - glowHeight / 2, parentBounds.height - glowHeight)
//         );

//         glowDiv.style.left = `${clampedX}px`;
//         glowDiv.style.top = `${clampedY}px`;
//     });
// });

// Add the event listener to the document to capture mousemove for all elements
document.addEventListener("mousemove", (event) => {
    const targetElement = event.target.closest("[data-hover-effect]"); // Select the closest parent with the custom attribute

    if (!targetElement) return; // Exit if no valid parent found

    const glowDiv = targetElement.querySelector(".glow");
    if (!glowDiv) return; // Exit if no glow div is found inside the target element

    const parentBounds = targetElement.getBoundingClientRect();

    const mouseX = event.clientX - parentBounds.left;
    const mouseY = event.clientY - parentBounds.top;

    const glowWidth = glowDiv.offsetWidth;
    const glowHeight = glowDiv.offsetHeight;

    const clampedX = Math.max(
        0,
        Math.min(mouseX - glowWidth / 2, parentBounds.width - glowWidth)
    );
    const clampedY = Math.max(
        0,
        Math.min(mouseY - glowHeight / 2, parentBounds.height - glowHeight)
    );

    glowDiv.style.left = `${clampedX}px`;
    glowDiv.style.top = `${clampedY}px`;
});
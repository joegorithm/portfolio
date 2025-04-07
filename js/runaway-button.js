document.addEventListener("DOMContentLoaded", () => {
    const ghostButton = document.querySelector(".runaway-button-ghost");
    const button = document.querySelector(".runaway-button");
    // print posotion of button
    document.addEventListener("mouseover", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        // get window width and height
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        // get button width and height
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        // get ghost button position
        const ghostButtonX = ghostButton.getBoundingClientRect().x;
        const ghostButtonY = ghostButton.getBoundingClientRect().y;
        // get button position
        const buttonX = button.getBoundingClientRect().x;
        const buttonY = button.getBoundingClientRect().y;

        const translateMinX = -ghostButtonX;
        const translateMaxX = windowWidth - ghostButtonX - buttonWidth;
        const translateMinY = -ghostButtonY;
        const translateMaxY = windowHeight - ghostButtonY - buttonHeight;
        if (mouseX > buttonX && mouseX < (buttonX + buttonWidth) && mouseY > buttonY && mouseY < (buttonY + buttonHeight)) {
            button.style.transform = `translate(${random(translateMinX, translateMaxX)}px, ${random(translateMinY, translateMaxY)}px)`;
        }
    });

    // button.onclick
    button.addEventListener("click", (e) => {
        e.preventDefault();
        translateMinX = 0;
        translateMaxX = 0;
        translateMinY = 0;
        translateMaxY = 0;
        button.style.transform = `none`;
    });
});
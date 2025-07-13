function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    button.classList.toggle("active");
    const iconHorizontal = button.querySelector(".iaq-question-icon-horizontal");
    const iconVertical = button.querySelector(".iaq-question-icon-vertical");
    iconHorizontal.classList.toggle("active");
    iconVertical.classList.toggle("active");
    if (iconHorizontal.classList.contains("active")) {
        iconHorizontal.style.transform = "rotate(180deg)";
        iconVertical.style.transform = "rotate(180deg)";
    }
    else {
        iconHorizontal.style.transform = "rotate(0deg)";
        iconVertical.style.transform = "rotate(90deg)";
    }
}
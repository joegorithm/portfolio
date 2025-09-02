function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const answerText = answer.querySelector('.iaq-answer-text');
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    button.classList.toggle("active");
    const iconHorizontal = button.querySelector(".iaq-question-icon-horizontal");
    const iconVertical = button.querySelector(".iaq-question-icon-vertical");
    iconHorizontal.classList.toggle("active");
    iconVertical.classList.toggle("active");
    if (iconHorizontal.classList.contains("active")) {
        iconHorizontal.style.transform = "rotate(180deg)";
        iconVertical.style.transform = "rotate(180deg)";
        button.style.transitionDelay = '0ms';
        button.style.borderBottomLeftRadius = "0";
        button.style.borderBottomRightRadius = "0";
        if (answerText) answerText.style.opacity = '1';
    }
    else {
        iconHorizontal.style.transform = "rotate(0deg)";
        iconVertical.style.transform = "rotate(90deg)";
        button.style.transitionDelay = '50ms';
        button.style.borderBottomLeftRadius = "2rem";
        button.style.borderBottomRightRadius = "2rem";
        if (answerText) answerText.style.opacity = '0';
    }
}
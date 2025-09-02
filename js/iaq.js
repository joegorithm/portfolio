const iafs = [
    {
        question: "How large are giant squids' eyes?",
        answer: "Giant squids have the largest eyes in the animal kingdom, measuring up to 10 inches (25 cm) in diameter."
    },
    {
        question: "Do fruit flies have ears?",
        answer: "Fruit flies do not have ears like humans do, but they can detect sound vibrations through specialized sensory organs."
    },
    {
        question: "Are bananas radioactive?",
        answer: `Yes, bananas contain potassium-40, a radioactive isotope of potassium. This should concern you if you <a href="https://www.ppe.gla.ac.uk/~protopop/teaching/NPP/P2-NPP.pdf">consume 100 million bananas</a> in a short period of time.`
    }
]

document.querySelectorAll(".iaq-grid").forEach(grid => {
    iafs.forEach(iaf => {
        const tile = document.createElement("div");
        tile.classList.add("iaq-tile");

        tile.innerHTML = `
            <button class="iaq-question" onclick="toggleAnswer(this)">
                ${iaf.question}
                <div class="iaq-question-icon-container">
                    <svg class="iaq-question-icon-horizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                    </svg>
                    <svg class="iaq-question-icon-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </div>
            </button>
            <div class="iaq-answer">
                <p class="iaq-answer-text">${iaf.answer}</p>
            </div>
        `;
        grid.appendChild(tile);
    })
});
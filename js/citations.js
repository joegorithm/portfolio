// --------------------------------------------------------------------------------------------------
// Load citation modal
document.querySelector("#citation-modal").innerHTML = `
    <form method="dialog">
        <div class="modal-header">
            <h2 class="modal-title">Cite this post</h2>
            <button type="button" class="modal-close-button" aria-label="Close dialog" onClick="closeCitationDialog()">
                <svg class="modal-close-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
                </svg>
            </button>
        </div>
        <div class="modal-body">
            <p>Choose a style and copy the citation below.</p>

                        <div class="custom-dropdown custom-dropdown-citation-style" tabindex="0">
                            <div class="dropdown-selected dropdown-placeholder">Citation Style</div>
                            <ul class="dropdown-options">
                                <li data-value="apa">APA</li>
                                <li data-value="mla">MLA</li>
                                <li data-value="chicago">Chicago</li>
                                <li data-value="ieee">IEEE</li>
                            </ul>
                            <input type="hidden" name="citation-style" id="citation-style">
                        </div>

                        <div class="custom-dropdown custom-dropdown-chicago-citation-version custom-dropdown-chicago-citation-version-hidden" tabindex="0">
                            <div class="dropdown-selected dropdown-placeholder">Chicago System</div>
                            <ul class="dropdown-options">
                                <li data-value="chicago-notes-and-bibliography">Notes and Bibliography</li>
                                <li data-value="chicago-author-date">Author-Date</li>
                            </ul>
                            <input type="hidden" name="chicago-citation-version" id="chicago-citation-version">
                        </div>
            <div class="citation-output citation-output-1">
                <div class="citation-label">
                    <span class="citation-label-text">Citation</span>
                    <button type="button" class="copy-citation-button" disabled>
                        <svg width="1rem" height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                            <path d="M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z"/>
                        </svg>
                        <span>Copy</span>
                    </button>
                </div>
                <div class="citation-display"></div>
            </div>
        </div>
    </form>
`;

// Helper: enable/disable copy buttons based on whether there is content to copy
function updateCopyButtonsState() {
    document.querySelectorAll(".citation-output").forEach(output => {
        const btn = output.querySelector(".copy-citation-button");
        const display = output.querySelector(".citation-display");
        const hasContent = !!(display && display.dataset && typeof display.dataset.plain === 'string' && display.dataset.plain.trim().length > 0);
        if (btn) btn.disabled = !hasContent;
    });
}

// Prevent touch scrolling
function preventTouchScroll(e) {
  e.preventDefault(); // stop scrolling
}

// Open the citation dialog
function openCitationDialog() {
    const dialog = document.getElementById("citation-modal");
    dialog.showModal();
    requestAnimationFrame(() => dialog.classList.add("showing"));
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    document.body.addEventListener('touchmove', preventTouchScroll, { passive: false }); // Prevent touch scrolling
}

// Close the citation dialog
function closeCitationDialog() {
    const dialog = document.getElementById("citation-modal");
    dialog.classList.remove("showing");
    dialog.addEventListener("transitionend", () => dialog.close(), { once: true });
    document.body.style.overflow = ''; // Restore background scrolling
    document.body.removeEventListener('touchmove', preventTouchScroll); // Restore touch scrolling
}

// If mouse is clicked outside of the modal, close the modal
document.addEventListener("click", (event) => {
    const dialog = document.getElementById("citation-modal");
    if (dialog.classList.contains("showing") && (event.clientX < dialog.offsetLeft || event.clientX > dialog.offsetLeft + dialog.offsetWidth || event.clientY < dialog.offsetTop || event.clientY > dialog.offsetTop + dialog.offsetHeight)) {
        closeCitationDialog();
    }
});

// Generate citation text based on selected style, the metadata of the blog post, and the current date
function generateCitation(style, version) {
    let citationText = "";
    let citationDisplay = "";
    let additionalCitationText = "";
    let additionalCitationDisplay = "";

    const postData = postMetaData;

    const parseYMD = (dateVal) => {
        if (typeof dateVal === 'string') {
            const [y, m, d] = dateVal.split('T')[0].split('-');
            return { year: parseInt(y, 10), month: parseInt(m, 10), day: parseInt(d, 10) };
        } else {
            return "error";
        }
    };
    const { year, month, day } = parseYMD(postData.date);

    const currentDateObject = new Date();
    const currentDateISO = currentDateObject.toISOString();
    const currentDateString = currentDateISO.split('T')[0];
    const { year: currentYear, month: currentMonth, day: currentDay } = parseYMD(currentDateString);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthsAbbr = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    let date = "";
    let currentDate = "";
    let authors = "";
    let additionalAuthors = "";
    let title = postData.title;
    let url = window.location.href.replace(/\/$/, "");

    switch (style) {
        case "apa":
            if (postData.authors.length === 1) {
                authors = authorData[postData.authors[0]].name.last + ", " + authorData[postData.authors[0]].name.first[0] + ".";
            } else if (postData.authors.length === 2) {
                authors = postData.authors.map(author => authorData[author].name.last + ", " + authorData[author].name.first[0] + ".").join(", & ");
            } else {
                authors = postData.authors.map(author => (postData.authors.indexOf(author) === postData.authors.length - 1) ? "& " + authorData[author].name.last + ", " + authorData[author].name.first[0] + "." : authorData[author].name.last + ", " + authorData[author].name.first[0] + ".").join(", ");
            }
            date = `${year}, ${months[month - 1]} ${day}`;

            citationText = `${authors} (${date}). ${title}. jh.codes. ${url}`;
            citationDisplay = `${authors} (${date}). ${title}. <em>jh.codes.</em> ${url}`;
            break;
        case "mla":
            if (postData.authors.length === 1) {
                authors = `${authorData[postData.authors[0]].name.last}, ${authorData[postData.authors[0]].name.first}.`;
            } else if (postData.authors.length === 2) {
                authors = `${authorData[postData.authors[0]].name.last}, ${authorData[postData.authors[0]].name.first}, and ${authorData[postData.authors[1]].name.first} ${authorData[postData.authors[1]].name.last}.`;
            } else {
                authors = `${authorData[postData.authors[0]].name.last}, ${authorData[postData.authors[0]].name.first}, et al.`;
            }
            date = `${day} ${monthsAbbr[month - 1]} ${year}`;
            currentDate = `${currentDay} ${monthsAbbr[currentMonth - 1]} ${currentYear}`;

            citationText = `${authors} "${title}." jh.codes, ${date}, ${url}.`;
            citationDisplay = `${authors} "${title}." <em>jh.codes</em>, ${date}, ${url}.`;
            break;
        case "chicago":
            date = `${months[month - 1]} ${day}, ${year}`;
            switch (version) {
                case "chicago-notes-and-bibliography":
                    if (postData.authors.length === 1) {
                        authors = `${authorData[postData.authors[0]].name.first} ${authorData[postData.authors[0]].name.last}`;
                    } else if (postData.authors.length === 2) {
                        authors = postData.authors.map(author => `${authorData[author].name.first} ${authorData[author].name.last}`).join(" and ");
                    } else {
                        authors = `${authorData[postData.authors[0]].name.first} ${authorData[postData.authors[0]].name.last} et al.`;
                    }
                    citationText = `${authors}, "${title}," jh.codes, ${date} (blog), ${url}.`;
                    citationDisplay = `<span class="no-copy-citation-number">1. </span>${authors}, "${title}," <em>jh.codes</em> (blog), ${date}, ${url}.`;

                    if (postData.authors.length === 1) {
                        additionalAuthors = `${authorData[postData.authors[0]].name.last}, ${authorData[postData.authors[0]].name.first}.`;
                    } else if (postData.authors.length < 7) {
                        additionalAuthors = postData.authors.map(author => {
                            let tempAuthors = "";
                            if (postData.authors.indexOf(author) === 0) {
                                tempAuthors = `${authorData[author].name.last}, ${authorData[author].name.first}`;
                            } else if (postData.authors.indexOf(author) === postData.authors.length - 1) {
                                tempAuthors += `and ${authorData[author].name.first} ${authorData[author].name.last}.`;
                            } else {
                                tempAuthors += `${authorData[author].name.first} ${authorData[author].name.last}`;
                            }
                            return tempAuthors;
                        }).join(", ");
                    } else {
                        additionalAuthors = postData.authors.map(author => {
                            let tempAuthors = "";
                            if (postData.authors.indexOf(author) === 0) {
                                tempAuthors = `${authorData[author].name.last}, ${authorData[author].name.first}`;
                            } else if (postData.authors.indexOf(author) < 3) {
                                tempAuthors += `${authorData[author].name.first} ${authorData[author].name.last}`;
                            }
                            return tempAuthors;
                        }).join(", ") + " et al.";
                    }
                    additionalCitationText = `${additionalAuthors} "${title}." jh.codes (blog), ${date}. ${url}.`;
                    additionalCitationDisplay = `${additionalAuthors} "${title}." <em>jh.codes</em> (blog), ${date}. ${url}.`;
                    break;
                case "chicago-author-date":
                    if (postData.authors.length === 1) {
                        authors = `${authorData[postData.authors[0]].name.last}, ${authorData[postData.authors[0]].name.first}.`;
                    } else if (postData.authors.length < 7) {
                        authors = postData.authors.map(author => {
                            let tempAuthors = "";
                            if (postData.authors.indexOf(author) === 0) {
                                tempAuthors = `${authorData[author].name.last}, ${authorData[author].name.first}`;
                            } else if (postData.authors.indexOf(author) === postData.authors.length - 1) {
                                tempAuthors += `and ${authorData[author].name.first} ${authorData[author].name.last}.`;
                            } else {
                                tempAuthors += `${authorData[author].name.first} ${authorData[author].name.last}`;
                            }
                            return tempAuthors;
                        }).join(", ");
                    } else {
                        authors = postData.authors.map(author => {
                            let tempAuthors = "";
                            if (postData.authors.indexOf(author) === 0) {
                                tempAuthors = `${authorData[author].name.last}, ${authorData[author].name.first}`;
                            } else if (postData.authors.indexOf(author) < 3) {
                                tempAuthors += `${authorData[author].name.first} ${authorData[author].name.last}`;
                            }
                            return tempAuthors;
                        }).join(", ") + " et al.";
                    }
                    citationText = `${authors} ${year}. "${title}." jh.codes (blog), ${date}. ${url}.`;
                    citationDisplay = `${authors} ${year}. "${title}." <em>jh.codes</em> (blog), ${date}. ${url}.`;
                    break;
            }
            break;
        case "ieee":
            if (postData.authors.length === 1) {
                authors = `${authorData[postData.authors[0]].name.first[0]}. ${authorData[postData.authors[0]].name.last},`;
            } else if (postData.authors.length > 1 && postData.authors.length < 7) {
                authors = postData.authors.map(author => `${(postData.authors.indexOf(author) === postData.authors.length - 1) ? `and ${authorData[author].name.first[0]}. ${authorData[author].name.last},` : `${authorData[author].name.first[0]}. ${authorData[author].name.last}`}`).join(", ");
            } else {
                authors = `${authorData[postData.authors[0]].name.first[0]}. ${authorData[postData.authors[0]].name.last} et al,`;
            }
            date = `${monthsAbbr[month - 1]} ${day}, ${year}`;
            currentDate = `${monthsAbbr[currentMonth - 1]} ${currentDay}, ${currentYear}`;
            citationText = `${authors} "${title}," jh.codes, ${date}. [Online]. Available: ${url} [Accessed ${currentDate}].`;
            citationDisplay = `<span class="no-copy-citation-number">[1] </span>${citationText}`;
            break;
        default:
            citationText = ``;
    }
    console.log(citationText);
    return {
        text: citationText,
        display: citationDisplay,
        additionalText: additionalCitationText,
        additionalDisplay: additionalCitationDisplay
    };

}



const citationStyle = document.getElementById("citation-style");
const chicagoCitationVersionDropdown = document.querySelector(".custom-dropdown-chicago-citation-version");
const citationDisplayElement1 = document.querySelector(".citation-output-1 .citation-display");

let citationOutput2 = document.createElement("div");
if (citationStyle) {
    console.log(citationStyle.value);
    citationStyle.addEventListener("change", (event) => {

        // Hide and clear Chicago citation version dropdown
        chicagoCitationVersionDropdown.classList.add("custom-dropdown-chicago-citation-version-hidden"); // Hide dropdown
        chicagoCitationVersionDropdown.querySelector(".dropdown-selected").textContent = "Chicago System"; // Replace visible text with placeholder text
        chicagoCitationVersionDropdown.querySelector(".dropdown-selected").classList.add("dropdown-placeholder"); // Add placeholder class
        chicagoCitationVersionDropdown.querySelector("input[type=hidden]").value = ""; // Clear value from hidden input
        citationDisplayElement1.classList.remove("nb-label-element");

        // Remove second citation output
        citationOutput2.remove();

        if (event.target.value === "chicago") {
            chicagoCitationVersionDropdown.classList.remove("custom-dropdown-chicago-citation-version-hidden");
            citationDisplayElement1.innerHTML = "";
            citationDisplayElement1.dataset.plain = "";
            updateCopyButtonsState();
        } else {
            const selectedStyle = event.target.value;
            const result = generateCitation(selectedStyle);
            citationDisplayElement1.innerHTML = result.display;
            citationDisplayElement1.dataset.plain = result.text;
            updateCopyButtonsState();
        }

        const citationLabel1 = document.querySelector(".citation-output-1 .citation-label-text");
        if (event.target.value === "apa") {
            citationLabel1.textContent = "References Entry";
        } else if (event.target.value === "mla") {
            citationLabel1.textContent = "Works Cited Entry";
        } else if (event.target.value === "ieee") {
            citationLabel1.textContent = "References Entry";
        } else {
            citationLabel1.textContent = "Citation";
        }
    });

    chicagoCitationVersionDropdown.addEventListener("change", (event) => {
        const selectedVersion = event.target.value;

        if (event.target.value === "chicago-notes-and-bibliography") {
            citationDisplayElement1.classList.remove("nb-label-element");

            // Remove second citation output
            citationOutput2.remove();

            // Add second citation output
            citationOutput2.classList.add("citation-output");
            citationOutput2.classList.add("citation-output-2");
            citationOutput2.innerHTML = `
                <div class="citation-label">
                    <span class="citation-label-text">Bibliography Entry</span>
                    <button type="button" class="copy-citation-button">
                        <svg width="1rem" height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                            <path d="M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z"/>
                        </svg>
                        <span>Copy</span>
                    </button>
                </div>
                <div class="citation-display"></div>
            `;
            document.querySelector(".modal-body").appendChild(citationOutput2);
            citationDisplayElement1.classList.add("nb-label-element");

            const result = generateCitation("chicago", selectedVersion);
            citationDisplayElement1.innerHTML = result.display;
            citationDisplayElement1.dataset.plain = result.text;

            const citationDisplayElement2 = document.querySelector(".citation-output-2 .citation-display");
            citationDisplayElement2.innerHTML = result.additionalDisplay;
            citationDisplayElement2.dataset.plain = result.additionalText;

            updateCopyButtonsState();
        } else {
            citationDisplayElement1.classList.remove("nb-label-element");

            // Remove second citation output
            citationOutput2.remove();

            const result = generateCitation("chicago", selectedVersion);
            citationDisplayElement1.innerHTML = result.display;
            citationDisplayElement1.dataset.plain = result.text;
            updateCopyButtonsState();
        }

        const citationLabel1 = document.querySelector(".citation-output-1 .citation-label-text");
        if (event.target.value === "chicago-notes-and-bibliography") {
            citationLabel1.textContent = "Full Note";
        } else if (event.target.value === "chicago-author-date") {
            citationLabel1.textContent = "References Entry";
        }
    });
}

// Delegate click handling so dynamically added copy buttons work
document.addEventListener("click", (e) => {
    const button = e.target.closest(".copy-citation-button");
    if (!button) return;
    if (button.disabled) return;
    const output = button.closest(".citation-output");
    const display = output?.querySelector(".citation-display");
    const citationText = display?.dataset?.plain || "";
    if (!citationText.trim()) return;
    navigator.clipboard.writeText(citationText).then(() => {
        const span = button.querySelector("span");
        if (span) {
            span.innerText = "Copied!";
            setTimeout(() => {
                span.innerText = "Copy";
            }, 2000);
        }
    });
});
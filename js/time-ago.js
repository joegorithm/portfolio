function updateTimeAgo() {
    document.querySelectorAll(".time-ago-status").forEach((element) => {
        const timeAgoDate = element.querySelector(".time-ago-date");
        const icon = element.querySelector(".time-ago-icon");
        const tooltip = element.querySelector(".tooltip");
        const startedDate = timeAgoDate.dataset.started;
        const completedDate = timeAgoDate.dataset.completed;
        const earnedDate = timeAgoDate.dataset.earned;
        const awardedDate = timeAgoDate.dataset.awarded;
        const graduateDate = timeAgoDate.dataset.graduate;

        // For project details pages
        const projectDetailsStarted = element.querySelector(".project-details-started");
        const projectDetailsCompleted = element.querySelector(".project-details-completed");

        // Use the completed date if it exists, otherwise use the started date if it exists, and use earned date if none of the others exist
        const dateToUse = completedDate || graduateDate || earnedDate || awardedDate || startedDate;
        const startedDateDate = new Date(startedDate + "T00:00:00");
        const date = new Date(dateToUse + "T00:00:00");
        const now = new Date();

        // Calculate the difference in time
        let years = now.getFullYear() - date.getFullYear();
        let months = now.getMonth() - date.getMonth();
        // const weeks = Math.floor((now - date) / (1000 * 60 * 60 * 24 * 7));
        let days = now.getDate() - date.getDate();

        // Adjust months and years if necessary
        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Days in the previous month
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        
        // Convert to human-readable time ago format
        let timeAgo = "";
        if (years >= 0 && months >= 0 && days >= 0) {
            if (years > 0) {
                timeAgo = years === 1 ? "1 year ago" : `${years} years ago`;
            } else if (months > 0) {
                timeAgo = months === 1 ? "1 month ago" : `${months} months ago`;
            } else if (days > 1) {
                timeAgo = `${days} days ago`;
            } else if (days === 1) {
                timeAgo = "yesterday";
            } else {
                timeAgo = "today";
            }
        } else {
            if (graduateDate) {
                if (years < 0) {
                    timeAgo = years === -1 ? "in 1 year" : `in ${-years} years`;
                } else if (months < 0) {
                    timeAgo = months === -1 ? "in 1 month" : `in ${-months} months`;
                } else if (days < -1) {
                    timeAgo = `${-days} days from now`;
                } else if (days === -1) {
                    timeAgo = "tomorrow";
                }
            } else {
                timeAgo = "in the future";
            }
        }

        const checkmarkIcon = `
        <svg width="0.9rem" height="0.9rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
        </svg>
        `;

        const clockIcon = `
        <svg width="0.9rem" height="0.9rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
        </svg>
        `;

        const graduationHatIcon = `
        <svg width="1rem" height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
        </svg>
        `;

        const certificateIcon = `
        <svg width="0.9rem" height="0.9rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/>
        </svg>
        `;

        const errorIcon = `
        <svg width="0.9rem" height="0.9rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        `;
        

        // Set the tooltip text
        const tooltipMonthOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let tooltipMonth = tooltipMonthOptions[date.getMonth()];
        let tooltipDate = date.getDate();
        let tooltipYear = date.getFullYear();
        if (tooltip) {
            if (graduateDate) {
                tooltip.textContent = tooltipMonthOptions[startedDateDate.getMonth()] + " " + startedDateDate.getFullYear() + " – " + tooltipMonth + " " + tooltipYear;
            } else {
                tooltip.textContent = tooltipMonth + " " + tooltipDate + ", " + tooltipYear;
            }
        }
        

        // Update the element with the time ago text and related icon
        if (element.classList.contains("project-details-timeline")) {
            // icon.innerHTML = checkmarkIcon;
            // icon.classList.add("time-ago-icon-completed");
            if (projectDetailsStarted) {
                icon.innerHTML = clockIcon;
                icon.classList.add("time-ago-icon-started");
                timeAgoDate.textContent = "Started " + tooltipMonth + " " + tooltipDate + ", " + tooltipYear;
            } else if (projectDetailsCompleted) {
                if (completedDate) {
                    icon.innerHTML = checkmarkIcon;
                    icon.classList.add("time-ago-icon-completed");
                    timeAgoDate.textContent = "Completed " + tooltipMonth + " " + tooltipDate + ", " + tooltipYear;
                } else {
                    icon.innerHTML = errorIcon;
                    icon.classList.add("time-ago-icon-started");
                    timeAgoDate.textContent = "Not completed yet";
                }
            }
        } else {
            if (completedDate) {
                icon.innerHTML = checkmarkIcon;
                icon.classList.add("time-ago-icon-completed");
                timeAgoDate.textContent = `Completed ${timeAgo}`;
            } else if (graduateDate) {
                icon.innerHTML = graduationHatIcon;
                icon.classList.add("time-ago-icon-graduate");
                if (years < 0 || months < 0 || days < 0) {
                    timeAgoDate.textContent = `Graduating ${timeAgo}`;
                } else {
                    timeAgoDate.textContent = `Graduated ${timeAgo}`;
                }
            } else if (earnedDate) {
                icon.innerHTML = certificateIcon;
                icon.classList.add("time-ago-icon-completed");
                timeAgoDate.textContent = `Earned ${timeAgo}`;
            } else if (awardedDate) {
                icon.innerHTML = certificateIcon;
                icon.classList.add("time-ago-icon-completed");
                timeAgoDate.textContent = `Awarded ${timeAgo}`;
            } else if (startedDate) {
                icon.innerHTML = clockIcon;
                icon.classList.add("time-ago-icon-started");
                timeAgoDate.textContent = `Started ${timeAgo}`;
            } else {
                icon.innerHTML = errorIcon;
                icon.classList.add("time-ago-icon-started");
                timeAgoDate.textContent = `Invalid date`;
            }
        }
    });
}
updateTimeAgo(); // Run on initial load
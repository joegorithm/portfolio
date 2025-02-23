document.querySelectorAll(".time-ago-status").forEach((element) => {
    const timeAgoDate = element.querySelector(".time-ago-date");
    const icon = element.querySelector(".time-ago-icon");
    const tooltip = element.querySelector(".tooltip");
    const startedDate = timeAgoDate.dataset.started;
    const completedDate = timeAgoDate.dataset.completed;
    const earnedDate = timeAgoDate.dataset.earned;

    // Use the completed date if it exists, otherwise use the started date if it exists, and use earned date if none of the others exist
    const dateToUse = completedDate || startedDate || earnedDate;
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
        timeAgo = "in the future";
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

    const errorIcon = `
    <svg width="0.9rem" height="0.9rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
    </svg>
    `;

    // Update the element with the time ago text and related icon
    if (completedDate) {
        icon.innerHTML = checkmarkIcon;
        icon.classList.add("time-ago-icon-completed");
        timeAgoDate.textContent = `Completed ${timeAgo}`;
    } else if (startedDate) {
        icon.innerHTML = clockIcon;
        icon.classList.add("time-ago-icon-started");
        timeAgoDate.textContent = `Started ${timeAgo}`;
    } else if (earnedDate) {
        icon.innerHTML = checkmarkIcon;
        icon.classList.add("time-ago-icon-completed");
        timeAgoDate.textContent = `Earned ${timeAgo}`;
    } else {
        icon.innerHTML = errorIcon;
        icon.classList.add("time-ago-icon-started");
        timeAgoDate.textContent = `Invalid date`;
    }

    const tooltipMonthOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let tooltipMonth = tooltipMonthOptions[date.getMonth()];
    let tooltipDate = date.getDate();
    let tooltipYear = date.getFullYear();
    tooltip.textContent = tooltipMonth + " " + tooltipDate + ", " + tooltipYear;
});
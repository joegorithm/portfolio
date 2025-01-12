document.querySelectorAll(".project-date").forEach((element) => {
    const startedDate = element.dataset.started;
    const completedDate = element.dataset.completed;

    // Use the completed date if it exists, otherwise use the started date
    const dateToUse = completedDate || startedDate;
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

    // Update the element with the time ago text
    element.textContent = completedDate
    ? `Completed ${timeAgo}`
    : `Started ${timeAgo}`;
});
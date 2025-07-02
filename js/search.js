// Get the full query string from the current URL
const queryString = window.location.search;

// Parse the query string
const params = new URLSearchParams(queryString);

// Get the value of the "tool" parameter
const tool = params.get('tool');

console.log(tool); // Output: "javascript"

// const certificationsSection = document.getElementById("certifications-section");

const matchingCertifications = [];

for (const key in certifications) {
    const cert = certifications[key];
    if (cert.tools) {
        const toolsArray = cert.tools.split(',').map(t => t.trim());
        for (let i = 0; i < toolsArray.length; i++) {
            if (toolsArray[i] === tool) {
                matchingCertifications.push(key);
                break; // Only add once per certification
            }
        }
    }
}

// matchingCertifications now contains all certifications that use the searched tool
console.log(matchingCertifications);

const certificationTiles = document.querySelector('.certification-tiles');
certificationTiles.setAttribute('data-certifications', matchingCertifications.join(', '));

// Re-render the certifications section with the new data
if (typeof renderCertifications === "function") renderCertifications();

// Re-run time-ago and technologies scripts for new elements
if (typeof updateTimeAgo === "function") updateTimeAgo();
if (typeof renderTechnologies === "function") renderTechnologies();
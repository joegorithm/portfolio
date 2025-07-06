const filterButton = document.querySelector('.filter-button'); 
const searchToolTags = document.querySelector('.search-tool-tags');


let searchToolTagsMenuStatus = localStorage.getItem('searchToolTagsMenuStatus') === 'true';
// if checkbox input is checked, set searchToolTagsMenuStatus to true
document.querySelectorAll('.search-tool-tags input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        searchToolTagsMenuStatus = true;
        localStorage.setItem('searchToolTagsMenuStatus', 'true');
    });
});


if (searchToolTagsMenuStatus) {
    searchToolTags.style.display = 'block';
} else {
    searchToolTags.style.display = 'none';
}

// When .filter-button is clicked, toggle the visibility of the .search-tool-tags
filterButton.addEventListener('click', function() {
    if (searchToolTags.style.display === 'none') {
        searchToolTags.style.display = 'block';
        localStorage.setItem('searchToolTagsMenuStatus', 'true');
    } else {
        searchToolTags.style.display = 'none';
        localStorage.setItem('searchToolTagsMenuStatus', 'false');
    }
});



// Get the full query string from the current URL
const queryString = window.location.search;

// Parse the query string
const params = new URLSearchParams(queryString);

// Get the value of the "query" parameter
const query = params.get('query') || '';

// Get the value of the "tool" parameter
const tools = params.getAll('tool') || [];

console.log(query);
console.log(tools);

// set value of input equal to query
const searchInput = document.querySelector('.search-bar');
if (searchInput) {
    searchInput.value = query || '';
}



// SEARCH BY KEYWORDS
// Find the education, projects, and certifications that include the searched keywords
const matchingEducationQuery = [];
const matchingProjectsQuery = [];
const matchingCertificationsQuery = [];

// Find the education that include the searched keywords
for (const key in education) {
    const edu = education[key];
    if (
        edu.title.toLowerCase().includes(query.toLowerCase()) ||
        (Array.isArray(edu.degrees) && edu.degrees.some(degree =>
            (degree.degree && degree.degree.toLowerCase().includes(query.toLowerCase())) ||
            (degree.type && degree.type.toLowerCase().includes(query.toLowerCase())) ||
            (degree.coursework && degree.coursework.some(course =>
                course.class && course.class.toLowerCase().includes(query.toLowerCase()) ||
                course.tools && course.tools.split(',').some(toolStr =>
                    toolStr.trim().toLowerCase().includes(query.toLowerCase()) ||
                    (typeof technologies !== 'undefined' && Array.isArray(technologies) &&
                        technologies.some(t => t.id && t.id.toLowerCase() === toolStr.trim().toLowerCase() &&
                            t.name && t.name.toLowerCase().includes(query.toLowerCase())
                        )
                    )
                )
            )))
        )
    ) {
        matchingEducationQuery.push(key);
    }
}

// Find the projects that include the searched keywords
if (typeof query === 'string' && query.trim().length > 0) {
    for (const key in projects) {
        const proj = projects[key];
        const queryLower = query.toLowerCase();
        if (
            proj.title.toLowerCase().includes(queryLower) ||
            (proj.category && proj.category.toLowerCase().includes(queryLower)) ||
            (proj.summary && proj.summary.toLowerCase().includes(queryLower)) ||
            (typeof proj.description === 'string' && proj.description.toLowerCase().includes(queryLower)) ||
            (typeof proj.tools === 'string' && proj.tools.length > 0 && proj.tools.split(',').some(tool => tool.toLowerCase().includes(queryLower))) ||
            // includes the tool's display names and not just id
            (typeof proj.tools === 'string' && proj.tools.split(',').some(toolStr => {
                if (typeof technologies !== 'undefined' && Array.isArray(technologies)) {
                    const toolId = toolStr.trim().toLowerCase();
                    const tech = technologies.find(t => t.id && t.id.toLowerCase() === toolId);
                    return tech && tech.name && tech.name.toLowerCase().includes(queryLower);
                }
                return false;
            }))

        ) {
            matchingProjectsQuery.push(key);
        }
    }
}

// Find the certifications that include the searched keywords
for (const key in certifications) {
    const cert = certifications[key];
    if (
        typeof query === 'string' && query.trim().length > 0 && (
            cert.title.toLowerCase().includes(query.toLowerCase()) ||
            (cert.category && cert.category.toLowerCase().includes(query.toLowerCase())) ||
            (cert.summary && cert.summary.toLowerCase().includes(query.toLowerCase())) ||
            (cert.tools && cert.tools.split(',').some(toolStr =>
                toolStr.trim().toLowerCase().includes(query.toLowerCase()) ||
                (typeof technologies !== 'undefined' && Array.isArray(technologies) &&
                    technologies.some(t => t.id && t.id.toLowerCase() === toolStr.trim().toLowerCase() &&
                        t.name && t.name.toLowerCase().includes(query.toLowerCase())
                    )
                )
            ))
        )
    ) {
        matchingCertificationsQuery.push(key);
    }
}

// console.log("Matching Education Query:", matchingEducationQuery);
// console.log("Matching Projects Query:", matchingProjectsQuery);
// console.log("Matching Certifications Query:", matchingCertificationsQuery);



// FILTER BY TECH STACK
// Find education, projects, and certifications that associated with the searched tool
const matchingEducationTool = [];
const matchingProjectsTool = [];
const matchingCertificationsTool = [];

// Find all education entries that use the searched tool
for (const key in education) {
    const edu = education[key];
    if (edu.degrees) {
        for (const degree of edu.degrees) {
            if (degree.coursework) {
                for (const course of degree.coursework) {
                    if (course.tools) {
                        const toolsArray = course.tools.split(',').map(t => t.trim());
                        for (const tool of tools) {
                            if (toolsArray.includes(tool)) {
                                if (!matchingEducationTool.includes(key)) {
                                    matchingEducationTool.push(key);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// Find all projects that use the searched tool
for (const key in projects) {
    const proj = projects[key];
    if (proj.tools) {
        const toolsArray = proj.tools.split(',').map(t => t.trim());
        for (const tool of tools) {
            if (toolsArray.includes(tool)) {
                if (!matchingProjectsTool.includes(key)) {
                    matchingProjectsTool.push(key);
                }
            }
        }
    }
}

// Find all certifications that include the searched tool
for (const key in certifications) {
    const cert = certifications[key];
    if (cert.tools) {
        const toolsArray = cert.tools.split(',').map(t => t.trim());
        for (const tool of tools) {
            if (toolsArray.includes(tool)) {
                if (!matchingCertificationsTool.includes(key)) {
                    matchingCertificationsTool.push(key);
                }
            }
        }
    }
}

// matchingCertifications now contains all certifications that use the searched tool
console.log("Matching Education Tools: " + matchingEducationTool + ".");
console.log("Matching Projects Tools: " + matchingProjectsTool + ".");
console.log("Matching Certifications Tools: " + matchingCertificationsTool + ".");

// // Re-render the education section with the new data
// if (matchingEducationTool.length !== 0) {
//     const educationTiles = document.querySelector('.education-tiles');
//     educationTiles.setAttribute('data-education', matchingEducationTool.join(', '));
//     if (typeof renderEducation === "function") renderEducation();
// } else {
//     // If no matching education, show a message or handle accordingly
//     console.log("No matching education found for the tool:", tool);
// }


// // Re-render the projects section with the new data
// if (matchingProjectsTool.length !== 0) {
//     const projectTiles = document.querySelector('.project-tiles');
//     projectTiles.setAttribute('data-projects', matchingProjectsTool.join(', '));
//     if (typeof renderProjects === "function") renderProjects();
// } else {
//     // If no matching projects, show a message or handle accordingly
//     console.log("No matching projects found for the tool:", tool);
// }

// // Re-render the certifications section with the new data
// if (matchingCertificationsTool.length !== 0) {
//     const certificationTiles = document.querySelector('.certification-tiles');
//     certificationTiles.setAttribute('data-certifications', matchingCertificationsTool.join(', '));
//     if (typeof renderCertifications === "function") renderCertifications();
// } else {
//     // If no matching certifications, show a message or handle accordingly
//     console.log("No matching certifications found for the tool:", tool);
// }




// // Helper to get intersection of two arrays
// function intersect(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
// }

function intersect(array1, array2) {
    let intersection = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            intersection.push(array1[i]);
        }
    }
    return intersection;
}

// Decide which results to show
let finalEducation = Object.keys(education);
let finalProjects = Object.keys(projects);
let finalCertifications = Object.keys(certifications);

if (query && tools) {
    console.log("IMPORTANT: Tools & query:", tools + " | " + query);
} else if (query) {
    console.log("IMPORTANT: Query:", query);
} else if (tools) {
    console.log("IMPORTANT: Tools:", tools);
}

if (query.length > 0 && tools.length > 0) {
    finalEducation = intersect(matchingEducationQuery, matchingEducationTool);
    finalProjects = intersect(matchingProjectsQuery, matchingProjectsTool);
    finalCertifications = intersect(matchingCertificationsQuery, matchingCertificationsTool);
} else if (query.length > 0) {
    finalEducation = matchingEducationQuery;
    finalProjects = matchingProjectsQuery;
    finalCertifications = matchingCertificationsQuery;
} else if (tools.length > 0) {
    finalEducation = matchingEducationTool;
    finalProjects = matchingProjectsTool;
    finalCertifications = matchingCertificationsTool;
}

console.log("Final Education:", finalEducation);
console.log("Final Projects:", finalProjects);
console.log("Final Certifications:", finalCertifications);

// Render education
const educationTiles = document.querySelector('.education-tiles');
if (educationTiles && finalEducation.length > 0) {
    educationTiles.setAttribute('data-education', finalEducation.join(', '));
    if (typeof renderEducation === "function") renderEducation();
}

// Render projects
const projectTiles = document.querySelector('.project-tiles');
if (projectTiles && finalProjects.length > 0) {
    projectTiles.setAttribute('data-projects', finalProjects.join(', '));
    if (typeof renderProjects === "function") renderProjects();
}

// Render certifications
const certificationTiles = document.querySelector('.certification-tiles');
if (certificationTiles && finalCertifications.length > 0) {
    certificationTiles.setAttribute('data-certifications', finalCertifications.join(', '));
    if (typeof renderCertifications === "function") renderCertifications();
}

// Re-run time-ago and technologies scripts for new elements
if (typeof updateTimeAgo === "function") updateTimeAgo();
if (typeof renderTechnologies === "function") renderTechnologies();



for (const tool of tools) {
    const checkboxes = document.querySelectorAll(`.tool-tag-checkbox-input-${tool}`);
    checkboxes.forEach(checkbox => {
        if (checkbox.value === tool) {
            checkbox.checked = true;
            console.log(`Checkbox checked for tool: ${tool}`);
        } else {
            console.log(`Checkbox not found for tool: ${tool}`);
        }
    });
}

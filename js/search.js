// Search tool tags filter
const filterButton = document.querySelector('.filter-button'); 
const searchToolTags = document.querySelector('.search-tool-tags');

filterButton.addEventListener('click', function() {
    searchToolTags.style.display = searchToolTags.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    if (!filterButton.contains(event.target) && !searchToolTags.contains(event.target) && !document.getElementById('search-bar').contains(event.target)) {
        searchToolTags.style.display = 'none';
    }
});





// Get the full query string from the current URL
const queryString = window.location.search;

// Parse the query string
const params = new URLSearchParams(queryString);

// Get the value of the "query" parameter
const query = params.get('query') || '';
const q = query.toLowerCase();

// Get the value of the "tool" parameter
const tools = params.getAll('tool') || [];
const t = tools.map(tool => tool.toLowerCase());

// Helper: exact tool matching (comma-separated lists) – avoids substring issues (e.g., 'git' vs 'github')
function hasAllTools(toolString, required) {
    if (!toolString) return false;
    const tokens = toolString.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
    return required.every(r => tokens.includes(r));
}

console.log("Query:", query);
console.log("Tools:", tools);

// set value of input equal to query
const searchInput = document.querySelector('.search-bar');
if (searchInput) {
    searchInput.value = query || '';
}



// Helper function to find intersection of two arrays
function intersect(array1, array2) {
    let intersection = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            intersection.push(array1[i]);
        }
    }
    return intersection;
}



// SEARCH BY KEYWORDS & TOOLS
// Find the education, projects, certifications, and blog posts that include the searched keywords and tools

// Find matching EDUCATION by query and tool
const matchingEducationQuery = [];
const matchingEducationTool = [];

matchingEducationQuery.push(...Object.keys(education).filter(key => {
    const item = education[key];
    return item.id.toLowerCase().includes(q) || 
           item.title.toLowerCase().includes(q) || 
           item.degrees.some(degree => 
               (degree.degree && degree.degree.toLowerCase().includes(q)) || 
               (degree.type && degree.type.toLowerCase().includes(q)) ||
               (degree.coursework && degree.coursework.some(cw =>
                    (cw.class && cw.class.toLowerCase().includes(q)) ||
                    (cw.tools && cw.tools.toLowerCase().includes(q))
               ))
           );
}));

matchingEducationTool.push(...Object.keys(education).filter(key => {
    const item = education[key];
    // Require that ALL selected tools appear within a single coursework entry (strict interpretation)
    // If instead you want them allowed across multiple coursework entries, aggregate and check once.
    return item.degrees.some(degree =>
        (degree.coursework && degree.coursework.some(cw =>
            (cw.tools && hasAllTools(cw.tools, t))
        ))
    );
}));



// Find matching PROJECTS by query and tool
const matchingProjectsQuery = [];
const matchingProjectsTool = [];

matchingProjectsQuery.push(...Object.keys(projects).filter(key => {
    const item = projects[key];
    return item.id.toLowerCase().includes(q) ||
           item.title.toLowerCase().includes(q) ||
           item.category.toLowerCase().includes(q) ||
           item.summary.toLowerCase().includes(q) ||
           item.description.toLowerCase().includes(q) ||
           item.preview.some(previewItem => previewItem.label.toLowerCase().includes(q)) ||
           item.tools.toLowerCase().includes(q) ||
           (item.awards && item.awards.some(award =>
               (award.place && award.place.toLowerCase().includes(q)) ||
               (award.issuer && award.issuer.toLowerCase().includes(q)) ||
               (award.category && award.category.toLowerCase().includes(q))
           ));
}));

matchingProjectsTool.push(...Object.keys(projects).filter(key => {
    const item = projects[key];
    // Changed logic: require ALL selected tools for a project
    return hasAllTools(item.tools, t);
}));



// Find matching CERTIFICATIONS by query and tool
const matchingCertificationsQuery = [];
const matchingCertificationsTool = [];

matchingCertificationsQuery.push(...Object.keys(certifications).filter(key => {
    const item = certifications[key];
    return key.toLowerCase().includes(q) ||
           item.title.toLowerCase().includes(q) ||
           item.issuer.name.toLowerCase().includes(q) ||
           (item.tools && item.tools.toLowerCase().includes(q));
}));

matchingCertificationsTool.push(...Object.keys(certifications).filter(key => {
    const item = certifications[key];
    // Changed logic: require that ALL selected tools are present, not just any
    return hasAllTools(item.tools, t);
}));



// Find matching BLOG POSTS by query and tool
const matchingBlogPostsQuery = [];
const matchingBlogPostsTool = [];

fetch('/blog/posts.json')
    .then(response => response.json())
    .then(data => {
        // Filter blog posts based on the search query
        matchingBlogPostsQuery.push(...Object.keys(data).filter(key => {
            if (key === 'template') return false;
            const item = data[key];
            return item.title.toLowerCase().includes(q) ||
                   item.summary.toLowerCase().includes(q) ||
                   (item.tools && item.tools.toLowerCase().includes(q));
        }));
        // console.log("Matching Blog Posts Query:", matchingBlogPostsQuery);

        // Find matching blog posts by tool
        matchingBlogPostsTool.push(...Object.keys(data).filter(key => {
            if (key === 'template') return false;
            const item = data[key];
            // Changed logic: require ALL selected tools for a blog post
            return hasAllTools(item.tools, t);
        }));
        // console.log("Matching Blog Posts Tool:", matchingBlogPostsTool);

        // Perform intersection after both arrays are populated
        let finalBlogPosts = Object.keys(data);

        if (query.length > 0 && tools.length > 0) {
            finalBlogPosts = intersect(matchingBlogPostsQuery, matchingBlogPostsTool);
        } else if (query.length > 0) {
            finalBlogPosts = matchingBlogPostsQuery;
        } else if (tools.length > 0) {
            finalBlogPosts = matchingBlogPostsTool;
        }

        console.log("Matching Blog Posts:", finalBlogPosts);

        // Render certifications
        const blogTitle = document.querySelector('.search-blog-title');
        const blogTiles = document.querySelector('.search-blog-tiles');
        if (blogTiles && finalBlogPosts.length > 0) {
            blogTiles.style.display = 'grid';
            blogTitle.style.display = 'block';
            blogTiles.setAttribute('data-blog-posts', finalBlogPosts.join(', '));
            
            if (typeof renderBlogPosts === "function") renderBlogPosts();
        }

        // Show "no results" message if no matching results
        const noResultsMessage = document.querySelector('.search-no-results-container');
        if (finalEducation.length === 0 && finalProjects.length === 0 && finalCertifications.length === 0 && finalBlogPosts.length === 0) {
            console.log("No results found");
            noResultsMessage.style.display = 'flex';
        } else {
            noResultsMessage.style.display = 'none';
        }
    });

    

// Decide which results to show
let finalEducation = Object.keys(education);
let finalProjects = Object.keys(projects);
let finalCertifications = Object.keys(certifications);

// if (query && tools) {
//     console.log("IMPORTANT: Tools & query:", tools + " | " + query);
// } else if (query) {
//     console.log("IMPORTANT: Query:", query);
// } else if (tools) {
//     console.log("IMPORTANT: Tools:", tools);
// }

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



// console.log("Matching Education Query:", matchingEducationQuery);
// console.log("Matching Projects Query:", matchingProjectsQuery);
// console.log("Matching Certifications Query:", matchingCertificationsQuery);

// console.log("Matching Education Tool:", matchingEducationTool);
// console.log("Matching Projects Tool:", matchingProjectsTool);
// console.log("Matching Certifications Tool:", matchingCertificationsTool);

console.log("Matching Education:", finalEducation);
console.log("Matching Projects:", finalProjects);
console.log("Matching Certifications:", finalCertifications);



// Render education
const educationTitle = document.querySelector('.search-education-title');
const educationTiles = document.querySelector('.search-education-tiles');
if (educationTiles && finalEducation.length > 0) {
    educationTiles.style.display = 'grid';
    educationTitle.style.display = 'block';
    educationTiles.setAttribute('data-education', finalEducation.join(', '));
    if (typeof renderEducation === "function") renderEducation();
}



// Render projects
const projectTitle = document.querySelector('.search-project-title');
const projectTiles = document.querySelector('.search-project-tiles');
if (projectTiles && finalProjects.length > 0) {
    projectTiles.style.display = 'grid';
    projectTitle.style.display = 'block';
    projectTiles.setAttribute('data-projects', finalProjects.join(', '));
    if (typeof renderProjects === "function") renderProjects();
}



// Render certifications
const certificationTitle = document.querySelector('.search-certifications-title');
const certificationTiles = document.querySelector('.search-certification-tiles');
if (certificationTiles && finalCertifications.length > 0) {
    certificationTiles.style.display = 'grid';
    certificationTitle.style.display = 'block';
    certificationTiles.setAttribute('data-certifications', finalCertifications.join(', '));
    if (typeof renderCertifications === "function") renderCertifications();
}



// Re-run time-ago and technologies scripts for new elements (???)
if (typeof updateTimeAgo === "function") updateTimeAgo();
if (typeof renderTechnologies === "function") renderTechnologies();


// (???)
for (const tool of tools) {
    const checkboxes = document.querySelectorAll(`.tool-tag-checkbox-input-${tool}`);
    checkboxes.forEach(checkbox => {
        if (checkbox.value === tool) {
            checkbox.checked = true;
            // console.log(`Checkbox checked for tool: ${tool}`);
        } else {
            // console.log(`Checkbox not found for tool: ${tool}`);
        }
    });
}
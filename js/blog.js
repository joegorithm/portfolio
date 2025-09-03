// Fetch all data from posts.json 
// Create html tiles that will be in .blog-tiles
const createBlogTiles = (posts) => {
    return Object.values(posts).map(post => `
        <div class="blog-tile">
            <a href="/blog/${post.id}">
                <img src="/blog/${post.id}/assets/cover.png" alt="${post.title} cover image" class="blog-tile-image">
            </a>
            <a href="/blog/${post.id}">
                <h2 class="blog-tile-title">${post.title}</h2>
            </a>
            <div class="time-ago-status tooltip-element">
                <div class="time-ago-icon"></div>
                <span class="time-ago-date" data-published="${post.date}"></span>
                <span class="tooltip"></span>
            </div>
            <p class="blog-tile-summary">${post.summary}</p>
        </div>
    `).join('');
};

const createBlogDropdownList = (posts) => {
    return `
        ${Object.values(posts).map(post => `
        <li data-value="${post.id}">
            <img src="/blog/${post.id}/assets/cover.png" class="blog-post-image" alt="${post.title} cover image">
            ${post.title}
        </li>
        `).join('')}
        <li data-value="other">Other</li>
    `;
}


// Fetch posts.json and create/refresh blog tiles & dropdown
async function renderBlogPosts() {
    try {
        const response = await fetch('/blog/posts.json');
        const data = await response.json();
        const tilesContainer = document.querySelector('.blog-tiles');
        const selectedTiles = [];
        if (tilesContainer && tilesContainer.dataset.blogPosts) {
            selectedTiles.push(...tilesContainer.dataset.blogPosts.split(", "));
        }

        // Filter out posts with key "template" and apply selectedTiles filter if any
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([key]) => (key !== "template" && (selectedTiles.length > 0 ? selectedTiles.includes(key) : true)))
        );

        if (tilesContainer) {
            const blogTilesHtml = createBlogTiles(filteredData);
            tilesContainer.innerHTML = blogTilesHtml;
            // Initialize time-ago UI for newly injected tiles
            if (typeof updateTimeAgo === 'function') {
                updateTimeAgo();
            }
        }

        const dropdownContainer = document.querySelector('.form-input-entry-blog .dropdown-options');
        if (dropdownContainer) {
            const blogDropdownHtml = createBlogDropdownList(filteredData);
            dropdownContainer.innerHTML = blogDropdownHtml;
            // Notify that blog options are now populated
            document.dispatchEvent(new CustomEvent('blogDropdownOptionsReady'));
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Expose globally for other scripts to trigger a refresh
window.renderBlogPosts = renderBlogPosts;

// Initial load
renderBlogPosts();
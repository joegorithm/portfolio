// Fetch all data from posts.json 
// Create html tiles that will be in .blog-tiles
const createBlogTiles = (posts) => {
    return Object.values(posts).map(post => `
        <div class="blog-tile">
            <a href="/blog/${post.id}">
                <img src="${post.id}/assets/cover.png" alt="${post.title} cover image" class="blog-tile-image">
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


// Fetch posts.json and create blog tiles
fetch('/blog/posts.json')
    .then(response => response.json())
    .then(data => {
        const blogTilesHtml = createBlogTiles(data);
        const tilesContainer = document.querySelector('.blog-tiles');
        if (tilesContainer) tilesContainer.innerHTML = blogTilesHtml;
        // Initialize time-ago UI for newly injected tiles
        if (typeof updateTimeAgo === 'function') {
            updateTimeAgo();
        }
        
        const blogDropdownHtml = createBlogDropdownList(data);
        const dropdownContainer = document.querySelector('.form-input-entry-blog .dropdown-options');
        if (dropdownContainer) {
            dropdownContainer.innerHTML = blogDropdownHtml;
            // Notify that blog options are now populated
            document.dispatchEvent(new CustomEvent('blogDropdownOptionsReady'));
        }
    })
    .catch(error => {
        console.error('Error fetching blog posts:', error);
    });
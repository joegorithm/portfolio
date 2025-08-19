const authorData = {
    "jonathan-hill": {
        id: "jonathan-hill",
        name: {
            first: "Jonathan",
            last: "Hill"
        },
        avatar: "/media/jonathan-hill-cropped.png",
        website: "/about"
    },
    "white-chicken": {
        id: "white-chicken",
        name: {
            first: "Pink",
            last: "Chicken"
        },
        avatar: "/media/white-chicken.jpg",
        website: "https://www.khanacademy.org/profile/tomthepinkchicken"
    },
    "paddington-bear": {
        id: "paddington-bear",
        name: {
            first: "Paddington",
            last: "Bear"
        },
        avatar: "/media/paddington-bear.png",
        website: "https://www.paddington.com"
    },
    "henry-brown": {
        id: "henry-brown",
        name: {
            first: "Henry",
            last: "Brown"
        },
        avatar: "/media/henry-brown.png",
        website: "https://www.paddington.com"
    }
    // Add more authors as needed
};

// See below when /blog/posts.json is fetched
let postMetaData = null;

// Get the current blog post directory from the URL path
const getCurrentBlogPostPath = () => {
    const path = window.location.pathname;
    // Extract the blog post directory (e.g., "/blog/my-post/" -> "my-post")
    const blogMatch = path.match(/\/blog\/([^\/]+)\/?/);
    return blogMatch ? blogMatch[1] : 'blog-post-title'; // fallback to default
};

const currentBlogPost = getCurrentBlogPostPath();

document.querySelector(".blog-post-cover-image-section").innerHTML = `
    <img class="blog-post-cover-image" src="/blog/${currentBlogPost}/assets/cover.png" alt="Cover Image">
`;



// --------------------------------------------------------------------------------------------------
// Fetch blog post content and render along with code blocks, code highlighting, KaTeX, and Desmos graphs
fetch(`/blog/${currentBlogPost}/post.md`).then(response => response.text()).then(markdownContent => {
    // Sanitize the HTML output from marked.parse to prevent XSS
    const rawHtml = marked.parse(markdownContent);
    // Use DOMPurify or a similar library to sanitize the HTML
    document.getElementById('blog-content').innerHTML = DOMPurify.sanitize(rawHtml);
    
    // Add image labels under each image using its alt text
    document.querySelectorAll('#blog-content img').forEach((img) => {
        const alt = (img.getAttribute('alt') || '').trim();
        if (!alt) return; // skip if no alt text
        // Avoid duplicating labels
        const sibling = img.parentElement && img.parentElement.tagName === 'A' 
            ? img.parentElement.nextElementSibling 
            : img.nextElementSibling;
        if (sibling && sibling.classList && sibling.classList.contains('blog-post-image-label')) return;
        const label = document.createElement('span');
        label.className = 'blog-post-image-label';
        label.textContent = alt;
        const insertionTarget = (img.parentElement && img.parentElement.tagName === 'A') ? img.parentElement : img;
        insertionTarget.insertAdjacentElement('afterend', label);
    });
    // Add language labels after content is loaded (works even without explicit language-* classes)
    document.querySelectorAll("pre code").forEach(code => {
        const classList = [...code.classList];
        let langClass = classList.find(c => c.startsWith("language-"));
        let lang = "";

        if (langClass) {
            lang = langClass.replace("language-", "");
        } else if (code.dataset && code.dataset.language) {
            lang = code.dataset.language;
        } else {
            try {
                if (window.hljs && typeof hljs.highlightAuto === 'function') {
                    const detected = hljs.highlightAuto(code.textContent || "");
                    lang = detected.language || "text";
                    if (lang && !code.classList.contains(`language-${lang}`)) {
                        code.classList.add(`language-${lang}`);
                    }
                } else {
                    lang = "text";
                }
            } catch (_) {
                lang = "text";
            }
        }

        const label = document.createElement("div");
        label.className = "code-label";
        
        // Create language text
        const langText = document.createElement("span");
        langText.textContent = lang;
        langText.className = "code-language";
        
        // Create copy button
        const copyButton = document.createElement("button");
        const buttonContent = `
                <svg width="1rem" height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path d="M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z"/>
                </svg>
                <span>Copy</span>
                `;
        const buttonContentCopied = `
                    <svg width="1rem" height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
                    </svg>
                    <span>Copied!</span>
                `;
        copyButton.innerHTML = buttonContent;
        copyButton.className = "code-copy-button";
        copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(code.textContent)
                .then(() => {
                    copyButton.innerHTML = buttonContentCopied;
                    setTimeout(() => {
                        copyButton.innerHTML = buttonContent;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
        
        label.appendChild(langText);
        label.appendChild(copyButton);
        code.parentElement.insertBefore(label, code);
    });
    // Highlight code blocks after content and labels are loaded
    hljs.highlightAll();
    
    // Render math expressions with KaTeX after content is loaded
    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false},
            {left: "\\(", right: "\\)", display: false}
        ],
        throwOnError: false
    });

    // Initialize Desmos calculator if present
    const elt = document.getElementById('calculator');
    if (elt && window.Desmos && typeof Desmos.GraphingCalculator === 'function') {
        const calculator = Desmos.GraphingCalculator(elt);

        // Determine current theme: prefer localStorage, then body classes, then system preference
        const isDarkTheme = () => {
            const stored = localStorage.getItem('theme');
            if (stored === 'dark') return true;
            if (stored === 'light') return false;
            if (document.body.classList.contains('dark-theme')) return true;
            if (document.body.classList.contains('light-theme')) return false;
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        };

        // Apply initial settings with theme-aware inverted colors
        calculator.updateSettings({ language: 'en', degreeMode: false, invertedColors: isDarkTheme() });

        // Update Desmos colors when theme toggles by observing body class changes
        const themeObserver = new MutationObserver(() => {
            calculator.updateSettings({ invertedColors: isDarkTheme() });
        });
        themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        calculator.setExpression({ id: 'graph1', latex: '\\sin(x + y^2)^{50}+\\log(x^2-y)^{50}=\\frac{1}{1000}', color: Desmos.Colors.RED });

    }
}).catch(err => {
    console.error(`Failed to load blog post markdown from /blog/${currentBlogPost}/post.md:`, err);
});



// --------------------------------------------------------------------------------------------------
// Fetch and display blog post metadata
fetch(`/blog/posts.json`).then(response => response.json()).then(data => {
    const postData = data[currentBlogPost];
    postMetaData = postData;
    const blogDetailsDiv = document.querySelector('.blog-post-details');
    
    blogDetailsDiv.innerHTML = `
        <div class="blog-post-details-top">
            <div class="blog-post-detail blog-post-author">
                <h3 class="blog-post-label">${postData.authors.length === 1 ? 'Author' : 'Authors'}</h3>
                ${postData.authors.map(author => `
                    <a href="${authorData[author].website}" class="blog-post-details-author">
                        <img class="blog-post-details-author-avatar" src="${authorData[author].avatar}" alt="${authorData[author].name}" />
                        <span class="blog-post-details-author-name">${authorData[author].name.first} ${authorData[author].name.last}</span>
                    </a>
                `).join('')}
            </div>
            <div class="blog-post-detail blog-post-date">
                <h3 class="blog-post-label">Published</h3>
                <div class="time-ago-status blog-post-detail-published">
                    <div class="time-ago-icon"></div>
                    <span class="blog-post-detail-value time-ago-date blog-post-published" data-published="${postData.date}"></span>
                </div>
            </div>
        </div>
        <div class="blog-post-detail blog-post-summary">
            <h3 class="blog-post-label">Summary</h3>
            <span class="blog-post-detail-value">
                <svg width="1.2rem" height="1.2rem" style="fill: var(--secondary-text-color); align-self: end; padding: 0 0.1rem; position: relative; top: 0.25rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M278.6 438.6L182.6 534.6C170.1 547.1 149.8 547.1 137.3 534.6L41.3 438.6C28.8 426.1 28.8 405.8 41.3 393.3C53.8 380.8 74.1 380.8 86.6 393.3L128 434.7L128 128C128 110.3 142.3 96 160 96C177.7 96 192 110.3 192 128L192 434.7L233.4 393.3C245.9 380.8 266.2 380.8 278.7 393.3C291.2 405.8 291.2 426.1 278.7 438.6zM352 544C334.3 544 320 529.7 320 512C320 494.3 334.3 480 352 480L384 480C401.7 480 416 494.3 416 512C416 529.7 401.7 544 384 544L352 544zM352 416C334.3 416 320 401.7 320 384C320 366.3 334.3 352 352 352L448 352C465.7 352 480 366.3 480 384C480 401.7 465.7 416 448 416L352 416zM352 288C334.3 288 320 273.7 320 256C320 238.3 334.3 224 352 224L512 224C529.7 224 544 238.3 544 256C544 273.7 529.7 288 512 288L352 288zM352 160C334.3 160 320 145.7 320 128C320 110.3 334.3 96 352 96L576 96C593.7 96 608 110.3 608 128C608 145.7 593.7 160 576 160L352 160z"/></svg>
                ${postData.summary}
            </span>
        </div>
        <!-- !! -->
        <div class="blog-post-options">
            <button class="blog-post-options-button blog-post-options-button-share" onClick="sharePost()">
                <div class="blog-post-options-label">Share</div>
                <div class="blog-post-options-icon blog-post-options-icon-share">
                    <svg width="2.5rem" height="2.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L169.3 201.4C156.8 213.9 156.8 234.2 169.3 246.7C181.8 259.2 202.1 259.2 214.6 246.7L288 173.3L288 384C288 401.7 302.3 416 320 416C337.7 416 352 401.7 352 384L352 173.3L425.4 246.7C437.9 259.2 458.2 259.2 470.7 246.7C483.2 234.2 483.2 213.9 470.7 201.4L342.7 73.4zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 480C96 533 139 576 192 576L448 576C501 576 544 533 544 480L544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480C480 497.7 465.7 512 448 512L192 512C174.3 512 160 497.7 160 480L160 416z"/></svg>
                </div>
            </button>
            <button target="_blank" class="blog-post-options-button blog-post-options-button-cite" onClick="openCitationDialog()">
                <div class="blog-post-options-label">Cite</div>
                <div class="blog-post-options-icon">
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z"/></svg>
                </div>
            </button>
            <a href="#" class="blog-post-options-button blog-post-options-button-feedback">
                <div class="blog-post-options-label">Report Issue</div>
                <div class="blog-post-options-icon">
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM39 103c9.4-9.4 24.6-9.4 33.9 0l72.4 72.4C161.3 165.7 180 160 200 160l112 0c20 0 38.7 5.7 54.6 15.5L439 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72.4 72.4C410.3 225.3 416 244 416 264l72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0 0 8c0 27.2-6.8 52.8-18.8 75.3L473 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-70.9-70.9C339.3 462.5 299.7 480 256 480s-83.3-17.5-112.2-45.9L73 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l75.8-75.8C102.8 372.8 96 347.2 96 320l0-8-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c0-20 5.7-38.7 15.5-54.6L39 137c-9.4-9.4-9.4-24.6 0-33.9zM144 264l0 56c0 53.6 37.7 98.4 88 109.4L232 280c0-13.3 10.7-24 24-24s24 10.7 24 24l0 149.4c50.3-11 88-55.8 88-109.4l0-56c0-30.9-25.1-56-56-56l-112 0c-30.9 0-56 25.1-56 56z"></path>
                    </svg>
                </div>
            </a>
        </div>
        <!-- !! -->
        <div class="blog-post-detail blog-post-technologies">
            <h3 class="blog-post-label">Mentioned Tech</h3>
            <div class="tool-tags project-details-tech-stack tool-tags" data-technologies="${postData.tools}"></div>
        </div>
    `;
    
    // Update page title with the blog post title
    // document.title = `${postData.title} › Blog › jh.codes`;
    
    // Update meta tags for better SEO and sharing
    // document.querySelector('meta[property="og:title"]').content = `${postData.title} › Blog › jh.codes`;
    // document.querySelector('meta[property="og:description"]').content = postData.summary;
    
    // Initialize technology tags if the technologies.js function is available
    if (typeof renderTechnologies === 'function') {
        renderTechnologies();
    }
    
    // Initialize time-ago after details are injected
    if (typeof updateTimeAgo === 'function') {
        updateTimeAgo();
    }
}).catch(err => {
    console.error(`Failed to load blog post metadata from /blog/${currentBlogPost}/post.json:`, err);
});




function sharePost() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: "Check out this post!",
      url: window.location.href
    }).catch(err => console.error("Error sharing:", err));
  } else {
    // fallback if Web Share API isn’t supported
    copyLink();
  }
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("Link copied to clipboard!");
  });
}
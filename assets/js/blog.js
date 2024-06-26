/** Selectors */
// TODO: Create a variable that selects the main element
const main = document.querySelector('main');

// TODO: Create a function that builds an element and appends it to the DOM
function addBlog({username, title, content}) {
    // Create Blog post elements
    const article = document.createElement('article');
    const titleElement = document.createElement('h2');
    const contentElement = document.createElement('blockquote');
    const authorElement = document.createElement('p');
    
    // Set elements content
    titleElement.innerText = title;
    contentElement.innerText = content;
    authorElement.innerText = `Posted by: ${username}`;

    // Add class and append elements to the article
    article.classList.add('card');
    article.appendChild(titleElement);
    article.appendChild(contentElement);
    article.appendChild(authorElement);
    
    // add article to main
    main.appendChild(article)
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoBlogPost() {
    const noBlogElement = document.createElement('p');
    noBlogElement.innerText = 'No Blog posts yet...';
    main.appendChild(noBlogElement);
}

// TODO: Create a function that reads from local storage and returns the data
function readBlogPosts() {
    const data = localStorage.getItem(STORED_DATA);
    return JSON.parse(data);
}

const data = readBlogPosts();
if (!data) handleNoBlogPost();
else data.forEach((blog) => addBlog(blog));

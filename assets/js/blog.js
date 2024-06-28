// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backButtonEl = document.getElementById('back');
const noPostsEl = document.getElementById('no-blog-post');

// TODO: Create a function that builds an element and appends it to the DOM
function addBlog({ username, title, content }) {
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
    mainEl.appendChild(article)
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    noPostsEl.setAttribute('style', 'display: block');
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    let data = readLocalStorage();
    if (!data.length) {
        noPosts()
        return;
    };

    data.forEach((blog) => addBlog(blog));
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButtonEl.addEventListener('click', () => redirectPage('index.html'));

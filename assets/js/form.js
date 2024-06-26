// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
const errorMessage = document.querySelector('#error');

const redirectURL = 'blog.html';

const redirectPage = function (url) {
    location.assign(url);
};

// TODO: Create a function that handles the form submission. then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
function handleForm(event) {
    // prevent default form submission
    event.preventDefault();

    // get data from Local Storage
    let data = readLocalStorage();

    // get form data
    const formData = new FormData(form);
    const username = formData.get('username');
    const title = formData.get('title');
    const content = formData.get('content');

    // validate form data
    if (!username || !title || !content) {
        errorMessage.classList.remove(DISPLAY_NONE)
        return;
    }

    // hide error message on success
    errorMessage.classList.add(DISPLAY_NONE)
    
    // store data
    const blogData = {username, title, content};
    data.push(blogData)
    storeLocalStorage(JSON.stringify(data));

    // clear form
    form.reset();

    // redirect user to blogs
    redirectPage(redirectURL);
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleForm);

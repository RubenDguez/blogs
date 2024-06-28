// TODO: Create a variable that selects the form element
const formEl = document.querySelector('form');
const errorEl = document.querySelector('#error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleForm(event) {
    event.preventDefault();

    const formData = new FormData(formEl);
    const username = formData.get('username');
    const title = formData.get('title');
    const content = formData.get('content');

    if (!username || !title || !content) {
        errorEl.setAttribute('style', 'display: block;');
        return;
    }

    errorEl.setAttribute('style', 'display: none;');

    storeLocalStorage({ username, title, content });
    formEl.reset();

    redirectPage('blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', handleForm);

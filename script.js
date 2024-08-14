
document.getElementById('submit').addEventListener('click', function(validate) {
    
    validate.preventDefault();

    var email = document.getElementById('email').value;
    var messageParagraph = document.getElementById('message');

    var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValidEmail) {
        messageParagraph.style.display = 'none';
    } else {
        messageParagraph.style.display = 'block';
    }
});


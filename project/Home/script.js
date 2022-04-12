

function test() {
    document.getElementById('play').innerHTML = 'this is a test';
}

function subscripted() {
    var email = document.getElementById('email').value;
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email_regex.test(email)) {
        alert('You have subscribed to our newsletter');
    } else {
        alert('Please enter a valid email address');
    }
    document.getElementById('email').value = '';
}
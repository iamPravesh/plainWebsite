const formSubmitted = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;

    if (name === '' || email === '' || message === '' || number === '') {
        alert('Please fill in all fields');
        return false;
    } else if (!email.toLowerCase().endsWith('@gmail.com')) {
        alert('Please enter a valid email');
        return false;
    } else if (number.length < 10 || number.length > 10 || isNaN(number)) {
        alert('Please enter a valid number');
        return false;
    } else {
        alert('Form submitted successfully');
        return true;
    }
}
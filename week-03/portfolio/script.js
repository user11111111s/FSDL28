// Simple form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert('Message sent! We will get back to you soon.');
        // Optionally, reset the form after submission
        this.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

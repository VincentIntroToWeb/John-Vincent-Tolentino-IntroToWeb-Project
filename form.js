document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || !lastName || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (confirm('Do you want to submit the form?')) {
        document.getElementById('contactForm').style.display = 'none';
        
        document.getElementById('displayName').innerText = `Name: ${firstName} ${lastName}`;
        document.getElementById('displayEmail').innerText = `Email: ${email}`;
        document.getElementById('displayMessage').innerText = `Message: ${message}`; 

        document.getElementById('submittedData').style.display = 'block';
    }
});

document.getElementById('backButton').addEventListener('click', function () {
    document.getElementById('submittedData').style.display = 'none';
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').style.display = 'block';
});
// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript interactions and functions
});

    // JavaScript for handling the star rating and displaying the thank you message
    const stars = document.querySelectorAll('.rating input');
    const thankYouMessage = document.getElementById('thank-you');

    stars.forEach(star => star.addEventListener('click', () => {
        thankYouMessage.style.display = 'block';
    }));
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("contact-form");
        const thankYouMessage = document.getElementById("thank-you");
    
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from actually submitting
    
            // Simulate form submission (You can replace this with an actual AJAX request)
            // For demonstration purposes, we're using a simple timeout to show the message.
            setTimeout(function() {
                // Display the "Submission Received" message
                thankYouMessage.style.display = "block";
                // Reset the form (you can remove this line if you don't want to reset the form)
                form.reset();
            }, 2000); // Adjust the time (in milliseconds) as needed
        });
    });
    




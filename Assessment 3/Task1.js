const timerElement = document.getElementById("timer");
const eventStartTime = new Date().getTime() + 10 * 60 * 1000;

function updateTimer() {
    const now = new Date().getTime();
    const remainingTime = eventStartTime - now;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Event has started!";
    } else {
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        timerElement.textContent = `Time remaining: ${minutes}m ${seconds}s`;
    }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

const form = document.getElementById("registrationForm");
const errorElement = document.getElementById("error");
const confirmationElement = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from the default submission

    // Get values from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        errorElement.textContent = "Both fields are required.";
        errorElement.classList.remove("d-none"); // Show error message
        return;
    }

    errorElement.classList.add("d-none");

    simulateSubmission(name, email)
        .then((userData) => {
            confirmationElement.textContent = `Registration successful! Welcome, ${userData.name} (${userData.email})`;
            confirmationElement.classList.remove("d-none");
            form.reset();
        })
        .catch((error) => {
            errorElement.textContent = "Something went wrong, please try again.";
            errorElement.classList.remove("d-none");
        });
});

function simulateSubmission(name, email) {
    return new Promise((resolve, reject) => {
        // Simulate delay of 2 seconds
        setTimeout(() => {
            resolve({ name: name, email: email });
        }, 2000);
    });
}
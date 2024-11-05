document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
        } else {
            messageDiv.textContent = `Thank you! Your email address "${email}" has been added to our mailing list!`;
            messageDiv.style.color = "green";
        }
    });
});

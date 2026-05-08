// Simple client-side interaction for the 'Hello World' app

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const helloButton = document.getElementById('helloButton');

    // Initial setup message
    console.log("Application loaded successfully!");

    // Event listener for the button
    helloButton.addEventListener('click', () => {
        const message = "Hello, World! You successfully interacted with the app.";
        greetingElement.textContent = message;
        alert(message);
    });
});
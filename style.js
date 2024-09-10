// set the target date and time for the countdown (midnight of sept 11, 2024)
const targetDate = new Date("September 11, 2024 00:00:00").getTime()

function updateCountdown() {
    const now = new Date().getTime()
    const difference = targetDate - now

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)


    // Display the countdown
    const countdownElement = document.getElementById('countdown')
    if (difference > 0) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    } else {
        countdownElement.innerHTML = "Happy Birthday!"

        clearInterval(countdownInterval) //stop the countdown
    }
} 

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000)
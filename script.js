// script.js

function updateClock() {
    // Get the current time
    
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be '12'

    // Pad minutes and seconds with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in HH:MM:SS AM/PM format
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;
    
    const days =[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'     
    ];

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    const dateString = `${dayName} ${monthName} ${date} ${year}`;

    document.getElementById('date').innerText = dateString;
 
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call the function once to initialize the clock immediately
updateClock();

// Get button
const themeToggle =
    document.getElementById('themeToggle');

// Track theme state
let isDarkMode = true;


// Listen for button click
themeToggle.addEventListener('click', () => {

    // Toggle class on body
    document.body.classList.toggle('light-mode');

    // Flip boolean value
    isDarkMode = !isDarkMode;

    // Update button text
    if (isDarkMode) {

        themeToggle.innerText =
            '🌙 Dark Mode';

    } else {

        themeToggle.innerText =
            '☀️ Light Mode';
    }
});

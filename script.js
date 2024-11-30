let userPoints = 0;
let username = "";
let currentMode = "normal";
let currentChallenge = null;
let leaderboard = [];

// Show login modal
document.getElementById('login-btn').addEventListener('click', function() {
    username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username && password.length === 4) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('game-interface').style.display = 'block';
        document.getElementById('user-name').innerText = Welcome, ${username};
    } else {
        alert("Please enter a valid username and 4-digit password");
    }
});

// Generate a binary challenge and display it
function generateChallenge() {
    let decimal = Math.floor(Math.random() * 100) + 1;
    currentChallenge = {
        decimal: decimal,
        binary: decimal.toString(2),
        octal: decimal.toString(😎,
        hexadecimal: decimal.toString(16).toUpperCase()
    };

    document.getElementById('challenge').innerText = Convert ${currentChallenge.decimal} to Binary (or other formats);
}

// Check the user's answer
document.getElementById('submit-answer').addEventListener('click', function() {
    let answer = document.getElementById('answer').value.trim();

    if (answer === currentChallenge.binary) {
        userPoints += 10;
        alert("Correct! +10 Points");
    } else {
        alert("Wrong answer. Try again!");
    }

    document.getElementById('user-points').innerText = Points: ${userPoints};
    generateChallenge();
});

// Speed Challenge Mode
document.getElementById('challenge-mode').addEventListener('click', function() {
    currentMode = 'speed';
    alert("Speed Challenge Mode Activated! Answer as fast as you can.");
    setInterval(generateChallenge, 3000);  // Challenge every 3 seconds
});

// Show leaderboard
function showLeaderboard() {
    leaderboard.push({ username, points: userPoints });
    leaderboard.sort((a, b) => b.points - a.points);
    leaderboard = leaderboard.slice(0, 5); // Show top 5 scores
    alert("Leaderboard: " + leaderboard.map((entry, index) => ${index + 1}. ${entry.username}: ${entry.points}).join('\n'));
}

// Generate first challenge
generateChallenge();

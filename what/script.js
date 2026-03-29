const btn = document.getElementById('btn');
const music = document.getElementById('music');

const heartEmoji = '💗';
const partyEmoji = '🎉';
const minSize = 5;
const maxSize = 50;
const minDuration = 5;
const maxDuration = 8;
const spawnRate = 200; 

btn.addEventListener("click", func, {once:true});

function func() {
    alert ("This song about to play reminds me of you!");
    music.play();

    function createHP () {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmoji;

    const party = document.createElement('div');
    party.className = 'party';
    party.textContent = partyEmoji;

    // Random position at bottom of screen
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.bottom = '0px';
    party.style.left = `${Math.random() * window.innerWidth}px`;
    party.style.bottom = '0px';        

    // Random size
    const size = Math.random() * (maxSize - minSize) + minSize;
    heart.style.fontSize = `${size}px`;
    party.style.fontSize = `${size}px`;

    // Random animation duration
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;
    heart.style.animationDuration = `${duration}s`;
    party.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(heart);
    document.body.appendChild(party);
    
    // Remove hp after animation completes
    setTimeout(() => heart.remove(), duration * 1000);
    setTimeout(() => party.remove(), duration * 1000);
    }

// Create at regular intervals
setInterval(createHP, spawnRate);

// Initial burst
for (let i = 0; i < 10; i++) {
    setTimeout(createHP, i * 100);
}

}
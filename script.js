 
 document.addEventListener('DOMContentLoaded', function() {
   
    function createHearts() {
        const container = document.querySelector('.hearts');
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            container.appendChild(heart);
        }
    }

    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');

    document.addEventListener('click', () => {
        bgMusic.play().catch(e => console.log("Автовоспроизведение заблокировано"));
    }, { once: true });

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = '🔊';
        } else {
            bgMusic.pause();
            musicToggle.textContent = '🔇';
        }
    });

    const sections = {
        home: document.getElementById('home'),
        letter: document.getElementById('letter'),
        gallery: document.getElementById('gallery'),
        timer: document.getElementById('timer'),
        compliments: document.getElementById('compliments'),
        interactiveLove: document.getElementById('interactiveLove'),
        secretMessage: document.getElementById('secretMessage')
    };

    function showSection(sectionId) {
        Object.values(sections).forEach(section => {
            section.classList.add('hidden');
        });
        sections[sectionId].classList.remove('hidden');
        
        window.scrollTo(0, 0);
        
        if (sectionId === 'secretMessage') {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach((reveal, index) => {
                setTimeout(() => {
                    reveal.classList.add('show');
                }, index * 800);
            });
        }
    }

    document.getElementById('openLetter').addEventListener('click', () => showSection('letter'));
    document.getElementById('nextPage').addEventListener('click', () => showSection('gallery'));
    document.getElementById('toTimer').addEventListener('click', () => showSection('timer'));
    document.getElementById('toCompliments').addEventListener('click', () => showSection('compliments'));
    document.getElementById('toLoveMessage').addEventListener('click', () => showSection('interactiveLove'));
    document.getElementById('toSecret').addEventListener('click', () => showSection('secretMessage'));
    document.getElementById('toHome').addEventListener('click', () => showSection('home'));

    function updateTimer() {
        const startDate = new Date('2025-04-26'); 
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
    }

    const compliments = [
        "Самая красивая! 💖",
        "Самая добрая! 🌸",
        "Самая умная! 🧠",
        "Самая нежная! 🌼",
        "Самая любимая! 💘",
        "Самая заботливая! 🤗",
        "Самая стильная! 👗",
        "Самая лучшая! 🌟",
        "Самая обаятельная! 😊",
        "Самая неповторимая! ✨"
    ];

    document.getElementById('generateCompliment').addEventListener('click', () => {
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        document.getElementById('complimentText').textContent = randomCompliment;
    });

    document.querySelector('.love-message').addEventListener('mouseover', function() {
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.classList.add('love-heart');
            heart.innerHTML = '❤️';
            heart.style.setProperty('--random-x', `${Math.random() * 200 - 100}px`);
            heart.style.left = `${50 + Math.random() * 20 - 10}%`;
            this.querySelector('.hearts-container').appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    });

    createHearts();
    setInterval(updateTimer, 1000);
});
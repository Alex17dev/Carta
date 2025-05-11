document.addEventListener("DOMContentLoaded", () => {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const heartContainer = document.querySelector('.heart-container');

function toggleEnvelope() {
    envelopeWrapper.classList.toggle('flap');

    if (envelopeWrapper.classList.contains('flap')) {
        for (let i = 0; i < 20; i++) {
            createFloatingHeart();
        }

        // Crear y reproducir sonido
        const audio = new Audio('The Weeknd - Save Your Tears (Official Audio).mp3');
        audio.volume = 0.5; // Volumen opcional (0.0 a 1.0)
        audio.play();
    }
}


    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-floating');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';

        // Movimiento aleatorio en X (-100px a 100px) y en Y (-100px a -200px)
        const x = (Math.random() * - 200 - 100) + 'px';
        const y = (Math.random() * -100 - 100) + 'px';

        heart.style.setProperty('--x', x);
        heart.style.setProperty('--y', y);

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Escuchas para click o teclado (Enter / espacio)
    envelopeWrapper.addEventListener('click', toggleEnvelope);
    envelopeWrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleEnvelope();
            e.preventDefault();
        }
    });
});


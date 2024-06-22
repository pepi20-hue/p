document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const loveMessage = document.getElementById('love-message');

    heart.addEventListener('click', () => {
        loveMessage.classList.toggle('hidden');
    });
});

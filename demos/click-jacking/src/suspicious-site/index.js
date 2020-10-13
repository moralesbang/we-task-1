const revealButton = document.getElementById('reveal-btn');
const clickJacker = document.getElementById('click-jacker');

revealButton.addEventListener('click', () => {
  if (clickJacker.classList.contains('visible-button')) {
    clickJacker.classList.remove('visible-button');
    revealButton.innerText = 'Reveal Layer';
  } else {
    clickJacker.classList.add('visible-button');
    revealButton.innerText = 'Hide Layer';
  }
})

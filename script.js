document.addEventListener("DOMContentLoaded", () => {
  const arcades = document.querySelectorAll('.galeria-item');

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  arcades.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');

      const imgGrande = document.createElement('img');
      // Usa el atributo data-full si existe, si no, usa el src normal
      imgGrande.src = img.dataset.full || img.src;
      imgGrande.alt = img.alt;

      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }

      lightbox.appendChild(imgGrande);

      const closeBtn = document.createElement('span');
      closeBtn.textContent = '×';
      closeBtn.classList.add('close-btn');
      lightbox.appendChild(closeBtn);

      closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
      });
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
});

  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Toggle dropdown on mobile
  dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    }
  });
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const module = header.parentElement;
    module.classList.toggle('active');

    const arrowImg = header.querySelector('.arrow img');
    const isActive = module.classList.contains('active');

    arrowImg.src = isActive ? 'images/up-arrow.png' : 'images/down-arrow.png';
    arrowImg.alt = isActive ? 'Up arrow' : 'Down arrow';
  });
});

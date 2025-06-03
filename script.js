  const plans = document.querySelectorAll('.plan');
  const details = document.querySelectorAll('.plan-details');

  plans.forEach(plan => {
    plan.addEventListener('click', () => {
      // Remove active class from all
      plans.forEach(p => p.classList.remove('active'));
      details.forEach(d => d.classList.remove('active'));

      // Add active class to clicked plan and its detail
      plan.classList.add('active');
      const selected = plan.getAttribute('data-plan');
      document.getElementById(selected).classList.add('active');
    });
  });


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

//Accordion Header
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const module = header.parentElement;
      module.classList.toggle('active');
    });
  });

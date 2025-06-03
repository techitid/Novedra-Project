
  // Toggle Pricing Plan Details Based on User Selection
  // This script shows details of the selected pricing plan and hides the others

 const allPlans = document.querySelectorAll('.plan');
  const allDetails = document.querySelectorAll('.plan-details');

  allPlans.forEach(plan => {
    plan.addEventListener('click', () => {
      const selectedPlan = plan.getAttribute('data-plan');

      // Remove 'active' class from all plans
      allPlans.forEach(p => p.classList.remove('active'));
      // Add 'active' to all plans with same data-plan
      document.querySelectorAll(`.plan[data-plan="${selectedPlan}"]`)
        .forEach(matchingPlan => matchingPlan.classList.add('active'));

      // Hide all plan details
      allDetails.forEach(detail => detail.classList.remove('active'));

      // Show the selected plan detail
      const targetDetail = document.getElementById(selectedPlan);
      if (targetDetail) {
        targetDetail.classList.add('active');
      }
    });
  });


//Responsive Navigation Toggle with Dropdown Support
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

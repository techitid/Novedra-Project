  // Toggle Pricing Plan Details Based on User Selection
  // This script shows details of the selected pricing plan and hides the others
  const allPlans = document.querySelectorAll('.plan');
  const allDetails = document.querySelectorAll('.plan-details');

  function activatePlan(planName) {
    // Remove active from all
    allPlans.forEach(p => p.classList.remove('active'));
    allDetails.forEach(d => d.classList.remove('active'));

    // Activate all matching plans
    document.querySelectorAll(`.plan[data-plan="${planName}"]`)
      .forEach(p => p.classList.add('active'));

    // Show matching details
    const targetDetail = document.getElementById(planName);
    if (targetDetail) {
      targetDetail.classList.add('active');

      // If triggered from footer plan, scroll to the detail section
      setTimeout(() => {
        targetDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // slight delay ensures element is visible
    }
  }

  // Handle plan clicks
  allPlans.forEach(plan => {
    plan.addEventListener('click', () => {
      const selectedPlan = plan.getAttribute('data-plan');
      activatePlan(selectedPlan);
    });
  });

  // Always activate the first plan on page load
  const firstPlan = allPlans[0];
  if (firstPlan) {
    const defaultPlan = firstPlan.getAttribute('data-plan');
    activatePlan(defaultPlan);
  }

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

//Accordion
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const module = header.parentElement;
      module.classList.toggle('active');
    });
  });

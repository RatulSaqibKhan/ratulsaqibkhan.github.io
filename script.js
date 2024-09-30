// Calculate the current year for the copyright section
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Calculate the total years of experience dynamically
const startYear = 2018; // Starting year of experience
const experienceYears = currentYear - startYear;
const experienceElements = document.querySelectorAll('.experience-years');
experienceElements.forEach(el => {
  el.textContent = experienceYears + '+';
});
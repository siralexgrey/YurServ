// Load jQuery from NPM
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

// Listen for click on the document
document.addEventListener('click', (event) => {
  // Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains('accordion-toggle')) return;

  // Get the target content
  const content = document.querySelector(event.target.hash);
  if (!content) return;

  // Prevent default link behavior
  event.preventDefault();

  // If the content is already expanded, collapse it and quit
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }

  // Get all open accordion content, loop through it, and close it
  const accordions = document.querySelectorAll('.accordion-content.active');
  for (let i = 0; i < accordions.length; i += 1) {
    accordions[i].classList.remove('active');
  }

  // Toggle our content
  content.classList.toggle('active');
});

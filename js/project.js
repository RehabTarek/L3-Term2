// script.js

// Dynamically build the navigation bar based on sections
const navList = document.getElementById('nav-list');
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  const navItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `#${section.id}`;
  link.textContent = section.dataset.nav;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
  });
  navItem.appendChild(link);
  navList.appendChild(navItem);
});

// Highlight the currently active section when scrolling
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -100 && rect.top <= 300) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

// Get form elements for comment functionality
const form = document.getElementById('comment-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const commentsDisplay = document.getElementById('comments-display');
const formError = document.getElementById('form-error');

// Load comments from localStorage and display them
function loadComments() {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  commentsDisplay.innerHTML = '';
  comments.forEach(displayComment);
}

// Display a single comment on the page
function displayComment({ name, email, comment }) {
  const div = document.createElement('div');
  div.classList.add('comment');
  div.innerHTML = `<strong>${name}</strong> (${email}): <p>${comment}</p>`;
  commentsDisplay.appendChild(div);
}

// Handle comment form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  // Form validation
  if (!name || !email || !comment) {
    formError.textContent = 'All fields are required.';
    return;
  }
  if (!email.includes('@')) {
    formError.textContent = 'Email must contain @.';
    return;
  }

  // If valid, save and display the comment
  formError.textContent = '';
  const newComment = { name, email, comment };
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push(newComment);
  localStorage.setItem('comments', JSON.stringify(comments));

  displayComment(newComment);
  form.reset();
});

// Load saved comments after page load
window.addEventListener('DOMContentLoaded', loadComments);

// Show or hide the 'scroll to top' button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll smoothly to the top when 'scroll to top' button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smoothly hide/show navbar based on scroll direction
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
navbar.style.transition = 'top 0.6s ease, box-shadow 0.3s ease';
navbar.style.position = 'fixed';
navbar.style.width = '100%';
navbar.style.top = '0';
navbar.style.zIndex = '1000';
navbar.style.backgroundColor = 'black';
navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = '-80px';
    navbar.style.opacity = '0.8';
  } else {
    // Scrolling up
    navbar.style.top = '0';
    navbar.style.opacity = '1';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // handle mobile and negative scroll
});

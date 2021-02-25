/*
let burgerMenu = document.querySelector('.mobile');
let navDropdown = document.querySelector('.nav-dropdown');

burgerMenu.addEventListener('click', () => {
  if (navDropdown.style.display === 'none') {
    navDropdown.style.display = 'block';
  } else {
    navDropdown.style.display = 'none';
  }
})
*/

$(document).ready(() => {
  $('.mobile').click(() => {
    $('.nav-dropdown').toggle()
  });
})

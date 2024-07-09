const toggleButton = document.querySelector('.button-toggle');
const menuColumn = document.querySelector('.menu-column ul');

toggleButton.addEventListener('click', () => {
  // Toggle the display property of the menu
  menuColumn.style.display = menuColumn.style.display === 'flex' ? 'none' : 'flex';
});


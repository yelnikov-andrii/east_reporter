// toggle mobile menu
const toggleButton = document.querySelector('.header__toggle');
const headerList = document.querySelector('.header-list');

toggleButton.addEventListener('click', () => {
  headerList.classList.toggle('active');
  toggleButton.classList.toggle('active');
});
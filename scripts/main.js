const picker = document.querySelector('.language-picker');
const toggleBtn = document.getElementById('language-toggle');
const language = document.getElementById('language');
const dropdownItems = document.querySelectorAll('.language-dropdown li');
const burgerBtn = document.getElementById('burger-button');
const menuContainer = document.getElementById('menu-container');

//open the language menu
toggleBtn.addEventListener('click', () => {
    picker.classList.toggle('open');
});

//select and change the language and add checkmark
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        dropdownItems.forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        language.innerHTML = `${item.dataset.lang}`;
    });
});

// Close the language menu when clicking outside it
document.addEventListener('click', (e) => {
    if (!picker.contains(e.target)) {
        picker.classList.remove('open');
    }
});

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    menuContainer.classList.toggle('open');
  });


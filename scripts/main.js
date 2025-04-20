const picker = document.querySelector('.language-picker');
const toggleBtn = document.getElementById('language-toggle');
const language = document.getElementById('language');
const dropdownLanguage = document.getElementById('language-dropdown');
const dropdownItems = dropdownLanguage.querySelectorAll('li');
const burgerBtn = document.getElementById('burger-button');
const menuContainer = document.getElementById('menu-container');

const signInBtn = document.getElementById('btn-signin');
const userInfo = document.getElementById('user-info');
const userDropdown = document.getElementById('user-dropdown');
const userDropdownItems = userDropdown.querySelectorAll('li');
const mobileUserMenu = document.getElementById('mobile-user-menu');
const userEmailButton = document.getElementById('user-email-btn');

const input = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');
const subscribeBtn = document.getElementById('subscribe-button');

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

// Open menu modal
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    menuContainer.classList.toggle('open');
  });

// user account sign in (imitation)
signInBtn.addEventListener('click', () => {
    signInBtn.classList.add('hidden');
    userInfo.classList.remove('hidden');
    mobileUserMenu.classList.toggle('hidden');
});

// open user dropdown
userEmailButton.addEventListener('click', () => {
    userDropdown.classList.toggle('open');
    userInfo.classList.toggle('open');
});


//validation of subscription form 
subscribeBtn.addEventListener('click', () => {
    console.log("click");
    const value = input.value.trim();
    console.log(value);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValidEmail || value === '') {
        input.classList.add('error');
        errorIcon.style.display = 'inline-block';
    } else {
        input.classList.remove('error');
        errorIcon.style.display = 'none';
    }

})
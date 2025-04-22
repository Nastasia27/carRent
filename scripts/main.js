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

const input = document.getElementById('email-subscribe');
const inputWrapper = document.getElementById('email-subscribe-wrapper');
const errorIcon = document.getElementById('error-icon');
const subscribeBtn = document.getElementById('subscribe-button');

const steps = document.querySelectorAll('.step-section');
const stepperItems = document.querySelectorAll('.stepper .step');
const stepper = document.getElementById('stepper');
const smallCarInfoBlock = document.getElementById('small-car-info');

const countryCodeDropdown = document.getElementById('country-code-dropdown');
const countryCodeDropdownItems = countryCodeDropdown.querySelectorAll('li');
const countryName = document.getElementById('countryName');
const phone = document.getElementById('phone');
const phoneWrapper = document.getElementById('phone-wrapper');
const selectedCode = document.getElementById('selected-code-display');


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
subscribeBtn.addEventListener('click', (e) => {
    console.log("click");
    const value = input.value.trim();
    console.log(value);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValidEmail || value === '') {
        input.classList.add('error');
        inputWrapper.classList.add('error');
        console.log('error');
        errorIcon.style.display = 'inline-block';
    } else {
        input.classList.remove('error');
        errorIcon.style.display = 'none';
    }
});

// stepper functionality
function showStep(stepNumber) {

    steps.forEach((step, i) => {
        step.classList.toggle('active', i == stepNumber - 1);
    });

    stepperItems.forEach((item, i) => {
        item.classList.remove('active', 'done');

        if (i === stepNumber - 2) {
            item.classList.add('active', i !== stepNumber - 1)
        } else if ( i < stepNumber - 2) {
            item.classList.add('done');
        }
    });
}

document.getElementById('booking-btn').addEventListener('click', () => {
    stepper.classList.remove('hidden');
    showStep(2);
});

document.getElementById('toInsurance-btn').addEventListener('click', () => {
    showStep(3);
});

document.getElementById('toConfirmOrder-btn').addEventListener('click', () => {
    showStep(4);
    smallCarInfoBlock.classList.add('hidden');
});


// additional service button
document.querySelectorAll('.extra').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
    })
})


//open the country code menu
let selectedCountryCode = "+1";

document.getElementById('countryCode').addEventListener('click', () => {
    document.getElementById('phone-wrapper').classList.toggle('open');
});

countryCodeDropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        countryCodeDropdownItems.forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        selectedCountryCode = item.dataset.code;
        countryName.innerHTML = `${item.textContent}`;
        console.log(selectedCountryCode);
        console.log(selectedCode);
        selectedCode.textContent = selectedCountryCode;
        selectedCode.classList.add('selected');
    });
});

document.addEventListener('click', (e) => {
    if (!phoneWrapper.contains(e.target)) {
        phoneWrapper.classList.remove('open');
    }
});

// phone format !!!!! here only number without country code!
phone.addEventListener('input', function (e) {
    selectedCode.classList.add('selected');
    let input = e.target.value.replace(/\D/g, ''); 

    input = input.substring(0, 10);

    let formatted = '';

    if (input.length > 0) {
        formatted += '(' + input.substring(0, 3);
    }
    if (input.length >= 4) {
        formatted += ') ' + input.substring(3, 6);
    }
    if (input.length >= 7) {
        formatted += '-' + input.substring(6, 10);
    }

    e.target.value = formatted;
});
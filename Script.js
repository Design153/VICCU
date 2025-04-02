// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Service Tabs
const tabs = document.querySelectorAll('.tab');
const tabContent = document.getElementById('tab-content');

const tabData = {
    loans: 'Explore affordable loans and microfinance options tailored to your needs.',
    savings: 'Secure your future with our savings and investment accounts.',
    digital: 'Experience seamless digital banking with our mobile app.'
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const content = tabData[tab.dataset.tab];
        tabContent.textContent = content;
        const img = tabContent.querySelector('.service-img');
        if (!img) {
            const newImg = document.createElement('img');
            newImg.src = 'C:/Users/MICROSOFT SURFACE/Desktop/Erick-001/4.jpeg';
            newImg.alt = 'Services';
            newImg.className = 'service-img';
            tabContent.appendChild(newImg);
        }
    });
});

// Money Transfers Flags
const flags = document.querySelectorAll('.flag');
const currencyInfo = document.getElementById('currency-info');

const currencyData = {
    cameroon: { currency: 'Central African CFA Franc (XAF)', rate: 600 },
    nigeria: { currency: 'Nigerian Naira (NGN)', rate: 1600 },
    ghana: { currency: 'Ghanaian Cedi (GHS)', rate: 15 },
    kenya: { currency: 'Kenyan Shilling (KES)', rate: 130 },
    'south-africa': { currency: 'South African Rand (ZAR)', rate: 18 },
    algeria: { currency: 'Algerian Dinar (DZD)', rate: 135 },
    egypt: { currency: 'Egyptian Pound (EGP)', rate: 50 },
    morocco: { currency: 'Moroccan Dirham (MAD)', rate: 10 },
    uganda: { currency: 'Ugandan Shilling (UGX)', rate: 3700 },
    tanzania: { currency: 'Tanzanian Shilling (TZS)', rate: 2700 }
};

flags.forEach(flag => {
    flag.addEventListener('click', () => {
        const country = flag.dataset.country;
        const data = currencyData[country];
        currencyInfo.textContent = `${country.charAt(0).toUpperCase() + country.slice(1)}: ${data.currency} - 1 USD = ${data.rate} ${data.currency.split(' ')[data.currency.split(' ').length - 1]}`;
    });
});

// Loan Calculator
function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const duration = parseInt(document.getElementById('loan-duration').value);
    const interestRate = 0.06; // 6% annual interest
    const monthlyInterest = interestRate / 12;
    const monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -duration));
    const result = document.getElementById('result');

    if (isNaN(amount) || isNaN(duration) || amount <= 0 || duration <= 0) {
        result.textContent = 'Please enter valid loan amount and duration.';
    } else {
        result.textContent = `Estimated Monthly Payment: ${monthlyPayment.toFixed(2)} FCFA`;
    }
}

// Theme Toggle
const colorTheme = document.getElementById('color-theme');
const modeToggle = document.getElementById('mode-toggle');
let isDarkMode = false;

colorTheme.addEventListener('change', () => {
    document.body.classList.remove('default-theme', 'green-theme', 'purple-theme', 'red-theme', 'orange-theme');
    document.body.classList.add(`${colorTheme.value}-theme`);
});

modeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    modeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});
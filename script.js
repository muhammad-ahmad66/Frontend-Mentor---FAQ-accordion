const qs = document.querySelectorAll('.question-box');
const faqBox = document.querySelector('.faqs-container');

let r = document.querySelector(':root');
const rStyle = getComputedStyle(r);
let colorLightPink = rStyle.getPropertyValue('--color-light-pink');

function handler(e) {
  // Selecting question box
  const q = e.target.closest('.question-box');

  // if (!q) return;
  if (!q) return;
  // Toggle the active class
  q.parentElement.classList.toggle('active');

  // Remove border from question box
  if (q.parentElement.classList.contains('active')) {
    q.style.borderBottom = 0;
    q.nextElementSibling.style.borderBottom = `1px solid ${colorLightPink}`;
  } else {
    q.style.borderBottom = `1px solid ${colorLightPink}`;
  }

  // changing the icon
  const icon = q.querySelector('#icon');

  const i = icon.src.split('-');
  // console.log(iconPlus);

  if (i[i.length - 1] === 'plus.svg') {
    icon.src = `/assets/images/icon-minus.svg`;
  } else {
    icon.src = `/assets/images/icon-plus.svg`;
  }
}

faqBox.addEventListener('click', handler);

console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

document.querySelector('.hamburger').addEventListener("click", (e) => {
  e.target.parentElement.classList.toggle('opened');
  e.target.parentElement.nextElementSibling.classList.toggle('open');
});
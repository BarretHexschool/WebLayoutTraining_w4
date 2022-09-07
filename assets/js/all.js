"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
document.querySelector('.hamburger').addEventListener("click", function (e) {
  e.target.parentElement.classList.toggle('opened');
  e.target.parentElement.nextElementSibling.classList.toggle('open');
});
//# sourceMappingURL=all.js.map

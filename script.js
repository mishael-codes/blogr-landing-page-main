// Making the hambrger menu work

let hamOpen = document.getElementById("ham-bars");
let hamClose = document.getElementById("close-icon");
let nav =document.querySelector('.nav');

hamOpen.addEventListener("click", () => {
  nav.classList.add("show");
  hamOpen.classList.add("hide");
  hamClose.classList.add("show");
});

hamClose.addEventListener("click", () => {
  hamClose.classList.remove("show");
  hamOpen.classList.remove("hide");
  nav.classList.remove('show')
});

// Makinng the dropdowns work
let productBtn = document.querySelector(".product");
let companyBtn = document.querySelector(".company");
let connectBtn = document.querySelector(".connect");

productBtn.addEventListener("click", () => {
  let content = document.querySelector(".product-content");
  let arrow = document.querySelectorAll('.arrow');
  content.classList.toggle("dropdown-content");
  arrow.classList.toggle("roll")
});

companyBtn.addEventListener("click", () => {
  let content = document.querySelector(".company-content");
  content.classList.toggle("dropdown-content");
});

connectBtn.addEventListener("click", () => {
  let content = document.querySelector(".connect-content");
  content.classList.toggle("dropdown-content");
});

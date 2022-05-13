export function menuFunction() {
  document
    .querySelector("button.menu")
    .addEventListener("click", showHamburgerMenu);

  document
    .querySelector(".button-close")
    .addEventListener("click", hideHamburgerMenu);

  function showHamburgerMenu() {
    document.querySelector(".option-menu").classList.toggle("active");
  }

  function hideHamburgerMenu() {
    document.querySelector(".option-menu").classList.toggle("active");
  }
}

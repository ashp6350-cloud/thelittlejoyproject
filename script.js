const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const forms = document.querySelectorAll("form");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    form.reset();
    if (status) {
      status.textContent = "Thank you. Your message is ready for the next step.";
    }
  });
});

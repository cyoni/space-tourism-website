const toggleMenuButton = document.querySelector(".mobile-menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

toggleMenuButton.addEventListener("click", () => {
  if (primaryNav.dataset.visibility === "false") {
    primaryNav.dataset.visibility = "true";
    toggleMenuButton.setAttribute("aria-expanded", true);
  } else {
    primaryNav.dataset.visibility = "false";
    toggleMenuButton.setAttribute("aria-expanded", false);
  }
});

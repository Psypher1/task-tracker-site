const mobileBtn = document.getElementById("mobile-cta");
const mobileBtnExit = document.getElementById("mobile-exit");
nav = document.querySelector("nav");

mobileBtn.addEventListener("click", () => {
  nav.classList.toggle("menu-btn");
  nav.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
  });
});

// mobileBtnExit.addEventListener("click", () => {
//   nav.classList.remove("menu-btn");
// });

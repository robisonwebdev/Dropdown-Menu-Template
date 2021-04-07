function toggleDropdown(value) {
  const target = document.querySelector(value);

  target.classList.toggle("show");
}

window.addEventListener("click", (event) => {
  const show = document.querySelectorAll(".show");

  if (!event.target.matches(".dropdownBtn")) {
    for (let i = 0; i < show.length; i++) {
      show[i].classList.remove("show");
    }
  }
});

function toggleMenu() {
  const e = document.getElementById("mobile-menu");
  e.style.maxHeight
    ? ((e.style.maxHeight = null), e.classList.remove("animate-fade-in"))
    : ((e.style.maxHeight = e.scrollHeight + "px"),
      e.classList.add("animate-fade-in"));
}

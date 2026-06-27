const header = document.getElementById("mainHeader");
const links = document.querySelectorAll("#mainHeader a");
const sections = document.querySelectorAll("main section[id]");
const topBtn = document.createElement("button");
topBtn.className = "scroll-top";
topBtn.textContent = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  topBtn.classList.toggle("show", window.scrollY > 350);

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (window.scrollY >= top && window.scrollY < top + height) {
      links.forEach((link) => link.classList.remove("active-link"));
      const active = document.querySelector(`#mainHeader a[href="#${id}"]`);
      if (active) active.classList.add("active-link");
    }
  });
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-bar");
const closeBtn = document.querySelector("#btn-close");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();
// observe intersection
const allsections = document.querySelectorAll('section');
// revealsection
const revealsection = function(entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden');
    // console.log(entry)
    observer.unobserve(entry.target)
}
const sectionObserve = new IntersectionObserver(revealsection,{
    root: null,
    threshold: 0.15
})
allsections.forEach(section =>  {
    sectionObserve.observe(section);
    section.classList.add('section-hidden');
})

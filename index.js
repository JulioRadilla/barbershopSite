/*DROPDOWN CONTENT */
let dropdownContent = document.querySelector(".dropdown-content");
let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector('.fa-xmark');

bars.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
    xmark.classList.toggle('show')
    bars.classList.toggle("none");
})

xmark.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
    bars.classList.toggle("none");
    xmark.classList.toggle("show");
})
/*DROPDOWN CONTENT */


/*DELETES COPYRIGHT AT SCREEN WIDTH OF 500PX */

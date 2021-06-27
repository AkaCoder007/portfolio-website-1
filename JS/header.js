const profile = document.querySelector("#my-profileimage img");
const nav = document.querySelector("#body-header")

profile.addEventListener("mouseover", () => {
    // alert("hovered");
    nav.classList.toggle("navactive");

});
profile.addEventListener("mouseout", () => {
    // alert("hovered");
    nav.classList.toggle("navactive");

});
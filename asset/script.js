const line = document.getElementById("line");
// const navBar = document.querySelector(".nav-ba");
const navBar = document.getElementById("nav-bar")
console.log(navBar);


line.onclick = () => {
    line.classList.toggle('openmenu');
    navBar.classList.toggle("visible");
}
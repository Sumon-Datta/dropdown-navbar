let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
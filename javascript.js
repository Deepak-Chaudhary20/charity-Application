const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav');


hamburger.addEventListener('click', function(){
    navbar.classList.toggle('active');
    hamburger.classList.toggle('fa-xmark');
})
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click", function(){
    document.querySelector('.page-nav').classList.toggle('nav-opened');
})
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
right_nav = document.querySelector('.right_nav')
nav_list = document.querySelector('.nav_list')

burger.addEventListener('click',()=>{
    nav_list.classList.toggle('v-nav');
    right_nav.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})
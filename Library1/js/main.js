//burger menu

(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuClose = document.querySelector('.header-nav-close');

    burgerItem.addEventListener('click',()=>{
        menu.classList.add('nav-active');
    });

    menuClose.addEventListener('click',()=>{
        menu.classList.remove('nav-active');
    });
}())
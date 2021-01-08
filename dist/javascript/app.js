
let containerMenu = document.querySelector('fixed-top');

/* Animate Scroll */

$(document).ready(function(){
    $(`#home`).click(function(){
        $('#hero').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
    });

    $(`#portfolioMenu`).click(function(){
        $('#portfolio').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
    });

    $(`#aboutMenu`).click(function(){
        $('#about').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
    });

    $(`#contactMenu`).click(function(){
        $('#contact').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
    });
});

/* Buttom Active */

let enlaces = document.querySelectorAll('.navbar-nav li a');

enlaces.forEach( (element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach ((link) => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    });
});

/* Efecto Scroll */

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
    let currenScrollPos = window.pageYOffset;

    if (prevScrollPos > currenScrollPos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition= "0.5s";
    } else {
        containerMenu.style.top = "-60px";
        containerMenu.style.transition= "0.5s";
    }
     
    prevScrollPos = currenScrollPos;
};

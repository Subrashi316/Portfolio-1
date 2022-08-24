// console.log('hellow owrl')
'use strict';
import Typed from 'typed.js';
// let lastScrollTop = 0;
// const navbar = document.querySelector('.nav')

// window.addEventListener('scroll', function(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if(scrollTop > lastScrollTop){
//         navbar.style.top = "-80px";
//     }
//     else{
//         navbar.style.top = "0";
//     }
//     lastScrollTop = scrollTop;
// })

const navigationCheckbox = document.querySelector('#menu');
const navigationLinks = document.querySelectorAll('.navigation-links');
const typedElement = document.querySelector('.typedElement');

console.log(navigationCheckbox,navigationLinks);

Array.from(navigationLinks).forEach(item => {
    item.addEventListener('click',function(){
        navigationCheckbox.checked = false;
    })
})

let typed = new Typed(typedElement,{
    strings:['Subrashi Dalui' , 'Web Developer'],
    typeSpeed:200,
    backSpeed:100,
    loop:true
})
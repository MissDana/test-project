const time = 1000;
const step = 1;

function outNum(num, elem){
    let l = document.querySelector('#'+elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let invertal = setInterval(() => {
        n = n + step;
        if(n==num){
            clearInterval(invertal);
        }
        l.innerHTML = n;
    }, t);
}

outNum(1600, 'out-1');



const time2 = 5000;
const step2 = 1;

function outNum2(numr, elem){
    let a = document.querySelector('#'+elem);
    b = 0;
    let c = Math.round(time2/(numr/step2));
    let invertal = setInterval(() => {
        b = b + step2;
        if(b==numr){
            clearInterval(invertal);
        }
        a.innerHTML = b;
    }, c);
}

outNum2(20, 'out-2');



const time3 = 3000;
const step3 = 1;

function outNum3(nums, elem){
    let k = document.querySelector('#'+elem);
    m = 0;
    let s = Math.round(time3/(nums/step3));
    let invertal = setInterval(() => {
        m = m + step3;
        if(m==nums){
            clearInterval(invertal);
        }
        k.innerHTML = m;
    }, s);
}

outNum3(800, 'out-3');




let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})



const OpenPopup = document.getElementById('open_popup');
const ClosePopup = document.getElementById('popup_close');
const Popup = document.getElementById('popup');

OpenPopup.addEventListener('click', function(e){
    e.preventDefault();
    Popup.classList.add('active');
})

ClosePopup.addEventListener('click', () => {
    Popup.classList.remove('active');
})


const OpenPopupConsult = document.getElementById('open_popup_consult');
const ClosePopupConsult = document.getElementById('popup_close_consult');
const PopupConsult = document.getElementById('popup_consult');

OpenPopupConsult.addEventListener('click', function(e){
    e.preventDefault();
    PopupConsult.classList.add('active');
})

ClosePopupConsult.addEventListener('click', () => {
    PopupConsult.classList.remove('active');
})



const OpenPopupMiniB1 = document.getElementById('open_popup_mini_b1');
const ClosePopupMiniB1 = document.getElementById('popup_close_mini_b1');
const PopupMiniB1 = document.getElementById('popup_mini_b1');

OpenPopupMiniB1.addEventListener('click', function(e){
    e.preventDefault();
    PopupMiniB1.classList.add('active');
})

ClosePopupMiniB1.addEventListener('click', () => {
    PopupMiniB1.classList.remove('active');
})



const OpenPopupMiniB2 = document.getElementById('open_popup_mini_b2');
const ClosePopupMiniB2 = document.getElementById('popup_close_mini_b2');
const PopupMiniB2 = document.getElementById('popup_mini_b2');

OpenPopupMiniB2.addEventListener('click', function(e){
    e.preventDefault();
    PopupMiniB2.classList.add('active');
})

ClosePopupMiniB2.addEventListener('click', () => {
    PopupMiniB2.classList.remove('active');
})



const OpenPopupMiniB3 = document.getElementById('open_popup_mini_b3');
const ClosePopupMiniB3 = document.getElementById('popup_close_mini_b3');
const PopupMiniB3 = document.getElementById('popup_mini_b3');

OpenPopupMiniB3.addEventListener('click', function(e){
    e.preventDefault();
    PopupMiniB3.classList.add('active');
})

ClosePopupMiniB3.addEventListener('click', () => {
    PopupMiniB3.classList.remove('active');
})



const OpenPopupMiniB4 = document.getElementById('open_popup_mini_b4');
const ClosePopupMiniB4 = document.getElementById('popup_close_mini_b4');
const PopupMiniB4 = document.getElementById('popup_mini_b4');

OpenPopupMiniB4.addEventListener('click', function(e){
    e.preventDefault();
    PopupMiniB4.classList.add('active');
})

ClosePopupMiniB4.addEventListener('click', () => {
    PopupMiniB4.classList.remove('active');
})



const OpenPopupMiniB5 = document.getElementById('open_popup_mini_b5');
const ClosePopupMiniB5 = document.getElementById('popup_close_mini_b5');
const PopupMiniB5 = document.getElementById('popup_mini_b5');

OpenPopupMiniB5.addEventListener('click', function(e){
    e.preventDefault();
    PopupMiniB5.classList.add('active');
})

ClosePopupMiniB5.addEventListener('click', () => {
    PopupMiniB5.classList.remove('active');
})



const OpenPopupMiniB6 = document.getElementById('open_popup_mini_b6');
const ClosePopupMiniB6 = document.getElementById('popup_close_mini_b6');
const PopupMiniB6 = document.getElementById('popup_mini_b6');

OpenPopupMiniB6.addEventListener('click', function(e){
    e.preventDefault();
    PopupMiniB6.classList.add('active');
})

ClosePopupMiniB6.addEventListener('click', () => {
    PopupMiniB6.classList.remove('active');
})



const OpenPopupMiniB7 = document.getElementById('open_popup_mini_b7');
const ClosePopupMiniB7 = document.getElementById('popup_close_mini_b7');
const PopupMiniB7 = document.getElementById('popup_mini_b7');

OpenPopupMiniB7.addEventListener('click', function(e){
    e.preventDefault();
    PopupMiniB7.classList.add('active');
})

ClosePopupMiniB7.addEventListener('click', () => {
    PopupMiniB7.classList.remove('active');
})



const OpenPopupMiniB8 = document.getElementById('open_popup_mini_b8');
const ClosePopupMiniB8 = document.getElementById('popup_close_mini_b8');
const PopupMiniB8 = document.getElementById('popup_mini_b8');

OpenPopupMiniB8.addEventListener('click', function(e){
    e.preventDefault();
    PopupMiniB8.classList.add('active');
})

ClosePopupMiniB8.addEventListener('click', () => {
    PopupMiniB8.classList.remove('active');
})




const OpenPopupProg1 = document.getElementById('open_popup_prog1');
const ClosePopupProg1 = document.getElementById('popup_close_prog1');
const PopupProg1 = document.getElementById('popup_prog1');

OpenPopupProg1.addEventListener('click', function(e){
    e.preventDefault();
    PopupProg1.classList.add('active');
})

ClosePopupProg1.addEventListener('click', () => {
    PopupProg1.classList.remove('active');
})



const OpenPopupProg2 = document.getElementById('open_popup_prog2');
const ClosePopupProg2 = document.getElementById('popup_close_prog2');
const PopupProg2 = document.getElementById('popup_prog2');

OpenPopupProg2.addEventListener('click', function(e){
    e.preventDefault();
    PopupProg2.classList.add('active');
})

ClosePopupProg2.addEventListener('click', () => {
    PopupProg2.classList.remove('active');
})



const OpenPopupProg3 = document.getElementById('open_popup_prog3');
const ClosePopupProg3 = document.getElementById('popup_close_prog3');
const PopupProg3 = document.getElementById('popup_prog3');

OpenPopupProg3.addEventListener('click', function(e){
    e.preventDefault();
    PopupProg3.classList.add('active');
})

ClosePopupProg3.addEventListener('click', () => {
    PopupProg3.classList.remove('active');
})



const OpenPopupProg4 = document.getElementById('open_popup_prog4');
const ClosePopupProg4 = document.getElementById('popup_close_prog4');
const PopupProg4 = document.getElementById('popup_prog4');

OpenPopupProg4.addEventListener('click', function(e){
    e.preventDefault();
    PopupProg4.classList.add('active');
})

ClosePopupProg4.addEventListener('click', () => {
    PopupProg4.classList.remove('active');
})



const OpenPopupProg5 = document.getElementById('open_popup_prog5');
const ClosePopupProg5 = document.getElementById('popup_close_prog5');
const PopupProg5 = document.getElementById('popup_prog5');

OpenPopupProg5.addEventListener('click', function(e){
    e.preventDefault();
    PopupProg5.classList.add('active');
})

ClosePopupProg5.addEventListener('click', () => {
    PopupProg5.classList.remove('active');
})



const OpenPopupProg6 = document.getElementById('open_popup_prog6');
const ClosePopupProg6 = document.getElementById('popup_close_prog6');
const PopupProg6 = document.getElementById('popup_prog6');

OpenPopupProg6.addEventListener('click', function(e){
    e.preventDefault();
    PopupProg6.classList.add('active');
})

ClosePopupProg6.addEventListener('click', () => {
    PopupProg6.classList.remove('active');
})
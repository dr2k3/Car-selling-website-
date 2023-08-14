
console.log("Hello world");
if (typeof document !== "undefined"){
    let menu=document.querySelector('#menu-btn');
    let navbar=document.querySelector('.navbar');

    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
}

if (typeof document !== "undefined") {
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
}

if (typeof document !== "undefined") {
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
}

if (typeof document !== "undefined") {
window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
}


if (typeof document !== "undefined") {
window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
}


if (typeof document !== "undefined") {
document.querySelector('.home').onmousemove= (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm=>{
        let speed = elm.getAttribute('data-speed');
        let x=(window.innerWidth - e.pageX * speed) / 90;
        let y=(window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = 'translateX(${y}px) translateY(${x}px)';

    });
};

document.querySelector('.home').onmouseleave= () =>{
    document.querySelectorAll('.home-parallax').forEach(elm=>{

        elm.style.transform = 'translateX(0px) translateY(0px)';

    });
};

};

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });


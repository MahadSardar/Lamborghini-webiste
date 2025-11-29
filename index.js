const menu = document.getElementById("menu");
const nav_menu = document.querySelector(".nav-menu");
const close = document.getElementById("close");

menu.onclick = ()=>{
    nav_menu.classList.toggle('active');
}
close.onclick =()=>{
    nav_menu.classList.remove('active');
}

const header = document.querySelector('.header');
window.addEventListener('scroll',()=>{
    if(window.scrollY>40){
        header.classList.add('header-scrolled');
    }
    else if(window.screenY<=40){
        header.classList.remove('header-scrolled');

    }

})

const swiperHome = new Swiper('.home-pics', {
          pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet:(index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
      },
});

const scrollup = ()=>{
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)
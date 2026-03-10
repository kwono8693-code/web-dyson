document.addEventListener("DOMContentLoaded",function(){

    const swiper1 = new Swiper('.station', {
        direction: 'horizontal',
        loop: true,
        speed:1000,
        pagination: {
            el: ".swiper-pagination",
            // type: "fraction",
            dynamicBullets: true,
            clickable: true,
        },
        
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
})

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
    const tabs = document.querySelectorAll(".tabs>span");
    const tabDes = document.querySelectorAll(".tab-menu>ul");

    tabs.forEach(function(span,i){
        span.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("active"))
            // 3개의 span 태그에 있는 active를 다 지운다.
            span.classList.add("active")
            // 클릭한 span 태그에 active 클래스가 추가된다.
            tabDes.forEach(ul=>ul.classList.remove("active"))
            tabDes[i].classList.add("active")
        })

    })

})

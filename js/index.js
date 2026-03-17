document.addEventListener("DOMContentLoaded", function () {
    
    // 1. 메인 배너 슬라이더 (station)
    const swiper1 = new Swiper('.station-banner', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

   // 2. 탭 메뉴
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

    // 3. 팝업 메뉴
    const train = document.querySelector('.train-popup'); // 수정한 HTML의 .train 선택
    let count = 0;

    console.log(train)

    setInterval(() => {
        count++;
        if (count > 2) { count = 0; }
        train.style.transform = `translateX(${-33.333 * count}%)`;
    }, 2500);

    // 요소 선택
    const searchTrigger = document.querySelector('.search-trigger');
    const searchWindow = document.querySelector('.search-window');
    const closeBtn = document.querySelector('.close-btn');

    // 1. 이미지 클릭 시 검색창 나타남
    searchTrigger.addEventListener('click', () => {
        searchWindow.classList.add('active');
    });

    // 2. 닫기 버튼 클릭 시 검색창 사라짐
    closeBtn.addEventListener('click', () => {
        searchWindow.classList.remove('active');
    });

    // (선택) 배경을 클릭해도 닫히게 하고 싶다면?
    window.addEventListener('click', (e) => {
        if (e.target === searchWindow) {
            searchWindow.classList.remove('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. 메인 배너 슬라이더 (station)
    const swiper1 = new Swiper('.station', {
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

    // 2. 베스트 아이템 탭 슬라이더 초기화
    // 클래스명이 동일한 모든 .tab-slider를 찾아 각각 Swiper 적용
    const tabSliders = new Swiper(".tab-slider", {
        slidesPerView: 2.2,
        spaceBetween: 14,
        observer: true,           // 탭 전환 시 숨겨진 슬라이더 크기 재계산
        observeParents: true,     // 부모 요소(active 클래스 등) 변화 감지
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });

    // 3. 탭 메뉴 클릭 이벤트
    const tabs = document.querySelectorAll(".tabs > span");
    const tabContents = document.querySelectorAll(".tab-slider"); // ul이 아닌 swiper 컨테이너 선택

    tabs.forEach(function (span, i) {
        span.addEventListener("click", function () {
            // 모든 탭 버튼에서 active 제거 후 클릭한 것에만 추가
            tabs.forEach(tab => tab.classList.remove("active"));
            span.classList.add("active");

            // 모든 슬라이더 컨텐츠에서 active 제거 후 해당 순서에만 추가
            tabContents.forEach(content => content.classList.remove("active"));
            tabContents[i].classList.add("active");
            
            // 팁: Swiper의 observer 옵션 덕분에 active가 붙는 순간 슬라이더가 정상 작동합니다.
        });
    });

});
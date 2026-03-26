document.addEventListener("DOMContentLoaded", function () {
    
    // 1. 메인 배너 슬라이더 (station)
    const swiper1 = new Swiper('.station-banner', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
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
    // const tabs = document.querySelectorAll(".tabs>span");
    // const tabDes = document.querySelectorAll(".tab-menu>ul");

    // tabs.forEach(function(span,i){
    //     span.addEventListener("click",function(){
    //         tabs.forEach(tab=>tab.classList.remove("active"))
    //         // 3개의 span 태그에 있는 active를 다 지운다.
    //         span.classList.add("active")
    //         // 클릭한 span 태그에 active 클래스가 추가된다.
    //         tabDes.forEach(ul=>ul.classList.remove("active"))
    //         tabDes[i].classList.add("active")
    //     })

    // })

    // 3. 팝업 메뉴
    const train = document.querySelector('.train-popup'); // 수정한 HTML의 .train 선택
    let count = 0;

    console.log(train)

    setInterval(() => {
        count++;
        if (count > 2) { count = 0; }
        train.style.transform = `translateX(${-33.333 * count}%)`;
    }, 2500);

    const chatContent = document.getElementById('chatContent');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    // 메시지 추가 함수
    function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    // message 클래스와 type(user 또는 bot) 클래스를 함께 추가
    messageDiv.classList.add('message', type);
    
    // 내부 div(말풍선)에도 bubble 클래스를 줍니다.
    messageDiv.innerHTML = `<div class="bubble">${text}</div>`;
    
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}

    // 전송 로직
    function sendMessage() {
        const text = userInput.value.trim();
        if (text === "") return;

        addMessage(text, 'user'); // 내 메시지 추가
        userInput.value = ""; // 입력창 비우기

        // AI 자동 응답 시뮬레이션 (1초 뒤)
        setTimeout(() => {
            addMessage("답변을 준비 중입니다...", 'bot');
        }, 1000);
    }

    // 버튼 클릭 및 엔터 키 이벤트
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});
const products = [
    { 
        id: 1, 
        category: "styler", 
        name: "NEW 에어랩™ 멀티 스타일러 앤 드라이어", 
        desc1: "· 화이트데이 위크 특별혜택 10만원 할인", 
        desc2: "· 3/5~31 네이버페이 결제 시 5만원 혜택", 
        desc3: "· 공식몰 단독 5% 쿠폰 적용 시 ₩740,050", 
        price: "할인가 ₩779,000", 
        img: "./img/product-styler1.jpg", 
    },
    { 
        id: 2, 
        category: "styler", 
        name: "에어랩™ 멀티 스타일러 앤 드라이어 (오닉스/골드)", 
        desc1: "· 화이트데이 위크 특별혜택 10만원 할인", 
        desc2: "· 3/5~31 네이버페이 결제 시 5만원 혜택", 
        desc3: "· 공식몰 단독 5% 쿠폰 적용 시 ₩740,050", 
        price: "할인가 ₩779,000", 
        img: "./img/product-styler2.jpg", 
    },
        { 
        id: 3, 
        category: "styler", 
        name: "에어랩™ 멀티 스타일러 앤 드라이어 (오닉스/골드)", 
        desc1: "· 화이트데이 위크 특별혜택 10만원 할인", 
        desc2: "· 3/5~31 네이버페이 결제 시 5만원 혜택", 
        desc3: "· 공식몰 단독 5% 쿠폰 적용 시 ₩740,050", 
        price: "할인가 ₩779,000", 
        img: "./img/product-styler3.jpg", 
    },
        { 
        id: 4, 
        category: "styler", 
        name: "에어랩™ 멀티 스타일러 앤 드라이어 (오닉스/골드)", 
        desc1: "· 3가지 스타일링 툴의 기본 구성", 
        desc2: "· 과도한 열 손상 없이 쉽게 코안다 효과로 연출", 
        desc3: "· 카드사 최대 12개월 무의자 할부 혜택", 
        price: "₩589,000",
        img: "./img/product-styler4.jpg", 
    },
        { 
        id: 5, 
        category: "styler", 
        name: "에어랩™ 멀티 스타일러 앤 드라이어 (오닉스/골드)", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용 시 ₩629,000", 
        desc2: "· 스페셜 각인 서비스", 
        desc3: "· 선명한 컬과 볼륨을 위한 새로운 콘 배럴", 
        price: "할인가 ₩629,000", 
        img: "./img/product-styler5.jpg", 
    },
        { 
        id: 6, 
        category: "styler", 
        name: "에어랩™ 멀티 스타일러 앤 드라이어 (오닉스/골드)", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용 시 ₩629,000", 
        desc2: "· 스페셜 각인 서비스", 
        desc3: "· 선명한 컬과 볼륨을 위한 새로운 콘 배럴", 
        price: "할인가 ₩629,000", 
        img: "./img/product-styler6.jpg", 
    },
        { 
        id: 7, 
        category: "styler", 
        name: "에어랩™ 멀티 스타일러 앤 드라이어 (오닉스/골드)", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용 시 ₩597,550", 
        desc2: "· 스페셜 각인 서비스", 
        desc3: "· 선명한 컬과 볼륨을 위한 새로운 콘 배럴", 
        price: "할인가 ₩629,000", 
        img: "./img/product-styler7.jpg", 
    },
    { 
        id: 8, 
        category: "dryer", 
        name: "슈퍼소닉 r™ 헤어 드라이어", 
        desc1: "· 2026 리미티드 살구 에디션", 
        desc2: "· 다이슨의 가장 가볍고, 강력한 헤어드라이어", 
        desc3: "· 과도한 열 손상 없이, 정교하고 빠른 드라이", 
        price: "₩629,000", 
        img: "./img/product-dryer1.jpg", 
    },
        { 
        id: 9, 
        category: "dryer", 
        name: "슈퍼소닉 r™ 헤어 드라이어", 
        desc1: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc2: "· 다이슨의 가장 가볍고, 강력한 헤어드라이어", 
        desc3: "· 과도한 열 손상 없이, 정교하고 빠른 드라이", 
        price: "₩629,000", 
        img: "./img/product-dryer2.jpg", 
    },
        { 
        id: 10, 
        category: "dryer", 
        name: "슈퍼소닉 뉴럴 헤어드라이어", 
        desc1: "· 다이슨의 가장 스마트한 헤어드라이어", 
        desc2: "· 건강한 두피 유지를 돕는 자동 온도 조절 기술", 
        desc3: "· 수분 손실 없는 빠른 드라이", 
        price: "₩599,000", 
        img: "./img/product-dryer3.jpg", 
    },
    { 
        id: 11, 
        category: "dryer", 
        name: "슈퍼소닉 뉴럴 헤어드라이어", 
        desc1: "· 다이슨의 가장 스마트한 헤어드라이어", 
        desc2: "· 건강한 두피 유지를 돕는 자동 온도 조절 기술", 
        desc3: "· 수분 손실 없는 빠른 드라이", 
        price: "₩599,000", 
        img: "./img/product-dryer4.jpg", 
    },
    { 
        id: 12, 
        category: "straitner", 
        name: "에어스트레이트 스트레이트너", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용 시 ₩398,050", 
        desc2: "· 젖은 모발에 드라이와 스트레이트 동시 사용", 
        desc3: "· 7만원 상당 보관 케이스 증정", 
        price: "할인가 ₩419,000", 
        img: "./img/product-straitner1.jpg", 
    },
        { 
        id: 13, 
        category: "straitner", 
        name: "에어스트레이트 스트레이트너", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용 시 ₩398,050", 
        desc2: "· 젖은 모발에 드라이와 스트레이트 동시 사용", 
        desc3: "· 7만원 상당 보관 케이스 증정", 
        price: "할인가 ₩419,000", 
        img: "./img/product-straitner2.jpg", 
    },
        { 
        id: 14, 
        category: "straitner", 
        name: "에어스트레이트 스트레이트너", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용 시 ₩398,050", 
        desc2: "· 젖은 모발에 드라이와 스트레이트 동시 사용", 
        desc3: "· 7만원 상당 보관 케이스 증정", 
        price: "할인가 ₩419,000", 
        img: "./img/product-straitner3.jpg", 
    },
    { 
        id: 15, 
        category: "essentials", 
        name: "오메가 하이드레이팅 헤어 오일", 
        desc1: "· 영양 & 손상 케어", 
        desc2: "· 최대 94% 모발 끊어짐 개선", 
        desc3: "· 48시간 동안 차분한 머릿결 유지", 
        price: "₩79,000", 
        img: "./img/product-essentials1.jpg", 
    },
    { 
        id: 16, 
        category: "essentials", 
        name: "키토산 프리 스타일 크림 스트레···", 
        desc1: "· 뭄침 없이 자연스러운 찰랑거림 선사", 
        desc2: "· 높은 습도에서도 스타일링을 더 오래 유지", 
        desc3: "· 최대 230도의 열로부터 모발보호", 
        price: "₩42,000", 
        img: "./img/product-essentials2.jpg", 
    },
        { 
        id: 17, 
        category: "essentials", 
        name: "오메가 리브-인 컨디셔닝 스프레이", 
        desc1: "· 엉킴 방지 및 수분감 선사", 
        desc2: "· 최대 90% 부스스함 개선", 
        desc3: "· 96% 모발 끝 갈라짐 개선", 
        price: "₩99,000", 
        img: "./img/product-essentials3.jpg", 
    },
        { 
        id: 18, 
        category: "essentials", 
        name: "아미노 리브-인 스칼프 버블 트리···", 
        desc1: "· 두피 수분 65% 즉시 증가", 
        desc2: "· 두피 유분 62% 즉시 감소", 
        desc3: "· 밸런스, 진정, 보습 케어", 
        price: "₩79,000", 
        img: "./img/product-essentials4.jpg", 
    },
    
];

const container = document.getElementById('product-container');
const countText = document.getElementById('product-count');
const tabs = document.querySelectorAll('.tab');

// 2. 화면 출력 함수
function renderProducts(filter) {
    // 필터링된 데이터 추출
    const filteredList = products.filter(p => p.category === filter);
    
    // 카운트 업데이트
    countText.innerText = `${filteredList.length}개 제품`;

    updateProductGrid(filteredList);

}

// 3. 탭 클릭 이벤트 설정
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        // 스타일 업데이트
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');

        // 해당 카테고리 출력
        const category = e.target.dataset.filter;
        renderProducts(category);
    });
});
const sortBtn = document.getElementById('sort-btn');
const sortContainer = document.querySelector('.sort-container');
const sortList = document.getElementById('sort-list');
const currentSortText = document.getElementById('current-sort');

// 1. 드롭다운 토글 (열림/닫힘)
sortBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sortContainer.classList.toggle('active');
});

// 2. 외부 클릭 시 닫기
window.addEventListener('click', () => {
    sortContainer.classList.remove('active');
});

// 3. 정렬 옵션 클릭 시 로직
sortList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const sortType = e.target.dataset.sort;
        const sortName = e.target.innerText;

        // 텍스트 변경 및 닫기
        currentSortText.innerText = sortName;
        sortContainer.classList.remove('active');

        // 정렬 실행 함수 호출
        sortProducts(sortType);
    }
});

// 4. 상품 정렬 함수
function sortProducts(type) {
    const currentCategory = document.querySelector('.tab.active').dataset.filter;
    let filteredList = products.filter(p => p.category === currentCategory);

    // 숫자가 아닌 글자(₩, 할인가, 콤마 등)를 모두 지우고 숫자로 변환하는 헬퍼 함수
    const getPrice = (str) => parseInt(str.replace(/[^0-9]/g, ""));

    if (type === 'price-low') {
        filteredList.sort((a, b) => getPrice(a.price) - getPrice(b.price));
    } else if (type === 'price-high') {
        filteredList.sort((a, b) => getPrice(b.price) - getPrice(a.price));
    } else if (type === 'popular') {
        filteredList.sort((a, b) => a.id - b.id); 
    } else {
        filteredList.sort((a, b) => b.id - a.id);
    }

    updateProductGrid(filteredList); 
}

// 렌더링만 전담하는 함수 (기존 displayProducts와 동일)
function updateProductGrid(items) {
    container.innerHTML = items.map(item => {
        const isSale = /할인가/.test(item.price);

        return `
        <article class="product-card">
            <a href="./index.html?id=${item.id}" class="card-link">
                <div class="img-box"><img src="${item.img}" alt="${item.name}"></div>
                <div class="info-box">
                    <h3 class="product-name">${item.name}</h3>
                    <div class="info-box2">
                        <p class="product-desc">${item.desc1}</p>
                        <p class="product-desc">${item.desc2}</p>
                        <p class="product-desc">${item.desc3}</p>
                    </div>
                    <span class="price ${isSale ? 'on' : ''}">${item.price}</span>
                </div>
            </a>
            
            <a href="./index.html" class="btn-cart">장바구니 담기</a>
        </article>
        `;
    }).join('');
}
// 4. 초기 페이지 로드 시 첫 번째 카테고리(styler) 자동 노출
renderProducts('styler');
const products = [
    { 
        id: 1, 
        category: "aicleaner", 
        name: "스팟앤스크럽 Ai 로봇 청소기", 
        desc1: "· 봄맞이 대청소 특가전", 
        desc2: "· 기간 한정 삼성카드 36개월 무이자 할부혜택", 
        desc3: "· 네이버페이 5만 포인트 적립 리뷰 이벤트", 
        price: "할인가 ₩1,590,000", 
        img: "./img/product-aicleaner.jpg", 
    },
    { 
        id: 2, 
        category: "watercleaner", 
        name: "펜슬워시 물청소기", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용 시  ₩474,050", 
        desc2: "· 봄맞이 대청소 특가전", 
        desc3: "· 펜슬백+펜슬워시 함께 구매 시 25% 혜택", 
        price: "₩499,000", 
        img: "./img/product-watercleaner1.jpg", 
    },
        { 
        id: 3, 
        category: "watercleaner", 
        name: "클린앤워시 하이진 물청소기", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용시 ₩588,050", 
        desc2: "· 봄맞이 대청소 특가전", 
        desc3: "· 카드사 최대 12개월 무이자 할부혜택", 
        price: "할인가 ₩619,000", 
        img: "./img/product-watercleaner2.jpg", 
    },
        { 
        id: 4, 
        category: "vacuumcleaner", 
        name: "펜슬백 플러피 콘", 
        desc1: "· 봄맞이 대청소 특가전", 
        desc2: "· 펜슬백+펜슬워시 함께 구매 시 25% 혜택", 
        desc3: "· 카드사 최대 12개월 무이자 할부 혜택", 
        price: "₩799,000",
        img: "./img/product-vacuumcleaner1.jpg", 
    },
        { 
        id: 5, 
        category: "vacuumcleaner", 
        name: "V16 피스톤 애니멀 서브마린", 
        desc1: "· 최대 70분의 사용 시간", 
        desc2: "· 바닥 유형에 맞게 흡입력 자동 조절", 
        desc3: "· 최대 30일 분량의 먼지와 이물질 보관", 
        price: "₩1,490,000", 
        img: "./img/product-vacuumcleaner2.jpg", 
    },
        { 
        id: 6, 
        category: "vacuumcleaner", 
        name: "디지털 슬림 옵틱", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용시 ₩418,000", 
        desc2: "· 봄맞이 대청소 특가전", 
        desc3: "· 카드사 최대 12개월 무이자 할부 혜택", 
        price: "할인가 ₩440,000", 
        img: "./img/product-vacuumcleaner3.jpg", 
    },
        { 
        id: 7, 
        category: "vacuumcleaner", 
        name: "V15 오리진 플러피", 
        desc1: "· 공식몰 단독 5% 쿠폰 적용시 ₩588,050", 
        desc2: "· 봄맞이 대청소 특가전", 
        desc3: "· 카드사 최대 12개월 무이자 할부 혜택", 
        price: "할인가 ₩499,000", 
        img: "./img/product-vacuumcleaner4.jpg", 
    },
    { 
        id: 8, 
        category: "vacuumwatercleaner", 
        name: "V16 피스톤 애니멀 서브마린", 
        desc1: "· 최대 70분의 사용 시간", 
        desc2: "· 바닥 유형에 맞게 흡입력 자동 조절", 
        desc3: "· 최대 30일 분량의 먼지와 이물질 보관", 
        price: "₩1,490,000", 
        img: "./img/product-vacuumwatercleaner1.jpg", 
    },
        { 
        id: 9, 
        category: "vacuumwatercleaner", 
        name: "V12s 디텍트 슬림 서브마린 컴···", 
        desc1: "· 140W(Air Watt) 흡입력", 
        desc2: "· 최대 60분 사용", 
        desc3: "· 먼지를 보여주는 일루미네이션 기능", 
        price: "₩1,290,000", 
        img: "./img/product-vacuumwatercleaner2.jpg", 
    },
        { 
        id: 10, 
        category: "vacuumwatercleaner", 
        name: "V12s 디텍트 슬림 서브마린", 
        desc1: "· 150W(Air Watt) 흡입력", 
        desc2: "· 최대 60분 사용",
        desc3: "· 먼지를 보여주는 일루미네이션 기능", 
        price: "₩1,190,000", 
        img: "./img/product-vacuumwatercleaner3.jpg", 
    },
    { 
        id: 11, 
        category: "vacuumwatercleaner", 
        name: "디지털 슬림 서브마린", 
        desc1: "· 1.9kg 무게로 편리한 진공청소", 
        desc2: "· 부담없이 가볍게 진공청소에서 물청소까지", 
        desc3: "· 처음부터 끝까지 깨끗한 물로 깔끔한 마무리", 
        price: "₩699,000", 
        img: "./img/product-vacuumwatercleaner4.jpg", 
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

// 1. 컨테이너에 클릭 이벤트 리스너 등록 (이벤트 위임)
container.addEventListener('click', (e) => {
    // 클릭된 요소가 'btn-cart' 클래스를 가지고 있는지 확인
    if (e.target.classList.contains('btn-cart')) {
        // 기본 링크 이동(href) 방지
        e.preventDefault();
        
        // 알림창 띄우기
        alert('장바구니에 상품을 추가했습니다.');
    }
});

function updateProductGrid(items) {
    container.innerHTML = items.map(item => {
        const isSale = /할인가/.test(item.price);

        return `
        <article class="product-card">
            <a href="./product-cleaner-page.html?id=${item.id}" class="card-link">
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
            
            <a href="#" class="btn-cart">장바구니 담기</a>
        </article>
        `;
    }).join('');
}
// 4. 초기 페이지 로드 시 첫 번째 카테고리(styler) 자동 노출
renderProducts('aicleaner');
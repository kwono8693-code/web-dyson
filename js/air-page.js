const products = [
    { 
        id: 1, 
        category: "airpurifier", 
        name: "다이슨 핫앤쿨 공기청정기 HP2 (화이트/골드)", 
        desc1: "· 빅콰이엇 포름알데히드(블루/코퍼) + 허쉬젯 컴팩트 번들 혜택: 35만원 할인", 
        desc2: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc3: "", 
        price: "₩499,000", 
        img: "./img/product-airpurifier1.jpg", 
    },
    { 
        id: 2, 
        category: "airpurifier", 
        name: "다이슨 핫앤쿨 공기청정기 HP2 (니켈/골드)", 
        desc1: "·  빅콰이엇 포름알데히드(블루/코퍼) + 허쉬젯 컴팩트 번들 혜택: 35만원 할인", 
        desc2: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc3: "", 
        price: "₩499,000", 
        img: "./img/product-airpurifier2.jpg",
    },
        { 
        id: 3, 
        category: "airpurifier", 
        name: "다이슨 쿨 공기청정기 PC2 (니켈/골드)", 
        desc1: "· 공식몰 단독 5% 쿠폰 최대혜택가 ₩759,050", 
        desc2: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc3: "", 
        price: "할인가 ₩799,000", 
        originalPrice: "₩999,000",
        img: "./img/product-airpurifier3.jpg",
    },
        { 
        id: 4, 
        category: "airpurifier", 
        name: "다이슨 핫앤쿨 공기청정기 HP2 (화이트/골드)", 
        desc1: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc2: "", 
        desc3: "", 
        price: "₩1,090,000",
        img: "./img/product-airpurifier4.jpg", 
    },
        { 
        id: 5, 
        category: "airpurifier", 
        name: "다이슨 핫앤쿨 공기청정기 HP2 (니켈/골드)", 
        desc1: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc2: "", 
        desc3: "", 
        price: "₩1,090,000",
        img: "./img/product-airpurifier5.jpg", 
    },
        { 
        id: 6, 
        category: "airpurifier", 
        name: "다이슨 핫앤쿨 공기청정기 HP2 (니켈/골드)", 
        desc1: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc2: "", 
        desc3: "", 
        price: "할인가 ₩799,000",
        originalPrice: "₩999,000",
        img: "./img/product-airpurifier6.jpg", 
    },
        { 
        id: 7, 
        category: "airpurifier", 
        name: "다이슨 가습 공기청정기 PH2 (화이트/골드)", 
        desc1: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc2: "", 
        desc3: "", 
        price: "₩1,290,000",
        img: "./img/product-airpurifier7.jpg", 
    },
    { 
        id: 8, 
        category: "airpurifier", 
        name: "다이슨 가습 공기청정기 PH2 (화이트/골드)", 
        desc1: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc2: "", 
        desc3: "", 
        price: "₩1,290,000",
        img: "./img/product-airpurifier8.jpg", 
    },
        { 
        id: 9, 
        category: "humidifier", 
        name: "다이슨 핫앤쿨 공기청정기 HP2 (화이트/골드)", 
        desc1: "· 빅콰이엇 포름알데히드(블루/코퍼) + 허쉬젯 컴팩트 번들 혜택: 35만원 할인", 
        desc2: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc3: "", 
        price: "₩499,000", 
        img: "./img/product-humidifier1.jpg", 
    },
        { 
        id: 10, 
        category: "humidifier", 
        name: "다이슨 빅+콰이엇 포름알데히드 공기청정기 (블루/골드)", 
        desc1: "· 공식몰 단독 5% 쿠폰 최대혜택가 ₩1,035,500", 
        desc2: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc3: "", 
        price: "할인가 ₩1,090,000", 
        originalPrice: "₩1,290,000",
        img: "./img/product-humidifier2.jpg", 
    },
    { 
        id: 11, 
        category: "humidifier", 
        name: "다이슨 빅+콰이엇 포름알데히드 공기청정기 (니켈/블루)", 
        desc1: "· 카드사 최대 12개월 무이자 할부 혜택", 
        desc2: "", 
        desc3: "", 
        price: "₩1,190,000", 
        img: "./img/product-humidifier3.jpg", 
    },
    { 
        id: 12, 
        category: "humidifier", 
        name: "다이슨 핫앤쿨 공기청정기 HP2 (화이트/골드)", 
        desc1: "", 
        desc2: "", 
        desc3: "", 
        price: "₩990,000", 
        img: "./img/product-humidifier4.jpg", 
    },
    { 
        id: 13, 
        category: "fan", 
        name: "다이슨 쿨 선풍기 타워형 (화이트/실버)", 
        desc1: "", 
        desc2: "", 
        desc3: "", 
        price: "₩598,000", 
        img: "./img/product-fan1.jpg", 
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
            <a href="./product-air-page.html?id=${item.id}" class="card-link">
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
renderProducts('airpurifier');
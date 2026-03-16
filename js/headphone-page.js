const products = [
    { 
        id: 1, 
        category: "headphone", 
        name: "온트랙 노이즈 캔슬링 헤드폰 (CNC 알루미늄)", 
        desc1: "· 확장된 오디오 스펙트럼", 
        desc2: "· 최대 55시간 지속되는 배터리", 
        desc3: "· 업계 최고 수준의 노이즈 캔슬링", 
        price: "₩699,000", 
        img: "./img/product-headphone1.jpg", 
    },
    { 
        id: 2, 
        category: "headphone", 
        name: "온트랙 노이즈 캔슬링 헤드폰 (세라믹 시나바)", 
        desc1: "· 확장된 오디오 스펙트럼", 
        desc2: "· 최대 55시간 지속되는 배터리", 
        desc3: "· 업계 최고 수준의 노이즈 캔슬링", 
        price: "₩699,000", 
        img: "./img/product-headphone2.jpg", 
    },
        { 
        id: 3, 
        category: "headphone", 
        name: "온트랙 노이즈 캔슬링 헤드폰 (CNC 코퍼)", 
        desc1: "· 확장된 오디오 스펙트럼", 
        desc2: "· 최대 55시간 지속되는 배터리", 
        desc3: "· 업계 최고 수준의 노이즈 캔슬링", 
        price: "₩699,000", 
        img: "./img/product-headphone3.jpg", 
    },
        { 
        id: 4, 
        category: "headphone", 
        name: "온트랙 노이즈 캔슬링 헤드폰 (CNC 블랙/니켈)", 
        desc1: "· 확장된 오디오 스펙트럼", 
        desc2: "· 최대 55시간 지속되는 배터리", 
        desc3: "· 업계 최고 수준의 노이즈 캔슬링", 
        price: "₩699,000", 
        img: "./img/product-headphone4.jpg", 
    },
        { 
        id: 5, 
        category: "adapters", 
        name: "다이슨 존 익스플로러 케이스", 
        desc1: "· 호환되는 제품 다이슨 존 노이즈 캔슬링 헤드폰", 
        desc2: "", 
        desc3: "", 
        price: "₩130,000",
        img: "./img/product-adapters1.jpg", 
    },
        { 
        id: 6, 
        category: "adapters", 
        name: "다이슨 존 정전기 필터 멀티팩", 
        desc1: "· 호환되는 제품 다이슨 존 노이즈 캔슬링 헤드폰", 
        desc2: "", 
        desc3: "", 
        price: "₩48,000",
        img: "./img/product-adapters2.jpg", 
    },
        { 
        id: 7, 
        category: "adapters", 
        name: "다이슨 존 정전기 필터 싱글팩", 
        desc1: "· 호환되는 제품 다이슨 존 노이즈 캔슬링 헤드폰", 
        desc2: "", 
        desc3: "", 
        price: "₩1,290,000",
        img: "./img/product-adapters3.jpg", 
    },
    { 
        id: 8, 
        category: "adapters", 
        name: "이어쿠션 크롬 옐로우", 
        desc1: "· 좌, 우 한 쌍으로만 판매됩니다.", 
        desc2: "· 부드러운 감촉을 제공하는 극세사 이어쿠션", 
        desc3: "· 업계 최고 수준의 노이즈 캔슬링", 
        price: "₩69,000",
        img: "./img/product-adapters4.jpg", 
    },
        { 
        id: 9, 
        category: "adapters", 
        name: "캡 코어스 티타늄", 
        desc1: "· 좌, 우 한 쌍으로만 판매됩니다.", 
        desc1: "· 가벼우면서도 견고하고 내구성이 뛰어난 알루미늄", 
        desc2: "· 0.8~1.6마이크로미터 수준의 고정밀 가공", 
        price: "₩69,000", 
        img: "./img/product-adapters5.jpg", 
    },
        { 
        id: 10, 
        category: "adapters", 
        name: "기내용 어댑터 키트", 
        desc1: "· USB-C to AUX 케이블", 
        desc2: "· 기내용 어댑터", 
        desc3: "· 호환되는 제품 다이슨 온트랙 노이즈 캔슬링 헤드폰", 
        price: "₩39,000", 
        img: "./img/product-adapters6.jpg", 
    },
    { 
        id: 11, 
        category: "adapters", 
        name: "다이슨 존 쿼터턴 하드 케이스", 
        desc1: "· 호환되는 제품 다이슨 존 노이즈 캔슬링 헤드폰", 
        desc2: "", 
        desc3: "", 
        price: "₩110,000", 
        img: "./img/product-adapters7.jpg", 
    },
    { 
        id: 12, 
        category: "adapters", 
        name: "다이슨 존 기내용 어댑터 키트", 
        desc1: "· 호환되는 제품 다이슨 존 노이즈 캔슬링 헤드폰", 
        desc2: "", 
        desc3: "", 
        price: "₩45,000", 
        img: "./img/product-adapters8.jpg", 
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
renderProducts('headphone');
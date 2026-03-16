const products = [
    { 
        id: 1, 
        category: "light-stand", 
        name: "솔라사이클 모프 조명 플로어스탠드형 (화이트/실버)", 
        desc1: "· 지능적으로 사용자 위치의 자연광 추적", 
        desc2: "· 사용자와 주변 환경에 따라 맞춤 변환, 조절", 
        desc3: "· 카드사 최대 12개월 무이자 할부 혜택", 
        price: "₩960,000", 
        img: "./img/product-light-stand1.jpg", 
    },
    { 
        id: 2, 
        category: "light-stand", 
        name: "솔라사이클 모프 조명 플로어스탠드형 (블랙)", 
        desc1: "· 지능적으로 사용자 위치의 자연광 추적", 
        desc2: "· 사용자와 주변 환경에 따라 맞춤 변환, 조절", 
        desc3: "· 카드사 최대 12개월 무이자 할부 혜택", 
        price: "₩960,000", 
        img: "./img/product-light-stand2.jpg", 
    },
        { 
        id: 3, 
        category: "light-desk", 
        name: "솔라사이클 모프 조명 데스크형 (화이트/실버)", 
        desc1: "· 지능적으로 사용자 위치의 자연광 추적", 
        desc2: "· 사용자와 주변 환경에 따라 맞춤 변환, 조절", 
        desc3: "· 카드사 최대 12개월 무이자 할부 혜택", 
        price: "₩720,000", 
        img: "./img/product-light-desk1.jpg", 
    },
        { 
        id: 4, 
        category: "light-desk", 
        name: "솔라사이클 모프 조명 데스크형 (블랙)", 
        desc1: "· 지능적으로 사용자 위치의 자연광 추적", 
        desc2: "· 사용자와 주변 환경에 따라 맞춤 변환, 조절", 
        desc3: "· 카드사 최대 12개월 무이자 할부 혜택", 
        price: "₩720,000", 
        img: "./img/product-light-desk2.jpg", 
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
renderProducts('light-stand');
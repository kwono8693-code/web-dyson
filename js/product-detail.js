document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const item = products.find(p => p.id === productId);

    if (item) {
        const leftArea = document.getElementById('detail-image');
        if (leftArea) {
            leftArea.innerHTML = `<img src="${item.img}" alt="${item.name}">`;
        }

        const rightArea = document.getElementById('detail-info');
        if (rightArea) {
            const isSale = /할인가/.test(item.price);

            rightArea.innerHTML = `
                <h2 class="product-name">${item.name}</h2>
                
                <div class="price-group">
                    <p class="origin-price">${item.originalPrice || ''}</p>
                    <p class="sale-info">
                        <span class="discount-rate">${item.discountRate || ''}</span>
                        <span class="current-price ${isSale ? 'on' : ''}">${item.price}</span>
                    </p>
                </div>

                <div class="promo-container">
                    <h4 class="promo-title">할인정보</h4>
                    <ul class="promo-list">
                        <li>* 3/5~31 네이버페이로 결제 시 5만 네이버페이포인트 지급</li>
                        <li>* 공식몰 단독 5% 쿠폰 및 카드사 사용 시 최대혜택가 적용</li>
                        <li>* 카드사 최대 12개월 무이자 할부</li>
                    </ul>
                </div>

                <div class="info-row">
                    <span class="info-label">배송비</span>
                    <span>무료</span>
                </div>
                

                <div class="action-group">
                    <button class="btn-heart">
                        <img src="./img/heart.svg" alt="관심 상품 등록">
                    </button>
                    <a href="./cart-page.html">
                        <button class="btn-cart">장바구니</button>
                    </a>
                    <button class="btn-buy">구매하기</button>
                </div>
            `;
        }
    }
});
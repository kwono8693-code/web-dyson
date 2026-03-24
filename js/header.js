function initHeaderMenu() {
    const header = document.querySelector("header");
    const menuItems = document.querySelectorAll(".menu-item");
    const depth2Menus = document.querySelectorAll(".depth2");
    const megaMenu = document.querySelector(".mega-menu");
    const firstMenuLink = document.querySelector(".gnb > li:first-child > a");

    if (!header || menuItems.length === 0 || !firstMenuLink) return;

    // 1. 메가메뉴 정렬 함수
    function alignToFirstMenu() {
        const leftPos = firstMenuLink.getBoundingClientRect().left;
        megaMenu.style.paddingLeft = leftPos + "px";
    }

    alignToFirstMenu();
    window.addEventListener("resize", alignToFirstMenu);

    // 2. PC 메뉴 호버 이벤트
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const target = item.dataset.menu;
            header.classList.add("open");
            depth2Menus.forEach(menu => {
                menu.classList.toggle("active", menu.dataset.target === target);
            });
        });
    });

    header.addEventListener("mouseleave", () => {
        header.classList.remove("open");
        depth2Menus.forEach(menu => menu.classList.remove("active"));
    });

    // 3. 모바일 메뉴 제어
    const btnMenu = document.querySelector(".btn-menu");
    const menuSmartHidden = document.querySelector(".menu-smart-hidden");
    const btnClose = document.querySelector(".btn-close");
    const gnbSmartList = document.querySelectorAll(".gnb-smart > li");

    btnMenu.addEventListener("click", () => menuSmartHidden.classList.add("on"));
    btnClose.addEventListener("click", () => {
        menuSmartHidden.classList.remove("on");
        gnbSmartList.forEach(tag => tag.classList.remove("on"));
    });

    // 4. 모바일 2뎁스 (더보기)
    const btnMore = document.querySelectorAll(".gnb-smart .btn-more");
    btnMore.forEach(btn => {
        btn.addEventListener("click", () => {
            const parent = btn.closest("li");
            const isOpen = parent.classList.contains("on");
            gnbSmartList.forEach(li => li.classList.remove("on"));
            if (!isOpen) parent.classList.add("on");
        });
    });
 
    // 1. 검색창 HTML 구조 삽입 (닫기 버튼 포함)
if (!document.getElementById('searchOverlay')) {
    const searchOverlayHTML = `
        <div class="search-overlay" id="searchOverlay">
            <div class="search-inner">
                <input type="text" placeholder="제품을 검색해 보세요">
                <button type="submit" class="btn-search-submit">
                    <img src="./img/icon-search.svg" alt="검색 실행">
                </button>
                <button type="button" class="btn-search-close">&times;</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', searchOverlayHTML);
}

// 2. 검색 관련 요소 선택 (중복 선언 주의)
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = searchOverlay.querySelector('input');
const searchClose = searchOverlay.querySelector('.btn-search-close');

// 3. 모든 검색 아이콘에 이벤트 연결
// (상단에서 정의한 menuSmartHidden 변수를 그대로 사용합니다)
const searchIcons = document.querySelectorAll('img[alt="검색"]');

searchIcons.forEach(icon => {
    const anchor = icon.closest('a');
    if (anchor) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // 🌟 중복 선언 없이 상단의 변수 재사용
            if (menuSmartHidden && menuSmartHidden.classList.contains("on")) {
                menuSmartHidden.classList.remove("on");
                // 모바일 메뉴 닫을 때 2뎁스 열림 상태도 초기화 (필요시)
                if (typeof gnbSmartList !== 'undefined') {
                    gnbSmartList.forEach(tag => tag.classList.remove("on"));
                }
            }

            searchOverlay.classList.toggle('active');
            if (searchOverlay.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }
});

// 4. 닫기 기능 및 전파 방지
searchClose.addEventListener('click', (e) => {
    e.stopPropagation();
    searchOverlay.classList.remove('active');
});

searchOverlay.addEventListener('click', (e) => {
    e.stopPropagation(); // 검색창 내부 클릭 시 닫히지 않음
});

// 5. 바깥 영역 클릭 시 닫기
document.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

// 6. ESC 키로 닫기
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') searchOverlay.classList.remove('active');
});
}

// 함수 실행
initHeaderMenu();
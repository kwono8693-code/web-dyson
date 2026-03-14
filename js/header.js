function initHeaderMenu() {

  const header = document.querySelector("header");
  const menuItems = document.querySelectorAll(".menu-item");
  const depth2Menus = document.querySelectorAll(".depth2");
  const megaMenu = document.querySelector(".mega-menu");
  
  // 🌟 핵심: 첫 번째 메뉴인 '헤어케어'의 a 태그(텍스트 위치)를 고정 타겟으로 잡습니다.
  const firstMenuLink = document.querySelector(".gnb > li:first-child > a");

  if (!header || menuItems.length === 0 || !firstMenuLink) return;

  // 메가메뉴를 항상 첫 번째 메뉴 텍스트 시작점에 맞추는 함수
  function alignToFirstMenu() {
    // 헤어케어 텍스트의 화면상 왼쪽 좌표값을 가져옵니다.
    const leftPos = firstMenuLink.getBoundingClientRect().left;
    // 그 값만큼 메가메뉴 안쪽으로 패딩을 줘서 2뎁스 메뉴를 밀어냅니다.
    megaMenu.style.paddingLeft = leftPos + "px";
  }

  // 처음에 한번 맞춰주고, 창 크기가 변할 때마다 계속 다시 맞춰줍니다.
  alignToFirstMenu();
  window.addEventListener("resize", alignToFirstMenu);

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

    depth2Menus.forEach(menu => {
      menu.classList.remove("active");
    });
  });

  // 메뉴버튼을 누르면 header가 나오는 기능
    
    const btnMenu = document.querySelector(".btn-menu");
    const menuSmartHidden = document.querySelector(".menu-smart-hidden")
    const btnClose = document.querySelector(".btn-close")
    const gnbSmartList = document.querySelectorAll(".gnb-smart>li")

    btnMenu.addEventListener("click", ()=>{
        menuSmartHidden.classList.add("on")
    })
    btnClose.addEventListener("click", ()=>{
        menuSmartHidden.classList.remove("on")
        gnbSmartList.forEach(tag=>tag.classList.remove("on"))

    })
    // 모바일에서 2뎁스 메뉴 나오는 기능

    const btnMore = document.querySelectorAll(".gnb-smart .btn-more");

btnMore.forEach(btn=>{
  btn.addEventListener("click",()=>{

    const parent = btn.closest("li");
    const gnbList = document.querySelectorAll(".gnb-smart > li");

    const isOpen = parent.classList.contains("on");

    gnbList.forEach(li=>{
      li.classList.remove("on");
    });

    if(!isOpen){
      parent.classList.add("on");
    }

  });
});
}
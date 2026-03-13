function initHeaderMenu() {

  const header = document.querySelector("header");
  const menuItems = document.querySelectorAll(".menu-item");
  const depth2Menus = document.querySelectorAll(".depth2");

  if (!header || menuItems.length === 0) return;


  menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {

      const target = item.dataset.menu;

      header.classList.add("open");

      depth2Menus.forEach(menu => {
        menu.classList.toggle(
          "active",
          menu.dataset.target === target
        );
      });

    });
  });
    const gnb = document.querySelector(".gnb");
    const megaMenu = document.querySelector(".mega-menu");
    const firstMenu = document.querySelector(".gnb > li:first-child");

    if (gnb && megaMenu && firstMenu) {

      function setMegaMenuPosition(){
        const menuLeft = firstMenu.getBoundingClientRect().left;
        megaMenu.style.paddingLeft = menuLeft + "px";
      }

      setMegaMenuPosition();
      window.addEventListener("resize", setMegaMenuPosition);
    }
  

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
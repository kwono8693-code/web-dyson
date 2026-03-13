document.addEventListener("DOMContentLoaded", () => {

  const gnb = document.querySelector(".gnb");
  const header = document.querySelector("header");

  gnb.addEventListener("mouseenter", () => {
    console.log("gnb enter");
    header.classList.add("menu-open");
  });

  gnb.addEventListener("mouseleave", () => {
    console.log("gnb leave");
    header.classList.remove("menu-open");
  });

});
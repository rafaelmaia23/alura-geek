const menuIcon = document.querySelector(".header__menu__icon");
const menuList = document.querySelector(".header__list");
const menuItems = document.querySelectorAll(".header__list__item");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("header__list-open");
});

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menuList.classList.remove("header__list-open");
    });
});

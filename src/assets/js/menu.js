const $navbar = document.querySelector(".navbar__toggle")
const $menu = document.querySelector(".navbar__menu")

// 모바일 , 태블릿 화면에서 햄버거 메뉴 toggle 기능 수행
const handleToggle = () => {
    $menu.classList.toggle('hidden_menu')
}

$navbar.addEventListener('click',handleToggle)
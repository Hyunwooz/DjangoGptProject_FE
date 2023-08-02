const $logout_btn = document.querySelector('.logout_btn')

const logout = (event) => {
    event.preventDefault()
    
    sessionStorage.removeItem('user');
    location.href = '/DjangoGptProject_FE/index.html'
}

$logout_btn.addEventListener('click',logout)
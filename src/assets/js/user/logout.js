const $logout_btn = document.querySelector('.logout_btn')


const logout = (event) => {
    event.preventDefault()
    
    sessionStorage.removeItem('user');
    location.href = '/index.html'
}

$logout_btn.addEventListener('click',logout)
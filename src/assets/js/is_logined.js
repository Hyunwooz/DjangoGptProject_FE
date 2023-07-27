const permission = () => {
    if (sessionStorage.getItem('user')) {
        console.log('환영합니다.')
    } else {
        alert('로그인이 필요한 서비스입니다.')
        location.href = "/src/view/login.html"
    }
}

const is_logined = () => {

    if (sessionStorage.getItem('user')) {
        const is_logined = document.querySelectorAll('.is_logined')

        is_logined.forEach(element => {
            element.style.display = 'flex'
        });
    } else {
        const is_not_logined = document.querySelectorAll('.is_not_logined')

        is_not_logined.forEach(element => {
            element.style.display = 'flex'
        });
    }
}

permission()
is_logined()
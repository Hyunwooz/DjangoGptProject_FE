const auth_user = () => {
    if (sessionStorage.getItem('user')) {
        console.log('환영합니다.')
    } else {
        alert('로그인이 필요한 서비스입니다.')
        location.href = "/src/view/login.html"
    }
}

auth_user()
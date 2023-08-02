// 로그인된 유저 인증
const auth_user = () => {
    if (sessionStorage.getItem('user')) {
        const logined = true
    } else {
        alert('로그인이 필요한 서비스입니다.')
        location.href = "/DjangoGptProject_FE/src/view/login.html"
    }
}

auth_user()
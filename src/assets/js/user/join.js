const $join_btn= document.querySelector('.join_btn')

const api_join = async (event) => {
    event.preventDefault()
    
    const email = document.querySelector('.user-join__email').value
    const password = document.querySelector('.user-join__password').value
    const password_valid = document.querySelector('.user-join__password_valid').value
    
    if ( password != password_valid){
        alert("비밀번호가 다릅니다.")
        return false
    }

    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    const url = 'http://43.200.64.24/user/join/'

    await fetch(url, {
        method: "POST",
        headers: {},
        body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.email) {
            alert(data.email[0])
        } else {
            alert('회원가입을 축하합니다.')
            location.href= '/DjangoGptProject_FE/src/view/login.html'
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

// 로그인이 되있으면 홈으로
const is_logined = () => {

    if (sessionStorage.getItem('user')) {
        location.href = '/DjangoGptProject_FE/index.html'
    }
}

is_logined()

$join_btn.addEventListener('click',api_join)
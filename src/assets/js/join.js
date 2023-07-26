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

    const url = 'http://127.0.0.1:8000/user/join/'

    await fetch(url, {
        method: "POST",
        headers: {},
        body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.email) {
            console.log(data.email[0])
        } else {
            console.log(data)
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

const is_logined = () => {

    if (sessionStorage.getItem('user')) {
        location.href = '/index.html'
    }
}

is_logined()

$join_btn.addEventListener('click',api_join)
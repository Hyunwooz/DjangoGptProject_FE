import {setCookie} from "../util.js"

const $login_btn = document.querySelector('.login_btn')

const api_login = async (event) => {
    event.preventDefault()
    
    const email = document.querySelector('.user-login__email').value
    const password = document.querySelector('.user-login__password').value
    
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    const url = 'http://127.0.0.1:8000/user/login/'

    await fetch(url, {
        method: "POST",
        headers: {},
        body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
        
        if (data.non_field_errors) {
            console.log(data.non_field_errors[0])
        } else {
            console.log('Seuccess Login')
            setCookie('access',data.token.access)
            setCookie('refresh',data.token.refresh)
            sessionStorage.setItem('user', data.user);
            location.href= '/index.html'
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

$login_btn.addEventListener('click',api_login)
import { getCookie } from "./util.js";

const $nickname = document.querySelector('.user-name')
const $aboutMe = document.querySelector('.user-description')
const $avatar_img = document.querySelector('.user-avatar')

// Django Server URL
const url = `http://127.0.0.1:8000/chatbot/mylist/`;

const profile_setting = () => {
    let user = sessionStorage.getItem('user');
    const user_profile = JSON.parse(user).profile

    $nickname.innerText = user_profile.name
    $aboutMe.innerText = user_profile.aboutMe

    if (user_profile.avatarUrl != 'none'){
        $avatar_img.src = user_profile.avatarUrl
    } else {
        $avatar_img.src = '/src/assets/img/sample_banner.png'
    }
}

// Django Server와 통신
const myListLoad = async () => {
    const access = getCookie('access')

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access}`,
        },
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.data.length < 1) {
                console.log('게시물이 존재하지 않습니다.')
            } else {
                (res.data).forEach(element => {
                    console.log(element)
                });
            }
            
        })
        .catch((err) => {
            console.log(err);
        });
};


profile_setting()
myListLoad()
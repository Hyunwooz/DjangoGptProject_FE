import { getCookie } from "../util.js"

const $nickname = document.querySelector('#profile-name')
const $aboutMe = document.querySelector('#profile-aboutMe')
const $avatar_file = document.querySelector('#profile-avatar')
const $avtar_img = document.querySelector('.user-avatar')
const $save_btn = document.querySelector('.pf-save_btn')

const profile_setting = () => {
    let user = sessionStorage.getItem('user');
    const user_profile = JSON.parse(user).profile

    $nickname.value = user_profile.name
    $aboutMe.innerText = user_profile.aboutMe
    if ($avtar_img.src != 'none'){
        $avtar_img.src = user_profile.avatarUrl
    }
}

const api_save = async (event) => {
    event.preventDefault()
    
    const formData = new FormData();

    const name = $nickname.value
    const aboutMe = $aboutMe.value
    const acess = getCookie('access')
    const refresh = getCookie('refresh')
    const avtar = $avatar_file.files[0]

    if (avtar){
        formData.append('avatarUrl', avtar);
    }
    formData.append('name', name);
    formData.append('aboutMe', aboutMe);
    

    const url = 'http://127.0.0.1:8000/user/profile/'
    //refresh header "refresh": `Bearer ${refresh}`,
    await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${acess}`,
        },
        body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
        
        if (data) {
            alert(data.message)
            let user = sessionStorage.getItem('user');
            const user_session = JSON.parse(user)
            user_session.profile = data.profile
            sessionStorage.setItem('user', JSON.stringify(user_session));
            location.href = '/index.html'
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

const previewImage = (event) => {
    let reader = new FileReader();

    reader.onload = function (event) {
        $avtar_img.setAttribute("src", event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
};


profile_setting()
$save_btn.addEventListener('click',api_save)
$avatar_file.addEventListener("change", previewImage);
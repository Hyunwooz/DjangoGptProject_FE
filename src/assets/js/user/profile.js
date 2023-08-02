import { getCookie } from "../util.js"

const $nickname = document.querySelector('#profile-name')
const $aboutMe = document.querySelector('#profile-aboutMe')
const $avatar_file = document.querySelector('#profile-avatar')
const $avatar_img = document.querySelector('.user-avatar')
const $save_btn = document.querySelector('.pf-save_btn')

const profile_setting = () => {
    let user = sessionStorage.getItem('user');
    const user_profile = JSON.parse(user).profile

    $nickname.value = user_profile.name
    $aboutMe.innerText = user_profile.aboutMe

    if (user_profile.avatarUrl != 'none'){
        if(user_profile.avatarUrl.includes('github')) {
            $avatar_img.src = user_profile.avatarUrl
        } else {
            $avatar_img.src = 'http://43.200.64.24/media/'+ user_profile.avatarUrl
        }
    } else {
        $avatar_img.src = '/src/assets/img/sample_banner.png'
    }
}

const api_save = async (event) => {
    event.preventDefault()
    
    const formData = new FormData();

    const name = $nickname.value
    const aboutMe = $aboutMe.value
    const access = getCookie('access')
    const avtar = $avatar_file.files[0]

    if (avtar){
        formData.append('avatarUrl', avtar);
    }
    formData.append('name', name);
    formData.append('aboutMe', aboutMe);
    

    const url = 'http://43.200.64.24/user/profile/'
    //refresh header "refresh": `Bearer ${refresh}`,
    await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${access}`,
        },
        body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
        if (data) {
            alert('프로필 변경이 완료되었습니다.')
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
    const file = event.target.files[0];

    if (file.size > 250000){
        alert('파일크기는 2.5MB 이내로 가능합니다.')
        event.target.value = ''
    }

    let reader = new FileReader();

    reader.onload = function (event) {
        $avatar_img.setAttribute("src", event.target.result);
    };
    reader.readAsDataURL(file);
};


profile_setting()
$save_btn.addEventListener('click',api_save)
$avatar_file.addEventListener("change", previewImage);
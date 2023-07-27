const $nickname = document.querySelector('.user-name')
const $aboutMe = document.querySelector('.user-description')
const $avatar_img = document.querySelector('.user-avatar')

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

profile_setting()

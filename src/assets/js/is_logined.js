// 로그인이 되있는지 확인
const is_logined = () => {

    if (sessionStorage.getItem('user')) {
        const is_logined = document.querySelectorAll('.is_logined')
        const profile = JSON.parse(sessionStorage.getItem('user')).profile
        const $avatar_img = document.querySelector('.avatar_img')
        
        is_logined.forEach(element => {
            element.style.display = 'flex'
        });
        
        if (profile.avatarUrl != "none"){
            if(profile.avatarUrl.includes('github')) {
                $avatar_img.src = profile.avatarUrl
            } else {
                $avatar_img.src = 'http://43.200.64.24/media/'+profile.avatarUrl
            }
        } else {
            $avatar_img.src = '/src/assets/img/sample_banner.png'
        }

    } else {
        const is_not_logined = document.querySelectorAll('.is_not_logined')

        is_not_logined.forEach(element => {
            element.style.display = 'flex'
        });
    }
}

is_logined()
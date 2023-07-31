import { getCookie } from "./util.js";

const $nickname = document.querySelector('.user-name')
const $aboutMe = document.querySelector('.user-description')
const $avatar_img = document.querySelector('.user-avatar')
const $ad_wrap = document.querySelector('.my_ad_wrap')


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
                const article = document.createElement('h4')
                article.innerText = '게시물이 존재하지 않습니다.'
                $ad_wrap.appendChild(article)
            } else {
                (res.data).forEach(element => {
                    const article = article_div(element)
                    $ad_wrap.appendChild(article)
                });

                const advertisements = document.querySelectorAll('.my_advertisement')

                advertisements.forEach(element => {
                    element.addEventListener('click',detail_page)
                });
            }
            
        })
        .catch((err) => {
            console.log(err);
        });
};

const article_div = (data) => {
    const my_advertisement = document.createElement('a')
    const emoji = document.createElement('div')
    const title = document.createElement('h4')
    const scripts = document.createElement('h5')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const div5 = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    const p6 = document.createElement('p')
    const p7 = document.createElement('p')
    const p8 = document.createElement('p')
    const e_p1 = document.createElement('p')
    const e_p2 = document.createElement('p')

    my_advertisement.classList = 'my_advertisement'
    my_advertisement.id = data.id
    emoji.classList = 'label_emoji'
    // e_p1.innerText =
    // e_p2.innerText =
    console.log(data)
    emoji.innerText = '✔️'
    title.innerText = data.title
    scripts.innerText = data.description

    div1.classList = 'ad_info'
    div2.classList = 'info_part'
    div3.classList = 'info_part'
    div4.classList = 'info_part'
    div5.classList = 'info_part'

    p1.innerText = '📖 Type'
    p2.innerText = data.type
    p3.innerText = '🔗 Category'
    p4.innerText = data.category
    p5.innerText = '🎫 Keyword'
    p6.innerText = data.main_keyword
    p7.innerText = '✨ Recommand Keywords'
    p8.innerText = data.recommand_keyword

    div1.append(div2,div3)
    div2.append(p1,p2)
    div3.append(p3,p4)
    div4.append(p5,p6)
    div5.append(p7,p8)
    
    my_advertisement.append(emoji,title,scripts,div1,div4,div5)

    return my_advertisement
}

const detail_page = (event) => {
    let target = event.target

    while (target.classList != 'my_advertisement'){
        target = target.parentNode
    }
    const pages = {
        'pages': target.id
    }
    // 로컬스토리지(DB에 저장)
    localStorage.setItem("renderPage", JSON.stringify(pages));

    // 다음 페이지 Render
    location.href = "detail.html";
}


profile_setting()
myListLoad()


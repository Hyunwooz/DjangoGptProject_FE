import { createSearch_AD, createDisplay_AD, createVideo_AD } from "./answer.js";

const $post_content = document.querySelector('.post_content')
const $del_btn = document.querySelector('.post_delete')
const $public_btn = document.querySelector('.post_public')
const $private_btn = document.querySelector('.post_private')
// Django Server URL

const renderPage = JSON.parse(localStorage.getItem("renderPage"));
        
// Django Server와 통신
const ChatLoad = async () => {
    const url = `http://127.0.0.1:8000/chatbot/detail/`;

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: renderPage.pages,
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            
            if (sessionStorage.getItem('user')) {
                
                const user = JSON.parse(sessionStorage.getItem('user'))

                if (user.account.email == res.writer.email){
                    const post_owner_menu = document.querySelector('.post_owner_menu')
                    post_owner_menu.style.display = 'block'
                }
            }

            if (res.anwser.is_public) {
                $public_btn.style.display = 'none'
            } else {
                $private_btn.style.display = 'none'
            }

            const detail_title = document.querySelector('.detail_title')
            const author_profile = document.querySelector('.avatarImg')
            const created = document.querySelector('.created')
            const views = document.querySelector('.views')

            detail_title.innerText = res.anwser.title

            if (res.profile.avatarUrl == 'none'){
                author_profile.src = '/src/assets/img/sample_banner.png'
            } else {
                author_profile.src = 'http://127.0.0.1:8000/media/' + res.profile.avatarUrl
            }
            
            const time = new Date(res.anwser.created_at)
            const year = time.getFullYear();
            const month = time.getMonth() +1;
            const date = time.getDate();
            const hours = time.getHours();
            const minutes = time.getMinutes();

            created.innerText = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 `
            views.innerText = 'Views : '+res.anwser.views

            const c_q = create_q(res.anwser.question)
            const c_a = printAnswer(res.anwser)

            $post_content.append(c_q,c_a)

            
        })
        .catch((err) => {
            console.log(err);
        });
};

// gptSetting에 저장되어 있는 질문을 보여주는 함수.
const create_q = (data) => {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    h3.innerText = 'Question Infomation' 
    div.className = 'post_qeustion'

    const goal = createDiv(data['광고 목표'], "광고 목표");
    const type = createDiv(data['광고 유형'], "광고 유형");
    const category = createDiv(data['카테고리'], "카테고리");
    const keyword = createDiv(data['메인 키워드'], "키워드");
    const gender = createDiv(data['성별'], "성별");
    const age = createDiv(data['연령대'], "연령대");

    div.append(h3,goal, type, category, keyword, gender, age);

    return div
}

// 기초 질문틀을 만들어주는 함수
const createDiv = (value, text) => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.value = value
    input.readOnly = true;
    label.innerText = text;
    div.append(label, input);

    return div;
}

// 화면에 광고 유형별 답변을 그려주는 함수
const printAnswer = (data) => {

    // const answer = JSON.parse(data);

    if (data.type == "디스플레이") {
        const ad = createDisplay_AD(data);

        return ad
    } else if (data.type == "검색") {
        const ad = createSearch_AD(data);

        return ad
    } else if (data.type == "동영상") {
        const ad = createVideo_AD(data);

        return ad
    }
};

// Django Server와 통신
const chatDelete = async () => {
    const url = `http://127.0.0.1:8000/chatbot/delete/`;

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: renderPage.pages,
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            location.href = 'index.html'
        })
        .catch((err) => {
            console.log(err);
        });
};

// Django Server와 통신
const chatPublic = async () => {
    const url = `http://127.0.0.1:8000/chatbot/public/`;

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: renderPage.pages,
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            location.reload()
        })
        .catch((err) => {
            console.log(err);
        });
};

// Django Server와 통신
const chatPrivate = async () => {
    const url = `http://127.0.0.1:8000/chatbot/private/`;

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: renderPage.pages,
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            location.reload()
        })
        .catch((err) => {
            console.log(err);
        });
};

ChatLoad()
$del_btn.addEventListener('click',chatDelete)
$public_btn.addEventListener('click',chatPublic)
$private_btn.addEventListener('click',chatPrivate)
import { createSearch_AD, createDisplay_AD, createVideo_AD } from "./answer.js";
import { getCookie } from "./util.js";

const $post_content = document.querySelector('.post_content')
const $del_btn = document.querySelector('.post_delete')
const $public_btn = document.querySelector('.post_public')
const $private_btn = document.querySelector('.post_private')
const $comment_ul = document.querySelector('.post_comments')
const $comment_input = document.querySelector('.comment_input')
const $comment_btn = $comment_input.querySelector('button')
const $comment_count = document.querySelector('.comment_count')
const $like_btn = document.querySelector('.like_icon')
const $like_count = document.querySelector('.like_count')

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

            if (res.anwser.is_public) {
                $public_btn.style.display = 'none'
            } else {
                $private_btn.style.display = 'none'
            }

            if (res.comments.length > 0) {

                (res.comments).forEach(data => {
                    const comment_li = commentRead(data)
                    $comment_ul.appendChild(comment_li)
                });

                const comments = new Array(res.comments)
                $comment_count.innerText = comments.length
            } else {
                $comment_ul.innerHTML = '<li class="no_comment">댓글이 없습니다.</li>'
            }

            
            const like_obj = res.anwser.like
            const like_d = Object.values(like_obj)
            const likes_count = like_d.filter(element => 'like' === element).length;
            
            $like_count.innerText = likes_count

            const $comment_del = document.querySelectorAll('.comment_writer_delete')

            if (sessionStorage.getItem('user')) {
                
                const user = JSON.parse(sessionStorage.getItem('user'))

                if (user.account.email == res.writer.email){
                    const post_owner_menu = document.querySelector('.post_owner_menu')
                    post_owner_menu.style.display = 'block'
                }
                if( user.profile.avatarUrl != 'none'){
                    const comment_avatar = document.querySelector('.loginuser_avatar')
                    comment_avatar.src = user.profile.avatarUrl
                }

                if(like_obj[user.account.email] == 'like'){
                    $like_btn.classList = "fa-solid fa-heart like_icon"
                }
                
                $comment_del.forEach(element => {
                    if (element.id == 'owner_'+user.profile.user_id) {
                        element.style.display = 'block'

                        const comment_del_btn = element.querySelector('button')
                        comment_del_btn.addEventListener('click',commentDelete)
                    }
                });

            } else {
                $comment_input.style.display = 'none'
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

// 질문지를 그려주는 함수.(전체 질문지)
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

// 질문을 그려주는 함수(질문 1개)
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

// 광고 유형별 답변을 그려주는 함수
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

// chat 삭제
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
            location.href = 'lounge.html'
        })
        .catch((err) => {
            console.log(err);
        });
};

// chat 공개 설정
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

// chat 비공개 설정
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

// Comment 작성
const commentWrite = async (event) => {

    event.preventDefault()

    const url = `http://127.0.0.1:8000/chatbot/comment/write/`;

    const post_id = renderPage.pages
    const comments = $comment_input.querySelector('input')
    const comments_value = comments.value
    const access = getCookie('access')
    

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access}`,
        },
        body: JSON.stringify({
            "post_id": post_id,
            "comment": comments_value
        }),
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

// Comment 그려주는 함수
const commentRead = (data) => {
    const li = document.createElement("li");
    const avatar = document.createElement("img");
    const info_div = document.createElement("div");
    const writer = document.createElement("div");
    const contents = document.createElement("label");
    const form = document.createElement('form');
    const button = document.createElement('button')

    li.className = 'post_comment';
    li.id = data.id
    avatar.className = 'comment_writer_avatar';
    avatar.src = 'http://127.0.0.1:8000/media/' + data.owner.avatarUrl;
    info_div.className = 'comment_writer_info'
    writer.className = 'comment_writer_name'
    writer.innerText = data.owner.name
    contents.className = 'comment_writer_content'
    contents.innerText = data.content
    form.className = 'comment_writer_delete'
    form.id = 'owner_'+data.owner.user_id
    form.style.display = 'none'
    button.type = 'submit'
    button.className = 'comment_delete'
    button.value = '삭제'
    button.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    form.append(button)
    info_div.append(writer,contents)
    li.append(avatar,info_div,form)
    
    return li;
}

// Comment 삭제
const commentDelete = async (event) => {
    event.preventDefault()

    const url = `http://127.0.0.1:8000/chatbot/comment/delete/`;

    let target = event.target

    while (target.classList != 'post_comment'){
        target = target.parentNode
    }

    const comment_id = target.id
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: comment_id,
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

// Like 좋아요!
const likeFunc = async () => {
    const access = getCookie('access')

    const url = `http://127.0.0.1:8000/chatbot/like/`;
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access}`,
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
$comment_btn.addEventListener('click',commentWrite)
$like_btn.addEventListener('click',likeFunc)
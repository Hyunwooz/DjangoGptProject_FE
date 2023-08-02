const $post_wrap = document.querySelector('.post_wrap')

// Django Server URL
const url = `http://43.200.64.24/chatbot/lounge/`;
const $search__btn = document.querySelector('.search__btn')

// Django Server와 통신
const chatListLoad = async () => {

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.data.length < 1) {
                const article = document.querySelector('.no_post')
                article.innerText = '게시물이 존재하지 않습니다.'
            } else {
                (res.data).forEach(element => {
                    const article = article_div(element)
                    $post_wrap.appendChild(article)
                });

                const advertisements = document.querySelectorAll('.post_advertisement')

                advertisements.forEach(element => {
                    element.addEventListener('click',detail_page)
                });
            }
            
            const $recent_list = document.querySelector('.recent_list')
            const recents = res.recents
            const $category_list = document.querySelector('.category_list')
            const category = res.categories

            recents.forEach(el => {
                const li = document.createElement('li')
                const a_tag = document.createElement('a')

                a_tag.innerText = el.title
                a_tag.id = el.id
                a_tag.className = 'recent_post'
                
                li.append(a_tag)
                $recent_list.append(li)
            });

            category.forEach(el => {
                const li = document.createElement('li')
                const a_tag = document.createElement('a')

                a_tag.innerText = `${el.category} (${el.count})`
                a_tag.name = el.category
                a_tag.className = 'category_serch'
                
                li.append(a_tag)
                $category_list.append(li)
            });

            const $recent_posts = document.querySelectorAll('.recent_post')
            const $category_serchs = document.querySelectorAll('.category_serch')

            $recent_posts.forEach(element => {
                element.addEventListener('click',recent_detail_page)
            });

            $category_serchs.forEach(element => {
                element.addEventListener('click',categry_search_page)
            });

        })
        .catch((err) => {
            console.log(err);
        });
};

const article_div = (data) => {
    const post_advertisement = document.createElement('div')
    const post_label = document.createElement('div')
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
    const avatar = document.createElement('img')
    const writer = document.createElement('p')
    const created_at = document.createElement('p')
    const views = document.createElement('p')

    const imgUrl = 'http://43.200.64.24/media/'

    post_advertisement.classList = 'post_advertisement'
    post_advertisement.id = data.id

    post_label.classList = 'post_label'
    avatar.className = 'lounge_owner_img'

    if(data.owner.avatarUrl.includes('github')) {
        avatar.src = data.owner.avatarUrl
    } else {
        avatar.src = imgUrl + data.owner.avatarUrl
    }
    
    writer.innerText = data.owner.name

    const time = new Date(data.created_at)
    const year = time.getFullYear();
    const month = time.getMonth() +1;
    const date = time.getDate();

    created_at.innerText = `${year}년 ${month}월 ${date}일`
    views.innerText = 'Views : '+data.views


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
    p8.className = 'recommand_keywords'

    post_label.append(avatar,writer,created_at,views)
    div1.append(div2,div3)
    div2.append(p1,p2)
    div3.append(p3,p4)
    div4.append(p5,p6)
    div5.append(p7,p8)
    
    post_advertisement.append(title,scripts,div1,div4,div5,post_label)

    return post_advertisement
}

const detail_page = (event) => {
    let target = event.target

    while (target.classList != 'post_advertisement'){
        target = target.parentNode
    }
    const pages = {
        'pages': target.id
    }
    // 로컬스토리지(DB에 저장)
    localStorage.setItem("renderPage", JSON.stringify(pages));

    // 다음 페이지 Render
    location.href = "/DjangoGptProject_FE/src/view/detail.html";
}

const recent_detail_page = (event) => {
    let target = event.target

    const pages = {
        'pages': target.id
    }
    // 로컬스토리지(DB에 저장)
    localStorage.setItem("renderPage", JSON.stringify(pages));

    // 다음 페이지 Render
    location.href = "/DjangoGptProject_FE/src/view/detail.html";
}

const categry_search_page = (event) => {
    let target = event.target

    const search = {
        'search': target.name,
        'type': 'category'
    }
    // 로컬스토리지(DB에 저장)
    localStorage.setItem("search", JSON.stringify(search));

    // 다음 페이지 Render
    location.href = "/DjangoGptProject_FE/src/view/search.html";
}

const title_search_page = (event) => {
    event.preventDefault()

    const $search__text = document.querySelector('.search__text')

    const search = {
        'search': $search__text.value,
        'type': 'title'
    }
    // 로컬스토리지(DB에 저장)
    localStorage.setItem("search", JSON.stringify(search));

    // 다음 페이지 Render
    location.href = "/DjangoGptProject_FE/src/view/search.html";
}

$search__btn.addEventListener('click',title_search_page)
chatListLoad()
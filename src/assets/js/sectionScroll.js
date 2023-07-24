import { throttling } from "./util.js";

let page = 1

// 스크롤 입력시 Element로 이동
const scrollMoveToEl = (e) => {

    if (e.deltaY > 1) { 
        if (page == 4) {return}
        page += 1
    } else if (e.deltaY < 1) {  
        if (page == 1) {return}
        page -= 1
    };

    let curr;
    const name = '#section'
    const section = name + page.toString()

    if (page == 4) {
        curr = document.querySelector('footer')
    } else {
        curr = document.querySelector(section)
    }

    curr.scrollIntoView({behavior: "smooth", block: "start"});
}

// 스크롤 이벤트 정지
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

window.addEventListener('wheel',throttling(scrollMoveToEl, 350))
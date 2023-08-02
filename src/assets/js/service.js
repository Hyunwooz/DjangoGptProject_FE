import { getCookie } from "./util.js";
// import { printQuestion, printAnswer } from "./display.js";

const $loading = document.querySelector("#loading");

// API url
const url = `http://43.200.64.24/chatbot/`;

// api 요청보내는 함수
const apiPost = async (data) => {
    const access = getCookie('access')

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access}`,
        },
        body: JSON.stringify(data),
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            if (typeof res.message == "undefined"){
                alert('일일 요청 횟수(5회)가 초과되었습니다.')
            } else {
                alert('생성되었습니다.')
            }
            location.href = "/DjangoGptProject_FE/src/view/mypage.html";
        })
        .catch((err) => {
            console.log(err);
        });

    // 로딩이 완료된 후 스피너 숨기기
    $loading.classList.toggle("hidden");
};

// API와 연결을 해주는 함수
/**
 * @param {string} data String 타입의 Data : API에 보낼 질문
 * @param {string} printQ String 타입 : 질문을 그릴 지에 대한 대답 "Yes" Or "No"
 */
export const connectApi = (data, printQ) => {

    $loading.classList.toggle("hidden");
    apiPost(data);
};

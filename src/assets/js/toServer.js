import { getCookie } from "./util.js";
// import { printQuestion, printAnswer } from "./display.js";

// const $loading = document.querySelector("#loading");
// const $addQuestion = document.querySelector("#addQuestion");

// API url
const url = `http://127.0.0.1:8000/chatbot/`;

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
            console.log(res)
            // answerSave(res.choices[0].message.content);
            // printAnswer(res.choices[0].message.content);
        })
        .catch((err) => {
            console.log(err);
        });

    // 로딩이 완료된 후 스피너 숨기기
    // $loading.classList.toggle("hidden");

    // 로딩이 끝난 후 addQuestion 활성화
    // $addQuestion.querySelector("input").readOnly = false; 
    // $addQuestion.querySelector("button").disabled = false; 
};

// 사용자의 질문을 저장해주는 함수
const questionSave = (question) => {
    if (data) {
        data.push({
            role: "user",
            content: question,
        });
    }
};

// // GPT의 답변을 저장해주는 함수
// const answerSave = async (answer) => {
//     if (data) {
//         data.push({
//             role: "assistant",
//             content: answer,
//         });
//     }
// };

// API와 연결을 해주는 함수
/**
 * @param {string} data String 타입의 Data : API에 보낼 질문
 * @param {string} printQ String 타입 : 질문을 그릴 지에 대한 대답 "Yes" Or "No"
 */
export const connectApi = (data, printQ) => {
    // questionSave(data);

    // if (printQ == "Yes") {
    //     printQuestion(data);
    // }

    // $loading.classList.toggle("hidden");

    // 로딩되는 동안 addQuestion 비활성화
    // $addQuestion.querySelector("input").readOnly = true; 
    // $addQuestion.querySelector("button").disabled = true; 

    apiPost(data);
};

import { connectApi } from "./toServer.js"

const $input = document.querySelector(".input_question");
const $connectBtn = document.querySelector("#connect");
const $disconnectBtn = document.querySelector("#disconnect");
const $addQuestion = document.querySelector("#addQuestion");

const gptSetting = JSON.parse(localStorage.getItem("gptSetting"));

// 사용자의 질문
let question;

// Connect Btn 클릭시 ConnectAPI와 연결해주는 함수
const handleClickConnect = () => {
    question = {
        "광고 목표": gptSetting[0].newCampaignGoal,
        "광고 유형": gptSetting[0].newCampaignType,
        "카테고리": gptSetting[0].newCategory,
        "메인 키워드": gptSetting[0].newKeyword,
        "연령대": gptSetting[0].newAge,
        "성별": gptSetting[0].newGender,
    };

    // 추가 질문창 hidden 제거
    // $addQuestion.classList.remove("hidden");

    connectApi(JSON.stringify(question),"No")
}

// disconnect Btn 클릭시 이전 페이지로 Render되는 함수
const handleClickDisconnect = () => {
    location.href = "question.html";
}

// addQuestion Submit시 event 발동을 멈추고 ConnectAPI와 연결해주는 함수
const handleSubmit = (event) => {
    event.preventDefault();

    question = $input.value;
    $input.value = null;

    connectApi(question,"Yes")
}

$connectBtn.addEventListener("click", handleClickConnect);
$disconnectBtn.addEventListener("click", handleClickDisconnect);
// $addQuestion.addEventListener("submit", handleSubmit);
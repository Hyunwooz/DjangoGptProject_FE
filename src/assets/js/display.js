import { createSearch_AD, createDisplay_AD, createVideo_AD } from "./answer.js";

const $chatBox = document.querySelector(".answerSection");

let gptSetting = JSON.parse(localStorage.getItem("gptSetting"));
gptSetting = gptSetting ?? [];

render();

// gptSetting에 저장되어 있는 질문을 보여주는 함수.
function render() {
    const show = document.querySelector(".showSetting");
    const goal = createDiv(gptSetting[0].newCampaignGoal, "광고 목표");
    const type = createDiv(gptSetting[0].newCampaignType, "광고 유형");
    const category = createDiv(gptSetting[0].newCategory, "카테고리");
    const keyword = createDiv(gptSetting[0].newKeyword, "키워드");
    const gender = createDiv(gptSetting[0].newGender, "성별");
    const age = createDiv(gptSetting[0].newAge, "연령대");

    show.append(goal, type, category, keyword, gender, age);
}

// 기초 질문틀을 만들어주는 함수
function createDiv(value, text) {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    div.classList = "flex flex-col px-6 mb-2";
    label.classList = "text-xs font-bold mb-1";
    input.classList = "border border-slate-300 rounded px-3 py-1 bg-gray-100";

    input.value = value.replace(/_/g, " ");
    input.readOnly = true;
    label.innerText = text;
    div.append(label, input);

    return div;
}

// 화면에 광고 유형별 답변을 그려주는 함수
export const printAnswer = async (answer) => {
    const gpt_answer = JSON.parse(answer);
    if (gpt_answer.ad_type == "디스플레이") {
        const ad = createDisplay_AD(gpt_answer);

        $chatBox.appendChild(ad);
    } else if (gpt_answer.ad_type == "검색") {
        const ad = createSearch_AD(gpt_answer);

        $chatBox.appendChild(ad);
    } else if (gpt_answer.ad_type == "동영상") {
        const ad = createVideo_AD(gpt_answer);

        $chatBox.appendChild(ad);
    }
};

// 화면에 질문 그려주는 함수
export const printQuestion = async (data) => {
    if (data) {
        let textarea = document.createElement("p");
        textarea.classList =
            "answer border border-slate-300 rounded-xl w-full h-full py-3 px-3 my-3 resize-none";
        textarea.innerText = data;
        $chatBox.appendChild(textarea);
    }
};

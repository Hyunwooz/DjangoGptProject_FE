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

    input.value = value.replace(/_/g, " ");
    input.readOnly = true;
    label.innerText = text;
    div.append(label, input);

    return div;
}

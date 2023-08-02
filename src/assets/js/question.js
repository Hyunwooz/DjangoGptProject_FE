import { ages, categories, genders } from "./data.js";

const $campaignGoal = document.querySelector(".campaignGoal");
const $campaignType = document.querySelector(".campaignType");
const $category = document.querySelector(".campaignCategory");
const $keyword = document.querySelector(".keyword_input");
const $age = document.querySelector(".targetAge");
const $gender = document.querySelector(".targetGender");
const $form = document.querySelector("form");
const $campaignCategoryDiv = document.querySelector('.campaignCategoryValue')


// category에 들어갈 label과 input의 attribute를 세팅 해주는 함수
const addCategory = (data) => {
    const div = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')

    // label Attribute Setting
    label.innerText = data
    label.setAttribute('for',data)

    // input Attribute Setting
    input.name = 'campaignCategory'
    input.id = data
    input.value = data
    input.type = 'radio'
    input.required = true

    div.append(label,input)    

    return div
};

// option의 attribute를 세팅 해주는 함수
const addOption = (data) => {
    const option = document.createElement('option')
    option.value = data
    option.innerText = data.replace(/_/g, " ")

    return option
};

// 카테고리 Element 넣기
categories.forEach((data) => {
    const el = addCategory(data)
    $campaignCategoryDiv.append(el)
});

// 성별 option Element 넣기
genders.forEach((data) => {
    const option = addOption(data)
    $gender.append(option)
});

// 나이 option Element 넣기
ages.forEach((data) => {
    const option = addOption(data)
    $age.append(option)
});

// Next 버튼 클릭시
$form.addEventListener("submit", (e) => {
    e.preventDefault();

    const gptSetting = [];

    let newCampaignGoal,
        newCampaignType,
        newCategory

    // 광고 목표의 Checked된 벨류값 가져오기
    [...$campaignGoal.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCampaignGoal = e.value;
        }
    });

    // 광고 유형의 Checked된 벨류값 가져오기
    [...$campaignType.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCampaignType = e.value;
        }
    });

    // 광고 카테고리의 Checked된 벨류값 가져오기
    [...$category.querySelectorAll("input")].forEach((e) => {
        if (e.checked) {
            newCategory = e.value;
        }
    });

    // 각 질문에 대한 벨류값 가져오기
    const newKeyword = $keyword.value;
    const newAge = $age.value;
    const newGender = $gender.value;

    // gptSetting array에 Push
    gptSetting.push({
        newCampaignGoal,
        newCampaignType,
        newCategory,
        newKeyword,
        newAge,
        newGender,
    });

    localStorage.setItem("gptSetting", JSON.stringify(gptSetting));
    location.href = "/src/view/service.html";
});

const sidebar_goal = (event) => {
    const goal = document.querySelector('.select_goal')
    const text = goal.querySelector('.selected_q_anwser')

    goal.classList = 'select_goal'
    text.innerText = event.target.value.replace(/_/g, " ")
}

const sidebar_type = (event) => {
    const goal = document.querySelector('.select_type')
    const text = goal.querySelector('.selected_q_anwser')

    goal.classList = 'select_type'
    text.innerText = event.target.value.replace(/_/g, " ")
}

const sidebar_category = (event) => {
    const goal = document.querySelector('.select_category')
    const text = goal.querySelector('.selected_q_anwser')

    goal.classList = 'select_category'
    text.innerText = event.target.value.replace(/_/g, " ")
}

const sidebar_keyword = (event) => {
    const goal = document.querySelector('.select_keyword')
    const text = goal.querySelector('.selected_q_anwser')

    goal.classList = 'select_keyword'
    text.innerText = event.target.value.replace(/_/g, " ")
}

const sidebar_gender = (event) => {
    const goal = document.querySelector('.select_target_gender')
    const text = goal.querySelector('.selected_q_anwser')

    goal.classList = 'select_target_gender'
    text.innerText = event.target.value.replace(/_/g, " ")
}

const sidebar_age = (event) => {
    const goal = document.querySelector('.select_target_age')
    const text = goal.querySelector('.selected_q_anwser')

    goal.classList = 'select_target_age'
    text.innerText = event.target.value.replace(/_/g, " ")
}

[...$campaignGoal.querySelectorAll("input")].forEach((e) => {
    e.addEventListener('click',sidebar_goal)
});

[...$campaignType.querySelectorAll("input")].forEach((e) => {
    e.addEventListener('click',sidebar_type)
});

[...$category.querySelectorAll("input")].forEach((e) => {
    e.addEventListener('click',sidebar_category)
});

$keyword.addEventListener('input',sidebar_keyword)
$gender.addEventListener('change',sidebar_gender)
$age.addEventListener('change',sidebar_age)
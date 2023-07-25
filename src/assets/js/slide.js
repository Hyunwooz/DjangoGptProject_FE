const $nextButton = document.querySelector(".question_next");
const $prevButton = document.querySelector(".question_prev");
const $nextStep = document.querySelector('.nextStep')
const $count = document.querySelector('.q_count_changing');
const content_Els = document.querySelectorAll('section');

// 슬라이드의 위치 기본값은 0
let curr_index = 0;

// 현재 슬라이드의 위치를 알려줌
const whereEl = () => {
    let now = curr_index + 1
    $count.innerText = `${now}`
}

// 슬라이드의 Next 기능
const handleNext = (event) => {
    event.preventDefault()
    if (curr_index == 3 ) {
        $nextStep.classList = "nextStep"
        $nextButton.classList = "question_next hidden"
    } else {
        $nextStep.classList = "nextStep hidden"
        $nextButton.classList = "question_next"
    }

    if (curr_index == 0 ) {
        $prevButton.classList = "question_prev"
    }

    if (curr_index < content_Els.length - 1) {
        const curr = content_Els[curr_index]

        curr_index += 1

        const next = content_Els[curr_index]

        curr.classList.toggle("hidden")
        next.classList.toggle("hidden")
        whereEl()
    } 
}

// 슬라이드의 Prev 기능
const handlePrev = (event) => {
    event.preventDefault()
    if (curr_index == 5 ) {
        $nextStep.classList = "nextStep"
        $nextButton.classList = "question_next hidden"
    } else {
        $nextStep.classList = "nextStep hidden"
        $nextButton.classList = "question_next"
    }

    if (curr_index == 1 ) {
        $prevButton.classList = "question_prev hidden"
    }

    if (content_Els.length - 1 >= curr_index && curr_index > 0) {
        const curr = content_Els[curr_index]

        curr_index -= 1

        const prev = content_Els[curr_index]

        curr.classList.toggle("hidden")
        prev.classList.toggle("hidden")
        whereEl()
    }
}

$nextButton.addEventListener("click",handleNext)
$prevButton.addEventListener("click",handlePrev)
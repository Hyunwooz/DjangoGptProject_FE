// 이벤트 발생을 지연시키는 함수

/**
 * @param {Function} func 함수 타입 : 실행될 Func
 * @param {int} delay int 타입 : 딜레이 시킬 시간 (밀리세컨드 ms)
 */
export const debouncing = (func, delay) => {
    let timer;
    return (event) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(event);
        }, delay);
    };
}

/**
 * @param {Function} func 함수 타입 : 실행될 Func
 * @param {int} delay int 타입 : 딜레이 시킬 시간 (밀리세컨드 ms)
 */
export const throttling = (func, delay) => {
    let timer;
    return (event) => {
    // 이미 타이머가 있다면 실행 X , 타이머가 없다면 함수를 실행하고 일정 시간 후 타이머 초기화
        if (timer) {
            return
        };
        timer = setTimeout(() => {
            func(event);
            timer = null;
        }, delay);
    };
};
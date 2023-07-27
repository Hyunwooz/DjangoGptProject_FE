const is_logined = () => {

    if (sessionStorage.getItem('user')) {
        const is_logined = document.querySelectorAll('.is_logined')

        is_logined.forEach(element => {
            element.style.display = 'flex'
        });
    } else {
        const is_not_logined = document.querySelectorAll('.is_not_logined')

        is_not_logined.forEach(element => {
            element.style.display = 'flex'
        });
    }
}

is_logined()
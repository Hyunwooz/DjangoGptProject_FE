const is_logined = () => {

    if (sessionStorage.getItem('user')) {
        location.href = '/index.html'
    }
}
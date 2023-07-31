
const $nickname = document.querySelector('.user-name')
const $aboutMe = document.querySelector('.user-description')
const $avatar_img = document.querySelector('.user-avatar')
const $ad_wrap = document.querySelector('.my_ad_wrap')


// Django Server URL
const url = `http://127.0.0.1:8000/chatbot/detail/`;

// Django Server와 통신
const ChatLoad = async () => {
    const renderPage = JSON.parse(localStorage.getItem("renderPage"));

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: renderPage.pages,
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });
};

ChatLoad()




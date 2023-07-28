// 화면에 검색 광고 스크립트를 그려주는 함수img
export const createSearch_AD = (data) => {

    const search_Div = document.createElement("div");
    const sponser_P = document.createElement("p");
    const desc_Wrap = document.createElement("div");
    const desc_Img = document.createElement("img");
    const desc_Title_Div = document.createElement("div");
    const desc_Title_P = document.createElement("p");
    const desc_Url_A = document.createElement("a");
    const ad_Div = document.createElement("div");
    const ad_Title_A = document.createElement("a");
    const ad_Desc_P = document.createElement("p");
    const ad_Keyword_A = document.createElement("a");

    // 전체 검색 광고를 감싸주는 div attribute 설정
    search_Div.classList = ``;
    sponser_P.innerText = "스폰서";
    sponser_P.classList = "font-bold text-sm";

    // 검색 광고의 예시를 표시해주는 attribute 설정
    // 배너 이미지와 웹사이트가 표시되는 div 설정
    desc_Wrap.classList = "";
    desc_Img.classList = "";
    desc_Img.setAttribute("src", "../assets/img/sample_banner.png");
    desc_Img.setAttribute("alt", "샘플 배너 이미지");
    desc_Title_Div.classList = "";
    desc_Title_P.classList = "";
    desc_Title_P.innerText = "Your Site";
    desc_Url_A.innerText = "https://Your_Web_Site.com";
    desc_Url_A.setAttribute("href", "#");

    // 검색 광고의 제목 , 문구 등이 표시되는 div 설정
    ad_Div.classList = "";
    ad_Title_A.classList = "";
    ad_Title_A.innerText = data.ad_title;
    ad_Title_A.setAttribute("href", "#");
    ad_Desc_P.classList = "";
    ad_Desc_P.innerText = data.ad_description;
    ad_Keyword_A.classList = "";
    ad_Keyword_A.innerText = data.ad_keyword;
    ad_Keyword_A.setAttribute("href", "#");

    // 부모 Element에 자식 Element들을 넣어주기
    desc_Title_Div.append(desc_Title_P, desc_Url_A);
    desc_Wrap.append(desc_Img, desc_Title_Div);
    ad_Div.append(ad_Title_A, ad_Desc_P, ad_Keyword_A);
    search_Div.append(sponser_P, desc_Wrap, ad_Div);

    return search_Div;
};

// 화면에 디스플레이 광고 스크립트를 그려주는 함수

export const createDisplay_AD = (data) => {

    const display_Wrap = document.createElement("div");
    const display_Div = document.createElement("div");
    const diplay_Img = document.createElement("img");
    const ad_wrap = document.createElement("div");
    const ad_banner = document.createElement("img");
    const ad_Div = document.createElement("div");
    const ad_Title_A = document.createElement("a");
    const ad_Desc_P = document.createElement("p");
    const ad_Arrow = document.createElement("div");
    const ad_Arrow_icon = document.createElement("i");

    // 전체 디스플레이 광고를 감싸주는 div attribute 설정
    display_Wrap.classList = ``;
    display_Div.classList = ""
    
    // 디스플레이 광고의 예시를 표시해주는 attribute 설정
    // 배너와 광고 문구 등이 표시되는 div 설정
    ad_wrap.classList = ``;
    ad_banner.classList = ``;
    
    // 광고의 추천 제목과 스크립트가 표시되는 div 설정
    ad_Div.classList = ""
    ad_Title_A.classList = ""
    ad_Title_A.innerText = data.ad_title;
    ad_Desc_P.classList = ""
    ad_Desc_P.innerText = data.ad_description;
    
    // 화살표 아이콘이 표시되는 div 설정
    ad_Arrow.classList = ``;
    ad_Arrow_icon.classList = ""
    
    // 예시이미지들을 setAttribute 해주기
    diplay_Img.setAttribute("src", "../assets/img/sample.png")
    diplay_Img.setAttribute("alt", "샘플 디스플레이 이미지");
    ad_banner.setAttribute("src", "../assets/img/sample_banner.png");
    ad_banner.setAttribute("alt", "샘플 배너 이미지");

    // 부모 Element에 자식 Element들을 넣어주기
    ad_Div.append(ad_Title_A,ad_Desc_P)
    ad_Arrow.append(ad_Arrow_icon)
    ad_wrap.append(ad_banner,ad_Div,ad_Arrow)
    display_Div.append(diplay_Img,ad_wrap)
    display_Wrap.append(display_Div)

    return display_Wrap;
};

// 화면에 동영상 광고 스크립트를 그려주는 함수

export const createVideo_AD = (data) => {

    const video_Wrap = document.createElement("div");
    const video_Div = document.createElement("div");
    const video_Display_Div = document.createElement("div");
    const video_Display_Block_1 = document.createElement("div");
    const video_Display_Block_2 = document.createElement("div");
    const video_Display_Block_3 = document.createElement("div");
    const video_Display_Img = document.createElement("img");
    
    const video_Display_Skip = document.createElement("div");
    const video_Display_Ad = document.createElement("div");
    const video_Display_Ad_Img = document.createElement("img");
    const video_Display_Ad_desc = document.createElement("div");
    const video_Display_Ad_Title = document.createElement("a");
    const video_Display_Ad_WebSite = document.createElement("p");

    const recommand_Div = document.createElement("div");
    const recommand_title = document.createElement("p");
    const recommand_title_p = document.createElement("p");
    const recommand_Desc = document.createElement("p");
    const recommand_Desc_p = document.createElement("p");
    
    // 전체 동영상 광고를 감싸주는 attribute 설정
    video_Wrap.classList = ``;
    video_Div.classList = ""
    video_Display_Div.classList =""
    
    // 예시이미지들을 setAttribute 해주기
    video_Display_Img.setAttribute("src", "../assets/img/sample.png")
    video_Display_Img.setAttribute("alt", "샘플 디스플레이 이미지");

    // 동영상 광고의 예시를 표시해주는 attribute 설정
    // Skip div 설정
    video_Display_Skip.classList = ``;
    video_Display_Skip.innerText = "Skip ad"
    
    // 예시 배너 이미지 설정
    video_Display_Ad.classList = ``;
    video_Display_Ad_Img.classList = ``;
    video_Display_Ad_Img.setAttribute("src", "../assets/img/sample_banner.png");
    video_Display_Ad_Img.setAttribute("alt", "샘플 배너 이미지");
    
    // 동영상 광고 예시 제목 및 웹사이트 표시 div 설정
    video_Display_Ad_desc.classList = ""
    video_Display_Ad_Title.classList = ""
    video_Display_Ad_Title.setAttribute("href","#")
    video_Display_Ad_Title.innerText = data.ad_Main_keyword;
    video_Display_Ad_WebSite.classList = ""
    video_Display_Ad_WebSite.innerText = ""

    // 동영상 광고 하단부 Block div 설정
    video_Display_Block_1.classList =""
    video_Display_Block_2.classList =""
    video_Display_Block_3.classList =""

    // 동영상 광고의 추천 제목과 추천 스크립트가 표시되는 div 설정
    recommand_Div.classList = ""
    recommand_title.classList = ""
    recommand_title.innerText = "추천 제목"
    recommand_title_p.classList = ""
    recommand_title_p.innerText = data.ad_title;
    recommand_Desc.classList = ""
    recommand_Desc.innerText = "추천 스크립트"
    recommand_Desc_p.classList = ""
    recommand_Desc_p.innerText = data.ad_description;

    // 부모 Element에 자식 Element들을 넣어주기
    video_Display_Ad_desc.append(video_Display_Ad_Title,video_Display_Ad_WebSite)
    video_Display_Ad.append(video_Display_Ad_Img,video_Display_Ad_desc)
    video_Display_Div.append(video_Display_Img,video_Display_Skip,video_Display_Ad)
    video_Div.append(video_Display_Div,video_Display_Block_1,video_Display_Block_2,video_Display_Block_3)
    recommand_Div.append(recommand_title,recommand_title_p,recommand_Desc,recommand_Desc_p)
    video_Wrap.append(video_Div,recommand_Div)

    return video_Wrap;
};
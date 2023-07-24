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
    search_Div.classList = `
        border 
        border-slate-300 
        rounded-xl 
        h-full 
        mx-auto 
        my-3 
        shadow-md 
        py-1 
        px-3 
        md:py-3 
        md:px-6 
        lg:py-3 
        lg:px-[6rem] 
        lg:w-4/5`;
    sponser_P.innerText = "스폰서";
    sponser_P.classList = "font-bold text-sm";

    // 검색 광고의 예시를 표시해주는 attribute 설정
    // 배너 이미지와 웹사이트가 표시되는 div 설정
    desc_Wrap.classList = "flex items-center mt-2";
    desc_Img.classList = "w-8 h-8 bg-gray-800 rounded-full";
    desc_Img.setAttribute("src", "../assets/img/sample_banner.png");
    desc_Img.setAttribute("alt", "샘플 배너 이미지");
    desc_Title_Div.classList = "text-xs ml-3";
    desc_Title_P.classList = "text-sm";
    desc_Title_P.innerText = "Your Site";
    desc_Url_A.innerText = "https://Your_Web_Site.com";
    desc_Url_A.setAttribute("href", "#");

    // 검색 광고의 제목 , 문구 등이 표시되는 div 설정
    ad_Div.classList = "mt-1";
    ad_Title_A.classList = "text-lg text-blue-700";
    ad_Title_A.innerText = data.ad_title;
    ad_Title_A.setAttribute("href", "#");
    ad_Desc_P.classList = "mt-1 text-sm";
    ad_Desc_P.innerText = data.ad_description;
    ad_Keyword_A.classList = "mt-1 text-xs text-blue-700";
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
    display_Wrap.classList = `
        border 
        border-slate-300 
        rounded-xl 
        h-full 
        mx-auto 
        my-3 
        shadow-md
        md:py-2 
        md:px-[1rem] 
        lg:w-4/5 
        lg:py-3 
        lg:px-[2rem]`;
    display_Div.classList = "border-2 border-gray-600"
    
    // 디스플레이 광고의 예시를 표시해주는 attribute 설정
    // 배너와 광고 문구 등이 표시되는 div 설정
    ad_wrap.classList = `
        flex 
        items-center 
        justify-center 
        bg-white 
        p-1 
        pb-3 
        mx-auto 
        lg:p-3 
        lg:pb-5 
        `;
    ad_banner.classList = `
        w-10 
        h-10 
        bg-gray-800 
        mr-3 
        md:mr-6 
        md:w-[4rem] 
        md:h-[4rem] 
        lg:w-[5.5rem] 
        lg:h-[5.5rem]
        `;
    
    // 광고의 추천 제목과 스크립트가 표시되는 div 설정
    ad_Div.classList = "mt-1 w-2/3"
    ad_Title_A.classList = "text-sm md:text-xl lg:text-2xl font-bold text-gray-800"
    ad_Title_A.innerText = data.ad_title;
    ad_Desc_P.classList = "text-xs md:text-sm mt-2"
    ad_Desc_P.innerText = data.ad_description;
    
    // 화살표 아이콘이 표시되는 div 설정
    ad_Arrow.classList = `
        w-6 
        h-6 
        ml-1 
        bg-blue-600 
        rounded-full 
        flex 
        justify-center 
        items-center 
        md:w-[3rem] 
        md:h-[3rem] 
        md:ml-3 
        lg:w-[3.5rem] 
        lg:h-[3.5rem]`;
    ad_Arrow_icon.classList = "fa-solid fa-chevron-right text-white text-md md:text-xl lg:text-4xl"
    
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
    video_Wrap.classList = `
        border 
        border-slate-300 
        rounded-xl 
        w-full 
        h-full 
        mx-auto 
        py-3 
        px-3 
        my-3 
        shadow-md
        lg:px-[2rem]`;
    video_Div.classList = "p-4 bg-black"
    video_Display_Div.classList ="relative"
    
    // 예시이미지들을 setAttribute 해주기
    video_Display_Img.setAttribute("src", "../assets/img/sample.png")
    video_Display_Img.setAttribute("alt", "샘플 디스플레이 이미지");

    // 동영상 광고의 예시를 표시해주는 attribute 설정
    // Skip div 설정
    video_Display_Skip.classList = `
        absolute 
        right-0 
        bottom-7 
        w-1/5
        flex 
        justify-center 
        items-center 
        bg-black 
        opacity-70 
        text-sm 
        text-white
        lg:bottom-8 
        lg:w-1/6 h-8 
        lg:h-10 
        lg:text-xl`;
    video_Display_Skip.innerText = "Skip ad"
    
    // 예시 배너 이미지 설정
    video_Display_Ad.classList = `
        absolute 
        left-0 
        bottom-6 
        flex 
        items-center 
        w-[50%] 
        h-10 
        bg-white 
        opacity-90 
        text-xl 
        p-2
        md:w-[38%] 
        md:h-14`;
    video_Display_Ad_Img.classList = `
        w-7 
        h-7 
        bg-gray-800 
        border 
        border-slate-300
        lg:w-12 
        lg:h-12`;
    video_Display_Ad_Img.setAttribute("src", "../assets/img/sample_banner.png");
    video_Display_Ad_Img.setAttribute("alt", "샘플 배너 이미지");
    
    // 동영상 광고 예시 제목 및 웹사이트 표시 div 설정
    video_Display_Ad_desc.classList = "flex flex-col ml-2 w-2/3"
    video_Display_Ad_Title.classList = "text-[0.3rem] md:text-[1rem] font-bold text-gray-800 mb-[-0.5rem]"
    video_Display_Ad_Title.setAttribute("href","#")
    video_Display_Ad_Title.innerText = data.ad_Main_keyword;
    video_Display_Ad_WebSite.classList = "text-[0.1rem] md:text-[0.9rem] truncate"
    video_Display_Ad_WebSite.innerText = "https://website.com"

    // 동영상 광고 하단부 Block div 설정
    video_Display_Block_1.classList ="mt-6 bg-gray-700 h-4 w-2/3"
    video_Display_Block_2.classList ="mt-2 bg-gray-700 h-4 w-1/4"
    video_Display_Block_3.classList ="mt-6 bg-gray-700 h-8 w-1/4"

    // 동영상 광고의 추천 제목과 추천 스크립트가 표시되는 div 설정
    recommand_Div.classList = "mt-6 font-bold"
    recommand_title.classList = "text-md md:text-lg mb-1"
    recommand_title.innerText = "추천 제목"
    recommand_title_p.classList = "text-xs md:text-sm ml-1 mb-3"
    recommand_title_p.innerText = data.ad_title;
    recommand_Desc.classList = "text-md md:text-lg mb-1"
    recommand_Desc.innerText = "추천 스크립트"
    recommand_Desc_p.classList = "text-xs md:text-sm ml-1"
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
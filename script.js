/* ========================================
   5タブ切り替え
======================================== */

const tabButtons =
    document.querySelectorAll(".tab-button");

const tabContents =
    document.querySelectorAll(".tab-content");


tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId =
            button.dataset.tab;


        /* ------------------------------
           タブボタン切り替え
        ------------------------------ */

        tabButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* ------------------------------
           コンテンツ切り替え
        ------------------------------ */

        tabContents.forEach(content => {

            content.classList.remove("active");

        });


        const targetContent =
            document.getElementById(targetId);


        if (targetContent) {

            targetContent.classList.add("active");

        }


        /* ------------------------------
           ページ上部へ
        ------------------------------ */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* ========================================
   フォトストーリー データ
======================================== */

/*
   イベントごとに写真をまとめます。

   date
   → 日付

   title
   → イベント名

   text
   → イベントについての文章

   images
   → そのイベントの写真

   rotations
   → 写真ごとの回転角度

   例：

   rotations: {
       0: 90,
       2: 180,
       5: 270
   }

   0 → 1枚目
   2 → 3枚目
   5 → 6枚目

   90
   → 右に90度

   180
   → 180度

   270
   → 右に270度
      （左に90度と同じ）


   ★重要★

   画面上に表示するのは
   images[0] の1枚だけです。

   画像をクリックすると、
   同じイベントの images の中だけを
   スライドできます。
*/

const photoEvents = [

    {
        date: "2023-02-25",

        title: "二人の出会い",

        text:
            "ここから二人の物語が始まりました。最初はまだお互いに緊張していて、今思えば少しよそよそしかったね。",

        images: [

            "photos/001.jpg"

        ]
    },


    {
        date: "2023-03-12",

        title: "西武園遊園地",

        text:
            "二人で初めて遠出した旅行。たくさん笑って、たくさん食べて、とても楽しい時間を過ごしました。",

        images: [

            "photos/西武園/LINE_ALBUM_西武園遊園地_260829_6.jpg",
            "photos/西武園/LINE_ALBUM_西武園遊園地_260829_7.jpg",
            "photos/西武園/LINE_ALBUM_西武園遊園地_260829_5.jpg",
            "photos/西武園/LINE_ALBUM_西武園遊園地_260829_4.jpg",
            "photos/西武園/LINE_ALBUM_西武園遊園地_260829_3.jpg",
            "photos/西武園/LINE_ALBUM_西武園遊園地_260829_2.jpg",
            "photos/西武園/LINE_ALBUM_西武園遊園地_260829_1.jpg"

        ],

        /* ------------------------------
           写真ごとの回転角度
        ------------------------------ */

        rotations: {
            1: 90
        }
    },


    {
        date: "2024-03-25",

        title: "初めての横浜旅行",

        text:
            "一緒に過ごした時間が増えるほど、二人の思い出も増えていきました。",

        images: [

            "photos/横浜/LINE_ALBUM_横浜旅行_260829_5.jpg",
            "photos/横浜/LINE_ALBUM_横浜旅行_260829_4.jpg",
            "photos/横浜/LINE_ALBUM_横浜旅行_260829_3.jpg",
            "photos/横浜/LINE_ALBUM_横浜旅行_260829_2.jpg",
            "photos/横浜/LINE_ALBUM_横浜旅行_260829_1.jpg",

        ]
    },


    {
        date: "2023-10-31",

        title: "２人の誕生日会",

        text:
            "一緒に過ごした時間が増えるほど、二人の思い出も増えていきました。",

        images: [

            "photos/誕生日/birth day (1).jpg",
            "photos/誕生日/birth day (2).jpg",
            "photos/誕生日/birth day (3).jpg",
            "photos/誕生日/birth day (4).jpg",
            "photos/誕生日/birth day (5).jpg",
            "photos/誕生日/birth day (6).jpg",
            "photos/誕生日/birth day (7).jpg",
            "photos/誕生日/birth day (8).jpg",
            "photos/誕生日/birth day (9).jpg",
            "photos/誕生日/birth day (10).jpg",
            "photos/誕生日/birth day (11).jpg",
            "photos/誕生日/birth day (12).jpg",
            "photos/誕生日/birth day (13).jpg",
            "photos/誕生日/birth day (14).jpg",
            "photos/誕生日/birth day (15).jpg",
            "photos/誕生日/birth day (16).jpg",
            "photos/誕生日/birth day (17).jpg",
            "photos/誕生日/birth day (18).jpg",
            "photos/誕生日/birth day (19).jpg",
            "photos/誕生日/birth day (20).jpg",
            "photos/誕生日/birth day (21).jpg",
            "photos/誕生日/birth day (22).jpg",
            "photos/誕生日/birth day (23).jpg",
            "photos/誕生日/birth day (24).jpg",
            "photos/誕生日/birth day (25).jpg",
            "photos/誕生日/birth day (26).jpg",
            "photos/誕生日/birth day (27).jpg",
        ]
    },


    {
        date: "2024-03-20",

        title: "１周年記念旅行河津桜",

        text:
            "一緒に過ごした時間が増えるほど、二人の思い出も増えていきました。",

        images: [
            "photos/１周年河津桜/1st (1).jpg",
            "photos/１周年河津桜/1st (2).jpg",
            "photos/１周年河津桜/1st (3).jpg",
            "photos/１周年河津桜/1st (4).jpg",
            "photos/１周年河津桜/1st (5).jpg",
            "photos/１周年河津桜/1st (6).jpg",
            "photos/１周年河津桜/1st (7).jpg",
            "photos/１周年河津桜/1st (8).jpg",
            "photos/１周年河津桜/1st (9).jpg",
            "photos/１周年河津桜/1st (10).jpg",
            "photos/１周年河津桜/1st (11).jpg",
        ]
    },


    {
        date: "2024-02-24",

        title: "２周年！山梨旅行",

        text:
            "一緒に過ごした時間が増えるほど、二人の思い出も増えていきました。",

        images: [
            "photos/２周年山梨/2nd (6).jpg",
            "photos/２周年山梨/2nd (1).jpg",
            "photos/２周年山梨/2nd (2).jpg",
            "photos/２周年山梨/2nd (3).jpg",
            "photos/２周年山梨/2nd (4).jpg",
            "photos/２周年山梨/2nd (5).jpg",
            "photos/２周年山梨/2nd (7).jpg",
            "photos/２周年山梨/2nd (8).jpg",
            "photos/２周年山梨/2nd (9).jpg",
            "photos/２周年山梨/2nd (10).jpg",
            "photos/２周年山梨/2nd (11).jpg",
            "photos/２周年山梨/2nd (12).jpg",
            "photos/２周年山梨/2nd (13).jpg",
            "photos/２周年山梨/2nd (14).jpg",
            "photos/２周年山梨/2nd (15).jpg",
        ]
    },


    {
        date: "2025-02-16",

        title: "３周年茨城旅行",

        text:
            "一緒に過ごした時間が増えるほど、二人の思い出も増えていきました。",

        images: [
            "photos/3周年/3rd (6).jpg",
            "photos/3周年/3rd (1).jpg",
            "photos/3周年/3rd (2).jpg",
            "photos/3周年/3rd (3).jpg",
            "photos/3周年/3rd (4).jpg",
            "photos/3周年/3rd (5).jpg",
            "photos/3周年/3rd (7).jpg",
            "photos/3周年/3rd (8).jpg",
            "photos/3周年/3rd (9).jpg",
            "photos/3周年/3rd (10).jpg",


        ]
    },


    {
        date: "2025-01-01",

        title: "スクープ！",

        text:
            "これまでたくさんの思い出を作ってきました。",

        images: [

            "photos/スクープ/scoop (1).jpg",
            "photos/スクープ/scoop (2).jpg",
            "photos/スクープ/scoop (3).jpg",
            "photos/スクープ/scoop (4).jpg",
            "photos/スクープ/scoop (5).jpg",
            "photos/スクープ/scoop (6).jpg",

        ]
    },


    {
        date: "Various Moments",

        title: "あそびなど",

        text:
            "これまでたくさんの思い出を作ってきました。",

        images: [

            "photos/その他/sonota (1).jpg",
            "photos/その他/sonota (2).jpg",
            "photos/その他/sonota (3).jpg",
            "photos/その他/sonota (4).jpg",
            "photos/その他/sonota (5).jpg",
            "photos/その他/sonota (6).jpg",
            "photos/その他/sonota (7).jpg",
            "photos/その他/sonota (8).jpg",
            "photos/その他/sonota (9).jpg",
            "photos/その他/sonota (10).jpg",
            "photos/その他/sonota (11).jpg",
            "photos/その他/sonota (12).jpg",
            "photos/その他/sonota (13).jpg",
            "photos/その他/sonota (14).jpg",
            "photos/その他/sonota (15).jpg",
            "photos/その他/sonota (16).jpg",
            "photos/その他/sonota (17).jpg",
            "photos/その他/sonota (18).jpg",
            "photos/その他/sonota (19).jpg",
            "photos/その他/sonota (20).jpg",
            "photos/その他/sonota (21).jpg",
            "photos/その他/sonota (22).jpg",
            "photos/その他/sonota (23).jpg",
            "photos/その他/sonota (24).jpg",
            "photos/その他/sonota (25).jpg",
            "photos/その他/sonota (26).jpg",
            "photos/その他/sonota (27).jpg",
            "photos/その他/sonota (28).jpg",
            "photos/その他/sonota (29).jpg",
            "photos/その他/sonota (30).jpg",
            "photos/その他/sonota (31).jpg",
            "photos/その他/sonota (32).jpg",
            "photos/その他/sonota (33).jpg",
            "photos/その他/sonota (34).jpg",
            "photos/その他/sonota (35).jpg",
            "photos/その他/sonota (36).jpg",
            "photos/その他/sonota (37).jpg",
            "photos/その他/sonota (38).jpg",
            "photos/その他/sonota (39).jpg",
            "photos/その他/sonota (40).jpg",
            "photos/その他/sonota (41).jpg",
            "photos/その他/sonota (42).jpg",
            "photos/その他/sonota (43).jpg",
            "photos/その他/sonota (44).jpg",
            "photos/その他/sonota (45).jpg",
            "photos/その他/sonota (46).jpg",
            "photos/その他/sonota (47).jpg",
            "photos/その他/sonota (48).jpg",
            "photos/その他/sonota (49).jpg",
            "photos/その他/sonota (50).jpg",
            "photos/その他/sonota (51).jpg",
            "photos/その他/sonota (52).jpg",
            "photos/その他/sonota (53).jpg",

        ]
    },


    {
        date: "2026-02-25",

        title: "結婚！！",

        text:
            "これまでの思い出を胸に、今日から二人で新しい人生を歩んでいきます。",

        images: [
            "photos/結婚/LINE_ALBUM_結婚✨️_260829_3.jpg",
            "photos/結婚/LINE_ALBUM_結婚✨️_260829_4.jpg",
            "photos/結婚/LINE_ALBUM_結婚✨️_260829_2.jpg",
            "photos/結婚/LINE_ALBUM_結婚✨️_260829_1.jpg",

        ]
    }

];


/* ========================================
   ライトボックス用
======================================== */

let currentEventIndex = 0;

let currentPhotoIndex = 0;


/* ========================================
   フォトストーリー取得
======================================== */

const photoStory =
    document.getElementById("photo-story");


/* ========================================
   ライトボックス取得
======================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxClose =
    document.getElementById("lightbox-close");

const lightboxPrev =
    document.getElementById("lightbox-prev");

const lightboxNext =
    document.getElementById("lightbox-next");


/* ========================================
   回転角度取得
======================================== */

function getRotation(event, photoIndex) {

    if (!event || !event.rotations) {

        return 0;

    }

    return Number(
        event.rotations[photoIndex] || 0
    );

}


/* ========================================
   90度系の回転か判定
======================================== */

function isQuarterRotation(rotation) {

    const normalized =
        ((rotation % 360) + 360) % 360;

    return (
        normalized === 90 ||
        normalized === 270
    );

}


/* ========================================
   代表写真の高さ調整
======================================== */

/*
   CSSの transform: rotate() は
   元々のレイアウト上の高さを変えません。

   そのため90度回転した写真では、
   下の文章に重なる場合があります。

   この関数では、
   回転後に必要になる高さを
   写真の枠に確保します。
*/

function adjustRotatedPhotoHeight(
    image,
    photoWrapper,
    rotation
) {

    if (!image || !photoWrapper) {

        return;

    }


    const normalized =
        ((rotation % 360) + 360) % 360;


    /* ------------------------------
       回転なし
    ------------------------------ */

    if (normalized === 0) {

        photoWrapper.style.height =
            "";

        return;

    }


    /* ------------------------------
       180度回転
       → 縦横サイズは変わらない
    ------------------------------ */

    if (normalized === 180) {

        photoWrapper.style.height =
            `${image.offsetHeight}px`;

        return;

    }


    /* ------------------------------
       90度 / 270度
       → 縦横が入れ替わる
    ------------------------------ */

    if (
        normalized === 90 ||
        normalized === 270
    ) {

        const width =
            image.offsetWidth;

        const height =
            image.offsetHeight;


        if (
            width > 0 &&
            height > 0
        ) {

            photoWrapper.style.height =
                `${width}px`;

        }

    }

}


/* ========================================
   フォトストーリー作成
======================================== */

function createPhotoStory() {

    if (!photoStory) {

        return;

    }


    photoStory.innerHTML = "";


    /* ------------------------------
       イベントがない場合
    ------------------------------ */

    if (photoEvents.length === 0) {

        photoStory.innerHTML = `
            <p class="photo-story-empty">
                まだ写真がありません
            </p>
        `;

        return;

    }


    /* ------------------------------
       イベントごとに作成
    ------------------------------ */

    photoEvents.forEach(
        (event, eventIndex) => {


            /* --------------------------
               イベント全体
            -------------------------- */

            const eventElement =
                document.createElement("article");

            eventElement.className =
                "photo-event";


            /* --------------------------
               日付
            -------------------------- */

            const date =
                document.createElement("div");

            date.className =
                "photo-event-date";

            date.textContent =
                event.date;


            /* --------------------------
               タイトル
            -------------------------- */

            const title =
                document.createElement("h3");

            title.className =
                "photo-event-title";

            title.textContent =
                event.title;


            /* --------------------------
               代表写真
            -------------------------- */

            const photoWrapper =
                document.createElement("div");

            photoWrapper.className =
                "photo-event-photo";


            /*
               写真が存在する場合
            */

            if (
                event.images &&
                event.images.length > 0
            ) {

                const image =
                    document.createElement("img");


                /*
                   1枚目だけ表示
                */

                image.src =
                    event.images[0];


                image.alt =
                    event.title ||
                    `思い出 ${eventIndex + 1}`;


                image.loading =
                    "lazy";


                /* --------------------------
                   回転角度
                -------------------------- */

                const rotation =
                    getRotation(event, 0);


                image.style.transform =
                    `rotate(${rotation}deg)`;


                /*
                   画像読み込み後に
                   回転後の高さを確保
                */

                image.addEventListener(
                    "load",
                    () => {

                        adjustRotatedPhotoHeight(
                            image,
                            photoWrapper,
                            rotation
                        );

                    }
                );


                /*
                   すでにキャッシュされている
                   場合にも対応
                */

                if (image.complete) {

                    adjustRotatedPhotoHeight(
                        image,
                        photoWrapper,
                        rotation
                    );

                }


                /*
                   写真クリック
                */

                image.addEventListener(
                    "click",
                    () => {

                        openLightbox(
                            eventIndex,
                            0
                        );

                    }
                );


                photoWrapper.appendChild(
                    image
                );

            }


            /* --------------------------
               写真枚数
            -------------------------- */

            if (
                event.images &&
                event.images.length > 1
            ) {

                const photoCount =
                    document.createElement("span");


                photoCount.className =
                    "photo-event-count";


                photoCount.textContent =
                    `${event.images.length} photos`;


                photoWrapper.appendChild(
                    photoCount
                );

            }


            /* --------------------------
               文章
            -------------------------- */

            const text =
                document.createElement("p");


            text.className =
                "photo-event-text";


            text.textContent =
                event.text;


            /* --------------------------
               HTMLへ追加
            -------------------------- */

            eventElement.appendChild(
                date
            );


            eventElement.appendChild(
                title
            );


            eventElement.appendChild(
                photoWrapper
            );


            eventElement.appendChild(
                text
            );


            photoStory.appendChild(
                eventElement
            );

        }
    );

}


/* ========================================
   初期表示
======================================== */

createPhotoStory();


/* ========================================
   ライトボックスを開く
======================================== */

function openLightbox(
    eventIndex,
    photoIndex
) {

    const event =
        photoEvents[eventIndex];


    /*
       イベントが存在しない場合
    */

    if (!event) {

        return;

    }


    /*
       写真が存在しない場合
    */

    if (
        !event.images ||
        !event.images[photoIndex]
    ) {

        return;

    }


    /*
       現在のイベント
    */

    currentEventIndex =
        eventIndex;


    /*
       イベント内の現在の写真
    */

    currentPhotoIndex =
        photoIndex;


    /*
       ライトボックス更新
    */

    updateLightbox();


    /*
       表示
    */

    lightbox.classList.add(
        "active"
    );


    /*
       背景スクロール停止
    */

    document.body.style.overflow =
        "hidden";

}


/* ========================================
   ライトボックス更新
======================================== */

function updateLightbox() {

    const event =
        photoEvents[currentEventIndex];


    if (!event) {

        return;

    }


    const image =
        event.images[currentPhotoIndex];


    if (!image) {

        return;

    }


    /*
       回転角度取得
    */

    const rotation =
        getRotation(
            event,
            currentPhotoIndex
        );


    /*
       写真変更
    */

    lightboxImage.src =
        image;


    lightboxImage.alt =
        event.title || "";


    /*
       回転
    */

    lightboxImage.style.transform =
        `rotate(${rotation}deg)`;


    /*
       写真が1枚だけの場合
       左右ボタンを非表示
    */

    if (
        event.images.length <= 1
    ) {

        lightboxPrev.style.display =
            "none";

        lightboxNext.style.display =
            "none";

    }

    else {

        lightboxPrev.style.display =
            "";

        lightboxNext.style.display =
            "";

    }

}


/* ========================================
   ライトボックスを閉じる
======================================== */

function closeLightbox() {

    if (!lightbox) {

        return;

    }


    lightbox.classList.remove(
        "active"
    );


    /*
       背景スクロール復活
    */

    document.body.style.overflow =
        "";

}


/* ========================================
   次の写真
======================================== */

function showNext() {

    const event =
        photoEvents[currentEventIndex];


    if (!event) {

        return;

    }


    if (
        !event.images ||
        event.images.length === 0
    ) {

        return;

    }


    /*
       次の写真へ
    */

    currentPhotoIndex++;


    /*
       イベントの最後まで行ったら
       同じイベントの最初へ
    */

    if (
        currentPhotoIndex >=
        event.images.length
    ) {

        currentPhotoIndex = 0;

    }


    updateLightbox();

}


/* ========================================
   前の写真
======================================== */

function showPrevious() {

    const event =
        photoEvents[currentEventIndex];


    if (!event) {

        return;

    }


    if (
        !event.images ||
        event.images.length === 0
    ) {

        return;

    }


    /*
       前の写真へ
    */

    currentPhotoIndex--;


    /*
       最初より前に行ったら
       同じイベントの最後へ
    */

    if (
        currentPhotoIndex < 0
    ) {

        currentPhotoIndex =
            event.images.length - 1;

    }


    updateLightbox();

}


/* ========================================
   ライトボックス閉じるボタン
======================================== */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


/* ========================================
   次へボタン
======================================== */

if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        showNext
    );

}


/* ========================================
   前へボタン
======================================== */

if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        showPrevious
    );

}


/* ========================================
   背景クリックで閉じる
======================================== */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        event => {

            /*
               背景部分をクリックした場合だけ
               閉じる
            */

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* ========================================
   キーボード操作
======================================== */

document.addEventListener(
    "keydown",
    event => {


        /*
           ライトボックスが開いていない場合
           何もしない
        */

        if (
            !lightbox ||
            !lightbox.classList.contains(
                "active"
            )
        ) {

            return;

        }


        /* ------------------------------
           Esc
        ------------------------------ */

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }


        /* ------------------------------
           右矢印
        ------------------------------ */

        if (
            event.key === "ArrowRight"
        ) {

            showNext();

        }


        /* ------------------------------
           左矢印
        ------------------------------ */

        if (
            event.key === "ArrowLeft"
        ) {

            showPrevious();

        }

    }
);


/* ========================================
   スマホ スワイプ
======================================== */

let touchStartX = 0;

let touchEndX = 0;


if (lightbox) {


    /* ------------------------------
       タッチ開始
    ------------------------------ */

    lightbox.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );


    /* ------------------------------
       タッチ終了
    ------------------------------ */

    lightbox.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0]
                    .screenX;


            handleSwipe();

        },
        {
            passive: true
        }
    );

}


/* ========================================
   スワイプ判定
======================================== */

function handleSwipe() {

    const distance =
        touchEndX - touchStartX;


    /*
       50px未満なら
       スワイプしない
    */

    if (
        Math.abs(distance) < 50
    ) {

        return;

    }


    /*
       左へスワイプ
       → 次の写真
    */

    if (
        distance < 0
    ) {

        showNext();

    }


    /*
       右へスワイプ
       → 前の写真
    */

    else {

        showPrevious();

    }

}
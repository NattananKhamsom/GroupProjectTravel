// Movies Data
var titles = {
    0: {
        title: "America",
        subTitle: "Statue of Liberty",
        desc: "Statue of Liberty Made in Paris by the French sculptor Bartholdi, in collaboration with Gustave Eiffel (who was responsible for the steel framework), this towering monument to liberty was a gift from France on the centenary of American independence. Inaugurated in 1886, the sculpture stands at the entrance to New York Harbour and has welcomed millions of immigrants to the United States ever since",
    },
    1: {
        title: "Brazil",
        subTitle: "Christ the Redeemer",
        desc: "Christ the Redeemer is a 30-meter-tall statue of Jesus Christ on Mount Corcovado in Rio de Janeiro, Brazil. Completed in 1931, it symbolizes peace and love, with Christ’s arms outstretched over the city. The statue is a world-famous landmark, attracting millions of visitors and serving as a symbol of faith for Christians worldwide.",
    },
    2: {
        title: "New York City",
        subTitle: "Times Square",
        desc: "Times Square, located in New York City, is a famous commercial and entertainment center known for its bright lights, large billboards, and the annual New Year's Eve ball drop. It’s a major tourist attraction and a symbol of NYC's vibrant energy.",
    },
};

// Create thumbs swiper
var thumbsSwiper = new Swiper(".thumbsSwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    breakpoints: {
        200: { slidesPerView: 1.5 },
        400: { slidesPerView: 1.5 },
        600: { slidesPerView: 3 },
        1100: { slidesPerView: 5 },
    },
    freeMode: true,
    watchSlidesProgress: true,
});

// Main Swiper
const swiper = new Swiper('.bannerSwiper', {
    spaceBetween: 0,
    effect: "fade",

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: thumbsSwiper,
    },
});

// Change title on active index change
var changeTitle = (index) => {
    var title = document.querySelector('#title');
    var subTitle = document.querySelector('#sub-title');
    var desc = document.querySelector('#desc');
    title.innerHTML = `<h1>${titles[index].title}</h1>`;
    subTitle.innerHTML = `<p>${titles[index].subTitle}</p>`;
    desc.innerHTML = `<p>${titles[index].desc}</p>
        <div class="contact-info">
           <p>
                    <i class="fas fa-map-marker-alt" style="font-size:20px;"></i>
                    New York, NY 10004 United States
                </p>
                <p>
                    <i class="fa fa-phone" style="font-size:20px;"></i>
                    +1 212-363-3200
                </p>
        </div>`;
};

// Trigger on active index change
swiper.on('activeIndexChange', function () {
    changeTitle(swiper.activeIndex);
});

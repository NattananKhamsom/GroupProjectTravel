// Movies Data
var titles = {
    0: {
        title: "Thailand",
        subTitle: "Wat Arunratchawararam",
        desc: "Wat Arun Ratchawararam, also known as Wat Chaeng or Wat Arun or the Temple of Dawn, is one of Bangkok's most iconic landmarks, perched gracefully on the banks of the Chao Phraya River. Known for its towering white prang, this temple draws in visitors from around the world to admire its breathtaking beauty. As the sun sets, Wat Arun transforms into a dazzling spectacle, its silhouette reflecting on the water, creating an unforgettable experience. Whether you're seeking cultural immersion or simply a stunning view, this majestic temple will leave you in awe!",
    },
    1: {
        title: "China",
        subTitle: "Macau",
        desc: "A city with European-style romance right here in Asia! If you don't have time to travel all the way to Europe, Macau is the perfect substitute. Visiting during the month of love makes it even better, with amazing weather for holding hands and enjoying romantic moments with your partner. You'll definitely love it!",
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
                <i class="fas fa-map-marker-alt"></i>
                Westminster, London SW1A 0AA, UK SW1A 0AA England United Kingdom
            </p>
            <p>
                <i class="fa fa-phone"></i>
                +44 20 7219 4272
            </p>
        </div>`;
};

// Trigger on active index change
swiper.on('activeIndexChange', function () {
    changeTitle(swiper.activeIndex);
});

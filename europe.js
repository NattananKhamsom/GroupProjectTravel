// Movies Data
var titles = {
    0: {
        title: "England",
        subTitle: "BigBen",
        desc: "Big Ben The chimes of Big Ben can be heard up to 5 miles away – an oh-so-familiar sound for Londoners. The clock tower is an iconic London landmark standing 96 metres high on the north end of the Houses of Parliament.",
    
    },
    1: {
        title: "Paris",
        subTitle: "The Eiffel Tower",
        desc: "The Eiffel Tower is an iconic iron lattice tower located on the Champ de Mars in Paris, France. Designed by Gustave Eiffel and completed in 1889 for the Exposition Universelle (World's Fair), it stands at 1,083 feet (330 meters) tall. Originally criticized by some of Paris's leading artists and intellectuals, the tower has become a beloved symbol of France and a global cultural icon. Visitors can ascend the tower for breathtaking views of Paris, making it one of the most visited monuments in the world. The tower is beautifully illuminated at night, enhancing its status as a romantic landmark.",
    },
    2: {
        title: "France",
        subTitle: "Colmar",
        desc: "Colmar is a picturesque town in the Alsace region of France, famous for its colorful half-timbered houses and canals, especially in the Petite Venise district. With a rich history, it features notable sites like Saint-Martin Church and the Unterlinden Museum. Colmar is also known for its local cuisine, including Choucroute, and vibrant festivals, particularly its Christmas market. It’s a perfect destination for history, culture, and scenic beauty.",
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
    thumbs: {
        swiper: thumbsSwiper,
    },
});

// Select the main images that will change
const mainImages = document.querySelectorAll('.content .image img');

// Select all the thumbnail slides
const thumbSlides = document.querySelectorAll('.thumbsSwiper .swiper-slide img');

// Function to change the main images based on thumbnail click
thumbSlides.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        // Update the main images based on the clicked thumbnail
        const newImageSrc = thumb.src; // Get the source of the clicked thumbnail
        mainImages[0].src = newImageSrc; // Change the first main image

        // Optionally, change the second main image (you can set it to something specific)
        if (index === 0) {
            mainImages[0].src = 'image/London.webp';
            mainImages[1].src = 'image/lodoneye.avif'; // Example: Set it to a specific image
        } else if (index === 1) {
            mainImages[0].src = 'image/paris.jpg';
            mainImages[1].src = 'image/ฝรั่งเศษ.jpg'; // Another specific image
        } else if (index === 2) {
            mainImages[0].src = 'image/e2.jpg';
            mainImages[1].src = 'image/e4.webp'; // Another specific image
        }
    });
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
                        Westminster, London SW1A 0AA, UK SW1A 0AA England United Kingdom
                    </p>
                    <p>
                        <i class="fa fa-phone" style="font-size:20px;"></i>
                        +44 20 7219 4272
                    </p>
            </P>
        </div>`;

};

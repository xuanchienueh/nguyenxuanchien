new WOW().init(); // thư viện wowjs

// thư việc fancybox
$('[data-fancybox="gallery"]').fancybox({
    loop: true,
    arrows: true,
    infobar: true,
});
// thư viện counter up
$('.counter').countUp({
    'time': 3000,
    'delay': 10
});


const features_left_items = document.querySelectorAll('.features_left_item')
features_left_items.forEach((features_left_item) => {
    features_left_item.onmouseover = function () {
        document.querySelector('.features_left_item.active').classList.remove('active')
        this.classList.add('active')
    }
})
const plantItems = document.querySelectorAll('.plan_item')
plantItems.forEach((item) => {
    item.onmouseover = function () {
        document.querySelector('.plan_item.active').classList.remove('active')
        this.classList.add('active')
    }
})
const yourPlanMonth = document.querySelector('.month.time')
const yourPlanYear = document.querySelector('.year.time')
const price_number = document.querySelectorAll('.price .price_number')
const price_timely = document.querySelectorAll('.price .timely')
const yourPlanMonths = ['$49', '$99', '$149']
const yourPlanYears = ['$449', '$1099', '$1299']
yourPlanYear.onclick = function () {
    for (let i = 0; i < price_number.length; i++) {
        price_number[i].innerText = yourPlanYears[i]
    }

    price_timely.forEach((item) => {
        item.innerText = '/Year'
    })

    document.querySelector('.time.active').classList.remove('active')
    this.classList.add('active')
}
yourPlanMonth.onclick = function () {
    for (let i = 0; i < price_number.length; i++) {
        price_number[i].innerText = yourPlanMonths[i]
    }
    price_timely.forEach((item) => {
        item.innerText = '/Month'
    })
    document.querySelector('.time.active').classList.remove('active')
    this.classList.add('active')
}

// thư viện slick
$(function () {
    $('#show').slick({
        asNavFor: '#my_class',
        speed: 2000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('#my_class').slick({
        // slidesToScroll: 1,
        // infinite: true,
        cssEase: 'linear',
        asNavFor: '#show',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        speed: 800,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.blog_items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerPadding: '30px',
    });
    $('.logo_items').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})

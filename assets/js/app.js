
let menuBtn = document.querySelector("#menu")

let a = document.getElementById("navbox")
function responsive() {
    a.classList.toggle("left-0")
    document.body.classList.toggle("overflow-hidden")
    menuBtn.classList.toggle("change_btn")
}

// slider


    $('.slider').slick({
        dots: false,
    autoplay: true,
    infinite: true,
    speed: 2500,
    autoplaySpeed: 0,
    arrows: false,
    slidesToShow: 7,
    centermode: true,
    slidesToScroll: 1,
    cssEase: 'linear',

    responsive:
    [

    {
        breakpoint: 1024,
    settings: {
        slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
                        }
                    },
    {
        breakpoint: 600,
    settings: {
        slidesToShow: 2,
    slidesToScroll: 1
                        }
                    },
    {
        breakpoint: 480,
    settings: {
        slidesToShow: 1,
    slidesToScroll: 1
                        }
                    }

    ]
        });


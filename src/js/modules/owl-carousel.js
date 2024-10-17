function owlCarousel (){
    $(".section-anounce__slider").owlCarousel({
        loop: false, // False - обязательно так как клонированные элементы будут работать неправильно !
        margin: 0,
        nav: true,

        navContainer: '.anounceNav',
        dotsContainer: '.anounceDots',
        responsive: {
            0: {
                items: 1
            }
            // 600:{
            //     items:3
            // },
            // 1000:{
            //     items:5
            // }
        },
        navText : ["",""]
    });


    $(".section-popular__slider").owlCarousel({
        loop: false, // False - обязательно так как клонированные элементы будут работать неправильно !
        margin: 30,
        nav: true,

        navContainer: '.popularNav',
        dotsContainer: '.popularDots',
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            800:{
                items:4
            }
            // 1000:{
            //     items:5
            // }
        },
        navText : ["",""]
    });

    $(".section-recently__slider").owlCarousel({
        loop: false, // False - обязательно так как клонированные элементы будут работать неправильно !
        margin: 30,
        nav: true,

        navContainer: '.recentlyNav',
        dotsContainer: '.recentlyDots',
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            800:{
                items:4
            }
            // 1000:{
            //     items:5
            // }
        },
        navText : ["",""]
    });

    $(".section-ourbig__slider").owlCarousel({
        loop: true, // False - обязательно так как клонированные элементы будут работать неправильно !
        margin: 0,
        nav: true,

        navContainer: '.ourbigNav',
        dotsContainer: '.ourbigDots',
        responsive: {
            0: {
                items: 1
            }
            // 1000:{
            //     items:5
            // }
        },
        navText : ["",""]
    });
}

export default owlCarousel;
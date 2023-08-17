$(document).ready(function(){

    const close = () => {
        $(".menu__inner").removeClass("active");
        $(".mobile__menu").removeClass("active");
    }

    $(".go").on("click", function(e){
		e.preventDefault();
		close();
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: pointTop}, 500);
	});

    
	$(".faq__item").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children(".faq__item--wrapper").children(".faq__item--open").children("p").text("+");
        }else{
            $(".faq__item").removeClass("active");
            $(".faq__item").children(".faq__item--wrapper").children(".faq__item--open").children("p").text("+");
            $(this).addClass("active");
            $(this).children(".faq__item--wrapper").children(".faq__item--open").children("p").text("-");
        }
    });

    $(".menu__inner").on("click", function(){
        $(this).toggleClass("active");
        $(".mobile__menu").toggleClass("active");
    });

    const tokenSupply = $(".token__points--title").text().trim();
    const tokenSupplyValue = $(".token__points--value").text().trim();

    const chartTitle = $(".chart__info--title");
    const chartInfo = $(".chart__info--value");

    $(".unit").on("mouseenter", function(){
        const index = $(this).index();
        const current = $(".token__point").eq(index);

        current.addClass("active");
        chartInfo.text(current.children(".token__percent").text().trim());
        chartTitle.text(current.children(".token__point--wrapper").children(".token__name").text().trim());
    });

    $(".unit").on("mouseleave", function(e){
        const index = $(this).index();

        $(".token__point").eq(index).removeClass("active");

        chartTitle.text(tokenSupply);
        chartInfo.text(tokenSupplyValue);
    });

    $(".token__point").on("mouseenter", function(){
        const index = $(this).index();
        const current = $(".unit").eq(index);

        current.addClass("active");
        chartInfo.text($(this).children(".token__percent").text().trim());
        chartTitle.text($(this).children(".token__point--wrapper").children(".token__name").text().trim());
    });

    $(".token__point").on("mouseleave", function(){
        const index = $(this).index();

        $(".unit").eq(index).removeClass("active");

        chartTitle.text(tokenSupply);
        chartInfo.text(tokenSupplyValue);
    });

    // Sliders
    const swiper = new Swiper('.roadmap__slider', {
        slidesPerView: 2.3,
        spaceBetween: 60,
        navigation: {
            nextEl: ".roadmap__next",
            prevEl: ".roadmap__prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            998: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 2.3,
                spaceBetween: 60,
            },
        }
    });

});

class NavCollapseEffect {
    constructor(navSelector) {
        this.navbar = document.querySelector(navSelector)
        this.show = this.show
            this.hide = this.hide
            this.expand = this.expand
        }

        show() {
            this.navbar.classList.remove('hide')
        }

        hide() {
            this.navbar.classList.add('hide', 'collapse')
        }

        expand() {
            this.navbar.classList.remove('collapse')
        }
        init() {
            Window.prototype.scrollArr = [];

            window.addEventListener('scroll', () => {
                
                scrollArr.push(window.scrollY);
                if (window.scrollY === 0) {
                    nav.expand()
                }
                if (scrollArr[scrollArr.length - 1] > scrollArr[scrollArr.length - 2]) {
                    nav.hide()
                } else if (scrollArr[scrollArr.length - 1] < scrollArr[scrollArr.length - 2]) {
                    nav.show()
                }

            })
        }
    }
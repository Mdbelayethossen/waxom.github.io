$(document).ready(function(){
    $(".slide-area .container .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        nav:true,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 1
            },
            768: {
                items: 1
            },            
            1200: {
                items: 1
            },            
        }
    });
    //Isotope Initialiger
    let $btns = $('.project-area .button-group button');
    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })
    $('.project-area .button-group #btn1').trigger('click');
    //Magnific Popup Init
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
    //owl 2nd init
    $(".recent-post .container .owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        nav:false,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 1
            },
            768: {
                items: 1
            },            
            1200: {
                items: 3
            },            
        }
    });
    var owl = $('.recent-post .container .coustom-nav');
    owl.owlCarousel();
    // Go to the next item
    $('.nextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.prevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
  });
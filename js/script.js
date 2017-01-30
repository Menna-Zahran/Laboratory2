/**
 * Created by ascom on 20/09/2016.
 */
$(document).ready(function() {


    /*header carousel*/
    $("#owl-demo").owlCarousel({

        navigation : true, // Show next and prev buttons
        navigationText : ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
        paginationSpeed : 900,
        singleItem:true,
        autoPlay:true,
        slideSpeed:5000,
        stopOnHover:true
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });


    /*testimonials carousel*/
    $("#testimonials-owl-demo").owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        autoPlay:true,
        singleItem:true,
        stopOnHover:true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });


    /*team carousel*/
    $("#team-owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation : true, // Show next and prev buttons
        navigationText : ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
        pagination:false, //no polits o o o
        items : 3,//number of items
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        stopOnHover:true
    });


    /*contact*/
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });


});



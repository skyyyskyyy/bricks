$(function() {


    var $mainContainer = $('.main-head');
    $mainContainer.height(window.innerHeight);
    $(window).resize(function() {
        $mainContainer.height(window.innerHeight);
    });




    var cancel = false;
    $(".hover").hide();
    $(".middle").hover(function() {

        cancel = (cancel) ? false : true;
        
        if (!cancel) {
             $(this).find(".hover").hide();
             $(this).find('.hd').show();
        } else if (cancel) {

             $(this).find(".hover").show();
             $(this).find('.hd').hide();
        }


    });
    $(".abs").hover(function() {

        cancel = (cancel) ? false : true;
        
        if (!cancel) {
             $(this).find(".hover").hide();
             
        } else if (cancel) {

             $(this).find(".hover").show();
        
        }


    });





    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });






});

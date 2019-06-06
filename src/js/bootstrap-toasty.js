(function ($) {
    /**@const */ var TOASTY_CONTAINER = "<div aria-live='polite' aria-atomic='true' class='btoasty-container'></div>";
    /**@const */ var TOASTY_WRAPPER = "<div class='toasty-wrap'></div>"
    
    
    /**@const */ var TOASTY_WRAPPER_POSITIONS = 
    {
     TOP_RIGHT: "toasty-top-right",
     TOP_LEFT: "toasty-top-left",
     BOTTOM_RIGHT: "toasty-bottom-right",
     BOTTOM_LEFT: "toasty-bottom-left" 
    };


    /**
     * 
     * @param {...*} var_args
     */
    $.BToasty = function (var_args) {
        
        // Gets the Bootstrap Toasty container.
        var container = $(".btoasty-container");

        if (container.length == 0) {

            container = $(TOASTY_CONTAINER);

            $(body).prepend(container);
            
            $.each(TOASTY_WRAPPER_POSITIONS, function(key, value) {
                var wrapper = $(TOASTY_WRAPPER);
                $(wrapper).addClass(value).appendTo(container);
            });

        }


        if (arguments.length > 0) {
            if (arguments.length == 1) {

            }
        }
    }
})(Jquery);
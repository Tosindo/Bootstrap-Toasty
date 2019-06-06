(function ($) {

    var TOASTY_AUTO_INTERVAL = setInterval(function() {
        $(".btoasty [data-time-auto]").each(function() {
            if ($(this).data("toasty-starttime") === undefined) {
                $(this).data("toasty-starttime", new Date());
            }


            var secondDiff = Math.floor((new Date().getTime() - $(this).data("toasty-starttime").getTime()) / (1000));
            
            if (secondDiff > 60) {
                $(this).text("~" + Math.floor(secondDiff/60) + " minutes ago");
            }else{
                $(this).text("~" + secondDiff + " seconds ago");
            }

        });


    }, 5000);


    /** @const */ var TOASTY_CONTAINER = "<div aria-live='polite' aria-atomic='true' class='btoasty-container'></div>";    
    
    /** @const */ var TOASTY_WRAPPER_POSITIONS = 
    {
     TOP_RIGHT: "btoasty-wrap-top-right",
     TOP_LEFT: "btoasty-wrap-top-left",
     TOP_MIDDLE: "btoasty-wrap-top-middle",
     BOTTOM_RIGHT: "btoasty-wrap-bottom-right",
     BOTTOM_LEFT: "btoasty-wrap-bottom-left",
     BOTTOM_MIDDLE: "btoasty-wrap-bottom-middle",
    };


    /** @const */ var BOOTSTRAP_TOAST_PIECES = {
        container: '<div class="toast btoasty" role="alert" aria-live="assertive" aria-atomic="true"></div>',
        header: '<div class="toast-header"></div>',
        image: '<img src="" class="rounded mr-2" alt=""/>',
        title: '<strong class="mr-auto"></strong>',
        extra: '<small class="text-muted"></small>',
        xbutton: '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>',
        body: '<div class="toast-body"></div>',
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

            $(document.body).prepend(container);
            
            $.each(TOASTY_WRAPPER_POSITIONS, function(key, value) {
                var wrapper = $("<div></div>");
                $(wrapper).addClass(value).appendTo(container);
            });

        }


        if (arguments.length > 0) {

            
                

            if ($.type(arguments[0]) == "object") {
                    
                var options = arguments[0];
                
                var title = options.title || "",
                    extra = options.extra || "time-auto",
                    body = options.body || "",
                    autoHide = options.autoHide != false,
                    duration = options.duration || 5000,
                    img = options.img || {src: '', alt: ''},
                    xbutton = options.xbutton != false,
                    position = options.position || "top_right",
                    id = options.customID || "btoasty-num-" + ($(".btoasty").length+1);

                var found_position = false;
                $.each(TOASTY_WRAPPER_POSITIONS, function(key,value) {
                    if (key == position.toUpperCase()) {
                        position = value;
                        found_position = true;
                        return;
                    }
                });

                if (!found_position) {
                    position = TOASTY_WRAPPER_POSITIONS.TOP_RIGHT;
                }


                var toast = $(BOOTSTRAP_TOAST_PIECES.container);

                $(toast).attr("id", id);

                $(toast).attr("data-autohide", autoHide);
                $(toast).attr("data-delay", duration);



                var toast_header = $(BOOTSTRAP_TOAST_PIECES.header);
                var toast_body = $(BOOTSTRAP_TOAST_PIECES.body);


                $(toast).append(toast_header);
                if ($.type(img) === "object") {
                    if (img.src != '' && img.src != null) {
                        var image = $(BOOTSTRAP_TOAST_PIECES.image);
                        
                        image.prop("src", img.src);
                        image.prop("alt", img.alt || "");

                        image.appendTo(toast_header);
                    }
                }else if ($.type(img) === "string") {
                    var image = $(BOOTSTRAP_TOAST_PIECES.image);
                    
                    image.prop("src", img);
                    image.prop("alt", "");

                    image.appendTo(toast_header);
                }


                $(toast_header).append($(BOOTSTRAP_TOAST_PIECES.title).text(title));
                
                if (extra != "") {
                    if (extra == "time-auto") {
                        var extra = $(BOOTSTRAP_TOAST_PIECES.extra);

                        $(extra).attr("data-time-auto", true);
                        $(extra).text("~0 seconds ago");

                        $(toast_header).append(extra);
                    }
                    else
                        $(toast_header).append($(BOOTSTRAP_TOAST_PIECES.extra).text(extra));
                }

                if (xbutton) {
                    $(toast_header).append($(BOOTSTRAP_TOAST_PIECES.xbutton));
                }
                
                
                if (body != "" && body != null) {
                    $(toast_body).html(body);
                    $(toast).append(toast_body);
                }

                $('.btoasty-container').find("." + position).append(toast);

                $(toast).toast('show');
                $(toast).on("hidden.bs.toast", function() {
                    $(toast).remove();
                });
            }

            else {
                var obj = {};
                switch(arguments.length) {
                    case 6:
                        obj.duration = arguments[5];
                    case 5:
                        obj.autoHide = arguments[4];
                    case 4:
                        obj.position = arguments[3];
                    case 3:
                        obj.extra = arguments[2];
                    case 2:
                        obj.body = arguments[1];
                    case 1:
                        obj.title = arguments[0];
                        break;
                }

                $.BToasty(obj);
            }




        }
    }
})(jQuery);
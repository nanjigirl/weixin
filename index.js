
$(".all_list").focus();
var width = $("body").width();
width = parseInt(width) * 0.73 - 1 + "px";
$(".all_list").css("width", width);
$(".menus").css("height", $(window).height());
$(".menus").css("max-height", $(window).height());

$(".all_list").css("max-height", $(window).height());

$("body").css({"height": "100%", "overflow": "hidden"});
$("html").css({"height": "100%", "overflow": "hidden"});

function openUrl(){
    $("[data-url]").click(function(){
        var _this = $(this);
        var href = _this.attr("href");
        if (ff == 1) {
        } else {
            if (_this.offset().top < $(window).height() * 0.1) {
                $(this).parent().addClass("active").siblings().removeClass("active");
            }
        }
        $(href).css("display","block");
    });
}
openUrl();
var j = 0, posL = [], posO = {};
function aSkip(o) {
    clearTimeout(timeId);
    ff = 1;
    timeId2 = window.setTimeout("isStop()", 200);

    if (j == 0) {
        $.each(type, function (i, item) {
            posO.id = "#" + type[i];
            posO.top = $("#" + type[i]).offset().top + $(".all_list").scrollTop();
            posL[i] = posO;
            posO = {};
        });
        $.each(posL, function (i, item) {
            if ($(o).attr("href") == item.id) {
                $(".all_list").animate({scrollTop: item.top}, 700);
            }
        });
        j++;

    } else {
        $(".all_list").stop();
        $.each(posL, function (i, item) {
            if ($(o).attr("href") == item.id) {
                $(".all_list").animate({scrollTop: item.top}, 700);
            }
        });
    }
};

function isStop() {
    //alert($(".all_list").is(":animated"))
    if ($(".all_list").is(":animated")) {
        ff = 1;
        timeId2 = window.setTimeout("isStop()", 200);
    } else {
        ff = 0;
        clearTimeout(timeId2);

    }
}
$(".all_list").on("scrollstop", function () {
    if (ff == 0) {
        console.log("?");
        timeId = window.setTimeout("skipHref()", 200);
    } else {
        clearTimeout(timeId);
    }
});


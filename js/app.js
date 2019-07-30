$("table:has(img)").addClass("nexmoe-album");

$("#nexmoe-content img").each(function () {
    $(this).attr("data-original", $(this).attr("src"));
    $(this).attr("src", "");
    $(this).attr("referrerPolicy", "no-referrer");
});

$("article img").each(function () {
    var element = document.createElement("a");
    $(element).attr("data-fancybox", "gallery");
    $(element).attr("href", $(this).attr("src"));
    $(this).wrap(element);
});

$("#nexmoe-sidebar a").addClass("mdui-ripple");
mdui.mutation();

$("img").lazyload({effect: "fadeIn"});
$(document).ready(function () {

    $("#name").slideDown().show(function () {
        $("#info").slideDown().show();
    });

    var classes = new Array('colorchange pink', 'colorchange grey', 'colorchange black', 'colorchange blue', 'colorchange green', 'colorchange white', 'colorchange red');
    var length = classes.length;

    $(".colorchange").on("mouseover", function () {
        $(this).removeClass().addClass(classes[Math.floor(Math.random() * length)]);

        $(this).delay(1500).queue(function (next) {
            $(this).removeClass().addClass("colorchange");
            next();
        })
    })


    $("#info2").delay(10000).queue(function (next) {
        $("#info").slideUp(function () {
            $("#info2").slideDown().show();
        })
        next();
    })

    //$("#skills").on("click", function (e) {
    //    e.preventDefault();
    //    $("#info").slideUp(function () {
    //        $("#info2").slideDown().show();
    //    });
    //})
})





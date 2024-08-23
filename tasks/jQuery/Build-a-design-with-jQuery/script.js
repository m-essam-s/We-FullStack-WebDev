$(document).ready(() => {
    $("#contain").animate({ width: "80%" }, 1000, function () {
        $("#contain").animate({ height: "100vh" }, 1000, function () {
            $("#title").fadeIn(1000, () => {
                $(".character").eq(0).fadeIn(1000, function () {
                    $(".character").eq(1).fadeIn(1000, function () {
                        $(".character").eq(2).fadeIn(1000)
                    })
                });
            })
        })
    })
})
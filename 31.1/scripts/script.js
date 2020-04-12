let active_id = "tab_info";

$(".tab").click(function (event) {
    let next_id = $(this).attr("id");
    switch (next_id) {
        case "tab_info":
            $(".slider").removeClass("slider--center");
            $(".slider").removeClass("slider--end");
            if (next_id !== active_id) {
                if (active_id === "tab_rating") {
                    $("#container_rating").animate({ width: 'toggle' });
                    $("#container_info").animate({ width: 'toggle' });
                }
                else if (active_id === "tab_buy") {
                    $("#container_buy").animate({ width: 'toggle' });
                    $("#container_info").animate({ width: 'toggle' });
                }
            }
            active_id = next_id;
            break;
        case "tab_rating":
            $(".slider").removeClass("slider--end");
            $(".slider").addClass("slider--center");
            if (next_id !== active_id) {
                if (active_id === "tab_info") {
                    $("#container_info").animate({ width: 'toggle' });
                    $("#container_rating").animate({ width: 'toggle' });
                }
                else if (active_id === "tab_buy") {
                    $("#container_buy").animate({ width: 'toggle' });
                    $("#container_rating").animate({ width: 'toggle' });
                }
            }
            active_id = next_id;

            break;
        case "tab_buy":
            $(".slider").addClass("slider--end");
            $(".slider").removeClass("slider--center");
            if (next_id !== active_id) {
                if (active_id === "tab_info") {
                    $("#container_info").animate({ width: 'toggle' });
                    $("#container_buy").animate({ width: 'toggle' });
                }
                else if (active_id === "tab_rating") {
                    $("#container_rating").animate({ width: 'toggle' });
                    $("#container_buy").animate({ width: 'toggle' });

                }
            }
            active_id = next_id;
            break;

        default:
            break;
    }
});

// $("").animate({width: 'toggle'});
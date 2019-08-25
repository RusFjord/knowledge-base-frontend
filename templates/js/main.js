$('.u8-close-sidebar').click(
    () => {
        $("#u8-sidebar").animate({
            left: "-=15rem"
        });
        $('#u8-bars').removeClass('d-none');
        // .addClass('u8-sidebar-close').removeClass('u8-sidebar');
    }
);

$('#u8-bars').click(
    () => {
        $("#u8-sidebar").animate({
            left: "+=15rem"
        });
        $('#u8-bars').addClass('d-none');
    }
);
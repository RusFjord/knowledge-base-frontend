$('#u8-close-sidebar').click(
    () => {
        $("#u8-sidebar").animate({
            left: "-=12rem"
        });
        // $('#u8-bars').removeClass('d-none');
        $('.u8-full-menu').addClass('d-none');
        $('.u8-icon-menu').removeClass('d-none');
        $('.fa-arrow-right').removeClass('d-none');
        $('.fa-arrow-left').addClass('d-none');
    }
);

$('#u8-open-sidebar').click(
    () => {
        $("#u8-sidebar").animate({
            left: "+=12rem"
        });
        // $('#u8-bars').removeClass('d-none');
        $('.u8-full-menu').removeClass('d-none');
        $('.u8-icon-menu').addClass('d-none');
        $('.fa-arrow-right').addClass('d-none');
        $('.fa-arrow-left').removeClass('d-none');
    }
);
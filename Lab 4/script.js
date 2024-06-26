
$(document).ready(function() {
    // Enable manual rotation with prev and next buttons
    $('.carousel').carousel({
        interval: false // Disable automatic rotation
    });

    // Enable automatic rotation after a delay
    setTimeout(function() {
        $('.carousel').carousel({
            interval: 5000 // Set interval to 5 seconds
        });
    }, 2000); // Start automatic rotation after 2 seconds

    // Toggle additional details when "more info" link is clicked
    $(".more-info-link").click(function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        $($(this).data("target")).toggle();
    });
});
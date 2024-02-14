$(document).ready(function() {
    // Enable manual rotation with prev and next buttons
    $('.carousel').carousel({
        interval: false // Disable automatic rotation initially
    });

    // Enable automatic rotation after a delay
    setTimeout(function() {
        $('.carousel').carousel({
            interval: 5000 // Set interval to 5 seconds for automatic rotation
        });
    }, 2000); // Start automatic rotation after 2 seconds delay


    // Update service price based on selected professional
    $('#professional').change(function() {
        var selectedProfessional = $(this).val();
        var price = 0; // Default price

        // Update price based on selected professional
        if (selectedProfessional === 'Joshua Anton') {
            price = 30; // Price for haircut
        } else if (selectedProfessional === 'Anas Taimah') {
            price = 20; // Price for beard trim
        } else if (selectedProfessional === 'Omar Abdul') {
            price = 25; // Price for shave
        }

        // Update price display
        $('#price').text(price);
    });

    // Collapse the navbar menu when a link is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});

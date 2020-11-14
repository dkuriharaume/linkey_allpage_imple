/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('#carousel-example .carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carousel-example .carousel-item').eq(i).appendTo('#carousel-example .carousel-inner');
            }
            else {
                $('#carousel-example .carousel-item').eq(0).appendTo('#carousel-example .carousel-inner');
            }
        }
    }
});

$('#carousel-example_2').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('#carousel-example_2 .carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            if (e.direction=="left") {
                $('#carousel-example_2 .carousel-item').eq(i).appendTo('#carousel-example_2 .carousel-inner');
            }
            else {
                $('#carousel-example_2 .carousel-item').eq(0).appendTo('#carousel-example_2 .carousel-inner');
            }
        }
    }
});
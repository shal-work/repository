$('.selector-ripples').ripples({
    resolution: 256,
    dropRadius: 20,
    perturbance: 0.14
});


// $(document).ready(function() {
	
    $('.selector-ripples-auto').ripples({
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: false,

    });	
    setInterval(function() {
        var $el = $('.selector-ripples-auto');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 15;
        // var strength = 0.08 + Math.random() * 0.8;
        var strength = 0.18;
        $el.ripples('drop', x, y, dropRadius, strength);
    }, 400);
// });

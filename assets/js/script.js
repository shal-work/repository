$('.selector-ripples').ripples({
    resolution: 256,
    dropRadius: 20,
    perturbance: 0.14
});


// $(document).ready(function() {
	
    $('.selector-ripples-auto').ripples({
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.14,
        // interactive: false,
    });	
    let $el1 = $('.selector-ripples-auto');
    let x1 = Math.random() * $el1.outerWidth();
    let y1 = Math.random() * $el1.outerHeight();
    // console.log(x1);
    // console.log(y1);
    let dropRadius1 = 20;
    let strength1 = 0.08 + Math.random() * 0.08;
    // console.log(strength1);
    $el1.ripples('drop', x1, y1, dropRadius1, strength1);

    setInterval(function() {
        let $el = $('.selector-ripples-auto');
        let x = Math.random() * $el.outerWidth();
        let y = Math.random() * $el.outerHeight();
        let dropRadius = 15;
        let strength = 0.08 + Math.random() * 0.8;
        $el.ripples('drop', x, y, dropRadius, strength);
    }, 10000);
// });

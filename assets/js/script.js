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


const layer = document.querySelectorAll('.selector');
layer.forEach(item => {
    console.log('width: ', item.offsetWidth );
    console.log('offsetHeight: ', item.offsetHeight );
    item.addEventListener('mousemove', e => {
        // let mouseX = e.pageX - e.target.offsetLeft;
        // let mouseY = e.pageY - e.target.offsetTop;
        let layerX = e.layerX - item.offsetWidth/2;
        let layerY = e.layerY - item.offsetHeight/2;
        item.style.transform = 'translate(' + layerX / -10 + 'px ,' + layerY / 20 + 'px)' + ' ' + 'scale(' +1.05 +')';
        console.log('layerX: ', e.layerX);
		console.log('layerY: ', e.layerY);
    });
    item.addEventListener('mouseout', e => {
        item.style.transform = 'translate(0px , 0px)' + ' ' + 'scale(' + 1 +')';
    });
});


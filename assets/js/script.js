const layer1 = document.querySelectorAll('.selector');
layer1.forEach(item => {
    // console.log('width: ', item.offsetWidth );
    // console.log('offsetHeight: ', item.offsetHeight );
    item.addEventListener('mousemove', e => {
        // let mouseX = e.pageX - e.target.offsetLeft;
        // let mouseY = e.pageY - e.target.offsetTop;

        // layerX/layerY - устарели надо e.offsetX / e.offsetY
        let layerX = e.layerX - item.offsetWidth/2;
        let layerY = e.layerY - item.offsetHeight/2;
        item.style.transform = 'translate(' + layerX / -10 + 'px ,' + layerY / 20 + 'px)' + ' ' + 'scale(' +1.05 +')';
        // console.log('layerX: ', e.layerX);
		// console.log('layerY: ', e.layerY);
    });
    item.addEventListener('mouseout', e => {
        item.style.transform = 'translate(0px , 0px)' + ' ' + 'scale(' + 1 +')';
        item.style.webkitTransform = 'translate(0px , 0px)' + ' ' + 'scale(' + 1 +')'; //для iOs
        // console.log('webkitTransform: ', item.style.webkitTransform);
    });
});

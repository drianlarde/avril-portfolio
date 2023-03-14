var image = document.getElementsByClassName('me-image');

new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)',
    // Make it strong
    scale: 2
});


document.addEventListener('DOMContentLoaded', function() {
    var menuBar = document.querySelector('.ri-menu-3-line');
    var cross = document.querySelector('.ri-close-line');
    var fullMenu = document.querySelector('#full');

    var tl = gsap.timeline({paused: true});

    tl.to('#menu-bar-gsap', {
        display: 'none',
    })
    .to('#full', {
        right: 0,
    })
    .from('#full h4', {
        x: 140,
        opacity: 0,
        stagger: 0.3,
        duration: 0.4,
    })
    .from('#full i', {
        opacity: 0,
        duration: 0.2,
    });

    menuBar.addEventListener('click', function() {
        tl.play();
    });

    cross.addEventListener('click', function() {
        tl.reverse();
    });
});

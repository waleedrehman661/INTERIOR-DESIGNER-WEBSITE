gsap.from(`#header-content`,{
    y: -5,
    transform: 'scale(0.9)',
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})
gsap.from(`.top-ul-1 li`,{
    y: -4,
    opacity: 0,
    duration: 1,
    delay: 0.7,
    stagger: 0.3,
})
gsap.from(`.top-ul-2 li`,{
    y: -2,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger: 0.3,
})

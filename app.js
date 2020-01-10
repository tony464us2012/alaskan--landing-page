const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');


const tl = new TimelineLite({paused: true, reversed: true});

tl.to('.cover', 1, {
    width: '60%', 
    ease: Power2.easeOut
})
.to('nav', 1, {
    height: '100%',
        ease: Power2.easeOut
}, '-=0.3')
.fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
},
       {
    opacity: 1,
    x: 0,
    onComplete : function(){
        navOpen.style.pointerEvents= 'auto';
    }
})
.to('.cover-date', .2, {
    opacity: 0
})

navButton.addEventListener('click', (e) => {
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        
        return false;
    }
    toggleTween(tl)
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse()
}
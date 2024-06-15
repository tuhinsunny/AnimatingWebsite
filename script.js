var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x -10 + "px";
    crsr.style.top = dets.y -10 + "px";
})
document.addEventListener("mousemove",function(dets){
    crsrBlur.style.left = dets.x - 250 + "px";
    crsrBlur.style.top = dets.y - 250 + "px";
})
gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.5,
    height : "110px",
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1,
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -25%",
        end : "top -70%",
        scrub : 2,
    }
})
document.querySelectorAll('#scroller h4').forEach(element => {
    element.addEventListener('mouseover', function() {
        this.classList.add('hover-effect');
    });
    // Example of removing the class on click elsewhere
    document.addEventListener('click', function() {
        element.classList.remove('hover-effect');
    });
});
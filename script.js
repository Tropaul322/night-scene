let scene = document.querySelector(".scene")
let stars = () => {
    let count = 400;
    i = 0
    while (i < count) {
        let star = document.createElement('i')
        
        setPositionAndAnimation(star);
        
        scene.appendChild(star)
        i++
    } 
}
let setPositionAndAnimation = (star) => {
    let x = Math.floor(Math.random() * window.innerWidth)
    let y = Math.floor(Math.random() * window.innerHeight)
    let size = 1 + Math.random() * 2;
    star.style.left = x +'px'
    star.style.top = y +'px'
    star.style.width = size +'px'
    star.style.height = size +'px';
    setAnimation(star);
    setDuration(star)
}
let setAnimation = (star) => {
    let oposit = Math.floor(Math.random() * 2);
    let direction = Math.floor(Math.random() * 2);
    if (oposit === 0 && direction === 0 ){
        star.style.animation = 'anim1 linear infinite'
    } else if (oposit === 1 && direction === 0 ){
        star.style.animation = 'anim2 linear infinite'
    } else if (oposit === 0 && direction === 1 ){
        star.style.animation = 'anim linear infinite'
    } else {
        star.style.animation = 'anim3 linear infinite'
    }
}
let setDuration = (star) =>{
    let duration = Math.random() * 10;
    star.style.animationDuration = 5+ duration + 's'
}
function targ(e){
    console.log(e.target);
}
let checkWindow = () =>{
    
    scene.innerHTML = "";
    stars()

}
window.addEventListener('resize', checkWindow)

stars();

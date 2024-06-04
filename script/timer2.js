const slider = document.querySelector('.con')
console.log(slider)
let num = 0
// let con_timer = setInterval(con_timer_func, 100)
// function con_timer_func(){
//     num1++
//     for(num1>con.length){
//         num1=0
//         slider_style
//         con[num1].style.opacity = 1}
// }
// //slider 공통 적용 재사용 함수
// let slider_style = () => {
//     for(let i of con)(i.style.opacity = 0)}

// // con(opacity, 0)
// // con(transition, opacity 0.3s)
// // con[0].style.opacity = 1

// let con_style = () => {
//     for(let i of con){i.style.opacity = 0}
// }
// let con_style2 = () => {
//     for(let i of con){i.style.transition = 'opacity 0.3s'}
// }
// con_style()
// con_style2()
let slider_style = (properti, val) => {
    console.log(properti, val)
    for(let i of slider){i.style[properti] = val}
}
let slider_style2 = () => {
    for(let i of slider){i,style.transition = 'opacity 0.3s'}
}
slider_style()
slider_style('transition', opacity)
slider[0].style.opacity = 1
let slide_timer = setInterval(slide_timer_func,1000)
function slide_timer_func(){}

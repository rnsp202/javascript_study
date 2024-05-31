const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
console.log(btn)
btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
    window.scrollTo(0, bg[i].offsetTop)
    })
})
// btn[0].addEventListener('click',()=>{
//     window.scrollTo(0, 0);
// })
// const bg = document.querySelectorAll('.bg')
// btn[1].addEventListener('click',()=>{
//     //특정 객체 위치로 이동 시 먼저 체크해야하는 값!
//     //객체의 위치 속성
//     console.log(bg[1].offsetTop)
//     window.scrollTo(0, bg[1].offsetTop)
//     console.log(btn[1])
// })
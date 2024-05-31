const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo(0, bg[i].offsetTop)
    })
    t.addEventListener('click',()=>{
        window.scrollTo(0, bg[i].offsetTop)
    })
})
//a태그에 javascript event 적용시 주의사항
//a태그는 고유의 href 속성으로 특정 주소로 이동한다는 특징이 있어서 js.click을 하려고 하면 click처리를 먼저 해야하는지, href속성 처리를 먼저 해야하는지 구분을 못해 스크롤이 위로 올라가는 문제 발생
//a태그에 js click  이벤트를 줄 때 href 속성의 기능ㅇ을 막아야 정상 작동된다.
/* 
nav_a.forEach((target, index)=>{
    console.long(target, index)
    target.addEventlist()dext
})
*/
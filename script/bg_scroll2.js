const pst = document.querySelector('.pst')
const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
const line = document.querySelectorAll('.line a')
console.log(pst, btn, bg, line)
line[0].classList.add('on')
btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
    window.scrollTo(0, bg[i].offsetTop)
    })
    t.addEventListener('mouseover',()=>{
        t.style.borderBottom = '1px solid rgb(217, 233, 214)'
    })
    t.addEventListener('mouseout',()=>{
        t.style.borderBottom = '0'
    })
})
window.addEventListener('scroll', function(){
    line.forEach((target, index)=>{
        if(bg[index].getBoundingClientRect().y <= 400){
            on_reset()
            target.classList.add('on')
        }
    })
})
function on_reset(){for(let i of line){i.classList.remove('on')}}
//마우스 따라다니는 이벤트
const circle =  document.querySelector('.mouse')
console.log(circle)
window.addEventListener('mousemove',(e)=>{
    // console.log(e.clientX, e.clientY)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})
/* window mousemove 좌표 인식하는 매개변수 종류
1. screenX,Y : 사용자 모니터 화면 기준으로 좌표 표시
2. clientX,Y : 웹브라우저의 뷰포트 크기 기준으로 좌표 표시
3. offsetX,Y : 객체(노드) 위치 기준으로 좌표 표시
2. pageX,Y : 전체 세로 길이 포함 문서 기준으로 좌표 표시
*/
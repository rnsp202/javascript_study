//1. 서브 숨기기
//2. gnb 마우스를 올리면
//3. sub 3개가 모두 출력
//동적 절차 체크 후 HTML 태그 확인 후
//HTML DOM 필요 변수 생성
const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('.gnb > li')
console.log(sub,gnb)

//-------------------------1
sub[0].style.display = 'none'
sub[1].style.display = 'none'
sub[2].style.display = 'none'
//-------------------------2
function subShow(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
}
function subHide(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
}
gnb[0].addEventListener('mouseover',subShow)
gnb[0].addEventListener('mouseout',subHide)
gnb[1].addEventListener('mouseover',subShow)
gnb[1].addEventListener('mouseout',subHide)
gnb[2].addEventListener('mouseover',subShow)
gnb[2].addEventListener('mouseout',subHide)

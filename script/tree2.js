//h1 마우스를 올리면
//"네이버" -> "NAVER" 내용 변경
// const h1 = document.querySelector('h1')
const h1 = document.querySelector('h1')
console.log(h1)
console.log(h1.innerText)
// h1.innerText = 'NAVER'
h1.addEventListener('mouseover',function(){
    h1.innerText = 'NAVER'
})
h1.addEventListener('mouseout',function(){
    h1.innerText = '네이버'
})
//header에 마우스를 올리면
//자식 nav_a 내용 "메뉴" -> "MENU"
const header = document.querySelector('header')
console.log(header)
headerChild = header.childNodes[3].children
console.log(headerChild)
header.addEventListener('mouseover',function(){
    headerChild[0].innerText = 'MENU'
    headerChild[1].innerText = 'MENU'
    headerChild[2].innerText = 'MENU'
    headerChild[3].innerText = 'MENU'
})
console.log(header.children.length)
header.addEventListener('mouseout', function(){
    headerChild[0].innderText = '메뉴'
    headerChild[1].innderText = '메뉴'
    headerChild[2].innderText = '메뉴'
    headerChild[3].innderText = '메뉴'
})
//-------------------------------------------
//childNode[n], children[n] == 부모 자식:nth-child
//firstChild, firstElementChild == first-child, last-child
const nav = document.querySelector('nav')
console.log(nav)
console.log(nav.firstChild)
console.log(nav.firstElementChild)
console.log(nav.firstElementChild.innerText)
console.log(nav.lastElementChild)
console.log(nav.lastElementChild.innerText)
//형제 관계 (+)
//js 이전 다음 형제 모두 처리 가능
//nextSibling 공백포함 다음 형제 속성
//nextElementSibling 다음 형제 요소만 인식 속성
//previousSibling 공백포함 이전 형제 속성
//previousElementSibling 이전 형제 요소만 인식 속성
const nav_a = document.querySelectorAll('nav a')
console.log(nav_a)
//Q. 메뉴2의 이전형제 메뉴1을 선택해서 배경색 노랑 변경
console.log(nav_a[1].previousElementSibling)
nav_a[1].previousElementSibling.style.backgroundColor = 'yellow'
//Q. 메뉴2의 다음형제 메뉴4를 선택해서 배경색 aqua 변경
nav_a[1].nextElementSibling.nextElementSibling.style.backgroundColor = 'aqua'
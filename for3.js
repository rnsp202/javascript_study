//ES6 for (DOM)
const txt = ['html', 'css', 'javascript']
console.log(txt)
//ES5 for
for(let i=0; i<txt.length; i++){
    console.log(txt[i])
}
//ES6 for (DOM)
//for~in(인덱스 활용), for~of(DOM 객체 활용)
for(let i in txt){console.log(i)}
console.log('-----------------------')
for(let i of txt){console.log(i)}
console.log('-----------------------')
const abc = 'abcdefg'
console.log(abc)
for(let i in abc){console.log(i)}
for(let i of abc){console.log(i)}
//==================================
console.log('-----------------------')
//객체, 배열, ES6 반복문 for
const user = [
    {
    name: '홍길동',
    age: 20,
    id: 'hong',
    pw: 1234
    }, {
    name: '이길동',
    age: 20,
    id: 'lee',
    pw: 1234
    }, {
    name: '김길동',
    age: 20,
    id: 'kim',
    pw: 1234
    },
]
for(let i in user){console.log(i)} //0,1,2
for(let i of user){console.log(i)} //0,1,2 객체정보
for(let i of user){
    console.log(i.name)
    console.log(i.age)
    console.log(i.id)
    console.log(i.pw)
} 
//DOM 이벤트 활용 for
//==================================
// for x ver
// const q = document.querySelectorAll('.q')
// console.log(q)
// q[0].addEventListener('click',()=>{
//     q[0].nextElementSibling.classList.toggle('on')
// })
// q[1].addEventListener('click',()=>{
//     q[1].nextElementSibling.classList.toggle('on')
// })
// q[2].addEventListener('click',()=>{
//     q[2].nextElementSibling.classList.toggle('on')
// })
//==================================
const q = document.querySelectorAll('.q')
console.log(q)
const a = document.querySelectorAll('.a')
console.log(a)
// for(let i of q){
//     i.addEventListener('click',()=>{
//         i.nextElementSibling.classList.toggle('on')
// })}
//==================================
for(let i of a){i.style.display='none'}
for(let i of q){
    i.addEventListener('click',()=>{
        for(let k of q){k.classList.remove('active')}
        for(let j of a){j.style.display='none'}
        //클릭한 제목의 다음 형제 내용만 열기
        i.classList.add('active')
        i.nextElementSibling.style.display='block'
})}

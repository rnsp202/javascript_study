//함수
//매개변수, 화살표 함수(ES6)

//기본함수 기법
function func1(num1, num2){
    console.log(num1+num2)
}
func1(1,2)
//화살표 함수
//화살표 함수는 function 키워드가 생략되므로 function 뒤에 작성하는 함수 이름도 쓸 수 없기 때문에 익명함수라고 부른다. 대신 함수는 함수이름으로 호출하지 않으면 사용할 수 없기 때문에 function 뒤에 작성하던 함수명을 const 또는 let을 활용하여 변수로 대신 사용한다.
const func2 = (num1,num2) => {
    console.log(num1+num2)
}
func2(3,4)
//--------------------------------------
//2~9단 구구단 모두 result 줄바꿈으로 출력하기
//2*2=4
//2*3
//2*4
//함수명 dan99
//매개변수 반드시 1개 이상 생성
//함수, 변수, 복합대입연산자, 태그 내용 삽입 속성 활용
// const nDan = (num) => {
//     console.log(
//         `${num}*1=${num*1}
// ${num}*2=${num*2}
// ${num}*3=${num*3}
// ${num}*4=${num*4}
// ${num}*5=${num*5}
// ${num}*6=${num*6}
// ${num}*7=${num*7}
// ${num}*8=${num*8}
// ${num}*9=${num*9}`
//     )
// }
// nDan(2), nDan(3), nDan(4), nDan(5)
// nDan(6)
// nDan(7)
// nDan(8)
// nDan(9)
// //얘는 되는데 왜 아래는 안되지
// //음! 모르겠다!
// const dan99 = [
//     {

//     },{}
// ]
// let item =''
// const result = document.querySelector('.result')
// console.log(item,result)
// item = `<dl>`
// item += `<dd>${dan99(2)}</dd>`
// item += `</dl>`
// console.log(item)
// result.innerHTML = item
const result = document.querySelector('.result')
let total = "";
function dan99(num){
    total = `${num}x1=${num*1}<br>`
    total += `${num}*2=${num*2}<br>`
    total += `${num}*3=${num*3}<br>`
    total += `${num}*4=${num*4}<br>`
    total += `${num}x5=${num*5}<br>`
    total += `${num}x6=${num*6}<br>`
    total += `${num}x7=${num*7}<br>`
    total += `${num}x8=${num*8}<br>`
    total += `${num}x9=${num*9}<br>`
    console.log(total)
    result.innerHTML += total
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)
console.log('---------------------------')
//매개변수, ES6 화살표함수, 리턴(함수 내에 값을 밖으로 반환)
// function func3(a){
//     console.log(a+5)
// }
// function func3_1(a){
//     document.write(a+5)
// }
// function func3_2(a){
//     window.alert(a+5)
// }
// func3(10)
//(위)리턴이 없는 함수
//(아래)리턴이 있는 함수
const func4 = (a) => {return a+5}
func4(10)
console.log(func4(10))
result.innerHTML = func4(10)
// alert(func4)

console.log('---------------------------')
let n1 = 10
let n2 = 20
function func5(a,b){
    n1 += n2 //30
    n2 = a+b //6
    n1 += n2 //36
    return n1
}
console.log(func5(2,4))
//함수의 return은 함수 내의 표현식 중 원하는 결과값만 함수 호출 위치에서 반환하여 사용할 수 있기 때문에 필수 속성으로 사용한다.
const p_result = document.querySelectorAll('p.result')
const errorBtn = document.querySelector('#error')
console.log(p_result[0],errorBtn)
function error_message(){
    return '잘못클릭하셨습니다.'
}
console.log(error_message())
errorBtn.addEventListener('click',()=>{
    p_result[0].innerText = error_message()})
//동의 버튼 클릭 시 result 위치에 "동의하셨습니다."
//비동의 버튼 클릭 시 result 위치에 "비동의하셨습니다."
console.log(p_result[1])
const aBtn = document.querySelector('#agree')
const dBtn = document.querySelector('#disagree')
console.log(aBtn,dBtn)
function agree_massage(){
    return '동의하셨습니다.'
}
function disagree_massage(){
    return '비동의하셨습니다.'
}
aBtn.addEventListener('click',()=>{
    p_result[1].innerText = agree_massage()
})
dBtn.addEventListener('click',()=>{
    p_result[1].innerText = disagree_massage()
})
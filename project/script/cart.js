//item_wrap  안 자식 item의 개수를 top의 total_num 출력
//item_wrap 안 자식 item의 개수 <= 콘솔 출력
const item_wrap = document.querySelector('.item_wrap')
console.log(item_wrap.childElementCount)
console.log(item_wrap.children.length)
//itme의 개수를 top의 total_num 출력
const total_num = document.querySelector('.total_num')
total_num.innerText = item_wrap.childElementCount
//장바구니 수량설정하기
//1. 기본수량 1
//DOM 기본 태그 및 내용 추가 innerText, innerHTML
//input, textarea 입력 수정,읽기 value 속성
// const countInput = document.querySelector('#count')
// let count = 1
// console.log(countInput)
// countInput.value = count
//2. plus 버튼 클릭시 count가 1씩 증가
// const plusBtn = document.querySelector('#plus')
// console.log(plusBtn)
// plusBtn.addEventListener('click',()=>{
//     //count++; //조건 없이 무조건 1씩 증가
//     count < 10 ? count++ : alert('최대 구매 수량입니다.')
//     console.log(count)
//     countInput.value = count
//     //최대 구매 수량 10개 삼항조건연산자 조건?참결과:거짓결과
//     //10개 이상 수량 변경 시 '최대 구매 수량입니다'메세지 출력
// })
// const minusBtn = document.querySelector('#minus')
// console.log(minusBtn)
// minusBtn.addEventListener('click',()=>{
//     count > 1 ? count-- : alert('최소 구매 수량입니다.')
//     console.log(count)
//     countInput.value = count
// })
const countInput = document.querySelector('#count')
const original_price = document.querySelector('.original_price')
let count = 1
let price = 1000; //가격변수
let rate = 10
console.log(countInput)
countInput.value = count
original_price.innerText = `${price.toLocaleString('ko-kr')}원`
const plusBtn = document.querySelector('#plus')
console.log(plusBtn)
const minusBtn = document.querySelector('#minus')
console.log(minusBtn)

const plusfunc = () => {
    count < 10 ? count++ : alert('최대 구매 수량입니다.')
    console.log(count)
    countInput.value = count
    original_price_func()
    total_price_func()
    //증가되는 count 변수를 활용 price 변수를 이용해서
    //original_price 변수 수량에 따른 가격 출력
}
const minusfunc = () => {
    count > 1 ? count-- : alert('최소 구매 수량입니다.')
    console.log(count)
    countInput.value = count
    original_price_func()
    total_price_func()
}
function original_price_func(){
    total = price*count
    original_price.innerText = `${total.toLocaleString('ko-kr')}원`
}
plusBtn.addEventListener('click', plusfunc)
minusBtn.addEventListener('click', minusfunc)
const totalPrice = document.querySelector('.total_price')
totalPrice2 = (price*count)*((100-rate)/100)
totalPrice.value = totalPrice2
totalPrice.innerText = `${totalPrice2.toLocaleString('ko-kr')}원`
function total_price_func(){
    totalPrice2 = (price*count)*((100-rate)/100)
    totalPrice.value = totalPrice2
    totalPrice.innerText = `${totalPrice2.toLocaleString('ko-kr')}원`
}